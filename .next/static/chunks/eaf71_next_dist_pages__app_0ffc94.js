(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/eaf71_next_dist_pages__app_0ffc94.js", {

"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/pages/_app.js [client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return App;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js [client] (ecmascript)"));
const _utils = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)");
/**
 * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
 * This allows for keeping state between navigation, custom error handling, injecting additional data.
 */ async function appGetInitialProps(param) {
    let { Component, ctx } = param;
    const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
        pageProps
    };
}
class App extends _react.default.Component {
    render() {
        const { Component, pageProps } = this.props;
        return /*#__PURE__*/ _react.default.createElement(Component, pageProps);
    }
}
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=_app.js.map

}.call(this) }),
}]);

//# sourceMappingURL=eaf71_next_dist_pages__app_0ffc94.js.map