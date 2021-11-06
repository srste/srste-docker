(function (window) {
    window._getCharWidth = function (char, font) {
        var cacheKey = char + font;
        if (window._getCharWidth._cache[cacheKey]) {
            return window._getCharWidth._cache[cacheKey];
        }
        var context = window._getCharWidth._canvas.getContext("2d");
        context.font = font;
        var metrics = context.measureText(char);
        var width = metrics.width;
        window._getCharWidth._cache[cacheKey] = width;
        return width;
    }

    window._getCharWidth._cache = {};
    window._getCharWidth._canvas = document.createElement('canvas');
})(window);

// Dynamically polyfill the `caretRangeFromPoint` method
if (typeof ShadowRoot.prototype.caretRangeFromPoint === 'undefined') {
    /**
     * The `best I can do` polyfill for this method
     */
    ShadowRoot.prototype.caretRangeFromPoint = function (x, y) {
        // Get the element under the point
        var el = this.elementFromPoint(x, y);

        // Get the last child of the element until its firstChild is a text node
        // This assumes that the pointer is on the right of the line, out of the tokens
        // and that we want to get the offset of the last token of the line
        while (el.firstChild.nodeType !== el.firstChild.TEXT_NODE) {
            el = el.lastChild;
        }

        // Grab its rect
        var rect = el.getBoundingClientRect();
        // And its font
        var font = window.getComputedStyle(el, null).getPropertyValue('font');

        // And also its txt content
        var text = el.innerText;

        // Poisition the pixel cursor at the left of the element
        var pixelCursor = rect.left;
        var offset = 0;
        var step;

        // If the point is on the right of the box put the cursor after the last character
        if (x > rect.left + rect.width) {
            offset = text.length;
        } else {
            // Goes through all the characters of the innerText, and checks if the x of the point
            // belongs to the character.
            for (var i = 0; i < text.length + 1; i++) {
                // The step is half the width of the character
                step = window._getCharWidth(text.charAt(i), font) / 2;
                // Move to the center of the character
                pixelCursor += step;
                // If the x of the point is smaller that the position of the cursor, the point is over that character
                if (x < pixelCursor) {
                    offset = i;
                    foundPos = true;
                    break;
                }
                // Move between the current character and the next
                pixelCursor += step;
            }
        }

        // Creates a range with the text node of the element and set the offset found
        var range = document.createRange();
        range.setStart(el.firstChild, offset);
        range.setEnd(el.firstChild, offset);

        return range;
    };
}
