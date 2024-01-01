(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/eaf71_next_dist_client_92cf66._.js", {

"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRouterCacheKey", {
    enumerable: true,
    get: function() {
        return createRouterCacheKey;
    }
});
function createRouterCacheKey(segment, withoutSearchParameters) {
    if (withoutSearchParameters === void 0) withoutSearchParameters = false;
    return Array.isArray(segment) ? (segment[0] + "|" + segment[1] + "|" + segment[2]).toLowerCase() : withoutSearchParameters && segment.startsWith("__PAGE__") ? "__PAGE__" : segment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-router-cache-key.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSegmentValue", {
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
});
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-segment-value.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/async-local-storage.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createAsyncLocalStorage", {
    enumerable: true,
    get: function() {
        return createAsyncLocalStorage;
    }
});
const sharedAsyncLocalStorageNotAvailableError = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
}
const maybeGlobalAsyncLocalStorage = globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=async-local-storage.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/static-generation-async-storage.external.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "staticGenerationAsyncStorage", {
    enumerable: true,
    get: function() {
        return staticGenerationAsyncStorage;
    }
});
const _asynclocalstorage = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/async-local-storage.js [app-client] (ecmascript)");
const staticGenerationAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-async-storage.external.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/bailout-to-client-rendering.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "bailoutToClientRendering", {
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
});
const _nossrerror = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/lazy-dynamic/no-ssr-error.js [app-client] (ecmascript)");
const _staticgenerationasyncstorageexternal = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/static-generation-async-storage.external.js [app-client] (ecmascript)");
function bailoutToClientRendering() {
    const staticGenerationStore = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _nossrerror.throwWithNoSSR)();
    }
    return false;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/not-found.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    notFound: null,
    isNotFoundError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    notFound: function() {
        return notFound;
    },
    isNotFoundError: function() {
        return isNotFoundError;
    }
});
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
function isNotFoundError(error) {
    return (error == null ? void 0 : error.digest) === NOT_FOUND_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/request-async-storage.external.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "requestAsyncStorage", {
    enumerable: true,
    get: function() {
        return requestAsyncStorage;
    }
});
const _asynclocalstorage = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/async-local-storage.js [app-client] (ecmascript)");
const requestAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-async-storage.external.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RedirectType: null,
    getRedirectError: null,
    redirect: null,
    permanentRedirect: null,
    isRedirectError: null,
    getURLFromRedirectError: null,
    getRedirectTypeFromError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectType: function() {
        return RedirectType;
    },
    getRedirectError: function() {
        return getRedirectError;
    },
    redirect: function() {
        return redirect;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    isRedirectError: function() {
        return isRedirectError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    }
});
const _requestasyncstorageexternal = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/request-async-storage.external.js [app-client] (ecmascript)");
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
var RedirectType;
(function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
})(RedirectType || (RedirectType = {}));
function getRedirectError(url, type, permanent) {
    if (permanent === void 0) permanent = false;
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + permanent;
    const requestStore = _requestasyncstorageexternal.requestAsyncStorage.getStore();
    if (requestStore) {
        error.mutableCookies = requestStore.mutableCookies;
    }
    return error;
}
function redirect(url, type) {
    if (type === void 0) type = "replace";
    throw getRedirectError(url, type, false);
}
function permanentRedirect(url, type) {
    if (type === void 0) type = "replace";
    throw getRedirectError(url, type, true);
}
function isRedirectError(error) {
    if (typeof (error == null ? void 0 : error.digest) !== "string") return false;
    const [errorCode, type, destination, permanent] = error.digest.split(";", 4);
    return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string" && (permanent === "true" || permanent === "false");
}
function getURLFromRedirectError(error) {
    if (!isRedirectError(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(";", 3)[2];
}
function getRedirectTypeFromError(error) {
    if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
    }
    return error.digest.split(";", 2)[1];
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/client-hook-in-server-component-error.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "clientHookInServerComponentError", {
    enumerable: true,
    get: function() {
        return clientHookInServerComponentError;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function clientHookInServerComponentError(hookName) {
    if ("TURBOPACK compile-time truthy", 1) {
        // If useState is undefined we're in a server component
        if (!_react.default.useState) {
            throw new Error("" + hookName + ' only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component');
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-hook-in-server-component-error.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    useSearchParams: null,
    usePathname: null,
    ServerInsertedHTMLContext: null,
    useServerInsertedHTML: null,
    useRouter: null,
    useParams: null,
    useSelectedLayoutSegments: null,
    useSelectedLayoutSegment: null,
    redirect: null,
    permanentRedirect: null,
    RedirectType: null,
    notFound: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    usePathname: function() {
        return usePathname;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    },
    useRouter: function() {
        return useRouter;
    },
    useParams: function() {
        return useParams;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    RedirectType: function() {
        return _redirect.RedirectType;
    },
    notFound: function() {
        return _notfound.notFound;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _clienthookinservercomponenterror = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/client-hook-in-server-component-error.js [app-client] (ecmascript)");
const _getsegmentvalue = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js [app-client] (ecmascript)");
const _serverinsertedhtmlsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js [app-client] (ecmascript)");
const _redirect = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
const _notfound = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/not-found.js [app-client] (ecmascript)");
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
        this.size = urlSearchParams.size;
    }
}
function useSearchParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSearchParams");
    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (typeof window === "undefined") {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/bailout-to-client-rendering.js [app-client] (ecmascript)");
        if (bailoutToClientRendering()) {
            // TODO-APP: handle dynamic = 'force-static' here and on the client
            return readonlySearchParams;
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("usePathname");
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
}
function useRouter() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useRouter");
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// this function performs a depth-first search of the tree to find the selected
// params
function getSelectedParams(tree, params) {
    if (params === void 0) params = {};
    const parallelRoutes = tree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith("__PAGE__")) continue;
        // Ensure catchAll and optional catchall are turned into an array
        const isCatchAll = isDynamicParameter && (segment[2] === "c" || segment[2] === "oc");
        if (isCatchAll) {
            params[segment[0]] = segment[1].split("/");
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
function useParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useParams");
    const globalLayoutRouter = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    const pathParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
    return (0, _react.useMemo)(()=>{
        // When it's under app router
        if (globalLayoutRouter == null ? void 0 : globalLayoutRouter.tree) {
            return getSelectedParams(globalLayoutRouter.tree);
        }
        // When it's under client side pages router
        return pathParams;
    }, [
        globalLayoutRouter == null ? void 0 : globalLayoutRouter.tree,
        pathParams
    ]);
}
// TODO-APP: handle parallel routes
/**
 * Get the canonical parameters from the current level to the leaf node.
 */ function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith("__PAGE__")) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegments");
    const { tree } = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegment");
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/not-found-boundary.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NotFoundBoundary", {
    enumerable: true,
    get: function() {
        return NotFoundBoundary;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _navigation = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
class NotFoundErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((error == null ? void 0 : error.digest) === "NEXT_NOT_FOUND") {
            return {
                notFoundTriggered: true
            };
        }
        // Re-throw if error is not for 404
        throw error;
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.notFoundTriggered) {
            return {
                notFoundTriggered: false,
                previousPathname: props.pathname
            };
        }
        return {
            notFoundTriggered: state.notFoundTriggered,
            previousPathname: props.pathname
        };
    }
    render() {
        if (this.state.notFoundTriggered) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            }), ("TURBOPACK compile-time value", "development") === "development" && /*#__PURE__*/ _react.default.createElement("meta", {
                name: "next-error",
                content: "not-found"
            }), this.props.notFoundStyles, this.props.notFound);
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            notFoundTriggered: !!props.asNotFound,
            previousPathname: props.pathname
        };
    }
}
function NotFoundBoundary(param) {
    let { notFound, notFoundStyles, asNotFound, children } = param;
    const pathname = (0, _navigation.usePathname)();
    return notFound ? /*#__PURE__*/ _react.default.createElement(NotFoundErrorBoundary, {
        pathname: pathname,
        notFound: notFound,
        notFoundStyles: notFoundStyles,
        asNotFound: asNotFound
    }, children) : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found-boundary.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RedirectErrorBoundary: null,
    RedirectBoundary: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectErrorBoundary: function() {
        return RedirectErrorBoundary;
    },
    RedirectBoundary: function() {
        return RedirectBoundary;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _navigation = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
const _redirect = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
function HandleRedirect(param) {
    let { redirect, reset, redirectType } = param;
    const router = (0, _navigation.useRouter)();
    (0, _react.useEffect)(()=>{
        _react.default.startTransition(()=>{
            if (redirectType === _redirect.RedirectType.push) {
                router.push(redirect, {});
            } else {
                router.replace(redirect, {});
            }
            reset();
        });
    }, [
        redirect,
        redirectType,
        reset,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _redirect.isRedirectError)(error)) {
            const url = (0, _redirect.getURLFromRedirectError)(error);
            const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
            return {
                redirect: url,
                redirectType
            };
        }
        // Re-throw if error is not for redirect
        throw error;
    }
    render() {
        const { redirect, redirectType } = this.state;
        if (redirect !== null && redirectType !== null) {
            return /*#__PURE__*/ _react.default.createElement(HandleRedirect, {
                redirect: redirect,
                redirectType: redirectType,
                reset: ()=>this.setState({
                        redirect: null
                    })
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            redirect: null,
            redirectType: null
        };
    }
}
function RedirectBoundary(param) {
    let { children } = param;
    const router = (0, _navigation.useRouter)();
    return /*#__PURE__*/ _react.default.createElement(RedirectErrorBoundary, {
        router: router
    }, children);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-boundary.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    matchSegment: null,
    canSegmentBeOverridden: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    matchSegment: function() {
        return matchSegment;
    },
    canSegmentBeOverridden: function() {
        return canSegmentBeOverridden;
    }
});
const _getsegmentparam = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/app-render/get-segment-param.js [app-client] (ecmascript)");
const matchSegment = (existingSegment, segment)=>{
    // segment is either Array or string
    if (typeof existingSegment === "string") {
        if (typeof segment === "string") {
            // Common case: segment is just a string
            return existingSegment === segment;
        }
        return false;
    }
    if (typeof segment === "string") {
        return false;
    }
    return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
};
const canSegmentBeOverridden = (existingSegment, segment)=>{
    var _getSegmentParam;
    if (Array.isArray(existingSegment) || !Array.isArray(segment)) {
        return false;
    }
    return ((_getSegmentParam = (0, _getsegmentparam.getSegmentParam)(existingSegment)) == null ? void 0 : _getSegmentParam.param) === segment[0];
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ErrorBoundaryHandler: null,
    GlobalError: null,
    default: null,
    ErrorBoundary: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorBoundaryHandler: function() {
        return ErrorBoundaryHandler;
    },
    GlobalError: function() {
        return GlobalError;
    },
    // Exported so that the import signature in the loaders can be identical to user
    // supplied custom global error signatures.
    default: function() {
        return _default;
    },
    ErrorBoundary: function() {
        return ErrorBoundary;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _navigation = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "28px",
        margin: "0 8px"
    }
};
// if we are revalidating we want to re-throw the error so the
// function crashes so we can maintain our previous cache
// instead of caching the error page
function HandleISRError(param) {
    let { error } = param;
    if (typeof fetch.__nextGetStaticStore === "function") {
        var _fetch___nextGetStaticStore;
        const store = (_fetch___nextGetStaticStore = fetch.__nextGetStaticStore()) == null ? void 0 : _fetch___nextGetStaticStore.getStore();
        if ((store == null ? void 0 : store.isRevalidate) || (store == null ? void 0 : store.isStaticGeneration)) {
            console.error(error);
            throw error;
        }
    }
    return null;
}
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.error) {
            return {
                error: null,
                previousPathname: props.pathname
            };
        }
        return {
            error: state.error,
            previousPathname: props.pathname
        };
    }
    render() {
        if (this.state.error) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(HandleISRError, {
                error: this.state.error
            }), this.props.errorStyles, this.props.errorScripts, /*#__PURE__*/ _react.default.createElement(this.props.errorComponent, {
                error: this.state.error,
                reset: this.reset
            }));
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null,
            previousPathname: this.props.pathname
        };
    }
}
function GlobalError(param) {
    let { error } = param;
    const digest = error == null ? void 0 : error.digest;
    return /*#__PURE__*/ _react.default.createElement("html", {
        id: "__next_error__"
    }, /*#__PURE__*/ _react.default.createElement("head", null), /*#__PURE__*/ _react.default.createElement("body", null, /*#__PURE__*/ _react.default.createElement(HandleISRError, {
        error: error
    }), /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.error
    }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("h2", {
        style: styles.text
    }, "Application error: a " + (digest ? "server" : "client") + "-side exception has occurred (see the " + (digest ? "server logs" : "browser console") + " for more information)."), digest ? /*#__PURE__*/ _react.default.createElement("p", {
        style: styles.text
    }, "Digest: " + digest) : null))));
}
const _default = GlobalError;
function ErrorBoundary(param) {
    let { errorComponent, errorStyles, errorScripts, children } = param;
    const pathname = (0, _navigation.usePathname)();
    if (errorComponent) {
        return /*#__PURE__*/ _react.default.createElement(ErrorBoundaryHandler, {
            pathname: pathname,
            errorComponent: errorComponent,
            errorStyles: errorStyles,
            errorScripts: errorScripts
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/infinite-promise.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

/**
 * Used to cache in createInfinitePromise
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createInfinitePromise", {
    enumerable: true,
    get: function() {
        return createInfinitePromise;
    }
});
let infinitePromise;
function createInfinitePromise() {
    if (!infinitePromise) {
        // Only create the Promise once
        infinitePromise = new Promise(()=>{
        // This is used to debug when the rendering is never updated.
        // setTimeout(() => {
        //   infinitePromise = new Error('Infinite promise')
        //   resolve()
        // }, 5000)
        });
    }
    return infinitePromise;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=infinite-promise.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    PrefetchKind: null,
    ACTION_REFRESH: null,
    ACTION_NAVIGATE: null,
    ACTION_RESTORE: null,
    ACTION_SERVER_PATCH: null,
    ACTION_PREFETCH: null,
    ACTION_FAST_REFRESH: null,
    ACTION_SERVER_ACTION: null,
    isThenable: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PrefetchKind: function() {
        return PrefetchKind;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    ACTION_PREFETCH: function() {
        return ACTION_PREFETCH;
    },
    ACTION_FAST_REFRESH: function() {
        return ACTION_FAST_REFRESH;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    },
    isThenable: function() {
        return isThenable;
    }
});
const ACTION_REFRESH = "refresh";
const ACTION_NAVIGATE = "navigate";
const ACTION_RESTORE = "restore";
const ACTION_SERVER_PATCH = "server-patch";
const ACTION_PREFETCH = "prefetch";
const ACTION_FAST_REFRESH = "fast-refresh";
const ACTION_SERVER_ACTION = "server-action";
var PrefetchKind;
(function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
})(PrefetchKind || (PrefetchKind = {}));
function isThenable(value) {
    // TODO: We don't gain anything from this abstraction. It's unsound, and only
    // makes sense in the specific places where we use it. So it's better to keep
    // the type coercion inline, instead of leaking this to other places in
    // the codebase.
    return value && (typeof value === "object" || typeof value === "function") && typeof value.then === "function";
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parse-component-stack.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseComponentStack", {
    enumerable: true,
    get: function() {
        return parseComponentStack;
    }
});
function parseComponentStack(componentStack) {
    const componentStackFrames = [];
    for (const line of componentStack.trim().split("\n")){
        // Get component and file from the component stack line
        const match = /at ([^ ]+)( \((.*)\))?/.exec(line);
        if (match == null ? void 0 : match[1]) {
            const component = match[1];
            const webpackFile = match[3];
            // Stop parsing the component stack if we reach a Next.js component
            if (webpackFile == null ? void 0 : webpackFile.includes("next/dist")) {
                break;
            }
            const modulePath = webpackFile == null ? void 0 : webpackFile.replace(/^(webpack-internal:\/\/\/|file:\/\/)(\(.*\)\/)?/, "");
            var _modulePath_split;
            const [file, lineNumber, column] = (_modulePath_split = modulePath == null ? void 0 : modulePath.split(":", 3)) != null ? _modulePath_split : [];
            componentStackFrames.push({
                component,
                file,
                lineNumber: lineNumber ? Number(lineNumber) : undefined,
                column: column ? Number(column) : undefined
            });
        }
    }
    return componentStackFrames;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=parse-component-stack.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/get-socket-url.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSocketUrl", {
    enumerable: true,
    get: function() {
        return getSocketUrl;
    }
});
function getSocketProtocol(assetPrefix) {
    let protocol = window.location.protocol;
    try {
        // assetPrefix is a url
        protocol = new URL(assetPrefix).protocol;
    } catch (e) {}
    return protocol === "http:" ? "ws" : "wss";
}
function getSocketUrl(assetPrefix) {
    const { hostname, port } = window.location;
    const protocol = getSocketProtocol(assetPrefix);
    const normalizedAssetPrefix = assetPrefix.replace(/^\/+/, "");
    let url = protocol + "://" + hostname + ":" + port + (normalizedAssetPrefix ? "/" + normalizedAssetPrefix : "");
    if (normalizedAssetPrefix.startsWith("http")) {
        url = protocol + "://" + normalizedAssetPrefix.split("://", 2)[1];
    }
    return url;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-socket-url.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-websocket.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    useWebsocket: null,
    useSendMessage: null,
    useTurbopack: null,
    useWebsocketPing: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    useWebsocket: function() {
        return useWebsocket;
    },
    useSendMessage: function() {
        return useSendMessage;
    },
    useTurbopack: function() {
        return useTurbopack;
    },
    useWebsocketPing: function() {
        return useWebsocketPing;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _getsocketurl = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/get-socket-url.js [app-client] (ecmascript)");
function useWebsocket(assetPrefix) {
    const webSocketRef = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        if (webSocketRef.current) {
            return;
        }
        const url = (0, _getsocketurl.getSocketUrl)(assetPrefix);
        webSocketRef.current = new window.WebSocket("" + url + "/_next/webpack-hmr");
    }, [
        assetPrefix
    ]);
    return webSocketRef;
}
function useSendMessage(webSocketRef) {
    const sendMessage = (0, _react.useCallback)((data)=>{
        const socket = webSocketRef.current;
        if (!socket || socket.readyState !== socket.OPEN) {
            return;
        }
        return socket.send(data);
    }, [
        webSocketRef
    ]);
    return sendMessage;
}
function useTurbopack(sendMessage) {
    const turbopackState = (0, _react.useRef)({
        init: false,
        // Until the dynamic import resolves, queue any turbopack messages which will be replayed.
        queue: [],
        callback: undefined
    });
    const processTurbopackMessage = (0, _react.useCallback)((msg)=>{
        var _msg_type;
        if ("type" in msg && ((_msg_type = msg.type) == null ? void 0 : _msg_type.startsWith("turbopack-"))) {
            const { callback, queue } = turbopackState.current;
            if (callback) {
                callback(msg);
            } else {
                queue.push(msg);
            }
            return true;
        }
        return false;
    }, []);
    (0, _react.useEffect)(()=>{
        const { current: initCurrent } = turbopackState;
        // TODO(WEB-1589): only install if `process.turbopack` set.
        if (initCurrent.init) {
            return;
        }
        initCurrent.init = true;
        __turbopack_require__("[turbopack]/dev/client/hmr-client.ts [app-client] (ecmascript, loader)")(__turbopack_import__).then((param)=>{
            let { connect } = param;
            const { current } = turbopackState;
            connect({
                addMessageListener (cb) {
                    current.callback = cb;
                    // Replay all Turbopack messages before we were able to establish the HMR client.
                    for (const msg of current.queue){
                        cb(msg);
                    }
                    current.queue = undefined;
                },
                sendMessage
            });
        });
    }, [
        sendMessage
    ]);
    return processTurbopackMessage;
}
function useWebsocketPing(websocketRef) {
    const sendMessage = useSendMessage(websocketRef);
    const { tree } = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    (0, _react.useEffect)(()=>{
        // Taken from on-demand-entries-client.js
        const interval = setInterval(()=>{
            sendMessage(JSON.stringify({
                event: "ping",
                tree,
                appDirRoute: true
            }));
        }, 2500);
        return ()=>clearInterval(interval);
    }, [
        tree,
        sendMessage
    ]);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-websocket.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _notfound = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/not-found.js [app-client] (ecmascript)");
const _redirect = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
function isNextRouterError(error) {
    return error && error.digest && ((0, _redirect.isRedirectError)(error) || (0, _notfound.isNotFoundError)(error));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hydrationErrorWarning: null,
    hydrationErrorComponentStack: null,
    patchConsoleError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hydrationErrorWarning: function() {
        return hydrationErrorWarning;
    },
    hydrationErrorComponentStack: function() {
        return hydrationErrorComponentStack;
    },
    patchConsoleError: function() {
        return patchConsoleError;
    }
});
let hydrationErrorWarning;
let hydrationErrorComponentStack;
// https://github.com/facebook/react/blob/main/packages/react-dom/src/__tests__/ReactDOMHydrationDiff-test.js used as a reference
const knownHydrationWarnings = new Set([
    'Warning: Text content did not match. Server: "%s" Client: "%s"%s',
    "Warning: Expected server HTML to contain a matching <%s> in <%s>.%s",
    'Warning: Expected server HTML to contain a matching text node for "%s" in <%s>.%s',
    "Warning: Did not expect server HTML to contain a <%s> in <%s>.%s",
    'Warning: Did not expect server HTML to contain the text node "%s" in <%s>.%s'
]);
function patchConsoleError() {
    const prev = console.error;
    console.error = function(msg, serverContent, clientContent, componentStack) {
        if (knownHydrationWarnings.has(msg)) {
            hydrationErrorWarning = msg.replace("%s", serverContent).replace("%s", clientContent).replace("%s", "");
            hydrationErrorComponentStack = componentStack;
        }
        // @ts-expect-error argument is defined
        prev.apply(console, arguments);
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hydration-error-info.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-error-handler.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RuntimeErrorHandler: null,
    useErrorHandler: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RuntimeErrorHandler: function() {
        return RuntimeErrorHandler;
    },
    useErrorHandler: function() {
        return useErrorHandler;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _hydrationerrorinfo = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js [app-client] (ecmascript)");
const _isnextroutererror = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
const RuntimeErrorHandler = {
    hadRuntimeError: false
};
function isHydrationError(error) {
    return error.message.match(/(hydration|content does not match|did not match)/i) != null;
}
if (typeof window !== "undefined") {
    try {
        // Increase the number of stack frames on the client
        Error.stackTraceLimit = 50;
    } catch (e) {}
}
const errorQueue = [];
const rejectionQueue = [];
const errorHandlers = [];
const rejectionHandlers = [];
if (typeof window !== "undefined") {
    // These event handlers must be added outside of the hook because there is no
    // guarantee that the hook will be alive in a mounted component in time to
    // when the errors occur.
    window.addEventListener("error", (ev)=>{
        if ((0, _isnextroutererror.isNextRouterError)(ev.error)) {
            ev.preventDefault();
            return;
        }
        const error = ev == null ? void 0 : ev.error;
        if (!error || !(error instanceof Error) || typeof error.stack !== "string") {
            // A non-error was thrown, we don't have anything to show. :-(
            return;
        }
        if (isHydrationError(error) && !error.message.includes("https://nextjs.org/docs/messages/react-hydration-error")) {
            if (_hydrationerrorinfo.hydrationErrorWarning) {
                // The patched console.error found hydration errors logged by React
                // Append the logged warning to the error message
                error.message += "\n\n" + _hydrationerrorinfo.hydrationErrorWarning;
            }
            if (_hydrationerrorinfo.hydrationErrorComponentStack) {
                error._componentStack = _hydrationerrorinfo.hydrationErrorComponentStack;
            }
            error.message += "\n\nSee more info here: https://nextjs.org/docs/messages/react-hydration-error";
        }
        const e = error;
        errorQueue.push(e);
        for (const handler of errorHandlers){
            handler(e);
        }
    });
    window.addEventListener("unhandledrejection", (ev)=>{
        const reason = ev == null ? void 0 : ev.reason;
        if (!reason || !(reason instanceof Error) || typeof reason.stack !== "string") {
            // A non-error was thrown, we don't have anything to show. :-(
            return;
        }
        const e = reason;
        rejectionQueue.push(e);
        for (const handler of rejectionHandlers){
            handler(e);
        }
    });
}
function useErrorHandler(handleOnUnhandledError, handleOnUnhandledRejection) {
    (0, _react.useEffect)(()=>{
        // Handle queued errors.
        errorQueue.forEach(handleOnUnhandledError);
        rejectionQueue.forEach(handleOnUnhandledRejection);
        // Listen to new errors.
        errorHandlers.push(handleOnUnhandledError);
        rejectionHandlers.push(handleOnUnhandledRejection);
        return ()=>{
            // Remove listeners.
            errorHandlers.splice(errorHandlers.indexOf(handleOnUnhandledError), 1);
            rejectionHandlers.splice(rejectionHandlers.indexOf(handleOnUnhandledRejection), 1);
        };
    }, [
        handleOnUnhandledError,
        handleOnUnhandledRejection
    ]);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-error-handler.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "noop", {
    enumerable: true,
    get: function() {
        return noop;
    }
});
function noop(strings) {
    for(var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        keys[_key - 1] = arguments[_key];
    }
    const lastIndex = strings.length - 1;
    return strings.slice(0, lastIndex).reduce((p, s, i)=>p + s + keys[i], "") + strings[lastIndex];
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=noop-template.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/CssReset.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CssReset", {
    enumerable: true,
    get: function() {
        return CssReset;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [app-client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n        :host {\n          all: initial;\n\n          /* the direction property is not reset by 'all' */\n          direction: ltr;\n        }\n\n        /*!\n         * Bootstrap Reboot v4.4.1 (https://getbootstrap.com/)\n         * Copyright 2011-2019 The Bootstrap Authors\n         * Copyright 2011-2019 Twitter, Inc.\n         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n         * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n         */\n        *,\n        *::before,\n        *::after {\n          box-sizing: border-box;\n        }\n\n        :host {\n          font-family: sans-serif;\n          line-height: 1.15;\n          -webkit-text-size-adjust: 100%;\n          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        }\n\n        article,\n        aside,\n        figcaption,\n        figure,\n        footer,\n        header,\n        hgroup,\n        main,\n        nav,\n        section {\n          display: block;\n        }\n\n        :host {\n          margin: 0;\n          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n            'Helvetica Neue', Arial, 'Noto Sans', sans-serif,\n            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n            'Noto Color Emoji';\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 1.5;\n          color: #212529;\n          text-align: left;\n          background-color: #fff;\n        }\n\n        [tabindex='-1']:focus:not(:focus-visible) {\n          outline: 0 !important;\n        }\n\n        hr {\n          box-sizing: content-box;\n          height: 0;\n          overflow: visible;\n        }\n\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n          margin-top: 0;\n          margin-bottom: 8px;\n        }\n\n        p {\n          margin-top: 0;\n          margin-bottom: 16px;\n        }\n\n        abbr[title],\n        abbr[data-original-title] {\n          text-decoration: underline;\n          -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n          cursor: help;\n          border-bottom: 0;\n          -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n        }\n\n        address {\n          margin-bottom: 16px;\n          font-style: normal;\n          line-height: inherit;\n        }\n\n        ol,\n        ul,\n        dl {\n          margin-top: 0;\n          margin-bottom: 16px;\n        }\n\n        ol ol,\n        ul ul,\n        ol ul,\n        ul ol {\n          margin-bottom: 0;\n        }\n\n        dt {\n          font-weight: 700;\n        }\n\n        dd {\n          margin-bottom: 8px;\n          margin-left: 0;\n        }\n\n        blockquote {\n          margin: 0 0 16px;\n        }\n\n        b,\n        strong {\n          font-weight: bolder;\n        }\n\n        small {\n          font-size: 80%;\n        }\n\n        sub,\n        sup {\n          position: relative;\n          font-size: 75%;\n          line-height: 0;\n          vertical-align: baseline;\n        }\n\n        sub {\n          bottom: -0.25em;\n        }\n\n        sup {\n          top: -0.5em;\n        }\n\n        a {\n          color: #007bff;\n          text-decoration: none;\n          background-color: transparent;\n        }\n\n        a:hover {\n          color: #0056b3;\n          text-decoration: underline;\n        }\n\n        a:not([href]) {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        a:not([href]):hover {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        pre,\n        code,\n        kbd,\n        samp {\n          font-family: SFMono-Regular, Menlo, Monaco, Consolas,\n            'Liberation Mono', 'Courier New', monospace;\n          font-size: 1em;\n        }\n\n        pre {\n          margin-top: 0;\n          margin-bottom: 16px;\n          overflow: auto;\n        }\n\n        figure {\n          margin: 0 0 16px;\n        }\n\n        img {\n          vertical-align: middle;\n          border-style: none;\n        }\n\n        svg {\n          overflow: hidden;\n          vertical-align: middle;\n        }\n\n        table {\n          border-collapse: collapse;\n        }\n\n        caption {\n          padding-top: 12px;\n          padding-bottom: 12px;\n          color: #6c757d;\n          text-align: left;\n          caption-side: bottom;\n        }\n\n        th {\n          text-align: inherit;\n        }\n\n        label {\n          display: inline-block;\n          margin-bottom: 8px;\n        }\n\n        button {\n          border-radius: 0;\n        }\n\n        button:focus {\n          outline: 1px dotted;\n          outline: 5px auto -webkit-focus-ring-color;\n        }\n\n        input,\n        button,\n        select,\n        optgroup,\n        textarea {\n          margin: 0;\n          font-family: inherit;\n          font-size: inherit;\n          line-height: inherit;\n        }\n\n        button,\n        input {\n          overflow: visible;\n        }\n\n        button,\n        select {\n          text-transform: none;\n        }\n\n        select {\n          word-wrap: normal;\n        }\n\n        button,\n        [type='button'],\n        [type='reset'],\n        [type='submit'] {\n          -webkit-appearance: button;\n        }\n\n        button:not(:disabled),\n        [type='button']:not(:disabled),\n        [type='reset']:not(:disabled),\n        [type='submit']:not(:disabled) {\n          cursor: pointer;\n        }\n\n        button::-moz-focus-inner,\n        [type='button']::-moz-focus-inner,\n        [type='reset']::-moz-focus-inner,\n        [type='submit']::-moz-focus-inner {\n          padding: 0;\n          border-style: none;\n        }\n\n        input[type='radio'],\n        input[type='checkbox'] {\n          box-sizing: border-box;\n          padding: 0;\n        }\n\n        input[type='date'],\n        input[type='time'],\n        input[type='datetime-local'],\n        input[type='month'] {\n          -webkit-appearance: listbox;\n        }\n\n        textarea {\n          overflow: auto;\n          resize: vertical;\n        }\n\n        fieldset {\n          min-width: 0;\n          padding: 0;\n          margin: 0;\n          border: 0;\n        }\n\n        legend {\n          display: block;\n          width: 100%;\n          max-width: 100%;\n          padding: 0;\n          margin-bottom: 8px;\n          font-size: 24px;\n          line-height: inherit;\n          color: inherit;\n          white-space: normal;\n        }\n\n        progress {\n          vertical-align: baseline;\n        }\n\n        [type='number']::-webkit-inner-spin-button,\n        [type='number']::-webkit-outer-spin-button {\n          height: auto;\n        }\n\n        [type='search'] {\n          outline-offset: -2px;\n          -webkit-appearance: none;\n        }\n\n        [type='search']::-webkit-search-decoration {\n          -webkit-appearance: none;\n        }\n\n        ::-webkit-file-upload-button {\n          font: inherit;\n          -webkit-appearance: button;\n        }\n\n        output {\n          display: inline-block;\n        }\n\n        summary {\n          display: list-item;\n          cursor: pointer;\n        }\n\n        template {\n          display: none;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n      "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function CssReset() {
    return /*#__PURE__*/ _react.createElement("style", null, (0, _nooptemplate.noop)(_templateObject()));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=CssReset.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-open-in-editor.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useOpenInEditor", {
    enumerable: true,
    get: function() {
        return useOpenInEditor;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useOpenInEditor(param) {
    let { file, lineNumber, column } = param === void 0 ? {} : param;
    const openInEditor = (0, _react.useCallback)(()=>{
        if (file == null || lineNumber == null || column == null) return;
        const params = new URLSearchParams();
        params.append("file", file);
        params.append("lineNumber", String(lineNumber));
        params.append("column", String(column));
        self.fetch((("TURBOPACK compile-time value", "") || "") + "/__nextjs_launch-editor?" + params.toString()).then(()=>{}, ()=>{
            console.error("There was an issue opening this code in your editor.");
        });
    }, [
        file,
        lineNumber,
        column
    ]);
    return openInEditor;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-open-in-editor.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/ComponentStackFrameRow.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ComponentStackFrameRow", {
    enumerable: true,
    get: function() {
        return ComponentStackFrameRow;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _useopenineditor = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-open-in-editor.js [app-client] (ecmascript)");
function ComponentStackFrameRow(param) {
    let { componentStackFrame: { component, file, lineNumber, column } } = param;
    const open = (0, _useopenineditor.useOpenInEditor)({
        file,
        column,
        lineNumber
    });
    return /*#__PURE__*/ _react.default.createElement("div", {
        "data-nextjs-component-stack-frame": true
    }, /*#__PURE__*/ _react.default.createElement("h3", null, component), file ? /*#__PURE__*/ _react.default.createElement("div", {
        tabIndex: 10,
        role: "link",
        onClick: open,
        title: "Click to open in your editor"
    }, /*#__PURE__*/ _react.default.createElement("span", null, file, " (", lineNumber, ":", column, ")"), /*#__PURE__*/ _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, /*#__PURE__*/ _react.default.createElement("path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), /*#__PURE__*/ _react.default.createElement("polyline", {
        points: "15 3 21 3 21 9"
    }), /*#__PURE__*/ _react.default.createElement("line", {
        x1: "10",
        y1: "14",
        x2: "21",
        y2: "3"
    }))) : null);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ComponentStackFrameRow.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/FrameworkIcon.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FrameworkIcon", {
    enumerable: true,
    get: function() {
        return FrameworkIcon;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function FrameworkIcon(param) {
    let { framework } = param;
    if (framework === "react") {
        return /*#__PURE__*/ _react.default.createElement("svg", {
            "data-nextjs-call-stack-framework-icon": "react",
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 410 369",
            fill: "none",
            shapeRendering: "geometricPrecision",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "5"
        }, /*#__PURE__*/ _react.default.createElement("path", {
            d: "M204.995 224.552C226.56 224.552 244.042 207.07 244.042 185.506C244.042 163.941 226.56 146.459 204.995 146.459C183.43 146.459 165.948 163.941 165.948 185.506C165.948 207.07 183.43 224.552 204.995 224.552Z",
            fill: "currentColor"
        }), /*#__PURE__*/ _react.default.createElement("path", {
            d: "M409.99 184.505C409.99 153.707 381.437 126.667 335.996 108.925C343.342 60.6535 334.19 22.3878 307.492 6.98883C283.649 -6.77511 250.631 -0.0395641 214.512 25.9753C211.316 28.2692 208.143 30.7097 204.97 33.2477C201.822 30.7097 198.65 28.2692 195.477 25.9753C159.359 -0.0395641 126.34 -6.79951 102.497 6.98883C75.8237 22.3878 66.6721 60.6291 74.0422 108.852C28.5529 126.618 0 153.682 0 184.505C0 215.303 28.5528 242.342 73.9934 260.084C66.6477 308.356 75.7993 346.621 102.497 362.02C110.575 366.682 119.727 369 129.684 369C149.085 369 171.61 360.215 195.477 343.034C198.674 340.74 201.847 338.3 205.019 335.762C208.167 338.3 211.34 340.74 214.512 343.034C238.38 360.239 260.905 369 280.306 369C290.263 369 299.415 366.682 307.492 362.02C331.335 348.256 342 316.287 337.534 271.993C337.143 268.089 336.631 264.135 335.996 260.109C381.461 242.367 409.99 215.327 409.99 184.505ZM225.934 41.8136C246.238 27.1955 265.127 19.5814 280.306 19.5814C286.871 19.5814 292.728 20.9968 297.731 23.8765C315.204 33.9798 322.672 62.9475 317.327 102.433C299.756 97.0401 280.306 92.9158 259.392 90.2802C246.872 73.8074 233.597 58.9453 220.003 46.2551C221.98 44.7421 223.957 43.229 225.934 41.8136ZM112.259 23.8765C117.262 20.9968 123.119 19.5814 129.684 19.5814C144.863 19.5814 163.752 27.1711 184.056 41.8136C186.033 43.229 188.01 44.7176 189.986 46.2551C176.393 58.9453 163.142 73.783 150.622 90.2558C129.732 92.8914 110.258 97.0401 92.687 102.409C87.3424 62.9475 94.7857 33.9798 112.259 23.8765ZM19.5233 184.505C19.5233 164.322 40.9014 143.359 77.776 128.253C81.9003 146.141 88.0502 165.054 96.1768 184.456C88.0014 203.881 81.8515 222.819 77.7272 240.732C40.9014 225.626 19.5233 204.687 19.5233 184.505ZM184.056 327.196C154.966 348.134 128.805 354.675 112.259 345.133C94.7857 335.029 87.3181 306.062 92.6626 266.576C110.234 271.969 129.684 276.093 150.598 278.729C163.117 295.202 176.393 310.064 189.986 322.754C188.01 324.292 186.033 325.78 184.056 327.196ZM204.995 310.04C180.591 287.685 157.138 257.815 137.347 223.551C132.051 214.4 121.344 191.396 117 182.489C113.535 190.786 110.112 198.398 107.427 206.5C109.623 210.575 118.092 229.213 120.434 233.288C125.071 241.317 129.928 249.127 134.931 256.692C120.898 254.227 107.915 251.055 96.1035 247.321C102.815 217.011 116.213 182.064 137.347 145.458C142.545 136.453 153.838 116.346 159.5 108C150.568 109.147 143.395 108.767 135 110.5C132.56 114.453 122.777 131.645 120.434 135.721C115.749 143.823 111.454 151.925 107.427 159.978C102.546 146.581 98.8124 133.744 96.1524 121.64C125.755 112.293 162.727 106.411 204.995 106.411C215.562 106.411 237.63 106.197 247.49 106.905C242.048 99.7544 237.38 93.2819 231.694 86.888C227.082 86.7416 209.705 86.888 204.995 86.888C195.672 86.888 186.545 87.2053 177.589 87.7422C186.472 77.1752 195.672 67.5111 204.995 58.9697C229.375 81.3239 252.851 111.195 272.643 145.458C277.841 154.463 289.073 175.426 293.49 184.505C296.98 176.207 300.281 168.64 302.99 160.489C300.793 156.389 291.898 139.747 289.555 135.696C284.918 127.667 280.062 119.858 275.059 112.317C289.092 114.782 302.075 117.954 313.886 121.688C307.175 151.998 293.777 186.945 272.643 223.551C267.445 232.556 252.651 253.178 246.99 261.524C255.922 260.377 265.595 258.663 273.99 256.93C276.43 252.976 287.212 237.364 289.555 233.288C294.216 225.235 298.512 217.182 302.489 209.153C307.224 222.185 310.982 234.997 313.715 247.394C284.138 256.741 247.214 262.598 204.995 262.598C194.428 262.598 169.859 261.208 160 260.5C165.442 267.65 171.304 275.095 176.99 281.489C181.602 281.635 200.285 282.121 204.995 282.121C214.317 282.121 223.444 281.804 232.401 281.267C223.493 291.834 214.317 301.498 204.995 310.04ZM297.731 345.133C281.185 354.699 254.999 348.159 225.934 327.196C223.957 325.78 221.98 324.292 220.003 322.754C233.597 310.064 246.848 295.226 259.367 278.753C280.233 276.118 299.659 271.993 317.205 266.625C317.547 269.089 317.888 271.554 318.132 273.97C321.72 309.649 314.277 335.566 297.731 345.133ZM332.262 240.756C328.065 222.599 321.842 203.686 313.813 184.578C321.988 165.152 328.138 146.215 332.262 128.302C369.088 143.408 390.466 164.322 390.466 184.505C390.466 204.687 369.113 225.626 332.262 240.756Z",
            fill: "currentColor"
        }));
    }
    return /*#__PURE__*/ _react.default.createElement("svg", {
        "data-nextjs-call-stack-framework-icon": "next",
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 180 180",
        fill: "none"
    }, /*#__PURE__*/ _react.default.createElement("mask", {
        id: "mask0_408_139",
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "180",
        height: "180"
    }, /*#__PURE__*/ _react.default.createElement("circle", {
        cx: "90",
        cy: "90",
        r: "90",
        fill: "black"
    })), /*#__PURE__*/ _react.default.createElement("g", {
        mask: "url(#mask0_408_139)"
    }, /*#__PURE__*/ _react.default.createElement("circle", {
        cx: "90",
        cy: "90",
        r: "87",
        fill: "black",
        stroke: "white",
        strokeWidth: "6"
    }), /*#__PURE__*/ _react.default.createElement("path", {
        d: "M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z",
        fill: "url(#paint0_linear_408_139)"
    }), /*#__PURE__*/ _react.default.createElement("rect", {
        x: "115",
        y: "54",
        width: "12",
        height: "72",
        fill: "url(#paint1_linear_408_139)"
    })), /*#__PURE__*/ _react.default.createElement("defs", null, /*#__PURE__*/ _react.default.createElement("linearGradient", {
        id: "paint0_linear_408_139",
        x1: "109",
        y1: "116.5",
        x2: "144.5",
        y2: "160.5",
        gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/ _react.default.createElement("stop", {
        stopColor: "white"
    }), /*#__PURE__*/ _react.default.createElement("stop", {
        offset: "1",
        stopColor: "white",
        stopOpacity: "0"
    })), /*#__PURE__*/ _react.default.createElement("linearGradient", {
        id: "paint1_linear_408_139",
        x1: "121",
        y1: "54",
        x2: "120.799",
        y2: "106.875",
        gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/ _react.default.createElement("stop", {
        stopColor: "white"
    }), /*#__PURE__*/ _react.default.createElement("stop", {
        offset: "1",
        stopColor: "white",
        stopOpacity: "0"
    }))));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=FrameworkIcon.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getOriginalStackFrame: null,
    getOriginalStackFrames: null,
    getFrameSource: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getOriginalStackFrame: function() {
        return getOriginalStackFrame;
    },
    getOriginalStackFrames: function() {
        return getOriginalStackFrames;
    },
    getFrameSource: function() {
        return getFrameSource;
    }
});
function getOriginalStackFrame(source, type, errorMessage) {
    var _source_file, _source_file1;
    async function _getOriginalStackFrame() {
        var /* collapsed */ _source_file, _body_originalStackFrame_file, _body_originalStackFrame;
        const params = new URLSearchParams();
        params.append("isServer", String(type === "server"));
        params.append("isEdgeServer", String(type === "edge-server"));
        params.append("isAppDirectory", "true");
        params.append("errorMessage", errorMessage);
        for(const key in source){
            var _source_key;
            params.append(key, ((_source_key = source[key]) != null ? _source_key : "").toString());
        }
        const controller = new AbortController();
        const tm = setTimeout(()=>controller.abort(), 3000);
        const res = await self.fetch((("TURBOPACK compile-time value", "") || "") + "/__nextjs_original-stack-frame?" + params.toString(), {
            signal: controller.signal
        }).finally(()=>{
            clearTimeout(tm);
        });
        if (!res.ok || res.status === 204) {
            return Promise.reject(new Error(await res.text()));
        }
        const body = await res.json();
        var _ref;
        return {
            error: false,
            reason: null,
            external: false,
            expanded: !Boolean((_ref = ((_source_file = source.file) == null ? void 0 : _source_file.includes("node_modules")) || ((_body_originalStackFrame = body.originalStackFrame) == null ? void 0 : (_body_originalStackFrame_file = _body_originalStackFrame.file) == null ? void 0 : _body_originalStackFrame_file.includes("node_modules"))) != null ? _ref : true),
            sourceStackFrame: source,
            originalStackFrame: body.originalStackFrame,
            originalCodeFrame: body.originalCodeFrame || null,
            sourcePackage: body.sourcePackage
        };
    }
    if (source.file === "<anonymous>" || ((_source_file = source.file) == null ? void 0 : _source_file.match(/^node:/)) || ((_source_file1 = source.file) == null ? void 0 : _source_file1.match(/https?:\/\//))) {
        return Promise.resolve({
            error: false,
            reason: null,
            external: true,
            expanded: false,
            sourceStackFrame: source,
            originalStackFrame: null,
            originalCodeFrame: null
        });
    }
    var _err_message, _ref;
    return _getOriginalStackFrame().catch((err)=>({
            error: true,
            reason: (_ref = (_err_message = err == null ? void 0 : err.message) != null ? _err_message : err == null ? void 0 : err.toString()) != null ? _ref : "Unknown Error",
            external: false,
            expanded: false,
            sourceStackFrame: source,
            originalStackFrame: null,
            originalCodeFrame: null
        }));
}
function getOriginalStackFrames(frames, type, errorMessage) {
    return Promise.all(frames.map((frame)=>getOriginalStackFrame(frame, type, errorMessage)));
}
function getFrameSource(frame) {
    let str = "";
    try {
        var _globalThis_location;
        const u = new URL(frame.file);
        // Strip the origin for same-origin scripts.
        if (typeof globalThis !== "undefined" && ((_globalThis_location = globalThis.location) == null ? void 0 : _globalThis_location.origin) !== u.origin) {
            // URLs can be valid without an `origin`, so long as they have a
            // `protocol`. However, `origin` is preferred.
            if (u.origin === "null") {
                str += u.protocol;
            } else {
                str += u.origin;
            }
        }
        // Strip query string information as it's typically too verbose to be
        // meaningful.
        str += u.pathname;
        str += " ";
    } catch (e) {
        str += (frame.file || "(unknown)") + " ";
    }
    if (frame.lineNumber != null) {
        if (frame.column != null) {
            str += "(" + frame.lineNumber + ":" + frame.column + ") ";
        } else {
            str += "(" + frame.lineNumber + ") ";
        }
    }
    return str.slice(0, -1);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=stack-frame.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/CallStackFrame.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CallStackFrame", {
    enumerable: true,
    get: function() {
        return CallStackFrame;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _stackframe = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js [app-client] (ecmascript)");
const _useopenineditor = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-open-in-editor.js [app-client] (ecmascript)");
const CallStackFrame = function CallStackFrame(param) {
    let { frame } = param;
    var _frame_originalStackFrame;
    // TODO: ability to expand resolved frames
    // TODO: render error or external indicator
    const f = (_frame_originalStackFrame = frame.originalStackFrame) != null ? _frame_originalStackFrame : frame.sourceStackFrame;
    const hasSource = Boolean(frame.originalCodeFrame);
    const open = (0, _useopenineditor.useOpenInEditor)(hasSource ? {
        file: f.file,
        lineNumber: f.lineNumber,
        column: f.column
    } : undefined);
    return /*#__PURE__*/ _react.default.createElement("div", {
        "data-nextjs-call-stack-frame": true
    }, /*#__PURE__*/ _react.default.createElement("h3", {
        "data-nextjs-frame-expanded": Boolean(frame.expanded)
    }, f.methodName), /*#__PURE__*/ _react.default.createElement("div", {
        "data-has-source": hasSource ? "true" : undefined,
        tabIndex: hasSource ? 10 : undefined,
        role: hasSource ? "link" : undefined,
        onClick: open,
        title: hasSource ? "Click to open in your editor" : undefined
    }, /*#__PURE__*/ _react.default.createElement("span", null, (0, _stackframe.getFrameSource)(f)), /*#__PURE__*/ _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, /*#__PURE__*/ _react.default.createElement("path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), /*#__PURE__*/ _react.default.createElement("polyline", {
        points: "15 3 21 3 21 9"
    }), /*#__PURE__*/ _react.default.createElement("line", {
        x1: "10",
        y1: "14",
        x2: "21",
        y2: "3"
    }))));
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=CallStackFrame.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/GroupedStackFrames.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GroupedStackFrames", {
    enumerable: true,
    get: function() {
        return GroupedStackFrames;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _CallStackFrame = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/CallStackFrame.js [app-client] (ecmascript)");
const _FrameworkIcon = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/FrameworkIcon.js [app-client] (ecmascript)");
function FrameworkGroup(param) {
    let { framework, stackFrames, all } = param;
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("details", {
        "data-nextjs-collapsed-call-stack-details": true
    }, /*#__PURE__*/ _react.default.createElement("summary", {
        tabIndex: 10
    }, /*#__PURE__*/ _react.default.createElement("svg", {
        "data-nextjs-call-stack-chevron-icon": true,
        fill: "none",
        height: "20",
        width: "20",
        shapeRendering: "geometricPrecision",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ _react.default.createElement("path", {
        d: "M9 18l6-6-6-6"
    })), /*#__PURE__*/ _react.default.createElement(_FrameworkIcon.FrameworkIcon, {
        framework: framework
    }), framework === "react" ? "React" : "Next.js"), stackFrames.map((frame, index)=>/*#__PURE__*/ _react.default.createElement(_CallStackFrame.CallStackFrame, {
            key: "call-stack-" + index + "-" + all,
            frame: frame
        }))));
}
function GroupedStackFrames(param) {
    let { groupedStackFrames, all } = param;
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, groupedStackFrames.map((stackFramesGroup, groupIndex)=>{
        // Collapse React and Next.js frames
        if (stackFramesGroup.framework) {
            return /*#__PURE__*/ _react.default.createElement(FrameworkGroup, {
                key: "call-stack-framework-group-" + groupIndex + "-" + all,
                framework: stackFramesGroup.framework,
                stackFrames: stackFramesGroup.stackFrames,
                all: all
            });
        }
        return stackFramesGroup.stackFrames.map((frame, frameIndex)=>/*#__PURE__*/ _react.default.createElement(_CallStackFrame.CallStackFrame, {
                key: "call-stack-" + groupIndex + "-" + frameIndex + "-" + all,
                frame: frame
            }));
    }));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=GroupedStackFrames.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/group-stack-frames-by-framework.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "groupStackFramesByFramework", {
    enumerable: true,
    get: function() {
        return groupStackFramesByFramework;
    }
});
/**
 * Get the origin framework of the stack frame by package name.
 */ function getFramework(sourcePackage) {
    if (!sourcePackage) return undefined;
    if (/^(react|react-dom|react-is|react-refresh|react-server-dom-webpack|react-server-dom-turbopack|scheduler)$/.test(sourcePackage)) {
        return "react";
    } else if (sourcePackage === "next") {
        return "next";
    }
    return undefined;
}
function groupStackFramesByFramework(stackFrames) {
    const stackFramesGroupedByFramework = [];
    for (const stackFrame of stackFrames){
        const currentGroup = stackFramesGroupedByFramework[stackFramesGroupedByFramework.length - 1];
        const framework = getFramework(stackFrame.sourcePackage);
        if (currentGroup && currentGroup.framework === framework) {
            currentGroup.stackFrames.push(stackFrame);
        } else {
            stackFramesGroupedByFramework.push({
                framework: framework,
                stackFrames: [
                    stackFrame
                ]
            });
        }
    }
    return stackFramesGroupedByFramework;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=group-stack-frames-by-framework.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/CodeFrame.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CodeFrame", {
    enumerable: true,
    get: function() {
        return CodeFrame;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _anser = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/anser/index.js [app-client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/strip-ansi/index.js [app-client] (ecmascript)"));
const _stackframe = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js [app-client] (ecmascript)");
const _useopenineditor = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-open-in-editor.js [app-client] (ecmascript)");
const CodeFrame = function CodeFrame(param) {
    let { stackFrame, codeFrame } = param;
    // Strip leading spaces out of the code frame:
    const formattedFrame = _react.useMemo(()=>{
        const lines = codeFrame.split(/\r?\n/g);
        const prefixLength = lines.map((line)=>/^>? +\d+ +\| [ ]+/.exec((0, _stripansi.default)(line)) === null ? null : /^>? +\d+ +\| ( *)/.exec((0, _stripansi.default)(line))).filter(Boolean).map((v)=>v.pop()).reduce((c, n)=>isNaN(c) ? n.length : Math.min(c, n.length), NaN);
        if (prefixLength > 1) {
            const p = " ".repeat(prefixLength);
            return lines.map((line, a)=>~(a = line.indexOf("|")) ? line.substring(0, a) + line.substring(a).replace(p, "") : line).join("\n");
        }
        return lines.join("\n");
    }, [
        codeFrame
    ]);
    const decoded = _react.useMemo(()=>{
        return _anser.default.ansiToJson(formattedFrame, {
            json: true,
            use_classes: true,
            remove_empty: true
        });
    }, [
        formattedFrame
    ]);
    const open = (0, _useopenineditor.useOpenInEditor)({
        file: stackFrame.file,
        lineNumber: stackFrame.lineNumber,
        column: stackFrame.column
    });
    // TODO: make the caret absolute
    return /*#__PURE__*/ _react.createElement("div", {
        "data-nextjs-codeframe": true
    }, /*#__PURE__*/ _react.createElement("div", null, /*#__PURE__*/ _react.createElement("p", {
        role: "link",
        onClick: open,
        tabIndex: 1,
        title: "Click to open in your editor"
    }, /*#__PURE__*/ _react.createElement("span", null, (0, _stackframe.getFrameSource)(stackFrame), " @ ", stackFrame.methodName), /*#__PURE__*/ _react.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, /*#__PURE__*/ _react.createElement("path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), /*#__PURE__*/ _react.createElement("polyline", {
        points: "15 3 21 3 21 9"
    }), /*#__PURE__*/ _react.createElement("line", {
        x1: "10",
        y1: "14",
        x2: "21",
        y2: "3"
    })))), /*#__PURE__*/ _react.createElement("pre", null, decoded.map((entry, index)=>/*#__PURE__*/ _react.createElement("span", {
            key: "frame-" + index,
            style: {
                color: entry.fg ? "var(--color-" + entry.fg + ")" : undefined,
                ...entry.decoration === "bold" ? {
                    fontWeight: 800
                } : entry.decoration === "italic" ? {
                    fontStyle: "italic"
                } : undefined
            }
        }, entry.content))));
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=CodeFrame.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CodeFrame", {
    enumerable: true,
    get: function() {
        return _CodeFrame.CodeFrame;
    }
});
const _CodeFrame = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/CodeFrame.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    styles: null,
    RuntimeError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    styles: function() {
        return styles;
    },
    RuntimeError: function() {
        return RuntimeError;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _CodeFrame = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/index.js [app-client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [app-client] (ecmascript)");
const _groupstackframesbyframework = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/group-stack-frames-by-framework.js [app-client] (ecmascript)");
const _CallStackFrame = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/CallStackFrame.js [app-client] (ecmascript)");
const _GroupedStackFrames = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/GroupedStackFrames.js [app-client] (ecmascript)");
const _ComponentStackFrameRow = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/ComponentStackFrameRow.js [app-client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  button[data-nextjs-data-runtime-error-collapsed-action] {\n    background: none;\n    border: none;\n    padding: 0;\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-bigger);\n    color: var(--color-accents-3);\n  }\n\n  [data-nextjs-call-stack-frame]:not(:last-child),\n  [data-nextjs-component-stack-frame]:not(:last-child) {\n    margin-bottom: var(--size-gap-double);\n  }\n\n  [data-nextjs-call-stack-frame] > h3,\n  [data-nextjs-component-stack-frame] > h3 {\n    margin-top: 0;\n    margin-bottom: var(--size-gap);\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-font);\n    color: #222;\n  }\n  [data-nextjs-call-stack-frame] > h3[data-nextjs-frame-expanded='false'] {\n    color: #666;\n  }\n  [data-nextjs-call-stack-frame] > div,\n  [data-nextjs-component-stack-frame] > div {\n    display: flex;\n    align-items: center;\n    padding-left: calc(var(--size-gap) + var(--size-gap-half));\n    font-size: var(--size-font-small);\n    color: #999;\n  }\n  [data-nextjs-call-stack-frame] > div > svg,\n  [data-nextjs-component-stack-frame] > div > svg {\n    width: auto;\n    height: var(--size-font-small);\n    margin-left: var(--size-gap);\n    flex-shrink: 0;\n\n    display: none;\n  }\n\n  [data-nextjs-call-stack-frame] > div[data-has-source],\n  [data-nextjs-component-stack-frame] > div {\n    cursor: pointer;\n  }\n  [data-nextjs-call-stack-frame] > div[data-has-source]:hover,\n  [data-nextjs-component-stack-frame] > div:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-call-stack-frame] > div[data-has-source] > svg,\n  [data-nextjs-component-stack-frame] > div > svg {\n    display: unset;\n  }\n\n  [data-nextjs-call-stack-framework-icon] {\n    margin-right: var(--size-gap);\n  }\n  [data-nextjs-call-stack-framework-icon='next'] > mask {\n    mask-type: alpha;\n  }\n  [data-nextjs-call-stack-framework-icon='react'] {\n    color: rgb(20, 158, 202);\n  }\n  [data-nextjs-collapsed-call-stack-details][open]\n    [data-nextjs-call-stack-chevron-icon] {\n    transform: rotate(90deg);\n  }\n  [data-nextjs-collapsed-call-stack-details] summary {\n    display: flex;\n    align-items: center;\n    margin: var(--size-gap-double) 0;\n    list-style: none;\n  }\n  [data-nextjs-collapsed-call-stack-details] summary::-webkit-details-marker {\n    display: none;\n  }\n\n  [data-nextjs-collapsed-call-stack-details] h3 {\n    color: #666;\n  }\n  [data-nextjs-collapsed-call-stack-details] [data-nextjs-call-stack-frame] {\n    margin-bottom: var(--size-gap-double);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const RuntimeError = function RuntimeError(param) {
    let { error } = param;
    const firstFirstPartyFrameIndex = _react.useMemo(()=>{
        return error.frames.findIndex((entry)=>entry.expanded && Boolean(entry.originalCodeFrame) && Boolean(entry.originalStackFrame));
    }, [
        error.frames
    ]);
    const firstFrame = _react.useMemo(()=>{
        var _error_frames_firstFirstPartyFrameIndex;
        return (_error_frames_firstFirstPartyFrameIndex = error.frames[firstFirstPartyFrameIndex]) != null ? _error_frames_firstFirstPartyFrameIndex : null;
    }, [
        error.frames,
        firstFirstPartyFrameIndex
    ]);
    const allLeadingFrames = _react.useMemo(()=>firstFirstPartyFrameIndex < 0 ? [] : error.frames.slice(0, firstFirstPartyFrameIndex), [
        error.frames,
        firstFirstPartyFrameIndex
    ]);
    const [all, setAll] = _react.useState(firstFrame == null);
    const toggleAll = _react.useCallback(()=>{
        setAll((v)=>!v);
    }, []);
    const leadingFrames = _react.useMemo(()=>allLeadingFrames.filter((f)=>f.expanded || all), [
        all,
        allLeadingFrames
    ]);
    const allCallStackFrames = _react.useMemo(()=>error.frames.slice(firstFirstPartyFrameIndex + 1), [
        error.frames,
        firstFirstPartyFrameIndex
    ]);
    const visibleCallStackFrames = _react.useMemo(()=>allCallStackFrames.filter((f)=>f.expanded || all), [
        all,
        allCallStackFrames
    ]);
    const canShowMore = _react.useMemo(()=>{
        return allCallStackFrames.length !== visibleCallStackFrames.length || all && firstFrame != null;
    }, [
        all,
        allCallStackFrames.length,
        firstFrame,
        visibleCallStackFrames.length
    ]);
    const stackFramesGroupedByFramework = _react.useMemo(()=>(0, _groupstackframesbyframework.groupStackFramesByFramework)(visibleCallStackFrames), [
        visibleCallStackFrames
    ]);
    return /*#__PURE__*/ _react.createElement(_react.Fragment, null, firstFrame ? /*#__PURE__*/ _react.createElement(_react.Fragment, null, /*#__PURE__*/ _react.createElement("h2", null, "Source"), leadingFrames.map((frame, index)=>/*#__PURE__*/ _react.createElement(_CallStackFrame.CallStackFrame, {
            key: "leading-frame-" + index + "-" + all,
            frame: frame
        })), /*#__PURE__*/ _react.createElement(_CodeFrame.CodeFrame, {
        stackFrame: firstFrame.originalStackFrame,
        codeFrame: firstFrame.originalCodeFrame
    })) : undefined, error.componentStackFrames ? /*#__PURE__*/ _react.createElement(_react.Fragment, null, /*#__PURE__*/ _react.createElement("h2", null, "Component Stack"), error.componentStackFrames.map((componentStackFrame, index)=>/*#__PURE__*/ _react.createElement(_ComponentStackFrameRow.ComponentStackFrameRow, {
            key: index,
            componentStackFrame: componentStackFrame
        }))) : null, stackFramesGroupedByFramework.length ? /*#__PURE__*/ _react.createElement(_react.Fragment, null, /*#__PURE__*/ _react.createElement("h2", null, "Call Stack"), /*#__PURE__*/ _react.createElement(_GroupedStackFrames.GroupedStackFrames, {
        groupedStackFrames: stackFramesGroupedByFramework,
        all: all
    })) : undefined, canShowMore ? /*#__PURE__*/ _react.createElement(_react.Fragment, null, /*#__PURE__*/ _react.createElement("button", {
        tabIndex: 10,
        "data-nextjs-data-runtime-error-collapsed-action": true,
        type: "button",
        onClick: toggleAll
    }, all ? "Hide" : "Show", " collapsed frames")) : undefined);
};
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/get-words-and-whitespaces.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

// Returns true if the given character is a whitespace character, false otherwise.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getWordsAndWhitespaces", {
    enumerable: true,
    get: function() {
        return getWordsAndWhitespaces;
    }
});
function isWhitespace(char) {
    return char === " " || char === "\n" || char === "	" || char === "\r";
}
function getWordsAndWhitespaces(text) {
    const wordsAndWhitespaces = [];
    let current = "";
    let currentIsWhitespace = false;
    for (const char of text){
        if (current.length === 0) {
            current += char;
            currentIsWhitespace = isWhitespace(char);
            continue;
        }
        const nextIsWhitespace = isWhitespace(char);
        if (currentIsWhitespace === nextIsWhitespace) {
            current += char;
        } else {
            wordsAndWhitespaces.push(current);
            current = char;
            currentIsWhitespace = nextIsWhitespace;
        }
    }
    if (current.length > 0) {
        wordsAndWhitespaces.push(current);
    }
    return wordsAndWhitespaces;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-words-and-whitespaces.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HotlinkedText", {
    enumerable: true,
    get: function() {
        return HotlinkedText;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _getwordsandwhitespaces = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/get-words-and-whitespaces.js [app-client] (ecmascript)");
const linkRegex = /https?:\/\/[^\s/$.?#].[^\s"]*/i;
const HotlinkedText = function HotlinkedText(props) {
    const { text } = props;
    const wordsAndWhitespaces = (0, _getwordsandwhitespaces.getWordsAndWhitespaces)(text);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, linkRegex.test(text) ? wordsAndWhitespaces.map((word, index)=>{
        if (linkRegex.test(word)) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, {
                key: "link-" + index
            }, /*#__PURE__*/ _react.default.createElement("a", {
                href: word
            }, word));
        }
        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, {
            key: "text-" + index
        }, word);
    }) : text);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/VersionStalenessInfo.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "VersionStalenessInfo", {
    enumerable: true,
    get: function() {
        return VersionStalenessInfo;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function VersionStalenessInfo(props) {
    if (!props) return null;
    const { staleness, installed, expected } = props;
    let text = "";
    let title = "";
    let indicatorClass = "";
    switch(staleness){
        case "fresh":
            text = "Next.js is up to date";
            title = "Latest available version is detected (" + installed + ").";
            indicatorClass = "fresh";
            break;
        case "stale-patch":
        case "stale-minor":
            text = "Next.js (" + installed + ") out of date";
            title = "There is a newer version (" + expected + ") available, upgrade recommended! ";
            indicatorClass = "stale";
            break;
        case "stale-major":
            {
                text = "Next.js (" + installed + ") is outdated";
                title = "An outdated version detected (latest is " + expected + "), upgrade is highly recommended!";
                indicatorClass = "outdated";
                break;
            }
        case "stale-prerelease":
            {
                text = "Next.js (" + installed + ") is outdated";
                title = "There is a newer canary version (" + expected + ") available, please upgrade! ";
                indicatorClass = "stale";
                break;
            }
        case "newer-than-npm":
        case "unknown":
            break;
        default:
            break;
    }
    if (!text) return null;
    return /*#__PURE__*/ _react.default.createElement("small", {
        className: "nextjs-container-build-error-version-status"
    }, /*#__PURE__*/ _react.default.createElement("span", {
        className: indicatorClass
    }), /*#__PURE__*/ _react.default.createElement("small", {
        className: "nextjs-container-build-error-version-status",
        title: title
    }, text), " ", staleness === "fresh" || staleness === "unknown" ? null : /*#__PURE__*/ _react.default.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://nextjs.org/docs/messages/version-staleness"
    }, "(learn more)"));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=VersionStalenessInfo.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/styles.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [app-client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [app-client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  .nextjs-container-build-error-version-status {\n    flex: 1;\n    text-align: right;\n  }\n  .nextjs-container-build-error-version-status small {\n    margin-left: var(--size-gap);\n    font-size: var(--size-font-small);\n  }\n  .nextjs-container-build-error-version-status a {\n    font-size: var(--size-font-small);\n  }\n  .nextjs-container-build-error-version-status span {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background: var(--color-ansi-bright-black);\n  }\n  .nextjs-container-build-error-version-status span.fresh {\n    background: var(--color-ansi-green);\n  }\n  .nextjs-container-build-error-version-status span.stale {\n    background: var(--color-ansi-yellow);\n  }\n  .nextjs-container-build-error-version-status span.outdated {\n    background: var(--color-ansi-red);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    styles: null,
    VersionStalenessInfo: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    styles: function() {
        return _styles.styles;
    },
    VersionStalenessInfo: function() {
        return _VersionStalenessInfo.VersionStalenessInfo;
    }
});
const _styles = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/styles.js [app-client] (ecmascript)");
const _VersionStalenessInfo = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/VersionStalenessInfo.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CloseIcon", {
    enumerable: true,
    get: function() {
        return CloseIcon;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const CloseIcon = ()=>{
    return /*#__PURE__*/ _react.createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ _react.createElement("path", {
        d: "M18 6L6 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /*#__PURE__*/ _react.createElement("path", {
        d: "M6 6L18 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }));
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=CloseIcon.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/nodeStackFrames.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getFilesystemFrame: null,
    getErrorSource: null,
    decorateServerError: null,
    getServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getFilesystemFrame: function() {
        return getFilesystemFrame;
    },
    getErrorSource: function() {
        return getErrorSource;
    },
    decorateServerError: function() {
        return decorateServerError;
    },
    getServerError: function() {
        return getServerError;
    }
});
const _stacktraceparser = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/stacktrace-parser/stack-trace-parser.cjs.js [app-client] (ecmascript)");
function getFilesystemFrame(frame) {
    const f = {
        ...frame
    };
    if (typeof f.file === "string") {
        if (f.file.startsWith("/") || // Win32:
        /^[a-z]:\\/i.test(f.file) || // Win32 UNC:
        f.file.startsWith("\\\\")) {
            f.file = "file://" + f.file;
        }
    }
    return f;
}
const symbolError = Symbol("NextjsError");
function getErrorSource(error) {
    return error[symbolError] || null;
}
function decorateServerError(error, type) {
    Object.defineProperty(error, symbolError, {
        writable: false,
        enumerable: false,
        configurable: false,
        value: type
    });
}
function getServerError(error, type) {
    let n;
    try {
        throw new Error(error.message);
    } catch (e) {
        n = e;
    }
    n.name = error.name;
    try {
        n.stack = n.toString() + "\n" + (0, _stacktraceparser.parse)(error.stack).map(getFilesystemFrame).map((f)=>{
            let str = "    at " + f.methodName;
            if (f.file) {
                let loc = f.file;
                if (f.lineNumber) {
                    loc += ":" + f.lineNumber;
                    if (f.column) {
                        loc += ":" + f.column;
                    }
                }
                str += " (" + loc + ")";
            }
            return str;
        }).join("\n");
    } catch (e) {
        n.stack = error.stack;
    }
    decorateServerError(n, type);
    return n;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=nodeStackFrames.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/error-overlay-reducer.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_BUILD_OK: null,
    ACTION_BUILD_ERROR: null,
    ACTION_BEFORE_REFRESH: null,
    ACTION_REFRESH: null,
    ACTION_UNHANDLED_ERROR: null,
    ACTION_UNHANDLED_REJECTION: null,
    ACTION_VERSION_INFO: null,
    INITIAL_OVERLAY_STATE: null,
    errorOverlayReducer: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_BUILD_OK: function() {
        return ACTION_BUILD_OK;
    },
    ACTION_BUILD_ERROR: function() {
        return ACTION_BUILD_ERROR;
    },
    ACTION_BEFORE_REFRESH: function() {
        return ACTION_BEFORE_REFRESH;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_UNHANDLED_ERROR: function() {
        return ACTION_UNHANDLED_ERROR;
    },
    ACTION_UNHANDLED_REJECTION: function() {
        return ACTION_UNHANDLED_REJECTION;
    },
    ACTION_VERSION_INFO: function() {
        return ACTION_VERSION_INFO;
    },
    INITIAL_OVERLAY_STATE: function() {
        return INITIAL_OVERLAY_STATE;
    },
    errorOverlayReducer: function() {
        return errorOverlayReducer;
    }
});
const ACTION_BUILD_OK = "build-ok";
const ACTION_BUILD_ERROR = "build-error";
const ACTION_BEFORE_REFRESH = "before-fast-refresh";
const ACTION_REFRESH = "fast-refresh";
const ACTION_UNHANDLED_ERROR = "unhandled-error";
const ACTION_UNHANDLED_REJECTION = "unhandled-rejection";
const ACTION_VERSION_INFO = "version-info";
const INITIAL_OVERLAY_STATE = {
    nextId: 1,
    buildError: null,
    errors: [],
    notFound: false,
    refreshState: {
        type: "idle"
    },
    versionInfo: {
        installed: "0.0.0",
        staleness: "unknown"
    }
};
function pushErrorFilterDuplicates(errors, err) {
    return [
        ...errors.filter((e)=>{
            // Filter out duplicate errors
            return e.event.reason !== err.event.reason;
        }),
        err
    ];
}
const errorOverlayReducer = (state, action)=>{
    switch(action.type){
        case ACTION_BUILD_OK:
            {
                return {
                    ...state,
                    buildError: null
                };
            }
        case ACTION_BUILD_ERROR:
            {
                return {
                    ...state,
                    buildError: action.message
                };
            }
        case ACTION_BEFORE_REFRESH:
            {
                return {
                    ...state,
                    refreshState: {
                        type: "pending",
                        errors: []
                    }
                };
            }
        case ACTION_REFRESH:
            {
                return {
                    ...state,
                    buildError: null,
                    errors: // and UNHANDLED_REJECTION events might be dispatched between the
                    // BEFORE_REFRESH and the REFRESH event. We want to keep those errors
                    // around until the next refresh. Otherwise we run into a race
                    // condition where those errors would be cleared on refresh completion
                    // before they can be displayed.
                    state.refreshState.type === "pending" ? state.refreshState.errors : [],
                    refreshState: {
                        type: "idle"
                    }
                };
            }
        case ACTION_UNHANDLED_ERROR:
        case ACTION_UNHANDLED_REJECTION:
            {
                switch(state.refreshState.type){
                    case "idle":
                        {
                            return {
                                ...state,
                                nextId: state.nextId + 1,
                                errors: pushErrorFilterDuplicates(state.errors, {
                                    id: state.nextId,
                                    event: action
                                })
                            };
                        }
                    case "pending":
                        {
                            return {
                                ...state,
                                nextId: state.nextId + 1,
                                refreshState: {
                                    ...state.refreshState,
                                    errors: pushErrorFilterDuplicates(state.refreshState.errors, {
                                        id: state.nextId,
                                        event: action
                                    })
                                }
                            };
                        }
                    default:
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        const _ = state.refreshState;
                        return state;
                }
            }
        case ACTION_VERSION_INFO:
            {
                return {
                    ...state,
                    versionInfo: action.versionInfo
                };
            }
        default:
            {
                return state;
            }
    }
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-overlay-reducer.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/getErrorByType.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getErrorByType", {
    enumerable: true,
    get: function() {
        return getErrorByType;
    }
});
const _erroroverlayreducer = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/error-overlay-reducer.js [app-client] (ecmascript)");
const _nodeStackFrames = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/nodeStackFrames.js [app-client] (ecmascript)");
const _stackframe = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js [app-client] (ecmascript)");
async function getErrorByType(ev) {
    const { id, event } = ev;
    switch(event.type){
        case _erroroverlayreducer.ACTION_UNHANDLED_ERROR:
        case _erroroverlayreducer.ACTION_UNHANDLED_REJECTION:
            {
                const readyRuntimeError = {
                    id,
                    runtime: true,
                    error: event.reason,
                    frames: await (0, _stackframe.getOriginalStackFrames)(event.frames, (0, _nodeStackFrames.getErrorSource)(event.reason), event.reason.toString())
                };
                if (event.type === _erroroverlayreducer.ACTION_UNHANDLED_ERROR) {
                    readyRuntimeError.componentStackFrames = event.componentStackFrames;
                }
                return readyRuntimeError;
            }
        default:
            {
                break;
            }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = event;
    throw new Error("type system invariant violation");
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=getErrorByType.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/Toast.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Toast", {
    enumerable: true,
    get: function() {
        return Toast;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const Toast = function Toast(param) {
    let { onClick, children, className } = param;
    return /*#__PURE__*/ _react.createElement("div", {
        "data-nextjs-toast": true,
        onClick: onClick,
        className: className
    }, /*#__PURE__*/ _react.createElement("div", {
        "data-nextjs-toast-wrapper": true
    }, children));
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Toast.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/styles.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [app-client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [app-client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-toast] {\n    position: fixed;\n    bottom: var(--size-gap-double);\n    left: var(--size-gap-double);\n    max-width: 420px;\n    z-index: 9000;\n  }\n\n  @media (max-width: 440px) {\n    [data-nextjs-toast] {\n      max-width: 90vw;\n      left: 5vw;\n    }\n  }\n\n  [data-nextjs-toast-wrapper] {\n    padding: 16px;\n    border-radius: var(--size-gap-half);\n    font-weight: 500;\n    color: var(--color-ansi-bright-white);\n    background-color: var(--color-ansi-red);\n    box-shadow: 0px var(--size-gap-double) var(--size-gap-quad)\n      rgba(0, 0, 0, 0.25);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    styles: null,
    Toast: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    styles: function() {
        return _styles.styles;
    },
    Toast: function() {
        return _Toast.Toast;
    }
});
const _styles = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/styles.js [app-client] (ecmascript)");
const _Toast = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/Toast.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/body-locker.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    lock: null,
    unlock: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    lock: function() {
        return lock;
    },
    unlock: function() {
        return unlock;
    }
});
let previousBodyPaddingRight;
let previousBodyOverflowSetting;
let activeLocks = 0;
function lock() {
    setTimeout(()=>{
        if (activeLocks++ > 0) {
            return;
        }
        const scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
        if (scrollBarGap > 0) {
            previousBodyPaddingRight = document.body.style.paddingRight;
            document.body.style.paddingRight = "" + scrollBarGap + "px";
        }
        previousBodyOverflowSetting = document.body.style.overflow;
        document.body.style.overflow = "hidden";
    });
}
function unlock() {
    setTimeout(()=>{
        if (activeLocks === 0 || --activeLocks !== 0) {
            return;
        }
        if (previousBodyPaddingRight !== undefined) {
            document.body.style.paddingRight = previousBodyPaddingRight;
            previousBodyPaddingRight = undefined;
        }
        if (previousBodyOverflowSetting !== undefined) {
            document.body.style.overflow = previousBodyOverflowSetting;
            previousBodyOverflowSetting = undefined;
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=body-locker.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/maintain--tab-focus.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

/* eslint-disable */ // @ts-nocheck
// Copied from https://github.com/medialize/ally.js
// License: MIT
// Copyright (c) 2015 Rodney Rehm
//
// Entrypoint: ally.js/maintain/tab-focus
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _platform = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/platform/platform.js [app-client] (ecmascript)"));
const _cssescape = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/css.escape/css.escape.js [app-client] (ecmascript)"));
// input may be undefined, selector-tring, Node, NodeList, HTMLCollection, array of Nodes
// yes, to some extent this is a bad replica of jQuery's constructor function
function nodeArray(input) {
    if (!input) {
        return [];
    }
    if (Array.isArray(input)) {
        return input;
    }
    // instanceof Node - does not work with iframes
    if (input.nodeType !== undefined) {
        return [
            input
        ];
    }
    if (typeof input === "string") {
        input = document.querySelectorAll(input);
    }
    if (input.length !== undefined) {
        return [].slice.call(input, 0);
    }
    throw new TypeError("unexpected input " + String(input));
}
function contextToElement(_ref) {
    var context = _ref.context, _ref$label = _ref.label, label = _ref$label === undefined ? "context-to-element" : _ref$label, resolveDocument = _ref.resolveDocument, defaultToDocument = _ref.defaultToDocument;
    var element = nodeArray(context)[0];
    if (resolveDocument && element && element.nodeType === Node.DOCUMENT_NODE) {
        element = element.documentElement;
    }
    if (!element && defaultToDocument) {
        return document.documentElement;
    }
    if (!element) {
        throw new TypeError(label + " requires valid options.context");
    }
    if (element.nodeType !== Node.ELEMENT_NODE && element.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
        throw new TypeError(label + " requires options.context to be an Element");
    }
    return element;
}
function getShadowHost() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context;
    var element = contextToElement({
        label: "get/shadow-host",
        context: context
    });
    // walk up to the root
    var container = null;
    while(element){
        container = element;
        element = element.parentNode;
    }
    // https://developer.mozilla.org/docs/Web/API/Node.nodeType
    // NOTE: Firefox 34 does not expose ShadowRoot.host (but 37 does)
    if (container.nodeType === container.DOCUMENT_FRAGMENT_NODE && container.host) {
        // the root is attached to a fragment node that has a host
        return container.host;
    }
    return null;
}
function getDocument(node) {
    if (!node) {
        return document;
    }
    if (node.nodeType === Node.DOCUMENT_NODE) {
        return node;
    }
    return node.ownerDocument || document;
}
function isActiveElement(context) {
    var element = contextToElement({
        label: "is/active-element",
        resolveDocument: true,
        context: context
    });
    var _document = getDocument(element);
    if (_document.activeElement === element) {
        return true;
    }
    var shadowHost = getShadowHost({
        context: element
    });
    if (shadowHost && shadowHost.shadowRoot.activeElement === element) {
        return true;
    }
    return false;
}
// [elem, elem.parent, elem.parent.parent, …, html]
// will not contain the shadowRoot (DOCUMENT_FRAGMENT_NODE) and shadowHost
function getParents() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context;
    var list = [];
    var element = contextToElement({
        label: "get/parents",
        context: context
    });
    while(element){
        list.push(element);
        // IE does know support parentElement on SVGElement
        element = element.parentNode;
        if (element && element.nodeType !== Node.ELEMENT_NODE) {
            element = null;
        }
    }
    return list;
}
// Element.prototype.matches may be available at a different name
// https://developer.mozilla.org/en/docs/Web/API/Element/matches
var names = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector"
];
var name = null;
function findMethodName(element) {
    names.some(function(_name) {
        if (!element[_name]) {
            return false;
        }
        name = _name;
        return true;
    });
}
function elementMatches(element, selector) {
    if (!name) {
        findMethodName(element);
    }
    return element[name](selector);
}
// deep clone of original platform
var platform = JSON.parse(JSON.stringify(_platform.default));
// operating system
var os = platform.os.family || "";
var ANDROID = os === "Android";
var WINDOWS = os.slice(0, 7) === "Windows";
var OSX = os === "OS X";
var IOS = os === "iOS";
// layout
var BLINK = platform.layout === "Blink";
var GECKO = platform.layout === "Gecko";
var TRIDENT = platform.layout === "Trident";
var EDGE = platform.layout === "EdgeHTML";
var WEBKIT = platform.layout === "WebKit";
// browser version (not layout engine version!)
var version = parseFloat(platform.version);
var majorVersion = Math.floor(version);
platform.majorVersion = majorVersion;
platform.is = {
    // operating system
    ANDROID: ANDROID,
    WINDOWS: WINDOWS,
    OSX: OSX,
    IOS: IOS,
    // layout
    BLINK: BLINK,
    GECKO: GECKO,
    TRIDENT: TRIDENT,
    EDGE: EDGE,
    WEBKIT: WEBKIT,
    // INTERNET EXPLORERS
    IE9: TRIDENT && majorVersion === 9,
    IE10: TRIDENT && majorVersion === 10,
    IE11: TRIDENT && majorVersion === 11
};
function before() {
    var data = {
        // remember what had focus to restore after test
        activeElement: document.activeElement,
        // remember scroll positions to restore after test
        windowScrollTop: window.scrollTop,
        windowScrollLeft: window.scrollLeft,
        bodyScrollTop: document.body.scrollTop,
        bodyScrollLeft: document.body.scrollLeft
    };
    // wrap tests in an element hidden from screen readers to prevent them
    // from announcing focus, which can be quite irritating to the user
    var iframe = document.createElement("iframe");
    iframe.setAttribute("style", "position:absolute; position:fixed; top:0; left:-2px; width:1px; height:1px; overflow:hidden;");
    iframe.setAttribute("aria-live", "off");
    iframe.setAttribute("aria-busy", "true");
    iframe.setAttribute("aria-hidden", "true");
    document.body.appendChild(iframe);
    var _window = iframe.contentWindow;
    var _document = _window.document;
    _document.open();
    _document.close();
    var wrapper = _document.createElement("div");
    _document.body.appendChild(wrapper);
    data.iframe = iframe;
    data.wrapper = wrapper;
    data.window = _window;
    data.document = _document;
    return data;
}
// options.element:
//  {string} element name
//  {function} callback(wrapper, document) to generate an element
// options.mutate: (optional)
//  {function} callback(element, wrapper, document) to manipulate element prior to focus-test.
//             Can return DOMElement to define focus target (default: element)
// options.validate: (optional)
//  {function} callback(element, focusTarget, document) to manipulate test-result
function test(data, options) {
    // make sure we operate on a clean slate
    data.wrapper.innerHTML = "";
    // create dummy element to test focusability of
    var element = typeof options.element === "string" ? data.document.createElement(options.element) : options.element(data.wrapper, data.document);
    // allow callback to further specify dummy element
    // and optionally define element to focus
    var focus = options.mutate && options.mutate(element, data.wrapper, data.document);
    if (!focus && focus !== false) {
        focus = element;
    }
    // element needs to be part of the DOM to be focusable
    !element.parentNode && data.wrapper.appendChild(element);
    // test if the element with invalid tabindex can be focused
    focus && focus.focus && focus.focus();
    // validate test's result
    return options.validate ? options.validate(element, focus, data.document) : data.document.activeElement === focus;
}
function after(data) {
    // restore focus to what it was before test and cleanup
    if (data.activeElement === document.body) {
        document.activeElement && document.activeElement.blur && document.activeElement.blur();
        if (platform.is.IE10) {
            // IE10 does not redirect focus to <body> when the activeElement is removed
            document.body.focus();
        }
    } else {
        data.activeElement && data.activeElement.focus && data.activeElement.focus();
    }
    document.body.removeChild(data.iframe);
    // restore scroll position
    window.scrollTop = data.windowScrollTop;
    window.scrollLeft = data.windowScrollLeft;
    document.body.scrollTop = data.bodyScrollTop;
    document.body.scrollLeft = data.bodyScrollLeft;
}
function detectFocus(tests) {
    var data = before();
    var results = {};
    Object.keys(tests).map(function(key) {
        results[key] = test(data, tests[key]);
    });
    after(data);
    return results;
}
// this file is overwritten by `npm run build:pre`
var version$1 = "1.4.1";
/*
    Facility to cache test results in localStorage.

    USAGE:
      cache.get('key');
      cache.set('key', 'value');
 */ function readLocalStorage(key) {
    // allow reading from storage to retrieve previous support results
    // even while the document does not have focus
    var data = void 0;
    try {
        data = window.localStorage && window.localStorage.getItem(key);
        data = data ? JSON.parse(data) : {};
    } catch (e) {
        data = {};
    }
    return data;
}
function writeLocalStorage(key, value) {
    if (!document.hasFocus()) {
        // if the document does not have focus when tests are executed, focus() may
        // not be handled properly and events may not be dispatched immediately.
        // This can happen when a document is reloaded while Developer Tools have focus.
        try {
            window.localStorage && window.localStorage.removeItem(key);
        } catch (e) {
        // ignore
        }
        return;
    }
    try {
        window.localStorage && window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
    // ignore
    }
}
var userAgent = typeof window !== "undefined" && window.navigator.userAgent || "";
var cacheKey = "ally-supports-cache";
var cache = readLocalStorage(cacheKey);
// update the cache if ally or the user agent changed (newer version, etc)
if (cache.userAgent !== userAgent || cache.version !== version$1) {
    cache = {};
}
cache.userAgent = userAgent;
cache.version = version$1;
var cache$1 = {
    get: function get() {
        return cache;
    },
    set: function set(values) {
        Object.keys(values).forEach(function(key) {
            cache[key] = values[key];
        });
        cache.time = new Date().toISOString();
        writeLocalStorage(cacheKey, cache);
    }
};
function cssShadowPiercingDeepCombinator() {
    var combinator = void 0;
    // see https://dev.w3.org/csswg/css-scoping-1/#deep-combinator
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1117572
    // https://code.google.com/p/chromium/issues/detail?id=446051
    try {
        document.querySelector("html >>> :first-child");
        combinator = ">>>";
    } catch (noArrowArrowArrow) {
        try {
            // old syntax supported at least up to Chrome 41
            // https://code.google.com/p/chromium/issues/detail?id=446051
            document.querySelector("html /deep/ :first-child");
            combinator = "/deep/";
        } catch (noDeep) {
            combinator = "";
        }
    }
    return combinator;
}
var gif = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusAreaImgTabindex = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' + gif + '">';
        return element.querySelector("area");
    }
};
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusAreaTabindex = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test">' + '<area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" alt="" src="' + gif + '">';
        return false;
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            // fixes https://github.com/medialize/ally.js/issues/35
            // Firefox loads the DataURI asynchronously, causing a false-negative
            return true;
        }
        var focus = element.querySelector("area");
        focus.focus();
        return _document.activeElement === focus;
    }
};
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusAreaWithoutHref = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-area-href-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-area-href-test" alt="" src="' + gif + '">';
        return element.querySelector("area");
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            // fixes https://github.com/medialize/ally.js/issues/35
            // Firefox loads the DataURI asynchronously, causing a false-negative
            return true;
        }
        return _document.activeElement === focusTarget;
    }
};
var focusAudioWithoutControls = {
    name: "can-focus-audio-without-controls",
    element: "audio",
    mutate: function mutate(element) {
        try {
            // invalid media file can trigger warning in console, data-uri to prevent HTTP request
            element.setAttribute("src", gif);
        } catch (e) {
        // IE9 may throw "Error: Not implemented"
        }
    }
};
var invalidGif = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ";
// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusBrokenImageMap = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#broken-image-map-test" alt="" src="' + invalidGif + '">';
        return element.querySelector("area");
    }
};
// Children of focusable elements with display:flex are focusable in IE10-11
var focusChildrenOfFocusableFlexbox = {
    element: "div",
    mutate: function mutate(element) {
        element.setAttribute("tabindex", "-1");
        element.setAttribute("style", "display: -webkit-flex; display: -ms-flexbox; display: flex;");
        element.innerHTML = '<span style="display: block;">hello</span>';
        return element.querySelector("span");
    }
};
// fieldset[tabindex=0][disabled] should not be focusable, but Blink and WebKit disagree
// @specification https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
// @browser-issue Chromium https://crbug.com/453847
// @browser-issue WebKit https://bugs.webkit.org/show_bug.cgi?id=141086
var focusFieldsetDisabled = {
    element: "fieldset",
    mutate: function mutate(element) {
        element.setAttribute("tabindex", 0);
        element.setAttribute("disabled", "disabled");
    }
};
var focusFieldset = {
    element: "fieldset",
    mutate: function mutate(element) {
        element.innerHTML = "<legend>legend</legend><p>content</p>";
    }
};
// elements with display:flex are focusable in IE10-11
var focusFlexboxContainer = {
    element: "span",
    mutate: function mutate(element) {
        element.setAttribute("style", "display: -webkit-flex; display: -ms-flexbox; display: flex;");
        element.innerHTML = '<span style="display: block;">hello</span>';
    }
};
// form[tabindex=0][disabled] should be focusable as the
// specification doesn't know the disabled attribute on the form element
// @specification https://www.w3.org/TR/html5/forms.html#the-form-element
var focusFormDisabled = {
    element: "form",
    mutate: function mutate(element) {
        element.setAttribute("tabindex", 0);
        element.setAttribute("disabled", "disabled");
    }
};
// NOTE: https://github.com/medialize/ally.js/issues/35
// fixes https://github.com/medialize/ally.js/issues/20
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-ismap
var focusImgIsmap = {
    element: "a",
    mutate: function mutate(element) {
        element.href = "#void";
        element.innerHTML = '<img ismap src="' + gif + '" alt="">';
        return element.querySelector("img");
    }
};
// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusImgUsemapTabindex = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" ' + 'src="' + gif + '">';
        return element.querySelector("img");
    }
};
var focusInHiddenIframe = {
    element: function element(wrapper, _document) {
        var iframe = _document.createElement("iframe");
        // iframe must be part of the DOM before accessing the contentWindow is possible
        wrapper.appendChild(iframe);
        // create the iframe's default document (<html><head></head><body></body></html>)
        var iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.close();
        return iframe;
    },
    mutate: function mutate(iframe) {
        iframe.style.visibility = "hidden";
        var iframeDocument = iframe.contentWindow.document;
        var input = iframeDocument.createElement("input");
        iframeDocument.body.appendChild(input);
        return input;
    },
    validate: function validate(iframe) {
        var iframeDocument = iframe.contentWindow.document;
        var focus = iframeDocument.querySelector("input");
        return iframeDocument.activeElement === focus;
    }
};
var result = !platform.is.WEBKIT;
function focusInZeroDimensionObject() {
    return result;
}
// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
var focusInvalidTabindex = {
    element: "div",
    mutate: function mutate(element) {
        element.setAttribute("tabindex", "invalid-value");
    }
};
var focusLabelTabindex = {
    element: "label",
    mutate: function mutate(element) {
        element.setAttribute("tabindex", "-1");
    },
    validate: function validate(element, focusTarget, _document) {
        // force layout in Chrome 49, otherwise the element won't be focusable
        /* eslint-disable no-unused-vars */ var variableToPreventDeadCodeElimination = element.offsetHeight;
        /* eslint-enable no-unused-vars */ element.focus();
        return _document.activeElement === element;
    }
};
var svg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtb" + "G5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ic3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGlkPSJ" + "zdmctbGluay10ZXh0Ij50ZXh0PC90ZXh0Pjwvc3ZnPg==";
// Note: IE10 on BrowserStack does not like this test
var focusObjectSvgHidden = {
    element: "object",
    mutate: function mutate(element) {
        element.setAttribute("type", "image/svg+xml");
        element.setAttribute("data", svg);
        element.setAttribute("width", "200");
        element.setAttribute("height", "50");
        element.style.visibility = "hidden";
    }
};
// Note: IE10 on BrowserStack does not like this test
var focusObjectSvg = {
    name: "can-focus-object-svg",
    element: "object",
    mutate: function mutate(element) {
        element.setAttribute("type", "image/svg+xml");
        element.setAttribute("data", svg);
        element.setAttribute("width", "200");
        element.setAttribute("height", "50");
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            // Firefox seems to be handling the object creation asynchronously and thereby produces a false negative test result.
            // Because we know Firefox is able to focus object elements referencing SVGs, we simply cheat by sniffing the user agent string
            return true;
        }
        return _document.activeElement === element;
    }
};
// Every Environment except IE9 considers SWF objects focusable
var result$1 = !platform.is.IE9;
function focusObjectSwf() {
    return result$1;
}
var focusRedirectImgUsemap = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#focus-redirect-img-usemap" alt="" ' + 'src="' + gif + '">';
        // focus the <img>, not the <div>
        return element.querySelector("img");
    },
    validate: function validate(element, focusTarget, _document) {
        var target = element.querySelector("area");
        return _document.activeElement === target;
    }
};
// see https://jsbin.com/nenirisage/edit?html,js,console,output
var focusRedirectLegend = {
    element: "fieldset",
    mutate: function mutate(element) {
        element.innerHTML = '<legend>legend</legend><input tabindex="-1"><input tabindex="0">';
        // take care of focus in validate();
        return false;
    },
    validate: function validate(element, focusTarget, _document) {
        var focusable = element.querySelector('input[tabindex="-1"]');
        var tabbable = element.querySelector('input[tabindex="0"]');
        // Firefox requires this test to focus the <fieldset> first, while this is not necessary in
        // https://jsbin.com/nenirisage/edit?html,js,console,output
        element.focus();
        element.querySelector("legend").focus();
        return _document.activeElement === focusable && "focusable" || _document.activeElement === tabbable && "tabbable" || "";
    }
};
// https://github.com/medialize/ally.js/issues/21
var focusScrollBody = {
    element: "div",
    mutate: function mutate(element) {
        element.setAttribute("style", "width: 100px; height: 50px; overflow: auto;");
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
        return element.querySelector("div");
    }
};
// https://github.com/medialize/ally.js/issues/21
var focusScrollContainerWithoutOverflow = {
    element: "div",
    mutate: function mutate(element) {
        element.setAttribute("style", "width: 100px; height: 50px;");
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    }
};
// https://github.com/medialize/ally.js/issues/21
var focusScrollContainer = {
    element: "div",
    mutate: function mutate(element) {
        element.setAttribute("style", "width: 100px; height: 50px; overflow: auto;");
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    }
};
var focusSummary = {
    element: "details",
    mutate: function mutate(element) {
        element.innerHTML = "<summary>foo</summary><p>content</p>";
        return element.firstElementChild;
    }
};
function makeFocusableForeignObject() {
    // Constructs <foreignObject width="30" height="30"><input type="text"/></foreignObject>
    // without raising a Trusted Types violation
    var foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    foreignObject.width.baseVal.value = 30;
    foreignObject.height.baseVal.value = 30;
    foreignObject.appendChild(document.createElement("input"));
    foreignObject.lastChild.type = "text";
    return foreignObject;
}
function focusSvgForeignObjectHack(element) {
    // Edge13, Edge14: foreignObject focus hack
    // https://jsbin.com/kunehinugi/edit?html,js,output
    // https://jsbin.com/fajagi/3/edit?html,js,output
    var isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === "svg";
    if (!isSvgElement) {
        return false;
    }
    // inject and focus an <input> element into the SVG element to receive focus
    var foreignObject = makeFocusableForeignObject();
    element.appendChild(foreignObject);
    var input = foreignObject.querySelector("input");
    input.focus();
    // upon disabling the activeElement, IE and Edge
    // will not shift focus to <body> like all the other
    // browsers, but instead find the first focusable
    // ancestor and shift focus to that
    input.disabled = true;
    // clean up
    element.removeChild(foreignObject);
    return true;
}
function generate(element) {
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + element + "</svg>";
}
function focus(element) {
    if (element.focus) {
        return;
    }
    try {
        HTMLElement.prototype.focus.call(element);
    } catch (e) {
        focusSvgForeignObjectHack(element);
    }
}
function validate(element, focusTarget, _document) {
    focus(focusTarget);
    return _document.activeElement === focusTarget;
}
var focusSvgFocusableAttribute = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = generate('<text focusable="true">a</text>');
        return element.querySelector("text");
    },
    validate: validate
};
var focusSvgTabindexAttribute = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = generate('<text tabindex="0">a</text>');
        return element.querySelector("text");
    },
    validate: validate
};
var focusSvgNegativeTabindexAttribute = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = generate('<text tabindex="-1">a</text>');
        return element.querySelector("text");
    },
    validate: validate
};
var focusSvgUseTabindex = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = generate([
            '<g id="ally-test-target"><a xlink:href="#void"><text>link</text></a></g>',
            '<use xlink:href="#ally-test-target" x="0" y="0" tabindex="-1" />'
        ].join(""));
        return element.querySelector("use");
    },
    validate: validate
};
var focusSvgForeignobjectTabindex = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = generate('<foreignObject tabindex="-1"><input type="text" /></foreignObject>');
        // Safari 8's quersSelector() can't identify foreignObject, but getElementyByTagName() can
        return element.querySelector("foreignObject") || element.getElementsByTagName("foreignObject")[0];
    },
    validate: validate
};
// Firefox seems to be handling the SVG-document-in-iframe creation asynchronously
// and thereby produces a false negative test result. Thus the test is pointless
// and we resort to UA sniffing once again.
// see http://jsbin.com/vunadohoko/1/edit?js,console,output
var result$2 = Boolean(platform.is.GECKO && typeof SVGElement !== "undefined" && SVGElement.prototype.focus);
function focusSvgInIframe() {
    return result$2;
}
var focusSvg = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = generate("");
        return element.firstChild;
    },
    validate: validate
};
// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
var focusTabindexTrailingCharacters = {
    element: "div",
    mutate: function mutate(element) {
        element.setAttribute("tabindex", "3x");
    }
};
var focusTable = {
    element: "table",
    mutate: function mutate(element, wrapper, _document) {
        // IE9 has a problem replacing TBODY contents with innerHTML.
        // https://stackoverflow.com/a/8097055/515124
        // element.innerHTML = '<tr><td>cell</td></tr>';
        var fragment = _document.createDocumentFragment();
        fragment.innerHTML = "<tr><td>cell</td></tr>";
        element.appendChild(fragment);
    }
};
var focusVideoWithoutControls = {
    element: "video",
    mutate: function mutate(element) {
        try {
            // invalid media file can trigger warning in console, data-uri to prevent HTTP request
            element.setAttribute("src", gif);
        } catch (e) {
        // IE9 may throw "Error: Not implemented"
        }
    }
};
// https://jsbin.com/vafaba/3/edit?html,js,console,output
var result$3 = platform.is.GECKO || platform.is.TRIDENT || platform.is.EDGE;
function tabsequenceAreaAtImgPosition() {
    return result$3;
}
var testCallbacks = {
    cssShadowPiercingDeepCombinator: cssShadowPiercingDeepCombinator,
    focusInZeroDimensionObject: focusInZeroDimensionObject,
    focusObjectSwf: focusObjectSwf,
    focusSvgInIframe: focusSvgInIframe,
    tabsequenceAreaAtImgPosition: tabsequenceAreaAtImgPosition
};
var testDescriptions = {
    focusAreaImgTabindex: focusAreaImgTabindex,
    focusAreaTabindex: focusAreaTabindex,
    focusAreaWithoutHref: focusAreaWithoutHref,
    focusAudioWithoutControls: focusAudioWithoutControls,
    focusBrokenImageMap: focusBrokenImageMap,
    focusChildrenOfFocusableFlexbox: focusChildrenOfFocusableFlexbox,
    focusFieldsetDisabled: focusFieldsetDisabled,
    focusFieldset: focusFieldset,
    focusFlexboxContainer: focusFlexboxContainer,
    focusFormDisabled: focusFormDisabled,
    focusImgIsmap: focusImgIsmap,
    focusImgUsemapTabindex: focusImgUsemapTabindex,
    focusInHiddenIframe: focusInHiddenIframe,
    focusInvalidTabindex: focusInvalidTabindex,
    focusLabelTabindex: focusLabelTabindex,
    focusObjectSvg: focusObjectSvg,
    focusObjectSvgHidden: focusObjectSvgHidden,
    focusRedirectImgUsemap: focusRedirectImgUsemap,
    focusRedirectLegend: focusRedirectLegend,
    focusScrollBody: focusScrollBody,
    focusScrollContainerWithoutOverflow: focusScrollContainerWithoutOverflow,
    focusScrollContainer: focusScrollContainer,
    focusSummary: focusSummary,
    focusSvgFocusableAttribute: focusSvgFocusableAttribute,
    focusSvgTabindexAttribute: focusSvgTabindexAttribute,
    focusSvgNegativeTabindexAttribute: focusSvgNegativeTabindexAttribute,
    focusSvgUseTabindex: focusSvgUseTabindex,
    focusSvgForeignobjectTabindex: focusSvgForeignobjectTabindex,
    focusSvg: focusSvg,
    focusTabindexTrailingCharacters: focusTabindexTrailingCharacters,
    focusTable: focusTable,
    focusVideoWithoutControls: focusVideoWithoutControls
};
function executeTests() {
    var results = detectFocus(testDescriptions);
    Object.keys(testCallbacks).forEach(function(key) {
        results[key] = testCallbacks[key]();
    });
    return results;
}
var supportsCache = null;
function _supports() {
    if (supportsCache) {
        return supportsCache;
    }
    supportsCache = cache$1.get();
    if (!supportsCache.time) {
        cache$1.set(executeTests());
        supportsCache = cache$1.get();
    }
    return supportsCache;
}
var supports = void 0;
// https://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-integers
// NOTE: all browsers agree to allow trailing spaces as well
var validIntegerPatternNoTrailing = /^\s*(-|\+)?[0-9]+\s*$/;
var validIntegerPatternWithTrailing = /^\s*(-|\+)?[0-9]+.*$/;
function isValidTabindex(context) {
    if (!supports) {
        supports = _supports();
    }
    var validIntegerPattern = supports.focusTabindexTrailingCharacters ? validIntegerPatternWithTrailing : validIntegerPatternNoTrailing;
    var element = contextToElement({
        label: "is/valid-tabindex",
        resolveDocument: true,
        context: context
    });
    // Edge 14 has a capitalization problem on SVG elements,
    // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
    var hasTabindex = element.hasAttribute("tabindex");
    var hasTabIndex = element.hasAttribute("tabIndex");
    if (!hasTabindex && !hasTabIndex) {
        return false;
    }
    // older Firefox and Internet Explorer don't support tabindex on SVG elements
    var isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === "svg";
    if (isSvgElement && !supports.focusSvgTabindexAttribute) {
        return false;
    }
    // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    if (supports.focusInvalidTabindex) {
        return true;
    }
    // an element matches the tabindex selector even if its value is invalid
    var tabindex = element.getAttribute(hasTabindex ? "tabindex" : "tabIndex");
    // IE11 parses tabindex="" as the value "-32768"
    // @browser-issue Trident https://connect.microsoft.com/IE/feedback/details/1072965
    if (tabindex === "-32768") {
        return false;
    }
    return Boolean(tabindex && validIntegerPattern.test(tabindex));
}
function tabindexValue(element) {
    if (!isValidTabindex(element)) {
        return null;
    }
    // Edge 14 has a capitalization problem on SVG elements,
    // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
    var hasTabindex = element.hasAttribute("tabindex");
    var attributeName = hasTabindex ? "tabindex" : "tabIndex";
    // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    var tabindex = parseInt(element.getAttribute(attributeName), 10);
    return isNaN(tabindex) ? -1 : tabindex;
}
// this is a shared utility file for focus-relevant.js and tabbable.js
// separate testing of this file's functions is not necessary,
// as they're implicitly tested by way of the consumers
function isUserModifyWritable(style) {
    // https://www.w3.org/TR/1999/WD-css3-userint-19990916#user-modify
    // https://github.com/medialize/ally.js/issues/17
    var userModify = style.webkitUserModify || "";
    return Boolean(userModify && userModify.indexOf("write") !== -1);
}
function hasCssOverflowScroll(style) {
    return [
        style.getPropertyValue("overflow"),
        style.getPropertyValue("overflow-x"),
        style.getPropertyValue("overflow-y")
    ].some(function(overflow) {
        return overflow === "auto" || overflow === "scroll";
    });
}
function hasCssDisplayFlex(style) {
    return style.display.indexOf("flex") > -1;
}
function isScrollableContainer(element, nodeName, parentNodeName, parentStyle) {
    if (nodeName !== "div" && nodeName !== "span") {
        // Internet Explorer advances scrollable containers and bodies to focusable
        // only if the scrollable container is <div> or <span> - this does *not*
        // happen for <section>, <article>, …
        return false;
    }
    if (parentNodeName && parentNodeName !== "div" && parentNodeName !== "span" && !hasCssOverflowScroll(parentStyle)) {
        return false;
    }
    return element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth;
}
var supports$1 = void 0;
function isFocusRelevantRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        flexbox: false,
        scrollable: false,
        shadow: false
    } : _ref$except;
    if (!supports$1) {
        supports$1 = _supports();
    }
    var element = contextToElement({
        label: "is/focus-relevant",
        resolveDocument: true,
        context: context
    });
    if (!except.shadow && element.shadowRoot) {
        // a ShadowDOM host receives focus when the focus moves to its content
        return true;
    }
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === "input" && element.type === "hidden") {
        // input[type="hidden"] supports.cannot be focused
        return false;
    }
    if (nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea") {
        return true;
    }
    if (nodeName === "legend" && supports$1.focusRedirectLegend) {
        // specifics filtered in is/focusable
        return true;
    }
    if (nodeName === "label") {
        // specifics filtered in is/focusable
        return true;
    }
    if (nodeName === "area") {
        // specifics filtered in is/focusable
        return true;
    }
    if (nodeName === "a" && element.hasAttribute("href")) {
        return true;
    }
    if (nodeName === "object" && element.hasAttribute("usemap")) {
        // object[usemap] is not focusable in any browser
        return false;
    }
    if (nodeName === "object") {
        var svgType = element.getAttribute("type");
        if (!supports$1.focusObjectSvg && svgType === "image/svg+xml") {
            // object[type="image/svg+xml"] is not focusable in Internet Explorer
            return false;
        } else if (!supports$1.focusObjectSwf && svgType === "application/x-shockwave-flash") {
            // object[type="application/x-shockwave-flash"] is not focusable in Internet Explorer 9
            return false;
        }
    }
    if (nodeName === "iframe" || nodeName === "object") {
        // browsing context containers
        return true;
    }
    if (nodeName === "embed" || nodeName === "keygen") {
        // embed is considered focus-relevant but not focusable
        // see https://github.com/medialize/ally.js/issues/82
        return true;
    }
    if (element.hasAttribute("contenteditable")) {
        // also see CSS property user-modify below
        return true;
    }
    if (nodeName === "audio" && (supports$1.focusAudioWithoutControls || element.hasAttribute("controls"))) {
        return true;
    }
    if (nodeName === "video" && (supports$1.focusVideoWithoutControls || element.hasAttribute("controls"))) {
        return true;
    }
    if (supports$1.focusSummary && nodeName === "summary") {
        return true;
    }
    var validTabindex = isValidTabindex(element);
    if (nodeName === "img" && element.hasAttribute("usemap")) {
        // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
        // it appears the tabindex is overruled so focus is still forwarded to the <map>
        return validTabindex && supports$1.focusImgUsemapTabindex || supports$1.focusRedirectImgUsemap;
    }
    if (supports$1.focusTable && (nodeName === "table" || nodeName === "td")) {
        // IE10-11 supports.can focus <table> and <td>
        return true;
    }
    if (supports$1.focusFieldset && nodeName === "fieldset") {
        // IE10-11 supports.can focus <fieldset>
        return true;
    }
    var isSvgElement = nodeName === "svg";
    var isSvgContent = element.ownerSVGElement;
    var focusableAttribute = element.getAttribute("focusable");
    var tabindex = tabindexValue(element);
    if (nodeName === "use" && tabindex !== null && !supports$1.focusSvgUseTabindex) {
        // <use> cannot be made focusable by adding a tabindex attribute anywhere but Blink and WebKit
        return false;
    }
    if (nodeName === "foreignobject") {
        // <use> can only be made focusable in Blink and WebKit
        return tabindex !== null && supports$1.focusSvgForeignobjectTabindex;
    }
    if (elementMatches(element, "svg a") && element.hasAttribute("xlink:href")) {
        return true;
    }
    if ((isSvgElement || isSvgContent) && element.focus && !supports$1.focusSvgNegativeTabindexAttribute && tabindex < 0) {
        // Firefox 51 and 52 treat any natively tabbable SVG element with
        // tabindex="-1" as tabbable and everything else as inert
        // see https://bugzilla.mozilla.org/show_bug.cgi?id=1302340
        return false;
    }
    if (isSvgElement) {
        return validTabindex || supports$1.focusSvg || supports$1.focusSvgInIframe || // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
        Boolean(supports$1.focusSvgFocusableAttribute && focusableAttribute && focusableAttribute === "true");
    }
    if (isSvgContent) {
        if (supports$1.focusSvgTabindexAttribute && validTabindex) {
            return true;
        }
        if (supports$1.focusSvgFocusableAttribute) {
            // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
            return focusableAttribute === "true";
        }
    }
    // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
    if (validTabindex) {
        return true;
    }
    var style = window.getComputedStyle(element, null);
    if (isUserModifyWritable(style)) {
        return true;
    }
    if (supports$1.focusImgIsmap && nodeName === "img" && element.hasAttribute("ismap")) {
        // IE10-11 considers the <img> in <a href><img ismap> focusable
        // https://github.com/medialize/ally.js/issues/20
        var hasLinkParent = getParents({
            context: element
        }).some(function(parent) {
            return parent.nodeName.toLowerCase() === "a" && parent.hasAttribute("href");
        });
        if (hasLinkParent) {
            return true;
        }
    }
    // https://github.com/medialize/ally.js/issues/21
    if (!except.scrollable && supports$1.focusScrollContainer) {
        if (supports$1.focusScrollContainerWithoutOverflow) {
            // Internet Explorer does will consider the scrollable area focusable
            // if the element is a <div> or a <span> and it is in fact scrollable,
            // regardless of the CSS overflow property
            if (isScrollableContainer(element, nodeName)) {
                return true;
            }
        } else if (hasCssOverflowScroll(style)) {
            // Firefox requires proper overflow setting, IE does not necessarily
            // https://developer.mozilla.org/docs/Web/CSS/overflow
            return true;
        }
    }
    if (!except.flexbox && supports$1.focusFlexboxContainer && hasCssDisplayFlex(style)) {
        // elements with display:flex are focusable in IE10-11
        return true;
    }
    var parent = element.parentElement;
    if (!except.scrollable && parent) {
        var parentNodeName = parent.nodeName.toLowerCase();
        var parentStyle = window.getComputedStyle(parent, null);
        if (supports$1.focusScrollBody && isScrollableContainer(parent, nodeName, parentNodeName, parentStyle)) {
            // scrollable bodies are focusable Internet Explorer
            // https://github.com/medialize/ally.js/issues/21
            return true;
        }
        // Children of focusable elements with display:flex are focusable in IE10-11
        if (supports$1.focusChildrenOfFocusableFlexbox) {
            if (hasCssDisplayFlex(parentStyle)) {
                return true;
            }
        }
    }
    // NOTE: elements marked as inert are not focusable,
    // but that property is not exposed to the DOM
    // https://www.w3.org/TR/html5/editing.html#inert
    return false;
}
// bind exceptions to an iterator callback
isFocusRelevantRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFocusRelevant = function isFocusRelevant(context) {
        return isFocusRelevantRules({
            context: context,
            except: except
        });
    };
    isFocusRelevant.rules = isFocusRelevantRules;
    return isFocusRelevant;
};
// provide isFocusRelevant(context) as default iterator callback
var isFocusRelevant = isFocusRelevantRules.except({});
function findIndex(array, callback) {
    // attempt to use native or polyfilled Array#findIndex first
    if (array.findIndex) {
        return array.findIndex(callback);
    }
    var length = array.length;
    // shortcut if the array is empty
    if (length === 0) {
        return -1;
    }
    // otherwise loop over array
    for(var i = 0; i < length; i++){
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
function getContentDocument(node) {
    try {
        // works on <object> and <iframe>
        return node.contentDocument || // works on <object> and <iframe>
        node.contentWindow && node.contentWindow.document || // works on <object> and <iframe> that contain SVG
        node.getSVGDocument && node.getSVGDocument() || null;
    } catch (e) {
        // SecurityError: Failed to read the 'contentDocument' property from 'HTMLObjectElement'
        // also IE may throw member not found exception e.g. on <object type="image/png">
        return null;
    }
}
function getWindow(node) {
    var _document = getDocument(node);
    return _document.defaultView || window;
}
var shadowPrefix = void 0;
function selectInShadows(selector) {
    if (typeof shadowPrefix !== "string") {
        var operator = cssShadowPiercingDeepCombinator();
        if (operator) {
            shadowPrefix = ", html " + operator + " ";
        }
    }
    if (!shadowPrefix) {
        return selector;
    }
    return selector + shadowPrefix + selector.replace(/\s*,\s*/g, ",").split(",").join(shadowPrefix);
}
var selector = void 0;
function findDocumentHostElement(_window) {
    if (!selector) {
        selector = selectInShadows("object, iframe");
    }
    if (_window._frameElement !== undefined) {
        return _window._frameElement;
    }
    _window._frameElement = null;
    var potentialHosts = _window.parent.document.querySelectorAll(selector);
    [].some.call(potentialHosts, function(element) {
        var _document = getContentDocument(element);
        if (_document !== _window.document) {
            return false;
        }
        _window._frameElement = element;
        return true;
    });
    return _window._frameElement;
}
function getFrameElement(element) {
    var _window = getWindow(element);
    if (!_window.parent || _window.parent === _window) {
        // if there is no parent browsing context,
        // we're not going to get a frameElement either way
        return null;
    }
    try {
        // see https://developer.mozilla.org/docs/Web/API/Window/frameElement
        // does not work within <embed> anywhere, and not within in <object> in IE
        return _window.frameElement || findDocumentHostElement(_window);
    } catch (e) {
        return null;
    }
}
// https://www.w3.org/TR/html5/rendering.html#being-rendered
// <area> is not rendered, but we *consider* it visible to simplfiy this function's usage
var notRenderedElementsPattern = /^(area)$/;
function computedStyle(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
}
function notDisplayed(_path) {
    return _path.some(function(element) {
        // display:none is not visible (optimized away at layout)
        return computedStyle(element, "display") === "none";
    });
}
function notVisible(_path) {
    // https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L109-L114
    // NOTE: a nested element can reverse visibility:hidden|collapse by explicitly setting visibility:visible
    // NOTE: visibility can be ["", "visible", "hidden", "collapse"]
    var hidden = findIndex(_path, function(element) {
        var visibility = computedStyle(element, "visibility");
        return visibility === "hidden" || visibility === "collapse";
    });
    if (hidden === -1) {
        // there is no hidden element
        return false;
    }
    var visible = findIndex(_path, function(element) {
        return computedStyle(element, "visibility") === "visible";
    });
    if (visible === -1) {
        // there is no visible element (but a hidden element)
        return true;
    }
    if (hidden < visible) {
        // there is a hidden element and it's closer than the first visible element
        return true;
    }
    // there may be a hidden element, but the closest element is visible
    return false;
}
function collapsedParent(_path) {
    var offset = 1;
    if (_path[0].nodeName.toLowerCase() === "summary") {
        offset = 2;
    }
    return _path.slice(offset).some(function(element) {
        // "content children" of a closed details element are not visible
        return element.nodeName.toLowerCase() === "details" && element.open === false;
    });
}
function isVisibleRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        notRendered: false,
        cssDisplay: false,
        cssVisibility: false,
        detailsElement: false,
        browsingContext: false
    } : _ref$except;
    var element = contextToElement({
        label: "is/visible",
        resolveDocument: true,
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    if (!except.notRendered && notRenderedElementsPattern.test(nodeName)) {
        return true;
    }
    var _path = getParents({
        context: element
    });
    // in Internet Explorer <audio> has a default display: none, where others have display: inline
    // but IE allows focusing <audio style="display:none">, but not <div display:none><audio>
    // this is irrelevant to other browsers, as the controls attribute is required to make <audio> focusable
    var isAudioWithoutControls = nodeName === "audio" && !element.hasAttribute("controls");
    if (!except.cssDisplay && notDisplayed(isAudioWithoutControls ? _path.slice(1) : _path)) {
        return false;
    }
    if (!except.cssVisibility && notVisible(_path)) {
        return false;
    }
    if (!except.detailsElement && collapsedParent(_path)) {
        return false;
    }
    if (!except.browsingContext) {
        // elements within a browsing context are affected by the
        // browsing context host element's visibility and tabindex
        var frameElement = getFrameElement(element);
        var _isVisible = isVisibleRules.except(except);
        if (frameElement && !_isVisible(frameElement)) {
            return false;
        }
    }
    return true;
}
// bind exceptions to an iterator callback
isVisibleRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isVisible = function isVisible(context) {
        return isVisibleRules({
            context: context,
            except: except
        });
    };
    isVisible.rules = isVisibleRules;
    return isVisible;
};
// provide isVisible(context) as default iterator callback
var isVisible = isVisibleRules.except({});
function getMapByName(name, _document) {
    // apparently getElementsByName() also considers id attribute in IE & opera
    // https://developer.mozilla.org/docs/Web/API/Document/getElementsByName
    var map = _document.querySelector('map[name="' + (0, _cssescape.default)(name) + '"]');
    return map || null;
}
function getImageOfArea(element) {
    var map = element.parentElement;
    if (!map.name || map.nodeName.toLowerCase() !== "map") {
        return null;
    }
    // NOTE: image maps can also be applied to <object> with image content,
    // but no browser supports this at the moment
    // HTML5 specifies HTMLMapElement.images to be an HTMLCollection of all
    // <img> and <object> referencing the <map> element, but no browser implements this
    //   https://www.w3.org/TR/html5/embedded-content-0.html#the-map-element
    //   https://developer.mozilla.org/docs/Web/API/HTMLMapElement
    // the image must be valid and loaded for the map to take effect
    var _document = getDocument(element);
    return _document.querySelector('img[usemap="#' + (0, _cssescape.default)(map.name) + '"]') || null;
}
var supports$2 = void 0;
// https://developer.mozilla.org/docs/Web/HTML/Element/map
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
// https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L88-L107
function isValidArea(context) {
    if (!supports$2) {
        supports$2 = _supports();
    }
    var element = contextToElement({
        label: "is/valid-area",
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName !== "area") {
        return false;
    }
    var hasTabindex = element.hasAttribute("tabindex");
    if (!supports$2.focusAreaTabindex && hasTabindex) {
        // Blink and WebKit do not consider <area tabindex="-1" href="#void"> focusable
        return false;
    }
    var img = getImageOfArea(element);
    if (!img || !isVisible(img)) {
        return false;
    }
    // Firefox only allows fully loaded images to reference image maps
    // https://stereochro.me/ideas/detecting-broken-images-js
    if (!supports$2.focusBrokenImageMap && (!img.complete || !img.naturalHeight || img.offsetWidth <= 0 || img.offsetHeight <= 0)) {
        return false;
    }
    // Firefox supports.can focus area elements even if they don't have an href attribute
    if (!supports$2.focusAreaWithoutHref && !element.href) {
        // Internet explorer supports.can focus area elements without href if either
        // the area element or the image element has a tabindex attribute
        return supports$2.focusAreaTabindex && hasTabindex || supports$2.focusAreaImgTabindex && img.hasAttribute("tabindex");
    }
    // https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
    var childOfInteractive = getParents({
        context: img
    }).slice(1).some(function(_element) {
        var name = _element.nodeName.toLowerCase();
        return name === "button" || name === "a";
    });
    if (childOfInteractive) {
        return false;
    }
    return true;
}
var supports$3 = void 0;
// https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
var disabledElementsPattern = void 0;
var disabledElements = {
    input: true,
    select: true,
    textarea: true,
    button: true,
    fieldset: true,
    form: true
};
function isNativeDisabledSupported(context) {
    if (!supports$3) {
        supports$3 = _supports();
        if (supports$3.focusFieldsetDisabled) {
            delete disabledElements.fieldset;
        }
        if (supports$3.focusFormDisabled) {
            delete disabledElements.form;
        }
        disabledElementsPattern = new RegExp("^(" + Object.keys(disabledElements).join("|") + ")$");
    }
    var element = contextToElement({
        label: "is/native-disabled-supported",
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    return Boolean(disabledElementsPattern.test(nodeName));
}
var supports$4 = void 0;
function isDisabledFieldset(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === "fieldset" && element.disabled;
}
function isDisabledForm(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === "form" && element.disabled;
}
function isDisabled(context) {
    if (!supports$4) {
        supports$4 = _supports();
    }
    var element = contextToElement({
        label: "is/disabled",
        context: context
    });
    if (element.hasAttribute("data-ally-disabled")) {
        // treat ally's element/disabled like the DOM native element.disabled
        return true;
    }
    if (!isNativeDisabledSupported(element)) {
        // non-form elements do not support the disabled attribute
        return false;
    }
    if (element.disabled) {
        // the element itself is disabled
        return true;
    }
    var parents = getParents({
        context: element
    });
    if (parents.some(isDisabledFieldset)) {
        // a parental <fieldset> is disabld and inherits the state onto this element
        return true;
    }
    if (!supports$4.focusFormDisabled && parents.some(isDisabledForm)) {
        // a parental <form> is disabld and inherits the state onto this element
        return true;
    }
    return false;
}
function isOnlyTabbableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        onlyFocusableBrowsingContext: false,
        visible: false
    } : _ref$except;
    var element = contextToElement({
        label: "is/only-tabbable",
        resolveDocument: true,
        context: context
    });
    if (!except.visible && !isVisible(element)) {
        return false;
    }
    if (!except.onlyFocusableBrowsingContext && (platform.is.GECKO || platform.is.TRIDENT || platform.is.EDGE)) {
        var frameElement = getFrameElement(element);
        if (frameElement) {
            if (tabindexValue(frameElement) < 0) {
                // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
                // tabbable demotion onto elements of their browsing contexts
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    var tabindex = tabindexValue(element);
    if (nodeName === "label" && platform.is.GECKO) {
        // Firefox cannot focus, but tab to: label[tabindex=0]
        return tabindex !== null && tabindex >= 0;
    }
    // SVG Elements were keyboard focusable but not script focusable before Firefox 51.
    // Firefox 51 added the focus management DOM API (.focus and .blur) to SVGElement,
    // see https://bugzilla.mozilla.org/show_bug.cgi?id=778654
    if (platform.is.GECKO && element.ownerSVGElement && !element.focus) {
        if (nodeName === "a" && element.hasAttribute("xlink:href")) {
            // any focusable child of <svg> cannot be focused, but tabbed to
            if (platform.is.GECKO) {
                return true;
            }
        }
    }
    return false;
}
// bind exceptions to an iterator callback
isOnlyTabbableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isOnlyTabbable = function isOnlyTabbable(context) {
        return isOnlyTabbableRules({
            context: context,
            except: except
        });
    };
    isOnlyTabbable.rules = isOnlyTabbableRules;
    return isOnlyTabbable;
};
// provide isOnlyTabbable(context) as default iterator callback
var isOnlyTabbable = isOnlyTabbableRules.except({});
var supports$5 = void 0;
function isOnlyFocusRelevant(element) {
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === "embed" || nodeName === "keygen") {
        // embed is considered focus-relevant but not focusable
        // see https://github.com/medialize/ally.js/issues/82
        return true;
    }
    var _tabindex = tabindexValue(element);
    if (element.shadowRoot && _tabindex === null) {
        // ShadowDOM host elements *may* receive focus
        // even though they are not considered focuable
        return true;
    }
    if (nodeName === "label") {
        // <label tabindex="0"> is only tabbable in Firefox, not script-focusable
        // there's no way to make an element focusable other than by adding a tabindex,
        // and focus behavior of the label element seems hard-wired to ignore tabindex
        // in some browsers (like Gecko, Blink and WebKit)
        return !supports$5.focusLabelTabindex || _tabindex === null;
    }
    if (nodeName === "legend") {
        return _tabindex === null;
    }
    if (supports$5.focusSvgFocusableAttribute && (element.ownerSVGElement || nodeName === "svg")) {
        // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
        var focusableAttribute = element.getAttribute("focusable");
        return focusableAttribute && focusableAttribute === "false";
    }
    if (nodeName === "img" && element.hasAttribute("usemap")) {
        // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
        // it appears the tabindex is overruled so focus is still forwarded to the <map>
        return _tabindex === null || !supports$5.focusImgUsemapTabindex;
    }
    if (nodeName === "area") {
        // all <area>s are considered relevant,
        // but only the valid <area>s are focusable
        return !isValidArea(element);
    }
    return false;
}
function isFocusableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        disabled: false,
        visible: false,
        onlyTabbable: false
    } : _ref$except;
    if (!supports$5) {
        supports$5 = _supports();
    }
    var _isOnlyTabbable = isOnlyTabbable.rules.except({
        onlyFocusableBrowsingContext: true,
        visible: except.visible
    });
    var element = contextToElement({
        label: "is/focusable",
        resolveDocument: true,
        context: context
    });
    var focusRelevant = isFocusRelevant.rules({
        context: element,
        except: except
    });
    if (!focusRelevant || isOnlyFocusRelevant(element)) {
        return false;
    }
    if (!except.disabled && isDisabled(element)) {
        return false;
    }
    if (!except.onlyTabbable && _isOnlyTabbable(element)) {
        // some elements may be keyboard focusable, but not script focusable
        return false;
    }
    // elements that are not rendered, cannot be focused
    if (!except.visible) {
        var visibilityOptions = {
            context: element,
            except: {}
        };
        if (supports$5.focusInHiddenIframe) {
            // WebKit and Blink can focus content in hidden <iframe> and <object>
            visibilityOptions.except.browsingContext = true;
        }
        if (supports$5.focusObjectSvgHidden) {
            // Blink allows focusing the object element, even if it has visibility: hidden;
            // @browser-issue Blink https://code.google.com/p/chromium/issues/detail?id=586191
            var _nodeName2 = element.nodeName.toLowerCase();
            if (_nodeName2 === "object") {
                visibilityOptions.except.cssVisibility = true;
            }
        }
        if (!isVisible.rules(visibilityOptions)) {
            return false;
        }
    }
    var frameElement = getFrameElement(element);
    if (frameElement) {
        var _nodeName = frameElement.nodeName.toLowerCase();
        if (_nodeName === "object" && !supports$5.focusInZeroDimensionObject) {
            if (!frameElement.offsetWidth || !frameElement.offsetHeight) {
                // WebKit can not focus content in <object> if it doesn't have dimensions
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === "svg" && supports$5.focusSvgInIframe && !frameElement && element.getAttribute("tabindex") === null) {
        return false;
    }
    return true;
}
// bind exceptions to an iterator callback
isFocusableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFocusable = function isFocusable(context) {
        return isFocusableRules({
            context: context,
            except: except
        });
    };
    isFocusable.rules = isFocusableRules;
    return isFocusable;
};
// provide isFocusRelevant(context) as default iterator callback
var isFocusable = isFocusableRules.except({});
function createFilter(condition) {
    // see https://developer.mozilla.org/docs/Web/API/NodeFilter
    var filter = function filter(node) {
        if (node.shadowRoot) {
            // return ShadowRoot elements regardless of them being focusable,
            // so they can be walked recursively later
            return NodeFilter.FILTER_ACCEPT;
        }
        if (condition(node)) {
            // finds elements that could have been found by document.querySelectorAll()
            return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_SKIP;
    };
    // IE requires a function, Browsers require {acceptNode: function}
    // see http://www.bennadel.com/blog/2607-finding-html-comment-nodes-in-the-dom-using-treewalker.htm
    filter.acceptNode = filter;
    return filter;
}
var PossiblyFocusableFilter = createFilter(isFocusRelevant);
function queryFocusableStrict() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    if (!context) {
        context = document.documentElement;
    }
    var _isFocusable = isFocusable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    var _document = getDocument(context);
    // see https://developer.mozilla.org/docs/Web/API/Document/createTreeWalker
    var walker = _document.createTreeWalker(context, NodeFilter.SHOW_ELEMENT, strategy === "all" ? PossiblyFocusableFilter : createFilter(_isFocusable), false);
    var list = [];
    while(walker.nextNode()){
        if (walker.currentNode.shadowRoot) {
            if (_isFocusable(walker.currentNode)) {
                list.push(walker.currentNode);
            }
            list = list.concat(queryFocusableStrict({
                context: walker.currentNode.shadowRoot,
                includeOnlyTabbable: includeOnlyTabbable,
                strategy: strategy
            }));
        } else {
            list.push(walker.currentNode);
        }
    }
    // add context if requested and focusable
    if (includeContext) {
        if (strategy === "all") {
            if (isFocusRelevant(context)) {
                list.unshift(context);
            }
        } else if (_isFocusable(context)) {
            list.unshift(context);
        }
    }
    return list;
}
// NOTE: this selector MUST *never* be used directly,
var supports$6 = void 0;
var selector$1 = void 0;
function selector$2() {
    if (!supports$6) {
        supports$6 = _supports();
    }
    if (typeof selector$1 === "string") {
        return selector$1;
    }
    // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
    selector$1 = "" + // IE11 supports.can focus <table> and <td>
    (supports$6.focusTable ? "table, td," : "") + // IE11 supports.can focus <fieldset>
    (supports$6.focusFieldset ? "fieldset," : "") + // Namespace problems of [xlink:href] explained in https://stackoverflow.com/a/23047888/515124
    // svg a[*|href] does not match in IE9, but since we're filtering
    // through is/focusable we can include all <a> from SVG
    "svg a," + // may behave as 'svg, svg *,' in chrome as *every* svg element with a focus event listener is focusable
    // navigational elements
    "a[href]," + // validity determined by is/valid-area.js
    "area[href]," + // validity determined by is/disabled.js
    "input, select, textarea, button," + // browsing context containers
    "iframe, object, embed," + // interactive content
    "keygen," + (supports$6.focusAudioWithoutControls ? "audio," : "audio[controls],") + (supports$6.focusVideoWithoutControls ? "video," : "video[controls],") + (supports$6.focusSummary ? "summary," : "") + // validity determined by is/valid-tabindex.js
    "[tabindex]," + // editing hosts
    "[contenteditable]";
    // where ShadowDOM is supported, we also want the shadowed focusable elements (via ">>>" or "/deep/")
    selector$1 = selectInShadows(selector$1);
    return selector$1;
}
function queryFocusableQuick() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable;
    var _selector = selector$2();
    var elements = context.querySelectorAll(_selector);
    // the selector potentially matches more than really is focusable
    var _isFocusable = isFocusable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    var result = [].filter.call(elements, _isFocusable);
    // add context if requested and focusable
    if (includeContext && _isFocusable(context)) {
        result.unshift(context);
    }
    return result;
}
function queryFocusable() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, _ref$strategy = _ref.strategy, strategy = _ref$strategy === undefined ? "quick" : _ref$strategy;
    var element = contextToElement({
        label: "query/focusable",
        resolveDocument: true,
        defaultToDocument: true,
        context: context
    });
    var options = {
        context: element,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    };
    if (strategy === "quick") {
        return queryFocusableQuick(options);
    } else if (strategy === "strict" || strategy === "all") {
        return queryFocusableStrict(options);
    }
    throw new TypeError('query/focusable requires option.strategy to be one of ["quick", "strict", "all"]');
}
var supports$7 = void 0;
// Internet Explorer 11 considers fieldset, table, td focusable, but not tabbable
// Internet Explorer 11 considers body to have [tabindex=0], but does not allow tabbing to it
var focusableElementsPattern = /^(fieldset|table|td|body)$/;
function isTabbableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        flexbox: false,
        scrollable: false,
        shadow: false,
        visible: false,
        onlyTabbable: false
    } : _ref$except;
    if (!supports$7) {
        supports$7 = _supports();
    }
    var element = contextToElement({
        label: "is/tabbable",
        resolveDocument: true,
        context: context
    });
    if (platform.is.BLINK && platform.is.ANDROID && platform.majorVersion > 42) {
        // External keyboard support worked fine in CHrome 42, but stopped working in Chrome 45.
        // The on-screen keyboard does not provide a way to focus the next input element (like iOS does).
        // That leaves us with no option to advance focus by keyboard, ergo nothing is tabbable (keyboard focusable).
        return false;
    }
    var frameElement = getFrameElement(element);
    if (frameElement) {
        if (platform.is.WEBKIT && platform.is.IOS) {
            // iOS only does not consider anything from another browsing context keyboard focusable
            return false;
        }
        // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
        // tabbable demotion onto elements of their browsing contexts
        if (tabindexValue(frameElement) < 0) {
            return false;
        }
        if (!except.visible && (platform.is.BLINK || platform.is.WEBKIT) && !isVisible(frameElement)) {
            // Blink and WebKit consider elements in hidden browsing contexts focusable, but not tabbable
            return false;
        }
        // Webkit and Blink don't consider anything in <object> tabbable
        // Blink fixed that fixed in Chrome 54, Opera 41
        var frameNodeName = frameElement.nodeName.toLowerCase();
        if (frameNodeName === "object") {
            var isFixedBlink = platform.name === "Chrome" && platform.majorVersion >= 54 || platform.name === "Opera" && platform.majorVersion >= 41;
            if (platform.is.WEBKIT || platform.is.BLINK && !isFixedBlink) {
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    var _tabindex = tabindexValue(element);
    var tabindex = _tabindex === null ? null : _tabindex >= 0;
    if (platform.is.EDGE && platform.majorVersion >= 14 && frameElement && element.ownerSVGElement && _tabindex < 0) {
        // Edge 14+ considers <a xlink:href="…" tabindex="-1"> keyboard focusable
        // if the element is in a nested browsing context
        return true;
    }
    var hasTabbableTabindexOrNone = tabindex !== false;
    var hasTabbableTabindex = _tabindex !== null && _tabindex >= 0;
    // NOTE: Firefox 31 considers [contenteditable] to have [tabindex=-1], but allows tabbing to it
    // fixed in Firefox 40 the latest - https://bugzilla.mozilla.org/show_bug.cgi?id=1185657
    if (element.hasAttribute("contenteditable")) {
        // tabbing can still be disabled by explicitly providing [tabindex="-1"]
        return hasTabbableTabindexOrNone;
    }
    if (focusableElementsPattern.test(nodeName) && tabindex !== true) {
        return false;
    }
    if (platform.is.WEBKIT && platform.is.IOS) {
        // iOS only considers a hand full of elements tabbable (keyboard focusable)
        // this holds true even with external keyboards
        var potentiallyTabbable = nodeName === "input" && element.type === "text" || element.type === "password" || nodeName === "select" || nodeName === "textarea" || element.hasAttribute("contenteditable");
        if (!potentiallyTabbable) {
            var style = window.getComputedStyle(element, null);
            potentiallyTabbable = isUserModifyWritable(style);
        }
        if (!potentiallyTabbable) {
            return false;
        }
    }
    if (nodeName === "use" && _tabindex !== null) {
        if (platform.is.BLINK || platform.is.WEBKIT && platform.majorVersion === 9) {
            // In Chrome and Safari 9 the <use> element is keyboard focusable even for tabindex="-1"
            return true;
        }
    }
    if (elementMatches(element, "svg a") && element.hasAttribute("xlink:href")) {
        if (hasTabbableTabindexOrNone) {
            // in Trident and Gecko SVGElement does not handle the tabIndex property properly
            return true;
        }
        if (element.focus && !supports$7.focusSvgNegativeTabindexAttribute) {
            // Firefox 51 and 52 treat any natively tabbable SVG element with
            // tabindex="-1" as tabbable and everything else as inert
            // see https://bugzilla.mozilla.org/show_bug.cgi?id=1302340
            return true;
        }
    }
    if (nodeName === "svg" && supports$7.focusSvgInIframe && hasTabbableTabindexOrNone) {
        return true;
    }
    if (platform.is.TRIDENT || platform.is.EDGE) {
        if (nodeName === "svg") {
            if (supports$7.focusSvg) {
                // older Internet Explorers consider <svg> keyboard focusable
                // unless they have focsable="false", but then they wouldn't
                // be focusable and thus not even reach this filter
                return true;
            }
            // elements that have [focusable] are automatically keyboard focusable regardless of the attribute's value
            return element.hasAttribute("focusable") || hasTabbableTabindex;
        }
        if (element.ownerSVGElement) {
            if (supports$7.focusSvgTabindexAttribute && hasTabbableTabindex) {
                return true;
            }
            // elements that have [focusable] are automatically keyboard focusable regardless of the attribute's value
            return element.hasAttribute("focusable");
        }
    }
    if (element.tabIndex === undefined) {
        return Boolean(except.onlyTabbable);
    }
    if (nodeName === "audio") {
        if (!element.hasAttribute("controls")) {
            // In Internet Explorer the <audio> element is focusable, but not tabbable, and tabIndex property is wrong
            return false;
        } else if (platform.is.BLINK) {
            // In Chrome <audio controls tabindex="-1"> remains keyboard focusable
            return true;
        }
    }
    if (nodeName === "video") {
        if (!element.hasAttribute("controls")) {
            if (platform.is.TRIDENT || platform.is.EDGE) {
                // In Internet Explorer and Edge the <video> element is focusable, but not tabbable, and tabIndex property is wrong
                return false;
            }
        } else if (platform.is.BLINK || platform.is.GECKO) {
            // In Chrome and Firefox <video controls tabindex="-1"> remains keyboard focusable
            return true;
        }
    }
    if (nodeName === "object") {
        if (platform.is.BLINK || platform.is.WEBKIT) {
            // In all Blink and WebKit based browsers <embed> and <object> are never keyboard focusable, even with tabindex="0" set
            return false;
        }
    }
    if (nodeName === "iframe") {
        // In Internet Explorer all iframes are only focusable
        // In WebKit, Blink and Gecko iframes may be tabbable depending on content.
        // Since we can't reliably investigate iframe documents because of the
        // SameOriginPolicy, we're declaring everything only focusable.
        return false;
    }
    if (!except.scrollable && platform.is.GECKO) {
        // Firefox considers scrollable containers keyboard focusable,
        // even though their tabIndex property is -1
        var _style = window.getComputedStyle(element, null);
        if (hasCssOverflowScroll(_style)) {
            return hasTabbableTabindexOrNone;
        }
    }
    if (platform.is.TRIDENT || platform.is.EDGE) {
        // IE and Edge degrade <area> to script focusable, if the image
        // using the <map> has been given tabindex="-1"
        if (nodeName === "area") {
            var img = getImageOfArea(element);
            if (img && tabindexValue(img) < 0) {
                return false;
            }
        }
        var _style2 = window.getComputedStyle(element, null);
        if (isUserModifyWritable(_style2)) {
            // prevent being swallowed by the overzealous isScrollableContainer() below
            return element.tabIndex >= 0;
        }
        if (!except.flexbox && hasCssDisplayFlex(_style2)) {
            if (_tabindex !== null) {
                return hasTabbableTabindex;
            }
            return isFocusRelevantWithoutFlexbox(element) && isTabbableWithoutFlexbox(element);
        }
        // IE considers scrollable containers script focusable only,
        // even though their tabIndex property is 0
        if (isScrollableContainer(element, nodeName)) {
            return false;
        }
        var parent = element.parentElement;
        if (parent) {
            var parentNodeName = parent.nodeName.toLowerCase();
            var parentStyle = window.getComputedStyle(parent, null);
            // IE considers scrollable bodies script focusable only,
            if (isScrollableContainer(parent, nodeName, parentNodeName, parentStyle)) {
                return false;
            }
            // Children of focusable elements with display:flex are focusable in IE10-11,
            // even though their tabIndex property suggests otherwise
            if (hasCssDisplayFlex(parentStyle)) {
                // value of tabindex takes precedence
                return hasTabbableTabindex;
            }
        }
    }
    // https://www.w3.org/WAI/PF/aria-practices/#focus_tabindex
    return element.tabIndex >= 0;
}
// bind exceptions to an iterator callback
isTabbableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isTabbable = function isTabbable(context) {
        return isTabbableRules({
            context: context,
            except: except
        });
    };
    isTabbable.rules = isTabbableRules;
    return isTabbable;
};
var isFocusRelevantWithoutFlexbox = isFocusRelevant.rules.except({
    flexbox: true
});
var isTabbableWithoutFlexbox = isTabbableRules.except({
    flexbox: true
});
// provide isTabbable(context) as default iterator callback
var isTabbable = isTabbableRules.except({});
function queryTabbable() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    var _isTabbable = isTabbable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    return queryFocusable({
        context: context,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    }).filter(_isTabbable);
}
// sorts a list of elements according to their order in the DOM
function compareDomPosition(a, b) {
    return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}
function sortDomOrder(elements) {
    return elements.sort(compareDomPosition);
}
function getFirstSuccessorOffset(list, target) {
    // find the first element that comes AFTER the target element
    return findIndex(list, function(element) {
        return target.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING;
    });
}
function findInsertionOffsets(list, elements, resolveElement) {
    // instead of mutating the elements list directly, remember position and map
    // to inject later, when we can do this more efficiently
    var insertions = [];
    elements.forEach(function(element) {
        var replace = true;
        var offset = list.indexOf(element);
        if (offset === -1) {
            // element is not in target list
            offset = getFirstSuccessorOffset(list, element);
            replace = false;
        }
        if (offset === -1) {
            // there is no successor in the tabsequence,
            // meaning the image must be the last element
            offset = list.length;
        }
        // allow the consumer to replace the injected element
        var injections = nodeArray(resolveElement ? resolveElement(element) : element);
        if (!injections.length) {
            // we can't inject zero elements
            return;
        }
        insertions.push({
            offset: offset,
            replace: replace,
            elements: injections
        });
    });
    return insertions;
}
function insertElementsAtOffsets(list, insertions) {
    // remember the number of elements we have already injected
    // so we account for the caused index offset
    var inserted = 0;
    // make sure that we insert the elements in sequence,
    // otherwise the offset compensation won't work
    insertions.sort(function(a, b) {
        return a.offset - b.offset;
    });
    insertions.forEach(function(insertion) {
        // array.splice has an annoying function signature :(
        var remove = insertion.replace ? 1 : 0;
        var args = [
            insertion.offset + inserted,
            remove
        ].concat(insertion.elements);
        list.splice.apply(list, args);
        inserted += insertion.elements.length - remove;
    });
}
function mergeInDomOrder() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, list = _ref.list, elements = _ref.elements, resolveElement = _ref.resolveElement;
    // operate on a copy so we don't mutate the original array
    var _list = list.slice(0);
    // make sure the elements we're injecting are provided in DOM order
    var _elements = nodeArray(elements).slice(0);
    sortDomOrder(_elements);
    // find the offsets within the target array (list) at which to inject
    // each individual element (from elements)
    var insertions = findInsertionOffsets(_list, _elements, resolveElement);
    // actually inject the elements into the target array at the identified positions
    insertElementsAtOffsets(_list, insertions);
    return _list;
}
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var Maps = function() {
    function Maps(context) {
        _classCallCheck(this, Maps);
        this._document = getDocument(context);
        this.maps = {};
    }
    _createClass(Maps, [
        {
            key: "getAreasFor",
            value: function getAreasFor(name) {
                if (!this.maps[name]) {
                    // the map is not defined within the context, so we
                    // have to go find it elsewhere in the document
                    this.addMapByName(name);
                }
                return this.maps[name];
            }
        },
        {
            key: "addMapByName",
            value: function addMapByName(name) {
                var map = getMapByName(name, this._document);
                if (!map) {
                    // if there is no map, the img[usemap] wasn't doing anything anyway
                    return;
                }
                this.maps[map.name] = queryTabbable({
                    context: map
                });
            }
        },
        {
            key: "extractAreasFromList",
            value: function extractAreasFromList(elements) {
                // remove all <area> elements from the elements list,
                // but put them the map for later retrieval
                return elements.filter(function(element) {
                    var nodeName = element.nodeName.toLowerCase();
                    if (nodeName !== "area") {
                        return true;
                    }
                    var map = element.parentNode;
                    if (!this.maps[map.name]) {
                        this.maps[map.name] = [];
                    }
                    this.maps[map.name].push(element);
                    return false;
                }, this);
            }
        }
    ]);
    return Maps;
}();
function sortArea(elements, context) {
    // images - unless they are focusable themselves, likely not
    // part of the elements list, so we'll have to find them and
    // sort them into the elements list manually
    var usemaps = context.querySelectorAll("img[usemap]");
    var maps = new Maps(context);
    // remove all <area> elements from the elements list,
    // but put them the map for later retrieval
    var _elements = maps.extractAreasFromList(elements);
    if (!usemaps.length) {
        // the context does not contain any <area>s so no need
        // to replace anything, just remove any maps
        return _elements;
    }
    return mergeInDomOrder({
        list: _elements,
        elements: usemaps,
        resolveElement: function resolveElement(image) {
            var name = image.getAttribute("usemap").slice(1);
            return maps.getAreasFor(name);
        }
    });
}
var _createClass$1 = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var Shadows = function() {
    function Shadows(context, sortElements) {
        _classCallCheck$1(this, Shadows);
        // document context we're working with
        this.context = context;
        // callback that sorts an array of elements
        this.sortElements = sortElements;
        // reference to create unique IDs for each ShadowHost
        this.hostCounter = 1;
        // reference map for child-ShadowHosts of a ShadowHost
        this.inHost = {};
        // reference map for child-ShadowHost of the document
        this.inDocument = [];
        // reference map for ShadowHosts
        this.hosts = {};
        // reference map for tabbable elements of a ShadowHost
        this.elements = {};
    }
    // remember which hosts we have to sort within later
    _createClass$1(Shadows, [
        {
            key: "_registerHost",
            value: function _registerHost(host) {
                if (host._sortingId) {
                    return;
                }
                // make the ShadowHost identifiable (see cleanup() for undo)
                host._sortingId = "shadow-" + this.hostCounter++;
                this.hosts[host._sortingId] = host;
                // hosts may contain other hosts
                var parentHost = getShadowHost({
                    context: host
                });
                if (parentHost) {
                    this._registerHost(parentHost);
                    this._registerHostParent(host, parentHost);
                } else {
                    this.inDocument.push(host);
                }
            }
        },
        {
            key: "_registerHostParent",
            value: function _registerHostParent(host, parent) {
                if (!this.inHost[parent._sortingId]) {
                    this.inHost[parent._sortingId] = [];
                }
                this.inHost[parent._sortingId].push(host);
            }
        },
        {
            key: "_registerElement",
            value: function _registerElement(element, host) {
                if (!this.elements[host._sortingId]) {
                    this.elements[host._sortingId] = [];
                }
                this.elements[host._sortingId].push(element);
            }
        },
        {
            key: "extractElements",
            value: function extractElements(elements) {
                return elements.filter(function(element) {
                    var host = getShadowHost({
                        context: element
                    });
                    if (!host) {
                        return true;
                    }
                    this._registerHost(host);
                    this._registerElement(element, host);
                    return false;
                }, this);
            }
        },
        {
            key: "sort",
            value: function sort(elements) {
                var _elements = this._injectHosts(elements);
                _elements = this._replaceHosts(_elements);
                this._cleanup();
                return _elements;
            }
        },
        {
            key: "_injectHosts",
            value: function _injectHosts(elements) {
                Object.keys(this.hosts).forEach(function(_sortingId) {
                    var _list = this.elements[_sortingId];
                    var _elements = this.inHost[_sortingId];
                    var _context = this.hosts[_sortingId].shadowRoot;
                    this.elements[_sortingId] = this._merge(_list, _elements, _context);
                }, this);
                return this._merge(elements, this.inDocument, this.context);
            }
        },
        {
            key: "_merge",
            value: function _merge(list, elements, context) {
                var merged = mergeInDomOrder({
                    list: list,
                    elements: elements
                });
                return this.sortElements(merged, context);
            }
        },
        {
            key: "_replaceHosts",
            value: function _replaceHosts(elements) {
                return mergeInDomOrder({
                    list: elements,
                    elements: this.inDocument,
                    resolveElement: this._resolveHostElement.bind(this)
                });
            }
        },
        {
            key: "_resolveHostElement",
            value: function _resolveHostElement(host) {
                var merged = mergeInDomOrder({
                    list: this.elements[host._sortingId],
                    elements: this.inHost[host._sortingId],
                    resolveElement: this._resolveHostElement.bind(this)
                });
                var _tabindex = tabindexValue(host);
                if (_tabindex !== null && _tabindex > -1) {
                    return [
                        host
                    ].concat(merged);
                }
                return merged;
            }
        },
        {
            key: "_cleanup",
            value: function _cleanup() {
                // remove those identifers we put on the ShadowHost to avoid using Map()
                Object.keys(this.hosts).forEach(function(key) {
                    delete this.hosts[key]._sortingId;
                }, this);
            }
        }
    ]);
    return Shadows;
}();
function sortShadowed(elements, context, sortElements) {
    var shadows = new Shadows(context, sortElements);
    var _elements = shadows.extractElements(elements);
    if (_elements.length === elements.length) {
        // no shadowed content found, no need to continue
        return sortElements(elements);
    }
    return shadows.sort(_elements);
}
function sortTabindex(elements) {
    // https://developer.mozilla.org/docs/Web/API/HTMLElement.tabIndex
    // elements with tabIndex "0" (including tabbableElements without tabIndex) should be navigated in the order they appear.
    // elements with a positive tabIndex:
    //   Elements that have identical tabIndexes should be navigated in the order they appear.
    //   Navigation proceeds from the lowest tabIndex to the highest tabIndex.
    // NOTE: sort implementation may be unstable and thus mess up DOM order,
    // that's why we build a map that's being sorted instead. If we were able to rely
    // on a stable sorting algorithm, sortTabindex() could be as simple as
    // elements.sort(function(a, b) { return a.tabIndex - b.tabIndex; });
    // at this time Chrome does not use a stable sorting algorithm
    // see http://blog.rodneyrehm.de/archives/14-Sorting-Were-Doing-It-Wrong.html#stability
    // NOTE: compareDocumentPosition seemed like more overhead than just sorting this with buckets
    // https://developer.mozilla.org/docs/Web/API/Node.compareDocumentPosition
    var map = {};
    var indexes = [];
    var normal = elements.filter(function(element) {
        // in Trident and Gecko SVGElement does not know about the tabIndex property
        var tabIndex = element.tabIndex;
        if (tabIndex === undefined) {
            tabIndex = tabindexValue(element);
        }
        // extract elements that don't need sorting
        if (tabIndex <= 0 || tabIndex === null || tabIndex === undefined) {
            return true;
        }
        if (!map[tabIndex]) {
            // create sortable bucket for dom-order-preservation of elements with the same tabIndex
            map[tabIndex] = [];
            // maintain a list of unique tabIndexes
            indexes.push(tabIndex);
        }
        // sort element into the proper bucket
        map[tabIndex].push(element);
        // element moved to sorting map, so not "normal" anymore
        return false;
    });
    // sort the tabindex ascending,
    // then resolve them to their appropriate buckets,
    // then flatten the array of arrays to an array
    var _elements = indexes.sort().map(function(tabIndex) {
        return map[tabIndex];
    }).reduceRight(function(previous, current) {
        return current.concat(previous);
    }, normal);
    return _elements;
}
var supports$8 = void 0;
function moveContextToBeginning(elements, context) {
    var pos = elements.indexOf(context);
    if (pos > 0) {
        var tmp = elements.splice(pos, 1);
        return tmp.concat(elements);
    }
    return elements;
}
function sortElements(elements, _context) {
    if (supports$8.tabsequenceAreaAtImgPosition) {
        // Some browsers sort <area> in DOM order, some place the <area>s
        // where the <img> referecing them would've been in DOM order.
        // https://github.com/medialize/ally.js/issues/5
        elements = sortArea(elements, _context);
    }
    elements = sortTabindex(elements);
    return elements;
}
function queryTabsequence() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    if (!supports$8) {
        supports$8 = _supports();
    }
    var _context = nodeArray(context)[0] || document.documentElement;
    var elements = queryTabbable({
        context: _context,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    });
    if (document.body.createShadowRoot && platform.is.BLINK) {
        // sort tabindex localized to shadow dom
        // see https://github.com/medialize/ally.js/issues/6
        elements = sortShadowed(elements, _context, sortElements);
    } else {
        elements = sortElements(elements, _context);
    }
    if (includeContext) {
        // if we include the context itself, it has to be the first
        // element of the sequence
        elements = moveContextToBeginning(elements, _context);
    }
    return elements;
}
// codes mostly cloned from https://github.com/keithamus/jwerty/blob/master/jwerty.js
// deliberately not exposing characters like <,.-#* because they vary *wildly*
// across keyboard layouts and may cause various problems
// (e.g. "*" is "Shift +" on a German Mac keyboard)
// (e.g. "@" is "Alt L" on a German Mac keyboard)
var keycode = {
    // Element Focus
    tab: 9,
    // Navigation
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    pageUp: 33,
    "page-up": 33,
    pageDown: 34,
    "page-down": 34,
    end: 35,
    home: 36,
    // Action
    enter: 13,
    escape: 27,
    space: 32,
    // Modifier
    shift: 16,
    capsLock: 20,
    "caps-lock": 20,
    ctrl: 17,
    alt: 18,
    meta: 91,
    // in firefox: 224
    // on mac (chrome): meta-left=91, meta-right=93
    // on win (IE11): meta-left=91, meta-right=92
    pause: 19,
    // Content Manipulation
    insert: 45,
    delete: 46,
    backspace: 8,
    // the same logical key may be identified through different keyCodes
    _alias: {
        91: [
            92,
            93,
            224
        ]
    }
};
// Function keys (112 - 137)
// NOTE: not every keyboard knows F13+
for(var n = 1; n < 26; n++){
    keycode["f" + n] = n + 111;
}
// Number keys (48-57, numpad 96-105)
// NOTE: not every keyboard knows num-0+
for(var _n = 0; _n < 10; _n++){
    var code = _n + 48;
    var numCode = _n + 96;
    keycode[_n] = code;
    keycode["num-" + _n] = numCode;
    keycode._alias[code] = [
        numCode
    ];
}
// Latin characters (65 - 90)
for(var _n2 = 0; _n2 < 26; _n2++){
    var _code = _n2 + 65;
    var name$1 = String.fromCharCode(_code).toLowerCase();
    keycode[name$1] = _code;
}
var modifier = {
    alt: "altKey",
    ctrl: "ctrlKey",
    meta: "metaKey",
    shift: "shiftKey"
};
var modifierSequence = Object.keys(modifier).map(function(name) {
    return modifier[name];
});
function createExpectedModifiers(ignoreModifiers) {
    var value = ignoreModifiers ? null : false;
    return {
        altKey: value,
        ctrlKey: value,
        metaKey: value,
        shiftKey: value
    };
}
function resolveModifiers(modifiers) {
    var ignoreModifiers = modifiers.indexOf("*") !== -1;
    var expected = createExpectedModifiers(ignoreModifiers);
    modifiers.forEach(function(token) {
        if (token === "*") {
            // we've already covered the all-in operator
            return;
        }
        // we want the modifier pressed
        var value = true;
        var operator = token.slice(0, 1);
        if (operator === "?") {
            // we don't care if the modifier is pressed
            value = null;
        } else if (operator === "!") {
            // we do not want the modifier pressed
            value = false;
        }
        if (value !== true) {
            // compensate for the modifier's operator
            token = token.slice(1);
        }
        var propertyName = modifier[token];
        if (!propertyName) {
            throw new TypeError('Unknown modifier "' + token + '"');
        }
        expected[propertyName] = value;
    });
    return expected;
}
function resolveKey(key) {
    var code = keycode[key] || parseInt(key, 10);
    if (!code || typeof code !== "number" || isNaN(code)) {
        throw new TypeError('Unknown key "' + key + '"');
    }
    return [
        code
    ].concat(keycode._alias[code] || []);
}
function matchModifiers(expected, event) {
    // returns true on match
    return !modifierSequence.some(function(prop) {
        // returns true on mismatch
        return typeof expected[prop] === "boolean" && Boolean(event[prop]) !== expected[prop];
    });
}
function keyBinding(text) {
    return text.split(/\s+/).map(function(_text) {
        var tokens = _text.split("+");
        var _modifiers = resolveModifiers(tokens.slice(0, -1));
        var _keyCodes = resolveKey(tokens.slice(-1));
        return {
            keyCodes: _keyCodes,
            modifiers: _modifiers,
            matchModifiers: matchModifiers.bind(null, _modifiers)
        };
    });
}
// Node.compareDocumentPosition is available since IE9
// see https://developer.mozilla.org/docs/Web/API/Node.compareDocumentPosition
// callback returns true when element is contained by parent or is the parent suited for use with Array.some()
/*
  USAGE:
    var isChildOf = getParentComparator({parent: someNode});
    listOfElements.some(isChildOf)
*/ function getParentComparator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, parent = _ref.parent, element = _ref.element, includeSelf = _ref.includeSelf;
    if (parent) {
        return function isChildOf(node) {
            return Boolean(includeSelf && node === parent || parent.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        };
    } else if (element) {
        return function isParentOf(node) {
            return Boolean(includeSelf && element === node || node.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        };
    }
    throw new TypeError("util/compare-position#getParentComparator required either options.parent or options.element");
}
// Bug 286933 - Key events in the autocomplete popup should be hidden from page scripts
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=286933
function whenKey() {
    var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var bindings = {};
    var context = nodeArray(map.context)[0] || document.documentElement;
    delete map.context;
    var filter = nodeArray(map.filter);
    delete map.filter;
    var mapKeys = Object.keys(map);
    if (!mapKeys.length) {
        throw new TypeError("when/key requires at least one option key");
    }
    var registerBinding = function registerBinding(event) {
        event.keyCodes.forEach(function(code) {
            if (!bindings[code]) {
                bindings[code] = [];
            }
            bindings[code].push(event);
        });
    };
    mapKeys.forEach(function(text) {
        if (typeof map[text] !== "function") {
            throw new TypeError('when/key requires option["' + text + '"] to be a function');
        }
        var addCallback = function addCallback(event) {
            event.callback = map[text];
            return event;
        };
        keyBinding(text).map(addCallback).forEach(registerBinding);
    });
    var handleKeyDown = function handleKeyDown(event) {
        if (event.defaultPrevented) {
            return;
        }
        if (filter.length) {
            // ignore elements within the exempted sub-trees
            var isParentOfElement = getParentComparator({
                element: event.target,
                includeSelf: true
            });
            if (filter.some(isParentOfElement)) {
                return;
            }
        }
        var key = event.keyCode || event.which;
        if (!bindings[key]) {
            return;
        }
        bindings[key].forEach(function(_event) {
            if (!_event.matchModifiers(event)) {
                return;
            }
            _event.callback.call(context, event, disengage);
        });
    };
    context.addEventListener("keydown", handleKeyDown, false);
    var disengage = function disengage() {
        context.removeEventListener("keydown", handleKeyDown, false);
    };
    return {
        disengage: disengage
    };
}
function _default(param) {
    let { context } = param === void 0 ? {} : param;
    if (!context) {
        context = document.documentElement;
    }
    // Make sure the supports tests are run before intercepting the Tab key,
    // or IE10 and IE11 will fail to process the first Tab key event. Not
    // limiting this warm-up to IE because it may be a problem elsewhere, too.
    queryTabsequence();
    return whenKey({
        // Safari on OSX may require ALT+TAB to reach links,
        // see https://github.com/medialize/ally.js/issues/146
        "?alt+?shift+tab": function altShiftTab(event) {
            // we're completely taking over the Tab key handling
            event.preventDefault();
            var sequence = queryTabsequence({
                context: context
            });
            var backward = event.shiftKey;
            var first = sequence[0];
            var last = sequence[sequence.length - 1];
            // wrap around first to last, last to first
            var source = backward ? first : last;
            var target = backward ? last : first;
            if (isActiveElement(source)) {
                target.focus();
                return;
            }
            // find current position in tabsequence
            var currentIndex = void 0;
            var found = sequence.some(function(element, index) {
                if (!isActiveElement(element)) {
                    return false;
                }
                currentIndex = index;
                return true;
            });
            if (!found) {
                // redirect to first as we're not in our tabsequence
                first.focus();
                return;
            }
            // shift focus to previous/next element in the sequence
            var offset = backward ? -1 : 1;
            sequence[currentIndex + offset].focus();
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=maintain--tab-focus.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/Overlay.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

// @ts-ignore
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Overlay", {
    enumerable: true,
    get: function() {
        return Overlay;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _maintaintabfocus = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/maintain--tab-focus.js [app-client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _bodylocker = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/body-locker.js [app-client] (ecmascript)");
const Overlay = function Overlay(param) {
    let { className, children, fixed } = param;
    _react.useEffect(()=>{
        (0, _bodylocker.lock)();
        return ()=>{
            (0, _bodylocker.unlock)();
        };
    }, []);
    const [overlay, setOverlay] = _react.useState(null);
    const onOverlay = _react.useCallback((el)=>{
        setOverlay(el);
    }, []);
    _react.useEffect(()=>{
        if (overlay == null) {
            return;
        }
        const handle2 = (0, _maintaintabfocus.default)({
            context: overlay
        });
        return ()=>{
            handle2.disengage();
        };
    }, [
        overlay
    ]);
    return /*#__PURE__*/ _react.createElement("div", {
        "data-nextjs-dialog-overlay": true,
        className: className,
        ref: onOverlay
    }, /*#__PURE__*/ _react.createElement("div", {
        "data-nextjs-dialog-backdrop": true,
        "data-nextjs-dialog-backdrop-fixed": fixed ? true : undefined
    }), children);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Overlay.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Overlay", {
    enumerable: true,
    get: function() {
        return _Overlay.Overlay;
    }
});
const _Overlay = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/Overlay.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/styles.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [app-client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [app-client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-dialog-left-right] {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    align-items: center;\n    justify-content: space-between;\n  }\n  [data-nextjs-dialog-left-right] > nav {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    margin-right: var(--size-gap);\n  }\n  [data-nextjs-dialog-left-right] > nav > button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    width: calc(var(--size-gap-double) + var(--size-gap));\n    height: calc(var(--size-gap-double) + var(--size-gap));\n    font-size: 0;\n    border: none;\n    background-color: rgba(255, 85, 85, 0.1);\n    color: var(--color-ansi-red);\n    cursor: pointer;\n    transition: background-color 0.25s ease;\n  }\n  [data-nextjs-dialog-left-right] > nav > button > svg {\n    width: auto;\n    height: calc(var(--size-gap) + var(--size-gap-half));\n  }\n  [data-nextjs-dialog-left-right] > nav > button:hover {\n    background-color: rgba(255, 85, 85, 0.2);\n  }\n  [data-nextjs-dialog-left-right] > nav > button:disabled {\n    background-color: rgba(255, 85, 85, 0.1);\n    color: rgba(255, 85, 85, 0.4);\n    cursor: not-allowed;\n  }\n\n  [data-nextjs-dialog-left-right] > nav > button:first-of-type {\n    border-radius: var(--size-gap-half) 0 0 var(--size-gap-half);\n    margin-right: 1px;\n  }\n  [data-nextjs-dialog-left-right] > nav > button:last-of-type {\n    border-radius: 0 var(--size-gap-half) var(--size-gap-half) 0;\n  }\n\n  [data-nextjs-dialog-left-right] > button:last-of-type {\n    border: 0;\n    padding: 0;\n\n    background-color: transparent;\n    appearance: none;\n\n    opacity: 0.4;\n    transition: opacity 0.25s ease;\n  }\n  [data-nextjs-dialog-left-right] > button:last-of-type:hover {\n    opacity: 0.7;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LeftRightDialogHeader", {
    enumerable: true,
    get: function() {
        return LeftRightDialogHeader;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _CloseIcon = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon.js [app-client] (ecmascript)");
const LeftRightDialogHeader = function LeftRightDialogHeader(param) {
    let { children, className, previous, next, close } = param;
    const buttonLeft = _react.useRef(null);
    const buttonRight = _react.useRef(null);
    const buttonClose = _react.useRef(null);
    const [nav, setNav] = _react.useState(null);
    const onNav = _react.useCallback((el)=>{
        setNav(el);
    }, []);
    _react.useEffect(()=>{
        if (nav == null) {
            return;
        }
        const root = nav.getRootNode();
        const d = self.document;
        function handler(e) {
            if (e.key === "ArrowLeft") {
                e.stopPropagation();
                if (buttonLeft.current) {
                    buttonLeft.current.focus();
                }
                previous && previous();
            } else if (e.key === "ArrowRight") {
                e.stopPropagation();
                if (buttonRight.current) {
                    buttonRight.current.focus();
                }
                next && next();
            } else if (e.key === "Escape") {
                e.stopPropagation();
                if (root instanceof ShadowRoot) {
                    const a = root.activeElement;
                    if (a && a !== buttonClose.current && a instanceof HTMLElement) {
                        a.blur();
                        return;
                    }
                }
                if (close) {
                    close();
                }
            }
        }
        root.addEventListener("keydown", handler);
        if (root !== d) {
            d.addEventListener("keydown", handler);
        }
        return function() {
            root.removeEventListener("keydown", handler);
            if (root !== d) {
                d.removeEventListener("keydown", handler);
            }
        };
    }, [
        close,
        nav,
        next,
        previous
    ]);
    // Unlock focus for browsers like Firefox, that break all user focus if the
    // currently focused item becomes disabled.
    _react.useEffect(()=>{
        if (nav == null) {
            return;
        }
        const root = nav.getRootNode();
        // Always true, but we do this for TypeScript:
        if (root instanceof ShadowRoot) {
            const a = root.activeElement;
            if (previous == null) {
                if (buttonLeft.current && a === buttonLeft.current) {
                    buttonLeft.current.blur();
                }
            } else if (next == null) {
                if (buttonRight.current && a === buttonRight.current) {
                    buttonRight.current.blur();
                }
            }
        }
    }, [
        nav,
        next,
        previous
    ]);
    return /*#__PURE__*/ _react.createElement("div", {
        "data-nextjs-dialog-left-right": true,
        className: className
    }, /*#__PURE__*/ _react.createElement("nav", {
        ref: onNav
    }, /*#__PURE__*/ _react.createElement("button", {
        ref: buttonLeft,
        type: "button",
        disabled: previous == null ? true : undefined,
        "aria-disabled": previous == null ? true : undefined,
        onClick: previous != null ? previous : undefined
    }, /*#__PURE__*/ _react.createElement("svg", {
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ _react.createElement("title", null, "previous"), /*#__PURE__*/ _react.createElement("path", {
        d: "M6.99996 1.16666L1.16663 6.99999L6.99996 12.8333M12.8333 6.99999H1.99996H12.8333Z",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }))), /*#__PURE__*/ _react.createElement("button", {
        ref: buttonRight,
        type: "button",
        disabled: next == null ? true : undefined,
        "aria-disabled": next == null ? true : undefined,
        onClick: next != null ? next : undefined
    }, /*#__PURE__*/ _react.createElement("svg", {
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ _react.createElement("title", null, "next"), /*#__PURE__*/ _react.createElement("path", {
        d: "M6.99996 1.16666L12.8333 6.99999L6.99996 12.8333M1.16663 6.99999H12H1.16663Z",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }))), "\xa0", children), close ? /*#__PURE__*/ _react.createElement("button", {
        "data-nextjs-errors-dialog-left-right-close-button": true,
        ref: buttonClose,
        type: "button",
        onClick: close,
        "aria-label": "Close"
    }, /*#__PURE__*/ _react.createElement("span", {
        "aria-hidden": "true"
    }, /*#__PURE__*/ _react.createElement(_CloseIcon.CloseIcon, null))) : null);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=LeftRightDialogHeader.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    LeftRightDialogHeader: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    LeftRightDialogHeader: function() {
        return _LeftRightDialogHeader.LeftRightDialogHeader;
    },
    styles: function() {
        return _styles.styles;
    }
});
const _LeftRightDialogHeader = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js [app-client] (ecmascript)");
const _styles = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/styles.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/styles.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [app-client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [app-client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-dialog] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-right: auto;\n    margin-left: auto;\n    outline: none;\n    background: white;\n    border-radius: var(--size-gap);\n    box-shadow: 0 var(--size-gap-half) var(--size-gap-double)\n      rgba(0, 0, 0, 0.25);\n    max-height: calc(100% - 56px);\n    overflow-y: hidden;\n  }\n\n  @media (max-height: 812px) {\n    [data-nextjs-dialog-overlay] {\n      max-height: calc(100% - 15px);\n    }\n  }\n\n  @media (min-width: 576px) {\n    [data-nextjs-dialog] {\n      max-width: 540px;\n      box-shadow: 0 var(--size-gap) var(--size-gap-quad) rgba(0, 0, 0, 0.25);\n    }\n  }\n\n  @media (min-width: 768px) {\n    [data-nextjs-dialog] {\n      max-width: 720px;\n    }\n  }\n\n  @media (min-width: 992px) {\n    [data-nextjs-dialog] {\n      max-width: 960px;\n    }\n  }\n\n  [data-nextjs-dialog-banner] {\n    position: relative;\n  }\n  [data-nextjs-dialog-banner].banner-warning {\n    border-color: var(--color-ansi-yellow);\n  }\n  [data-nextjs-dialog-banner].banner-error {\n    border-color: var(--color-ansi-red);\n  }\n\n  [data-nextjs-dialog-banner]::after {\n    z-index: 2;\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    /* banner width: */\n    border-top-width: var(--size-gap-half);\n    border-bottom-width: 0;\n    border-top-style: solid;\n    border-bottom-style: solid;\n    border-top-color: inherit;\n    border-bottom-color: transparent;\n  }\n\n  [data-nextjs-dialog-content] {\n    overflow-y: auto;\n    border: none;\n    margin: 0;\n    /* calc(padding + banner width offset) */\n    padding: calc(var(--size-gap-double) + var(--size-gap-half))\n      var(--size-gap-double);\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-header] {\n    flex-shrink: 0;\n    margin-bottom: var(--size-gap-double);\n  }\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-body] {\n    position: relative;\n    flex: 1 1 auto;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogHeader.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DialogHeader", {
    enumerable: true,
    get: function() {
        return DialogHeader;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const DialogHeader = function DialogHeader(param) {
    let { children, className } = param;
    return /*#__PURE__*/ _react.createElement("div", {
        "data-nextjs-dialog-header": true,
        className: className
    }, children);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=DialogHeader.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogContent.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DialogContent", {
    enumerable: true,
    get: function() {
        return DialogContent;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const DialogContent = function DialogContent(param) {
    let { children, className } = param;
    return /*#__PURE__*/ _react.createElement("div", {
        "data-nextjs-dialog-content": true,
        className: className
    }, children);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=DialogContent.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogBody.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DialogBody", {
    enumerable: true,
    get: function() {
        return DialogBody;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const DialogBody = function DialogBody(param) {
    let { children, className } = param;
    return /*#__PURE__*/ _react.createElement("div", {
        "data-nextjs-dialog-body": true,
        className: className
    }, children);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=DialogBody.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/hooks/use-on-click-outside.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useOnClickOutside", {
    enumerable: true,
    get: function() {
        return useOnClickOutside;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function useOnClickOutside(el, handler) {
    _react.useEffect(()=>{
        if (el == null || handler == null) {
            return;
        }
        const listener = (e)=>{
            // Do nothing if clicking ref's element or descendent elements
            if (!el || el.contains(e.target)) {
                return;
            }
            handler(e);
        };
        const root = el.getRootNode();
        root.addEventListener("mousedown", listener);
        root.addEventListener("touchstart", listener);
        return function() {
            root.removeEventListener("mousedown", listener);
            root.removeEventListener("touchstart", listener);
        };
    }, [
        handler,
        el
    ]);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-on-click-outside.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/Dialog.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Dialog", {
    enumerable: true,
    get: function() {
        return Dialog;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _useonclickoutside = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/hooks/use-on-click-outside.js [app-client] (ecmascript)");
const Dialog = function Dialog(param) {
    let { children, type, onClose, ...props } = param;
    const [dialog, setDialog] = _react.useState(null);
    const [role, setRole] = _react.useState(typeof document !== "undefined" && document.hasFocus() ? "dialog" : undefined);
    const onDialog = _react.useCallback((node)=>{
        setDialog(node);
    }, []);
    (0, _useonclickoutside.useOnClickOutside)(dialog, onClose);
    // Make HTMLElements with `role=link` accessible to be triggered by the
    // keyboard, i.e. [Enter].
    _react.useEffect(()=>{
        if (dialog == null) {
            return;
        }
        const root = dialog.getRootNode();
        // Always true, but we do this for TypeScript:
        if (!(root instanceof ShadowRoot)) {
            return;
        }
        const shadowRoot = root;
        function handler(e) {
            const el = shadowRoot.activeElement;
            if (e.key === "Enter" && el instanceof HTMLElement && el.getAttribute("role") === "link") {
                e.preventDefault();
                e.stopPropagation();
                el.click();
            }
        }
        function handleFocus() {
            // safari will force itself as the active application when a background page triggers any sort of autofocus
            // this is a workaround to only set the dialog role if the document has focus
            setRole(document.hasFocus() ? "dialog" : undefined);
        }
        shadowRoot.addEventListener("keydown", handler);
        window.addEventListener("focus", handleFocus);
        window.addEventListener("blur", handleFocus);
        return ()=>{
            shadowRoot.removeEventListener("keydown", handler);
            window.removeEventListener("focus", handleFocus);
            window.removeEventListener("blur", handleFocus);
        };
    }, [
        dialog
    ]);
    return /*#__PURE__*/ _react.createElement("div", {
        ref: onDialog,
        "data-nextjs-dialog": true,
        tabIndex: -1,
        role: role,
        "aria-labelledby": props["aria-labelledby"],
        "aria-describedby": props["aria-describedby"],
        "aria-modal": "true"
    }, /*#__PURE__*/ _react.createElement("div", {
        "data-nextjs-dialog-banner": true,
        className: "banner-" + type
    }), children);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Dialog.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Dialog: null,
    DialogBody: null,
    DialogContent: null,
    DialogHeader: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Dialog: function() {
        return _Dialog.Dialog;
    },
    DialogBody: function() {
        return _DialogBody.DialogBody;
    },
    DialogContent: function() {
        return _DialogContent.DialogContent;
    },
    DialogHeader: function() {
        return _DialogHeader.DialogHeader;
    },
    styles: function() {
        return _styles.styles;
    }
});
const _Dialog = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/Dialog.js [app-client] (ecmascript)");
const _DialogBody = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogBody.js [app-client] (ecmascript)");
const _DialogContent = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogContent.js [app-client] (ecmascript)");
const _DialogHeader = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogHeader.js [app-client] (ecmascript)");
const _styles = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/styles.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/Errors.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Errors: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Errors: function() {
        return Errors;
    },
    styles: function() {
        return styles;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _erroroverlayreducer = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/error-overlay-reducer.js [app-client] (ecmascript)");
const _Dialog = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js [app-client] (ecmascript)");
const _LeftRightDialogHeader = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/index.js [app-client] (ecmascript)");
const _Overlay = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/index.js [app-client] (ecmascript)");
const _Toast = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/index.js [app-client] (ecmascript)");
const _getErrorByType = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/getErrorByType.js [app-client] (ecmascript)");
const _nodeStackFrames = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/nodeStackFrames.js [app-client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [app-client] (ecmascript)");
const _CloseIcon = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon.js [app-client] (ecmascript)");
const _RuntimeError = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/index.js [app-client] (ecmascript)");
const _VersionStalenessInfo = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/index.js [app-client] (ecmascript)");
const _hotlinkedtext = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/index.js [app-client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  .nextjs-container-errors-header > h1 {\n    font-size: var(--size-font-big);\n    line-height: var(--size-font-bigger);\n    font-weight: bold;\n    margin: 0;\n    margin-top: calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  .nextjs-container-errors-header small {\n    font-size: var(--size-font-small);\n    color: var(--color-accents-1);\n    margin-left: var(--size-gap-double);\n  }\n  .nextjs-container-errors-header small > span {\n    font-family: var(--font-stack-monospace);\n  }\n  .nextjs-container-errors-header > p {\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-big);\n    font-weight: bold;\n    margin: 0;\n    margin-top: var(--size-gap-half);\n    color: var(--color-ansi-red);\n    white-space: pre-wrap;\n  }\n  .nextjs-container-errors-header > div > small {\n    margin: 0;\n    margin-top: var(--size-gap-half);\n  }\n  .nextjs-container-errors-header > p > a {\n    color: var(--color-ansi-red);\n  }\n\n  .nextjs-container-errors-body > h2:not(:first-child) {\n    margin-top: calc(var(--size-gap-double) + var(--size-gap));\n  }\n  .nextjs-container-errors-body > h2 {\n    margin-bottom: var(--size-gap);\n    font-size: var(--size-font-big);\n  }\n\n  .nextjs-toast-errors-parent {\n    cursor: pointer;\n    transition: transform 0.2s ease;\n  }\n  .nextjs-toast-errors-parent:hover {\n    transform: scale(1.1);\n  }\n  .nextjs-toast-errors {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  .nextjs-toast-errors > svg {\n    margin-right: var(--size-gap);\n  }\n  .nextjs-toast-errors-hide-button {\n    margin-left: var(--size-gap-triple);\n    border: none;\n    background: none;\n    color: var(--color-ansi-bright-white);\n    padding: 0;\n    transition: opacity 0.25s ease;\n    opacity: 0.7;\n  }\n  .nextjs-toast-errors-hide-button:hover {\n    opacity: 1;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function getErrorSignature(ev) {
    const { event } = ev;
    switch(event.type){
        case _erroroverlayreducer.ACTION_UNHANDLED_ERROR:
        case _erroroverlayreducer.ACTION_UNHANDLED_REJECTION:
            {
                return event.reason.name + "::" + event.reason.message + "::" + event.reason.stack;
            }
        default:
            {}
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = event;
    return "";
}
const Errors = function Errors(param) {
    let { errors, initialDisplayState, versionInfo } = param;
    const [lookups, setLookups] = _react.useState({});
    const [readyErrors, nextError] = _react.useMemo(()=>{
        let ready = [];
        let next = null;
        // Ensure errors are displayed in the order they occurred in:
        for(let idx = 0; idx < errors.length; ++idx){
            const e = errors[idx];
            const { id } = e;
            if (id in lookups) {
                ready.push(lookups[id]);
                continue;
            }
            // Check for duplicate errors
            if (idx > 0) {
                const prev = errors[idx - 1];
                if (getErrorSignature(prev) === getErrorSignature(e)) {
                    continue;
                }
            }
            next = e;
            break;
        }
        return [
            ready,
            next
        ];
    }, [
        errors,
        lookups
    ]);
    const isLoading = _react.useMemo(()=>{
        return readyErrors.length < 1 && Boolean(errors.length);
    }, [
        errors.length,
        readyErrors.length
    ]);
    _react.useEffect(()=>{
        if (nextError == null) {
            return;
        }
        let mounted = true;
        (0, _getErrorByType.getErrorByType)(nextError).then((resolved)=>{
            // We don't care if the desired error changed while we were resolving,
            // thus we're not tracking it using a ref. Once the work has been done,
            // we'll store it.
            if (mounted) {
                setLookups((m)=>({
                        ...m,
                        [resolved.id]: resolved
                    }));
            }
        }, ()=>{
        // TODO: handle this, though an edge case
        });
        return ()=>{
            mounted = false;
        };
    }, [
        nextError
    ]);
    const [displayState, setDisplayState] = _react.useState(initialDisplayState);
    const [activeIdx, setActiveIndex] = _react.useState(0);
    const previous = _react.useCallback((e)=>{
        e == null ? void 0 : e.preventDefault();
        setActiveIndex((v)=>Math.max(0, v - 1));
    }, []);
    const next = _react.useCallback((e)=>{
        e == null ? void 0 : e.preventDefault();
        setActiveIndex((v)=>Math.max(0, Math.min(readyErrors.length - 1, v + 1)));
    }, [
        readyErrors.length
    ]);
    var _readyErrors_activeIdx;
    const activeError = _react.useMemo(()=>(_readyErrors_activeIdx = readyErrors[activeIdx]) != null ? _readyErrors_activeIdx : null, [
        activeIdx,
        readyErrors
    ]);
    // Reset component state when there are no errors to be displayed.
    // This should never happen, but lets handle it.
    _react.useEffect(()=>{
        if (errors.length < 1) {
            setLookups({});
            setDisplayState("hidden");
            setActiveIndex(0);
        }
    }, [
        errors.length
    ]);
    const minimize = _react.useCallback((e)=>{
        e == null ? void 0 : e.preventDefault();
        setDisplayState("minimized");
    }, []);
    const hide = _react.useCallback((e)=>{
        e == null ? void 0 : e.preventDefault();
        setDisplayState("hidden");
    }, []);
    const fullscreen = _react.useCallback((e)=>{
        e == null ? void 0 : e.preventDefault();
        setDisplayState("fullscreen");
    }, []);
    // This component shouldn't be rendered with no errors, but if it is, let's
    // handle it gracefully by rendering nothing.
    if (errors.length < 1 || activeError == null) {
        return null;
    }
    if (isLoading) {
        // TODO: better loading state
        return /*#__PURE__*/ _react.createElement(_Overlay.Overlay, null);
    }
    if (displayState === "hidden") {
        return null;
    }
    if (displayState === "minimized") {
        return /*#__PURE__*/ _react.createElement(_Toast.Toast, {
            className: "nextjs-toast-errors-parent",
            onClick: fullscreen
        }, /*#__PURE__*/ _react.createElement("div", {
            className: "nextjs-toast-errors"
        }, /*#__PURE__*/ _react.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, /*#__PURE__*/ _react.createElement("circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }), /*#__PURE__*/ _react.createElement("line", {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "12"
        }), /*#__PURE__*/ _react.createElement("line", {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16"
        })), /*#__PURE__*/ _react.createElement("span", null, readyErrors.length, " error", readyErrors.length > 1 ? "s" : ""), /*#__PURE__*/ _react.createElement("button", {
            "data-nextjs-toast-errors-hide-button": true,
            className: "nextjs-toast-errors-hide-button",
            type: "button",
            onClick: (e)=>{
                e.stopPropagation();
                hide();
            },
            "aria-label": "Hide Errors"
        }, /*#__PURE__*/ _react.createElement(_CloseIcon.CloseIcon, null))));
    }
    const isServerError = [
        "server",
        "edge-server"
    ].includes((0, _nodeStackFrames.getErrorSource)(activeError.error) || "");
    return /*#__PURE__*/ _react.createElement(_Overlay.Overlay, null, /*#__PURE__*/ _react.createElement(_Dialog.Dialog, {
        type: "error",
        "aria-labelledby": "nextjs__container_errors_label",
        "aria-describedby": "nextjs__container_errors_desc",
        onClose: isServerError ? undefined : minimize
    }, /*#__PURE__*/ _react.createElement(_Dialog.DialogContent, null, /*#__PURE__*/ _react.createElement(_Dialog.DialogHeader, {
        className: "nextjs-container-errors-header"
    }, /*#__PURE__*/ _react.createElement(_LeftRightDialogHeader.LeftRightDialogHeader, {
        previous: activeIdx > 0 ? previous : null,
        next: activeIdx < readyErrors.length - 1 ? next : null,
        close: isServerError ? undefined : minimize
    }, /*#__PURE__*/ _react.createElement("small", null, /*#__PURE__*/ _react.createElement("span", null, activeIdx + 1), " of", " ", /*#__PURE__*/ _react.createElement("span", null, readyErrors.length), " unhandled error", readyErrors.length < 2 ? "" : "s"), versionInfo ? /*#__PURE__*/ _react.createElement(_VersionStalenessInfo.VersionStalenessInfo, versionInfo) : null), /*#__PURE__*/ _react.createElement("h1", {
        id: "nextjs__container_errors_label"
    }, isServerError ? "Server Error" : "Unhandled Runtime Error"), /*#__PURE__*/ _react.createElement("p", {
        id: "nextjs__container_errors_desc"
    }, activeError.error.name, ":", " ", /*#__PURE__*/ _react.createElement(_hotlinkedtext.HotlinkedText, {
        text: activeError.error.message
    })), isServerError ? /*#__PURE__*/ _react.createElement("div", null, /*#__PURE__*/ _react.createElement("small", null, "This error happened while generating the page. Any console logs will be displayed in the terminal window.")) : undefined), /*#__PURE__*/ _react.createElement(_Dialog.DialogBody, {
        className: "nextjs-container-errors-body"
    }, /*#__PURE__*/ _react.createElement(_RuntimeError.RuntimeError, {
        key: activeError.id.toString(),
        error: activeError
    })))));
};
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Errors.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/EditorLink.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EditorLink", {
    enumerable: true,
    get: function() {
        return EditorLink;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _useopenineditor = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-open-in-editor.js [app-client] (ecmascript)");
function EditorLink(param) {
    let { file, isSourceFile, location } = param;
    var _location_line, _location_column;
    const open = (0, _useopenineditor.useOpenInEditor)({
        file,
        lineNumber: (_location_line = location == null ? void 0 : location.line) != null ? _location_line : 1,
        column: (_location_column = location == null ? void 0 : location.column) != null ? _location_column : 0
    });
    return /*#__PURE__*/ _react.default.createElement("div", {
        "data-with-open-in-editor-link": true,
        "data-with-open-in-editor-link-source-file": isSourceFile ? true : undefined,
        "data-with-open-in-editor-link-import-trace": isSourceFile ? undefined : true,
        tabIndex: 10,
        role: "link",
        onClick: open,
        title: "Click to open in your editor"
    }, file, location ? " (" + location.line + ":" + location.column + ")" : null, /*#__PURE__*/ _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, /*#__PURE__*/ _react.default.createElement("path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), /*#__PURE__*/ _react.default.createElement("polyline", {
        points: "15 3 21 3 21 9"
    }), /*#__PURE__*/ _react.default.createElement("line", {
        x1: "10",
        y1: "14",
        x2: "21",
        y2: "3"
    })));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=EditorLink.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/Terminal.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Terminal", {
    enumerable: true,
    get: function() {
        return Terminal;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _anser = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/anser/index.js [app-client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _hotlinkedtext = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/index.js [app-client] (ecmascript)");
const _EditorLink = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/EditorLink.js [app-client] (ecmascript)");
function getFile(lines) {
    const contentFileName = lines.shift();
    if (!contentFileName) return null;
    const [fileName, line, column] = contentFileName.split(":", 3);
    const parsedLine = Number(line);
    const parsedColumn = Number(column);
    const hasLocation = !Number.isNaN(parsedLine) && !Number.isNaN(parsedColumn);
    return {
        fileName: hasLocation ? fileName : contentFileName,
        location: hasLocation ? {
            line: parsedLine,
            column: parsedColumn
        } : undefined
    };
}
function getImportTraceFiles(lines) {
    if (lines.some((line)=>/ReactServerComponentsError:/.test(line)) || lines.some((line)=>/Import trace for requested module:/.test(line))) {
        // Grab the lines at the end containing the files
        const files = [];
        while(/.+\..+/.test(lines[lines.length - 1]) && !lines[lines.length - 1].includes(":")){
            const file = lines.pop().trim();
            files.unshift(file);
        }
        return files;
    }
    return [];
}
function getEditorLinks(content) {
    const lines = content.split("\n");
    const file = getFile(lines);
    const importTraceFiles = getImportTraceFiles(lines);
    return {
        file,
        source: lines.join("\n"),
        importTraceFiles
    };
}
const Terminal = function Terminal(param) {
    let { content } = param;
    const { file, source, importTraceFiles } = _react.useMemo(()=>getEditorLinks(content), [
        content
    ]);
    const decoded = _react.useMemo(()=>{
        return _anser.default.ansiToJson(source, {
            json: true,
            use_classes: true,
            remove_empty: true
        });
    }, [
        source
    ]);
    return /*#__PURE__*/ _react.createElement("div", {
        "data-nextjs-terminal": true
    }, file && /*#__PURE__*/ _react.createElement(_EditorLink.EditorLink, {
        isSourceFile: true,
        key: file.fileName,
        file: file.fileName,
        location: file.location
    }), /*#__PURE__*/ _react.createElement("pre", null, decoded.map((entry, index)=>/*#__PURE__*/ _react.createElement("span", {
            key: "terminal-entry-" + index,
            style: {
                color: entry.fg ? "var(--color-" + entry.fg + ")" : undefined,
                ...entry.decoration === "bold" ? {
                    fontWeight: 800
                } : entry.decoration === "italic" ? {
                    fontStyle: "italic"
                } : undefined
            }
        }, /*#__PURE__*/ _react.createElement(_hotlinkedtext.HotlinkedText, {
            text: entry.content
        }))), importTraceFiles.map((importTraceFile)=>/*#__PURE__*/ _react.createElement(_EditorLink.EditorLink, {
            isSourceFile: false,
            key: importTraceFile,
            file: importTraceFile
        }))));
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Terminal.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Terminal", {
    enumerable: true,
    get: function() {
        return _Terminal.Terminal;
    }
});
const _Terminal = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/Terminal.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RootLayoutError.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RootLayoutError: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RootLayoutError: function() {
        return RootLayoutError;
    },
    styles: function() {
        return styles;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _Dialog = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js [app-client] (ecmascript)");
const _Overlay = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/index.js [app-client] (ecmascript)");
const _Terminal = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/index.js [app-client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [app-client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  .nextjs-container-root-layout-error-header > h4 {\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n  }\n\n  .nextjs-container-root-layout-error-body footer {\n    margin-top: var(--size-gap);\n  }\n  .nextjs-container-root-layout-error-body footer p {\n    margin: 0;\n  }\n\n  .nextjs-container-root-layout-error-body small {\n    color: #757575;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const RootLayoutError = function BuildError(param) {
    let { missingTags } = param;
    const message = "Please make sure to include the following tags in your root layout: <html>, <body>.\n\n" + ("Missing required root layout tag" + (missingTags.length === 1 ? "" : "s") + ": ") + missingTags.join(", ");
    const noop = _react.default.useCallback(()=>{}, []);
    return /*#__PURE__*/ _react.default.createElement(_Overlay.Overlay, {
        fixed: true
    }, /*#__PURE__*/ _react.default.createElement(_Dialog.Dialog, {
        type: "error",
        "aria-labelledby": "nextjs__container_root_layout_error_label",
        "aria-describedby": "nextjs__container_root_layout_error_desc",
        onClose: noop
    }, /*#__PURE__*/ _react.default.createElement(_Dialog.DialogContent, null, /*#__PURE__*/ _react.default.createElement(_Dialog.DialogHeader, {
        className: "nextjs-container-root-layout-error-header"
    }, /*#__PURE__*/ _react.default.createElement("h4", {
        id: "nextjs__container_root_layout_error_label"
    }, "Missing required tags")), /*#__PURE__*/ _react.default.createElement(_Dialog.DialogBody, {
        className: "nextjs-container-root-layout-error-body"
    }, /*#__PURE__*/ _react.default.createElement(_Terminal.Terminal, {
        content: message
    }), /*#__PURE__*/ _react.default.createElement("footer", null, /*#__PURE__*/ _react.default.createElement("p", {
        id: "nextjs__container_root_layout_error_desc"
    }, /*#__PURE__*/ _react.default.createElement("small", null, "This error and can only be dismissed by providing all required tags.")))))));
};
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=RootLayoutError.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/BuildError.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BuildError: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BuildError: function() {
        return BuildError;
    },
    styles: function() {
        return styles;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _Dialog = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js [app-client] (ecmascript)");
const _Overlay = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/index.js [app-client] (ecmascript)");
const _Terminal = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/index.js [app-client] (ecmascript)");
const _VersionStalenessInfo = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/index.js [app-client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [app-client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  .nextjs-container-build-error-header {\n    display: flex;\n    align-items: center;\n  }\n  .nextjs-container-build-error-header > h4 {\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n  }\n\n  .nextjs-container-build-error-body footer {\n    margin-top: var(--size-gap);\n  }\n  .nextjs-container-build-error-body footer p {\n    margin: 0;\n  }\n\n  .nextjs-container-build-error-body small {\n    color: #757575;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const BuildError = function BuildError(param) {
    let { message, versionInfo } = param;
    const noop = _react.useCallback(()=>{}, []);
    return /*#__PURE__*/ _react.createElement(_Overlay.Overlay, {
        fixed: true
    }, /*#__PURE__*/ _react.createElement(_Dialog.Dialog, {
        type: "error",
        "aria-labelledby": "nextjs__container_build_error_label",
        "aria-describedby": "nextjs__container_build_error_desc",
        onClose: noop
    }, /*#__PURE__*/ _react.createElement(_Dialog.DialogContent, null, /*#__PURE__*/ _react.createElement(_Dialog.DialogHeader, {
        className: "nextjs-container-build-error-header"
    }, /*#__PURE__*/ _react.createElement("h4", {
        id: "nextjs__container_build_error_label"
    }, "Failed to compile"), versionInfo ? /*#__PURE__*/ _react.createElement(_VersionStalenessInfo.VersionStalenessInfo, versionInfo) : null), /*#__PURE__*/ _react.createElement(_Dialog.DialogBody, {
        className: "nextjs-container-build-error-body"
    }, /*#__PURE__*/ _react.createElement(_Terminal.Terminal, {
        content: message
    }), /*#__PURE__*/ _react.createElement("footer", null, /*#__PURE__*/ _react.createElement("p", {
        id: "nextjs__container_build_error_desc"
    }, /*#__PURE__*/ _react.createElement("small", null, "This error occurred during the build process and can only be dismissed by fixing the error.")))))));
};
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=BuildError.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/styles.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [app-client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [app-client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-terminal] {\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n  }\n  [data-nextjs-terminal]::selection,\n  [data-nextjs-terminal] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-terminal] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n  [data-nextjs-terminal] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n\n  [data-nextjs-terminal] pre {\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n\n  [data-with-open-in-editor-link] svg {\n    width: auto;\n    height: var(--size-font-small);\n    margin-left: var(--size-gap);\n  }\n  [data-with-open-in-editor-link] {\n    cursor: pointer;\n  }\n  [data-with-open-in-editor-link]:hover {\n    text-decoration: underline dotted;\n  }\n  [data-with-open-in-editor-link-source-file] {\n    border-bottom: 1px solid var(--color-ansi-bright-black);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  [data-with-open-in-editor-link-import-trace] {\n    margin-left: var(--size-gap-double);\n  }\n  [data-nextjs-terminal] a {\n    color: inherit;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/styles.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [app-client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [app-client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-dialog-overlay] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow: auto;\n    z-index: 9000;\n\n    display: flex;\n    align-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 10vh 15px 0;\n  }\n\n  @media (max-height: 812px) {\n    [data-nextjs-dialog-overlay] {\n      padding: 15px 15px 0;\n    }\n  }\n\n  [data-nextjs-dialog-backdrop] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(17, 17, 17, 0.2);\n    pointer-events: all;\n    z-index: -1;\n  }\n\n  [data-nextjs-dialog-backdrop-fixed] {\n    cursor: not-allowed;\n    -webkit-backdrop-filter: blur(8px);\n    backdrop-filter: blur(8px);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/styles.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [app-client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [app-client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-codeframe] {\n    overflow: auto;\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n  }\n  [data-nextjs-codeframe]::selection,\n  [data-nextjs-codeframe] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-codeframe] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n\n  [data-nextjs-codeframe] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  [data-nextjs-codeframe] > div {\n    display: inline-block;\n    width: auto;\n    min-width: 100%;\n    border-bottom: 1px solid var(--color-ansi-bright-black);\n  }\n  [data-nextjs-codeframe] > div > p {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    margin: 0;\n  }\n  [data-nextjs-codeframe] > div > p:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-codeframe] div > p > svg {\n    width: auto;\n    height: 1em;\n    margin-left: 8px;\n  }\n  [data-nextjs-codeframe] div > pre {\n    overflow: hidden;\n    display: inline-block;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/ComponentStyles.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ComponentStyles", {
    enumerable: true,
    get: function() {
        return ComponentStyles;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _styles = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/styles.js [app-client] (ecmascript)");
const _Dialog = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js [app-client] (ecmascript)");
const _styles1 = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/styles.js [app-client] (ecmascript)");
const _styles2 = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/styles.js [app-client] (ecmascript)");
const _styles3 = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/styles.js [app-client] (ecmascript)");
const _Toast = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/index.js [app-client] (ecmascript)");
const _VersionStalenessInfo = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/index.js [app-client] (ecmascript)");
const _BuildError = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/BuildError.js [app-client] (ecmascript)");
const _RootLayoutError = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RootLayoutError.js [app-client] (ecmascript)");
const _Errors = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/Errors.js [app-client] (ecmascript)");
const _RuntimeError = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/index.js [app-client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [app-client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        \n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n      "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function ComponentStyles() {
    return /*#__PURE__*/ _react.createElement("style", null, (0, _nooptemplate.noop)(_templateObject(), _styles2.styles, _Toast.styles, _Dialog.styles, _styles1.styles, _styles.styles, _styles3.styles, _BuildError.styles, _RootLayoutError.styles, _Errors.styles, _RuntimeError.styles, _VersionStalenessInfo.styles));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ComponentStyles.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/Base.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Base", {
    enumerable: true,
    get: function() {
        return Base;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [app-client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n        :host {\n          --size-gap-half: 4px;\n          --size-gap: 8px;\n          --size-gap-double: 16px;\n          --size-gap-triple: 24px;\n          --size-gap-quad: 32px;\n\n          --size-font-small: 14px;\n          --size-font: 16px;\n          --size-font-big: 20px;\n          --size-font-bigger: 24px;\n\n          --color-accents-1: #808080;\n          --color-accents-2: #222222;\n          --color-accents-3: #404040;\n\n          --font-stack-monospace: 'SFMono-Regular', Consolas, 'Liberation Mono',\n            Menlo, Courier, monospace;\n\n          --color-ansi-selection: rgba(95, 126, 151, 0.48);\n          --color-ansi-bg: #111111;\n          --color-ansi-fg: #cccccc;\n\n          --color-ansi-white: #777777;\n          --color-ansi-black: #141414;\n          --color-ansi-blue: #00aaff;\n          --color-ansi-cyan: #88ddff;\n          --color-ansi-green: #98ec65;\n          --color-ansi-magenta: #aa88ff;\n          --color-ansi-red: #ff5555;\n          --color-ansi-yellow: #ffcc33;\n          --color-ansi-bright-white: #ffffff;\n          --color-ansi-bright-black: #777777;\n          --color-ansi-bright-blue: #33bbff;\n          --color-ansi-bright-cyan: #bbecff;\n          --color-ansi-bright-green: #b6f292;\n          --color-ansi-bright-magenta: #cebbff;\n          --color-ansi-bright-red: #ff8888;\n          --color-ansi-bright-yellow: #ffd966;\n        }\n\n        .mono {\n          font-family: var(--font-stack-monospace);\n        }\n\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n          margin-bottom: var(--size-gap);\n          font-weight: 500;\n          line-height: 1.5;\n        }\n      "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function Base() {
    return /*#__PURE__*/ _react.createElement("style", null, (0, _nooptemplate.noop)(_templateObject()));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Base.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parseStack.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseStack", {
    enumerable: true,
    get: function() {
        return parseStack;
    }
});
const _stacktraceparser = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/stacktrace-parser/stack-trace-parser.cjs.js [app-client] (ecmascript)");
const regexNextStatic = /\/_next(\/static\/.+)/;
function parseStack(stack) {
    const frames = (0, _stacktraceparser.parse)(stack);
    return frames.map((frame)=>{
        try {
            const url = new URL(frame.file);
            const res = regexNextStatic.exec(url.pathname);
            if (res) {
                var _process_env___NEXT_DIST_DIR_replace, _process_env___NEXT_DIST_DIR;
                const distDir = (_process_env___NEXT_DIST_DIR = ("TURBOPACK compile-time value", "/home/user/Repositories/suroi-wiki/.next")) == null ? void 0 : (_process_env___NEXT_DIST_DIR_replace = _process_env___NEXT_DIST_DIR.replace(/\\/g, "/")) == null ? void 0 : _process_env___NEXT_DIST_DIR_replace.replace(/\/$/, "");
                if (distDir) {
                    frame.file = "file://" + distDir.concat(res.pop());
                }
            }
        } catch (e) {}
        return frame;
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=parseStack.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/ShadowPortal.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ShadowPortal", {
    enumerable: true,
    get: function() {
        return ShadowPortal;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
function ShadowPortal(param) {
    let { children } = param;
    let portalNode = _react.useRef(null);
    let shadowNode = _react.useRef(null);
    let [, forceUpdate] = _react.useState();
    _react.useLayoutEffect(()=>{
        const ownerDocument = document;
        portalNode.current = ownerDocument.createElement("nextjs-portal");
        shadowNode.current = portalNode.current.attachShadow({
            mode: "open"
        });
        ownerDocument.body.appendChild(portalNode.current);
        forceUpdate({});
        return ()=>{
            if (portalNode.current && portalNode.current.ownerDocument) {
                portalNode.current.ownerDocument.body.removeChild(portalNode.current);
            }
        };
    }, []);
    return shadowNode.current ? /*#__PURE__*/ (0, _reactdom.createPortal)(children, shadowNode.current) : null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ShadowPortal.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _erroroverlayreducer = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/error-overlay-reducer.js [app-client] (ecmascript)");
const _ShadowPortal = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/ShadowPortal.js [app-client] (ecmascript)");
const _BuildError = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/BuildError.js [app-client] (ecmascript)");
const _Errors = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/Errors.js [app-client] (ecmascript)");
const _RootLayoutError = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RootLayoutError.js [app-client] (ecmascript)");
const _parseStack = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parseStack.js [app-client] (ecmascript)");
const _Base = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/Base.js [app-client] (ecmascript)");
const _ComponentStyles = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/ComponentStyles.js [app-client] (ecmascript)");
const _CssReset = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/CssReset.js [app-client] (ecmascript)");
class ReactDevOverlay extends _react.PureComponent {
    static getDerivedStateFromError(error) {
        const e = error;
        const event = {
            type: _erroroverlayreducer.ACTION_UNHANDLED_ERROR,
            reason: error,
            frames: (0, _parseStack.parseStack)(e.stack)
        };
        const errorEvent = {
            id: 0,
            event
        };
        return {
            reactError: errorEvent
        };
    }
    componentDidCatch(componentErr) {
        this.props.onReactError(componentErr);
    }
    render() {
        const { state, children } = this.props;
        const { reactError } = this.state;
        const hasBuildError = state.buildError != null;
        const hasRuntimeErrors = Boolean(state.errors.length);
        const rootLayoutMissingTagsError = state.rootLayoutMissingTagsError;
        const isMounted = hasBuildError || hasRuntimeErrors || reactError || rootLayoutMissingTagsError;
        return /*#__PURE__*/ _react.createElement(_react.Fragment, null, reactError ? /*#__PURE__*/ _react.createElement("html", null, /*#__PURE__*/ _react.createElement("head", null), /*#__PURE__*/ _react.createElement("body", null)) : children, isMounted ? /*#__PURE__*/ _react.createElement(_ShadowPortal.ShadowPortal, null, /*#__PURE__*/ _react.createElement(_CssReset.CssReset, null), /*#__PURE__*/ _react.createElement(_Base.Base, null), /*#__PURE__*/ _react.createElement(_ComponentStyles.ComponentStyles, null), rootLayoutMissingTagsError ? /*#__PURE__*/ _react.createElement(_RootLayoutError.RootLayoutError, {
            missingTags: rootLayoutMissingTagsError.missingTags
        }) : hasBuildError ? /*#__PURE__*/ _react.createElement(_BuildError.BuildError, {
            message: state.buildError,
            versionInfo: state.versionInfo
        }) : reactError ? /*#__PURE__*/ _react.createElement(_Errors.Errors, {
            versionInfo: state.versionInfo,
            initialDisplayState: "fullscreen",
            errors: [
                reactError
            ]
        }) : hasRuntimeErrors ? /*#__PURE__*/ _react.createElement(_Errors.Errors, {
            initialDisplayState: "minimized",
            errors: state.errors,
            versionInfo: state.versionInfo
        }) : undefined) : undefined);
    }
    constructor(...args){
        super(...args);
        this.state = {
            reactError: null
        };
    }
}
const _default = ReactDevOverlay;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ReactDevOverlay.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/dev/error-overlay/format-webpack-messages.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

/**
MIT License

Copyright (c) 2015-present, Facebook, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return formatWebpackMessages;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/strip-ansi/index.js [app-client] (ecmascript)"));
// This file is based on https://github.com/facebook/create-react-app/blob/7b1a32be6ec9f99a6c9a3c66813f3ac09c4736b9/packages/react-dev-utils/formatWebpackMessages.js
// It's been edited to remove chalk and CRA-specific logic
const friendlySyntaxErrorLabel = "Syntax error:";
const WEBPACK_BREAKING_CHANGE_POLYFILLS = "\n\nBREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.";
function isLikelyASyntaxError(message) {
    return (0, _stripansi.default)(message).includes(friendlySyntaxErrorLabel);
}
let hadMissingSassError = false;
// Cleans up webpack error messages.
function formatMessage(message, verbose, importTraceNote) {
    // TODO: Replace this once webpack 5 is stable
    if (typeof message === "object" && message.message) {
        const filteredModuleTrace = message.moduleTrace && message.moduleTrace.filter((trace)=>!/next-(middleware|client-pages|route|edge-function)-loader\.js/.test(trace.originName));
        let body = message.message;
        const breakingChangeIndex = body.indexOf(WEBPACK_BREAKING_CHANGE_POLYFILLS);
        if (breakingChangeIndex >= 0) {
            body = body.slice(0, breakingChangeIndex);
        }
        message = (message.moduleName ? (0, _stripansi.default)(message.moduleName) + "\n" : "") + (message.file ? (0, _stripansi.default)(message.file) + "\n" : "") + body + (message.details && verbose ? "\n" + message.details : "") + (filteredModuleTrace && filteredModuleTrace.length ? (importTraceNote || "\n\nImport trace for requested module:") + filteredModuleTrace.map((trace)=>"\n" + trace.moduleName).join("") : "") + (message.stack && verbose ? "\n" + message.stack : "");
    }
    let lines = message.split("\n");
    // Strip Webpack-added headers off errors/warnings
    // https://github.com/webpack/webpack/blob/master/lib/ModuleError.js
    lines = lines.filter((line)=>!/Module [A-z ]+\(from/.test(line));
    // Transform parsing error into syntax error
    // TODO: move this to our ESLint formatter?
    lines = lines.map((line)=>{
        const parsingError = /Line (\d+):(?:(\d+):)?\s*Parsing error: (.+)$/.exec(line);
        if (!parsingError) {
            return line;
        }
        const [, errorLine, errorColumn, errorMessage] = parsingError;
        return friendlySyntaxErrorLabel + " " + errorMessage + " (" + errorLine + ":" + errorColumn + ")";
    });
    message = lines.join("\n");
    // Smoosh syntax errors (commonly found in CSS)
    message = message.replace(/SyntaxError\s+\((\d+):(\d+)\)\s*(.+?)\n/g, "" + friendlySyntaxErrorLabel + " $3 ($1:$2)\n");
    // Clean up export errors
    message = message.replace(/^.*export '(.+?)' was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$2'.");
    message = message.replace(/^.*export 'default' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$2' does not contain a default export (imported as '$1').");
    message = message.replace(/^.*export '(.+?)' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$3' (imported as '$2').");
    lines = message.split("\n");
    // Remove leading newline
    if (lines.length > 2 && lines[1].trim() === "") {
        lines.splice(1, 1);
    }
    // Cleans up verbose "module not found" messages for files and packages.
    if (lines[1] && lines[1].indexOf("Module not found: ") === 0) {
        lines = [
            lines[0],
            lines[1].replace("Error: ", "").replace("Module not found: Cannot find file:", "Cannot find file:"),
            ...lines.slice(2)
        ];
    }
    // Add helpful message for users trying to use Sass for the first time
    if (lines[1] && lines[1].match(/Cannot find module.+sass/)) {
        // ./file.module.scss (<<loader info>>) => ./file.module.scss
        const firstLine = lines[0].split("!");
        lines[0] = firstLine[firstLine.length - 1];
        lines[1] = "To use Next.js' built-in Sass support, you first need to install `sass`.\n";
        lines[1] += "Run `npm i sass` or `yarn add sass` inside your workspace.\n";
        lines[1] += "\nLearn more: https://nextjs.org/docs/messages/install-sass";
        // dispose of unhelpful stack trace
        lines = lines.slice(0, 2);
        hadMissingSassError = true;
    } else if (hadMissingSassError && message.match(/(sass-loader|resolve-url-loader: CSS error)/)) {
        // dispose of unhelpful stack trace following missing sass module
        lines = [];
    }
    if (!verbose) {
        message = lines.join("\n");
        // Internal stacks are generally useless so we strip them... with the
        // exception of stacks containing `webpack:` because they're normally
        // from user code generated by Webpack. For more information see
        // https://github.com/facebook/create-react-app/pull/1050
        message = message.replace(/^\s*at\s((?!webpack:).)*:\d+:\d+[\s)]*(\n|$)/gm, "") // at ... ...:x:y
        ;
        message = message.replace(/^\s*at\s<anonymous>(\n|$)/gm, "") // at <anonymous>
        ;
        message = message.replace(/File was processed with these loaders:\n(.+[\\/](next[\\/]dist[\\/].+|@next[\\/]react-refresh-utils[\\/]loader)\.js\n)*You may need an additional loader to handle the result of these loaders.\n/g, "");
        lines = message.split("\n");
    }
    // Remove duplicated newlines
    lines = lines.filter((line, index, arr)=>index === 0 || line.trim() !== "" || line.trim() !== arr[index - 1].trim());
    // Reassemble the message
    message = lines.join("\n");
    return message.trim();
}
function formatWebpackMessages(json, verbose) {
    const formattedErrors = json.errors.map((message)=>{
        const isUnknownNextFontError = message.message.includes("An error occured in `next/font`.");
        return formatMessage(message, isUnknownNextFontError || verbose);
    });
    const formattedWarnings = json.warnings.map((message)=>{
        return formatMessage(message, verbose);
    });
    // Reorder errors to put the most relevant ones first.
    let reactServerComponentsError = -1;
    for(let i = 0; i < formattedErrors.length; i++){
        const error = formattedErrors[i];
        if (error.includes("ReactServerComponentsError")) {
            reactServerComponentsError = i;
            break;
        }
    }
    // Move the reactServerComponentsError to the top if it exists
    if (reactServerComponentsError !== -1) {
        const error = formattedErrors.splice(reactServerComponentsError, 1);
        formattedErrors.unshift(error[0]);
    }
    const result = {
        ...json,
        errors: formattedErrors,
        warnings: formattedWarnings
    };
    if (!verbose && result.errors.some(isLikelyASyntaxError)) {
        // If there are any syntax errors, show just them.
        result.errors = result.errors.filter(isLikelyASyntaxError);
        result.warnings = [];
    }
    return result;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=format-webpack-messages.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HotReload;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/strip-ansi/index.js [app-client] (ecmascript)"));
const _formatwebpackmessages = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/dev/error-overlay/format-webpack-messages.js [app-client] (ecmascript)"));
const _navigation = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
const _erroroverlayreducer = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/error-overlay-reducer.js [app-client] (ecmascript)");
const _parseStack = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parseStack.js [app-client] (ecmascript)");
const _ReactDevOverlay = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js [app-client] (ecmascript)"));
const _useerrorhandler = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-error-handler.js [app-client] (ecmascript)");
const _usewebsocket = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-websocket.js [app-client] (ecmascript)");
const _parsecomponentstack = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parse-component-stack.js [app-client] (ecmascript)");
const _hotreloadertypes = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/dev/hot-reloader-types.js [app-client] (ecmascript)");
let mostRecentCompilationHash = null;
let __nextDevClientId = Math.round(Math.random() * 100 + Date.now());
let reloading = false;
function onBeforeFastRefresh(dispatcher, hasUpdates) {
    if (hasUpdates) {
        dispatcher.onBeforeRefresh();
    }
}
function onFastRefresh(dispatcher, hasUpdates) {
    dispatcher.onBuildOk();
    if (hasUpdates) {
        dispatcher.onRefresh();
    }
}
// There is a newer version of the code available.
function handleAvailableHash(hash) {
    // Update last known compilation hash.
    mostRecentCompilationHash = hash;
}
// Is there a newer version of this code available?
function isUpdateAvailable() {
    /* globals __webpack_hash__ */ // __webpack_hash__ is the hash of the current compilation.
    // It's a global variable injected by Webpack.
    return mostRecentCompilationHash !== __webpack_hash__;
}
// Webpack disallows updates in other states.
function canApplyUpdates() {
    // @ts-expect-error module.hot exists
    return module.hot.status() === "idle";
}
function afterApplyUpdates(fn) {
    if (canApplyUpdates()) {
        fn();
    } else {
        function handler(status) {
            if (status === "idle") {
                // @ts-expect-error module.hot exists
                module.hot.removeStatusHandler(handler);
                fn();
            }
        }
        // @ts-expect-error module.hot exists
        module.hot.addStatusHandler(handler);
    }
}
function performFullReload(err, sendMessage) {
    const stackTrace = err && (err.stack && err.stack.split("\n").slice(0, 5).join("\n") || err.message || err + "");
    sendMessage(JSON.stringify({
        event: "client-full-reload",
        stackTrace,
        hadRuntimeError: !!_useerrorhandler.RuntimeErrorHandler.hadRuntimeError
    }));
    if (reloading) return;
    reloading = true;
    window.location.reload();
}
// Attempt to update code on the fly, fall back to a hard reload.
function tryApplyUpdates(onBeforeUpdate, onHotUpdateSuccess, sendMessage, dispatcher) {
    if (!isUpdateAvailable() || !canApplyUpdates()) {
        dispatcher.onBuildOk();
        return;
    }
    function handleApplyUpdates(err, updatedModules) {
        if (err || _useerrorhandler.RuntimeErrorHandler.hadRuntimeError || !updatedModules) {
            if (err) {
                console.warn("[Fast Refresh] performing full reload\n\n" + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + "You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n" + "Consider migrating the non-React component export to a separate file and importing it into both files.\n\n" + "It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n" + "Fast Refresh requires at least one parent function component in your React tree.");
            } else if (_useerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                console.warn("[Fast Refresh] performing full reload because your application had an unrecoverable error");
            }
            performFullReload(err, sendMessage);
            return;
        }
        const hasUpdates = Boolean(updatedModules.length);
        if (typeof onHotUpdateSuccess === "function") {
            // Maybe we want to do something.
            onHotUpdateSuccess(hasUpdates);
        }
        if (isUpdateAvailable()) {
            // While we were updating, there was a new update! Do it again.
            tryApplyUpdates(hasUpdates ? ()=>{} : onBeforeUpdate, hasUpdates ? ()=>dispatcher.onBuildOk() : onHotUpdateSuccess, sendMessage, dispatcher);
        } else {
            dispatcher.onBuildOk();
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.__NEXT_TEST_MODE) {
                afterApplyUpdates(()=>{
                    if (self.__NEXT_HMR_CB) {
                        self.__NEXT_HMR_CB();
                        self.__NEXT_HMR_CB = null;
                    }
                });
            }
        }
    }
    // https://webpack.js.org/api/hot-module-replacement/#check
    // @ts-expect-error module.hot exists
    module.hot.check(/* autoApply */ false).then((updatedModules)=>{
        if (!updatedModules) {
            return null;
        }
        if (typeof onBeforeUpdate === "function") {
            const hasUpdates = Boolean(updatedModules.length);
            onBeforeUpdate(hasUpdates);
        }
        // https://webpack.js.org/api/hot-module-replacement/#apply
        // @ts-expect-error module.hot exists
        return module.hot.apply();
    }).then((updatedModules)=>{
        handleApplyUpdates(null, updatedModules);
    }, (err)=>{
        handleApplyUpdates(err, null);
    });
}
function processMessage(obj, sendMessage, router, dispatcher) {
    if (!("action" in obj)) {
        return;
    }
    function handleErrors(errors) {
        // "Massage" webpack messages.
        const formatted = (0, _formatwebpackmessages.default)({
            errors: errors,
            warnings: []
        });
        // Only show the first error.
        dispatcher.onBuildError(formatted.errors[0]);
        // Also log them to the console.
        for(let i = 0; i < formatted.errors.length; i++){
            console.error((0, _stripansi.default)(formatted.errors[i]));
        }
        // Do not attempt to reload now.
        // We will reload on next success instead.
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.__NEXT_TEST_MODE) {
            if (self.__NEXT_HMR_CB) {
                self.__NEXT_HMR_CB(formatted.errors[0]);
                self.__NEXT_HMR_CB = null;
            }
        }
    }
    function handleHotUpdate() {
        if ("TURBOPACK compile-time truthy", 1) {
            onFastRefresh(dispatcher, true);
        } else {
            "TURBOPACK unreachable";
        }
    }
    switch(obj.action){
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILDING:
            {
                console.log("[Fast Refresh] rebuilding");
                break;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.FINISH_BUILDING:
            {
                break;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILT:
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SYNC:
            {
                if (obj.hash) {
                    handleAvailableHash(obj.hash);
                }
                const { errors, warnings } = obj;
                // Is undefined when it's a 'built' event
                if ("versionInfo" in obj) {
                    dispatcher.onVersionInfo(obj.versionInfo);
                }
                const hasErrors = Boolean(errors && errors.length);
                // Compilation with errors (e.g. syntax error or missing modules).
                if (hasErrors) {
                    sendMessage(JSON.stringify({
                        event: "client-error",
                        errorCount: errors.length,
                        clientId: __nextDevClientId
                    }));
                    handleErrors(errors);
                    return;
                }
                const hasWarnings = Boolean(warnings && warnings.length);
                if (hasWarnings) {
                    sendMessage(JSON.stringify({
                        event: "client-warning",
                        warningCount: warnings.length,
                        clientId: __nextDevClientId
                    }));
                    // Compilation with warnings (e.g. ESLint).
                    const isHotUpdate = obj.action !== _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SYNC;
                    // Print warnings to the console.
                    const formattedMessages = (0, _formatwebpackmessages.default)({
                        warnings: warnings,
                        errors: []
                    });
                    for(let i = 0; i < formattedMessages.warnings.length; i++){
                        if (i === 5) {
                            console.warn("There were more warnings in other files.\n" + "You can find a complete log in the terminal.");
                            break;
                        }
                        console.warn((0, _stripansi.default)(formattedMessages.warnings[i]));
                    }
                    // Attempt to apply hot updates or reload.
                    if (isHotUpdate) {
                        handleHotUpdate();
                    }
                    return;
                }
                sendMessage(JSON.stringify({
                    event: "client-success",
                    clientId: __nextDevClientId
                }));
                const isHotUpdate = obj.action !== _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SYNC && (!window.__NEXT_DATA__ || window.__NEXT_DATA__.page !== "/_error") && isUpdateAvailable();
                // Attempt to apply hot updates or reload.
                if (isHotUpdate) {
                    handleHotUpdate();
                }
                return;
            }
        // TODO-APP: make server component change more granular
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_COMPONENT_CHANGES:
            {
                sendMessage(JSON.stringify({
                    event: "server-component-reload-page",
                    clientId: __nextDevClientId
                }));
                if (_useerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                    if (reloading) return;
                    reloading = true;
                    return window.location.reload();
                }
                (0, _react.startTransition)(()=>{
                    // @ts-ignore it exists, it's just hidden
                    router.fastRefresh();
                    dispatcher.onRefresh();
                });
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.__NEXT_TEST_MODE) {
                    if (self.__NEXT_HMR_CB) {
                        self.__NEXT_HMR_CB();
                        self.__NEXT_HMR_CB = null;
                    }
                }
                return;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.RELOAD_PAGE:
            {
                sendMessage(JSON.stringify({
                    event: "client-reload-page",
                    clientId: __nextDevClientId
                }));
                if (reloading) return;
                reloading = true;
                return window.location.reload();
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.REMOVED_PAGE:
            {
                // TODO-APP: potentially only refresh if the currently viewed page was removed.
                // @ts-ignore it exists, it's just hidden
                router.fastRefresh();
                return;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.ADDED_PAGE:
            {
                // TODO-APP: potentially only refresh if the currently viewed page was added.
                // @ts-ignore it exists, it's just hidden
                router.fastRefresh();
                return;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_ERROR:
            {
                const { errorJSON } = obj;
                if (errorJSON) {
                    const { message, stack } = JSON.parse(errorJSON);
                    const error = new Error(message);
                    error.stack = stack;
                    handleErrors([
                        error
                    ]);
                }
                return;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.DEV_PAGES_MANIFEST_UPDATE:
            {
                return;
            }
        default:
            {}
    }
}
function HotReload(param) {
    let { assetPrefix, children } = param;
    const [state, dispatch] = (0, _react.useReducer)(_erroroverlayreducer.errorOverlayReducer, _erroroverlayreducer.INITIAL_OVERLAY_STATE);
    const dispatcher = (0, _react.useMemo)(()=>{
        return {
            onBuildOk () {
                dispatch({
                    type: _erroroverlayreducer.ACTION_BUILD_OK
                });
            },
            onBuildError (message) {
                dispatch({
                    type: _erroroverlayreducer.ACTION_BUILD_ERROR,
                    message
                });
            },
            onBeforeRefresh () {
                dispatch({
                    type: _erroroverlayreducer.ACTION_BEFORE_REFRESH
                });
            },
            onRefresh () {
                dispatch({
                    type: _erroroverlayreducer.ACTION_REFRESH
                });
            },
            onVersionInfo (versionInfo) {
                dispatch({
                    type: _erroroverlayreducer.ACTION_VERSION_INFO,
                    versionInfo
                });
            }
        };
    }, [
        dispatch
    ]);
    const handleOnUnhandledError = (0, _react.useCallback)((error)=>{
        // Component stack is added to the error in use-error-handler in case there was a hydration errror
        const componentStack = error._componentStack;
        dispatch({
            type: _erroroverlayreducer.ACTION_UNHANDLED_ERROR,
            reason: error,
            frames: (0, _parseStack.parseStack)(error.stack),
            componentStackFrames: componentStack && (0, _parsecomponentstack.parseComponentStack)(componentStack)
        });
    }, []);
    const handleOnUnhandledRejection = (0, _react.useCallback)((reason)=>{
        dispatch({
            type: _erroroverlayreducer.ACTION_UNHANDLED_REJECTION,
            reason: reason,
            frames: (0, _parseStack.parseStack)(reason.stack)
        });
    }, []);
    const handleOnReactError = (0, _react.useCallback)(()=>{
        _useerrorhandler.RuntimeErrorHandler.hadRuntimeError = true;
    }, []);
    (0, _useerrorhandler.useErrorHandler)(handleOnUnhandledError, handleOnUnhandledRejection);
    const webSocketRef = (0, _usewebsocket.useWebsocket)(assetPrefix);
    (0, _usewebsocket.useWebsocketPing)(webSocketRef);
    const sendMessage = (0, _usewebsocket.useSendMessage)(webSocketRef);
    const processTurbopackMessage = (0, _usewebsocket.useTurbopack)(sendMessage);
    const router = (0, _navigation.useRouter)();
    (0, _react.useEffect)(()=>{
        const handler = (event)=>{
            try {
                const obj = JSON.parse(event.data);
                const handledByTurbopack = processTurbopackMessage == null ? void 0 : processTurbopackMessage(obj);
                if (!handledByTurbopack) {
                    processMessage(obj, sendMessage, router, dispatcher);
                }
            } catch (err) {
                var _err_stack;
                console.warn("[HMR] Invalid message: " + event.data + "\n" + ((_err_stack = err == null ? void 0 : err.stack) != null ? _err_stack : ""));
            }
        };
        const websocket = webSocketRef.current;
        if (websocket) {
            websocket.addEventListener("message", handler);
        }
        return ()=>websocket && websocket.removeEventListener("message", handler);
    }, [
        sendMessage,
        router,
        webSocketRef,
        dispatcher,
        processTurbopackMessage
    ]);
    return /*#__PURE__*/ _react.default.createElement(_ReactDevOverlay.default, {
        onReactError: handleOnReactError,
        state: state
    }, children);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hot-reloader-client.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/dev-root-not-found-boundary.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    bailOnNotFound: null,
    DevRootNotFoundBoundary: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bailOnNotFound: function() {
        return bailOnNotFound;
    },
    DevRootNotFoundBoundary: function() {
        return DevRootNotFoundBoundary;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _notfoundboundary = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/not-found-boundary.js [app-client] (ecmascript)");
function bailOnNotFound() {
    throw new Error("notFound() is not allowed to use in root layout");
}
function NotAllowedRootNotFoundError() {
    bailOnNotFound();
    return null;
}
function DevRootNotFoundBoundary(param) {
    let { children } = param;
    return /*#__PURE__*/ _react.default.createElement(_notfoundboundary.NotFoundBoundary, {
        notFound: /*#__PURE__*/ _react.default.createElement(NotAllowedRootNotFoundError, null)
    }, children);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-root-not-found-boundary.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasBasePath", {
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
});
const _pathhasprefix = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [app-client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || "";
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/remove-base-path.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeBasePath", {
    enumerable: true,
    get: function() {
        return removeBasePath;
    }
});
const _hasbasepath = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || "";
function removeBasePath(path) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    // Can't trim the basePath if it has zero length!
    if (basePath.length === 0) return path;
    path = path.slice(basePath.length);
    if (!path.startsWith("/")) path = "/" + path;
    return path;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RSC_HEADER: null,
    ACTION: null,
    NEXT_ROUTER_STATE_TREE: null,
    NEXT_ROUTER_PREFETCH_HEADER: null,
    NEXT_URL: null,
    RSC_CONTENT_TYPE_HEADER: null,
    RSC_VARY_HEADER: null,
    FLIGHT_PARAMETERS: null,
    NEXT_RSC_UNION_QUERY: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RSC_HEADER: function() {
        return RSC_HEADER;
    },
    ACTION: function() {
        return ACTION;
    },
    NEXT_ROUTER_STATE_TREE: function() {
        return NEXT_ROUTER_STATE_TREE;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_VARY_HEADER: function() {
        return RSC_VARY_HEADER;
    },
    FLIGHT_PARAMETERS: function() {
        return FLIGHT_PARAMETERS;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    }
});
const RSC_HEADER = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH_HEADER = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const RSC_VARY_HEADER = RSC_HEADER + ", " + NEXT_ROUTER_STATE_TREE + ", " + NEXT_ROUTER_PREFETCH_HEADER + ", " + NEXT_URL;
const FLIGHT_PARAMETERS = [
    [
        RSC_HEADER
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH_HEADER
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/find-head-in-cache.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findHeadInCache", {
    enumerable: true,
    get: function() {
        return findHeadInCache;
    }
});
const _createroutercachekey = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
function findHeadInCache(cache, parallelRoutes) {
    const isLastItem = Object.keys(parallelRoutes).length === 0;
    if (isLastItem) {
        return cache.head;
    }
    for(const key in parallelRoutes){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        const childSegmentMap = cache.parallelRoutes.get(key);
        if (!childSegmentMap) {
            continue;
        }
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        const item = findHeadInCache(cacheNode, childParallelRoutes);
        if (item) {
            return item;
        }
    }
    return undefined;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=find-head-in-cache.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/app-router-announcer.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppRouterAnnouncer", {
    enumerable: true,
    get: function() {
        return AppRouterAnnouncer;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _reactdom = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const ANNOUNCER_TYPE = "next-route-announcer";
const ANNOUNCER_ID = "__next-route-announcer__";
function getAnnouncerNode() {
    var _existingAnnouncer_shadowRoot;
    const existingAnnouncer = document.getElementsByName(ANNOUNCER_TYPE)[0];
    if (existingAnnouncer == null ? void 0 : (_existingAnnouncer_shadowRoot = existingAnnouncer.shadowRoot) == null ? void 0 : _existingAnnouncer_shadowRoot.childNodes[0]) {
        return existingAnnouncer.shadowRoot.childNodes[0];
    } else {
        const container = document.createElement(ANNOUNCER_TYPE);
        container.style.cssText = "position:absolute";
        const announcer = document.createElement("div");
        announcer.ariaLive = "assertive";
        announcer.id = ANNOUNCER_ID;
        announcer.role = "alert";
        announcer.style.cssText = "position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal";
        // Use shadow DOM here to avoid any potential CSS bleed
        const shadow = container.attachShadow({
            mode: "open"
        });
        shadow.appendChild(announcer);
        document.body.appendChild(container);
        return announcer;
    }
}
function AppRouterAnnouncer(param) {
    let { tree } = param;
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const announcer = getAnnouncerNode();
        setPortalNode(announcer);
        return ()=>{
            const container = document.getElementsByTagName(ANNOUNCER_TYPE)[0];
            if (container == null ? void 0 : container.isConnected) {
                document.body.removeChild(container);
            }
        };
    }, []);
    const [routeAnnouncement, setRouteAnnouncement] = (0, _react.useState)("");
    const previousTitle = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        let currentTitle = "";
        if (document.title) {
            currentTitle = document.title;
        } else {
            const pageHeader = document.querySelector("h1");
            if (pageHeader) {
                currentTitle = pageHeader.innerText || pageHeader.textContent || "";
            }
        }
        // Only announce the title change, but not for the first load because screen
        // readers do that automatically.
        if (previousTitle.current !== undefined && previousTitle.current !== currentTitle) {
            setRouteAnnouncement(currentTitle);
        }
        previousTitle.current = currentTitle;
    }, [
        tree
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(routeAnnouncement, portalNode) : null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-announcer.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathTrailingSlash", {
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
});
const _removetrailingslash = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-client] (ecmascript)");
const _parsepath = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-client] (ecmascript)");
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.__NEXT_MANUAL_TRAILING_SLASH) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addBasePath", {
    enumerable: true,
    get: function() {
        return addBasePath;
    }
});
const _addpathprefix = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-client] (ecmascript)");
const _normalizetrailingslash = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || "";
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    extractPathFromFlightRouterState: null,
    computeChangedPath: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    extractPathFromFlightRouterState: function() {
        return extractPathFromFlightRouterState;
    },
    computeChangedPath: function() {
        return computeChangedPath;
    }
});
const _interceptionroutes = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/helpers/interception-routes.js [app-client] (ecmascript)");
const _segment = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const removeLeadingSlash = (segment)=>{
    return segment[0] === "/" ? segment.slice(1) : segment;
};
const segmentToPathname = (segment)=>{
    if (typeof segment === "string") {
        return segment;
    }
    return segment[1];
};
function normalizeSegments(segments) {
    return segments.reduce((acc, segment)=>{
        segment = removeLeadingSlash(segment);
        if (segment === "" || (0, _segment.isGroupSegment)(segment)) {
            return acc;
        }
        return acc + "/" + segment;
    }, "") || "/";
}
function extractPathFromFlightRouterState(flightRouterState) {
    const segment = Array.isArray(flightRouterState[0]) ? flightRouterState[0][1] : flightRouterState[0];
    if (segment === "__DEFAULT__" || _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m))) return undefined;
    if (segment.startsWith("__PAGE__")) return "";
    const segments = [
        segment
    ];
    var _flightRouterState_;
    const parallelRoutes = (_flightRouterState_ = flightRouterState[1]) != null ? _flightRouterState_ : {};
    const childrenPath = parallelRoutes.children ? extractPathFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        segments.push(childrenPath);
    } else {
        for (const [key, value] of Object.entries(parallelRoutes)){
            if (key === "children") continue;
            const childPath = extractPathFromFlightRouterState(value);
            if (childPath !== undefined) {
                segments.push(childPath);
            }
        }
    }
    return normalizeSegments(segments);
}
function computeChangedPathImpl(treeA, treeB) {
    const [segmentA, parallelRoutesA] = treeA;
    const [segmentB, parallelRoutesB] = treeB;
    const normalizedSegmentA = segmentToPathname(segmentA);
    const normalizedSegmentB = segmentToPathname(segmentB);
    if (_interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>normalizedSegmentA.startsWith(m) || normalizedSegmentB.startsWith(m))) {
        return "";
    }
    if (!(0, _matchsegments.matchSegment)(segmentA, segmentB)) {
        var _extractPathFromFlightRouterState;
        // once we find where the tree changed, we compute the rest of the path by traversing the tree
        return (_extractPathFromFlightRouterState = extractPathFromFlightRouterState(treeB)) != null ? _extractPathFromFlightRouterState : "";
    }
    for(const parallelRouterKey in parallelRoutesA){
        if (parallelRoutesB[parallelRouterKey]) {
            const changedPath = computeChangedPathImpl(parallelRoutesA[parallelRouterKey], parallelRoutesB[parallelRouterKey]);
            if (changedPath !== null) {
                return segmentToPathname(segmentB) + "/" + changedPath;
            }
        }
    }
    return null;
}
function computeChangedPath(treeA, treeB) {
    const changedPath = computeChangedPathImpl(treeA, treeB);
    if (changedPath == null || changedPath === "/") {
        return changedPath;
    }
    // lightweight normalization to remove route groups
    return normalizeSegments(changedPath.split("/"));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=compute-changed-path.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fillLazyItemsTillLeafWithHead", {
    enumerable: true,
    get: function() {
        return fillLazyItemsTillLeafWithHead;
    }
});
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
function fillLazyItemsTillLeafWithHead(newCache, existingCache, routerState, head, wasPrefetched) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                const existingCacheNode = parallelRouteCacheNode.get(cacheKey);
                const newCacheNode = wasPrefetched && existingCacheNode ? {
                    status: existingCacheNode.status,
                    data: existingCacheNode.data,
                    subTreeData: existingCacheNode.subTreeData,
                    parallelRoutes: new Map(existingCacheNode.parallelRoutes)
                } : {
                    status: _approutercontextsharedruntime.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes)
                };
                // Overrides the cache key with the new cache node.
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                // Traverse deeper to apply the head / fill lazy items till the head.
                fillLazyItemsTillLeafWithHead(newCacheNode, existingCacheNode, parallelRouteState, head, wasPrefetched);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        const newCacheNode = {
            status: _approutercontextsharedruntime.CacheStates.LAZY_INITIALIZED,
            data: null,
            subTreeData: null,
            parallelRoutes: new Map()
        };
        const existingParallelRoutes = newCache.parallelRoutes.get(key);
        if (existingParallelRoutes) {
            existingParallelRoutes.set(cacheKey, newCacheNode);
        } else {
            newCache.parallelRoutes.set(key, new Map([
                [
                    cacheKey,
                    newCacheNode
                ]
            ]));
        }
        fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head, wasPrefetched);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-lazy-items-till-leaf-with-head.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createHrefFromUrl", {
    enumerable: true,
    get: function() {
        return createHrefFromUrl;
    }
});
function createHrefFromUrl(url, includeHash) {
    if (includeHash === void 0) includeHash = true;
    return url.pathname + url.search + (includeHash ? url.hash : "");
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-href-from-url.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-initial-router-state.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createInitialRouterState", {
    enumerable: true,
    get: function() {
        return createInitialRouterState;
    }
});
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _filllazyitemstillleafwithhead = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)");
const _computechangedpath = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
function createInitialRouterState(param) {
    let { buildId, initialTree, children, initialCanonicalUrl, initialParallelRoutes, isServer, location, initialHead } = param;
    const cache = {
        status: _approutercontextsharedruntime.CacheStates.READY,
        data: null,
        subTreeData: children,
        // The cache gets seeded during the first render. `initialParallelRoutes` ensures the cache from the first render is there during the second render.
        parallelRoutes: isServer ? new Map() : initialParallelRoutes
    };
    // When the cache hasn't been seeded yet we fill the cache with the head.
    if (initialParallelRoutes === null || initialParallelRoutes.size === 0) {
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, initialTree, initialHead);
    }
    var _ref;
    return {
        buildId,
        tree: initialTree,
        cache,
        prefetchCache: new Map(),
        pushRef: {
            pendingPush: false,
            mpaNavigation: false,
            // First render needs to preserve the previous window.history.state
            // to avoid it being overwritten on navigation back/forward with MPA Navigation.
            preserveCustomHistoryState: true
        },
        focusAndScrollRef: {
            apply: false,
            onlyHashChange: false,
            hashFragment: null,
            segmentPaths: []
        },
        canonicalUrl: // This is safe to do as canonicalUrl can't be rendered, it's only used to control the history updates in the useEffect further down in this file.
        location ? (0, _createhreffromurl.createHrefFromUrl)(location) : initialCanonicalUrl,
        nextUrl: (_ref = (0, _computechangedpath.extractPathFromFlightRouterState)(initialTree) || (location == null ? void 0 : location.pathname)) != null ? _ref : null
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-initial-router-state.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleMutable", {
    enumerable: true,
    get: function() {
        return handleMutable;
    }
});
const _computechangedpath = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
function isNotUndefined(value) {
    return typeof value !== "undefined";
}
function handleMutable(state, mutable) {
    var _mutable_canonicalUrl;
    var _mutable_shouldScroll;
    // shouldScroll is true by default, can override to false.
    const shouldScroll = (_mutable_shouldScroll = mutable.shouldScroll) != null ? _mutable_shouldScroll : true;
    var _mutable_scrollableSegments, _computeChangedPath;
    return {
        buildId: state.buildId,
        // Set href.
        canonicalUrl: isNotUndefined(mutable.canonicalUrl) ? mutable.canonicalUrl === state.canonicalUrl ? state.canonicalUrl : mutable.canonicalUrl : state.canonicalUrl,
        pushRef: {
            pendingPush: isNotUndefined(mutable.pendingPush) ? mutable.pendingPush : state.pushRef.pendingPush,
            mpaNavigation: isNotUndefined(mutable.mpaNavigation) ? mutable.mpaNavigation : state.pushRef.mpaNavigation,
            preserveCustomHistoryState: isNotUndefined(mutable.preserveCustomHistoryState) ? mutable.preserveCustomHistoryState : state.pushRef.preserveCustomHistoryState
        },
        // All navigation requires scroll and focus management to trigger.
        focusAndScrollRef: {
            apply: shouldScroll ? isNotUndefined(mutable == null ? void 0 : mutable.scrollableSegments) ? true : state.focusAndScrollRef.apply : false,
            onlyHashChange: !!mutable.hashFragment && state.canonicalUrl.split("#", 1)[0] === ((_mutable_canonicalUrl = mutable.canonicalUrl) == null ? void 0 : _mutable_canonicalUrl.split("#", 1)[0]),
            hashFragment: shouldScroll ? mutable.hashFragment && mutable.hashFragment !== "" ? decodeURIComponent(mutable.hashFragment.slice(1)) : state.focusAndScrollRef.hashFragment : null,
            segmentPaths: shouldScroll ? (_mutable_scrollableSegments = mutable == null ? void 0 : mutable.scrollableSegments) != null ? _mutable_scrollableSegments : state.focusAndScrollRef.segmentPaths : []
        },
        // Apply cache.
        cache: mutable.cache ? mutable.cache : state.cache,
        prefetchCache: mutable.prefetchCache ? mutable.prefetchCache : state.prefetchCache,
        // Apply patched router state.
        tree: isNotUndefined(mutable.patchedTree) ? mutable.patchedTree : state.tree,
        nextUrl: isNotUndefined(mutable.patchedTree) ? (_computeChangedPath = (0, _computechangedpath.computeChangedPath)(state.tree, mutable.patchedTree)) != null ? _computeChangedPath : state.canonicalUrl : state.nextUrl
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-mutable.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNavigatingToNewRootLayout", {
    enumerable: true,
    get: function() {
        return isNavigatingToNewRootLayout;
    }
});
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    // Compare segments
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    if (currentTree[4]) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextTree[4];
    }
    // Current tree  didn't have its root layout here, must have changed.
    if (nextTree[4]) {
        return true;
    }
    // We can't assume it's `parallelRoutes.children` here in case the root layout is `app/@something/layout.js`
    // But it's not possible to be more than one parallelRoutes before the root layout is found
    // TODO-APP: change to traverse all parallel routes
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-navigating-to-new-root-layout.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "applyRouterStatePatchToTree", {
    enumerable: true,
    get: function() {
        return applyRouterStatePatchToTree;
    }
});
const _matchsegments = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
/**
 * Deep merge of the two router states. Parallel route keys are preserved if the patch doesn't have them.
 */ function applyPatch(initialTree, patchTree) {
    const [initialSegment, initialParallelRoutes] = initialTree;
    const [patchSegment, patchParallelRoutes] = patchTree;
    // if the applied patch segment is __DEFAULT__ then we can ignore it and return the initial tree
    // this is because the __DEFAULT__ segment is used as a placeholder on navigation
    if (patchSegment === "__DEFAULT__" && initialSegment !== "__DEFAULT__") {
        return initialTree;
    }
    if ((0, _matchsegments.matchSegment)(initialSegment, patchSegment)) {
        const newParallelRoutes = {};
        for(const key in initialParallelRoutes){
            const isInPatchTreeParallelRoutes = typeof patchParallelRoutes[key] !== "undefined";
            if (isInPatchTreeParallelRoutes) {
                newParallelRoutes[key] = applyPatch(initialParallelRoutes[key], patchParallelRoutes[key]);
            } else {
                newParallelRoutes[key] = initialParallelRoutes[key];
            }
        }
        for(const key in patchParallelRoutes){
            if (newParallelRoutes[key]) {
                continue;
            }
            newParallelRoutes[key] = patchParallelRoutes[key];
        }
        const tree = [
            initialSegment,
            newParallelRoutes
        ];
        if (initialTree[2]) {
            tree[2] = initialTree[2];
        }
        if (initialTree[3]) {
            tree[3] = initialTree[3];
        }
        if (initialTree[4]) {
            tree[4] = initialTree[4];
        }
        return tree;
    }
    return patchTree;
}
function applyRouterStatePatchToTree(flightSegmentPath, flightRouterState, treePatch) {
    const [segment, parallelRoutes, , , isRootLayout] = flightRouterState;
    // Root refresh
    if (flightSegmentPath.length === 1) {
        const tree = applyPatch(flightRouterState, treePatch);
        return tree;
    }
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Tree path returned from the server should always match up with the current tree in the browser
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        return null;
    }
    const lastSegment = flightSegmentPath.length === 2;
    let parallelRoutePatch;
    if (lastSegment) {
        parallelRoutePatch = applyPatch(parallelRoutes[parallelRouteKey], treePatch);
    } else {
        parallelRoutePatch = applyRouterStatePatchToTree(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey], treePatch);
        if (parallelRoutePatch === null) {
            return null;
        }
    }
    const tree = [
        flightSegmentPath[0],
        {
            ...parallelRoutes,
            [parallelRouteKey]: parallelRoutePatch
        }
    ];
    // Current segment is the root layout
    if (isRootLayout) {
        tree[4] = true;
    }
    return tree;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-router-state-patch-to-tree.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/promise-queue.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

/*
    This is a simple promise queue that allows you to limit the number of concurrent promises
    that are running at any given time. It's used to limit the number of concurrent
    prefetch requests that are being made to the server but could be used for other
    things as well.
*/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PromiseQueue", {
    enumerable: true,
    get: function() {
        return PromiseQueue;
    }
});
const _class_private_field_loose_base = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_class_private_field_loose_base.cjs [app-client] (ecmascript)");
const _class_private_field_loose_key = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_class_private_field_loose_key.cjs [app-client] (ecmascript)");
var _maxConcurrency = /*#__PURE__*/ _class_private_field_loose_key._("_maxConcurrency"), _runningCount = /*#__PURE__*/ _class_private_field_loose_key._("_runningCount"), _queue = /*#__PURE__*/ _class_private_field_loose_key._("_queue"), _processNext = /*#__PURE__*/ _class_private_field_loose_key._("_processNext");
class PromiseQueue {
    enqueue(promiseFn) {
        let taskResolve;
        let taskReject;
        const taskPromise = new Promise((resolve, reject)=>{
            taskResolve = resolve;
            taskReject = reject;
        });
        const task = async ()=>{
            try {
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]++;
                const result = await promiseFn();
                taskResolve(result);
            } catch (error) {
                taskReject(error);
            } finally{
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]--;
                _class_private_field_loose_base._(this, _processNext)[_processNext]();
            }
        };
        const enqueueResult = {
            promiseFn: taskPromise,
            task
        };
        // wonder if we should take a LIFO approach here
        _class_private_field_loose_base._(this, _queue)[_queue].push(enqueueResult);
        _class_private_field_loose_base._(this, _processNext)[_processNext]();
        return taskPromise;
    }
    bump(promiseFn) {
        const index = _class_private_field_loose_base._(this, _queue)[_queue].findIndex((item)=>item.promiseFn === promiseFn);
        if (index > -1) {
            const bumpedItem = _class_private_field_loose_base._(this, _queue)[_queue].splice(index, 1)[0];
            _class_private_field_loose_base._(this, _queue)[_queue].unshift(bumpedItem);
            _class_private_field_loose_base._(this, _processNext)[_processNext](true);
        }
    }
    constructor(maxConcurrency = 5){
        Object.defineProperty(this, _processNext, {
            value: processNext
        });
        Object.defineProperty(this, _maxConcurrency, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _runningCount, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _queue, {
            writable: true,
            value: void 0
        });
        _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] = maxConcurrency;
        _class_private_field_loose_base._(this, _runningCount)[_runningCount] = 0;
        _class_private_field_loose_base._(this, _queue)[_queue] = [];
    }
}
function processNext(forced) {
    if (forced === void 0) forced = false;
    if ((_class_private_field_loose_base._(this, _runningCount)[_runningCount] < _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] || forced) && _class_private_field_loose_base._(this, _queue)[_queue].length > 0) {
        var _class_private_field_loose_base__queue_shift;
        (_class_private_field_loose_base__queue_shift = _class_private_field_loose_base._(this, _queue)[_queue].shift()) == null ? void 0 : _class_private_field_loose_base__queue_shift.task();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=promise-queue.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/get-prefetch-cache-entry-status.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    PrefetchCacheEntryStatus: null,
    getPrefetchEntryCacheStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PrefetchCacheEntryStatus: function() {
        return PrefetchCacheEntryStatus;
    },
    getPrefetchEntryCacheStatus: function() {
        return getPrefetchEntryCacheStatus;
    }
});
const FIVE_MINUTES = 5 * 60 * 1000;
const THIRTY_SECONDS = 30 * 1000;
var PrefetchCacheEntryStatus;
(function(PrefetchCacheEntryStatus) {
    PrefetchCacheEntryStatus["fresh"] = "fresh";
    PrefetchCacheEntryStatus["reusable"] = "reusable";
    PrefetchCacheEntryStatus["expired"] = "expired";
    PrefetchCacheEntryStatus["stale"] = "stale";
})(PrefetchCacheEntryStatus || (PrefetchCacheEntryStatus = {}));
function getPrefetchEntryCacheStatus(param) {
    let { kind, prefetchTime, lastUsedTime } = param;
    // if the cache entry was prefetched or read less than 30s ago, then we want to re-use it
    if (Date.now() < (lastUsedTime != null ? lastUsedTime : prefetchTime) + THIRTY_SECONDS) {
        return lastUsedTime ? "reusable" : "fresh";
    }
    // if the cache entry was prefetched less than 5 mins ago, then we want to re-use only the loading state
    if (kind === "auto") {
        if (Date.now() < prefetchTime + FIVE_MINUTES) {
            return "stale";
        }
    }
    // if the cache entry was prefetched less than 5 mins ago and was a "full" prefetch, then we want to re-use it "full
    if (kind === "full") {
        if (Date.now() < prefetchTime + FIVE_MINUTES) {
            return "reusable";
        }
    }
    return "expired";
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-prefetch-cache-entry-status.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/prune-prefetch-cache.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "prunePrefetchCache", {
    enumerable: true,
    get: function() {
        return prunePrefetchCache;
    }
});
const _getprefetchcacheentrystatus = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/get-prefetch-cache-entry-status.js [app-client] (ecmascript)");
function prunePrefetchCache(prefetchCache) {
    for (const [href, prefetchCacheEntry] of prefetchCache){
        if ((0, _getprefetchcacheentrystatus.getPrefetchEntryCacheStatus)(prefetchCacheEntry) === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.expired) {
            prefetchCache.delete(href);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prune-prefetch-cache.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/prefetch-reducer.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    prefetchQueue: null,
    prefetchReducer: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    prefetchQueue: function() {
        return prefetchQueue;
    },
    prefetchReducer: function() {
        return prefetchReducer;
    }
});
const _createhreffromurl = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _fetchserverresponse = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _pruneprefetchcache = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/prune-prefetch-cache.js [app-client] (ecmascript)");
const _approuterheaders = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const _promisequeue = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/promise-queue.js [app-client] (ecmascript)");
const prefetchQueue = new _promisequeue.PromiseQueue(5);
function prefetchReducer(state, action) {
    // let's prune the prefetch cache before we do anything else
    (0, _pruneprefetchcache.prunePrefetchCache)(state.prefetchCache);
    const { url } = action;
    url.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    const href = (0, _createhreffromurl.createHrefFromUrl)(url, false);
    const cacheEntry = state.prefetchCache.get(href);
    if (cacheEntry) {
        /**
     * If the cache entry present was marked as temporary, it means that we prefetched it from the navigate reducer,
     * where we didn't have the prefetch intent. We want to update it to the new, more accurate, kind here.
     */ if (cacheEntry.kind === _routerreducertypes.PrefetchKind.TEMPORARY) {
            state.prefetchCache.set(href, {
                ...cacheEntry,
                kind: action.kind
            });
        }
        /**
     * if the prefetch action was a full prefetch and that the current cache entry wasn't one, we want to re-prefetch,
     * otherwise we can re-use the current cache entry
     **/ if (!(cacheEntry.kind === _routerreducertypes.PrefetchKind.AUTO && action.kind === _routerreducertypes.PrefetchKind.FULL)) {
            return state;
        }
    }
    // fetchServerResponse is intentionally not awaited so that it can be unwrapped in the navigate-reducer
    const serverResponse = prefetchQueue.enqueue(()=>(0, _fetchserverresponse.fetchServerResponse)(url, state.tree, state.nextUrl, state.buildId, action.kind));
    // Create new tree based on the flightSegmentPath and router state patch
    state.prefetchCache.set(href, {
        // Create new tree based on the flightSegmentPath and router state patch
        treeAtTimeOfPrefetch: state.tree,
        data: serverResponse,
        kind: action.kind,
        prefetchTime: Date.now(),
        lastUsedTime: null
    });
    return state;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch-reducer.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/invalidate-cache-by-router-state.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "invalidateCacheByRouterState", {
    enumerable: true,
    get: function() {
        return invalidateCacheByRouterState;
    }
});
const _createroutercachekey = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
function invalidateCacheByRouterState(newCache, existingCache, routerState) {
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const segmentForParallelRoute = routerState[1][key][0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
        if (existingParallelRoutesCacheNode) {
            let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
            parallelRouteCacheNode.delete(cacheKey);
            newCache.parallelRoutes.set(key, parallelRouteCacheNode);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-by-router-state.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/fill-cache-with-new-subtree-data.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fillCacheWithNewSubTreeData", {
    enumerable: true,
    get: function() {
        return fillCacheWithNewSubTreeData;
    }
});
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _invalidatecachebyrouterstate = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/invalidate-cache-by-router-state.js [app-client] (ecmascript)");
const _filllazyitemstillleafwithhead = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
function fillCacheWithNewSubTreeData(newCache, existingCache, flightDataPath, wasPrefetched) {
    const isLastEntry = flightDataPath.length <= 5;
    const [parallelRouteKey, segment] = flightDataPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childCacheNode = {
                status: _approutercontextsharedruntime.CacheStates.READY,
                data: null,
                subTreeData: flightDataPath[3],
                // Ensure segments other than the one we got data for are preserved.
                parallelRoutes: existingChildCacheNode ? new Map(existingChildCacheNode.parallelRoutes) : new Map()
            };
            if (existingChildCacheNode) {
                (0, _invalidatecachebyrouterstate.invalidateCacheByRouterState)(childCacheNode, existingChildCacheNode, flightDataPath[2]);
            }
            (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(childCacheNode, existingChildCacheNode, flightDataPath[2], flightDataPath[4], wasPrefetched);
            childSegmentMap.set(cacheKey, childCacheNode);
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    fillCacheWithNewSubTreeData(childCacheNode, existingChildCacheNode, flightDataPath.slice(2), wasPrefetched);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-new-subtree-data.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/apply-flight-data.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "applyFlightData", {
    enumerable: true,
    get: function() {
        return applyFlightData;
    }
});
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _filllazyitemstillleafwithhead = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)");
const _fillcachewithnewsubtreedata = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/fill-cache-with-new-subtree-data.js [app-client] (ecmascript)");
function applyFlightData(existingCache, cache, flightDataPath, wasPrefetched) {
    if (wasPrefetched === void 0) wasPrefetched = false;
    // The one before last item is the router state tree patch
    const [treePatch, subTreeData, head] = flightDataPath.slice(-3);
    // Handles case where prefetch only returns the router tree patch without rendered components.
    if (subTreeData === null) {
        return false;
    }
    if (flightDataPath.length === 3) {
        cache.status = _approutercontextsharedruntime.CacheStates.READY;
        cache.subTreeData = subTreeData;
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, existingCache, treePatch, head, wasPrefetched);
    } else {
        // Copy subTreeData for the root node of the cache.
        cache.status = _approutercontextsharedruntime.CacheStates.READY;
        cache.subTreeData = existingCache.subTreeData;
        cache.parallelRoutes = new Map(existingCache.parallelRoutes);
        // Create a copy of the existing cache with the subTreeData applied.
        (0, _fillcachewithnewsubtreedata.fillCacheWithNewSubTreeData)(cache, existingCache, flightDataPath, wasPrefetched);
    }
    return true;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-flight-data.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/should-hard-navigate.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "shouldHardNavigate", {
    enumerable: true,
    get: function() {
        return shouldHardNavigate;
    }
});
const _matchsegments = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
function shouldHardNavigate(flightSegmentPath, flightRouterState) {
    const [segment, parallelRoutes] = flightRouterState;
    // TODO-APP: Check if `as` can be replaced.
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Check if current segment matches the existing segment.
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        // If dynamic parameter in tree doesn't match up with segment path a hard navigation is triggered.
        if (Array.isArray(currentSegment)) {
            return true;
        }
        // If the existing segment did not match soft navigation is triggered.
        return false;
    }
    const lastSegment = flightSegmentPath.length <= 2;
    if (lastSegment) {
        return false;
    }
    return shouldHardNavigate(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey]);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=should-hard-navigate.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/fill-cache-with-data-property.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fillCacheWithDataProperty", {
    enumerable: true,
    get: function() {
        return fillCacheWithDataProperty;
    }
});
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
function fillCacheWithDataProperty(newCache, existingCache, flightSegmentPath, fetchResponse) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap == null ? void 0 : existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    // In case of last segment start off the fetch at this level and don't copy further down.
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childSegmentMap.set(cacheKey, {
                status: _approutercontextsharedruntime.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Start fetch in the place where the existing cache doesn't have the data yet.
        if (!childCacheNode) {
            childSegmentMap.set(cacheKey, {
                status: _approutercontextsharedruntime.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    return fillCacheWithDataProperty(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2), fetchResponse);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-data-property.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/invalidate-cache-below-flight-segmentpath.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "invalidateCacheBelowFlightSegmentPath", {
    enumerable: true,
    get: function() {
        return invalidateCacheBelowFlightSegmentPath;
    }
});
const _createroutercachekey = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
function invalidateCacheBelowFlightSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    // In case of last entry don't copy further down.
    if (isLastEntry) {
        childSegmentMap.delete(cacheKey);
        return;
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    invalidateCacheBelowFlightSegmentPath(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-below-flight-segmentpath.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    handleExternalUrl: null,
    navigateReducer: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleExternalUrl: function() {
        return handleExternalUrl;
    },
    navigateReducer: function() {
        return navigateReducer;
    }
});
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _fetchserverresponse = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _invalidatecachebelowflightsegmentpath = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/invalidate-cache-below-flight-segmentpath.js [app-client] (ecmascript)");
const _fillcachewithdataproperty = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/fill-cache-with-data-property.js [app-client] (ecmascript)");
const _applyrouterstatepatchtotree = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js [app-client] (ecmascript)");
const _shouldhardnavigate = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/should-hard-navigate.js [app-client] (ecmascript)");
const _isnavigatingtonewrootlayout = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _handlemutable = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)");
const _applyflightdata = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/apply-flight-data.js [app-client] (ecmascript)");
const _getprefetchcacheentrystatus = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/get-prefetch-cache-entry-status.js [app-client] (ecmascript)");
const _pruneprefetchcache = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/prune-prefetch-cache.js [app-client] (ecmascript)");
const _prefetchreducer = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/prefetch-reducer.js [app-client] (ecmascript)");
function handleExternalUrl(state, mutable, url, pendingPush) {
    mutable.previousTree = state.tree;
    mutable.mpaNavigation = true;
    mutable.canonicalUrl = url;
    mutable.pendingPush = pendingPush;
    mutable.scrollableSegments = undefined;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function generateSegmentsFromPatch(flightRouterPatch) {
    const segments = [];
    const [segment, parallelRoutes] = flightRouterPatch;
    if (Object.keys(parallelRoutes).length === 0) {
        return [
            [
                segment
            ]
        ];
    }
    for (const [parallelRouteKey, parallelRoute] of Object.entries(parallelRoutes)){
        for (const childSegment of generateSegmentsFromPatch(parallelRoute)){
            // If the segment is empty, it means we are at the root of the tree
            if (segment === "") {
                segments.push([
                    parallelRouteKey,
                    ...childSegment
                ]);
            } else {
                segments.push([
                    segment,
                    parallelRouteKey,
                    ...childSegment
                ]);
            }
        }
    }
    return segments;
}
function addRefetchToLeafSegments(newCache, currentCache, flightSegmentPath, treePatch, data) {
    let appliedPatch = false;
    newCache.status = _approutercontextsharedruntime.CacheStates.READY;
    newCache.subTreeData = currentCache.subTreeData;
    newCache.parallelRoutes = new Map(currentCache.parallelRoutes);
    const segmentPathsToFill = generateSegmentsFromPatch(treePatch).map((segment)=>[
            ...flightSegmentPath,
            ...segment
        ]);
    for (const segmentPaths of segmentPathsToFill){
        (0, _fillcachewithdataproperty.fillCacheWithDataProperty)(newCache, currentCache, segmentPaths, data);
        appliedPatch = true;
    }
    return appliedPatch;
}
function navigateReducer(state, action) {
    const { url, isExternalUrl, navigateType, cache, mutable, shouldScroll } = action;
    const { hash } = url;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    const pendingPush = navigateType === "push";
    // we want to prune the prefetch cache on every navigation to avoid it growing too large
    (0, _pruneprefetchcache.prunePrefetchCache)(state.prefetchCache);
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    mutable.preserveCustomHistoryState = false;
    if (isExternalUrl) {
        return handleExternalUrl(state, mutable, url.toString(), pendingPush);
    }
    let prefetchValues = state.prefetchCache.get((0, _createhreffromurl.createHrefFromUrl)(url, false));
    // If we don't have a prefetch value, we need to create one
    if (!prefetchValues) {
        const data = (0, _fetchserverresponse.fetchServerResponse)(url, state.tree, state.nextUrl, state.buildId, // in order to simulate the behavior of the prefetch cache
        ("TURBOPACK compile-time truthy", 1) ? _routerreducertypes.PrefetchKind.AUTO : ("TURBOPACK unreachable", undefined));
        const newPrefetchValue = {
            data,
            // this will make sure that the entry will be discarded after 30s
            kind: ("TURBOPACK compile-time truthy", 1) ? _routerreducertypes.PrefetchKind.AUTO : ("TURBOPACK unreachable", undefined),
            prefetchTime: Date.now(),
            treeAtTimeOfPrefetch: state.tree,
            lastUsedTime: null
        };
        state.prefetchCache.set((0, _createhreffromurl.createHrefFromUrl)(url, false), newPrefetchValue);
        prefetchValues = newPrefetchValue;
    }
    const prefetchEntryCacheStatus = (0, _getprefetchcacheentrystatus.getPrefetchEntryCacheStatus)(prefetchValues);
    // The one before last item is the router state tree patch
    const { treeAtTimeOfPrefetch, data } = prefetchValues;
    _prefetchreducer.prefetchQueue.bump(data);
    return data.then((param)=>{
        let [flightData, canonicalUrlOverride, postponed] = param;
        // we only want to mark this once
        if (prefetchValues && !prefetchValues.lastUsedTime) {
            // important: we should only mark the cache node as dirty after we unsuspend from the call above
            prefetchValues.lastUsedTime = Date.now();
        }
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            return handleExternalUrl(state, mutable, flightData, pendingPush);
        }
        let currentTree = state.tree;
        let currentCache = state.cache;
        let scrollableSegments = [];
        for (const flightDataPath of flightData){
            const flightSegmentPath = flightDataPath.slice(0, -4);
            // The one before last item is the router state tree patch
            const treePatch = flightDataPath.slice(-3)[0];
            // TODO-APP: remove ''
            const flightSegmentPathWithLeadingEmpty = [
                "",
                ...flightSegmentPath
            ];
            // Create new tree based on the flightSegmentPath and router state patch
            let newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, currentTree, treePatch);
            // If the tree patch can't be applied to the current tree then we use the tree at time of prefetch
            // TODO-APP: This should instead fill in the missing pieces in `currentTree` with the data from `treeAtTimeOfPrefetch`, then apply the patch.
            if (newTree === null) {
                newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, treeAtTimeOfPrefetch, treePatch);
            }
            if (newTree !== null) {
                if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                    return handleExternalUrl(state, mutable, href, pendingPush);
                }
                let applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath, (prefetchValues == null ? void 0 : prefetchValues.kind) === "auto" && prefetchEntryCacheStatus === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.reusable);
                if (!applied && prefetchEntryCacheStatus === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.stale || // TODO-APP: If the prefetch was postponed, we don't want to apply it
                // until we land router changes to handle the postponed case.
                postponed) {
                    applied = addRefetchToLeafSegments(cache, currentCache, flightSegmentPath, treePatch, ()=>(0, _fetchserverresponse.fetchServerResponse)(url, currentTree, state.nextUrl, state.buildId));
                }
                const hardNavigate = (0, _shouldhardnavigate.shouldHardNavigate)(flightSegmentPathWithLeadingEmpty, currentTree);
                if (hardNavigate) {
                    cache.status = _approutercontextsharedruntime.CacheStates.READY;
                    // Copy subTreeData for the root node of the cache.
                    cache.subTreeData = currentCache.subTreeData;
                    (0, _invalidatecachebelowflightsegmentpath.invalidateCacheBelowFlightSegmentPath)(cache, currentCache, flightSegmentPath);
                    // Ensure the existing cache value is used when the cache was not invalidated.
                    mutable.cache = cache;
                } else if (applied) {
                    mutable.cache = cache;
                }
                currentCache = cache;
                currentTree = newTree;
                for (const subSegment of generateSegmentsFromPatch(treePatch)){
                    const scrollableSegmentPath = [
                        ...flightSegmentPath,
                        ...subSegment
                    ];
                    // Filter out the __DEFAULT__ paths as they shouldn't be scrolled to in this case.
                    if (scrollableSegmentPath[scrollableSegmentPath.length - 1] !== "__DEFAULT__") {
                        scrollableSegments.push(scrollableSegmentPath);
                    }
                }
            }
        }
        mutable.previousTree = state.tree;
        mutable.patchedTree = currentTree;
        mutable.canonicalUrl = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : href;
        mutable.pendingPush = pendingPush;
        mutable.scrollableSegments = scrollableSegments;
        mutable.hashFragment = hash;
        mutable.shouldScroll = shouldScroll;
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, ()=>state);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigate-reducer.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/server-action-reducer.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "serverActionReducer", {
    enumerable: true,
    get: function() {
        return serverActionReducer;
    }
});
const _appcallserver = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _approuterheaders = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _applyrouterstatepatchtotree = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js [app-client] (ecmascript)");
const _isnavigatingtonewrootlayout = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _handlemutable = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)");
const _filllazyitemstillleafwithhead = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)");
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { createFromFetch } from 'react-server-dom-webpack/client'
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { encodeReply } from 'react-server-dom-webpack/client'
const { createFromFetch, encodeReply } = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)");
async function fetchServerAction(state, param) {
    let { actionId, actionArgs } = param;
    const body = await encodeReply(actionArgs);
    const res = await fetch("", {
        method: "POST",
        headers: {
            Accept: _approuterheaders.RSC_CONTENT_TYPE_HEADER,
            [_approuterheaders.ACTION]: actionId,
            [_approuterheaders.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(state.tree)),
            ...("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : {},
            ...state.nextUrl ? {
                [_approuterheaders.NEXT_URL]: state.nextUrl
            } : {}
        },
        body
    });
    const location = res.headers.get("x-action-redirect");
    let revalidatedParts;
    try {
        const revalidatedHeader = JSON.parse(res.headers.get("x-action-revalidated") || "[[],0,0]");
        revalidatedParts = {
            paths: revalidatedHeader[0] || [],
            tag: !!revalidatedHeader[1],
            cookie: revalidatedHeader[2]
        };
    } catch (e) {
        revalidatedParts = {
            paths: [],
            tag: false,
            cookie: false
        };
    }
    const redirectLocation = location ? new URL((0, _addbasepath.addBasePath)(location), new URL(state.canonicalUrl, window.location.href)) : undefined;
    let isFlightResponse = res.headers.get("content-type") === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
    if (isFlightResponse) {
        const response = await createFromFetch(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        if (location) {
            // if it was a redirection, then result is just a regular RSC payload
            const [, actionFlightData] = response != null ? response : [];
            return {
                actionFlightData: actionFlightData,
                redirectLocation,
                revalidatedParts
            };
        }
        // otherwise it's a tuple of [actionResult, actionFlightData]
        const [actionResult, [, actionFlightData]] = response != null ? response : [];
        return {
            actionResult,
            actionFlightData,
            redirectLocation,
            revalidatedParts
        };
    }
    return {
        redirectLocation,
        revalidatedParts
    };
}
function serverActionReducer(state, action) {
    const { mutable, cache, resolve, reject } = action;
    const href = state.canonicalUrl;
    let currentTree = state.tree;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(currentTree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    mutable.preserveCustomHistoryState = false;
    mutable.inFlightServerAction = fetchServerAction(state, action);
    // suspends until the server action is resolved.
    return mutable.inFlightServerAction.then((param)=>{
        let { actionResult, actionFlightData: flightData, redirectLocation } = param;
        // Make sure the redirection is a push instead of a replace.
        // Issue: https://github.com/vercel/next.js/issues/53911
        if (redirectLocation) {
            state.pushRef.pendingPush = true;
            mutable.pendingPush = true;
        }
        mutable.previousTree = state.tree;
        if (!flightData) {
            if (!mutable.actionResultResolved) {
                resolve(actionResult);
                mutable.actionResultResolved = true;
            }
            // If there is a redirect but no flight data we need to do a mpaNavigation.
            if (redirectLocation) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, redirectLocation.href, state.pushRef.pendingPush);
            }
            return state;
        }
        if (typeof flightData === "string") {
            // Handle case when navigating to page in `pages` from `app`
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
        }
        // Remove cache.data as it has been resolved at this point.
        mutable.inFlightServerAction = null;
        for (const flightDataPath of flightData){
            // FlightDataPath with more than two items means unexpected Flight data was returned
            if (flightDataPath.length !== 3) {
                // TODO-APP: handle this case better
                console.log("SERVER ACTION APPLY FAILED");
                return state;
            }
            // Given the path can only have two items the items are only the router state and subTreeData for the root.
            const [treePatch] = flightDataPath;
            const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
                ""
            ], currentTree, treePatch);
            if (newTree === null) {
                throw new Error("SEGMENT MISMATCH");
            }
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
            }
            // The one before last item is the router state tree patch
            const [subTreeData, head] = flightDataPath.slice(-2);
            // Handles case where prefetch only returns the router tree patch without rendered components.
            if (subTreeData !== null) {
                cache.status = _approutercontextsharedruntime.CacheStates.READY;
                cache.subTreeData = subTreeData;
                (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, treePatch, head);
                mutable.cache = cache;
                mutable.prefetchCache = new Map();
            }
            mutable.previousTree = currentTree;
            mutable.patchedTree = newTree;
            mutable.canonicalUrl = href;
            currentTree = newTree;
        }
        if (redirectLocation) {
            const newHref = (0, _createhreffromurl.createHrefFromUrl)(redirectLocation, false);
            mutable.canonicalUrl = newHref;
        }
        if (!mutable.actionResultResolved) {
            resolve(actionResult);
            mutable.actionResultResolved = true;
        }
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, (e)=>{
        if (e.status === "rejected") {
            if (!mutable.actionResultResolved) {
                reject(e.reason);
                mutable.actionResultResolved = true;
            }
            // When the server action is rejected we don't update the state and instead call the reject handler of the promise.
            return state;
        }
        throw e;
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-action-reducer.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/fast-refresh-reducer.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fastRefreshReducer", {
    enumerable: true,
    get: function() {
        return fastRefreshReducer;
    }
});
const _fetchserverresponse = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _applyrouterstatepatchtotree = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js [app-client] (ecmascript)");
const _isnavigatingtonewrootlayout = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _handlemutable = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)");
const _applyflightdata = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/apply-flight-data.js [app-client] (ecmascript)");
// A version of refresh reducer that keeps the cache around instead of wiping all of it.
function fastRefreshReducerImpl(state, action) {
    const { cache, mutable, origin } = action;
    const href = state.canonicalUrl;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    mutable.preserveCustomHistoryState = false;
    if (!cache.data) {
        // TODO-APP: verify that `href` is not an external url.
        // Fetch data from the root of the tree.
        cache.data = (0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
            state.tree[0],
            state.tree[1],
            state.tree[2],
            "refetch"
        ], state.nextUrl, state.buildId);
    }
    return cache.data.then((param)=>{
        let [flightData, canonicalUrlOverride] = param;
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
        }
        // Remove cache.data as it has been resolved at this point.
        cache.data = null;
        let currentTree = state.tree;
        let currentCache = state.cache;
        for (const flightDataPath of flightData){
            // FlightDataPath with more than two items means unexpected Flight data was returned
            if (flightDataPath.length !== 3) {
                // TODO-APP: handle this case better
                console.log("REFRESH FAILED");
                return state;
            }
            // Given the path can only have two items the items are only the router state and subTreeData for the root.
            const [treePatch] = flightDataPath;
            const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
                ""
            ], currentTree, treePatch);
            if (newTree === null) {
                throw new Error("SEGMENT MISMATCH");
            }
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
            }
            const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
            if (canonicalUrlOverride) {
                mutable.canonicalUrl = canonicalUrlOverrideHref;
            }
            const applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
            if (applied) {
                mutable.cache = cache;
                currentCache = cache;
            }
            mutable.previousTree = currentTree;
            mutable.patchedTree = newTree;
            mutable.canonicalUrl = href;
            currentTree = newTree;
        }
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, ()=>state);
}
function fastRefreshReducerNoop(state, _action) {
    return state;
}
const fastRefreshReducer = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : fastRefreshReducerImpl;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fast-refresh-reducer.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "refreshReducer", {
    enumerable: true,
    get: function() {
        return refreshReducer;
    }
});
const _fetchserverresponse = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _applyrouterstatepatchtotree = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js [app-client] (ecmascript)");
const _isnavigatingtonewrootlayout = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _handlemutable = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _filllazyitemstillleafwithhead = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)");
function refreshReducer(state, action) {
    const { cache, mutable, origin } = action;
    const href = state.canonicalUrl;
    let currentTree = state.tree;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(currentTree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    mutable.preserveCustomHistoryState = false;
    if (!cache.data) {
        // TODO-APP: verify that `href` is not an external url.
        // Fetch data from the root of the tree.
        cache.data = (0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
            currentTree[0],
            currentTree[1],
            currentTree[2],
            "refetch"
        ], state.nextUrl, state.buildId);
    }
    return cache.data.then((param)=>{
        let [flightData, canonicalUrlOverride] = param;
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
        }
        // Remove cache.data as it has been resolved at this point.
        cache.data = null;
        for (const flightDataPath of flightData){
            // FlightDataPath with more than two items means unexpected Flight data was returned
            if (flightDataPath.length !== 3) {
                // TODO-APP: handle this case better
                console.log("REFRESH FAILED");
                return state;
            }
            // Given the path can only have two items the items are only the router state and subTreeData for the root.
            const [treePatch] = flightDataPath;
            const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
                ""
            ], currentTree, treePatch);
            if (newTree === null) {
                throw new Error("SEGMENT MISMATCH");
            }
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
            }
            const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
            if (canonicalUrlOverride) {
                mutable.canonicalUrl = canonicalUrlOverrideHref;
            }
            // The one before last item is the router state tree patch
            const [subTreeData, head] = flightDataPath.slice(-2);
            // Handles case where prefetch only returns the router tree patch without rendered components.
            if (subTreeData !== null) {
                cache.status = _approutercontextsharedruntime.CacheStates.READY;
                cache.subTreeData = subTreeData;
                (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, treePatch, head);
                mutable.cache = cache;
                mutable.prefetchCache = new Map();
            }
            mutable.previousTree = currentTree;
            mutable.patchedTree = newTree;
            mutable.canonicalUrl = href;
            currentTree = newTree;
        }
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, ()=>state);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refresh-reducer.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/restore-reducer.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "restoreReducer", {
    enumerable: true,
    get: function() {
        return restoreReducer;
    }
});
const _createhreffromurl = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
function restoreReducer(state, action) {
    const { url, tree } = action;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    return {
        buildId: state.buildId,
        // Set canonical url
        canonicalUrl: href,
        pushRef: {
            pendingPush: false,
            mpaNavigation: false,
            // Ensures that the custom history state that was set is preserved when applying this update.
            preserveCustomHistoryState: true
        },
        focusAndScrollRef: state.focusAndScrollRef,
        cache: state.cache,
        prefetchCache: state.prefetchCache,
        // Restore provided tree
        tree: tree,
        nextUrl: url.pathname
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=restore-reducer.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/server-patch-reducer.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "serverPatchReducer", {
    enumerable: true,
    get: function() {
        return serverPatchReducer;
    }
});
const _createhreffromurl = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _applyrouterstatepatchtotree = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js [app-client] (ecmascript)");
const _isnavigatingtonewrootlayout = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _applyflightdata = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/apply-flight-data.js [app-client] (ecmascript)");
const _handlemutable = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)");
function serverPatchReducer(state, action) {
    const { flightData, previousTree, overrideCanonicalUrl, cache, mutable } = action;
    const isForCurrentTree = JSON.stringify(previousTree) === JSON.stringify(state.tree);
    // When a fetch is slow to resolve it could be that you navigated away while the request was happening or before the reducer runs.
    // In that case opt-out of applying the patch given that the data could be stale.
    if (!isForCurrentTree) {
        // TODO-APP: Handle tree mismatch
        console.log("TREE MISMATCH");
        // Keep everything as-is.
        return state;
    }
    if (mutable.previousTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    mutable.preserveCustomHistoryState = false;
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    let currentTree = state.tree;
    let currentCache = state.cache;
    for (const flightDataPath of flightData){
        // Slices off the last segment (which is at -4) as it doesn't exist in the tree yet
        const flightSegmentPath = flightDataPath.slice(0, -4);
        const [treePatch] = flightDataPath.slice(-3, -2);
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            "",
            ...flightSegmentPath
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, state.canonicalUrl, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = overrideCanonicalUrl ? (0, _createhreffromurl.createHrefFromUrl)(overrideCanonicalUrl) : undefined;
        if (canonicalUrlOverrideHref) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.cache = cache;
        currentCache = cache;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-patch-reducer.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/router-reducer.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "reducer", {
    enumerable: true,
    get: function() {
        return reducer;
    }
});
const _routerreducertypes = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _serverpatchreducer = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/server-patch-reducer.js [app-client] (ecmascript)");
const _restorereducer = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/restore-reducer.js [app-client] (ecmascript)");
const _refreshreducer = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js [app-client] (ecmascript)");
const _prefetchreducer = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/prefetch-reducer.js [app-client] (ecmascript)");
const _fastrefreshreducer = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/fast-refresh-reducer.js [app-client] (ecmascript)");
const _serveractionreducer = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/server-action-reducer.js [app-client] (ecmascript)");
/**
 * Reducer that handles the app-router state updates.
 */ function clientReducer(state, action) {
    switch(action.type){
        case _routerreducertypes.ACTION_NAVIGATE:
            {
                return (0, _navigatereducer.navigateReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_PATCH:
            {
                return (0, _serverpatchreducer.serverPatchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_RESTORE:
            {
                return (0, _restorereducer.restoreReducer)(state, action);
            }
        case _routerreducertypes.ACTION_REFRESH:
            {
                return (0, _refreshreducer.refreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_FAST_REFRESH:
            {
                return (0, _fastrefreshreducer.fastRefreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_PREFETCH:
            {
                return (0, _prefetchreducer.prefetchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_ACTION:
            {
                return (0, _serveractionreducer.serverActionReducer)(state, action);
            }
        // This case should never be hit as dispatch is strongly typed.
        default:
            throw new Error("Unknown action");
    }
}
function serverReducer(state, _action) {
    return state;
}
const reducer = typeof window === "undefined" ? serverReducer : clientReducer;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/use-reducer-with-devtools.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    useUnwrapState: null,
    useReducerWithReduxDevtools: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    useUnwrapState: function() {
        return useUnwrapState;
    },
    useReducerWithReduxDevtools: function() {
        return useReducerWithReduxDevtools;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _routerreducertypes = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _actionqueue = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/action-queue.js [app-client] (ecmascript)");
function normalizeRouterState(val) {
    if (val instanceof Map) {
        const obj = {};
        for (const [key, value] of val.entries()){
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value._bundlerConfig) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (typeof val === "object" && val !== null) {
        const obj = {};
        for(const key in val){
            const value = val[key];
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value.hasOwnProperty("_bundlerConfig")) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (Array.isArray(val)) {
        return val.map(normalizeRouterState);
    }
    return val;
}
function useUnwrapState(state) {
    // reducer actions can be async, so sometimes we need to suspend until the state is resolved
    if ((0, _routerreducertypes.isThenable)(state)) {
        const result = (0, _react.use)(state);
        return result;
    }
    return state;
}
function useReducerWithReduxDevtoolsNoop(initialState) {
    return [
        initialState,
        ()=>{},
        ()=>{}
    ];
}
function useReducerWithReduxDevtoolsImpl(initialState) {
    const [state, setState] = _react.default.useState(initialState);
    const actionQueue = (0, _react.useContext)(_actionqueue.ActionQueueContext);
    if (!actionQueue) {
        throw new Error("Invariant: Missing ActionQueueContext");
    }
    const devtoolsConnectionRef = (0, _react.useRef)();
    const enabledRef = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        if (devtoolsConnectionRef.current || enabledRef.current === false) {
            return;
        }
        if (enabledRef.current === undefined && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined") {
            enabledRef.current = false;
            return;
        }
        devtoolsConnectionRef.current = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
            instanceId: 8000,
            name: "next-router"
        });
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.init(normalizeRouterState(initialState));
            if (actionQueue) {
                actionQueue.devToolsInstance = devtoolsConnectionRef.current;
            }
        }
        return ()=>{
            devtoolsConnectionRef.current = undefined;
        };
    }, [
        initialState,
        actionQueue
    ]);
    const dispatch = (0, _react.useCallback)((action)=>{
        if (!actionQueue.state) {
            // we lazy initialize the mutable action queue state since the data needed
            // to generate the state is not available when the actionQueue context is created
            actionQueue.state = initialState;
        }
        actionQueue.dispatch(action, setState);
    }, [
        actionQueue,
        initialState
    ]);
    // Sync is called after a state update in the HistoryUpdater,
    // for debugging purposes. Since the reducer state may be a Promise,
    // we let the app router use() it and sync on the resolved value if
    // something changed.
    // Using the `state` here would be referentially unstable and cause
    // undesirable re-renders and history updates.
    const sync = (0, _react.useCallback)((resolvedState)=>{
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.send({
                type: "RENDER_SYNC"
            }, normalizeRouterState(resolvedState));
        }
    }, []);
    return [
        state,
        dispatch,
        sync
    ];
}
const useReducerWithReduxDevtools = typeof window !== "undefined" ? useReducerWithReduxDevtoolsImpl : useReducerWithReduxDevtoolsNoop;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-reducer-with-devtools.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getServerActionDispatcher: null,
    urlToUrlWithoutFlightMarker: null,
    createEmptyCacheNode: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getServerActionDispatcher: function() {
        return getServerActionDispatcher;
    },
    urlToUrlWithoutFlightMarker: function() {
        return urlToUrlWithoutFlightMarker;
    },
    createEmptyCacheNode: function() {
        return createEmptyCacheNode;
    },
    default: function() {
        return AppRouter;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _usereducerwithdevtools = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/use-reducer-with-devtools.js [app-client] (ecmascript)");
const _errorboundary = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _createinitialrouterstate = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-initial-router-state.js [app-client] (ecmascript)");
const _isbot = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/is-bot.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _approuterannouncer = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/app-router-announcer.js [app-client] (ecmascript)");
const _redirectboundary = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
const _findheadincache = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/find-head-in-cache.js [app-client] (ecmascript)");
const _infinitepromise = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/infinite-promise.js [app-client] (ecmascript)");
const _approuterheaders = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const _removebasepath = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/remove-base-path.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
const isServer = typeof window === "undefined";
// Ensure the initialParallelRoutes are not combined because of double-rendering in the browser with Strict Mode.
let initialParallelRoutes = isServer ? null : new Map();
let globalServerActionDispatcher = null;
function getServerActionDispatcher() {
    return globalServerActionDispatcher;
}
const globalMutable = {};
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url, location.origin);
    urlWithoutFlightParameters.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return urlWithoutFlightParameters;
}
function isExternalURL(url) {
    return url.origin !== window.location.origin;
}
function HistoryUpdater(param) {
    let { appRouterState, sync } = param;
    (0, _react.useInsertionEffect)(()=>{
        const { tree, pushRef, canonicalUrl } = appRouterState;
        const historyState = {
            ...("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : {},
            // Identifier is shortened intentionally.
            // __NA is used to identify if the history entry can be handled by the app-router.
            // __N is used to identify if the history entry can be handled by the old router.
            __NA: true,
            __PRIVATE_NEXTJS_INTERNALS_TREE: tree
        };
        if (pushRef.pendingPush && // Skip pushing an additional history entry if the canonicalUrl is the same as the current url.
        // This mirrors the browser behavior for normal navigation.
        (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== canonicalUrl) {
            // This intentionally mutates React state, pushRef is overwritten to ensure additional push/replace calls do not trigger an additional history entry.
            pushRef.pendingPush = false;
            if (originalPushState) {
                originalPushState(historyState, "", canonicalUrl);
            }
        } else {
            if (originalReplaceState) {
                originalReplaceState(historyState, "", canonicalUrl);
            }
        }
        sync(appRouterState);
    }, [
        appRouterState,
        sync
    ]);
    return null;
}
const createEmptyCacheNode = ()=>({
        status: _approutercontextsharedruntime.CacheStates.LAZY_INITIALIZED,
        data: null,
        subTreeData: null,
        parallelRoutes: new Map()
    });
function useServerActionDispatcher(dispatch) {
    const serverActionDispatcher = (0, _react.useCallback)((actionPayload)=>{
        (0, _react.startTransition)(()=>{
            dispatch({
                ...actionPayload,
                type: _routerreducertypes.ACTION_SERVER_ACTION,
                mutable: {},
                cache: createEmptyCacheNode()
            });
        });
    }, [
        dispatch
    ]);
    globalServerActionDispatcher = serverActionDispatcher;
}
/**
 * Server response that only patches the cache and tree.
 */ function useChangeByServerResponse(dispatch) {
    return (0, _react.useCallback)((previousTree, flightData, overrideCanonicalUrl)=>{
        (0, _react.startTransition)(()=>{
            dispatch({
                type: _routerreducertypes.ACTION_SERVER_PATCH,
                flightData,
                previousTree,
                overrideCanonicalUrl,
                cache: createEmptyCacheNode(),
                mutable: {}
            });
        });
    }, [
        dispatch
    ]);
}
function useNavigate(dispatch) {
    return (0, _react.useCallback)((href, navigateType, shouldScroll)=>{
        const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
        return dispatch({
            type: _routerreducertypes.ACTION_NAVIGATE,
            url,
            isExternalUrl: isExternalURL(url),
            locationSearch: location.search,
            shouldScroll: shouldScroll != null ? shouldScroll : true,
            navigateType,
            cache: createEmptyCacheNode(),
            mutable: {}
        });
    }, [
        dispatch
    ]);
}
const originalPushState = typeof window !== "undefined" ? window.history.pushState.bind(window.history) : null;
const originalReplaceState = typeof window !== "undefined" ? window.history.replaceState.bind(window.history) : null;
function copyNextJsInternalHistoryState(data) {
    const currentState = window.history.state;
    const __NA = currentState == null ? void 0 : currentState.__NA;
    if (__NA) {
        data.__NA = __NA;
    }
    const __PRIVATE_NEXTJS_INTERNALS_TREE = currentState == null ? void 0 : currentState.__PRIVATE_NEXTJS_INTERNALS_TREE;
    if (__PRIVATE_NEXTJS_INTERNALS_TREE) {
        data.__PRIVATE_NEXTJS_INTERNALS_TREE = __PRIVATE_NEXTJS_INTERNALS_TREE;
    }
}
/**
 * The global router that wraps the application components.
 */ function Router(param) {
    let { buildId, initialHead, initialTree, initialCanonicalUrl, children, assetPrefix } = param;
    const initialState = (0, _react.useMemo)(()=>(0, _createinitialrouterstate.createInitialRouterState)({
            buildId,
            children,
            initialCanonicalUrl,
            initialTree,
            initialParallelRoutes,
            isServer,
            location: !isServer ? window.location : null,
            initialHead
        }), [
        buildId,
        children,
        initialCanonicalUrl,
        initialTree,
        initialHead
    ]);
    const [reducerState, dispatch, sync] = (0, _usereducerwithdevtools.useReducerWithReduxDevtools)(initialState);
    (0, _react.useEffect)(()=>{
        // Ensure initialParallelRoutes is cleaned up from memory once it's used.
        initialParallelRoutes = null;
    }, []);
    const { canonicalUrl } = (0, _usereducerwithdevtools.useUnwrapState)(reducerState);
    // Add memoized pathname/query for useSearchParams and usePathname.
    const { searchParams, pathname } = (0, _react.useMemo)(()=>{
        const url = new URL(canonicalUrl, typeof window === "undefined" ? "http://n" : window.location.href);
        return {
            // This is turned into a readonly class in `useSearchParams`
            searchParams: url.searchParams,
            pathname: (0, _hasbasepath.hasBasePath)(url.pathname) ? (0, _removebasepath.removeBasePath)(url.pathname) : url.pathname
        };
    }, [
        canonicalUrl
    ]);
    const changeByServerResponse = useChangeByServerResponse(dispatch);
    const navigate = useNavigate(dispatch);
    useServerActionDispatcher(dispatch);
    /**
   * The app router that is exposed through `useRouter`. It's only concerned with dispatching actions to the reducer, does not hold state.
   */ const appRouter = (0, _react.useMemo)(()=>{
        const routerInstance = {
            back: ()=>window.history.back(),
            forward: ()=>window.history.forward(),
            prefetch: (href, options)=>{
                // Don't prefetch for bots as they don't navigate.
                // Don't prefetch during development (improves compilation performance)
                if ((0, _isbot.isBot)(window.navigator.userAgent) || ("TURBOPACK compile-time value", "development") === "development") {
                    return;
                }
                const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
                // External urls can't be prefetched in the same way.
                if (isExternalURL(url)) {
                    return;
                }
                (0, _react.startTransition)(()=>{
                    var _options_kind;
                    dispatch({
                        type: _routerreducertypes.ACTION_PREFETCH,
                        url,
                        kind: (_options_kind = options == null ? void 0 : options.kind) != null ? _options_kind : _routerreducertypes.PrefetchKind.FULL
                    });
                });
            },
            replace: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, "replace", (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            push: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, "push", (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            refresh: ()=>{
                (0, _react.startTransition)(()=>{
                    dispatch({
                        type: _routerreducertypes.ACTION_REFRESH,
                        cache: createEmptyCacheNode(),
                        mutable: {},
                        origin: window.location.origin
                    });
                });
            },
            // @ts-ignore we don't want to expose this method at all
            fastRefresh: ()=>{
                if ("TURBOPACK compile-time falsy", 0) {
                    "TURBOPACK unreachable";
                } else {
                    (0, _react.startTransition)(()=>{
                        dispatch({
                            type: _routerreducertypes.ACTION_FAST_REFRESH,
                            cache: createEmptyCacheNode(),
                            mutable: {},
                            origin: window.location.origin
                        });
                    });
                }
            }
        };
        return routerInstance;
    }, [
        dispatch,
        navigate
    ]);
    (0, _react.useEffect)(()=>{
        // Exists for debugging purposes. Don't use in application code.
        if (window.next) {
            window.next.router = appRouter;
        }
    }, [
        appRouter
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { cache, prefetchCache, tree } = (0, _usereducerwithdevtools.useUnwrapState)(reducerState);
        // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, _react.useEffect)(()=>{
            // Add `window.nd` for debugging purposes.
            // This is not meant for use in applications as concurrent rendering will affect the cache/tree/router.
            // @ts-ignore this is for debugging
            window.nd = {
                router: appRouter,
                cache,
                prefetchCache,
                tree
            };
        }, [
            appRouter,
            cache,
            prefetchCache,
            tree
        ]);
    }
    (0, _react.useEffect)(()=>{
        // If the app is restored from bfcache, it's possible that
        // pushRef.mpaNavigation is true, which would mean that any re-render of this component
        // would trigger the mpa navigation logic again from the lines below.
        // This will restore the router to the initial state in the event that the app is restored from bfcache.
        function handlePageShow(event) {
            var _window_history_state;
            if (!event.persisted || !((_window_history_state = window.history.state) == null ? void 0 : _window_history_state.__PRIVATE_NEXTJS_INTERNALS_TREE)) return;
            dispatch({
                type: _routerreducertypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: window.history.state.__PRIVATE_NEXTJS_INTERNALS_TREE
            });
        }
        window.addEventListener("pageshow", handlePageShow);
        return ()=>{
            window.removeEventListener("pageshow", handlePageShow);
        };
    }, [
        dispatch
    ]);
    // When mpaNavigation flag is set do a hard navigation to the new url.
    // Infinitely suspend because we don't actually want to rerender any child
    // components with the new URL and any entangled state updates shouldn't
    // commit either (eg: useTransition isPending should stay true until the page
    // unloads).
    //
    // This is a side effect in render. Don't try this at home, kids. It's
    // probably safe because we know this is a singleton component and it's never
    // in <Offscreen>. At least I hope so. (It will run twice in dev strict mode,
    // but that's... fine?)
    const { pushRef } = (0, _usereducerwithdevtools.useUnwrapState)(reducerState);
    if (pushRef.mpaNavigation) {
        // if there's a re-render, we don't want to trigger another redirect if one is already in flight to the same URL
        if (globalMutable.pendingMpaPath !== canonicalUrl) {
            const location1 = window.location;
            if (pushRef.pendingPush) {
                location1.assign(canonicalUrl);
            } else {
                location1.replace(canonicalUrl);
            }
            globalMutable.pendingMpaPath = canonicalUrl;
        }
        // TODO-APP: Should we listen to navigateerror here to catch failed
        // navigations somehow? And should we call window.stop() if a SPA navigation
        // should interrupt an MPA one?
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    (0, _react.useEffect)(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        /**
     * Handle popstate event, this is used to handle back/forward in the browser.
     * By default dispatches ACTION_RESTORE, however if the history entry was not pushed/replaced by app-router it will reload the page.
     * That case can happen when the old router injected the history entry.
     */ const onPopState = (param)=>{
            let { state } = param;
            if (!state) {
                // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
                return;
            }
            // This case happens when the history entry was pushed by the `pages` router.
            if (!state.__NA) {
                window.location.reload();
                return;
            }
            // @ts-ignore useTransition exists
            // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
            // Without startTransition works if the cache is there for this path
            (0, _react.startTransition)(()=>{
                dispatch({
                    type: _routerreducertypes.ACTION_RESTORE,
                    url: new URL(window.location.href),
                    tree: state.__PRIVATE_NEXTJS_INTERNALS_TREE
                });
            });
        };
        // Register popstate event to call onPopstate.
        window.addEventListener("popstate", onPopState);
        return ()=>{
            if (originalPushState) {
                window.history.pushState = originalPushState;
            }
            if (originalReplaceState) {
                window.history.replaceState = originalReplaceState;
            }
            window.removeEventListener("popstate", onPopState);
        };
    }, [
        dispatch
    ]);
    const { cache, tree, nextUrl, focusAndScrollRef } = (0, _usereducerwithdevtools.useUnwrapState)(reducerState);
    const head = (0, _react.useMemo)(()=>{
        return (0, _findheadincache.findHeadInCache)(cache, tree[1]);
    }, [
        cache,
        tree
    ]);
    let content = /*#__PURE__*/ _react.default.createElement(_redirectboundary.RedirectBoundary, null, head, cache.subTreeData, /*#__PURE__*/ _react.default.createElement(_approuterannouncer.AppRouterAnnouncer, {
        tree: tree
    }));
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof window !== "undefined") {
            const DevRootNotFoundBoundary = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/dev-root-not-found-boundary.js [app-client] (ecmascript)").DevRootNotFoundBoundary;
            content = /*#__PURE__*/ _react.default.createElement(DevRootNotFoundBoundary, null, content);
        }
        const HotReloader = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js [app-client] (ecmascript)").default;
        content = /*#__PURE__*/ _react.default.createElement(HotReloader, {
            assetPrefix: assetPrefix
        }, content);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(HistoryUpdater, {
        appRouterState: (0, _usereducerwithdevtools.useUnwrapState)(reducerState),
        sync: sync
    }), /*#__PURE__*/ _react.default.createElement(_hooksclientcontextsharedruntime.PathnameContext.Provider, {
        value: pathname
    }, /*#__PURE__*/ _react.default.createElement(_hooksclientcontextsharedruntime.SearchParamsContext.Provider, {
        value: searchParams
    }, /*#__PURE__*/ _react.default.createElement(_approutercontextsharedruntime.GlobalLayoutRouterContext.Provider, {
        value: {
            buildId,
            changeByServerResponse,
            tree,
            focusAndScrollRef,
            nextUrl
        }
    }, /*#__PURE__*/ _react.default.createElement(_approutercontextsharedruntime.AppRouterContext.Provider, {
        value: appRouter
    }, /*#__PURE__*/ _react.default.createElement(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            childNodes: cache.parallelRoutes,
            tree,
            // Root node always has `url`
            // Provided in AppTreeContext to ensure it can be overwritten in layout-router
            url: canonicalUrl
        }
    }, content))))));
}
function AppRouter(props) {
    const { globalErrorComponent, ...rest } = props;
    return /*#__PURE__*/ _react.default.createElement(_errorboundary.ErrorBoundary, {
        errorComponent: globalErrorComponent
    }, /*#__PURE__*/ _react.default.createElement(Router, rest));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "callServer", {
    enumerable: true,
    get: function() {
        return callServer;
    }
});
const _approuter = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)");
async function callServer(actionId, actionArgs) {
    const actionDispatcher = (0, _approuter.getServerActionDispatcher)();
    if (!actionDispatcher) {
        throw new Error("Invariant: missing action dispatcher.");
    }
    return new Promise((resolve, reject)=>{
        actionDispatcher({
            actionId,
            actionArgs,
            resolve,
            reject
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fetchServerResponse", {
    enumerable: true,
    get: function() {
        return fetchServerResponse;
    }
});
const _approuterheaders = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const _approuter = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)");
const _appcallserver = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _hash = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/hash.js [app-client] (ecmascript)");
const _constants = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/lib/constants.js [app-client] (ecmascript)");
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
// import { createFromFetch } from 'react-server-dom-webpack/client'
const { createFromFetch } = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)");
function doMpaNavigation(url) {
    return [
        (0, _approuter.urlToUrlWithoutFlightMarker)(url).toString(),
        undefined
    ];
}
async function fetchServerResponse(url, flightRouterState, nextUrl, currentBuildId, prefetchKind) {
    const headers = {
        // Enable flight response
        [_approuterheaders.RSC_HEADER]: "1",
        // Provide the current router state
        [_approuterheaders.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(flightRouterState))
    };
    /**
   * Three cases:
   * - `prefetchKind` is `undefined`, it means it's a normal navigation, so we want to prefetch the page data fully
   * - `prefetchKind` is `full` - we want to prefetch the whole page so same as above
   * - `prefetchKind` is `auto` - if the page is dynamic, prefetch the page data partially, if static prefetch the page data fully
   */ if (prefetchKind === _routerreducertypes.PrefetchKind.AUTO) {
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] = "1";
    }
    if (nextUrl) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    const uniqueCacheQuery = (0, _hash.hexHash)([
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] || "0",
        headers[_approuterheaders.NEXT_ROUTER_STATE_TREE],
        headers[_approuterheaders.NEXT_URL]
    ].join(","));
    try {
        let fetchUrl = new URL(url);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        // Add unique cache query to avoid caching conflicts on CDN which don't respect to Vary header
        fetchUrl.searchParams.set(_approuterheaders.NEXT_RSC_UNION_QUERY, uniqueCacheQuery);
        const res = await fetch(fetchUrl, {
            // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
            credentials: "same-origin",
            headers
        });
        const responseUrl = (0, _approuter.urlToUrlWithoutFlightMarker)(res.url);
        const canonicalUrl = res.redirected ? responseUrl : undefined;
        const contentType = res.headers.get("content-type") || "";
        const postponed = !!res.headers.get(_constants.NEXT_DID_POSTPONE_HEADER);
        let isFlightResponse = contentType === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        // If fetch returns something different than flight response handle it like a mpa navigation
        // If the fetch was not 200, we also handle it like a mpa navigation
        if (!isFlightResponse || !res.ok) {
            // in case the original URL came with a hash, preserve it before redirecting to the new URL
            if (url.hash) {
                responseUrl.hash = url.hash;
            }
            return doMpaNavigation(responseUrl.toString());
        }
        // Handle the `fetch` readable stream that can be unwrapped by `React.use`.
        const [buildId, flightData] = await createFromFetch(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        if (currentBuildId !== buildId) {
            return doMpaNavigation(res.url);
        }
        return [
            flightData,
            canonicalUrl,
            postponed
        ];
    } catch (err) {
        console.error("Failed to fetch RSC payload for " + url + ". Falling back to browser navigation.", err);
        // If fetch fails handle it like a mpa navigation
        // TODO-APP: Add a test for the case where a CORS request fails, e.g. external url redirect coming from the response.
        // See https://github.com/vercel/next.js/issues/43605#issuecomment-1451617521 for a reproduction.
        return [
            url.toString(),
            undefined
        ];
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fetch-server-response.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
 * OuterLayoutRouter handles the current segment as well as <Offscreen> rendering of other segments.
 * It can be rendered next to each other with a different `parallelRouterKey`, allowing for Parallel routes.
 */ "default", {
    enumerable: true,
    get: function() {
        return OuterLayoutRouter;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _fetchserverresponse = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _infinitepromise = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/infinite-promise.js [app-client] (ecmascript)");
const _errorboundary = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const _handlesmoothscroll = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/handle-smooth-scroll.js [app-client] (ecmascript)");
const _redirectboundary = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
const _notfoundboundary = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/not-found-boundary.js [app-client] (ecmascript)");
const _getsegmentvalue = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
/**
 * Add refetch marker to router state at the point of the current layout segment.
 * This ensures the response returned is not further down than the current layout segment.
 */ function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchsegments.matchSegment)(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        {
                            ...treeToRecreate[1],
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                "refetch"
                            ]
                        }
                    ];
                }
                return [
                    treeToRecreate[0],
                    {
                        ...treeToRecreate[1],
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    }
                ];
            }
        }
    }
    return treeToRecreate;
}
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (typeof window === "undefined") return null;
    // Only apply strict mode warning when not in production
    if ("TURBOPACK compile-time truthy", 1) {
        const originalConsoleError = console.error;
        try {
            console.error = function() {
                for(var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++){
                    messages[_key] = arguments[_key];
                }
                // Ignore strict mode warning for the findDomNode call below
                if (!messages[0].includes("Warning: %s is deprecated in StrictMode.")) {
                    originalConsoleError(...messages);
                }
            };
            return _reactdom.default.findDOMNode(instance);
        } finally{
            console.error = originalConsoleError;
        }
    }
    return _reactdom.default.findDOMNode(instance);
}
const rectProperties = [
    "bottom",
    "height",
    "left",
    "right",
    "top",
    "width",
    "x",
    "y"
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        "sticky",
        "fixed"
    ].includes(getComputedStyle(element).position)) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn("Skipping auto-scroll behavior due to `position: sticky` or `position: fixed` on element:", element);
        }
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === "top") {
        return document.body;
    }
    var _document_getElementById;
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return (_document_getElementById = document.getElementById(hashFragment)) != null ? _document_getElementById : document.getElementsByName(hashFragment)[0];
}
class InnerScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        // Because this property is overwritten in handlePotentialScroll it's fine to always run it when true as it'll be set to false for subsequent renders.
        if (this.props.focusAndScrollRef.apply) {
            this.handlePotentialScroll();
        }
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args);
        this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
            const { focusAndScrollRef, segmentPath } = this.props;
            if (focusAndScrollRef.apply) {
                // segmentPaths is an array of segment paths that should be scrolled to
                // if the current segment path is not in the array, the scroll is not applied
                // unless the array is empty, in which case the scroll is always applied
                if (focusAndScrollRef.segmentPaths.length !== 0 && !focusAndScrollRef.segmentPaths.some((scrollRefSegmentPath)=>segmentPath.every((segment, index)=>(0, _matchsegments.matchSegment)(segment, scrollRefSegmentPath[index])))) {
                    return;
                }
                let domNode = null;
                const hashFragment = focusAndScrollRef.hashFragment;
                if (hashFragment) {
                    domNode = getHashFragmentDomNode(hashFragment);
                }
                // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
                // This already caused a bug where the first child was a <link/> in head.
                if (!domNode) {
                    domNode = findDOMNode(this);
                }
                // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
                if (!(domNode instanceof Element)) {
                    return;
                }
                // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
                // If the element is skipped, try to select the next sibling and try again.
                while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                    // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                    if (domNode.nextElementSibling === null) {
                        return;
                    }
                    domNode = domNode.nextElementSibling;
                }
                // State is mutated to ensure that the focus and scroll is applied only once.
                focusAndScrollRef.apply = false;
                focusAndScrollRef.hashFragment = null;
                focusAndScrollRef.segmentPaths = [];
                (0, _handlesmoothscroll.handleSmoothScroll)(()=>{
                    // In case of hash scroll, we only need to scroll the element into view
                    if (hashFragment) {
                        domNode.scrollIntoView();
                        return;
                    }
                    // Store the current viewport height because reading `clientHeight` causes a reflow,
                    // and it won't change during this function.
                    const htmlElement = document.documentElement;
                    const viewportHeight = htmlElement.clientHeight;
                    // If the element's top edge is already in the viewport, exit early.
                    if (topOfElementInViewport(domNode, viewportHeight)) {
                        return;
                    }
                    // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                    // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                    // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                    // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                    htmlElement.scrollTop = 0;
                    // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                    if (!topOfElementInViewport(domNode, viewportHeight)) {
                        domNode.scrollIntoView();
                    }
                }, {
                    // We will force layout by querying domNode position
                    dontForceLayout: true,
                    onlyHashChange: focusAndScrollRef.onlyHashChange
                });
                // Mutate after scrolling so that it can be read by `handleSmoothScroll`
                focusAndScrollRef.onlyHashChange = false;
                // Set focus on the element
                domNode.focus();
            }
        };
    }
}
function ScrollAndFocusHandler(param) {
    let { segmentPath, children } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    return /*#__PURE__*/ _react.default.createElement(InnerScrollAndFocusHandler, {
        segmentPath: segmentPath,
        focusAndScrollRef: context.focusAndScrollRef
    }, children);
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter(param) {
    let { parallelRouterKey, url, childNodes, initialChildNode, segmentPath, tree, // isActive,
    cacheKey } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    const { buildId, changeByServerResponse, tree: fullTree } = context;
    // Read segment path from the parallel router cache node.
    let childNode = childNodes.get(cacheKey);
    // If initialChildNode is available this means it's the Flight / SSR case.
    // TODO: `null` is a valid React Node, so technically we should use some other
    // value besides `null` to indicate that the tree is partial. However, we're
    // about to remove all the cases that lead to a partial tree, so this soon
    // won't be an issue.
    if (initialChildNode !== null) {
        if (!childNode) {
            // Add the segment's subTreeData to the cache.
            // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
            // TODO: We should seed all the CacheNodes as soon as the Flight payload
            // is received. We already collect them eagerly on the server, so we
            // shouldn't need to wait until the render phase to write them into
            // the cache. Requires refactoring the Flight response type. Then we can
            // delete this code.
            childNode = {
                status: _approutercontextsharedruntime.CacheStates.READY,
                data: null,
                subTreeData: initialChildNode,
                parallelRoutes: new Map()
            };
            childNodes.set(cacheKey, childNode);
        } else {
            if (childNode.status === _approutercontextsharedruntime.CacheStates.LAZY_INITIALIZED) {
                // @ts-expect-error we're changing it's type!
                childNode.status = _approutercontextsharedruntime.CacheStates.READY;
                // @ts-expect-error
                childNode.subTreeData = initialChildNode;
            }
        }
    }
    // When childNode is not available during rendering client-side we need to fetch it from the server.
    if (!childNode || childNode.status === _approutercontextsharedruntime.CacheStates.LAZY_INITIALIZED) {
        /**
     * Router state with refetch marker added
     */ // TODO-APP: remove ''
        const refetchTree = walkAddRefetch([
            "",
            ...segmentPath
        ], fullTree);
        childNode = {
            status: _approutercontextsharedruntime.CacheStates.DATA_FETCH,
            data: (0, _fetchserverresponse.fetchServerResponse)(new URL(url, location.origin), refetchTree, context.nextUrl, buildId),
            subTreeData: null,
            head: childNode && childNode.status === _approutercontextsharedruntime.CacheStates.LAZY_INITIALIZED ? childNode.head : undefined,
            parallelRoutes: childNode && childNode.status === _approutercontextsharedruntime.CacheStates.LAZY_INITIALIZED ? childNode.parallelRoutes : new Map()
        };
        /**
     * Flight data fetch kicked off during render and put into the cache.
     */ childNodes.set(cacheKey, childNode);
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (!childNode) {
        throw new Error("Child node should always exist");
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (childNode.subTreeData && childNode.data) {
        throw new Error("Child node should not have both subTreeData and data");
    }
    // If cache node has a data request we have to unwrap response by `use` and update the cache.
    if (childNode.data) {
        /**
     * Flight response data
     */ // When the data has not resolved yet `use` will suspend here.
        const [flightData, overrideCanonicalUrl] = (0, _react.use)(childNode.data);
        // segmentPath from the server does not match the layout's segmentPath
        childNode.data = null;
        // setTimeout is used to start a new transition during render, this is an intentional hack around React.
        setTimeout(()=>{
            (0, _react.startTransition)(()=>{
                changeByServerResponse(fullTree, flightData, overrideCanonicalUrl);
            });
        });
        // Suspend infinitely as `changeByServerResponse` will cause a different part of the tree to be rendered.
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    // If cache node has no subTreeData and no data request we have to infinitely suspend as the data will likely flow in from another place.
    // TODO-APP: double check users can't return null in a component that will kick in here.
    if (!childNode.subTreeData) {
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    const subtree = /*#__PURE__*/ _react.default.createElement(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            tree: tree[1][parallelRouterKey],
            childNodes: childNode.parallelRoutes,
            // TODO-APP: overriding of url for parallel routes
            url: url
        }
    }, childNode.subTreeData);
    // Ensure root layout is not wrapped in a div as the root layout renders `<html>`
    return subtree;
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary(param) {
    let { children, loading, loadingStyles, loadingScripts, hasLoading } = param;
    if (hasLoading) {
        return /*#__PURE__*/ _react.default.createElement(_react.Suspense, {
            fallback: /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, loadingStyles, loadingScripts, loading)
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
function OuterLayoutRouter(param) {
    let { parallelRouterKey, segmentPath, initialChildNode, childPropSegment, error, errorStyles, errorScripts, templateStyles, templateScripts, loading, loadingStyles, loadingScripts, hasLoading, template, notFound, notFoundStyles, styles } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw new Error("invariant expected layout router to be mounted");
    }
    const { childNodes, tree, url } = context;
    // Get the current parallelRouter cache node
    let childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!childNodesForParallelRouter) {
        childNodesForParallelRouter = new Map();
        childNodes.set(parallelRouterKey, childNodesForParallelRouter);
    }
    // Get the active segment in the tree
    // The reason arrays are used in the data format is that these are transferred from the server to the browser so it's optimized to save bytes.
    const treeSegment = tree[1][parallelRouterKey][0];
    // If segment is an array it's a dynamic route and we want to read the dynamic route value as the segment to get from the cache.
    const currentChildSegmentValue = (0, _getsegmentvalue.getSegmentValue)(treeSegment);
    /**
   * Decides which segments to keep rendering, all segments that are not active will be wrapped in `<Offscreen>`.
   */ // TODO-APP: Add handling of `<Offscreen>` when it's available.
    const preservedSegments = [
        treeSegment
    ];
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, styles, preservedSegments.map((preservedSegment)=>{
        const isChildPropSegment = (0, _matchsegments.matchSegment)(preservedSegment, childPropSegment);
        const preservedSegmentValue = (0, _getsegmentvalue.getSegmentValue)(preservedSegment);
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(preservedSegment);
        return(/*
            - Error boundary
              - Only renders error boundary if error component is provided.
              - Rendered for each segment to ensure they have their own error state.
            - Loading boundary
              - Only renders suspense boundary if loading components is provided.
              - Rendered for each segment to ensure they have their own loading state.
              - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
          */ /*#__PURE__*/ _react.default.createElement(_approutercontextsharedruntime.TemplateContext.Provider, {
            key: (0, _createroutercachekey.createRouterCacheKey)(preservedSegment, true),
            value: /*#__PURE__*/ _react.default.createElement(ScrollAndFocusHandler, {
                segmentPath: segmentPath
            }, /*#__PURE__*/ _react.default.createElement(_errorboundary.ErrorBoundary, {
                errorComponent: error,
                errorStyles: errorStyles,
                errorScripts: errorScripts
            }, /*#__PURE__*/ _react.default.createElement(LoadingBoundary, {
                hasLoading: hasLoading,
                loading: loading,
                loadingStyles: loadingStyles,
                loadingScripts: loadingScripts
            }, /*#__PURE__*/ _react.default.createElement(_notfoundboundary.NotFoundBoundary, {
                notFound: notFound,
                notFoundStyles: notFoundStyles
            }, /*#__PURE__*/ _react.default.createElement(_redirectboundary.RedirectBoundary, null, /*#__PURE__*/ _react.default.createElement(InnerLayoutRouter, {
                parallelRouterKey: parallelRouterKey,
                url: url,
                tree: tree,
                childNodes: childNodesForParallelRouter,
                initialChildNode: isChildPropSegment ? initialChildNode : null,
                segmentPath: segmentPath,
                cacheKey: cacheKey,
                isActive: currentChildSegmentValue === preservedSegmentValue
            }))))))
        }, templateStyles, templateScripts, template));
    }));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map

}.call(this) }),
}]);

//# sourceMappingURL=eaf71_next_dist_client_92cf66._.js.map