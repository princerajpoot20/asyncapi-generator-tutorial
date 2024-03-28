'use strict';

require('source-map-support/register');
var generatorReactSdk = require('@asyncapi/generator-react-sdk');
var jsxRuntime = require('react/cjs/react-jsx-runtime.production.min');

function index ({
  asyncapi
}) {
  //3
  return /*#__PURE__*/jsxRuntime.jsx(generatorReactSdk.File, {
    name: "client.py",
    children: asyncapi.info().title()
  });
}

module.exports = index;
//# sourceMappingURL=index.js.map
