var reactEvents = ["onAbort", "onAnimationCancel", "onAnimationEnd", "onAnimationIteration", "onAuxClick", "onBlur",
  "onChange", "onClick", "onClose", "onContextMenu", "onDoubleClick", "onError", "onFocus", "onGotPointerCapture",
  "onInput", "onKeyDown", "onKeyPress", "onKeyUp", "onLoad", "onLoadEnd", "onLoadStart", "onLostPointerCapture",
  "onMouseDown", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onPointerCancel", "onPointerDown",
  "onPointerEnter", "onPointerLeave", "onPointerMove", "onPointerOut", "onPointerOver", "onPointerUp", "onReset",
  "onResize", "onScroll", "onSelect", "onSelectionChange", "onSelectStart", "onSubmit", "onTouchCancel",
  "onTouchMove", "onTouchStart", "onTransitionCancel", "onTransitionEnd", "onDrag", "onDragEnd", "onDragEnter",
  "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onFocusOut"
];

var divergentNativeEvents = {
  onDoubleClick: 'dblclick'
};

var mimickedReactEvents = {
  onInput: 'onChange',
  onFocusOut: 'onBlur',
  onSelectionChange: 'onSelect'
};

export default function(rootEl) {
  let parentEl = rootEl;
  let shadowRoot = rootEl;
  //Check if the element is inside a shadowDOM
  while(parentEl && parentEl.nodeType != Node.DOCUMENT_FRAGMENT_NODE) {
    parentEl = parentEl.parentNode;
  }
  shadowRoot = parentEl;
  //If parentEl is found then it is inside a shadowDOM

  if(parentEl) {
    //check if this shadowDOM is the top most shadowDOM in the component tree.
    parentEl = parentEl.host;
    while(parentEl && parentEl.nodeType != Node.DOCUMENT_FRAGMENT_NODE) {
      parentEl = parentEl.parentNode;
    }
    //If not top most, don't retarget the events as the parent shadowDOM should have been
    //bound to events already
    if(!parentEl) {
      _retargetEvents(shadowRoot);
    }
  }
  //Else it is not inside a shadowDOM so no need to rebind the events.
};

function _eventWithUpdatedTarget(evt, ntarget) {
  var newTarget = ntarget;
  return new (function(ev) {
        const initialEvent = ev;
        return {
          get: (target, prop) => {
            switch(prop) {
              case 'target':
                return newTarget ? newTarget : initialEvent.target;
              case 'preventDefault':
                return function() { ev.preventDefault(); }
              case 'stopPropagation':
                  return function() { ev.stopPropagation(); }
              default:
                return target[prop];
            }
          }
        };
      })(evt);
}

function _retargetEvents(shadowRootEl) {
  reactEvents.forEach(function(reactEventName) {

    var nativeEventName = getNativeEventName(reactEventName);

    shadowRootEl.addEventListener(nativeEventName, function(event) {

      var path = (event.composedPath && event.composedPath()) || composedPath(event.target);

      for (var i = 0; i < path.length; i++) {

        var el = path[i];
        var reactComponent = findReactComponent(el);
        var props = findReactProps(reactComponent);

        if (reactComponent && props) {
          let evt = new Proxy(event, _eventWithUpdatedTarget(event, reactComponent.stateNode));
          if(mimickedReactEvents[reactEventName]) {
            dispatchEvent(evt, mimickedReactEvents[reactEventName], props);
          }else {
            dispatchEvent(evt, reactEventName, props);
          }
        }

        if (event.cancelBubble) {
          break;
        }

        if (el === shadowRootEl) {
          break;
        }
      }
    }, false);
  });
}

function findReactComponent(item) {
  for (var key in item) {
    if (item.hasOwnProperty(key) && key.indexOf('_reactInternal') !== -1) {
      return item[key];
    }
  }
}

function findReactProps(component) {
  if (!component) return undefined;
  if (component.memoizedProps) return component.memoizedProps; // React 16 Fiber
  if (component._currentElement && component._currentElement.props) return component._currentElement.props; // React <=15

}

function dispatchEvent(event, eventType, componentProps, newTarget) {
  if (componentProps[eventType]) {

    // let propKeys = Object.keys(componentProps)
    //                      .filter((key) => typeof componentProps[key] != "function" && typeof componentProps[key] != "object")
    // if(propKeys && event.target) {
    //   propKeys.forEach((propKey) => {
    //     event.target.setAttribute(propKey, componentProps[propKey]);
    //   });
    // }
    componentProps[eventType](event);
  }
}

function getNativeEventName(reactEventName) {
  if (divergentNativeEvents[reactEventName]) {
    return divergentNativeEvents[reactEventName];
  }
  return reactEventName.replace(/^on/, '').toLowerCase();
}

function composedPath(el) {
  var path = [];
  while (el) {
    path.push(el);
    if (el.tagName === 'HTML') {
      path.push(document);
      path.push(window);
      return path;
    }
    el = el.parentElement;
  }
}
