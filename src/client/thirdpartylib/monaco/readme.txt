Copy the vs directory from the npm module of monaco-editor@0.12.0

Changes -
  1. Inspired from
      https://github.com/paulvarache/monaco-editor-element and
      https://github.com/Microsoft/monaco-editor/issues/308,
    updated the minified file /thirdpartylib/monaco/min/vs/editor/editor.main.js with the isInDOM method.

  2. And in SrsteeIDE.js component definition, added editorDidMount function prop that will be called from the
  MonacoEditor react component. Handled the injection of styles from editor to the shadowRoot.

  3. In the RootLoader.js, added the script "/thirdpartylib/monaco/min/vs/customPolyfill.js" to be loaded to enable the click and edit on the editor functionality.

  4. Changed the path for "vs" in SrsteeIDE component to refer to thirdpartylib/monaco instead.
