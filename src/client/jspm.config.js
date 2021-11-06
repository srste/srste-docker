SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:react@16.12.0": "thirdpartylib/react.min.js",
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "baseURL": "/",
    "bundles": {
      "build.js": [
        "src/index.js"
      ]
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "blacklist": [],
    "react": true,
    "stage1": true,
    "plugins": [
      "jspm_packages/npm/babel-plugin-transform-custom-element-classes@0.1.0/lib/index",
      "jspm_packages/npm/babel-plugin-transform-es2015-classes@6.24.1/lib/index"
    ]
  },
  sassPluginOptions: {
    "autoprefixer": true,
    "sassOptions": {}
  },
  map: {
    "lodash.debounce": "npm:lodash.debounce@4.0.8",
    "sass": "github:dougludlow/plugin-sass@0.6.0",
    "styled-jsx": "npm:styled-jsx@3.2.5",
    "vs": "thirdpartylib/monaco/min/vs",
    "thirdpartylib": "/thirdpartylib"
  },
  packages: {
    "npm.*": {
      "defaultExtension": "json"
    },
    "vs": {
      "defaultExtension": "js"
    },
    "npm:styled-jsx@3.2.5": {
      "map": {
        "@babel/types": "npm:@babel/types@7.8.3",
        "loader-utils": "npm:loader-utils@1.2.3",
        "stylis": "npm:stylis@3.5.4",
        "stylis-rule-sheet": "npm:stylis-rule-sheet@0.0.10",
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "convert-source-map": "npm:convert-source-map@1.7.0",
        "string-hash": "npm:string-hash@1.1.3",
        "source-map": "npm:source-map@0.7.3"
      }
    }
  },
  devConfig: {
    "map": {
      "plugin-babel-runtime": "npm:babel-runtime@5.8.38",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25",
      "react-codemirror": "npm:react-codemirror@1.0.0",
      "readable-stream": "npm:readable-stream@2.3.6",
      "carbon-addons-cloud-react": "npm:carbon-addons-cloud-react@2.0.3",
      "window-or-global": "npm:window-or-global@1.0.1",
      "lodash.isequal": "npm:lodash.isequal@4.5.0",
      "invariant": "npm:invariant@2.2.4",
      "lodash.set": "npm:lodash.set@4.3.2",
      "deep-equal": "npm:deep-equal@2.0.3",
      "@ant-design/icons": "npm:@ant-design/icons@2.1.1",
      "@marionebl/styled-components": "npm:@marionebl/styled-components@3.3.2",
      "@types/glob": "npm:@types/glob@7.1.3",
      "@types/googlemaps": "npm:@types/googlemaps@3.39.13",
      "@types/markerclustererplus": "npm:@types/markerclustererplus@2.1.33",
      "codeceptjs": "npm:codeceptjs@2.6.10",
      "compute-scroll-into-view": "npm:compute-scroll-into-view@1.0.13",
      "copy-to-clipboard": "npm:copy-to-clipboard@3.3.1",
      "gridstack": "npm:gridstack@0.4.0",
      "image-carousel": "npm:image-carousel@1.0.0",
      "immutable": "npm:immutable@3.8.2",
      "jquery-ui-sortable": "npm:jquery-ui-sortable@1.0.0",
      "lodash.get": "npm:lodash.get@4.4.2",
      "mocha": "npm:mocha@6.2.3",
      "nanoid": "npm:nanoid@2.1.11",
      "react-awesome-query-builder": "npm:react-awesome-query-builder@1.3.7",
      "react-blockly-drawer": "npm:react-blockly-drawer@1.6.6",
      "react-click-outside": "npm:react-click-outside@3.0.1",
      "react-copy-to-clipboard": "npm:react-copy-to-clipboard@5.0.2",
      "react-custom-scrollbars": "npm:react-custom-scrollbars@4.2.1",
      "react-geolocated": "npm:react-geolocated@3.0.1",
      "react-google-maps": "npm:react-google-maps@9.4.5",
      "react-gridstack": "npm:react-gridstack@0.1.4",
      "react-highcharts": "npm:react-highcharts@16.1.0",
      "react-iframe": "npm:react-iframe@1.8.0",
      "react-immutable-proptypes": "npm:react-immutable-proptypes@2.2.0",
      "react-json-view": "npm:react-json-view@1.19.1",
      "react-querybuilder": "npm:react-querybuilder@3.1.2",
      "react-responsive-carousel": "npm:react-responsive-carousel@3.2.7",
      "react-styled-shadow-dom": "npm:react-styled-shadow-dom@1.0.0",
      "react-trello": "npm:react-trello@2.2.5",
      "systemjs-plugin-vue": "npm:systemjs-plugin-vue@1.2.0",
      "testcafe": "npm:testcafe@1.9.1",
      "transit-js": "npm:transit-js@0.8.861",
      "carbon-addons-cloud": "npm:carbon-addons-cloud@4.0.1",
      "downshift": "npm:downshift@4.0.5"
    },
    "packages": {
      "npm:react-codemirror@1.0.0": {
        "map": {
          "prop-types": "npm:prop-types@15.7.2",
          "classnames": "npm:classnames@2.2.6",
          "lodash.isequal": "npm:lodash.isequal@4.5.0",
          "lodash.debounce": "npm:lodash.debounce@4.0.8",
          "create-react-class": "npm:create-react-class@15.6.3",
          "codemirror": "npm:codemirror@5.51.0"
        }
      },
      "npm:carbon-addons-cloud-react@2.0.3": {
        "map": {
          "classnames": "npm:classnames@2.2.6",
          "prop-types": "npm:prop-types@15.7.2"
        }
      },
      "npm:deep-equal@2.0.3": {
        "map": {
          "is-arguments": "npm:is-arguments@1.0.4",
          "isarray": "npm:isarray@2.0.5",
          "regexp.prototype.flags": "npm:regexp.prototype.flags@1.3.0",
          "es-abstract": "npm:es-abstract@1.17.7",
          "object-is": "npm:object-is@1.1.3",
          "object-keys": "npm:object-keys@1.1.1",
          "is-date-object": "npm:is-date-object@1.0.2",
          "is-regex": "npm:is-regex@1.1.1",
          "object.assign": "npm:object.assign@4.1.0",
          "side-channel": "npm:side-channel@1.0.2",
          "which-typed-array": "npm:which-typed-array@1.1.2",
          "which-collection": "npm:which-collection@1.0.1",
          "which-boxed-primitive": "npm:which-boxed-primitive@1.0.1",
          "es-get-iterator": "npm:es-get-iterator@1.1.0"
        }
      },
      "npm:side-channel@1.0.2": {
        "map": {
          "es-abstract": "npm:es-abstract@1.17.7",
          "object-inspect": "npm:object-inspect@1.8.0"
        }
      },
      "npm:which-typed-array@1.1.2": {
        "map": {
          "es-abstract": "npm:es-abstract@1.17.7",
          "function-bind": "npm:function-bind@1.1.1",
          "has-symbols": "npm:has-symbols@1.0.1",
          "foreach": "npm:foreach@2.0.5",
          "is-typed-array": "npm:is-typed-array@1.1.3",
          "available-typed-arrays": "npm:available-typed-arrays@1.0.2"
        }
      },
      "npm:es-get-iterator@1.1.0": {
        "map": {
          "is-arguments": "npm:is-arguments@1.0.4",
          "isarray": "npm:isarray@2.0.5",
          "es-abstract": "npm:es-abstract@1.17.7",
          "has-symbols": "npm:has-symbols@1.0.1",
          "is-string": "npm:is-string@1.0.5",
          "is-map": "npm:is-map@2.0.1",
          "is-set": "npm:is-set@2.0.1"
        }
      },
      "npm:which-boxed-primitive@1.0.1": {
        "map": {
          "is-string": "npm:is-string@1.0.5",
          "is-symbol": "npm:is-symbol@1.0.3",
          "is-number-object": "npm:is-number-object@1.0.4",
          "is-boolean-object": "npm:is-boolean-object@1.0.1",
          "is-bigint": "npm:is-bigint@1.0.0"
        }
      },
      "npm:is-typed-array@1.1.3": {
        "map": {
          "foreach": "npm:foreach@2.0.5",
          "has-symbols": "npm:has-symbols@1.0.1",
          "es-abstract": "npm:es-abstract@1.17.7",
          "available-typed-arrays": "npm:available-typed-arrays@1.0.2"
        }
      },
      "npm:which-collection@1.0.1": {
        "map": {
          "is-weakset": "npm:is-weakset@2.0.1",
          "is-map": "npm:is-map@2.0.1",
          "is-weakmap": "npm:is-weakmap@2.0.1",
          "is-set": "npm:is-set@2.0.1"
        }
      },
      "npm:available-typed-arrays@1.0.2": {
        "map": {
          "array-filter": "npm:array-filter@1.0.0"
        }
      },
      "npm:object.assign@4.1.0": {
        "map": {
          "object-keys": "npm:object-keys@1.1.1",
          "function-bind": "npm:function-bind@1.1.1",
          "define-properties": "npm:define-properties@1.1.3",
          "has-symbols": "npm:has-symbols@1.0.1"
        }
      },
      "npm:react-awesome-query-builder@1.3.7": {
        "map": {
          "classnames": "npm:classnames@2.2.6",
          "immutable": "npm:immutable@3.8.2",
          "lodash": "npm:lodash@4.17.20",
          "prop-types": "npm:prop-types@15.7.2",
          "transit-js": "npm:transit-js@0.8.861",
          "transit-immutable-js": "npm:transit-immutable-js@0.7.0",
          "clone": "npm:clone@2.1.2",
          "sqlstring": "npm:sqlstring@2.3.2",
          "moment": "npm:moment@2.27.0",
          "antd": "npm:antd@3.26.16"
        }
      },
      "npm:react-responsive-carousel@3.2.7": {
        "map": {
          "classnames": "npm:classnames@2.2.6",
          "prop-types": "npm:prop-types@15.7.2",
          "react-easy-swipe": "npm:react-easy-swipe@0.0.18"
        }
      },
      "npm:react-querybuilder@3.1.2": {
        "map": {
          "lodash": "npm:lodash@4.17.20",
          "nanoid": "npm:nanoid@2.1.11",
          "prop-types": "npm:prop-types@15.7.2"
        }
      },
      "npm:react-styled-shadow-dom@1.0.0": {
        "map": {
          "react-shadow": "npm:react-shadow@16.3.2"
        }
      },
      "npm:gridstack@0.4.0": {
        "map": {
          "jquery": "npm:jquery@3.5.1",
          "jquery-ui": "npm:jquery-ui@1.12.1",
          "lodash": "npm:lodash@4.17.20"
        }
      },
      "npm:systemjs-plugin-vue@1.2.0": {
        "map": {
          "lru-cache": "npm:lru-cache@4.1.5",
          "postcss": "npm:postcss@5.2.18",
          "postcss-selector-parser": "npm:postcss-selector-parser@2.2.3",
          "falafel": "npm:falafel@1.2.0",
          "cssnano": "npm:cssnano@3.10.0",
          "vue-template-compiler": "npm:vue-template-compiler@2.6.11"
        }
      },
      "npm:react-immutable-proptypes@2.2.0": {
        "map": {
          "invariant": "npm:invariant@2.2.4"
        }
      },
      "npm:react-trello@2.2.5": {
        "map": {
          "classnames": "npm:classnames@2.2.6",
          "immutability-helper": "npm:immutability-helper@2.9.1",
          "prop-types": "npm:prop-types@15.7.2",
          "uuid": "npm:uuid@3.4.0",
          "react-popopo": "npm:react-popopo@2.1.9",
          "autosize": "npm:autosize@4.0.2",
          "trello-smooth-dnd": "npm:trello-smooth-dnd@1.0.0",
          "react-click-outside": "github:tj/react-click-outside@1.1.0"
        }
      },
      "npm:react-json-view@1.19.1": {
        "map": {
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "flux": "npm:flux@3.1.3",
          "react-base16-styling": "npm:react-base16-styling@0.6.0",
          "react-textarea-autosize": "npm:react-textarea-autosize@6.1.0"
        }
      },
      "npm:react-blockly-drawer@1.6.6": {
        "map": {
          "prop-types": "npm:prop-types@15.7.2",
          "react": "npm:react@16.13.1",
          "node-blockly": "npm:node-blockly@1.2.8"
        }
      },
      "npm:react-click-outside@3.0.1": {
        "map": {
          "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.5"
        }
      },
      "npm:@marionebl/styled-components@3.3.2": {
        "map": {
          "css-to-react-native": "npm:css-to-react-native@2.3.2",
          "buffer": "npm:buffer@5.7.0",
          "fbjs": "npm:fbjs@0.8.17",
          "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.5",
          "is-plain-object": "npm:is-plain-object@2.0.4",
          "prop-types": "npm:prop-types@15.7.2",
          "react-is": "npm:react-is@16.13.1",
          "stylis": "npm:stylis@3.5.4",
          "stylis-rule-sheet": "npm:stylis-rule-sheet@0.0.10",
          "supports-color": "npm:supports-color@3.2.3"
        }
      },
      "npm:react-gridstack@0.1.4": {
        "map": {
          "gridstack": "npm:gridstack@0.2.6",
          "jquery": "npm:jquery@2.2.4",
          "lodash": "npm:lodash@4.17.20"
        }
      },
      "npm:react-copy-to-clipboard@5.0.2": {
        "map": {
          "copy-to-clipboard": "npm:copy-to-clipboard@3.3.1",
          "prop-types": "npm:prop-types@15.7.2"
        }
      },
      "npm:react-highcharts@16.1.0": {
        "map": {
          "highcharts": "npm:highcharts@6.2.0"
        }
      },
      "npm:copy-to-clipboard@3.3.1": {
        "map": {
          "toggle-selection": "npm:toggle-selection@1.0.6"
        }
      },
      "npm:react-easy-swipe@0.0.18": {
        "map": {
          "prop-types": "npm:prop-types@15.7.2"
        }
      },
      "npm:gridstack@0.2.6": {
        "map": {
          "jquery": "npm:jquery@3.5.1",
          "lodash": "npm:lodash@4.17.20",
          "jquery-ui": "npm:jquery-ui@1.12.1"
        }
      },
      "npm:falafel@1.2.0": {
        "map": {
          "acorn": "npm:acorn@1.2.2",
          "isarray": "npm:isarray@0.0.1",
          "foreach": "npm:foreach@2.0.5",
          "object-keys": "npm:object-keys@1.1.1"
        }
      },
      "npm:cssnano@3.10.0": {
        "map": {
          "autoprefixer": "npm:autoprefixer@6.7.7",
          "decamelize": "npm:decamelize@1.2.0",
          "has": "npm:has@1.0.3",
          "object-assign": "npm:object-assign@4.1.1",
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1",
          "postcss-minify-gradients": "npm:postcss-minify-gradients@1.0.5",
          "postcss-filter-plugins": "npm:postcss-filter-plugins@2.0.3",
          "postcss-zindex": "npm:postcss-zindex@2.2.0",
          "postcss-minify-params": "npm:postcss-minify-params@1.2.2",
          "postcss-discard-empty": "npm:postcss-discard-empty@2.1.0",
          "postcss-convert-values": "npm:postcss-convert-values@2.6.1",
          "postcss-merge-idents": "npm:postcss-merge-idents@2.1.7",
          "postcss-colormin": "npm:postcss-colormin@2.2.2",
          "defined": "npm:defined@1.0.0",
          "postcss-discard-overridden": "npm:postcss-discard-overridden@0.1.1",
          "postcss-reduce-initial": "npm:postcss-reduce-initial@1.0.1",
          "postcss-normalize-url": "npm:postcss-normalize-url@3.0.8",
          "postcss-reduce-idents": "npm:postcss-reduce-idents@2.4.0",
          "postcss-discard-duplicates": "npm:postcss-discard-duplicates@2.1.0",
          "postcss-reduce-transforms": "npm:postcss-reduce-transforms@1.0.4",
          "postcss-calc": "npm:postcss-calc@5.3.1",
          "postcss-unique-selectors": "npm:postcss-unique-selectors@2.0.2",
          "postcss-merge-longhand": "npm:postcss-merge-longhand@2.0.2",
          "postcss-minify-font-values": "npm:postcss-minify-font-values@1.0.5",
          "postcss-minify-selectors": "npm:postcss-minify-selectors@2.1.1",
          "postcss-discard-comments": "npm:postcss-discard-comments@2.0.4",
          "postcss-normalize-charset": "npm:postcss-normalize-charset@1.1.1",
          "postcss-discard-unused": "npm:postcss-discard-unused@2.2.3",
          "postcss-svgo": "npm:postcss-svgo@2.1.6",
          "postcss-merge-rules": "npm:postcss-merge-rules@2.1.2",
          "postcss-ordered-values": "npm:postcss-ordered-values@2.2.3"
        }
      },
      "npm:flux@3.1.3": {
        "map": {
          "fbjs": "npm:fbjs@0.8.17",
          "fbemitter": "npm:fbemitter@2.1.1"
        }
      },
      "npm:react-textarea-autosize@6.1.0": {
        "map": {
          "prop-types": "npm:prop-types@15.7.2"
        }
      },
      "npm:react-popopo@2.1.9": {
        "map": {
          "prop-types": "npm:prop-types@15.7.2"
        }
      },
      "npm:vue-template-compiler@2.6.11": {
        "map": {
          "he": "npm:he@1.2.0",
          "de-indent": "npm:de-indent@1.0.2"
        }
      },
      "npm:react-base16-styling@0.6.0": {
        "map": {
          "lodash.curry": "npm:lodash.curry@4.1.1",
          "pure-color": "npm:pure-color@1.3.0",
          "base16": "npm:base16@1.0.0",
          "lodash.flow": "npm:lodash.flow@3.5.0"
        }
      },
      "npm:postcss-selector-parser@2.2.3": {
        "map": {
          "uniq": "npm:uniq@1.0.1",
          "flatten": "npm:flatten@1.0.3",
          "indexes-of": "npm:indexes-of@1.0.1"
        }
      },
      "npm:postcss-minify-gradients@1.0.5": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1"
        }
      },
      "npm:postcss-filter-plugins@2.0.3": {
        "map": {
          "postcss": "npm:postcss@5.2.18"
        }
      },
      "npm:postcss-zindex@2.2.0": {
        "map": {
          "has": "npm:has@1.0.3",
          "postcss": "npm:postcss@5.2.18",
          "uniqs": "npm:uniqs@2.0.0"
        }
      },
      "npm:postcss-discard-empty@2.1.0": {
        "map": {
          "postcss": "npm:postcss@5.2.18"
        }
      },
      "npm:postcss-minify-params@1.2.2": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1",
          "alphanum-sort": "npm:alphanum-sort@1.0.2",
          "uniqs": "npm:uniqs@2.0.0"
        }
      },
      "npm:postcss-merge-idents@2.1.7": {
        "map": {
          "has": "npm:has@1.0.3",
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1"
        }
      },
      "npm:postcss-colormin@2.2.2": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1",
          "colormin": "npm:colormin@1.1.2"
        }
      },
      "npm:postcss-reduce-idents@2.4.0": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1"
        }
      },
      "npm:postcss-reduce-transforms@1.0.4": {
        "map": {
          "has": "npm:has@1.0.3",
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1"
        }
      },
      "npm:postcss-discard-overridden@0.1.1": {
        "map": {
          "postcss": "npm:postcss@5.2.18"
        }
      },
      "npm:postcss-normalize-url@3.0.8": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1",
          "normalize-url": "npm:normalize-url@1.9.1",
          "is-absolute-url": "npm:is-absolute-url@2.1.0"
        }
      },
      "npm:postcss-discard-duplicates@2.1.0": {
        "map": {
          "postcss": "npm:postcss@5.2.18"
        }
      },
      "npm:postcss-reduce-initial@1.0.1": {
        "map": {
          "postcss": "npm:postcss@5.2.18"
        }
      },
      "npm:postcss-convert-values@2.6.1": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1"
        }
      },
      "npm:postcss-discard-comments@2.0.4": {
        "map": {
          "postcss": "npm:postcss@5.2.18"
        }
      },
      "npm:postcss-calc@5.3.1": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
          "reduce-css-calc": "npm:reduce-css-calc@1.3.0"
        }
      },
      "npm:postcss-minify-font-values@1.0.5": {
        "map": {
          "object-assign": "npm:object-assign@4.1.1",
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1"
        }
      },
      "npm:postcss-minify-selectors@2.1.1": {
        "map": {
          "has": "npm:has@1.0.3",
          "postcss": "npm:postcss@5.2.18",
          "postcss-selector-parser": "npm:postcss-selector-parser@2.2.3",
          "alphanum-sort": "npm:alphanum-sort@1.0.2"
        }
      },
      "npm:fbemitter@2.1.1": {
        "map": {
          "fbjs": "npm:fbjs@0.8.17"
        }
      },
      "npm:postcss-normalize-charset@1.1.1": {
        "map": {
          "postcss": "npm:postcss@5.2.18"
        }
      },
      "npm:postcss-merge-longhand@2.0.2": {
        "map": {
          "postcss": "npm:postcss@5.2.18"
        }
      },
      "npm:postcss-unique-selectors@2.0.2": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "alphanum-sort": "npm:alphanum-sort@1.0.2",
          "uniqs": "npm:uniqs@2.0.0"
        }
      },
      "npm:postcss-discard-unused@2.2.3": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "uniqs": "npm:uniqs@2.0.0"
        }
      },
      "npm:postcss-svgo@2.1.6": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1",
          "svgo": "npm:svgo@0.7.2",
          "is-svg": "npm:is-svg@2.1.0"
        }
      },
      "npm:postcss-merge-rules@2.1.2": {
        "map": {
          "browserslist": "npm:browserslist@1.7.7",
          "postcss": "npm:postcss@5.2.18",
          "postcss-selector-parser": "npm:postcss-selector-parser@2.2.3",
          "caniuse-api": "npm:caniuse-api@1.6.1",
          "vendors": "npm:vendors@1.0.4"
        }
      },
      "npm:postcss-ordered-values@2.2.3": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1"
        }
      },
      "npm:normalize-url@1.9.1": {
        "map": {
          "object-assign": "npm:object-assign@4.1.1",
          "query-string": "npm:query-string@4.3.4",
          "sort-keys": "npm:sort-keys@1.1.2",
          "prepend-http": "npm:prepend-http@1.0.4"
        }
      },
      "npm:colormin@1.1.2": {
        "map": {
          "has": "npm:has@1.0.3",
          "css-color-names": "npm:css-color-names@0.0.4",
          "color": "npm:color@0.11.4"
        }
      },
      "npm:svgo@0.7.2": {
        "map": {
          "sax": "npm:sax@1.2.4",
          "mkdirp": "npm:mkdirp@0.5.4",
          "whet.extend": "npm:whet.extend@0.9.9",
          "colors": "npm:colors@1.1.2",
          "coa": "npm:coa@1.0.4",
          "csso": "npm:csso@2.3.2",
          "js-yaml": "npm:js-yaml@3.7.0"
        }
      },
      "npm:caniuse-api@1.6.1": {
        "map": {
          "browserslist": "npm:browserslist@1.7.7",
          "caniuse-db": "npm:caniuse-db@1.0.30001055",
          "lodash.memoize": "npm:lodash.memoize@4.1.2",
          "lodash.uniq": "npm:lodash.uniq@4.5.0"
        }
      },
      "npm:reduce-css-calc@1.3.0": {
        "map": {
          "reduce-function-call": "npm:reduce-function-call@1.0.3",
          "math-expression-evaluator": "npm:math-expression-evaluator@1.2.22",
          "balanced-match": "npm:balanced-match@0.4.2"
        }
      },
      "npm:is-svg@2.1.0": {
        "map": {
          "html-comment-regex": "npm:html-comment-regex@1.1.2"
        }
      },
      "npm:color@0.11.4": {
        "map": {
          "clone": "npm:clone@1.0.4",
          "color-convert": "npm:color-convert@1.9.3",
          "color-string": "npm:color-string@0.3.0"
        }
      },
      "npm:reduce-function-call@1.0.3": {
        "map": {
          "balanced-match": "npm:balanced-match@1.0.0"
        }
      },
      "npm:js-yaml@3.7.0": {
        "map": {
          "esprima": "npm:esprima@2.7.3",
          "argparse": "npm:argparse@1.0.10"
        }
      },
      "npm:csso@2.3.2": {
        "map": {
          "source-map": "npm:source-map@0.5.7",
          "clap": "npm:clap@1.2.3"
        }
      },
      "npm:sort-keys@1.1.2": {
        "map": {
          "is-plain-obj": "npm:is-plain-obj@1.1.0"
        }
      },
      "npm:coa@1.0.4": {
        "map": {
          "q": "npm:q@1.5.1"
        }
      },
      "npm:color-string@0.3.0": {
        "map": {
          "color-name": "npm:color-name@1.1.3"
        }
      },
      "npm:clap@1.2.3": {
        "map": {
          "chalk": "npm:chalk@1.1.3"
        }
      },
      "npm:antd@3.26.16": {
        "map": {
          "@ant-design/icons": "npm:@ant-design/icons@2.1.1",
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6",
          "copy-to-clipboard": "npm:copy-to-clipboard@3.3.1",
          "lodash": "npm:lodash@4.17.20",
          "prop-types": "npm:prop-types@15.7.2",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "shallowequal": "npm:shallowequal@1.1.0",
          "warning": "npm:warning@4.0.3",
          "moment": "npm:moment@2.27.0",
          "dom-closest": "npm:dom-closest@0.2.0",
          "css-animation": "npm:css-animation@1.6.1",
          "rc-cascader": "npm:rc-cascader@0.17.5",
          "array-tree-filter": "npm:array-tree-filter@2.1.0",
          "rc-tooltip": "npm:rc-tooltip@3.7.3",
          "rc-upload": "npm:rc-upload@2.9.4",
          "rc-editor-mention": "npm:rc-editor-mention@1.1.13",
          "rc-mentions": "npm:rc-mentions@0.4.2",
          "rc-rate": "npm:rc-rate@2.5.1",
          "rc-util": "npm:rc-util@4.20.5",
          "raf": "npm:raf@3.4.1",
          "rc-calendar": "npm:rc-calendar@9.15.10",
          "react-lazy-load": "npm:react-lazy-load@3.0.13",
          "enquire.js": "npm:enquire.js@2.1.6",
          "rc-checkbox": "npm:rc-checkbox@2.1.8",
          "rc-time-picker": "npm:rc-time-picker@3.7.3",
          "@types/react-slick": "npm:@types/react-slick@0.23.4",
          "rc-progress": "npm:rc-progress@2.5.3",
          "rc-switch": "npm:rc-switch@1.9.0",
          "rc-notification": "npm:rc-notification@3.3.1",
          "rc-dropdown": "npm:rc-dropdown@2.4.1",
          "rc-steps": "npm:rc-steps@3.5.0",
          "rc-collapse": "npm:rc-collapse@1.11.8",
          "is-mobile": "npm:is-mobile@2.2.1",
          "resize-observer-polyfill": "npm:resize-observer-polyfill@1.5.1",
          "rc-tree-select": "npm:rc-tree-select@2.9.4",
          "react-slick": "npm:react-slick@0.25.2",
          "rc-form": "npm:rc-form@2.4.11",
          "rc-resize-observer": "npm:rc-resize-observer@0.1.3",
          "rc-tabs": "npm:rc-tabs@9.7.0",
          "omit.js": "npm:omit.js@1.0.2",
          "@ant-design/create-react-context": "npm:@ant-design/create-react-context@0.2.5",
          "rc-slider": "npm:rc-slider@8.7.1",
          "@ant-design/icons-react": "npm:@ant-design/icons-react@2.0.1",
          "rc-dialog": "npm:rc-dialog@7.6.1",
          "rc-trigger": "npm:rc-trigger@2.6.5",
          "rc-drawer": "npm:rc-drawer@3.1.3",
          "rc-animate": "npm:rc-animate@2.11.1",
          "rc-menu": "npm:rc-menu@7.5.5",
          "rc-pagination": "npm:rc-pagination@1.20.14",
          "rc-tree": "npm:rc-tree@2.1.4",
          "rc-input-number": "npm:rc-input-number@4.5.7",
          "rc-select": "npm:rc-select@9.2.3",
          "rc-table": "npm:rc-table@6.10.15"
        }
      },
      "npm:rc-util@4.20.5": {
        "map": {
          "prop-types": "npm:prop-types@15.7.2",
          "react-is": "npm:react-is@16.13.1",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "shallowequal": "npm:shallowequal@1.1.0",
          "add-dom-event-listener": "npm:add-dom-event-listener@1.1.0"
        }
      },
      "npm:rc-calendar@9.15.10": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6",
          "prop-types": "npm:prop-types@15.7.2",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "moment": "npm:moment@2.27.0",
          "rc-util": "npm:rc-util@4.20.5",
          "rc-trigger": "npm:rc-trigger@2.6.5"
        }
      },
      "npm:css-animation@1.6.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "component-classes": "npm:component-classes@1.2.6"
        }
      },
      "npm:rc-tooltip@3.7.3": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "prop-types": "npm:prop-types@15.7.2",
          "rc-trigger": "npm:rc-trigger@2.6.5"
        }
      },
      "npm:rc-rate@2.5.1": {
        "map": {
          "classnames": "npm:classnames@2.2.6",
          "prop-types": "npm:prop-types@15.7.2",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "rc-util": "npm:rc-util@4.20.5"
        }
      },
      "npm:rc-mentions@0.4.2": {
        "map": {
          "classnames": "npm:classnames@2.2.6",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "rc-util": "npm:rc-util@4.20.5",
          "@ant-design/create-react-context": "npm:@ant-design/create-react-context@0.2.5",
          "rc-trigger": "npm:rc-trigger@2.6.5",
          "rc-menu": "npm:rc-menu@7.5.5"
        }
      },
      "npm:rc-editor-mention@1.1.13": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6",
          "draft-js": "npm:draft-js@0.10.5",
          "immutable": "npm:immutable@3.7.6",
          "prop-types": "npm:prop-types@15.7.2",
          "dom-scroll-into-view": "npm:dom-scroll-into-view@1.2.1",
          "rc-editor-core": "npm:rc-editor-core@0.8.10",
          "rc-animate": "npm:rc-animate@2.11.1"
        }
      },
      "npm:raf@3.4.1": {
        "map": {
          "performance-now": "npm:performance-now@2.1.0"
        }
      },
      "npm:react-lazy-load@3.0.13": {
        "map": {
          "lodash.debounce": "npm:lodash.debounce@4.0.8",
          "lodash.throttle": "npm:lodash.throttle@4.1.1",
          "prop-types": "npm:prop-types@15.7.2",
          "eventlistener": "npm:eventlistener@0.0.1"
        }
      },
      "npm:rc-cascader@0.17.5": {
        "map": {
          "array-tree-filter": "npm:array-tree-filter@2.1.0",
          "prop-types": "npm:prop-types@15.7.2",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "warning": "npm:warning@4.0.3",
          "rc-util": "npm:rc-util@4.20.5",
          "shallow-equal": "npm:shallow-equal@1.2.1",
          "rc-trigger": "npm:rc-trigger@2.6.5"
        }
      },
      "npm:rc-checkbox@2.1.8": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6",
          "prop-types": "npm:prop-types@15.7.2",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4"
        }
      },
      "npm:rc-upload@2.9.4": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6",
          "prop-types": "npm:prop-types@15.7.2",
          "warning": "npm:warning@4.0.3"
        }
      },
      "npm:rc-time-picker@3.7.3": {
        "map": {
          "classnames": "npm:classnames@2.2.6",
          "prop-types": "npm:prop-types@15.7.2",
          "raf": "npm:raf@3.4.1",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "moment": "npm:moment@2.27.0",
          "rc-trigger": "npm:rc-trigger@2.6.5"
        }
      },
      "npm:rc-progress@2.5.3": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "prop-types": "npm:prop-types@15.7.2"
        }
      },
      "npm:@types/react-slick@0.23.4": {
        "map": {
          "@types/react": "npm:@types/react@16.9.35"
        }
      },
      "npm:dom-closest@0.2.0": {
        "map": {
          "dom-matches": "npm:dom-matches@2.0.0"
        }
      },
      "npm:rc-switch@1.9.0": {
        "map": {
          "classnames": "npm:classnames@2.2.6",
          "prop-types": "npm:prop-types@15.7.2",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4"
        }
      },
      "npm:rc-notification@3.3.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6",
          "prop-types": "npm:prop-types@15.7.2",
          "rc-util": "npm:rc-util@4.20.5",
          "rc-animate": "npm:rc-animate@2.11.1"
        }
      },
      "npm:rc-dropdown@2.4.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6",
          "prop-types": "npm:prop-types@15.7.2",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "rc-trigger": "npm:rc-trigger@2.6.5"
        }
      },
      "npm:rc-steps@3.5.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6",
          "lodash": "npm:lodash@4.17.20",
          "prop-types": "npm:prop-types@15.7.2"
        }
      },
      "npm:add-dom-event-listener@1.1.0": {
        "map": {
          "object-assign": "npm:object-assign@4.1.1"
        }
      },
      "npm:rc-collapse@1.11.8": {
        "map": {
          "classnames": "npm:classnames@2.2.6",
          "css-animation": "npm:css-animation@1.6.1",
          "prop-types": "npm:prop-types@15.7.2",
          "react-is": "npm:react-is@16.13.1",
          "shallowequal": "npm:shallowequal@1.1.0",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "rc-animate": "npm:rc-animate@2.11.1"
        }
      },
      "npm:rc-tree-select@2.9.4": {
        "map": {
          "classnames": "npm:classnames@2.2.6",
          "prop-types": "npm:prop-types@15.7.2",
          "raf": "npm:raf@3.4.1",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "shallowequal": "npm:shallowequal@1.1.0",
          "warning": "npm:warning@4.0.3",
          "dom-scroll-into-view": "npm:dom-scroll-into-view@1.2.1",
          "rc-util": "npm:rc-util@4.20.5",
          "rc-trigger": "npm:rc-trigger@3.0.0",
          "rc-animate": "npm:rc-animate@2.11.1",
          "rc-tree": "npm:rc-tree@2.1.4"
        }
      },
      "npm:rc-resize-observer@0.1.3": {
        "map": {
          "classnames": "npm:classnames@2.2.6",
          "rc-util": "npm:rc-util@4.20.5",
          "resize-observer-polyfill": "npm:resize-observer-polyfill@1.5.1"
        }
      },
      "npm:rc-editor-core@0.8.10": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6",
          "draft-js": "npm:draft-js@0.10.5",
          "immutable": "npm:immutable@3.8.2",
          "lodash": "npm:lodash@4.17.20",
          "prop-types": "npm:prop-types@15.7.2",
          "setimmediate": "npm:setimmediate@1.0.5"
        }
      },
      "npm:rc-form@2.4.11": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "create-react-class": "npm:create-react-class@15.6.3",
          "hoist-non-react-statics": "npm:hoist-non-react-statics@3.3.2",
          "lodash": "npm:lodash@4.17.20",
          "warning": "npm:warning@4.0.3",
          "dom-scroll-into-view": "npm:dom-scroll-into-view@1.2.1",
          "rc-util": "npm:rc-util@4.20.5",
          "async-validator": "npm:async-validator@1.11.5"
        }
      },
      "npm:react-slick@0.25.2": {
        "map": {
          "classnames": "npm:classnames@2.2.6",
          "enquire.js": "npm:enquire.js@2.1.6",
          "lodash.debounce": "npm:lodash.debounce@4.0.8",
          "resize-observer-polyfill": "npm:resize-observer-polyfill@1.5.1",
          "json2mq": "npm:json2mq@0.2.0"
        }
      },
      "npm:rc-tabs@9.7.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6",
          "lodash": "npm:lodash@4.17.20",
          "prop-types": "npm:prop-types@15.7.2",
          "raf": "npm:raf@3.4.1",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "resize-observer-polyfill": "npm:resize-observer-polyfill@1.5.1",
          "warning": "npm:warning@4.0.3",
          "@ant-design/create-react-context": "npm:@ant-design/create-react-context@0.2.5",
          "rc-util": "npm:rc-util@4.20.5",
          "rc-hammerjs": "npm:rc-hammerjs@0.6.9"
        }
      },
      "npm:rc-dialog@7.6.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "rc-util": "npm:rc-util@4.20.5",
          "rc-animate": "npm:rc-animate@2.11.1"
        }
      },
      "npm:omit.js@1.0.2": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:component-classes@1.2.6": {
        "map": {
          "component-indexof": "npm:component-indexof@0.0.3"
        }
      },
      "npm:@ant-design/create-react-context@0.2.5": {
        "map": {
          "gud": "npm:gud@1.0.0",
          "warning": "npm:warning@4.0.3"
        }
      },
      "npm:@ant-design/icons-react@2.0.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "@ant-design/colors": "npm:@ant-design/colors@3.2.2"
        }
      },
      "npm:rc-slider@8.7.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6",
          "prop-types": "npm:prop-types@15.7.2",
          "rc-tooltip": "npm:rc-tooltip@3.7.3",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "shallowequal": "npm:shallowequal@1.1.0",
          "warning": "npm:warning@4.0.3",
          "rc-util": "npm:rc-util@4.20.5"
        }
      },
      "npm:rc-trigger@2.6.5": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6",
          "prop-types": "npm:prop-types@15.7.2",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "rc-util": "npm:rc-util@4.20.5",
          "rc-animate": "npm:rc-animate@2.11.1",
          "rc-align": "npm:rc-align@2.4.5"
        }
      },
      "npm:rc-trigger@3.0.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6",
          "prop-types": "npm:prop-types@15.7.2",
          "raf": "npm:raf@3.4.1",
          "rc-util": "npm:rc-util@4.20.5",
          "rc-animate": "npm:rc-animate@3.0.0",
          "rc-align": "npm:rc-align@2.4.5"
        }
      },
      "npm:rc-drawer@3.1.3": {
        "map": {
          "classnames": "npm:classnames@2.2.6",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "rc-util": "npm:rc-util@4.20.5"
        }
      },
      "npm:rc-animate@2.11.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6",
          "css-animation": "npm:css-animation@1.6.1",
          "prop-types": "npm:prop-types@15.7.2",
          "raf": "npm:raf@3.4.1",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "rc-util": "npm:rc-util@4.20.5"
        }
      },
      "npm:rc-animate@3.0.0": {
        "map": {
          "classnames": "npm:classnames@2.2.6",
          "raf": "npm:raf@3.4.1",
          "rc-util": "npm:rc-util@4.20.5",
          "@ant-design/css-animation": "npm:@ant-design/css-animation@1.7.2"
        }
      },
      "npm:rc-hammerjs@0.6.9": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "prop-types": "npm:prop-types@15.7.2",
          "hammerjs": "npm:hammerjs@2.0.8"
        }
      },
      "npm:rc-menu@7.5.5": {
        "map": {
          "classnames": "npm:classnames@2.2.6",
          "dom-scroll-into-view": "npm:dom-scroll-into-view@1.2.1",
          "rc-trigger": "npm:rc-trigger@2.6.5",
          "resize-observer-polyfill": "npm:resize-observer-polyfill@1.5.1",
          "shallowequal": "npm:shallowequal@1.1.0",
          "rc-animate": "npm:rc-animate@2.11.1",
          "rc-util": "npm:rc-util@4.20.5",
          "mutationobserver-shim": "npm:mutationobserver-shim@0.3.5",
          "mini-store": "npm:mini-store@2.0.0"
        }
      },
      "npm:rc-tree@2.1.4": {
        "map": {
          "@ant-design/create-react-context": "npm:@ant-design/create-react-context@0.2.5",
          "classnames": "npm:classnames@2.2.6",
          "prop-types": "npm:prop-types@15.7.2",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "warning": "npm:warning@4.0.3",
          "rc-animate": "npm:rc-animate@2.11.1",
          "rc-util": "npm:rc-util@4.20.5"
        }
      },
      "npm:rc-pagination@1.20.14": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6",
          "prop-types": "npm:prop-types@15.7.2",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4"
        }
      },
      "npm:rc-input-number@4.5.7": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6",
          "prop-types": "npm:prop-types@15.7.2",
          "rc-util": "npm:rc-util@4.20.5",
          "rmc-feedback": "npm:rmc-feedback@2.0.0"
        }
      },
      "npm:json2mq@0.2.0": {
        "map": {
          "string-convert": "npm:string-convert@0.2.1"
        }
      },
      "npm:rc-align@2.4.5": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "prop-types": "npm:prop-types@15.7.2",
          "rc-util": "npm:rc-util@4.20.5",
          "dom-align": "npm:dom-align@1.11.1"
        }
      },
      "npm:rc-select@9.2.3": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6",
          "component-classes": "npm:component-classes@1.2.6",
          "dom-scroll-into-view": "npm:dom-scroll-into-view@1.2.1",
          "prop-types": "npm:prop-types@15.7.2",
          "raf": "npm:raf@3.4.1",
          "rc-menu": "npm:rc-menu@7.5.5",
          "rc-trigger": "npm:rc-trigger@2.6.5",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "warning": "npm:warning@4.0.3",
          "rc-animate": "npm:rc-animate@2.11.1",
          "rc-util": "npm:rc-util@4.20.5"
        }
      },
      "npm:rmc-feedback@2.0.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "classnames": "npm:classnames@2.2.6"
        }
      },
      "npm:mini-store@2.0.0": {
        "map": {
          "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.5",
          "prop-types": "npm:prop-types@15.7.2",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "shallowequal": "npm:shallowequal@1.1.0"
        }
      },
      "npm:rc-table@6.10.15": {
        "map": {
          "classnames": "npm:classnames@2.2.6",
          "component-classes": "npm:component-classes@1.2.6",
          "lodash": "npm:lodash@4.17.20",
          "mini-store": "npm:mini-store@2.0.0",
          "prop-types": "npm:prop-types@15.7.2",
          "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
          "rc-util": "npm:rc-util@4.20.5",
          "shallowequal": "npm:shallowequal@1.1.0"
        }
      },
      "npm:@ant-design/colors@3.2.2": {
        "map": {
          "tinycolor2": "npm:tinycolor2@1.4.1"
        }
      },
      "npm:react-custom-scrollbars@4.2.1": {
        "map": {
          "raf": "npm:raf@3.4.1",
          "prop-types": "npm:prop-types@15.7.2",
          "dom-css": "npm:dom-css@2.1.0"
        }
      },
      "npm:dom-css@2.1.0": {
        "map": {
          "add-px-to-style": "npm:add-px-to-style@1.0.0",
          "to-camel-case": "npm:to-camel-case@1.0.0",
          "prefix-style": "npm:prefix-style@2.0.1"
        }
      },
      "npm:react-geolocated@3.0.1": {
        "map": {
          "prop-types": "npm:prop-types@15.7.2"
        }
      },
      "npm:react-google-maps@9.4.5": {
        "map": {
          "can-use-dom": "npm:can-use-dom@0.1.0",
          "recompose": "npm:recompose@0.26.0",
          "warning": "npm:warning@3.0.0",
          "invariant": "npm:invariant@2.2.4",
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "prop-types": "npm:prop-types@15.7.2",
          "lodash": "npm:lodash@4.17.20",
          "google-maps-infobox": "npm:google-maps-infobox@2.0.0",
          "marker-clusterer-plus": "npm:marker-clusterer-plus@2.1.4",
          "markerwithlabel": "npm:markerwithlabel@2.0.2",
          "scriptjs": "npm:scriptjs@2.5.9"
        }
      },
      "npm:@types/markerclustererplus@2.1.33": {
        "map": {
          "@types/google-maps": "npm:@types/google-maps@3.2.2"
        }
      },
      "npm:@types/google-maps@3.2.2": {
        "map": {
          "@types/googlemaps": "npm:@types/googlemaps@3.39.13"
        }
      },
      "npm:codeceptjs@2.6.10": {
        "map": {
          "glob": "npm:glob@6.0.4",
          "lodash.merge": "npm:lodash.merge@4.6.2",
          "mkdirp": "npm:mkdirp@1.0.4",
          "axios": "npm:axios@0.19.2",
          "ms": "npm:ms@2.1.2",
          "figures": "npm:figures@2.0.0",
          "fs-extra": "npm:fs-extra@8.1.0",
          "semver": "npm:semver@6.3.0",
          "envinfo": "npm:envinfo@7.7.3",
          "inquirer": "npm:inquirer@6.5.2",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "lodash.clonedeep": "npm:lodash.clonedeep@4.5.0",
          "fn-args": "npm:fn-args@4.0.0",
          "arrify": "npm:arrify@2.0.1",
          "promise-retry": "npm:promise-retry@1.1.1",
          "chalk": "npm:chalk@1.1.3",
          "commander": "npm:commander@2.20.3",
          "sprintf-js": "npm:sprintf-js@1.1.2",
          "css-to-xpath": "npm:css-to-xpath@0.1.0",
          "resq": "npm:resq@1.8.0",
          "allure-js-commons": "npm:allure-js-commons@1.3.2",
          "requireg": "npm:requireg@0.2.2",
          "mocha-junit-reporter": "npm:mocha-junit-reporter@1.23.3",
          "gherkin": "npm:gherkin@5.1.0",
          "parse-function": "npm:parse-function@5.6.10",
          "@codeceptjs/configure": "npm:@codeceptjs/configure@0.4.1",
          "cucumber-expressions": "npm:cucumber-expressions@6.6.2",
          "js-beautify": "npm:js-beautify@1.13.0",
          "mocha": "npm:mocha@6.2.3"
        }
      },
      "npm:glob@6.0.4": {
        "map": {
          "minimatch": "npm:minimatch@3.0.4",
          "inherits": "npm:inherits@2.0.4",
          "once": "npm:once@1.4.0",
          "path-is-absolute": "npm:path-is-absolute@1.0.1",
          "inflight": "npm:inflight@1.0.6"
        }
      },
      "npm:inquirer@6.5.2": {
        "map": {
          "figures": "npm:figures@2.0.0",
          "strip-ansi": "npm:strip-ansi@5.2.0",
          "string-width": "npm:string-width@2.1.1",
          "lodash": "npm:lodash@4.17.20",
          "chalk": "npm:chalk@2.4.2",
          "through": "npm:through@2.3.8",
          "mute-stream": "npm:mute-stream@0.0.7",
          "cli-cursor": "npm:cli-cursor@2.1.0",
          "run-async": "npm:run-async@2.4.1",
          "cli-width": "npm:cli-width@2.2.1",
          "ansi-escapes": "npm:ansi-escapes@3.2.0",
          "external-editor": "npm:external-editor@3.1.0",
          "rxjs": "npm:rxjs@6.6.2"
        }
      },
      "npm:figures@2.0.0": {
        "map": {
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
        }
      },
      "npm:fs-extra@8.1.0": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.2.4",
          "universalify": "npm:universalify@0.1.2",
          "jsonfile": "npm:jsonfile@4.0.0"
        }
      },
      "npm:axios@0.19.2": {
        "map": {
          "follow-redirects": "npm:follow-redirects@1.5.10"
        }
      },
      "npm:promise-retry@1.1.1": {
        "map": {
          "retry": "npm:retry@0.10.1",
          "err-code": "npm:err-code@1.1.2"
        }
      },
      "npm:strip-ansi@5.2.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@4.1.0"
        }
      },
      "npm:follow-redirects@1.5.10": {
        "map": {
          "debug": "npm:debug@3.1.0"
        }
      },
      "npm:external-editor@3.1.0": {
        "map": {
          "iconv-lite": "npm:iconv-lite@0.4.24",
          "chardet": "npm:chardet@0.7.0",
          "tmp": "npm:tmp@0.0.33"
        }
      },
      "npm:debug@3.1.0": {
        "map": {
          "ms": "npm:ms@2.0.0"
        }
      },
      "npm:cli-cursor@2.1.0": {
        "map": {
          "restore-cursor": "npm:restore-cursor@2.0.0"
        }
      },
      "npm:restore-cursor@2.0.0": {
        "map": {
          "signal-exit": "npm:signal-exit@3.0.3",
          "onetime": "npm:onetime@2.0.1"
        }
      },
      "npm:tmp@0.0.33": {
        "map": {
          "os-tmpdir": "npm:os-tmpdir@1.0.2"
        }
      },
      "npm:allure-js-commons@1.3.2": {
        "map": {
          "fs-extra": "npm:fs-extra@6.0.1",
          "object-assign": "npm:object-assign@4.1.1",
          "mime": "npm:mime@2.4.6",
          "uuid": "npm:uuid@3.4.0",
          "js2xmlparser": "npm:js2xmlparser@3.0.0",
          "file-type": "npm:file-type@7.7.1"
        }
      },
      "npm:fs-extra@6.0.1": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.2.4",
          "jsonfile": "npm:jsonfile@4.0.0",
          "universalify": "npm:universalify@0.1.2"
        }
      },
      "npm:onetime@2.0.1": {
        "map": {
          "mimic-fn": "npm:mimic-fn@1.2.0"
        }
      },
      "npm:requireg@0.2.2": {
        "map": {
          "rc": "npm:rc@1.2.8",
          "nested-error-stacks": "npm:nested-error-stacks@2.0.1",
          "resolve": "npm:resolve@1.7.1"
        }
      },
      "npm:mocha-junit-reporter@1.23.3": {
        "map": {
          "debug": "npm:debug@2.6.9",
          "mkdirp": "npm:mkdirp@0.5.4",
          "strip-ansi": "npm:strip-ansi@4.0.0",
          "md5": "npm:md5@2.3.0",
          "xml": "npm:xml@1.0.1"
        }
      },
      "npm:resq@1.8.0": {
        "map": {
          "fast-deep-equal": "npm:fast-deep-equal@2.0.1"
        }
      },
      "npm:rxjs@6.6.2": {
        "map": {
          "tslib": "npm:tslib@1.13.0"
        }
      },
      "npm:parse-function@5.6.10": {
        "map": {
          "arrify": "npm:arrify@2.0.1",
          "@babel/parser": "npm:@babel/parser@7.12.3"
        }
      },
      "npm:css-to-xpath@0.1.0": {
        "map": {
          "bo-selector": "npm:bo-selector@0.0.10",
          "xpath-builder": "npm:xpath-builder@0.0.7"
        }
      },
      "npm:md5@2.3.0": {
        "map": {
          "is-buffer": "npm:is-buffer@1.1.6",
          "charenc": "npm:charenc@0.0.2",
          "crypt": "npm:crypt@0.0.2"
        }
      },
      "npm:resolve@1.7.1": {
        "map": {
          "path-parse": "npm:path-parse@1.0.6"
        }
      },
      "npm:@codeceptjs/configure@0.4.1": {
        "map": {
          "lodash.merge": "npm:lodash.merge@4.6.2",
          "lodash.mergewith": "npm:lodash.mergewith@4.6.2",
          "webdriverio": "npm:webdriverio@5.23.0"
        }
      },
      "npm:js-beautify@1.13.0": {
        "map": {
          "mkdirp": "npm:mkdirp@1.0.4",
          "glob": "npm:glob@7.1.3",
          "config-chain": "npm:config-chain@1.1.12",
          "nopt": "npm:nopt@5.0.0",
          "editorconfig": "npm:editorconfig@0.15.3"
        }
      },
      "npm:config-chain@1.1.12": {
        "map": {
          "ini": "npm:ini@1.3.5",
          "proto-list": "npm:proto-list@1.2.4"
        }
      },
      "npm:mocha@6.2.3": {
        "map": {
          "glob": "npm:glob@7.1.3",
          "mkdirp": "npm:mkdirp@0.5.4",
          "ms": "npm:ms@2.1.1",
          "supports-color": "npm:supports-color@6.0.0",
          "debug": "npm:debug@3.2.6",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "minimatch": "npm:minimatch@3.0.4",
          "strip-json-comments": "npm:strip-json-comments@2.0.1",
          "log-symbols": "npm:log-symbols@2.2.0",
          "he": "npm:he@1.2.0",
          "js-yaml": "npm:js-yaml@3.13.1",
          "which": "npm:which@1.3.1",
          "find-up": "npm:find-up@3.0.0",
          "growl": "npm:growl@1.10.5",
          "diff": "npm:diff@3.5.0",
          "object.assign": "npm:object.assign@4.1.0",
          "wide-align": "npm:wide-align@1.1.3",
          "ansi-colors": "npm:ansi-colors@3.2.3",
          "yargs-parser": "npm:yargs-parser@13.1.2",
          "browser-stdout": "npm:browser-stdout@1.3.1",
          "yargs": "npm:yargs@13.3.2",
          "node-environment-flags": "npm:node-environment-flags@1.0.5",
          "yargs-unparser": "npm:yargs-unparser@1.6.0",
          "node-glob": "npm:glob@7.1.3",
          "node-supports-color": "npm:supports-color@6.0.0"
        }
      },
      "npm:supports-color@6.0.0": {
        "map": {
          "has-flag": "npm:has-flag@3.0.0"
        }
      },
      "npm:log-symbols@2.2.0": {
        "map": {
          "chalk": "npm:chalk@2.4.2"
        }
      },
      "npm:nopt@5.0.0": {
        "map": {
          "abbrev": "npm:abbrev@1.1.1"
        }
      },
      "npm:cucumber-expressions@6.6.2": {
        "map": {
          "becke-ch--regex--s0-0-v1--base--pl--lib": "npm:becke-ch--regex--s0-0-v1--base--pl--lib@1.4.0"
        }
      },
      "npm:js2xmlparser@3.0.0": {
        "map": {
          "xmlcreate": "npm:xmlcreate@1.0.2"
        }
      },
      "npm:find-up@3.0.0": {
        "map": {
          "locate-path": "npm:locate-path@3.0.0"
        }
      },
      "npm:locate-path@3.0.0": {
        "map": {
          "path-exists": "npm:path-exists@3.0.0",
          "p-locate": "npm:p-locate@3.0.0"
        }
      },
      "npm:yargs-parser@13.1.2": {
        "map": {
          "decamelize": "npm:decamelize@1.2.0",
          "camelcase": "npm:camelcase@5.3.1"
        }
      },
      "npm:editorconfig@0.15.3": {
        "map": {
          "commander": "npm:commander@2.20.3",
          "semver": "npm:semver@5.7.1",
          "sigmund": "npm:sigmund@1.0.1",
          "lru-cache": "npm:lru-cache@4.1.5"
        }
      },
      "npm:yargs@13.3.2": {
        "map": {
          "string-width": "npm:string-width@3.1.0",
          "find-up": "npm:find-up@3.0.0",
          "yargs-parser": "npm:yargs-parser@13.1.2",
          "which-module": "npm:which-module@2.0.0",
          "require-directory": "npm:require-directory@2.1.1",
          "get-caller-file": "npm:get-caller-file@2.0.5",
          "y18n": "npm:y18n@4.0.0",
          "set-blocking": "npm:set-blocking@2.0.0",
          "require-main-filename": "npm:require-main-filename@2.0.0",
          "cliui": "npm:cliui@5.0.0"
        }
      },
      "npm:string-width@3.1.0": {
        "map": {
          "is-fullwidth-code-point": "npm:is-fullwidth-code-point@2.0.0",
          "strip-ansi": "npm:strip-ansi@5.2.0",
          "emoji-regex": "npm:emoji-regex@7.0.3"
        }
      },
      "npm:p-locate@3.0.0": {
        "map": {
          "p-limit": "npm:p-limit@2.3.0"
        }
      },
      "npm:node-environment-flags@1.0.5": {
        "map": {
          "semver": "npm:semver@5.7.1",
          "object.getownpropertydescriptors": "npm:object.getownpropertydescriptors@2.1.0"
        }
      },
      "npm:yargs-unparser@1.6.0": {
        "map": {
          "lodash": "npm:lodash@4.17.20",
          "yargs": "npm:yargs@13.3.2",
          "flat": "npm:flat@4.1.0"
        }
      },
      "npm:p-limit@2.3.0": {
        "map": {
          "p-try": "npm:p-try@2.2.0"
        }
      },
      "npm:cliui@5.0.0": {
        "map": {
          "strip-ansi": "npm:strip-ansi@5.2.0",
          "string-width": "npm:string-width@3.1.0",
          "wrap-ansi": "npm:wrap-ansi@5.1.0"
        }
      },
      "npm:object.getownpropertydescriptors@2.1.0": {
        "map": {
          "define-properties": "npm:define-properties@1.1.3",
          "es-abstract": "npm:es-abstract@1.17.7"
        }
      },
      "npm:wrap-ansi@5.1.0": {
        "map": {
          "ansi-styles": "npm:ansi-styles@3.2.1",
          "strip-ansi": "npm:strip-ansi@5.2.0",
          "string-width": "npm:string-width@3.1.0"
        }
      },
      "npm:webdriverio@5.23.0": {
        "map": {
          "lodash.clonedeep": "npm:lodash.clonedeep@4.5.0",
          "resq": "npm:resq@1.8.0",
          "serialize-error": "npm:serialize-error@5.0.0",
          "lodash.isplainobject": "npm:lodash.isplainobject@4.0.6",
          "lodash.isobject": "npm:lodash.isobject@3.0.2",
          "archiver": "npm:archiver@3.1.1",
          "css-value": "npm:css-value@0.0.1",
          "grapheme-splitter": "npm:grapheme-splitter@1.0.4",
          "rgb2hex": "npm:rgb2hex@0.1.10",
          "lodash.zip": "npm:lodash.zip@4.2.0",
          "webdriver": "npm:webdriver@5.23.0",
          "@wdio/utils": "npm:@wdio/utils@5.23.0",
          "@wdio/repl": "npm:@wdio/repl@5.23.0",
          "@wdio/logger": "npm:@wdio/logger@5.16.10",
          "@wdio/config": "npm:@wdio/config@5.22.4"
        }
      },
      "npm:archiver@3.1.1": {
        "map": {
          "glob": "npm:glob@7.1.6",
          "readable-stream": "npm:readable-stream@3.6.0",
          "archiver-utils": "npm:archiver-utils@2.1.0",
          "async": "npm:async@2.6.3",
          "buffer-crc32": "npm:buffer-crc32@0.2.13",
          "zip-stream": "npm:zip-stream@2.1.3",
          "tar-stream": "npm:tar-stream@2.1.3"
        }
      },
      "npm:serialize-error@5.0.0": {
        "map": {
          "type-fest": "npm:type-fest@0.8.1"
        }
      },
      "npm:archiver-utils@2.1.0": {
        "map": {
          "glob": "npm:glob@7.1.6",
          "graceful-fs": "npm:graceful-fs@4.2.4",
          "readable-stream": "npm:readable-stream@2.3.6",
          "lodash.isplainobject": "npm:lodash.isplainobject@4.0.6",
          "normalize-path": "npm:normalize-path@3.0.0",
          "lazystream": "npm:lazystream@1.0.0",
          "lodash.flatten": "npm:lodash.flatten@4.4.0",
          "lodash.defaults": "npm:lodash.defaults@4.2.0",
          "lodash.union": "npm:lodash.union@4.6.0",
          "lodash.difference": "npm:lodash.difference@4.5.0"
        }
      },
      "npm:zip-stream@2.1.3": {
        "map": {
          "readable-stream": "npm:readable-stream@3.6.0",
          "archiver-utils": "npm:archiver-utils@2.1.0",
          "compress-commons": "npm:compress-commons@2.1.1"
        }
      },
      "npm:lazystream@1.0.0": {
        "map": {
          "readable-stream": "npm:readable-stream@2.3.6"
        }
      },
      "npm:compress-commons@2.1.1": {
        "map": {
          "normalize-path": "npm:normalize-path@3.0.0",
          "readable-stream": "npm:readable-stream@2.3.6",
          "buffer-crc32": "npm:buffer-crc32@0.2.13",
          "crc32-stream": "npm:crc32-stream@3.0.1"
        }
      },
      "npm:flat@4.1.0": {
        "map": {
          "is-buffer": "npm:is-buffer@2.0.4"
        }
      },
      "npm:crc32-stream@3.0.1": {
        "map": {
          "readable-stream": "npm:readable-stream@3.6.0",
          "crc": "npm:crc@3.8.0"
        }
      },
      "npm:tar-stream@2.1.3": {
        "map": {
          "inherits": "npm:inherits@2.0.4",
          "readable-stream": "npm:readable-stream@3.6.0",
          "fs-constants": "npm:fs-constants@1.0.0",
          "end-of-stream": "npm:end-of-stream@1.4.4",
          "bl": "npm:bl@4.0.3"
        }
      },
      "npm:webdriver@5.23.0": {
        "map": {
          "lodash.merge": "npm:lodash.merge@4.6.2",
          "request": "npm:request@2.88.2",
          "@types/request": "npm:@types/request@2.48.5",
          "@wdio/utils": "npm:@wdio/utils@5.23.0",
          "@wdio/logger": "npm:@wdio/logger@5.16.10",
          "@wdio/config": "npm:@wdio/config@5.22.4",
          "@wdio/protocols": "npm:@wdio/protocols@5.22.1"
        }
      },
      "npm:end-of-stream@1.4.4": {
        "map": {
          "once": "npm:once@1.4.0"
        }
      },
      "npm:bl@4.0.3": {
        "map": {
          "buffer": "npm:buffer@5.7.0",
          "inherits": "npm:inherits@2.0.4",
          "readable-stream": "npm:readable-stream@3.6.0"
        }
      },
      "npm:@wdio/repl@5.23.0": {
        "map": {
          "@wdio/utils": "npm:@wdio/utils@5.23.0"
        }
      },
      "npm:@types/request@2.48.5": {
        "map": {
          "form-data": "npm:form-data@2.5.1",
          "@types/caseless": "npm:@types/caseless@0.12.2",
          "@types/tough-cookie": "npm:@types/tough-cookie@4.0.0",
          "@types/node": "npm:@types/node@10.17.28"
        }
      },
      "npm:@wdio/utils@5.23.0": {
        "map": {
          "deepmerge": "npm:deepmerge@4.2.2",
          "@wdio/logger": "npm:@wdio/logger@5.16.10"
        }
      },
      "npm:form-data@2.5.1": {
        "map": {
          "combined-stream": "npm:combined-stream@1.0.8",
          "mime-types": "npm:mime-types@2.1.27",
          "asynckit": "npm:asynckit@0.4.0"
        }
      },
      "npm:crc@3.8.0": {
        "map": {
          "buffer": "npm:buffer@5.7.0"
        }
      },
      "npm:@wdio/logger@5.16.10": {
        "map": {
          "chalk": "npm:chalk@3.0.0",
          "strip-ansi": "npm:strip-ansi@6.0.0",
          "loglevel": "npm:loglevel@1.7.0",
          "loglevel-plugin-prefix": "npm:loglevel-plugin-prefix@0.8.4"
        }
      },
      "npm:chalk@3.0.0": {
        "map": {
          "ansi-styles": "npm:ansi-styles@4.2.1",
          "supports-color": "npm:supports-color@7.2.0"
        }
      },
      "npm:strip-ansi@6.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@5.0.0"
        }
      },
      "npm:supports-color@7.2.0": {
        "map": {
          "has-flag": "npm:has-flag@4.0.0"
        }
      },
      "npm:ansi-styles@4.2.1": {
        "map": {
          "color-convert": "npm:color-convert@2.0.1",
          "@types/color-name": "npm:@types/color-name@1.1.1"
        }
      },
      "npm:color-convert@2.0.1": {
        "map": {
          "color-name": "npm:color-name@1.1.4"
        }
      },
      "npm:@wdio/config@5.22.4": {
        "map": {
          "deepmerge": "npm:deepmerge@4.2.2",
          "glob": "npm:glob@7.1.6",
          "@wdio/logger": "npm:@wdio/logger@5.16.10"
        }
      },
      "npm:glob@7.1.3": {
        "map": {
          "fs.realpath": "npm:fs.realpath@1.0.0",
          "inflight": "npm:inflight@1.0.6",
          "inherits": "npm:inherits@2.0.4",
          "minimatch": "npm:minimatch@3.0.4",
          "once": "npm:once@1.4.0",
          "path-is-absolute": "npm:path-is-absolute@1.0.1"
        }
      },
      "npm:testcafe@1.9.1": {
        "map": {
          "dedent": "npm:dedent@0.4.0",
          "qrcode-terminal": "npm:qrcode-terminal@0.10.0",
          "tmp": "npm:tmp@0.0.28",
          "diff": "npm:diff@4.0.2",
          "strip-bom": "npm:strip-bom@2.0.0",
          "babel-core": "npm:babel-core@6.26.3",
          "error-stack-parser": "npm:error-stack-parser@1.3.6",
          "is-glob": "npm:is-glob@2.0.1",
          "resolve-from": "npm:resolve-from@4.0.0",
          "is-stream": "npm:is-stream@1.1.0",
          "mime-db": "npm:mime-db@1.44.0",
          "commander": "npm:commander@2.20.3",
          "json5": "npm:json5@2.1.3",
          "graceful-fs": "npm:graceful-fs@4.2.4",
          "lodash": "npm:lodash@4.17.20",
          "debug": "npm:debug@2.6.9",
          "chalk": "npm:chalk@2.4.2",
          "make-dir": "npm:make-dir@3.1.0",
          "babel-preset-stage-2": "npm:babel-preset-stage-2@6.24.1",
          "emittery": "npm:emittery@0.4.1",
          "del": "npm:del@3.0.0",
          "import-lazy": "npm:import-lazy@3.1.0",
          "resolve-cwd": "npm:resolve-cwd@1.0.0",
          "is-docker": "npm:is-docker@2.1.1",
          "pinkie": "npm:pinkie@2.0.4",
          "indent-string": "npm:indent-string@1.2.2",
          "tree-kill": "npm:tree-kill@1.2.2",
          "elegant-spinner": "npm:elegant-spinner@1.0.1",
          "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.24.1",
          "babel-plugin-transform-runtime": "npm:babel-plugin-transform-runtime@6.23.0",
          "pify": "npm:pify@2.3.0",
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "graphlib": "npm:graphlib@2.1.8",
          "callsite": "npm:callsite@1.0.0",
          "is-ci": "npm:is-ci@1.2.1",
          "globby": "npm:globby@9.2.0",
          "testcafe-reporter-xunit": "npm:testcafe-reporter-xunit@2.1.0",
          "parse5": "npm:parse5@1.5.1",
          "chai": "npm:chai@4.2.0",
          "coffeescript": "npm:coffeescript@2.5.1",
          "babel-preset-env": "npm:babel-preset-env@1.7.0",
          "source-map-support": "npm:source-map-support@0.5.19",
          "moment": "npm:moment@2.27.0",
          "bowser": "npm:bowser@2.10.0",
          "@types/node": "npm:@types/node@10.17.28",
          "nanoid": "npm:nanoid@1.3.4",
          "device-specs": "npm:device-specs@1.0.0",
          "read-file-relative": "npm:read-file-relative@1.2.0",
          "map-reverse": "npm:map-reverse@1.0.1",
          "endpoint-utils": "npm:endpoint-utils@1.0.2",
          "bin-v8-flags-filter": "npm:bin-v8-flags-filter@1.2.0",
          "babel-plugin-transform-for-of-as-array": "npm:babel-plugin-transform-for-of-as-array@1.1.1",
          "log-update-async-hook": "npm:log-update-async-hook@2.0.2",
          "promisify-event": "npm:promisify-event@1.0.0",
          "testcafe-reporter-minimal": "npm:testcafe-reporter-minimal@2.1.0",
          "testcafe-reporter-list": "npm:testcafe-reporter-list@2.1.0",
          "os-family": "npm:os-family@1.1.0",
          "testcafe-reporter-spec": "npm:testcafe-reporter-spec@2.1.1",
          "replicator": "npm:replicator@1.0.3",
          "time-limit-promise": "npm:time-limit-promise@1.0.4",
          "testcafe-reporter-json": "npm:testcafe-reporter-json@2.2.0",
          "node-version": "npm:node-version@1.2.0",
          "babel-preset-flow": "npm:babel-preset-flow@6.23.0",
          "async-exit-hook": "npm:async-exit-hook@1.1.2",
          "sanitize-filename": "npm:sanitize-filename@1.6.3",
          "babel-preset-react": "npm:babel-preset-react@6.24.1",
          "callsite-record": "npm:callsite-record@4.1.3",
          "moment-duration-format-commonjs": "npm:moment-duration-format-commonjs@1.0.0",
          "testcafe-legacy-api": "npm:testcafe-legacy-api@4.0.0",
          "pngjs": "npm:pngjs@3.4.0",
          "mustache": "npm:mustache@2.3.2",
          "chrome-remote-interface": "npm:chrome-remote-interface@0.25.7",
          "testcafe-browser-tools": "npm:testcafe-browser-tools@2.0.13",
          "testcafe-hammerhead": "npm:testcafe-hammerhead@17.1.13",
          "typescript": "npm:typescript@3.9.7"
        }
      },
      "npm:babel-core@6.26.3": {
        "map": {
          "debug": "npm:debug@2.6.9",
          "json5": "npm:json5@0.5.1",
          "lodash": "npm:lodash@4.17.20",
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "path-is-absolute": "npm:path-is-absolute@1.0.1",
          "minimatch": "npm:minimatch@3.0.4",
          "babel-code-frame": "npm:babel-code-frame@6.26.0",
          "convert-source-map": "npm:convert-source-map@1.7.0",
          "babel-helpers": "npm:babel-helpers@6.24.1",
          "babel-register": "npm:babel-register@6.26.0",
          "slash": "npm:slash@1.0.0",
          "babel-types": "npm:babel-types@6.26.0",
          "babel-template": "npm:babel-template@6.26.0",
          "babel-traverse": "npm:babel-traverse@6.26.0",
          "babel-messages": "npm:babel-messages@6.23.0",
          "source-map": "npm:source-map@0.5.7",
          "private": "npm:private@0.1.8",
          "babel-generator": "npm:babel-generator@6.26.1",
          "babylon": "npm:babylon@6.18.0"
        }
      },
      "npm:resolve-cwd@1.0.0": {
        "map": {
          "resolve-from": "npm:resolve-from@2.0.0"
        }
      },
      "npm:babel-preset-stage-2@6.24.1": {
        "map": {
          "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.24.1",
          "babel-plugin-syntax-dynamic-import": "npm:babel-plugin-syntax-dynamic-import@6.18.0",
          "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.24.1",
          "babel-preset-stage-3": "npm:babel-preset-stage-3@6.24.1"
        }
      },
      "npm:del@3.0.0": {
        "map": {
          "pify": "npm:pify@3.0.0",
          "globby": "npm:globby@6.1.0",
          "is-path-in-cwd": "npm:is-path-in-cwd@1.0.1",
          "is-path-cwd": "npm:is-path-cwd@1.0.0",
          "p-map": "npm:p-map@1.2.0",
          "rimraf": "npm:rimraf@2.7.1"
        }
      },
      "npm:babel-plugin-transform-class-properties@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.13.0",
          "babel-template": "npm:babel-template@6.26.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1"
        }
      },
      "npm:is-glob@2.0.1": {
        "map": {
          "is-extglob": "npm:is-extglob@1.0.0"
        }
      },
      "npm:tmp@0.0.28": {
        "map": {
          "os-tmpdir": "npm:os-tmpdir@1.0.2"
        }
      },
      "npm:babel-plugin-transform-runtime@6.23.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:make-dir@3.1.0": {
        "map": {
          "semver": "npm:semver@6.3.0"
        }
      },
      "npm:indent-string@1.2.2": {
        "map": {
          "minimist": "npm:minimist@1.2.5",
          "repeating": "npm:repeating@1.1.3",
          "get-stdin": "npm:get-stdin@4.0.1"
        }
      },
      "npm:graphlib@2.1.8": {
        "map": {
          "lodash": "npm:lodash@4.17.20"
        }
      },
      "npm:strip-bom@2.0.0": {
        "map": {
          "is-utf8": "npm:is-utf8@0.2.1"
        }
      },
      "npm:globby@9.2.0": {
        "map": {
          "pify": "npm:pify@4.0.1",
          "slash": "npm:slash@2.0.0",
          "glob": "npm:glob@7.1.6",
          "array-union": "npm:array-union@1.0.2",
          "dir-glob": "npm:dir-glob@2.2.2",
          "@types/glob": "npm:@types/glob@7.1.3",
          "ignore": "npm:ignore@4.0.6",
          "fast-glob": "npm:fast-glob@2.2.7"
        }
      },
      "npm:globby@6.1.0": {
        "map": {
          "pify": "npm:pify@2.3.0",
          "glob": "npm:glob@7.1.6",
          "object-assign": "npm:object-assign@4.1.1",
          "pinkie-promise": "npm:pinkie-promise@2.0.1",
          "array-union": "npm:array-union@1.0.2"
        }
      },
      "npm:error-stack-parser@1.3.6": {
        "map": {
          "stackframe": "npm:stackframe@0.3.1"
        }
      },
      "npm:babel-preset-env@1.7.0": {
        "map": {
          "semver": "npm:semver@5.7.1",
          "invariant": "npm:invariant@2.2.4",
          "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.24.1",
          "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.22.0",
          "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.24.1",
          "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.24.1",
          "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.24.1",
          "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.22.0",
          "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.22.0",
          "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.24.1",
          "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.22.0",
          "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.24.1",
          "babel-plugin-transform-es2015-duplicate-keys": "npm:babel-plugin-transform-es2015-duplicate-keys@6.24.1",
          "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.23.0",
          "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.22.0",
          "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.24.1",
          "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.24.1",
          "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.23.0",
          "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.23.0",
          "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1",
          "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.24.1",
          "babel-plugin-transform-es2015-modules-umd": "npm:babel-plugin-transform-es2015-modules-umd@6.24.1",
          "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.26.0",
          "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.26.0",
          "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.26.2",
          "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.22.0",
          "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.24.1",
          "browserslist": "npm:browserslist@3.2.8",
          "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.22.0",
          "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.24.1"
        }
      },
      "npm:babel-helpers@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-template": "npm:babel-template@6.26.0"
        }
      },
      "npm:babel-plugin-transform-decorators@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-types": "npm:babel-types@6.26.0",
          "babel-template": "npm:babel-template@6.26.0",
          "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
          "babel-helper-explode-class": "npm:babel-helper-explode-class@6.24.1"
        }
      },
      "npm:babel-register@6.26.0": {
        "map": {
          "source-map-support": "npm:source-map-support@0.4.18",
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "lodash": "npm:lodash@4.17.20",
          "babel-core": "npm:babel-core@6.26.3",
          "core-js": "npm:core-js@2.6.11",
          "mkdirp": "npm:mkdirp@0.5.4",
          "home-or-tmp": "npm:home-or-tmp@2.0.0"
        }
      },
      "npm:chai@4.2.0": {
        "map": {
          "get-func-name": "npm:get-func-name@2.0.0",
          "check-error": "npm:check-error@1.0.2",
          "assertion-error": "npm:assertion-error@1.1.0",
          "deep-eql": "npm:deep-eql@3.0.1",
          "pathval": "npm:pathval@1.1.0",
          "type-detect": "npm:type-detect@4.0.8"
        }
      },
      "npm:pinkie-promise@2.0.1": {
        "map": {
          "pinkie": "npm:pinkie@2.0.4"
        }
      },
      "npm:is-ci@1.2.1": {
        "map": {
          "ci-info": "npm:ci-info@1.6.0"
        }
      },
      "npm:@types/glob@7.1.3": {
        "map": {
          "@types/node": "npm:@types/node@10.17.28",
          "@types/minimatch": "npm:@types/minimatch@3.0.3"
        }
      },
      "npm:source-map-support@0.5.19": {
        "map": {
          "source-map": "npm:source-map@0.6.1",
          "buffer-from": "npm:buffer-from@1.1.1"
        }
      },
      "npm:source-map-support@0.4.18": {
        "map": {
          "source-map": "npm:source-map@0.5.7"
        }
      },
      "npm:read-file-relative@1.2.0": {
        "map": {
          "callsite": "npm:callsite@1.0.0"
        }
      },
      "npm:endpoint-utils@1.0.2": {
        "map": {
          "pinkie-promise": "npm:pinkie-promise@1.0.0",
          "ip": "npm:ip@1.1.5"
        }
      },
      "npm:promisify-event@1.0.0": {
        "map": {
          "pinkie-promise": "npm:pinkie-promise@2.0.1"
        }
      },
      "npm:babel-preset-stage-3@6.24.1": {
        "map": {
          "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.24.1",
          "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.22.0",
          "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.24.1",
          "babel-plugin-transform-async-generator-functions": "npm:babel-plugin-transform-async-generator-functions@6.24.1",
          "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.26.0"
        }
      },
      "npm:repeating@1.1.3": {
        "map": {
          "is-finite": "npm:is-finite@1.1.0"
        }
      },
      "npm:deep-eql@3.0.1": {
        "map": {
          "type-detect": "npm:type-detect@4.0.8"
        }
      },
      "npm:is-path-in-cwd@1.0.1": {
        "map": {
          "is-path-inside": "npm:is-path-inside@1.0.1"
        }
      },
      "npm:pinkie-promise@1.0.0": {
        "map": {
          "pinkie": "npm:pinkie@1.0.0"
        }
      },
      "npm:log-update-async-hook@2.0.2": {
        "map": {
          "async-exit-hook": "npm:async-exit-hook@1.1.2",
          "ansi-escapes": "npm:ansi-escapes@2.0.0",
          "onetime": "npm:onetime@2.0.1",
          "wrap-ansi": "npm:wrap-ansi@2.1.0"
        }
      },
      "npm:dir-glob@2.2.2": {
        "map": {
          "path-type": "npm:path-type@3.0.0"
        }
      },
      "npm:array-union@1.0.2": {
        "map": {
          "array-uniq": "npm:array-uniq@1.0.3"
        }
      },
      "npm:callsite-record@4.1.3": {
        "map": {
          "chalk": "npm:chalk@2.4.2",
          "callsite": "npm:callsite@1.0.0",
          "error-stack-parser": "npm:error-stack-parser@1.3.6",
          "pinkie-promise": "npm:pinkie-promise@2.0.1",
          "lodash": "npm:lodash@4.17.20",
          "highlight-es": "npm:highlight-es@1.0.3",
          "@types/error-stack-parser": "npm:@types/error-stack-parser@1.3.18",
          "@types/lodash": "npm:@types/lodash@4.14.161"
        }
      },
      "npm:babel-preset-react@6.24.1": {
        "map": {
          "babel-preset-flow": "npm:babel-preset-flow@6.23.0",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
          "babel-plugin-transform-react-jsx-self": "npm:babel-plugin-transform-react-jsx-self@6.22.0",
          "babel-plugin-transform-react-jsx-source": "npm:babel-plugin-transform-react-jsx-source@6.22.0",
          "babel-plugin-transform-react-display-name": "npm:babel-plugin-transform-react-display-name@6.25.0",
          "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.24.1"
        }
      },
      "npm:path-type@3.0.0": {
        "map": {
          "pify": "npm:pify@3.0.0"
        }
      },
      "npm:babel-helper-explode-class@6.24.1": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.26.0",
          "babel-types": "npm:babel-types@6.26.0",
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.24.1"
        }
      },
      "npm:babel-plugin-transform-exponentiation-operator@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.13.0",
          "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.24.1"
        }
      },
      "npm:babel-plugin-transform-async-to-generator@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0",
          "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.24.1"
        }
      },
      "npm:babel-plugin-transform-async-generator-functions@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-plugin-syntax-async-generators": "npm:babel-plugin-syntax-async-generators@6.13.0",
          "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.24.1"
        }
      },
      "npm:babel-plugin-transform-object-rest-spread@6.26.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.13.0"
        }
      },
      "npm:is-path-inside@1.0.1": {
        "map": {
          "path-is-inside": "npm:path-is-inside@1.0.2"
        }
      },
      "npm:testcafe-legacy-api@4.0.0": {
        "map": {
          "dedent": "npm:dedent@0.6.0",
          "parse5": "npm:parse5@2.2.3",
          "babel-runtime": "npm:babel-runtime@5.8.38",
          "lodash": "npm:lodash@4.17.20",
          "pify": "npm:pify@2.3.0",
          "strip-bom": "npm:strip-bom@2.0.0",
          "moment": "npm:moment@2.27.0",
          "mustache": "npm:mustache@2.3.2",
          "os-family": "npm:os-family@1.1.0",
          "pinkie": "npm:pinkie@2.0.4",
          "async": "npm:async@0.2.6",
          "highlight-es": "npm:highlight-es@1.0.3",
          "is-jquery-obj": "npm:is-jquery-obj@0.1.1"
        }
      },
      "npm:babel-generator@6.26.1": {
        "map": {
          "babel-messages": "npm:babel-messages@6.23.0",
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-types": "npm:babel-types@6.26.0",
          "lodash": "npm:lodash@4.17.20",
          "source-map": "npm:source-map@0.5.7",
          "jsesc": "npm:jsesc@1.3.0",
          "trim-right": "npm:trim-right@1.0.1",
          "detect-indent": "npm:detect-indent@4.0.0"
        }
      },
      "npm:home-or-tmp@2.0.0": {
        "map": {
          "os-tmpdir": "npm:os-tmpdir@1.0.2",
          "os-homedir": "npm:os-homedir@1.0.2"
        }
      },
      "npm:fast-glob@2.2.7": {
        "map": {
          "is-glob": "npm:is-glob@4.0.1",
          "glob-parent": "npm:glob-parent@3.1.0",
          "micromatch": "npm:micromatch@3.1.10",
          "@nodelib/fs.stat": "npm:@nodelib/fs.stat@1.1.3",
          "merge2": "npm:merge2@1.4.1",
          "@mrmlnc/readdir-enhanced": "npm:@mrmlnc/readdir-enhanced@2.2.1"
        }
      },
      "npm:babel-helper-builder-binary-assignment-operator-visitor@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-types": "npm:babel-types@6.26.0",
          "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.24.1"
        }
      },
      "npm:babel-plugin-transform-es2015-object-super@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.24.1"
        }
      },
      "npm:babel-plugin-transform-es2015-arrow-functions@6.22.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:babel-plugin-transform-es2015-template-literals@6.22.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:babel-helper-remap-async-to-generator@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-template": "npm:babel-template@6.26.0",
          "babel-types": "npm:babel-types@6.26.0",
          "babel-traverse": "npm:babel-traverse@6.26.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1"
        }
      },
      "npm:babel-helper-bindify-decorators@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-traverse": "npm:babel-traverse@6.26.0",
          "babel-types": "npm:babel-types@6.26.0"
        }
      },
      "npm:babel-plugin-transform-es2015-literals@6.22.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:babel-plugin-transform-es2015-sticky-regex@6.24.1": {
        "map": {
          "babel-types": "npm:babel-types@6.26.0",
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-helper-regex": "npm:babel-helper-regex@6.26.0"
        }
      },
      "npm:babel-plugin-transform-es2015-duplicate-keys@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-types": "npm:babel-types@6.26.0"
        }
      },
      "npm:babel-plugin-transform-es2015-unicode-regex@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "regexpu-core": "npm:regexpu-core@2.0.0",
          "babel-helper-regex": "npm:babel-helper-regex@6.26.0"
        }
      },
      "npm:babel-plugin-transform-es2015-for-of@6.23.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:chrome-remote-interface@0.25.7": {
        "map": {
          "commander": "npm:commander@2.11.0",
          "ws": "npm:ws@3.3.3"
        }
      },
      "npm:babel-plugin-check-es2015-constants@6.22.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:babel-plugin-transform-es2015-function-name@6.24.1": {
        "map": {
          "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
          "babel-types": "npm:babel-types@6.26.0",
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:babel-plugin-transform-es2015-computed-properties@6.24.1": {
        "map": {
          "babel-template": "npm:babel-template@6.26.0",
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:sanitize-filename@1.6.3": {
        "map": {
          "truncate-utf8-bytes": "npm:truncate-utf8-bytes@1.0.2"
        }
      },
      "npm:babel-plugin-transform-es2015-typeof-symbol@6.23.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:babel-plugin-transform-es2015-destructuring@6.23.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1": {
        "map": {
          "babel-template": "npm:babel-template@6.26.0",
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.24.1"
        }
      },
      "npm:babel-plugin-transform-es2015-modules-umd@6.24.1": {
        "map": {
          "babel-template": "npm:babel-template@6.26.0",
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.24.1"
        }
      },
      "npm:babel-plugin-transform-es2015-parameters@6.24.1": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.26.0",
          "babel-template": "npm:babel-template@6.26.0",
          "babel-types": "npm:babel-types@6.26.0",
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.24.1",
          "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.24.1"
        }
      },
      "npm:detect-indent@4.0.0": {
        "map": {
          "repeating": "npm:repeating@2.0.1"
        }
      },
      "npm:babel-plugin-transform-es2015-block-scoping@6.26.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-template": "npm:babel-template@6.26.0",
          "babel-traverse": "npm:babel-traverse@6.26.0",
          "babel-types": "npm:babel-types@6.26.0",
          "lodash": "npm:lodash@4.17.20"
        }
      },
      "npm:highlight-es@1.0.3": {
        "map": {
          "chalk": "npm:chalk@2.4.2",
          "js-tokens": "npm:js-tokens@3.0.2",
          "is-es2016-keyword": "npm:is-es2016-keyword@1.0.0"
        }
      },
      "npm:testcafe-browser-tools@2.0.13": {
        "map": {
          "dedent": "npm:dedent@0.7.0",
          "del": "npm:del@5.1.0",
          "graceful-fs": "npm:graceful-fs@4.2.4",
          "lodash": "npm:lodash@4.17.20",
          "mkdirp": "npm:mkdirp@0.5.4",
          "nanoid": "npm:nanoid@2.1.11",
          "pify": "npm:pify@2.3.0",
          "pinkie": "npm:pinkie@2.0.4",
          "read-file-relative": "npm:read-file-relative@1.2.0",
          "mustache": "npm:mustache@2.3.2",
          "os-family": "npm:os-family@1.1.0",
          "array-find": "npm:array-find@1.0.0",
          "linux-platform-info": "npm:linux-platform-info@0.0.3",
          "which-promise": "npm:which-promise@1.0.0",
          "execa": "npm:execa@3.4.0"
        }
      },
      "npm:repeating@2.0.1": {
        "map": {
          "is-finite": "npm:is-finite@1.1.0"
        }
      },
      "npm:babel-preset-flow@6.23.0": {
        "map": {
          "babel-plugin-transform-flow-strip-types": "npm:babel-plugin-transform-flow-strip-types@6.22.0"
        }
      },
      "npm:del@5.1.0": {
        "map": {
          "globby": "npm:globby@10.0.2",
          "is-path-cwd": "npm:is-path-cwd@2.2.0",
          "is-path-inside": "npm:is-path-inside@3.0.2",
          "p-map": "npm:p-map@3.0.0",
          "rimraf": "npm:rimraf@3.0.2",
          "slash": "npm:slash@3.0.0",
          "graceful-fs": "npm:graceful-fs@4.2.4",
          "is-glob": "npm:is-glob@4.0.1"
        }
      },
      "npm:babel-plugin-transform-react-jsx-self@6.22.0": {
        "map": {
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:babel-plugin-transform-es2015-spread@6.22.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:babel-plugin-transform-react-jsx-source@6.22.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-shorthand-properties@6.24.1": {
        "map": {
          "babel-types": "npm:babel-types@6.26.0",
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:regexpu-core@2.0.0": {
        "map": {
          "regjsparser": "npm:regjsparser@0.1.5",
          "regjsgen": "npm:regjsgen@0.2.0",
          "regenerate": "npm:regenerate@1.4.1"
        }
      },
      "npm:globby@10.0.2": {
        "map": {
          "array-union": "npm:array-union@2.1.0",
          "dir-glob": "npm:dir-glob@3.0.1",
          "fast-glob": "npm:fast-glob@3.2.4",
          "ignore": "npm:ignore@5.1.8",
          "@types/glob": "npm:@types/glob@7.1.3",
          "glob": "npm:glob@7.1.6",
          "merge2": "npm:merge2@1.4.1",
          "slash": "npm:slash@3.0.0"
        }
      },
      "npm:babel-plugin-transform-react-display-name@6.25.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:babel-plugin-transform-flow-strip-types@6.22.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.18.0"
        }
      },
      "npm:rimraf@3.0.2": {
        "map": {
          "glob": "npm:glob@7.1.6"
        }
      },
      "npm:babel-helper-explode-assignable-expression@6.24.1": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.26.0",
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-types": "npm:babel-types@6.26.0"
        }
      },
      "npm:babel-plugin-transform-es2015-block-scoped-functions@6.22.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:babel-plugin-transform-es2015-modules-amd@6.24.1": {
        "map": {
          "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.26.2",
          "babel-template": "npm:babel-template@6.26.0",
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:regjsparser@0.1.5": {
        "map": {
          "jsesc": "npm:jsesc@0.5.0"
        }
      },
      "npm:fast-glob@3.2.4": {
        "map": {
          "@nodelib/fs.stat": "npm:@nodelib/fs.stat@2.0.3",
          "glob-parent": "npm:glob-parent@5.1.1",
          "micromatch": "npm:micromatch@4.0.2",
          "merge2": "npm:merge2@1.4.1",
          "@nodelib/fs.walk": "npm:@nodelib/fs.walk@1.2.4",
          "picomatch": "npm:picomatch@2.2.2"
        }
      },
      "npm:dir-glob@3.0.1": {
        "map": {
          "path-type": "npm:path-type@4.0.0"
        }
      },
      "npm:glob-parent@5.1.1": {
        "map": {
          "is-glob": "npm:is-glob@4.0.1"
        }
      },
      "npm:babel-plugin-transform-regenerator@6.26.0": {
        "map": {
          "regenerator-transform": "npm:regenerator-transform@0.10.1"
        }
      },
      "npm:micromatch@4.0.2": {
        "map": {
          "braces": "npm:braces@3.0.2",
          "picomatch": "npm:picomatch@2.2.2"
        }
      },
      "npm:regenerator-transform@0.10.1": {
        "map": {
          "private": "npm:private@0.1.8",
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-types": "npm:babel-types@6.26.0"
        }
      },
      "npm:truncate-utf8-bytes@1.0.2": {
        "map": {
          "utf8-byte-length": "npm:utf8-byte-length@1.0.4"
        }
      },
      "npm:p-map@3.0.0": {
        "map": {
          "aggregate-error": "npm:aggregate-error@3.1.0"
        }
      },
      "npm:aggregate-error@3.1.0": {
        "map": {
          "indent-string": "npm:indent-string@4.0.0",
          "clean-stack": "npm:clean-stack@2.2.0"
        }
      },
      "npm:@mrmlnc/readdir-enhanced@2.2.1": {
        "map": {
          "call-me-maybe": "npm:call-me-maybe@1.0.1",
          "glob-to-regexp": "npm:glob-to-regexp@0.3.0"
        }
      },
      "npm:which-promise@1.0.0": {
        "map": {
          "pify": "npm:pify@2.3.0",
          "pinkie-promise": "npm:pinkie-promise@1.0.0",
          "which": "npm:which@1.3.1"
        }
      },
      "npm:linux-platform-info@0.0.3": {
        "map": {
          "os-family": "npm:os-family@1.1.0"
        }
      },
      "npm:babel-helper-regex@6.26.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-types": "npm:babel-types@6.26.0",
          "lodash": "npm:lodash@4.17.20"
        }
      },
      "npm:babel-helper-hoist-variables@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-types": "npm:babel-types@6.26.0"
        }
      },
      "npm:braces@3.0.2": {
        "map": {
          "fill-range": "npm:fill-range@7.0.1"
        }
      },
      "npm:babel-helper-call-delegate@6.24.1": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.26.0",
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-types": "npm:babel-types@6.26.0",
          "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.24.1"
        }
      },
      "npm:ws@3.3.3": {
        "map": {
          "safe-buffer": "npm:safe-buffer@5.1.2",
          "async-limiter": "npm:async-limiter@1.0.1",
          "ultron": "npm:ultron@1.1.1"
        }
      },
      "npm:execa@3.4.0": {
        "map": {
          "is-stream": "npm:is-stream@2.0.0",
          "onetime": "npm:onetime@5.1.2",
          "p-finally": "npm:p-finally@2.0.1",
          "npm-run-path": "npm:npm-run-path@4.0.1",
          "signal-exit": "npm:signal-exit@3.0.3",
          "strip-final-newline": "npm:strip-final-newline@2.0.0",
          "merge-stream": "npm:merge-stream@2.0.0",
          "human-signals": "npm:human-signals@1.1.1",
          "get-stream": "npm:get-stream@5.2.0",
          "cross-spawn": "npm:cross-spawn@7.0.3"
        }
      },
      "npm:onetime@5.1.2": {
        "map": {
          "mimic-fn": "npm:mimic-fn@2.1.0"
        }
      },
      "npm:testcafe-hammerhead@17.1.13": {
        "map": {
          "bowser": "npm:bowser@1.6.0",
          "nanoid": "npm:nanoid@0.2.2",
          "semver": "npm:semver@5.5.0",
          "lodash": "npm:lodash@4.17.20",
          "os-family": "npm:os-family@1.1.0",
          "pinkie": "npm:pinkie@1.0.0",
          "read-file-relative": "npm:read-file-relative@1.2.0",
          "mustache": "npm:mustache@2.3.2",
          "parse5": "npm:parse5@2.2.3",
          "merge-stream": "npm:merge-stream@1.0.1",
          "debug": "npm:debug@4.1.1",
          "lru-cache": "npm:lru-cache@2.6.3",
          "mime": "npm:mime@1.4.1",
          "tunnel-agent": "npm:tunnel-agent@0.6.0",
          "iconv-lite": "npm:iconv-lite@0.5.1",
          "brotli": "npm:brotli@1.3.2",
          "tough-cookie": "npm:tough-cookie@2.3.3",
          "acorn-hammerhead": "npm:acorn-hammerhead@0.3.0",
          "webauth": "npm:webauth@1.1.0",
          "match-url-wildcard": "npm:match-url-wildcard@0.0.4",
          "crypto-md5": "npm:crypto-md5@1.0.0",
          "esotope-hammerhead": "npm:esotope-hammerhead@0.5.5",
          "css": "npm:css@2.2.3",
          "asar": "npm:asar@2.1.0"
        }
      },
      "npm:@nodelib/fs.walk@1.2.4": {
        "map": {
          "fastq": "npm:fastq@1.8.0",
          "@nodelib/fs.scandir": "npm:@nodelib/fs.scandir@2.1.3"
        }
      },
      "npm:fill-range@7.0.1": {
        "map": {
          "to-regex-range": "npm:to-regex-range@5.0.1"
        }
      },
      "npm:npm-run-path@4.0.1": {
        "map": {
          "path-key": "npm:path-key@3.1.1"
        }
      },
      "npm:to-regex-range@5.0.1": {
        "map": {
          "is-number": "npm:is-number@7.0.0"
        }
      },
      "npm:@nodelib/fs.scandir@2.1.3": {
        "map": {
          "@nodelib/fs.stat": "npm:@nodelib/fs.stat@2.0.3",
          "run-parallel": "npm:run-parallel@1.1.9"
        }
      },
      "npm:merge-stream@1.0.1": {
        "map": {
          "readable-stream": "npm:readable-stream@2.3.6"
        }
      },
      "npm:brotli@1.3.2": {
        "map": {
          "base64-js": "npm:base64-js@1.3.1"
        }
      },
      "npm:cross-spawn@7.0.3": {
        "map": {
          "which": "npm:which@2.0.2",
          "path-key": "npm:path-key@3.1.1",
          "shebang-command": "npm:shebang-command@2.0.0"
        }
      },
      "npm:fastq@1.8.0": {
        "map": {
          "reusify": "npm:reusify@1.0.4"
        }
      },
      "npm:iconv-lite@0.5.1": {
        "map": {
          "safer-buffer": "npm:safer-buffer@2.1.2"
        }
      },
      "npm:which@2.0.2": {
        "map": {
          "isexe": "npm:isexe@2.0.0"
        }
      },
      "npm:get-stream@5.2.0": {
        "map": {
          "pump": "npm:pump@3.0.0"
        }
      },
      "npm:pump@3.0.0": {
        "map": {
          "once": "npm:once@1.4.0",
          "end-of-stream": "npm:end-of-stream@1.4.4"
        }
      },
      "npm:match-url-wildcard@0.0.4": {
        "map": {
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
        }
      },
      "npm:tough-cookie@2.3.3": {
        "map": {
          "punycode": "npm:punycode@1.4.1"
        }
      },
      "npm:shebang-command@2.0.0": {
        "map": {
          "shebang-regex": "npm:shebang-regex@3.0.0"
        }
      },
      "npm:css@2.2.3": {
        "map": {
          "source-map": "npm:source-map@0.1.43",
          "inherits": "npm:inherits@2.0.4",
          "urix": "npm:urix@0.1.0",
          "source-map-resolve": "npm:source-map-resolve@0.5.3"
        }
      },
      "npm:asar@2.1.0": {
        "map": {
          "commander": "npm:commander@2.20.3",
          "glob": "npm:glob@7.1.6",
          "minimatch": "npm:minimatch@3.0.4",
          "mkdirp": "npm:mkdirp@0.5.4",
          "cuint": "npm:cuint@0.2.2",
          "chromium-pickle-js": "npm:chromium-pickle-js@0.2.0",
          "tmp-promise": "npm:tmp-promise@1.1.0"
        }
      },
      "npm:acorn-hammerhead@0.3.0": {
        "map": {
          "@types/estree": "npm:@types/estree@0.0.39"
        }
      },
      "npm:esotope-hammerhead@0.5.5": {
        "map": {
          "@types/estree": "npm:@types/estree@0.0.39"
        }
      },
      "npm:source-map@0.1.43": {
        "map": {
          "amdefine": "npm:amdefine@1.0.1"
        }
      },
      "npm:browserslist@3.2.8": {
        "map": {
          "caniuse-lite": "npm:caniuse-lite@1.0.30001119",
          "electron-to-chromium": "npm:electron-to-chromium@1.3.555"
        }
      },
      "npm:tmp-promise@1.1.0": {
        "map": {
          "tmp": "npm:tmp@0.1.0",
          "bluebird": "npm:bluebird@3.7.2"
        }
      },
      "npm:tmp@0.1.0": {
        "map": {
          "rimraf": "npm:rimraf@2.7.1"
        }
      },
      "npm:react-iframe@1.8.0": {
        "map": {
          "object-assign": "npm:object-assign@4.1.1"
        }
      },
      "npm:downshift@4.0.5": {
        "map": {
          "react-is": "npm:react-is@16.13.1",
          "prop-types": "npm:prop-types@15.7.2",
          "@babel/runtime": "npm:@babel/runtime@7.8.7",
          "compute-scroll-into-view": "npm:compute-scroll-into-view@1.0.13"
        }
      }
    }
  },
  meta: {
    "*.vue": {
      "loader": "systemjs-plugin-vue"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "carbon-components-react": "npm:carbon-components-react@7.24.0",
    "bufferutil": "npm:bufferutil@4.0.1",
    "canvas": "npm:canvas@2.6.1",
    "node-blockly": "npm:node-blockly@1.2.8",
    "node-canvas": "npm:canvas@2.6.1",
    "request": "npm:request@2.88.2",
    "source-map": "npm:source-map@0.6.1",
    "utf-8-validate": "npm:utf-8-validate@5.0.2",
    "react-html-parser": "npm:react-html-parser@2.0.2",
    "carbon-icons": "npm:carbon-icons@7.0.7",
    "systemjs/plugin-css": "github:systemjs/plugin-css@0.1.37",
    "fbjs": "npm:fbjs@0.8.17",
    "systemjs-plugin-babel": "npm:systemjs-plugin-babel@0.0.25",
    "ajv": "npm:ajv@6.12.6",
    "babel": "npm:babel-core@5.8.38",
    "babel-plugin-transform-custom-element-classes": "npm:babel-plugin-transform-custom-element-classes@0.1.0",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@2.6.11",
    "fsevents": "npm:fsevents@1.2.9",
    "graphql": "npm:graphql@15.4.0",
    "graphql-lodash": "npm:graphql-lodash@1.3.4",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "lodash.clonedeep": "npm:lodash.clonedeep@4.5.0",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "prop-types": "npm:prop-types@15.7.2",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.2",
    "redux": "npm:redux@4.0.5",
    "redux-first-routing": "npm:redux-first-routing@0.3.0",
    "redux-virtual-dom": "npm:redux-virtual-dom@0.9.3",
    "stylis": "npm:stylis@3.5.4",
    "timers": "npm:jspm-nodelibs-timers@0.2.1",
    "tls": "npm:jspm-nodelibs-tls@0.2.1",
    "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
    "@babel/core@7.0.0": "npm:@babel/core@7.0.0",
    "@babel/core@^7.1.2": "npm:@babel/core@7.1.6",
    "@babel/runtime@7.0.0": "npm:@babel/runtime@7.0.0",
    "@polymer/lit-element": "npm:@polymer/lit-element@0.6.5",
    "@types/async": "npm:@types/async@2.0.50",
    "@types/react": "npm:@types/react@16.9.35",
    "@webcomponents/webcomponentsjs": "npm:@webcomponents/webcomponentsjs@2.4.3",
    "Mr0grog/newless": "github:Mr0grog/newless@master",
    "acorn": "npm:acorn@6.4.1",
    "apollo-cache-inmemory": "npm:apollo-cache-inmemory@1.6.6",
    "apollo-client": "npm:apollo-client@2.6.9",
    "apollo-upload-client": "npm:apollo-upload-client@9.1.0",
    "babel-helper-vue-jsx-merge-props": "npm:babel-helper-vue-jsx-merge-props@2.0.3",
    "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.24.1",
    "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.26.2",
    "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.24.1",
    "babel-plugin-transform-vue-jsx": "npm:babel-plugin-transform-vue-jsx@3.7.0",
    "babel-preset-vue": "npm:babel-preset-vue@2.0.2",
    "bootstrap": "github:twbs/bootstrap@4.0.0-alpha.6",
    "brace": "npm:brace@0.11.1",
    "classnames": "npm:classnames@2.2.6",
    "clipboard": "npm:clipboard@1.7.1",
    "cluster": "npm:jspm-nodelibs-cluster@0.2.1",
    "console": "npm:jspm-nodelibs-console@0.2.3",
    "css": "github:systemjs/plugin-css@0.1.37",
    "deepmerge": "npm:deepmerge@4.2.2",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.1",
    "dns": "npm:jspm-nodelibs-dns@0.2.1",
    "draft-js": "npm:draft-js@0.10.5",
    "fit-html": "npm:fit-html@0.7.0",
    "formBuilder": "npm:formBuilder@3.4.2",
    "google-closure-library": "npm:google-closure-library@20180910.0.0",
    "graphiql": "npm:graphiql@0.11.11",
    "graphql-tag": "npm:graphql-tag@2.10.3",
    "immutability-helper": "npm:immutability-helper@2.9.1",
    "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
    "jquery-ui": "npm:jquery-ui@1.12.1",
    "lit-html": "npm:lit-html@0.13.0",
    "lit-redux-router": "npm:lit-redux-router@0.2.4",
    "lodash.throttle": "npm:lodash.throttle@4.1.1",
    "material-ui": "npm:material-ui@0.20.2",
    "monaco-editor": "npm:monaco-editor@0.12.0",
    "namor": "npm:namor@1.1.3",
    "node": "npm:node@11.15.0",
    "nodelibs": "github:jspm/nodelibs@0.1.9",
    "pn": "npm:pn@1.1.0",
    "popper.js": "npm:popper.js@1.16.1",
    "pwa-helpers": "npm:pwa-helpers@0.9.1",
    "quill": "npm:quill@1.3.6",
    "quill-render": "npm:quill-render@1.0.5",
    "rcdexta/smooth-dnd": "github:rcdexta/smooth-dnd@master",
    "re-resizable": "npm:re-resizable@4.11.0",
    "react-ace": "npm:react-ace@6.6.0",
    "react-addons": "npm:react-addons@0.9.1-deprecated",
    "react-apollo": "npm:react-apollo@2.5.8",
    "react-calendar-heatmap": "npm:react-calendar-heatmap@1.8.1",
    "react-data-grid": "npm:react-data-grid@3.0.8",
    "react-download-link": "npm:react-download-link@2.3.0",
    "react-downloadbutton": "npm:react-downloadbutton@1.0.0",
    "react-draggable": "npm:react-draggable@3.3.2",
    "react-flow-diagram": "npm:react-flow-diagram@2.13.0",
    "react-grid-layout": "npm:react-grid-layout@0.16.6",
    "react-hot-loader": "npm:react-hot-loader@4.12.21",
    "react-icons": "npm:react-icons@2.2.7",
    "react-live": "npm:react-live@1.12.0",
    "react-monaco": "npm:react-monaco@0.1.0-alpha.0",
    "react-monaco-editor": "npm:react-monaco-editor@0.14.1",
    "react-notifications": "npm:react-notifications@1.6.0",
    "react-redux": "npm:react-redux@5.1.2",
    "react-render-html": "npm:react-render-html@0.6.0",
    "react-responsive-data-table": "npm:react-responsive-data-table@1.0.5",
    "react-rnd": "npm:react-rnd@9.2.0",
    "react-router": "npm:react-router@3.2.6",
    "react-router-config": "npm:react-router-config@1.0.0-beta.4",
    "react-router-dom": "npm:react-router-dom@4.3.1",
    "react-scrollable-list-view": "npm:react-scrollable-list-view@2.0.1",
    "react-select": "npm:react-select@1.3.0",
    "react-shadow": "npm:react-shadow@16.3.2",
    "react-shadow-dom-retarget-events": "npm:react-shadow-dom-retarget-events@1.0.11",
    "react-table": "npm:react-table@6.8.6",
    "react-treebeard": "npm:react-treebeard@2.1.0",
    "react-wait-for-it": "npm:react-wait-for-it@0.0.4",
    "readline": "npm:jspm-nodelibs-readline@0.2.1",
    "redux-actions": "npm:redux-actions@2.6.5",
    "redux-connect": "npm:redux-connect@5.1.0",
    "redux-logger": "npm:redux-logger@3.0.6",
    "scss": "github:dougludlow/plugin-sass@0.6.0",
    "snabbdom": "npm:snabbdom@0.7.4",
    "snabbdom-jsx": "npm:snabbdom-jsx@0.4.2",
    "styled-components": "npm:styled-components@5.1.0",
    "systemjs/plugin-babel": "github:systemjs/plugin-babel@0.14.0",
    "universal-router": "npm:universal-router@7.0.0",
    "v-runtime-template": "npm:v-runtime-template@1.10.0",
    "velocity-react": "npm:velocity-react@1.4.3",
    "vue": "npm:vue@2.6.11",
    "jquery": "npm:jquery@3.5.1",
    "lodash": "npm:lodash@4.17.11",
    "@carbon/icons-react": "npm:@carbon/icons-react@10.11.0",
    "react-is": "npm:react-is@16.13.1",
    "codemirror": "npm:codemirror@5.51.0",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "punycode": "npm:jspm-nodelibs-punycode@0.2.1",
    "react-dom": "npm:react-dom@16.13.1",
    "graceful-fs": "npm:graceful-fs@4.2.4",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "@babel/core": "npm:@babel/core@7.1.6",
    "@babel/runtime": "npm:@babel/runtime@7.8.7",
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "babel-core": "npm:babel-core@5.8.38",
    "babel-plugin-transform-builtin-classes": "npm:babel-plugin-transform-builtin-classes@0.6.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "debug": "npm:debug@4.1.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "module": "npm:jspm-nodelibs-module@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "react": "npm:react@16.13.1",
    "react-materialize": "npm:react-materialize@latest",
    "repl": "npm:jspm-nodelibs-repl@0.2.1",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "supports-color": "npm:supports-color@5.5.0",
    "tty": "npm:jspm-nodelibs-tty@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "webpack": "npm:webpack@3.12.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3",
    "carbon-components": "npm:carbon-components@10.3.1"
  },
  packages: {
    "npm:@polymer/lit-element@0.6.5": {
      "map": {
        "lit-html": "npm:lit-html@1.2.1"
      }
    },
    "npm:react-apollo@2.5.8": {
      "map": {
        "fast-json-stable-stringify": "npm:fast-json-stable-stringify@2.1.0",
        "lodash.isequal": "npm:lodash.isequal@4.5.0",
        "prop-types": "npm:prop-types@15.7.2",
        "tslib": "npm:tslib@1.13.0",
        "ts-invariant": "npm:ts-invariant@0.4.4",
        "apollo-utilities": "npm:apollo-utilities@1.3.4",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@3.3.2"
      }
    },
    "npm:apollo-client@2.6.9": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.2.0",
        "apollo-link": "npm:apollo-link@1.2.14",
        "tslib": "npm:tslib@1.13.0",
        "ts-invariant": "npm:ts-invariant@0.4.4",
        "zen-observable": "npm:zen-observable@0.8.15",
        "apollo-cache": "npm:apollo-cache@1.3.5",
        "apollo-utilities": "npm:apollo-utilities@1.3.4",
        "@types/zen-observable": "npm:@types/zen-observable@0.8.0"
      }
    },
    "npm:react-router@3.2.6": {
      "map": {
        "create-react-class": "npm:create-react-class@15.6.3",
        "invariant": "npm:invariant@2.2.4",
        "loose-envify": "npm:loose-envify@1.4.0",
        "prop-types": "npm:prop-types@15.7.2",
        "react-is": "npm:react-is@16.13.1",
        "warning": "npm:warning@3.0.0",
        "history": "npm:history@3.3.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@3.3.2"
      }
    },
    "npm:formBuilder@3.4.2": {
      "map": {
        "jquery": "npm:jquery@3.5.1",
        "jquery-ui-sortable": "npm:jquery-ui-sortable@1.0.0"
      }
    },
    "npm:react-ace@6.6.0": {
      "map": {
        "brace": "npm:brace@0.11.1",
        "lodash.get": "npm:lodash.get@4.4.2",
        "lodash.isequal": "npm:lodash.isequal@4.5.0",
        "prop-types": "npm:prop-types@15.7.2",
        "diff-match-patch": "npm:diff-match-patch@1.0.4",
        "@babel/polyfill": "npm:@babel/polyfill@7.8.7"
      }
    },
    "npm:react-notifications@1.6.0": {
      "map": {
        "classnames": "npm:classnames@2.2.6",
        "prop-types": "npm:prop-types@15.7.2",
        "acorn": "npm:acorn@6.4.1",
        "react-transition-group": "npm:react-transition-group@1.2.1"
      }
    },
    "npm:react-redux@5.1.2": {
      "map": {
        "@babel/runtime": "npm:@babel/runtime@7.8.7",
        "invariant": "npm:invariant@2.2.4",
        "loose-envify": "npm:loose-envify@1.4.0",
        "prop-types": "npm:prop-types@15.7.2",
        "react-is": "npm:react-is@16.13.1",
        "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@3.3.2"
      }
    },
    "npm:styled-components@5.1.0": {
      "map": {
        "@babel/traverse": "npm:@babel/traverse@7.12.1",
        "supports-color": "npm:supports-color@5.5.0",
        "@emotion/is-prop-valid": "npm:@emotion/is-prop-valid@0.8.8",
        "css-to-react-native": "npm:css-to-react-native@3.0.0",
        "@emotion/stylis": "npm:@emotion/stylis@0.8.5",
        "shallowequal": "npm:shallowequal@1.1.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@3.3.2",
        "@babel/helper-module-imports": "npm:@babel/helper-module-imports@7.12.1",
        "babel-plugin-styled-components": "npm:babel-plugin-styled-components@1.11.1",
        "@emotion/unitless": "npm:@emotion/unitless@0.7.5"
      }
    },
    "npm:react-responsive-data-table@1.0.5": {
      "map": {
        "lodash": "npm:lodash@4.17.20",
        "react-select": "npm:react-select@1.3.0",
        "react-content-loader": "npm:react-content-loader@3.4.2",
        "is-valid-date": "npm:is-valid-date@0.0.1",
        "bootstrap4": "npm:bootstrap4@0.0.1-security",
        "is-number": "npm:is-number@6.0.0",
        "bootstrap": "npm:bootstrap@4.5.0",
        "fetch-hoc": "npm:fetch-hoc@0.3.0"
      }
    },
    "npm:apollo-cache-inmemory@1.6.6": {
      "map": {
        "optimism": "npm:optimism@0.10.3",
        "tslib": "npm:tslib@1.13.0",
        "ts-invariant": "npm:ts-invariant@0.4.4",
        "apollo-cache": "npm:apollo-cache@1.3.5",
        "apollo-utilities": "npm:apollo-utilities@1.3.4"
      }
    },
    "npm:react-router-dom@4.3.1": {
      "map": {
        "react-router": "npm:react-router@4.3.1",
        "history": "npm:history@4.10.1",
        "invariant": "npm:invariant@2.2.4",
        "loose-envify": "npm:loose-envify@1.4.0",
        "prop-types": "npm:prop-types@15.7.2",
        "warning": "npm:warning@4.0.3"
      }
    },
    "npm:draft-js@0.10.5": {
      "map": {
        "immutable": "npm:immutable@3.7.6",
        "fbjs": "npm:fbjs@0.8.17",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:react-flow-diagram@2.13.0": {
      "map": {
        "redux": "npm:redux@3.7.2",
        "styled-components": "npm:styled-components@2.4.1",
        "react-redux": "npm:react-redux@5.1.2"
      }
    },
    "npm:react-monaco-editor@0.14.1": {
      "map": {
        "monaco-editor": "npm:monaco-editor@0.10.1",
        "prop-types": "npm:prop-types@15.7.2"
      }
    },
    "npm:react-monaco@0.1.0-alpha.0": {
      "map": {
        "monaco-editor": "npm:monaco-editor@0.8.3"
      }
    },
    "npm:react-rnd@9.2.0": {
      "map": {
        "re-resizable": "npm:re-resizable@5.0.1",
        "react-draggable": "npm:react-draggable@3.3.0",
        "tslib": "npm:tslib@1.9.3"
      }
    },
    "npm:react-draggable@3.3.2": {
      "map": {
        "classnames": "npm:classnames@2.2.6",
        "prop-types": "npm:prop-types@15.7.2"
      }
    },
    "npm:graphiql@0.11.11": {
      "map": {
        "codemirror": "npm:codemirror@5.51.0",
        "codemirror-graphql": "npm:codemirror-graphql@0.6.12",
        "markdown-it": "npm:markdown-it@8.4.2"
      }
    },
    "npm:react-select@1.3.0": {
      "map": {
        "classnames": "npm:classnames@2.2.6",
        "prop-types": "npm:prop-types@15.7.2",
        "react-input-autosize": "npm:react-input-autosize@2.2.2"
      }
    },
    "npm:react-live@1.12.0": {
      "map": {
        "core-js": "npm:core-js@2.6.11",
        "prop-types": "npm:prop-types@15.7.2",
        "dom-iterator": "npm:dom-iterator@1.0.0",
        "unescape": "npm:unescape@0.2.0",
        "prismjs": "npm:prismjs@1.6.0",
        "create-react-context": "npm:create-react-context@0.2.3",
        "buble": "npm:buble@0.19.8"
      }
    },
    "npm:redux-actions@2.6.5": {
      "map": {
        "invariant": "npm:invariant@2.2.4",
        "loose-envify": "npm:loose-envify@1.4.0",
        "reduce-reducers": "npm:reduce-reducers@0.4.3",
        "to-camel-case": "npm:to-camel-case@1.0.0",
        "just-curry-it": "npm:just-curry-it@3.1.0"
      }
    },
    "npm:quill@1.3.6": {
      "map": {
        "clone": "npm:clone@2.1.2",
        "deep-equal": "npm:deep-equal@1.1.1",
        "parchment": "npm:parchment@1.1.4",
        "eventemitter3": "npm:eventemitter3@2.0.3",
        "quill-delta": "npm:quill-delta@3.6.3",
        "extend": "npm:extend@3.0.2"
      }
    },
    "npm:react-download-link@2.3.0": {
      "map": {
        "prop-types": "npm:prop-types@15.7.2"
      }
    },
    "npm:immutability-helper@2.9.1": {
      "map": {
        "invariant": "npm:invariant@2.2.4"
      }
    },
    "npm:react-grid-layout@0.16.6": {
      "map": {
        "classnames": "npm:classnames@2.2.6",
        "lodash.isequal": "npm:lodash.isequal@4.5.0",
        "prop-types": "npm:prop-types@15.7.2",
        "react-draggable": "npm:react-draggable@3.3.2",
        "react-resizable": "npm:react-resizable@1.10.1"
      }
    },
    "npm:react-wait-for-it@0.0.4": {
      "map": {
        "prop-types": "npm:prop-types@15.7.2",
        "react": "npm:react@16.13.1",
        "react-dom": "npm:react-dom@16.13.1",
        "webpack": "npm:webpack@3.12.0"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-commonjs@6.26.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-template": "npm:babel-template@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.24.1"
      }
    },
    "npm:react-calendar-heatmap@1.8.1": {
      "map": {
        "prop-types": "npm:prop-types@15.7.2",
        "memoize-one": "npm:memoize-one@5.1.1"
      }
    },
    "npm:material-ui@0.20.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "lodash.throttle": "npm:lodash.throttle@4.1.1",
        "prop-types": "npm:prop-types@15.7.2",
        "warning": "npm:warning@3.0.0",
        "react-transition-group": "npm:react-transition-group@1.2.1",
        "simple-assign": "npm:simple-assign@0.1.0",
        "inline-style-prefixer": "npm:inline-style-prefixer@3.0.8",
        "react-event-listener": "npm:react-event-listener@0.6.6",
        "lodash.merge": "npm:lodash.merge@4.6.2",
        "recompose": "npm:recompose@0.26.0",
        "keycode": "npm:keycode@2.2.0"
      }
    },
    "npm:@babel/core@7.0.0": {
      "map": {
        "@babel/code-frame": "npm:@babel/code-frame@7.10.4",
        "@babel/generator": "npm:@babel/generator@7.12.1",
        "@babel/helpers": "npm:@babel/helpers@7.1.5",
        "@babel/parser": "npm:@babel/parser@7.12.3",
        "@babel/template": "npm:@babel/template@7.10.4",
        "@babel/traverse": "npm:@babel/traverse@7.12.1",
        "@babel/types": "npm:@babel/types@7.8.3",
        "convert-source-map": "npm:convert-source-map@1.7.0",
        "debug": "npm:debug@3.2.6",
        "json5": "npm:json5@0.5.1",
        "lodash": "npm:lodash@4.17.20",
        "resolve": "npm:resolve@1.12.0",
        "semver": "npm:semver@5.7.1",
        "source-map": "npm:source-map@0.5.7"
      }
    },
    "npm:redux-connect@5.1.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "redux-actions": "npm:redux-actions@2.6.5"
      }
    },
    "npm:react-hot-loader@4.12.21": {
      "map": {
        "loader-utils": "npm:loader-utils@1.2.3",
        "prop-types": "npm:prop-types@15.7.2",
        "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
        "source-map": "npm:source-map@0.7.3",
        "shallowequal": "npm:shallowequal@1.1.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@3.3.2",
        "fast-levenshtein": "npm:fast-levenshtein@2.0.6",
        "global": "npm:global@4.4.0"
      }
    },
    "npm:babel-plugin-transform-react-jsx@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.26.0"
      }
    },
    "npm:apollo-upload-client@9.1.0": {
      "map": {
        "apollo-link": "npm:apollo-link@1.2.14",
        "extract-files": "npm:extract-files@4.1.0",
        "apollo-link-http-common": "npm:apollo-link-http-common@0.2.16"
      }
    },
    "npm:velocity-react@1.4.3": {
      "map": {
        "lodash": "npm:lodash@4.17.20",
        "prop-types": "npm:prop-types@15.7.2",
        "react-transition-group": "npm:react-transition-group@2.9.0",
        "velocity-animate": "npm:velocity-animate@1.5.2"
      }
    },
    "npm:react-table@6.8.6": {
      "map": {
        "classnames": "npm:classnames@2.2.6"
      }
    },
    "npm:babel-plugin-transform-vue-jsx@3.7.0": {
      "map": {
        "esutils": "npm:esutils@2.0.3"
      }
    },
    "npm:react-treebeard@2.1.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "deep-equal": "npm:deep-equal@1.1.1",
        "prop-types": "npm:prop-types@15.7.2",
        "velocity-react": "npm:velocity-react@1.4.3",
        "shallowequal": "npm:shallowequal@0.2.2",
        "radium": "npm:radium@0.19.6"
      }
    },
    "npm:babel-preset-vue@2.0.2": {
      "map": {
        "babel-helper-vue-jsx-merge-props": "npm:babel-helper-vue-jsx-merge-props@2.0.3",
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-plugin-transform-vue-jsx": "npm:babel-plugin-transform-vue-jsx@3.7.0",
        "babel-plugin-jsx-v-model": "npm:babel-plugin-jsx-v-model@2.0.3",
        "babel-plugin-jsx-event-modifiers": "npm:babel-plugin-jsx-event-modifiers@2.0.5"
      }
    },
    "npm:snabbdom-jsx@0.4.2": {
      "map": {
        "snabbdom": "npm:snabbdom@0.7.4"
      }
    },
    "npm:react-icons@2.2.7": {
      "map": {
        "react-icon-base": "npm:react-icon-base@2.1.0"
      }
    },
    "npm:apollo-utilities@1.3.4": {
      "map": {
        "fast-json-stable-stringify": "npm:fast-json-stable-stringify@2.1.0",
        "ts-invariant": "npm:ts-invariant@0.4.4",
        "tslib": "npm:tslib@1.13.0",
        "@wry/equality": "npm:@wry/equality@0.1.11"
      }
    },
    "npm:clipboard@1.7.1": {
      "map": {
        "select": "npm:select@1.1.2",
        "tiny-emitter": "npm:tiny-emitter@2.1.0",
        "good-listener": "npm:good-listener@1.2.2"
      }
    },
    "npm:universal-router@7.0.0": {
      "map": {
        "path-to-regexp": "npm:path-to-regexp@2.4.0"
      }
    },
    "npm:react-render-html@0.6.0": {
      "map": {
        "parse5": "npm:parse5@3.0.3",
        "react-attr-converter": "npm:react-attr-converter@0.3.1"
      }
    },
    "npm:quill-render@1.0.5": {
      "map": {
        "cheerio": "npm:cheerio@0.19.0",
        "escape-html": "npm:escape-html@1.0.3"
      }
    },
    "npm:redux-logger@3.0.6": {
      "map": {
        "deep-diff": "npm:deep-diff@0.3.8"
      }
    },
    "npm:node@11.15.0": {
      "map": {
        "node-bin-setup": "npm:node-bin-setup@1.0.6"
      }
    },
    "npm:apollo-cache@1.3.5": {
      "map": {
        "tslib": "npm:tslib@1.13.0",
        "apollo-utilities": "npm:apollo-utilities@1.3.4"
      }
    },
    "npm:lit-redux-router@0.2.4": {
      "map": {
        "regexparam": "npm:regexparam@1.3.0"
      }
    },
    "npm:react-input-autosize@2.2.2": {
      "map": {
        "prop-types": "npm:prop-types@15.7.2"
      }
    },
    "npm:apollo-link@1.2.14": {
      "map": {
        "ts-invariant": "npm:ts-invariant@0.4.4",
        "tslib": "npm:tslib@1.13.0",
        "apollo-utilities": "npm:apollo-utilities@1.3.4",
        "zen-observable-ts": "npm:zen-observable-ts@0.8.21"
      }
    },
    "npm:history@3.3.0": {
      "map": {
        "invariant": "npm:invariant@2.2.4",
        "warning": "npm:warning@3.0.0",
        "loose-envify": "npm:loose-envify@1.4.0",
        "query-string": "npm:query-string@4.3.4"
      }
    },
    "npm:ts-invariant@0.4.4": {
      "map": {
        "tslib": "npm:tslib@1.13.0"
      }
    },
    "npm:buble@0.19.8": {
      "map": {
        "acorn": "npm:acorn@6.4.1",
        "chalk": "npm:chalk@2.4.2",
        "minimist": "npm:minimist@1.2.5",
        "magic-string": "npm:magic-string@0.25.7",
        "os-homedir": "npm:os-homedir@2.0.0",
        "acorn-dynamic-import": "npm:acorn-dynamic-import@4.0.0",
        "acorn-jsx": "npm:acorn-jsx@5.2.0",
        "regexpu-core": "npm:regexpu-core@4.7.0"
      }
    },
    "npm:styled-components@2.4.1": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "buffer": "npm:buffer@5.7.0",
        "css-to-react-native": "npm:css-to-react-native@2.3.2",
        "fbjs": "npm:fbjs@0.8.17",
        "is-plain-object": "npm:is-plain-object@2.0.4",
        "prop-types": "npm:prop-types@15.7.2",
        "supports-color": "npm:supports-color@3.2.3",
        "stylis": "npm:stylis@3.5.4"
      }
    },
    "npm:react-router@4.3.1": {
      "map": {
        "path-to-regexp": "npm:path-to-regexp@1.8.0",
        "history": "npm:history@4.10.1",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.5",
        "loose-envify": "npm:loose-envify@1.4.0",
        "prop-types": "npm:prop-types@15.7.2",
        "warning": "npm:warning@4.0.3",
        "invariant": "npm:invariant@2.2.4"
      }
    },
    "npm:react-draggable@3.3.0": {
      "map": {
        "classnames": "npm:classnames@2.2.6",
        "prop-types": "npm:prop-types@15.7.2"
      }
    },
    "npm:redux@3.7.2": {
      "map": {
        "lodash": "npm:lodash@4.17.20",
        "lodash-es": "npm:lodash-es@4.17.15",
        "loose-envify": "npm:loose-envify@1.4.0",
        "symbol-observable": "npm:symbol-observable@1.2.0"
      }
    },
    "npm:@babel/runtime@7.0.0": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.12.1"
      }
    },
    "npm:hoist-non-react-statics@3.3.2": {
      "map": {
        "react-is": "npm:react-is@16.13.1"
      }
    },
    "npm:@babel/polyfill@7.8.7": {
      "map": {
        "core-js": "npm:core-js@2.6.11",
        "regenerator-runtime": "npm:regenerator-runtime@0.13.7"
      }
    },
    "npm:warning@4.0.3": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0"
      }
    },
    "npm:css-to-react-native@2.3.2": {
      "map": {
        "postcss-value-parser": "npm:postcss-value-parser@3.3.1",
        "css-color-keywords": "npm:css-color-keywords@1.0.0",
        "camelize": "npm:camelize@1.0.0"
      }
    },
    "npm:react-transition-group@1.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0",
        "prop-types": "npm:prop-types@15.7.2",
        "warning": "npm:warning@3.0.0",
        "chain-function": "npm:chain-function@1.0.1",
        "dom-helpers": "npm:dom-helpers@3.4.0"
      }
    },
    "npm:react-transition-group@2.9.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0",
        "prop-types": "npm:prop-types@15.7.2",
        "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
        "dom-helpers": "npm:dom-helpers@3.4.0"
      }
    },
    "npm:cheerio@0.19.0": {
      "map": {
        "lodash": "npm:lodash@3.10.1",
        "dom-serializer": "npm:dom-serializer@0.1.1",
        "css-select": "npm:css-select@1.0.0",
        "entities": "npm:entities@1.1.2",
        "htmlparser2": "npm:htmlparser2@3.8.3"
      }
    },
    "npm:react-resizable@1.10.1": {
      "map": {
        "react-draggable": "npm:react-draggable@4.4.1",
        "prop-types": "npm:prop-types@15.7.2"
      }
    },
    "npm:create-react-context@0.2.3": {
      "map": {
        "fbjs": "npm:fbjs@0.8.17",
        "gud": "npm:gud@1.0.0"
      }
    },
    "npm:react-event-listener@0.6.6": {
      "map": {
        "@babel/runtime": "npm:@babel/runtime@7.8.7",
        "prop-types": "npm:prop-types@15.7.2",
        "warning": "npm:warning@4.0.3"
      }
    },
    "npm:babel-helper-builder-react-jsx@6.26.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "esutils": "npm:esutils@2.0.3"
      }
    },
    "npm:is-valid-date@0.0.1": {
      "map": {
        "tape": "npm:tape@3.6.1"
      }
    },
    "npm:css-to-react-native@3.0.0": {
      "map": {
        "css-color-keywords": "npm:css-color-keywords@1.0.0",
        "camelize": "npm:camelize@1.0.0",
        "postcss-value-parser": "npm:postcss-value-parser@4.1.0"
      }
    },
    "npm:radium@0.19.6": {
      "map": {
        "inline-style-prefixer": "npm:inline-style-prefixer@2.0.5",
        "prop-types": "npm:prop-types@15.7.2",
        "array-find": "npm:array-find@1.0.0",
        "exenv": "npm:exenv@1.2.2"
      }
    },
    "npm:apollo-link-http-common@0.2.16": {
      "map": {
        "ts-invariant": "npm:ts-invariant@0.4.4",
        "tslib": "npm:tslib@1.13.0",
        "apollo-link": "npm:apollo-link@1.2.14"
      }
    },
    "npm:babel-plugin-jsx-v-model@2.0.3": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "svg-tags": "npm:svg-tags@1.0.0",
        "html-tags": "npm:html-tags@2.0.0"
      }
    },
    "npm:babel-plugin-transform-strict-mode@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:quill-delta@3.6.3": {
      "map": {
        "deep-equal": "npm:deep-equal@1.1.1",
        "extend": "npm:extend@3.0.2",
        "fast-diff": "npm:fast-diff@1.1.2"
      }
    },
    "npm:shallowequal@0.2.2": {
      "map": {
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:@emotion/is-prop-valid@0.8.8": {
      "map": {
        "@emotion/memoize": "npm:@emotion/memoize@0.7.4"
      }
    },
    "npm:optimism@0.10.3": {
      "map": {
        "@wry/context": "npm:@wry/context@0.4.4"
      }
    },
    "github:twbs/bootstrap@4.0.0-alpha.6": {
      "map": {
        "jquery": "npm:jquery@2.2.4",
        "tether": "github:shipshapecode/tether@1.4.7"
      }
    },
    "npm:bootstrap@4.5.0": {
      "map": {
        "tether": "github:shipshapecode/tether@1.4.7"
      }
    },
    "npm:recompose@0.26.0": {
      "map": {
        "fbjs": "npm:fbjs@0.8.17",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.5",
        "symbol-observable": "npm:symbol-observable@1.2.0",
        "change-emitter": "npm:change-emitter@0.1.6"
      }
    },
    "npm:global@4.4.0": {
      "map": {
        "process": "npm:process@0.11.10",
        "min-document": "npm:min-document@2.19.0",
        "node-min-document": "npm:min-document@2.19.0"
      }
    },
    "npm:re-resizable@5.0.1": {
      "map": {
        "fast-memoize": "npm:fast-memoize@2.5.2"
      }
    },
    "npm:@wry/equality@0.1.11": {
      "map": {
        "tslib": "npm:tslib@1.13.0"
      }
    },
    "npm:path-to-regexp@1.8.0": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:dom-iterator@1.0.0": {
      "map": {
        "component-xor": "npm:component-xor@0.0.4",
        "component-props": "npm:component-props@1.1.1"
      }
    },
    "npm:markdown-it@8.4.2": {
      "map": {
        "uc.micro": "npm:uc.micro@1.0.6",
        "mdurl": "npm:mdurl@1.0.1",
        "argparse": "npm:argparse@1.0.10",
        "entities": "npm:entities@1.1.2",
        "linkify-it": "npm:linkify-it@2.2.0"
      }
    },
    "npm:good-listener@1.2.2": {
      "map": {
        "delegate": "npm:delegate@3.2.0"
      }
    },
    "npm:@types/react@16.9.35": {
      "map": {
        "csstype": "npm:csstype@2.6.13",
        "@types/prop-types": "npm:@types/prop-types@15.7.3"
      }
    },
    "npm:inline-style-prefixer@3.0.8": {
      "map": {
        "bowser": "npm:bowser@1.9.4",
        "css-in-js-utils": "npm:css-in-js-utils@2.0.1"
      }
    },
    "npm:codemirror-graphql@0.6.12": {
      "map": {
        "graphql-language-service-parser": "npm:graphql-language-service-parser@0.1.14",
        "graphql-language-service-interface": "npm:graphql-language-service-interface@1.3.2"
      }
    },
    "npm:to-camel-case@1.0.0": {
      "map": {
        "to-space-case": "npm:to-space-case@1.0.0"
      }
    },
    "npm:zen-observable-ts@0.8.21": {
      "map": {
        "tslib": "npm:tslib@1.13.0",
        "zen-observable": "npm:zen-observable@0.8.15"
      }
    },
    "npm:query-string@4.3.4": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:tape@3.6.1": {
      "map": {
        "defined": "npm:defined@0.0.0",
        "deep-equal": "npm:deep-equal@0.2.2",
        "inherits": "npm:inherits@2.0.3",
        "through": "npm:through@2.3.8",
        "object-inspect": "npm:object-inspect@0.4.0",
        "glob": "npm:glob@3.2.11",
        "resumer": "npm:resumer@0.0.0"
      }
    },
    "npm:react-draggable@4.4.1": {
      "map": {
        "classnames": "npm:classnames@2.2.6",
        "prop-types": "npm:prop-types@15.7.2"
      }
    },
    "npm:inline-style-prefixer@2.0.5": {
      "map": {
        "bowser": "npm:bowser@1.9.4",
        "hyphenate-style-name": "npm:hyphenate-style-name@1.0.3"
      }
    },
    "npm:@wry/context@0.4.4": {
      "map": {
        "tslib": "npm:tslib@1.13.0",
        "@types/node": "npm:@types/node@10.17.28"
      }
    },
    "npm:dom-helpers@3.4.0": {
      "map": {
        "@babel/runtime": "npm:@babel/runtime@7.8.7"
      }
    },
    "npm:magic-string@0.25.7": {
      "map": {
        "sourcemap-codec": "npm:sourcemap-codec@1.4.8"
      }
    },
    "npm:dom-serializer@0.1.1": {
      "map": {
        "entities": "npm:entities@1.1.2",
        "domelementtype": "npm:domelementtype@1.3.1"
      }
    },
    "npm:regexpu-core@4.7.0": {
      "map": {
        "regenerate-unicode-properties": "npm:regenerate-unicode-properties@8.2.0",
        "unicode-match-property-ecmascript": "npm:unicode-match-property-ecmascript@1.0.4",
        "regjsparser": "npm:regjsparser@0.6.4",
        "regenerate": "npm:regenerate@1.4.1",
        "unicode-match-property-value-ecmascript": "npm:unicode-match-property-value-ecmascript@1.2.0",
        "regjsgen": "npm:regjsgen@0.5.1"
      }
    },
    "npm:graphql-language-service-interface@1.3.2": {
      "map": {
        "graphql-language-service-parser": "npm:graphql-language-service-parser@1.6.4",
        "graphql-language-service-utils": "npm:graphql-language-service-utils@1.2.2",
        "graphql-language-service-types": "npm:graphql-language-service-types@1.6.3",
        "graphql-config": "npm:graphql-config@2.0.1"
      }
    },
    "npm:htmlparser2@3.8.3": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1",
        "entities": "npm:entities@1.0.0",
        "node-readable-stream": "npm:readable-stream@1.1",
        "domutils": "npm:domutils@1.5.1",
        "domelementtype": "npm:domelementtype@1.3.1",
        "domhandler": "npm:domhandler@2.3.0"
      }
    },
    "npm:linkify-it@2.2.0": {
      "map": {
        "uc.micro": "npm:uc.micro@1.0.6"
      }
    },
    "npm:lodash.keys@3.1.2": {
      "map": {
        "lodash.isarray": "npm:lodash.isarray@3.0.4",
        "lodash._getnative": "npm:lodash._getnative@3.9.1",
        "lodash.isarguments": "npm:lodash.isarguments@3.1.0"
      }
    },
    "npm:css-in-js-utils@2.0.1": {
      "map": {
        "isobject": "npm:isobject@3.0.1",
        "hyphenate-style-name": "npm:hyphenate-style-name@1.0.3"
      }
    },
    "npm:regenerate-unicode-properties@8.2.0": {
      "map": {
        "regenerate": "npm:regenerate@1.4.1"
      }
    },
    "npm:css-select@1.0.0": {
      "map": {
        "domutils": "npm:domutils@1.4.3",
        "css-what": "npm:css-what@1.0.0",
        "nth-check": "npm:nth-check@1.0.2",
        "boolbase": "npm:boolbase@1.0.0"
      }
    },
    "npm:argparse@1.0.10": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3"
      }
    },
    "npm:graphql-language-service-parser@0.1.14": {
      "map": {
        "graphql-language-service-types": "npm:graphql-language-service-types@0.1.14"
      }
    },
    "npm:to-space-case@1.0.0": {
      "map": {
        "to-no-case": "npm:to-no-case@1.0.2"
      }
    },
    "npm:min-document@2.19.0": {
      "map": {
        "dom-walk": "npm:dom-walk@0.1.2"
      }
    },
    "npm:glob@3.2.11": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@0.3.0"
      }
    },
    "npm:regjsparser@0.6.4": {
      "map": {
        "jsesc": "npm:jsesc@0.5.0"
      }
    },
    "npm:readable-stream@1.1": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@0.0.1",
        "string_decoder": "npm:string_decoder@0.10.31",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:resumer@0.0.0": {
      "map": {
        "through": "npm:through@2.3.8"
      }
    },
    "npm:graphql-language-service-utils@1.2.2": {
      "map": {
        "graphql-config": "npm:graphql-config@2.0.1",
        "graphql-language-service-types": "npm:graphql-language-service-types@1.6.3"
      }
    },
    "npm:domutils@1.5.1": {
      "map": {
        "dom-serializer": "npm:dom-serializer@0.1.1",
        "domelementtype": "npm:domelementtype@1.3.1"
      }
    },
    "npm:domutils@1.4.3": {
      "map": {
        "domelementtype": "npm:domelementtype@1.3.1"
      }
    },
    "npm:nth-check@1.0.2": {
      "map": {
        "boolbase": "npm:boolbase@1.0.0"
      }
    },
    "npm:graphql-config@2.0.1": {
      "map": {
        "lodash": "npm:lodash@4.17.20",
        "minimatch": "npm:minimatch@3.0.4",
        "graphql-request": "npm:graphql-request@1.8.2",
        "js-yaml": "npm:js-yaml@3.13.1",
        "graphql-import": "npm:graphql-import@0.4.5"
      }
    },
    "npm:unicode-match-property-ecmascript@1.0.4": {
      "map": {
        "unicode-canonical-property-names-ecmascript": "npm:unicode-canonical-property-names-ecmascript@1.0.4",
        "unicode-property-aliases-ecmascript": "npm:unicode-property-aliases-ecmascript@1.1.0"
      }
    },
    "npm:domhandler@2.3.0": {
      "map": {
        "domelementtype": "npm:domelementtype@1.3.1"
      }
    },
    "npm:minimatch@0.3.0": {
      "map": {
        "lru-cache": "npm:lru-cache@2.6.3",
        "sigmund": "npm:sigmund@1.0.1"
      }
    },
    "npm:js-yaml@3.13.1": {
      "map": {
        "argparse": "npm:argparse@1.0.10",
        "esprima": "npm:esprima@4.0.1"
      }
    },
    "npm:graphql-request@1.8.2": {
      "map": {
        "cross-fetch": "npm:cross-fetch@2.2.2"
      }
    },
    "npm:cross-fetch@2.2.2": {
      "map": {
        "node-fetch": "npm:node-fetch@2.1.2",
        "whatwg-fetch": "npm:whatwg-fetch@2.0.4"
      }
    },
    "npm:graphql-import@0.4.5": {
      "map": {
        "lodash": "npm:lodash@4.17.20"
      }
    },
    "npm:parse5@3.0.3": {
      "map": {
        "@types/node": "npm:@types/node@10.17.28"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.12.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:crypto-browserify@3.12.0": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "browserify-cipher": "npm:browserify-cipher@1.0.1",
        "randombytes": "npm:randombytes@2.1.0",
        "randomfill": "npm:randomfill@1.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "public-encrypt": "npm:public-encrypt@4.0.3",
        "create-hmac": "npm:create-hmac@1.1.7",
        "browserify-sign": "npm:browserify-sign@4.2.1",
        "create-ecdh": "npm:create-ecdh@4.0.4",
        "pbkdf2": "npm:pbkdf2@3.1.1",
        "diffie-hellman": "npm:diffie-hellman@5.0.3"
      }
    },
    "npm:create-hash@1.2.0": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "md5.js": "npm:md5.js@1.3.5",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11"
      }
    },
    "npm:randomfill@1.0.4": {
      "map": {
        "randombytes": "npm:randombytes@2.1.0",
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:create-hmac@1.1.7": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11"
      }
    },
    "npm:public-encrypt@4.0.3": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "randombytes": "npm:randombytes@2.1.0",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.6",
        "bn.js": "npm:bn.js@4.11.9"
      }
    },
    "npm:diffie-hellman@5.0.3": {
      "map": {
        "randombytes": "npm:randombytes@2.1.0",
        "miller-rabin": "npm:miller-rabin@4.0.1",
        "bn.js": "npm:bn.js@4.11.9"
      }
    },
    "npm:browserify-cipher@1.0.1": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "browserify-des": "npm:browserify-des@1.0.2"
      }
    },
    "npm:md5.js@1.3.5": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "hash-base": "npm:hash-base@3.1.0"
      }
    },
    "npm:browserify-aes@1.2.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:ripemd160@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "hash-base": "npm:hash-base@3.1.0"
      }
    },
    "npm:browserify-des@1.0.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "des.js": "npm:des.js@1.0.1"
      }
    },
    "npm:sha.js@2.4.11": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "md5.js": "npm:md5.js@1.3.5",
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.9",
        "randombytes": "npm:randombytes@2.1.0"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.9",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.1.7",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:hash.js@1.1.7": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:randombytes@2.1.0": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:loose-envify@1.4.0": {
      "map": {
        "js-tokens": "npm:js-tokens@4.0.0"
      }
    },
    "npm:safe-buffer@5.1.2": {
      "map": {}
    },
    "npm:string_decoder@1.1.1": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:util-deprecate@1.0.2": {
      "map": {}
    },
    "npm:@babel/core@7.1.6": {
      "map": {
        "lodash": "npm:lodash@4.17.20",
        "debug": "npm:debug@4.1.1",
        "@babel/parser": "npm:@babel/parser@7.12.3",
        "source-map": "npm:source-map@0.5.7",
        "@babel/traverse": "npm:@babel/traverse@7.12.1",
        "@babel/helpers": "npm:@babel/helpers@7.1.5",
        "@babel/template": "npm:@babel/template@7.10.4",
        "resolve": "npm:resolve@1.12.0",
        "@babel/code-frame": "npm:@babel/code-frame@7.10.4",
        "@babel/types": "npm:@babel/types@7.8.3",
        "@babel/generator": "npm:@babel/generator@7.12.1",
        "convert-source-map": "npm:convert-source-map@1.7.0",
        "json5": "npm:json5@2.1.3",
        "semver": "npm:semver@5.7.1"
      }
    },
    "npm:babel-plugin-transform-builtin-classes@0.6.1": {
      "map": {
        "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-template": "npm:babel-template@6.26.0"
      }
    },
    "npm:babel-plugin-transform-es2015-classes@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-helper-define-map": "npm:babel-helper-define-map@6.26.0",
        "babel-template": "npm:babel-template@6.26.0",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.24.1",
        "babel-traverse": "npm:babel-traverse@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.24.1"
      }
    },
    "npm:supports-color@5.5.0": {
      "map": {
        "has-flag": "npm:has-flag@3.0.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:babel-runtime@6.26.0": {
      "map": {
        "core-js": "npm:core-js@2.6.11",
        "regenerator-runtime": "npm:regenerator-runtime@0.11.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.2"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.7.0"
      }
    },
    "npm:invariant@2.2.4": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0"
      }
    },
    "npm:babel-helper-define-map@6.26.0": {
      "map": {
        "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "lodash": "npm:lodash@4.17.20"
      }
    },
    "npm:babel-template@6.26.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-traverse": "npm:babel-traverse@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "lodash": "npm:lodash@4.17.20",
        "babylon": "npm:babylon@6.18.0"
      }
    },
    "npm:@babel/helpers@7.1.5": {
      "map": {
        "@babel/template": "npm:@babel/template@7.10.4",
        "@babel/traverse": "npm:@babel/traverse@7.12.1",
        "@babel/types": "npm:@babel/types@7.8.3"
      }
    },
    "npm:babel-messages@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:babel-helper-optimise-call-expression@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:babel-helper-function-name@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "babel-traverse": "npm:babel-traverse@6.26.0",
        "babel-template": "npm:babel-template@6.26.0",
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.24.1"
      }
    },
    "npm:babel-types@6.26.0": {
      "map": {
        "to-fast-properties": "npm:to-fast-properties@1.0.3",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "esutils": "npm:esutils@2.0.3",
        "lodash": "npm:lodash@4.17.20"
      }
    },
    "npm:babel-traverse@6.26.0": {
      "map": {
        "debug": "npm:debug@2.6.9",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "invariant": "npm:invariant@2.2.4",
        "lodash": "npm:lodash@4.17.20",
        "globals": "npm:globals@9.18.0",
        "babel-code-frame": "npm:babel-code-frame@6.26.0",
        "babylon": "npm:babylon@6.18.0"
      }
    },
    "npm:babel-helper-replace-supers@6.24.1": {
      "map": {
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-traverse": "npm:babel-traverse@6.26.0",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-template": "npm:babel-template@6.26.0",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:debug@2.6.9": {
      "map": {
        "ms": "npm:ms@2.0.0"
      }
    },
    "npm:babel-code-frame@6.26.0": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "js-tokens": "npm:js-tokens@3.0.2",
        "esutils": "npm:esutils@2.0.3"
      }
    },
    "npm:babel-helper-get-function-arity@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "supports-color": "npm:supports-color@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:ansi-styles@3.2.1": {
      "map": {
        "color-convert": "npm:color-convert@1.9.3"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:color-convert@1.9.3": {
      "map": {
        "color-name": "npm:color-name@1.1.3"
      }
    },
    "npm:prop-types@15.7.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0",
        "object-assign": "npm:object-assign@4.1.1",
        "react-is": "npm:react-is@16.13.1"
      }
    },
    "npm:stream-browserify@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "readable-stream": "npm:readable-stream@2.3.6"
      }
    },
    "npm:react-materialize@latest": {
      "map": {
        "classnames": "npm:classnames@2.2.6",
        "react": "npm:react@16.13.1",
        "react-dom": "npm:react-dom@16.13.1"
      }
    },
    "npm:resolve@1.12.0": {
      "map": {
        "path-parse": "npm:path-parse@1.0.6"
      }
    },
    "npm:jspm-nodelibs-punycode@0.2.1": {
      "map": {
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.1": {
      "map": {
        "domain-browser": "npm:domain-browser@1.2.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.9",
        "readable-stream": "npm:readable-stream@2.3.6"
      }
    },
    "npm:carbon-components@10.3.1": {
      "map": {
        "carbon-icons": "npm:carbon-icons@7.0.7",
        "flatpickr": "npm:flatpickr@4.6.1",
        "lodash.debounce": "npm:lodash.debounce@4.0.8",
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:warning@3.0.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0"
      }
    },
    "npm:des.js@1.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:readable-stream@2.3.6": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "string_decoder": "npm:string_decoder@1.1.1",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "inherits": "npm:inherits@2.0.4",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@2.0.1",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:@babel/types@7.8.3": {
      "map": {
        "lodash": "npm:lodash@4.17.20",
        "esutils": "npm:esutils@2.0.3",
        "to-fast-properties": "npm:to-fast-properties@2.0.0"
      }
    },
    "npm:chalk@2.4.2": {
      "map": {
        "supports-color": "npm:supports-color@5.5.0",
        "ansi-styles": "npm:ansi-styles@3.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
      }
    },
    "npm:debug@4.1.1": {
      "map": {
        "ms": "npm:ms@2.1.2"
      }
    },
    "npm:react@16.13.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0",
        "object-assign": "npm:object-assign@4.1.1",
        "prop-types": "npm:prop-types@15.7.2"
      }
    },
    "npm:@babel/runtime@7.8.7": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.13.7"
      }
    },
    "npm:react-dom@16.13.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0",
        "object-assign": "npm:object-assign@4.1.1",
        "prop-types": "npm:prop-types@15.7.2",
        "scheduler": "npm:scheduler@0.19.1"
      }
    },
    "npm:scheduler@0.19.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:convert-source-map@1.7.0": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:@carbon/icons-react@10.11.0": {
      "map": {
        "@carbon/icon-helpers": "npm:@carbon/icon-helpers@10.9.0"
      }
    },
    "npm:readable-stream@3.6.0": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "string_decoder": "npm:string_decoder@1.1.1",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:pbkdf2@3.1.1": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.7",
        "create-hash": "npm:create-hash@1.2.0",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11"
      }
    },
    "npm:browserify-sign@4.2.1": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "create-hmac": "npm:create-hmac@1.1.7",
        "readable-stream": "npm:readable-stream@3.6.0",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "create-hash": "npm:create-hash@1.2.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.6",
        "elliptic": "npm:elliptic@6.5.3",
        "bn.js": "npm:bn.js@5.1.3"
      }
    },
    "npm:parse-asn1@5.1.6": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "pbkdf2": "npm:pbkdf2@3.1.1",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "asn1.js": "npm:asn1.js@5.4.1"
      }
    },
    "npm:create-ecdh@4.0.4": {
      "map": {
        "elliptic": "npm:elliptic@6.5.3",
        "bn.js": "npm:bn.js@4.11.9"
      }
    },
    "npm:elliptic@6.5.3": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "bn.js": "npm:bn.js@4.11.9",
        "brorand": "npm:brorand@1.1.0",
        "hash.js": "npm:hash.js@1.1.7",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:hash-base@3.1.0": {
      "map": {
        "readable-stream": "npm:readable-stream@3.6.0",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "inherits": "npm:inherits@2.0.4"
      }
    },
    "npm:asn1.js@5.4.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.9",
        "safer-buffer": "npm:safer-buffer@2.1.2",
        "inherits": "npm:inherits@2.0.4",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:json5@2.1.3": {
      "map": {
        "minimist": "npm:minimist@1.2.5"
      }
    },
    "npm:stream-http@2.8.3": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "xtend": "npm:xtend@4.0.2",
        "readable-stream": "npm:readable-stream@2.3.6",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0"
      }
    },
    "npm:kind-of@3.2.2": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.6"
      }
    },
    "npm:is-data-descriptor@0.1.4": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2"
      }
    },
    "npm:is-accessor-descriptor@0.1.6": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2"
      }
    },
    "npm:brace-expansion@1.1.11": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@1.0.0"
      }
    },
    "npm:acorn@5.7.3": {
      "map": {}
    },
    "npm:json-schema-traverse@0.4.1": {
      "map": {}
    },
    "npm:punycode@2.1.1": {
      "map": {}
    },
    "npm:source-map@0.6.1": {
      "map": {}
    },
    "npm:jspm-nodelibs-timers@0.2.1": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:debug@3.2.6": {
      "map": {
        "ms": "npm:ms@2.1.2"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.10"
      }
    },
    "npm:webpack@3.12.0": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.4",
        "supports-color": "npm:supports-color@4.5.0",
        "acorn": "npm:acorn@5.7.3",
        "ajv": "npm:ajv@6.12.6",
        "json5": "npm:json5@0.5.1",
        "source-map": "npm:source-map@0.5.7",
        "loader-runner": "npm:loader-runner@2.4.0",
        "acorn-dynamic-import": "npm:acorn-dynamic-import@2.0.2",
        "memory-fs": "npm:memory-fs@0.4.1",
        "json-loader": "npm:json-loader@0.5.7",
        "webpack-sources": "npm:webpack-sources@1.4.3",
        "tapable": "npm:tapable@0.2.9",
        "node-libs-browser": "npm:node-libs-browser@2.2.1",
        "watchpack": "npm:watchpack@1.6.0",
        "escope": "npm:escope@3.6.0",
        "loader-utils": "npm:loader-utils@1.2.3",
        "interpret": "npm:interpret@1.2.0",
        "enhanced-resolve": "npm:enhanced-resolve@3.4.1",
        "ajv-keywords": "npm:ajv-keywords@3.4.1",
        "async": "npm:async@2.6.3",
        "uglifyjs-webpack-plugin": "npm:uglifyjs-webpack-plugin@0.4.6",
        "yargs": "npm:yargs@8.0.2"
      }
    },
    "npm:supports-color@4.5.0": {
      "map": {
        "has-flag": "npm:has-flag@2.0.0"
      }
    },
    "npm:rc@1.2.8": {
      "map": {
        "minimist": "npm:minimist@1.2.5",
        "strip-json-comments": "npm:strip-json-comments@2.0.1",
        "ini": "npm:ini@1.3.5",
        "deep-extend": "npm:deep-extend@0.6.0"
      }
    },
    "npm:memory-fs@0.4.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.6",
        "errno": "npm:errno@0.1.7"
      }
    },
    "npm:npmlog@4.1.2": {
      "map": {
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "set-blocking": "npm:set-blocking@2.0.0",
        "are-we-there-yet": "npm:are-we-there-yet@1.1.5",
        "gauge": "npm:gauge@2.7.4"
      }
    },
    "npm:escope@3.6.0": {
      "map": {
        "estraverse": "npm:estraverse@4.3.0",
        "esrecurse": "npm:esrecurse@4.2.1",
        "es6-weak-map": "npm:es6-weak-map@2.0.3",
        "es6-map": "npm:es6-map@0.1.5"
      }
    },
    "npm:enhanced-resolve@3.4.1": {
      "map": {
        "memory-fs": "npm:memory-fs@0.4.1",
        "object-assign": "npm:object-assign@4.1.1",
        "tapable": "npm:tapable@0.2.9",
        "graceful-fs": "npm:graceful-fs@4.2.4"
      }
    },
    "npm:acorn-dynamic-import@2.0.2": {
      "map": {
        "acorn": "npm:acorn@4.0.13"
      }
    },
    "npm:uglifyjs-webpack-plugin@0.4.6": {
      "map": {
        "source-map": "npm:source-map@0.5.7",
        "webpack-sources": "npm:webpack-sources@1.4.3",
        "uglify-js": "npm:uglify-js@2.8.29"
      }
    },
    "npm:yargs@8.0.2": {
      "map": {
        "set-blocking": "npm:set-blocking@2.0.0",
        "require-main-filename": "npm:require-main-filename@1.0.1",
        "camelcase": "npm:camelcase@4.1.0",
        "decamelize": "npm:decamelize@1.2.0",
        "os-locale": "npm:os-locale@2.1.0",
        "which-module": "npm:which-module@2.0.0",
        "string-width": "npm:string-width@2.1.1",
        "read-pkg-up": "npm:read-pkg-up@2.0.0",
        "get-caller-file": "npm:get-caller-file@1.0.3",
        "y18n": "npm:y18n@3.2.1",
        "require-directory": "npm:require-directory@2.1.1",
        "cliui": "npm:cliui@3.2.0",
        "yargs-parser": "npm:yargs-parser@7.0.0"
      }
    },
    "npm:watchpack@1.6.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.2.4",
        "chokidar": "npm:chokidar@2.1.8",
        "neo-async": "npm:neo-async@2.6.1"
      }
    },
    "npm:is-plain-object@2.0.4": {
      "map": {
        "isobject": "npm:isobject@3.0.1"
      }
    },
    "npm:osenv@0.1.5": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.2",
        "os-tmpdir": "npm:os-tmpdir@1.0.2"
      }
    },
    "npm:browserify-zlib@0.2.0": {
      "map": {
        "pako": "npm:pako@1.0.10"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "base64-js": "npm:base64-js@1.3.1",
        "ieee754": "npm:ieee754@1.2.1",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:are-we-there-yet@1.1.5": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.6",
        "delegates": "npm:delegates@1.0.0"
      }
    },
    "npm:gauge@2.7.4": {
      "map": {
        "string-width": "npm:string-width@1.0.2",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "object-assign": "npm:object-assign@4.1.1",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "has-unicode": "npm:has-unicode@2.0.1",
        "wide-align": "npm:wide-align@1.1.3",
        "aproba": "npm:aproba@1.2.0",
        "signal-exit": "npm:signal-exit@3.0.3"
      }
    },
    "npm:esrecurse@4.2.1": {
      "map": {
        "estraverse": "npm:estraverse@4.3.0"
      }
    },
    "npm:string-width@2.1.1": {
      "map": {
        "strip-ansi": "npm:strip-ansi@4.0.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@2.0.0"
      }
    },
    "npm:cliui@3.2.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "wrap-ansi": "npm:wrap-ansi@2.1.0"
      }
    },
    "npm:yargs-parser@7.0.0": {
      "map": {
        "camelcase": "npm:camelcase@4.1.0"
      }
    },
    "npm:uglify-js@2.8.29": {
      "map": {
        "yargs": "npm:yargs@3.10.0",
        "source-map": "npm:source-map@0.5.7"
      }
    },
    "npm:errno@0.1.7": {
      "map": {
        "prr": "npm:prr@1.0.1"
      }
    },
    "npm:console-browserify@1.1.0": {
      "map": {
        "date-now": "npm:date-now@0.1.4"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
        "code-point-at": "npm:code-point-at@1.1.0"
      }
    },
    "npm:es6-map@0.1.5": {
      "map": {
        "d": "npm:d@1.0.1",
        "es6-iterator": "npm:es6-iterator@2.0.3",
        "es6-set": "npm:es6-set@0.1.5",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "event-emitter": "npm:event-emitter@0.3.5",
        "es5-ext": "npm:es5-ext@0.10.51"
      }
    },
    "npm:read-pkg-up@2.0.0": {
      "map": {
        "find-up": "npm:find-up@2.1.0",
        "read-pkg": "npm:read-pkg@2.0.0"
      }
    },
    "npm:os-locale@2.1.0": {
      "map": {
        "lcid": "npm:lcid@1.0.0",
        "mem": "npm:mem@1.1.0",
        "execa": "npm:execa@0.7.0"
      }
    },
    "npm:util@0.10.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:wide-align@1.1.3": {
      "map": {
        "string-width": "npm:string-width@2.1.1"
      }
    },
    "npm:strip-ansi@4.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@3.0.0"
      }
    },
    "npm:yargs@3.10.0": {
      "map": {
        "camelcase": "npm:camelcase@1.2.1",
        "cliui": "npm:cliui@2.1.0",
        "decamelize": "npm:decamelize@1.2.0",
        "window-size": "npm:window-size@0.1.0"
      }
    },
    "npm:glob-parent@3.1.0": {
      "map": {
        "is-glob": "npm:is-glob@3.1.0",
        "path-dirname": "npm:path-dirname@1.0.2"
      }
    },
    "npm:es6-iterator@2.0.3": {
      "map": {
        "d": "npm:d@1.0.1",
        "es5-ext": "npm:es5-ext@0.10.51",
        "es6-symbol": "npm:es6-symbol@3.1.1"
      }
    },
    "npm:readdirp@2.2.1": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.2.4",
        "readable-stream": "npm:readable-stream@2.3.6",
        "micromatch": "npm:micromatch@3.1.10"
      }
    },
    "npm:es6-set@0.1.5": {
      "map": {
        "d": "npm:d@1.0.1",
        "es5-ext": "npm:es5-ext@0.10.51",
        "es6-iterator": "npm:es6-iterator@2.0.3",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "event-emitter": "npm:event-emitter@0.3.5"
      }
    },
    "npm:braces@2.3.2": {
      "map": {
        "isobject": "npm:isobject@3.0.1",
        "array-unique": "npm:array-unique@0.3.2",
        "repeat-element": "npm:repeat-element@1.1.3",
        "snapdragon-node": "npm:snapdragon-node@2.1.1",
        "extend-shallow": "npm:extend-shallow@2.0.1",
        "to-regex": "npm:to-regex@3.0.2",
        "arr-flatten": "npm:arr-flatten@1.1.0",
        "split-string": "npm:split-string@3.1.0",
        "snapdragon": "npm:snapdragon@0.8.2",
        "fill-range": "npm:fill-range@4.0.0"
      }
    },
    "npm:anymatch@2.0.0": {
      "map": {
        "normalize-path": "npm:normalize-path@2.1.1",
        "micromatch": "npm:micromatch@3.1.10"
      }
    },
    "npm:es6-symbol@3.1.1": {
      "map": {
        "d": "npm:d@1.0.1",
        "es5-ext": "npm:es5-ext@0.10.51"
      }
    },
    "npm:event-emitter@0.3.5": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.51",
        "d": "npm:d@1.0.1"
      }
    },
    "npm:execa@0.7.0": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "signal-exit": "npm:signal-exit@3.0.3",
        "npm-run-path": "npm:npm-run-path@2.0.2",
        "get-stream": "npm:get-stream@3.0.0",
        "p-finally": "npm:p-finally@1.0.0",
        "strip-eof": "npm:strip-eof@1.0.0",
        "cross-spawn": "npm:cross-spawn@5.1.0"
      }
    },
    "npm:wrap-ansi@2.1.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:is-binary-path@1.0.1": {
      "map": {
        "binary-extensions": "npm:binary-extensions@1.13.1"
      }
    },
    "npm:normalize-path@2.1.1": {
      "map": {
        "remove-trailing-separator": "npm:remove-trailing-separator@1.1.0"
      }
    },
    "npm:cliui@2.1.0": {
      "map": {
        "wordwrap": "npm:wordwrap@0.0.2",
        "right-align": "npm:right-align@0.1.3",
        "center-align": "npm:center-align@0.1.3"
      }
    },
    "npm:read-pkg@2.0.0": {
      "map": {
        "path-type": "npm:path-type@2.0.0",
        "load-json-file": "npm:load-json-file@2.0.0",
        "normalize-package-data": "npm:normalize-package-data@2.5.0"
      }
    },
    "npm:lcid@1.0.0": {
      "map": {
        "invert-kv": "npm:invert-kv@1.0.0"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:mem@1.1.0": {
      "map": {
        "mimic-fn": "npm:mimic-fn@1.2.0"
      }
    },
    "npm:find-up@2.1.0": {
      "map": {
        "locate-path": "npm:locate-path@2.0.0"
      }
    },
    "npm:is-glob@3.1.0": {
      "map": {
        "is-extglob": "npm:is-extglob@2.1.1"
      }
    },
    "npm:load-json-file@2.0.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.2.4",
        "strip-bom": "npm:strip-bom@3.0.0",
        "parse-json": "npm:parse-json@2.2.0",
        "pify": "npm:pify@2.3.0"
      }
    },
    "npm:to-regex@3.0.2": {
      "map": {
        "extend-shallow": "npm:extend-shallow@3.0.2",
        "safe-regex": "npm:safe-regex@1.1.0",
        "regex-not": "npm:regex-not@1.0.2",
        "define-property": "npm:define-property@2.0.2"
      }
    },
    "npm:snapdragon-node@2.1.1": {
      "map": {
        "isobject": "npm:isobject@3.0.1",
        "define-property": "npm:define-property@1.0.0",
        "snapdragon-util": "npm:snapdragon-util@3.0.1"
      }
    },
    "npm:fill-range@4.0.0": {
      "map": {
        "extend-shallow": "npm:extend-shallow@2.0.1",
        "is-number": "npm:is-number@3.0.0",
        "repeat-string": "npm:repeat-string@1.6.1",
        "to-regex-range": "npm:to-regex-range@2.1.1"
      }
    },
    "npm:split-string@3.1.0": {
      "map": {
        "extend-shallow": "npm:extend-shallow@3.0.2"
      }
    },
    "npm:snapdragon@0.8.2": {
      "map": {
        "debug": "npm:debug@2.6.9",
        "extend-shallow": "npm:extend-shallow@2.0.1",
        "source-map": "npm:source-map@0.5.7",
        "map-cache": "npm:map-cache@0.2.2",
        "define-property": "npm:define-property@0.2.5",
        "use": "npm:use@3.1.1",
        "source-map-resolve": "npm:source-map-resolve@0.5.3",
        "base": "npm:base@0.11.2"
      }
    },
    "npm:micromatch@3.1.10": {
      "map": {
        "array-unique": "npm:array-unique@0.3.2",
        "braces": "npm:braces@2.3.2",
        "extend-shallow": "npm:extend-shallow@3.0.2",
        "snapdragon": "npm:snapdragon@0.8.2",
        "to-regex": "npm:to-regex@3.0.2",
        "regex-not": "npm:regex-not@1.0.2",
        "fragment-cache": "npm:fragment-cache@0.2.1",
        "object.pick": "npm:object.pick@1.3.0",
        "define-property": "npm:define-property@2.0.2",
        "arr-diff": "npm:arr-diff@4.0.0",
        "kind-of": "npm:kind-of@6.0.3",
        "extglob": "npm:extglob@2.0.4",
        "nanomatch": "npm:nanomatch@1.2.13"
      }
    },
    "npm:locate-path@2.0.0": {
      "map": {
        "p-locate": "npm:p-locate@2.0.0",
        "path-exists": "npm:path-exists@3.0.0"
      }
    },
    "npm:extend-shallow@2.0.1": {
      "map": {
        "is-extendable": "npm:is-extendable@0.1.1"
      }
    },
    "npm:extend-shallow@3.0.2": {
      "map": {
        "is-extendable": "npm:is-extendable@1.0.1",
        "assign-symbols": "npm:assign-symbols@1.0.0"
      }
    },
    "npm:path-type@2.0.0": {
      "map": {
        "pify": "npm:pify@2.3.0"
      }
    },
    "npm:cross-spawn@5.1.0": {
      "map": {
        "shebang-command": "npm:shebang-command@1.2.0",
        "which": "npm:which@1.3.1",
        "lru-cache": "npm:lru-cache@4.1.5"
      }
    },
    "npm:is-extendable@1.0.1": {
      "map": {
        "is-plain-object": "npm:is-plain-object@2.0.4"
      }
    },
    "npm:regex-not@1.0.2": {
      "map": {
        "extend-shallow": "npm:extend-shallow@3.0.2",
        "safe-regex": "npm:safe-regex@1.1.0"
      }
    },
    "npm:center-align@0.1.3": {
      "map": {
        "lazy-cache": "npm:lazy-cache@1.0.4",
        "align-text": "npm:align-text@0.1.4"
      }
    },
    "npm:right-align@0.1.3": {
      "map": {
        "align-text": "npm:align-text@0.1.4"
      }
    },
    "npm:fragment-cache@0.2.1": {
      "map": {
        "map-cache": "npm:map-cache@0.2.2"
      }
    },
    "npm:object.pick@1.3.0": {
      "map": {
        "isobject": "npm:isobject@3.0.1"
      }
    },
    "npm:define-property@2.0.2": {
      "map": {
        "isobject": "npm:isobject@3.0.1",
        "is-descriptor": "npm:is-descriptor@1.0.2"
      }
    },
    "npm:is-number@3.0.0": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2"
      }
    },
    "npm:snapdragon-util@3.0.1": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2"
      }
    },
    "npm:extglob@2.0.4": {
      "map": {
        "array-unique": "npm:array-unique@0.3.2",
        "define-property": "npm:define-property@1.0.0",
        "extend-shallow": "npm:extend-shallow@2.0.1",
        "fragment-cache": "npm:fragment-cache@0.2.1",
        "regex-not": "npm:regex-not@1.0.2",
        "snapdragon": "npm:snapdragon@0.8.2",
        "to-regex": "npm:to-regex@3.0.2",
        "expand-brackets": "npm:expand-brackets@2.1.4"
      }
    },
    "npm:align-text@0.1.4": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2",
        "repeat-string": "npm:repeat-string@1.6.1",
        "longest": "npm:longest@1.0.1"
      }
    },
    "npm:to-regex-range@2.1.1": {
      "map": {
        "is-number": "npm:is-number@3.0.0",
        "repeat-string": "npm:repeat-string@1.6.1"
      }
    },
    "npm:p-locate@2.0.0": {
      "map": {
        "p-limit": "npm:p-limit@1.3.0"
      }
    },
    "npm:nanomatch@1.2.13": {
      "map": {
        "arr-diff": "npm:arr-diff@4.0.0",
        "array-unique": "npm:array-unique@0.3.2",
        "define-property": "npm:define-property@2.0.2",
        "extend-shallow": "npm:extend-shallow@3.0.2",
        "fragment-cache": "npm:fragment-cache@0.2.1",
        "kind-of": "npm:kind-of@6.0.3",
        "object.pick": "npm:object.pick@1.3.0",
        "regex-not": "npm:regex-not@1.0.2",
        "snapdragon": "npm:snapdragon@0.8.2",
        "to-regex": "npm:to-regex@3.0.2",
        "is-windows": "npm:is-windows@1.0.2"
      }
    },
    "npm:safe-regex@1.1.0": {
      "map": {
        "ret": "npm:ret@0.1.15"
      }
    },
    "npm:define-property@0.2.5": {
      "map": {
        "is-descriptor": "npm:is-descriptor@0.1.6"
      }
    },
    "npm:define-property@1.0.0": {
      "map": {
        "is-descriptor": "npm:is-descriptor@1.0.2"
      }
    },
    "npm:validate-npm-package-license@3.0.4": {
      "map": {
        "spdx-correct": "npm:spdx-correct@3.1.0",
        "spdx-expression-parse": "npm:spdx-expression-parse@3.0.0"
      }
    },
    "npm:shebang-command@1.2.0": {
      "map": {
        "shebang-regex": "npm:shebang-regex@1.0.0"
      }
    },
    "npm:parse-json@2.2.0": {
      "map": {
        "error-ex": "npm:error-ex@1.3.2"
      }
    },
    "npm:which@1.3.1": {
      "map": {
        "isexe": "npm:isexe@2.0.0"
      }
    },
    "npm:is-descriptor@1.0.2": {
      "map": {
        "kind-of": "npm:kind-of@6.0.3",
        "is-data-descriptor": "npm:is-data-descriptor@1.0.0",
        "is-accessor-descriptor": "npm:is-accessor-descriptor@1.0.0"
      }
    },
    "npm:expand-brackets@2.1.4": {
      "map": {
        "debug": "npm:debug@2.6.9",
        "define-property": "npm:define-property@0.2.5",
        "extend-shallow": "npm:extend-shallow@2.0.1",
        "regex-not": "npm:regex-not@1.0.2",
        "snapdragon": "npm:snapdragon@0.8.2",
        "to-regex": "npm:to-regex@3.0.2",
        "posix-character-classes": "npm:posix-character-classes@0.1.1"
      }
    },
    "npm:p-limit@1.3.0": {
      "map": {
        "p-try": "npm:p-try@1.0.0"
      }
    },
    "npm:class-utils@0.3.6": {
      "map": {
        "define-property": "npm:define-property@0.2.5",
        "isobject": "npm:isobject@3.0.1",
        "static-extend": "npm:static-extend@0.1.2",
        "arr-union": "npm:arr-union@3.1.0"
      }
    },
    "npm:spdx-expression-parse@3.0.0": {
      "map": {
        "spdx-license-ids": "npm:spdx-license-ids@3.0.5",
        "spdx-exceptions": "npm:spdx-exceptions@2.2.0"
      }
    },
    "npm:error-ex@1.3.2": {
      "map": {
        "is-arrayish": "npm:is-arrayish@0.2.1"
      }
    },
    "npm:cache-base@1.0.1": {
      "map": {
        "component-emitter": "npm:component-emitter@1.3.0",
        "isobject": "npm:isobject@3.0.1",
        "collection-visit": "npm:collection-visit@1.0.0",
        "to-object-path": "npm:to-object-path@0.3.0",
        "unset-value": "npm:unset-value@1.0.0",
        "get-value": "npm:get-value@2.0.6",
        "set-value": "npm:set-value@2.0.1",
        "has-value": "npm:has-value@1.0.0",
        "union-value": "npm:union-value@1.0.1"
      }
    },
    "npm:is-data-descriptor@1.0.0": {
      "map": {
        "kind-of": "npm:kind-of@6.0.3"
      }
    },
    "npm:is-accessor-descriptor@1.0.0": {
      "map": {
        "kind-of": "npm:kind-of@6.0.3"
      }
    },
    "npm:static-extend@0.1.2": {
      "map": {
        "define-property": "npm:define-property@0.2.5",
        "object-copy": "npm:object-copy@0.1.0"
      }
    },
    "npm:to-object-path@0.3.0": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2"
      }
    },
    "npm:unset-value@1.0.0": {
      "map": {
        "isobject": "npm:isobject@3.0.1",
        "has-value": "npm:has-value@0.3.1"
      }
    },
    "npm:object-copy@0.1.0": {
      "map": {
        "define-property": "npm:define-property@0.2.5",
        "kind-of": "npm:kind-of@3.2.2",
        "copy-descriptor": "npm:copy-descriptor@0.1.1"
      }
    },
    "npm:has-value@1.0.0": {
      "map": {
        "get-value": "npm:get-value@2.0.6",
        "isobject": "npm:isobject@3.0.1",
        "has-values": "npm:has-values@1.0.0"
      }
    },
    "npm:has-value@0.3.1": {
      "map": {
        "isobject": "npm:isobject@2.1.0",
        "get-value": "npm:get-value@2.0.6",
        "has-values": "npm:has-values@0.1.4"
      }
    },
    "npm:isobject@2.1.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:collection-visit@1.0.0": {
      "map": {
        "object-visit": "npm:object-visit@1.0.1",
        "map-visit": "npm:map-visit@1.0.0"
      }
    },
    "npm:object-visit@1.0.1": {
      "map": {
        "isobject": "npm:isobject@3.0.1"
      }
    },
    "npm:map-visit@1.0.0": {
      "map": {
        "object-visit": "npm:object-visit@1.0.1"
      }
    },
    "npm:has-values@1.0.0": {
      "map": {
        "kind-of": "npm:kind-of@4.0.0",
        "is-number": "npm:is-number@3.0.0"
      }
    },
    "npm:kind-of@4.0.0": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.6"
      }
    },
    "npm:lru-cache@4.1.5": {
      "map": {
        "yallist": "npm:yallist@2.1.2",
        "pseudomap": "npm:pseudomap@1.0.2"
      }
    },
    "npm:babel-runtime@5.8.38": {
      "map": {}
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:loader-utils@1.2.3": {
      "map": {
        "big.js": "npm:big.js@5.2.2",
        "json5": "npm:json5@1.0.1",
        "emojis-list": "npm:emojis-list@2.1.0"
      }
    },
    "npm:json5@1.0.1": {
      "map": {
        "minimist": "npm:minimist@1.2.5"
      }
    },
    "npm:async@2.6.3": {
      "map": {
        "lodash": "npm:lodash@4.17.20"
      }
    },
    "npm:node-libs-browser@2.2.1": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.2.0",
        "buffer": "npm:buffer@4.9.1",
        "crypto-browserify": "npm:crypto-browserify@3.12.0",
        "domain-browser": "npm:domain-browser@1.2.0",
        "os-browserify": "npm:os-browserify@0.3.0",
        "process": "npm:process@0.11.10",
        "punycode": "npm:punycode@1.3.2",
        "readable-stream": "npm:readable-stream@2.3.6",
        "stream-browserify": "npm:stream-browserify@2.0.2",
        "stream-http": "npm:stream-http@2.8.3",
        "string_decoder": "npm:string_decoder@1.1.1",
        "timers-browserify": "npm:timers-browserify@2.0.11",
        "url": "npm:url@0.11.0",
        "events": "npm:events@3.0.0",
        "path-browserify": "npm:path-browserify@0.0.1",
        "assert": "npm:assert@1.5.0",
        "https-browserify": "npm:https-browserify@1.0.0",
        "console-browserify": "npm:console-browserify@1.1.0",
        "constants-browserify": "npm:constants-browserify@1.0.0",
        "querystring-es3": "npm:querystring-es3@0.2.1",
        "tty-browserify": "npm:tty-browserify@0.0.0",
        "vm-browserify": "npm:vm-browserify@1.1.0",
        "util": "npm:util@0.11.1"
      }
    },
    "npm:timers-browserify@2.0.11": {
      "map": {
        "setimmediate": "npm:setimmediate@1.0.5"
      }
    },
    "npm:webpack-sources@1.4.3": {
      "map": {
        "source-map": "npm:source-map@0.6.1",
        "source-list-map": "npm:source-list-map@2.0.1"
      }
    },
    "npm:assert@1.5.0": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "util": "npm:util@0.10.3"
      }
    },
    "npm:util@0.11.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:es6-weak-map@2.0.3": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.3",
        "es5-ext": "npm:es5-ext@0.10.51",
        "d": "npm:d@1.0.1",
        "es6-symbol": "npm:es6-symbol@3.1.1"
      }
    },
    "npm:es5-ext@0.10.51": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.3",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "next-tick": "npm:next-tick@1.0.0"
      }
    },
    "npm:d@1.0.1": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.51",
        "type": "npm:type@1.2.0"
      }
    },
    "npm:chokidar@2.1.8": {
      "map": {
        "normalize-path": "npm:normalize-path@3.0.0",
        "braces": "npm:braces@2.3.2",
        "glob-parent": "npm:glob-parent@3.1.0",
        "inherits": "npm:inherits@2.0.3",
        "is-glob": "npm:is-glob@4.0.1",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "upath": "npm:upath@1.2.0",
        "is-binary-path": "npm:is-binary-path@1.0.1",
        "async-each": "npm:async-each@1.0.3",
        "anymatch": "npm:anymatch@2.0.0",
        "readdirp": "npm:readdirp@2.2.1"
      }
    },
    "npm:is-glob@4.0.1": {
      "map": {
        "is-extglob": "npm:is-extglob@2.1.1"
      }
    },
    "npm:normalize-package-data@2.5.0": {
      "map": {
        "resolve": "npm:resolve@1.12.0",
        "hosted-git-info": "npm:hosted-git-info@2.8.4",
        "semver": "npm:semver@5.7.1",
        "validate-npm-package-license": "npm:validate-npm-package-license@3.0.4"
      }
    },
    "npm:spdx-correct@3.1.0": {
      "map": {
        "spdx-expression-parse": "npm:spdx-expression-parse@3.0.0",
        "spdx-license-ids": "npm:spdx-license-ids@3.0.5"
      }
    },
    "npm:mixin-deep@1.3.2": {
      "map": {
        "for-in": "npm:for-in@1.0.2",
        "is-extendable": "npm:is-extendable@1.0.1"
      }
    },
    "npm:union-value@1.0.1": {
      "map": {
        "arr-union": "npm:arr-union@3.1.0",
        "get-value": "npm:get-value@2.0.6",
        "is-extendable": "npm:is-extendable@0.1.1",
        "set-value": "npm:set-value@2.0.1"
      }
    },
    "npm:set-value@2.0.1": {
      "map": {
        "extend-shallow": "npm:extend-shallow@2.0.1",
        "is-extendable": "npm:is-extendable@0.1.1",
        "is-plain-object": "npm:is-plain-object@2.0.4",
        "split-string": "npm:split-string@3.1.0"
      }
    },
    "npm:fsevents@1.2.9": {
      "map": {
        "nan": "npm:nan@2.14.2",
        "node-pre-gyp": "npm:node-pre-gyp@0.12.0"
      }
    },
    "npm:node-pre-gyp@0.12.0": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.4",
        "semver": "npm:semver@5.7.1",
        "nopt": "npm:nopt@4.0.3",
        "detect-libc": "npm:detect-libc@1.0.3",
        "npm-packlist": "npm:npm-packlist@1.4.8",
        "rimraf": "npm:rimraf@2.7.1",
        "rc": "npm:rc@1.2.8",
        "needle": "npm:needle@2.5.2",
        "tar": "npm:tar@4.4.13",
        "npmlog": "npm:npmlog@4.1.2"
      }
    },
    "npm:tar@4.4.13": {
      "map": {
        "yallist": "npm:yallist@3.1.1",
        "mkdirp": "npm:mkdirp@0.5.4",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "chownr": "npm:chownr@1.1.4",
        "fs-minipass": "npm:fs-minipass@1.2.7",
        "minizlib": "npm:minizlib@1.3.3",
        "minipass": "npm:minipass@2.9.0"
      }
    },
    "npm:rimraf@2.7.1": {
      "map": {
        "glob": "npm:glob@7.1.6"
      }
    },
    "npm:fs-minipass@1.2.7": {
      "map": {
        "minipass": "npm:minipass@2.9.0"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@2.0.4",
        "node-fetch": "npm:node-fetch@1.7.3"
      }
    },
    "npm:fbjs@0.8.17": {
      "map": {
        "core-js": "npm:core-js@1.2.7",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "loose-envify": "npm:loose-envify@1.4.0",
        "object-assign": "npm:object-assign@4.1.1",
        "setimmediate": "npm:setimmediate@1.0.5",
        "promise": "npm:promise@7.3.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.22"
      }
    },
    "npm:create-react-class@15.6.3": {
      "map": {
        "fbjs": "npm:fbjs@0.8.17",
        "loose-envify": "npm:loose-envify@1.4.0",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:node-fetch@1.7.3": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.13"
      }
    },
    "npm:promise@7.3.1": {
      "map": {
        "asap": "npm:asap@2.0.6"
      }
    },
    "npm:iconv-lite@0.4.24": {
      "map": {
        "safer-buffer": "npm:safer-buffer@2.1.2"
      }
    },
    "npm:ignore-walk@3.0.3": {
      "map": {
        "minimatch": "npm:minimatch@3.0.4"
      }
    },
    "npm:npm-bundled@1.1.1": {
      "map": {
        "npm-normalize-package-bin": "npm:npm-normalize-package-bin@1.0.1"
      }
    },
    "npm:minizlib@1.3.3": {
      "map": {
        "minipass": "npm:minipass@2.9.0"
      }
    },
    "npm:minipass@2.9.0": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "yallist": "npm:yallist@3.1.1"
      }
    },
    "npm:minimatch@3.0.4": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.11"
      }
    },
    "npm:npm-run-path@2.0.2": {
      "map": {
        "path-key": "npm:path-key@2.0.1"
      }
    },
    "npm:base@0.11.2": {
      "map": {
        "component-emitter": "npm:component-emitter@1.3.0",
        "define-property": "npm:define-property@1.0.0",
        "isobject": "npm:isobject@3.0.1",
        "pascalcase": "npm:pascalcase@0.1.1",
        "cache-base": "npm:cache-base@1.0.1",
        "class-utils": "npm:class-utils@0.3.6",
        "mixin-deep": "npm:mixin-deep@1.3.2"
      }
    },
    "npm:is-descriptor@0.1.6": {
      "map": {
        "is-accessor-descriptor": "npm:is-accessor-descriptor@0.1.6",
        "is-data-descriptor": "npm:is-data-descriptor@0.1.4",
        "kind-of": "npm:kind-of@5.1.0"
      }
    },
    "npm:redux@4.0.5": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0",
        "symbol-observable": "npm:symbol-observable@1.2.0"
      }
    },
    "github:dougludlow/plugin-sass@0.6.0": {
      "map": {
        "css-url-rewriter-ex": "npm:css-url-rewriter-ex@1.0.6",
        "autoprefixer": "npm:autoprefixer@6.7.7",
        "sass.js": "npm:sass.js@0.9.13",
        "css-asset-copier": "npm:css-asset-copier@1.0.2",
        "reqwest": "github:ded/reqwest@2.0.5",
        "postcss": "npm:postcss@5.2.18"
      }
    },
    "npm:regexp.prototype.flags@1.3.0": {
      "map": {
        "es-abstract": "npm:es-abstract@1.17.7",
        "define-properties": "npm:define-properties@1.1.3"
      }
    },
    "npm:css-url-rewriter-ex@1.0.6": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.8.3"
      }
    },
    "npm:css-asset-copier@1.0.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "fs-extra": "npm:fs-extra@0.30.0"
      }
    },
    "npm:autoprefixer@6.7.7": {
      "map": {
        "num2fraction": "npm:num2fraction@1.2.2",
        "browserslist": "npm:browserslist@1.7.7",
        "normalize-range": "npm:normalize-range@0.1.2",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.1",
        "postcss": "npm:postcss@5.2.18",
        "caniuse-db": "npm:caniuse-db@1.0.30001055"
      }
    },
    "npm:has@1.0.3": {
      "map": {
        "function-bind": "npm:function-bind@1.1.1"
      }
    },
    "npm:es-to-primitive@1.2.1": {
      "map": {
        "is-date-object": "npm:is-date-object@1.0.2",
        "is-callable": "npm:is-callable@1.2.2",
        "is-symbol": "npm:is-symbol@1.0.3"
      }
    },
    "npm:define-properties@1.1.3": {
      "map": {
        "object-keys": "npm:object-keys@1.1.1"
      }
    },
    "npm:fs-extra@0.30.0": {
      "map": {
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "rimraf": "npm:rimraf@2.7.1",
        "graceful-fs": "npm:graceful-fs@4.2.4",
        "klaw": "npm:klaw@1.3.1",
        "jsonfile": "npm:jsonfile@2.4.0"
      }
    },
    "npm:is-symbol@1.0.3": {
      "map": {
        "has-symbols": "npm:has-symbols@1.0.1"
      }
    },
    "npm:postcss@5.2.18": {
      "map": {
        "supports-color": "npm:supports-color@3.2.3",
        "chalk": "npm:chalk@1.1.3",
        "source-map": "npm:source-map@0.5.7",
        "js-base64": "npm:js-base64@2.5.2"
      }
    },
    "npm:supports-color@3.2.3": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:browserslist@1.7.7": {
      "map": {
        "caniuse-db": "npm:caniuse-db@1.0.30001055",
        "electron-to-chromium": "npm:electron-to-chromium@1.3.555"
      }
    },
    "npm:babel-plugin-transform-custom-element-classes@0.1.0": {
      "map": {
        "babel-template": "npm:babel-template@6.26.0"
      }
    },
    "npm:redux-first-routing@0.3.0": {
      "map": {
        "query-string": "npm:query-string@5.1.1",
        "history": "npm:history@4.10.1"
      }
    },
    "npm:query-string@5.1.1": {
      "map": {
        "decode-uri-component": "npm:decode-uri-component@0.2.0",
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:history@4.10.1": {
      "map": {
        "tiny-invariant": "npm:tiny-invariant@1.1.0",
        "value-equal": "npm:value-equal@1.0.1",
        "tiny-warning": "npm:tiny-warning@1.0.3",
        "@babel/runtime": "npm:@babel/runtime@7.8.7",
        "loose-envify": "npm:loose-envify@1.4.0",
        "resolve-pathname": "npm:resolve-pathname@3.0.0"
      }
    },
    "npm:redux-virtual-dom@0.9.3": {
      "map": {
        "deep-equal": "npm:deep-equal@1.1.1"
      }
    },
    "npm:deep-equal@1.1.1": {
      "map": {
        "regexp.prototype.flags": "npm:regexp.prototype.flags@1.3.0",
        "is-date-object": "npm:is-date-object@1.0.2",
        "object-keys": "npm:object-keys@1.1.1",
        "object-is": "npm:object-is@1.1.3",
        "is-arguments": "npm:is-arguments@1.0.4",
        "is-regex": "npm:is-regex@1.1.1"
      }
    },
    "npm:graphql-lodash@1.3.4": {
      "map": {
        "lodash-es": "npm:lodash-es@4.17.15",
        "graphql": "npm:graphql@0.11.7"
      }
    },
    "npm:graphql@0.11.7": {
      "map": {
        "iterall": "npm:iterall@1.1.3"
      }
    },
    "npm:encoding@0.1.13": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.6.2"
      }
    },
    "npm:iconv-lite@0.6.2": {
      "map": {
        "safer-buffer": "npm:safer-buffer@2.1.2"
      }
    },
    "npm:mkdirp@0.5.4": {
      "map": {
        "minimist": "npm:minimist@1.2.5"
      }
    },
    "npm:is-regex@1.1.1": {
      "map": {
        "has-symbols": "npm:has-symbols@1.0.1"
      }
    },
    "npm:glob@7.1.6": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "minimatch": "npm:minimatch@3.0.4",
        "once": "npm:once@1.4.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "inflight": "npm:inflight@1.0.6",
        "fs.realpath": "npm:fs.realpath@1.0.0"
      }
    },
    "npm:source-map-resolve@0.5.3": {
      "map": {
        "resolve-url": "npm:resolve-url@0.2.1",
        "atob": "npm:atob@2.1.2",
        "urix": "npm:urix@0.1.0",
        "decode-uri-component": "npm:decode-uri-component@0.2.0",
        "source-map-url": "npm:source-map-url@0.4.0"
      }
    },
    "npm:object-is@1.1.3": {
      "map": {
        "define-properties": "npm:define-properties@1.1.3",
        "es-abstract": "npm:es-abstract@1.18.0-next.1"
      }
    },
    "npm:es-abstract@1.17.7": {
      "map": {
        "has-symbols": "npm:has-symbols@1.0.1",
        "is-regex": "npm:is-regex@1.1.1",
        "object-keys": "npm:object-keys@1.1.1",
        "string.prototype.trimend": "npm:string.prototype.trimend@1.0.2",
        "string.prototype.trimstart": "npm:string.prototype.trimstart@1.0.2",
        "es-to-primitive": "npm:es-to-primitive@1.2.1",
        "object-inspect": "npm:object-inspect@1.8.0",
        "is-callable": "npm:is-callable@1.2.2",
        "function-bind": "npm:function-bind@1.1.1",
        "object.assign": "npm:object.assign@4.1.1",
        "has": "npm:has@1.0.3"
      }
    },
    "npm:es-abstract@1.18.0-next.1": {
      "map": {
        "has-symbols": "npm:has-symbols@1.0.1",
        "is-regex": "npm:is-regex@1.1.1",
        "object-keys": "npm:object-keys@1.1.1",
        "string.prototype.trimend": "npm:string.prototype.trimend@1.0.2",
        "string.prototype.trimstart": "npm:string.prototype.trimstart@1.0.2",
        "es-to-primitive": "npm:es-to-primitive@1.2.1",
        "object-inspect": "npm:object-inspect@1.8.0",
        "is-negative-zero": "npm:is-negative-zero@2.0.0",
        "is-callable": "npm:is-callable@1.2.2",
        "function-bind": "npm:function-bind@1.1.1",
        "object.assign": "npm:object.assign@4.1.1",
        "has": "npm:has@1.0.3"
      }
    },
    "npm:string.prototype.trimend@1.0.2": {
      "map": {
        "define-properties": "npm:define-properties@1.1.3",
        "es-abstract": "npm:es-abstract@1.18.0-next.1"
      }
    },
    "npm:string.prototype.trimstart@1.0.2": {
      "map": {
        "define-properties": "npm:define-properties@1.1.3",
        "es-abstract": "npm:es-abstract@1.18.0-next.1"
      }
    },
    "npm:buffer@5.7.0": {
      "map": {
        "ieee754": "npm:ieee754@1.2.1",
        "base64-js": "npm:base64-js@1.3.1"
      }
    },
    "npm:object.assign@4.1.1": {
      "map": {
        "define-properties": "npm:define-properties@1.1.3",
        "has-symbols": "npm:has-symbols@1.0.1",
        "object-keys": "npm:object-keys@1.1.1",
        "es-abstract": "npm:es-abstract@1.18.0-next.1"
      }
    },
    "npm:babel-plugin-styled-components@1.11.1": {
      "map": {
        "@babel/helper-module-imports": "npm:@babel/helper-module-imports@7.12.1",
        "@babel/helper-annotate-as-pure": "npm:@babel/helper-annotate-as-pure@7.10.4",
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "lodash": "npm:lodash@4.17.20"
      }
    },
    "npm:@babel/traverse@7.12.1": {
      "map": {
        "@babel/generator": "npm:@babel/generator@7.12.1",
        "@babel/helper-function-name": "npm:@babel/helper-function-name@7.10.4",
        "@babel/helper-split-export-declaration": "npm:@babel/helper-split-export-declaration@7.11.0",
        "lodash": "npm:lodash@4.17.20",
        "globals": "npm:globals@11.12.0",
        "@babel/code-frame": "npm:@babel/code-frame@7.10.4",
        "@babel/types": "npm:@babel/types@7.12.1",
        "@babel/parser": "npm:@babel/parser@7.12.3",
        "debug": "npm:debug@4.1.1"
      }
    },
    "npm:@babel/helper-module-imports@7.12.1": {
      "map": {
        "@babel/types": "npm:@babel/types@7.12.1"
      }
    },
    "npm:@babel/helper-annotate-as-pure@7.10.4": {
      "map": {
        "@babel/types": "npm:@babel/types@7.12.1"
      }
    },
    "npm:@babel/helper-function-name@7.10.4": {
      "map": {
        "@babel/helper-get-function-arity": "npm:@babel/helper-get-function-arity@7.10.4",
        "@babel/template": "npm:@babel/template@7.10.4",
        "@babel/types": "npm:@babel/types@7.12.1"
      }
    },
    "npm:@babel/helper-split-export-declaration@7.11.0": {
      "map": {
        "@babel/types": "npm:@babel/types@7.12.1"
      }
    },
    "npm:@babel/generator@7.12.1": {
      "map": {
        "@babel/types": "npm:@babel/types@7.12.1",
        "jsesc": "npm:jsesc@2.5.2",
        "source-map": "npm:source-map@0.5.7"
      }
    },
    "npm:@babel/types@7.12.1": {
      "map": {
        "lodash": "npm:lodash@4.17.20",
        "@babel/helper-validator-identifier": "npm:@babel/helper-validator-identifier@7.10.4",
        "to-fast-properties": "npm:to-fast-properties@2.0.0"
      }
    },
    "npm:@babel/helper-get-function-arity@7.10.4": {
      "map": {
        "@babel/types": "npm:@babel/types@7.12.1"
      }
    },
    "npm:@babel/template@7.10.4": {
      "map": {
        "@babel/code-frame": "npm:@babel/code-frame@7.10.4",
        "@babel/parser": "npm:@babel/parser@7.12.3",
        "@babel/types": "npm:@babel/types@7.12.1"
      }
    },
    "npm:@babel/code-frame@7.10.4": {
      "map": {
        "@babel/highlight": "npm:@babel/highlight@7.10.4"
      }
    },
    "npm:@babel/highlight@7.10.4": {
      "map": {
        "@babel/helper-validator-identifier": "npm:@babel/helper-validator-identifier@7.10.4",
        "js-tokens": "npm:js-tokens@4.0.0",
        "chalk": "npm:chalk@2.4.2"
      }
    },
    "npm:react-html-parser@2.0.2": {
      "map": {
        "htmlparser2": "npm:htmlparser2@3.10.1"
      }
    },
    "npm:htmlparser2@3.10.1": {
      "map": {
        "domutils": "npm:domutils@1.5.1",
        "domhandler": "npm:domhandler@2.3.0",
        "inherits": "npm:inherits@2.0.4",
        "domelementtype": "npm:domelementtype@1.3.1",
        "readable-stream": "npm:readable-stream@3.6.0",
        "entities": "npm:entities@1.1.2",
        "node-readable-stream": "npm:readable-stream@3.6.0"
      }
    },
    "npm:node-blockly@1.2.8": {
      "map": {
        "jsdom": "npm:jsdom@15.2.1",
        "xmlshim": "npm:xmlshim@0.2.7"
      }
    },
    "npm:request@2.88.2": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "forever-agent": "npm:forever-agent@0.6.1",
        "form-data": "npm:form-data@2.3.3",
        "mime-types": "npm:mime-types@2.1.27",
        "performance-now": "npm:performance-now@2.1.0",
        "har-validator": "npm:har-validator@5.1.5",
        "qs": "npm:qs@6.5.2",
        "tough-cookie": "npm:tough-cookie@2.5.0",
        "aws4": "npm:aws4@1.10.1",
        "http-signature": "npm:http-signature@1.2.0",
        "oauth-sign": "npm:oauth-sign@0.9.0",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "isstream": "npm:isstream@0.1.2",
        "tunnel-agent": "npm:tunnel-agent@0.6.0",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "uuid": "npm:uuid@3.4.0",
        "combined-stream": "npm:combined-stream@1.0.8",
        "aws-sign2": "npm:aws-sign2@0.7.0",
        "caseless": "npm:caseless@0.12.0",
        "extend": "npm:extend@3.0.2"
      }
    },
    "npm:jsdom@15.2.1": {
      "map": {
        "acorn": "npm:acorn@7.4.1",
        "pn": "npm:pn@1.1.0",
        "request": "npm:request@2.88.2",
        "parse5": "npm:parse5@5.1.0",
        "tough-cookie": "npm:tough-cookie@3.0.1",
        "abab": "npm:abab@2.0.5",
        "request-promise-native": "npm:request-promise-native@1.0.9",
        "w3c-hr-time": "npm:w3c-hr-time@1.0.2",
        "data-urls": "npm:data-urls@1.1.0",
        "nwsapi": "npm:nwsapi@2.2.0",
        "array-equal": "npm:array-equal@1.0.0",
        "saxes": "npm:saxes@3.1.11",
        "whatwg-mimetype": "npm:whatwg-mimetype@2.3.0",
        "whatwg-url": "npm:whatwg-url@7.1.0",
        "html-encoding-sniffer": "npm:html-encoding-sniffer@1.0.2",
        "escodegen": "npm:escodegen@1.14.3",
        "w3c-xmlserializer": "npm:w3c-xmlserializer@1.1.2",
        "whatwg-encoding": "npm:whatwg-encoding@1.0.5",
        "domexception": "npm:domexception@1.0.1",
        "ws": "npm:ws@7.3.1",
        "cssstyle": "npm:cssstyle@2.3.0",
        "xml-name-validator": "npm:xml-name-validator@3.0.0",
        "symbol-tree": "npm:symbol-tree@3.2.4",
        "cssom": "npm:cssom@0.4.4",
        "webidl-conversions": "npm:webidl-conversions@4.0.2",
        "acorn-globals": "npm:acorn-globals@4.3.4"
      }
    },
    "npm:canvas@2.6.1": {
      "map": {
        "nan": "npm:nan@2.14.2",
        "node-pre-gyp": "npm:node-pre-gyp@0.11.0",
        "simple-get": "npm:simple-get@3.1.0"
      }
    },
    "npm:cssstyle@2.3.0": {
      "map": {
        "cssom": "npm:cssom@0.3.8"
      }
    },
    "npm:xmlshim@0.2.7": {
      "map": {
        "jsdom": "npm:jsdom@6.5.1",
        "libxmljs": "github:znerol-forks/libxmljs@xmlwriter-0.19.7"
      }
    },
    "npm:form-data@2.3.3": {
      "map": {
        "combined-stream": "npm:combined-stream@1.0.8",
        "mime-types": "npm:mime-types@2.1.27",
        "asynckit": "npm:asynckit@0.4.0"
      }
    },
    "npm:tough-cookie@2.5.0": {
      "map": {
        "punycode": "npm:punycode@2.1.1",
        "psl": "npm:psl@1.8.0"
      }
    },
    "npm:tough-cookie@3.0.1": {
      "map": {
        "punycode": "npm:punycode@2.1.1",
        "psl": "npm:psl@1.8.0",
        "ip-regex": "npm:ip-regex@2.1.0"
      }
    },
    "npm:tunnel-agent@0.6.0": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:whatwg-url@7.1.0": {
      "map": {
        "webidl-conversions": "npm:webidl-conversions@4.0.2",
        "lodash.sortby": "npm:lodash.sortby@4.7.0",
        "tr46": "npm:tr46@1.0.1"
      }
    },
    "npm:data-urls@1.1.0": {
      "map": {
        "abab": "npm:abab@2.0.5",
        "whatwg-mimetype": "npm:whatwg-mimetype@2.3.0",
        "whatwg-url": "npm:whatwg-url@7.1.0"
      }
    },
    "npm:html-encoding-sniffer@1.0.2": {
      "map": {
        "whatwg-encoding": "npm:whatwg-encoding@1.0.5"
      }
    },
    "npm:whatwg-encoding@1.0.5": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.24"
      }
    },
    "npm:w3c-xmlserializer@1.1.2": {
      "map": {
        "domexception": "npm:domexception@1.0.1",
        "webidl-conversions": "npm:webidl-conversions@4.0.2",
        "xml-name-validator": "npm:xml-name-validator@3.0.0"
      }
    },
    "npm:domexception@1.0.1": {
      "map": {
        "webidl-conversions": "npm:webidl-conversions@4.0.2"
      }
    },
    "npm:acorn-globals@4.3.4": {
      "map": {
        "acorn": "npm:acorn@6.4.1",
        "acorn-walk": "npm:acorn-walk@6.2.0"
      }
    },
    "npm:node-pre-gyp@0.11.0": {
      "map": {
        "detect-libc": "npm:detect-libc@1.0.3",
        "mkdirp": "npm:mkdirp@0.5.4",
        "needle": "npm:needle@2.5.2",
        "nopt": "npm:nopt@4.0.3",
        "npm-packlist": "npm:npm-packlist@1.4.8",
        "npmlog": "npm:npmlog@4.1.2",
        "rc": "npm:rc@1.2.8",
        "rimraf": "npm:rimraf@2.7.1",
        "semver": "npm:semver@5.7.1",
        "tar": "npm:tar@4.4.13"
      }
    },
    "npm:mime-types@2.1.27": {
      "map": {
        "mime-db": "npm:mime-db@1.44.0"
      }
    },
    "npm:jsdom@6.5.1": {
      "map": {
        "acorn-globals": "npm:acorn-globals@1.0.9",
        "cssstyle": "npm:cssstyle@0.2.37",
        "parse5": "npm:parse5@1.5.1",
        "xml-name-validator": "npm:xml-name-validator@2.0.1",
        "cssom": "npm:cssom@0.3.8",
        "escodegen": "npm:escodegen@1.14.3",
        "request": "npm:request@2.88.2",
        "symbol-tree": "npm:symbol-tree@3.2.4",
        "tough-cookie": "npm:tough-cookie@2.5.0",
        "xtend": "npm:xtend@4.0.2",
        "node-request": "npm:request@2.88.2",
        "htmlparser2": "npm:htmlparser2@3.10.1",
        "acorn": "npm:acorn@2.7.0",
        "nwmatcher": "npm:nwmatcher@1.4.4",
        "whatwg-url-compat": "npm:whatwg-url-compat@0.6.5",
        "xmlhttprequest": "npm:xmlhttprequest@1.8.0",
        "browser-request": "npm:browser-request@0.3.3"
      }
    },
    "npm:combined-stream@1.0.8": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:http-signature@1.2.0": {
      "map": {
        "jsprim": "npm:jsprim@1.4.1",
        "assert-plus": "npm:assert-plus@1.0.0",
        "sshpk": "npm:sshpk@1.16.1"
      }
    },
    "npm:saxes@3.1.11": {
      "map": {
        "xmlchars": "npm:xmlchars@2.2.0"
      }
    },
    "npm:w3c-hr-time@1.0.2": {
      "map": {
        "browser-process-hrtime": "npm:browser-process-hrtime@1.0.0"
      }
    },
    "npm:simple-get@3.1.0": {
      "map": {
        "once": "npm:once@1.4.0",
        "simple-concat": "npm:simple-concat@1.0.1",
        "decompress-response": "npm:decompress-response@4.2.1",
        "node-decompress-response": "npm:decompress-response@4.2.1"
      }
    },
    "npm:utf-8-validate@5.0.2": {
      "map": {
        "node-gyp-build": "npm:node-gyp-build@3.7.0"
      }
    },
    "npm:bufferutil@4.0.1": {
      "map": {
        "node-gyp-build": "npm:node-gyp-build@3.7.0"
      }
    },
    "npm:acorn-globals@1.0.9": {
      "map": {
        "acorn": "npm:acorn@2.7.0"
      }
    },
    "npm:cssstyle@0.2.37": {
      "map": {
        "cssom": "npm:cssom@0.3.8"
      }
    },
    "npm:jsprim@1.4.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "verror": "npm:verror@1.10.0",
        "extsprintf": "npm:extsprintf@1.3.0",
        "json-schema": "npm:json-schema@0.2.3"
      }
    },
    "npm:tr46@1.0.1": {
      "map": {
        "punycode": "npm:punycode@2.1.1"
      }
    },
    "npm:sshpk@1.16.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "safer-buffer": "npm:safer-buffer@2.1.2",
        "jsbn": "npm:jsbn@0.1.1",
        "ecc-jsbn": "npm:ecc-jsbn@0.1.2",
        "getpass": "npm:getpass@0.1.7",
        "dashdash": "npm:dashdash@1.14.1",
        "asn1": "npm:asn1@0.2.4",
        "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.2",
        "tweetnacl": "npm:tweetnacl@0.14.5"
      }
    },
    "npm:optionator@0.8.3": {
      "map": {
        "fast-levenshtein": "npm:fast-levenshtein@2.0.6",
        "levn": "npm:levn@0.3.0",
        "type-check": "npm:type-check@0.3.2",
        "deep-is": "npm:deep-is@0.1.3",
        "prelude-ls": "npm:prelude-ls@1.1.2",
        "word-wrap": "npm:word-wrap@1.2.3"
      }
    },
    "npm:whatwg-url-compat@0.6.5": {
      "map": {
        "tr46": "npm:tr46@0.0.3"
      }
    },
    "npm:ecc-jsbn@0.1.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.1",
        "safer-buffer": "npm:safer-buffer@2.1.2"
      }
    },
    "npm:verror@1.10.0": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "extsprintf": "npm:extsprintf@1.3.0"
      }
    },
    "npm:asn1@0.2.4": {
      "map": {
        "safer-buffer": "npm:safer-buffer@2.1.2"
      }
    },
    "npm:dashdash@1.14.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:levn@0.3.0": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2",
        "type-check": "npm:type-check@0.3.2"
      }
    },
    "npm:bcrypt-pbkdf@1.0.2": {
      "map": {
        "tweetnacl": "npm:tweetnacl@0.14.5"
      }
    },
    "npm:getpass@0.1.7": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:decompress-response@4.2.1": {
      "map": {
        "mimic-response": "npm:mimic-response@2.1.0"
      }
    },
    "npm:type-check@0.3.2": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:har-validator@5.1.5": {
      "map": {
        "har-schema": "npm:har-schema@2.0.0",
        "ajv": "npm:ajv@6.12.6"
      }
    },
    "npm:request-promise-native@1.0.9": {
      "map": {
        "tough-cookie": "npm:tough-cookie@2.5.0",
        "request-promise-core": "npm:request-promise-core@1.1.4",
        "stealthy-require": "npm:stealthy-require@1.1.1"
      }
    },
    "npm:escodegen@1.14.3": {
      "map": {
        "optionator": "npm:optionator@0.8.3",
        "esprima": "npm:esprima@4.0.1",
        "estraverse": "npm:estraverse@4.3.0",
        "esutils": "npm:esutils@2.0.3"
      }
    },
    "npm:request-promise-core@1.1.4": {
      "map": {
        "lodash": "npm:lodash@4.17.20"
      }
    },
    "npm:needle@2.5.2": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.24",
        "sax": "npm:sax@1.2.4",
        "debug": "npm:debug@3.2.6"
      }
    },
    "npm:ajv@6.12.6": {
      "map": {
        "json-schema-traverse": "npm:json-schema-traverse@0.4.1",
        "uri-js": "npm:uri-js@4.4.0",
        "fast-json-stable-stringify": "npm:fast-json-stable-stringify@2.1.0",
        "fast-deep-equal": "npm:fast-deep-equal@3.1.3"
      }
    },
    "npm:npm-packlist@1.4.8": {
      "map": {
        "npm-normalize-package-bin": "npm:npm-normalize-package-bin@1.0.1",
        "ignore-walk": "npm:ignore-walk@3.0.3",
        "npm-bundled": "npm:npm-bundled@1.1.1"
      }
    },
    "npm:uri-js@4.4.0": {
      "map": {
        "punycode": "npm:punycode@2.1.1"
      }
    },
    "npm:nopt@4.0.3": {
      "map": {
        "osenv": "npm:osenv@0.1.5",
        "abbrev": "npm:abbrev@1.1.1"
      }
    },
    "npm:graphql-language-service-parser@1.6.4": {
      "map": {
        "graphql-language-service-types": "npm:graphql-language-service-types@1.6.3",
        "typescript": "npm:typescript@3.9.7"
      }
    }
  }
});
