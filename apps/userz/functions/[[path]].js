globalThis.process = {
								argv: [],
								env: {},
							};
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except2, desc2) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except2)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc2 = __getOwnPropDesc(from, key)) || desc2.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// dist/$server_build/renderers.mjs
var renderers;
var init_renderers = __esm({
  "dist/$server_build/renderers.mjs"() {
    "use strict";
    renderers = [];
  }
});

// ../../node_modules/.pnpm/@astrojs+internal-helpers@0.3.0/node_modules/@astrojs/internal-helpers/dist/path.js
function appendForwardSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function collapseDuplicateSlashes(path) {
  return path.replace(/(?<!:)\/{2,}/g, "/");
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map((path, i) => {
    if (i === 0) {
      return removeTrailingForwardSlash(path);
    } else if (i === paths.length - 1) {
      return removeLeadingForwardSlash(path);
    } else {
      return trimSlashes(path);
    }
  }).join("/");
}
function isRemotePath(src) {
  return /^(?:http|ftp|https|ws):?\/\//.test(src) || src.startsWith("data:");
}
function slash(path) {
  return path.replace(/\\/g, "/");
}
function fileExtension(path) {
  const ext = path.split(".").pop();
  return ext !== path ? `.${ext}` : "";
}
var init_path = __esm({
  "../../node_modules/.pnpm/@astrojs+internal-helpers@0.3.0/node_modules/@astrojs/internal-helpers/dist/path.js"() {
  }
});

// ../../node_modules/.pnpm/cookie@0.6.0/node_modules/cookie/index.js
var require_cookie = __commonJS({
  "../../node_modules/.pnpm/cookie@0.6.0/node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse4;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse4(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var dec = opt.decode || decode;
      var index2 = 0;
      while (index2 < str.length) {
        var eqIdx = str.indexOf("=", index2);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index2);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index2 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key = str.slice(index2, eqIdx).trim();
        if (void 0 === obj[key]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key] = tryDecode(val, dec);
        }
        index2 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// ../../node_modules/.pnpm/kleur@4.1.5/node_modules/kleur/colors.mjs
function init(x, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
  let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
  return function(txt) {
    if (!$.enabled || txt == null)
      return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
var FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM, isTTY, $, reset, bold, dim, italic, underline, inverse, hidden, strikethrough, black, red, green, yellow, blue, magenta, cyan, white, gray, grey, bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite;
var init_colors = __esm({
  "../../node_modules/.pnpm/kleur@4.1.5/node_modules/kleur/colors.mjs"() {
    isTTY = true;
    if (typeof process !== "undefined") {
      ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
      isTTY = process.stdout && process.stdout.isTTY;
    }
    $ = {
      enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
    };
    reset = init(0, 0);
    bold = init(1, 22);
    dim = init(2, 22);
    italic = init(3, 23);
    underline = init(4, 24);
    inverse = init(7, 27);
    hidden = init(8, 28);
    strikethrough = init(9, 29);
    black = init(30, 39);
    red = init(31, 39);
    green = init(32, 39);
    yellow = init(33, 39);
    blue = init(34, 39);
    magenta = init(35, 39);
    cyan = init(36, 39);
    white = init(37, 39);
    gray = init(90, 39);
    grey = init(90, 39);
    bgBlack = init(40, 49);
    bgRed = init(41, 49);
    bgGreen = init(42, 49);
    bgYellow = init(43, 49);
    bgBlue = init(44, 49);
    bgMagenta = init(45, 49);
    bgCyan = init(46, 49);
    bgWhite = init(47, 49);
  }
});

// ../../node_modules/.pnpm/html-escaper@3.0.3/node_modules/html-escaper/esm/index.js
var replace, ca, esca, pe, escape;
var init_esm = __esm({
  "../../node_modules/.pnpm/html-escaper@3.0.3/node_modules/html-escaper/esm/index.js"() {
    ({ replace } = "");
    ca = /[&<>'"]/g;
    esca = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    };
    pe = (m) => esca[m];
    escape = (es) => replace.call(es, ca, pe);
  }
});

// ../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var init_clsx_m = __esm({
  "../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"() {
  }
});

// ../../node_modules/.pnpm/cssesc@3.0.0/node_modules/cssesc/cssesc.js
var require_cssesc = __commonJS({
  "../../node_modules/.pnpm/cssesc@3.0.0/node_modules/cssesc/cssesc.js"(exports, module) {
    "use strict";
    var object2 = {};
    var hasOwnProperty = object2.hasOwnProperty;
    var merge = function merge2(options, defaults) {
      if (!options) {
        return defaults;
      }
      var result = {};
      for (var key in defaults) {
        result[key] = hasOwnProperty.call(options, key) ? options[key] : defaults[key];
      }
      return result;
    };
    var regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
    var regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
    var regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;
    var cssesc = function cssesc2(string2, options) {
      options = merge(options, cssesc2.options);
      if (options.quotes != "single" && options.quotes != "double") {
        options.quotes = "single";
      }
      var quote = options.quotes == "double" ? '"' : "'";
      var isIdentifier = options.isIdentifier;
      var firstChar = string2.charAt(0);
      var output = "";
      var counter2 = 0;
      var length = string2.length;
      while (counter2 < length) {
        var character = string2.charAt(counter2++);
        var codePoint = character.charCodeAt();
        var value = void 0;
        if (codePoint < 32 || codePoint > 126) {
          if (codePoint >= 55296 && codePoint <= 56319 && counter2 < length) {
            var extra = string2.charCodeAt(counter2++);
            if ((extra & 64512) == 56320) {
              codePoint = ((codePoint & 1023) << 10) + (extra & 1023) + 65536;
            } else {
              counter2--;
            }
          }
          value = "\\" + codePoint.toString(16).toUpperCase() + " ";
        } else {
          if (options.escapeEverything) {
            if (regexAnySingleEscape.test(character)) {
              value = "\\" + character;
            } else {
              value = "\\" + codePoint.toString(16).toUpperCase() + " ";
            }
          } else if (/[\t\n\f\r\x0B]/.test(character)) {
            value = "\\" + codePoint.toString(16).toUpperCase() + " ";
          } else if (character == "\\" || !isIdentifier && (character == '"' && quote == character || character == "'" && quote == character) || isIdentifier && regexSingleEscape.test(character)) {
            value = "\\" + character;
          } else {
            value = character;
          }
        }
        output += value;
      }
      if (isIdentifier) {
        if (/^-[-\d]/.test(output)) {
          output = "\\-" + output.slice(1);
        } else if (/\d/.test(firstChar)) {
          output = "\\3" + firstChar + " " + output.slice(1);
        }
      }
      output = output.replace(regexExcessiveSpaces, function($0, $1, $2) {
        if ($1 && $1.length % 2) {
          return $0;
        }
        return ($1 || "") + $2;
      });
      if (!isIdentifier && options.wrap) {
        return quote + output + quote;
      }
      return output;
    };
    cssesc.options = {
      "escapeEverything": false,
      "isIdentifier": false,
      "quotes": "single",
      "wrap": false
    };
    cssesc.version = "3.0.0";
    module.exports = cssesc;
  }
});

// dist/$server_build/chunks/astro_sKHNJ3WQ.mjs
function normalizeLF(code) {
  return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
function codeFrame(src, loc) {
  if (!loc || loc.line === void 0 || loc.column === void 0) {
    return "";
  }
  const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
  const visibleLines = [];
  for (let n = -2; n <= 2; n++) {
    if (lines[loc.line + n])
      visibleLines.push(loc.line + n);
  }
  let gutterWidth = 0;
  for (const lineNo of visibleLines) {
    let w2 = `> ${lineNo}`;
    if (w2.length > gutterWidth)
      gutterWidth = w2.length;
  }
  let output = "";
  for (const lineNo of visibleLines) {
    const isFocusedLine = lineNo === loc.line - 1;
    output += isFocusedLine ? "> " : "  ";
    output += `${lineNo + 1} | ${lines[lineNo]}
`;
    if (isFocusedLine)
      output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({
        length: loc.column
      }).join(" ")}^
`;
  }
  return output;
}
async function renderEndpoint(mod, context, ssr, logger) {
  const { request, url } = context;
  const method = request.method.toUpperCase();
  const handler = mod[method] ?? mod["ALL"];
  if (!ssr && ssr === false && method !== "GET") {
    logger.warn(
      "router",
      `${url.pathname} ${bold(
        method
      )} requests are not available for a static site. Update your config to \`output: 'server'\` or \`output: 'hybrid'\` to enable.`
    );
  }
  if (handler === void 0) {
    logger.warn(
      "router",
      `No API Route handler exists for the method "${method}" for the route "${url.pathname}".
Found handlers: ${Object.keys(mod).map((exp) => JSON.stringify(exp)).join(", ")}
` + ("all" in mod ? `One of the exported handlers is "all" (lowercase), did you mean to export 'ALL'?
` : "")
    );
    return new Response(null, { status: 404 });
  }
  if (typeof handler !== "function") {
    logger.error(
      "router",
      `The route "${url.pathname}" exports a value for the method "${method}", but it is of the type ${typeof handler} instead of a function.`
    );
    return new Response(null, { status: 500 });
  }
  const response = await handler.call(mod, context);
  if (REROUTABLE_STATUS_CODES.includes(response.status)) {
    response.headers.set(REROUTE_DIRECTIVE_HEADER, "no");
  }
  return response;
}
function validateArgs(args) {
  if (args.length !== 3)
    return false;
  if (!args[0] || typeof args[0] !== "object")
    return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...InvalidComponentArgs,
        message: InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}
function createAstroGlobFn() {
  const globHandler = (importMetaGlobResult) => {
    if (typeof importMetaGlobResult === "string") {
      throw new AstroError({
        ...AstroGlobUsedOutside,
        message: AstroGlobUsedOutside.message(JSON.stringify(importMetaGlobResult))
      });
    }
    let allEntries = [...Object.values(importMetaGlobResult)];
    if (allEntries.length === 0) {
      throw new AstroError({
        ...AstroGlobNoMatch,
        message: AstroGlobNoMatch.message(JSON.stringify(importMetaGlobResult))
      });
    }
    return Promise.all(allEntries.map((fn) => fn()));
  };
  return globHandler;
}
function createAstro(site) {
  return {
    // TODO: this is no longer neccessary for `Astro.site`
    // but it somehow allows working around caching issues in content collections for some tests
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    glob: createAstroGlobFn()
  };
}
function isPromise(value) {
  return !!value && typeof value === "object" && typeof value.then === "function";
}
function isHTMLString(value) {
  return Object.prototype.toString.call(value) === "[object HTMLString]";
}
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function createRenderInstruction(instruction) {
  return Object.defineProperty(instruction, RenderInstructionSymbol, {
    value: true
  });
}
function isRenderInstruction(chunk2) {
  return chunk2 && typeof chunk2 === "object" && chunk2[RenderInstructionSymbol];
}
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v) => {
    return convertToSerializedForm(v, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(
    Object.entries(value).map(([k, v]) => {
      return [k, convertToSerializedForm(v, metadata, parents)];
    })
  );
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [PROP_TYPE.Map, serializeArray(Array.from(value), metadata, parents)];
    }
    case "[object Set]": {
      return [PROP_TYPE.Set, serializeArray(Array.from(value), metadata, parents)];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, serializeArray(value, metadata, parents)];
    }
    case "[object Uint8Array]": {
      return [PROP_TYPE.Uint8Array, Array.from(value)];
    }
    case "[object Uint16Array]": {
      return [PROP_TYPE.Uint16Array, Array.from(value)];
    }
    case "[object Uint32Array]": {
      return [PROP_TYPE.Uint32Array, Array.from(value)];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      } else if (value === void 0) {
        return [PROP_TYPE.Value];
      } else {
        return [PROP_TYPE.Value, value];
      }
    }
  }
}
function serializeProps(props, metadata) {
  const serialized = JSON.stringify(serializeObject(props, metadata));
  return serialized;
}
function extractDirectives(inputProps, clientDirectives) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {},
    propsWithoutTransitionAttributes: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!clientDirectives.has(extracted.hydration.directive)) {
            const hydrationMethods = Array.from(clientDirectives.keys()).map((d2) => `client:${d2}`).join(", ");
            throw new Error(
              `Error: invalid hydration directive "${key}". Supported hydration methods: ${hydrationMethods}`
            );
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new AstroError(MissingMediaQueryDirective);
          }
          break;
        }
      }
    } else {
      extracted.props[key] = value;
      if (!transitionDirectivesToCopyOnIsland.includes(key)) {
        extracted.propsWithoutTransitionAttributes[key] = value;
      }
    }
  }
  for (const sym of Object.getOwnPropertySymbols(inputProps)) {
    extracted.props[sym] = inputProps[sym];
    extracted.propsWithoutTransitionAttributes[sym] = inputProps[sym];
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new AstroError({
      ...NoMatchingImport,
      message: NoMatchingImport.message(metadata.displayName)
    });
  }
  const island = {
    children: "",
    props: {
      // This is for HMR, probably can avoid it in prod
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = escapeHTML(value);
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(decodeURI(renderer.clientEntrypoint));
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML(
    JSON.stringify({
      name: metadata.displayName,
      value: metadata.hydrateArgs || ""
    })
  );
  transitionDirectivesToCopyOnIsland.forEach((name) => {
    if (typeof props[name] !== "undefined") {
      island.props[name] = props[name];
    }
  });
  return island;
}
function bitwise(str) {
  let hash = 0;
  if (str.length === 0)
    return hash;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text3) {
  let num;
  let result = "";
  let integer2 = bitwise(text3);
  const sign = integer2 < 0 ? "Z" : "";
  integer2 = Math.abs(integer2);
  while (integer2 >= binary) {
    num = integer2 % binary;
    integer2 = Math.floor(integer2 / binary);
    result = dictionary[num] + result;
  }
  if (integer2 > 0) {
    result = dictionary[integer2] + result;
  }
  return sign + result;
}
function isAstroComponentFactory(obj) {
  return obj == null ? false : obj.isAstroComponentFactory === true;
}
function isAPropagatingComponent(result, factory) {
  let hint = factory.propagation || "none";
  if (factory.moduleId && result.componentMetadata.has(factory.moduleId) && hint === "none") {
    hint = result.componentMetadata.get(factory.moduleId).propagation;
  }
  return hint === "in-tree" || hint === "self";
}
function isHeadAndContent(obj) {
  return typeof obj === "object" && !!obj[headAndContentSym];
}
function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(result, directive) {
  const clientDirectives = result.clientDirectives;
  const clientDirective = clientDirectives.get(directive);
  if (!clientDirective) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  return clientDirective;
}
function getPrescripts(result, type, directive) {
  switch (type) {
    case "both":
      return `${ISLAND_STYLES}<script>${getDirectiveScriptText(result, directive)};${astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(result, directive)}<\/script>`;
  }
  return "";
}
function defineScriptVars(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `const ${toIdent(key)} = ${JSON.stringify(value)?.replace(
      /<\/script>/g,
      "\\x3C/script>"
    )};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (value === false) {
    if (htmlEnumAttributes.test(key) || svgEnumAttributes.test(key)) {
      return markHTMLString(` ${key}="false"`);
    }
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(clsx(value), shouldEscape);
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString)) {
    if (Array.isArray(value) && value.length === 2) {
      return markHTMLString(
        ` ${key}="${toAttributeString(`${toStyleString(value[0])};${value[1]}`, shouldEscape)}"`
      );
    }
    if (typeof value === "object") {
      return markHTMLString(` ${key}="${toAttributeString(toStyleString(value), shouldEscape)}"`);
    }
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (typeof value === "string" && value.includes("&") && urlCanParse(value)) {
    return markHTMLString(` ${key}="${toAttributeString(value, false)}"`);
  }
  if (value === true && (key.startsWith("data-") || htmlBooleanAttributes.test(key))) {
    return markHTMLString(` ${key}`);
  } else {
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  }
}
function internalSpreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function renderElement$1(name, { props: _props, children = "" }, shouldEscape = true) {
  const { lang: _, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children == "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape)} />`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape)}>${children}</${name}>`;
}
function renderToBufferDestination(bufferRenderFunction) {
  const bufferChunks = [];
  const bufferDestination = {
    write: (chunk2) => bufferChunks.push(chunk2)
  };
  const renderPromise = bufferRenderFunction(bufferDestination);
  Promise.resolve(renderPromise).catch(() => {
  });
  return {
    async renderToFinalDestination(destination) {
      for (const chunk2 of bufferChunks) {
        destination.write(chunk2);
      }
      bufferDestination.write = (chunk2) => destination.write(chunk2);
      await renderPromise;
    }
  };
}
function promiseWithResolvers() {
  let resolve, reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  return {
    promise,
    resolve,
    reject
  };
}
function urlCanParse(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
function renderAllHeadContent(result) {
  result._metadata.hasRenderedHead = true;
  const styles2 = Array.from(result.styles).filter(uniqueElements).map(
    (style) => style.props.rel === "stylesheet" ? renderElement$1("link", style) : renderElement$1("style", style)
  );
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script) => {
    return renderElement$1("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement$1("link", link, false));
  let content = styles2.join("\n") + links.join("\n") + scripts.join("\n");
  if (result._metadata.extraHead.length > 0) {
    for (const part of result._metadata.extraHead) {
      content += part;
    }
  }
  return markHTMLString(content);
}
function* renderHead() {
  yield createRenderInstruction({ type: "head" });
}
function* maybeRenderHead() {
  yield createRenderInstruction({ type: "maybe-head" });
}
function isSlotString(str) {
  return !!str[slotString];
}
function renderSlot(result, slotted, fallback) {
  if (!slotted && fallback) {
    return renderSlot(result, fallback);
  }
  return {
    async render(destination) {
      await renderChild(destination, typeof slotted === "function" ? slotted(result) : slotted);
    }
  };
}
async function renderSlotToString(result, slotted, fallback) {
  let content = "";
  let instructions = null;
  const temporaryDestination = {
    write(chunk2) {
      if (chunk2 instanceof SlotString) {
        content += chunk2;
        if (chunk2.instructions) {
          instructions ??= [];
          instructions.push(...chunk2.instructions);
        }
      } else if (chunk2 instanceof Response)
        return;
      else if (typeof chunk2 === "object" && "type" in chunk2 && typeof chunk2.type === "string") {
        if (instructions === null) {
          instructions = [];
        }
        instructions.push(chunk2);
      } else {
        content += chunkToString(result, chunk2);
      }
    }
  };
  const renderInstance = renderSlot(result, slotted, fallback);
  await renderInstance.render(temporaryDestination);
  return markHTMLString(new SlotString(content, instructions));
}
async function renderSlots(result, slots = {}) {
  let slotInstructions = null;
  let children = {};
  if (slots) {
    await Promise.all(
      Object.entries(slots).map(
        ([key, value]) => renderSlotToString(result, value).then((output) => {
          if (output.instructions) {
            if (slotInstructions === null) {
              slotInstructions = [];
            }
            slotInstructions.push(...output.instructions);
          }
          children[key] = output;
        })
      )
    );
  }
  return { slotInstructions, children };
}
function stringifyChunk(result, chunk2) {
  if (isRenderInstruction(chunk2)) {
    const instruction = chunk2;
    switch (instruction.type) {
      case "directive": {
        const { hydration } = instruction;
        let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
        let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
        let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
        if (prescriptType) {
          let prescripts = getPrescripts(result, prescriptType, hydration.directive);
          return markHTMLString(prescripts);
        } else {
          return "";
        }
      }
      case "head": {
        if (result._metadata.hasRenderedHead || result.partial) {
          return "";
        }
        return renderAllHeadContent(result);
      }
      case "maybe-head": {
        if (result._metadata.hasRenderedHead || result._metadata.headInTree || result.partial) {
          return "";
        }
        return renderAllHeadContent(result);
      }
      case "renderer-hydration-script": {
        const { rendererSpecificHydrationScripts } = result._metadata;
        const { rendererName } = instruction;
        if (!rendererSpecificHydrationScripts.has(rendererName)) {
          rendererSpecificHydrationScripts.add(rendererName);
          return instruction.render();
        }
        return "";
      }
      default: {
        throw new Error(`Unknown chunk type: ${chunk2.type}`);
      }
    }
  } else if (chunk2 instanceof Response) {
    return "";
  } else if (isSlotString(chunk2)) {
    let out = "";
    const c = chunk2;
    if (c.instructions) {
      for (const instr of c.instructions) {
        out += stringifyChunk(result, instr);
      }
    }
    out += chunk2.toString();
    return out;
  }
  return chunk2.toString();
}
function chunkToString(result, chunk2) {
  if (ArrayBuffer.isView(chunk2)) {
    return decoder.decode(chunk2);
  } else {
    return stringifyChunk(result, chunk2);
  }
}
function chunkToByteArray(result, chunk2) {
  if (ArrayBuffer.isView(chunk2)) {
    return chunk2;
  } else {
    const stringified = stringifyChunk(result, chunk2);
    return encoder.encode(stringified.toString());
  }
}
function isRenderInstance(obj) {
  return !!obj && typeof obj === "object" && "render" in obj && typeof obj.render === "function";
}
async function renderChild(destination, child) {
  child = await child;
  if (child instanceof SlotString) {
    destination.write(child);
  } else if (isHTMLString(child)) {
    destination.write(child);
  } else if (Array.isArray(child)) {
    const childRenders = child.map((c) => {
      return renderToBufferDestination((bufferDestination) => {
        return renderChild(bufferDestination, c);
      });
    });
    for (const childRender of childRenders) {
      if (!childRender)
        continue;
      await childRender.renderToFinalDestination(destination);
    }
  } else if (typeof child === "function") {
    await renderChild(destination, child());
  } else if (typeof child === "string") {
    destination.write(markHTMLString(escapeHTML(child)));
  } else if (!child && child !== 0)
    ;
  else if (isRenderInstance(child)) {
    await child.render(destination);
  } else if (isRenderTemplateResult(child)) {
    await child.render(destination);
  } else if (isAstroComponentInstance(child)) {
    await child.render(destination);
  } else if (ArrayBuffer.isView(child)) {
    destination.write(child);
  } else if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
    for await (const value of child) {
      await renderChild(destination, value);
    }
  } else {
    destination.write(child);
  }
}
function validateComponentProps(props, displayName) {
  if (props != null) {
    for (const prop of Object.keys(props)) {
      if (prop.startsWith("client:")) {
        console.warn(
          `You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
      }
    }
  }
}
function createAstroComponentInstance(result, displayName, factory, props, slots = {}) {
  validateComponentProps(props, displayName);
  const instance = new AstroComponentInstance(result, props, slots, factory);
  if (isAPropagatingComponent(result, factory)) {
    result._metadata.propagators.add(instance);
  }
  return instance;
}
function isAstroComponentInstance(obj) {
  return typeof obj === "object" && !!obj[astroComponentInstanceSym];
}
function isRenderTemplateResult(obj) {
  return typeof obj === "object" && !!obj[renderTemplateResultSym];
}
function renderTemplate(htmlParts, ...expressions) {
  return new RenderTemplateResult(htmlParts, expressions);
}
async function renderToString(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children,
    route
  );
  if (templateResult instanceof Response)
    return templateResult;
  let str = "";
  let renderedFirstPageChunk = false;
  const destination = {
    write(chunk2) {
      if (isPage && !renderedFirstPageChunk) {
        renderedFirstPageChunk = true;
        if (!result.partial && !DOCTYPE_EXP.test(String(chunk2))) {
          const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
          str += doctype;
        }
      }
      if (chunk2 instanceof Response)
        return;
      str += chunkToString(result, chunk2);
    }
  };
  await templateResult.render(destination);
  return str;
}
async function renderToReadableStream(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children,
    route
  );
  if (templateResult instanceof Response)
    return templateResult;
  let renderedFirstPageChunk = false;
  if (isPage) {
    await bufferHeadContent(result);
  }
  return new ReadableStream({
    start(controller) {
      const destination = {
        write(chunk2) {
          if (isPage && !renderedFirstPageChunk) {
            renderedFirstPageChunk = true;
            if (!result.partial && !DOCTYPE_EXP.test(String(chunk2))) {
              const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
              controller.enqueue(encoder.encode(doctype));
            }
          }
          if (chunk2 instanceof Response) {
            throw new AstroError({
              ...ResponseSentError
            });
          }
          const bytes = chunkToByteArray(result, chunk2);
          controller.enqueue(bytes);
        }
      };
      (async () => {
        try {
          await templateResult.render(destination);
          controller.close();
        } catch (e) {
          if (AstroError.is(e) && !e.loc) {
            e.setLocation({
              file: route?.component
            });
          }
          setTimeout(() => controller.error(e), 0);
        }
      })();
    }
  });
}
async function callComponentAsTemplateResultOrResponse(result, componentFactory, props, children, route) {
  const factoryResult = await componentFactory(result, props, children);
  if (factoryResult instanceof Response) {
    return factoryResult;
  } else if (!isRenderTemplateResult(factoryResult)) {
    throw new AstroError({
      ...OnlyResponseCanBeReturned,
      message: OnlyResponseCanBeReturned.message(route?.route, typeof factoryResult),
      location: {
        file: route?.component
      }
    });
  }
  return isHeadAndContent(factoryResult) ? factoryResult.content : factoryResult;
}
async function bufferHeadContent(result) {
  const iterator = result._metadata.propagators.values();
  while (true) {
    const { value, done } = iterator.next();
    if (done) {
      break;
    }
    const returnValue = await value.init(result);
    if (isHeadAndContent(returnValue)) {
      result._metadata.extraHead.push(returnValue.head);
    }
  }
}
async function renderToAsyncIterable(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children,
    route
  );
  if (templateResult instanceof Response)
    return templateResult;
  let renderedFirstPageChunk = false;
  if (isPage) {
    await bufferHeadContent(result);
  }
  let error2 = null;
  let next = promiseWithResolvers();
  let cancelled = false;
  const buffer = [];
  const iterator = {
    async next() {
      if (cancelled)
        return { done: true, value: void 0 };
      await next.promise;
      if (error2) {
        throw error2;
      }
      let length = 0;
      for (let i = 0, len = buffer.length; i < len; i++) {
        length += buffer[i].length;
      }
      let mergedArray = new Uint8Array(length);
      let offset = 0;
      for (let i = 0, len = buffer.length; i < len; i++) {
        const item = buffer[i];
        mergedArray.set(item, offset);
        offset += item.length;
      }
      buffer.length = 0;
      const returnValue = {
        // The iterator is done if there are no chunks to return.
        done: length === 0,
        value: mergedArray
      };
      return returnValue;
    },
    async return() {
      cancelled = true;
      return { done: true, value: void 0 };
    }
  };
  const destination = {
    write(chunk2) {
      if (isPage && !renderedFirstPageChunk) {
        renderedFirstPageChunk = true;
        if (!result.partial && !DOCTYPE_EXP.test(String(chunk2))) {
          const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
          buffer.push(encoder.encode(doctype));
        }
      }
      if (chunk2 instanceof Response) {
        throw new AstroError(ResponseSentError);
      }
      const bytes = chunkToByteArray(result, chunk2);
      if (bytes.length > 0) {
        buffer.push(bytes);
        next.resolve();
        next = promiseWithResolvers();
      }
    }
  };
  const renderPromise = templateResult.render(destination);
  renderPromise.then(() => {
    next.resolve();
  }).catch((err) => {
    error2 = err;
    next.resolve();
  });
  return {
    [Symbol.asyncIterator]() {
      return iterator;
    }
  };
}
function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlotToString(result, slots?.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName)
    return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}
function guessRenderers(componentUrl) {
  const extname = componentUrl?.split(".").pop();
  switch (extname) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid-js", "@astrojs/vue (jsx)"];
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid-js",
        "@astrojs/vue",
        "@astrojs/svelte",
        "@astrojs/lit"
      ];
  }
}
function isFragmentComponent(Component) {
  return Component === Fragment;
}
function isHTMLComponent(Component) {
  return Component && Component["astro:html"] === true;
}
function removeStaticAstroSlot(html, supportsAstroStaticSlot = true) {
  const exp = supportsAstroStaticSlot ? ASTRO_STATIC_SLOT_EXP : ASTRO_SLOT_EXP;
  return html.replace(exp, "");
}
async function renderFrameworkComponent(result, displayName, Component, _props, slots = {}) {
  if (!Component && !_props["client:only"]) {
    throw new Error(
      `Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  const { renderers: renderers2, clientDirectives } = result;
  const metadata = {
    astroStaticSlot: true,
    displayName
  };
  const { hydration, isPage, props, propsWithoutTransitionAttributes } = extractDirectives(
    _props,
    clientDirectives
  );
  let html = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  const validRenderers = renderers2.filter((r2) => r2.name !== "astro:jsx");
  const { children, slotInstructions } = await renderSlots(result, slots);
  let renderer;
  if (metadata.hydrate !== "only") {
    let isTagged = false;
    try {
      isTagged = Component && Component[Renderer];
    } catch {
    }
    if (isTagged) {
      const rendererName = Component[Renderer];
      renderer = renderers2.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error2;
      for (const r2 of renderers2) {
        try {
          if (await r2.ssr.check.call({ result }, Component, props, children)) {
            renderer = r2;
            break;
          }
        } catch (e) {
          error2 ??= e;
        }
      }
      if (!renderer && error2) {
        throw error2;
      }
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = await renderHTMLElement(
        result,
        Component,
        _props,
        slots
      );
      return {
        render(destination) {
          destination.write(output);
        }
      };
    }
  } else {
    if (metadata.hydrateArgs) {
      const passedName = metadata.hydrateArgs;
      const rendererName = rendererAliases.has(passedName) ? rendererAliases.get(passedName) : passedName;
      renderer = renderers2.find(
        ({ name }) => name === `@astrojs/${rendererName}` || name === rendererName
      );
    }
    if (!renderer && validRenderers.length === 1) {
      renderer = validRenderers[0];
    }
    if (!renderer) {
      const extname = metadata.componentUrl?.split(".").pop();
      renderer = renderers2.filter(
        ({ name }) => name === `@astrojs/${extname}` || name === extname
      )[0];
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      throw new AstroError({
        ...NoClientOnlyHint,
        message: NoClientOnlyHint.message(metadata.displayName),
        hint: NoClientOnlyHint.hint(
          probableRendererNames.map((r2) => r2.replace("@astrojs/", "")).join("|")
        )
      });
    } else if (typeof Component !== "string") {
      const matchingRenderers = validRenderers.filter(
        (r2) => probableRendererNames.includes(r2.name)
      );
      const plural = validRenderers.length > 1;
      if (matchingRenderers.length === 0) {
        throw new AstroError({
          ...NoMatchingRenderer,
          message: NoMatchingRenderer.message(
            metadata.displayName,
            metadata?.componentUrl?.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r2) => "`" + r2 + "`"))
          )
        });
      } else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
          { result },
          Component,
          propsWithoutTransitionAttributes,
          children,
          metadata
        ));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html = await renderSlotToString(result, slots?.fallback);
    } else {
      performance.now();
      ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
        { result },
        Component,
        propsWithoutTransitionAttributes,
        children,
        metadata
      ));
    }
  }
  if (renderer && !renderer.clientEntrypoint && renderer.name !== "@astrojs/lit" && metadata.hydrate) {
    throw new AstroError({
      ...NoClientEntrypoint,
      message: NoClientEntrypoint.message(
        displayName,
        metadata.hydrate,
        renderer.name
      )
    });
  }
  if (!html && typeof Component === "string") {
    const Tag = sanitizeElementName(Component);
    const childSlots = Object.values(children).join("");
    const renderTemplateResult = renderTemplate`<${Tag}${internalSpreadAttributes(
      props
    )}${markHTMLString(
      childSlots === "" && voidElementNames.test(Tag) ? `/>` : `>${childSlots}</${Tag}>`
    )}`;
    html = "";
    const destination = {
      write(chunk2) {
        if (chunk2 instanceof Response)
          return;
        html += chunkToString(result, chunk2);
      }
    };
    await renderTemplateResult.render(destination);
  }
  if (!hydration) {
    return {
      render(destination) {
        if (slotInstructions) {
          for (const instruction of slotInstructions) {
            destination.write(instruction);
          }
        }
        if (isPage || renderer?.name === "astro:jsx") {
          destination.write(html);
        } else if (html && html.length > 0) {
          destination.write(
            markHTMLString(removeStaticAstroSlot(html, renderer?.ssr?.supportsAstroStaticSlot))
          );
        }
      }
    };
  }
  const astroId = shorthash(
    `<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html}
${serializeProps(
      props,
      metadata
    )}`
  );
  const island = await generateHydrateScript(
    { renderer, result, astroId, props, attrs },
    metadata
  );
  let unrenderedSlots = [];
  if (html) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        let tagName = renderer?.ssr?.supportsAstroStaticSlot ? !!metadata.hydrate ? "astro-slot" : "astro-static-slot" : "astro-slot";
        let expectedHTML = key === "default" ? `<${tagName}>` : `<${tagName} name="${key}">`;
        if (!html.includes(expectedHTML)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template = unrenderedSlots.length > 0 ? unrenderedSlots.map(
    (key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`
  ).join("") : "";
  island.children = `${html ?? ""}${template}`;
  if (island.children) {
    island.props["await-children"] = "";
    island.children += `<!--astro:end-->`;
  }
  return {
    render(destination) {
      if (slotInstructions) {
        for (const instruction of slotInstructions) {
          destination.write(instruction);
        }
      }
      destination.write(createRenderInstruction({ type: "directive", hydration }));
      if (hydration.directive !== "only" && renderer?.ssr.renderHydrationScript) {
        destination.write(
          createRenderInstruction({
            type: "renderer-hydration-script",
            rendererName: renderer.name,
            render: renderer.ssr.renderHydrationScript
          })
        );
      }
      const renderedElement = renderElement$1("astro-island", island, false);
      destination.write(markHTMLString(renderedElement));
    }
  };
}
function sanitizeElementName(tag) {
  const unsafe = /[&<>'"\s]+/;
  if (!unsafe.test(tag))
    return tag;
  return tag.trim().split(unsafe)[0].trim();
}
async function renderFragmentComponent(result, slots = {}) {
  const children = await renderSlotToString(result, slots?.default);
  return {
    render(destination) {
      if (children == null)
        return;
      destination.write(children);
    }
  };
}
async function renderHTMLComponent(result, Component, _props, slots = {}) {
  const { slotInstructions, children } = await renderSlots(result, slots);
  const html = Component({ slots: children });
  const hydrationHtml = slotInstructions ? slotInstructions.map((instr) => chunkToString(result, instr)).join("") : "";
  return {
    render(destination) {
      destination.write(markHTMLString(hydrationHtml + html));
    }
  };
}
function renderAstroComponent(result, displayName, Component, props, slots = {}) {
  const instance = createAstroComponentInstance(result, displayName, Component, props, slots);
  return {
    async render(destination) {
      await instance.render(destination);
    }
  };
}
async function renderComponent(result, displayName, Component, props, slots = {}) {
  if (isPromise(Component)) {
    Component = await Component;
  }
  if (isFragmentComponent(Component)) {
    return await renderFragmentComponent(result, slots);
  }
  props = normalizeProps(props);
  if (isHTMLComponent(Component)) {
    return await renderHTMLComponent(result, Component, props, slots);
  }
  if (isAstroComponentFactory(Component)) {
    return renderAstroComponent(result, displayName, Component, props, slots);
  }
  return await renderFrameworkComponent(result, displayName, Component, props, slots);
}
function normalizeProps(props) {
  if (props["class:list"] !== void 0) {
    const value = props["class:list"];
    delete props["class:list"];
    props["class"] = clsx(props["class"], value);
    if (props["class"] === "") {
      delete props["class"];
    }
  }
  return props;
}
async function renderComponentToString(result, displayName, Component, props, slots = {}, isPage = false, route) {
  let str = "";
  let renderedFirstPageChunk = false;
  let head = "";
  if (nonAstroPageNeedsHeadInjection(Component)) {
    for (const headChunk of maybeRenderHead()) {
      head += chunkToString(result, headChunk);
    }
  }
  try {
    const destination = {
      write(chunk2) {
        if (isPage && !renderedFirstPageChunk) {
          renderedFirstPageChunk = true;
          if (!result.partial && !/<!doctype html/i.test(String(chunk2))) {
            const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
            str += doctype + head;
          }
        }
        if (chunk2 instanceof Response)
          return;
        str += chunkToString(result, chunk2);
      }
    };
    const renderInstance = await renderComponent(result, displayName, Component, props, slots);
    await renderInstance.render(destination);
  } catch (e) {
    if (AstroError.is(e) && !e.loc) {
      e.setLocation({
        file: route?.component
      });
    }
    throw e;
  }
  return str;
}
function nonAstroPageNeedsHeadInjection(pageComponent) {
  return !!pageComponent?.[needsHeadRenderingSymbol];
}
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case typeof vnode === "function":
      return vnode;
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode):
      return markHTMLString(
        (await Promise.all(vnode.map((v) => renderJSX(result, v)))).join("")
      );
  }
  let skip;
  if (vnode.props) {
    if (vnode.props[Skip.symbol]) {
      skip = vnode.props[Skip.symbol];
    } else {
      skip = new Skip(vnode);
    }
  } else {
    skip = new Skip(vnode);
  }
  return renderJSXVNode(result, vnode, skip);
}
async function renderJSXVNode(result, vnode, skip) {
  if (isVNode(vnode)) {
    switch (true) {
      case !vnode.type: {
        throw new Error(`Unable to render ${result.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      }
      case vnode.type === Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case vnode.type.isAstroComponentFactory: {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        const str = await renderToString(result, vnode.type, props, slots);
        if (str instanceof Response) {
          throw str;
        }
        const html = markHTMLString(str);
        return html;
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder):
        return markHTMLString(await renderElement(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = function(child) {
        if (Array.isArray(child)) {
          return child.map((c) => extractSlots2(c));
        }
        if (!isVNode(child)) {
          _slots.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots[child.props.slot] = [..._slots[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots.default.push(child);
      };
      if (typeof vnode.type === "function" && vnode.type["astro:renderer"]) {
        skip.increment();
      }
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function") {
        if (skip.haveNoTried() || skip.isCompleted()) {
          useConsoleFilter();
          try {
            const output2 = await vnode.type(vnode.props ?? {});
            let renderResult;
            if (output2?.[AstroJSX]) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            } else if (!output2) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            }
          } catch (e) {
            if (skip.isCompleted()) {
              throw e;
            }
            skip.increment();
          } finally {
            finishUsingConsoleFilter();
          }
        } else {
          skip.increment();
        }
      }
      const { children = null, ...props } = vnode.props ?? {};
      const _slots = {
        default: []
      };
      extractSlots2(children);
      for (const [key, value] of Object.entries(props)) {
        if (value["$$slot"]) {
          _slots[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots)) {
        slotPromises.push(
          renderJSX(result, value).then((output2) => {
            if (output2.toString().trim().length === 0)
              return;
            slots[key] = () => output2;
          })
        );
      }
      await Promise.all(slotPromises);
      props[Skip.symbol] = skip;
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"]) {
        output = await renderComponentToString(
          result,
          vnode.props["client:display-name"] ?? "",
          null,
          props,
          slots
        );
      } else {
        output = await renderComponentToString(
          result,
          typeof vnode.type === "function" ? vnode.type.name : vnode.type,
          vnode.type,
          props,
          slots
        );
      }
      return markHTMLString(output);
    }
  }
  return markHTMLString(`${vnode}`);
}
async function renderElement(result, tag, { children, ...props }) {
  return markHTMLString(
    `<${tag}${spreadAttributes(props)}${markHTMLString(
      (children == null || children == "") && voidElementNames.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, prerenderElementChildren(tag, children))}</${tag}>`
    )}`
  );
}
function prerenderElementChildren(tag, children) {
  if (typeof children === "string" && (tag === "style" || tag === "script")) {
    return markHTMLString(children);
  } else {
    return children;
  }
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error2) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}
async function renderPage(result, componentFactory, props, children, streaming, route) {
  if (!isAstroComponentFactory(componentFactory)) {
    result._metadata.headInTree = result.componentMetadata.get(componentFactory.moduleId)?.containsHead ?? false;
    const pageProps = { ...props ?? {}, "server:root": true };
    const str = await renderComponentToString(
      result,
      componentFactory.name,
      componentFactory,
      pageProps,
      {},
      true,
      route
    );
    const bytes = encoder.encode(str);
    return new Response(bytes, {
      headers: new Headers([
        ["Content-Type", "text/html; charset=utf-8"],
        ["Content-Length", bytes.byteLength.toString()]
      ])
    });
  }
  result._metadata.headInTree = result.componentMetadata.get(componentFactory.moduleId)?.containsHead ?? false;
  let body;
  if (streaming) {
    if (isNode) {
      const nodeBody = await renderToAsyncIterable(
        result,
        componentFactory,
        props,
        children,
        true,
        route
      );
      body = nodeBody;
    } else {
      body = await renderToReadableStream(result, componentFactory, props, children, true, route);
    }
  } else {
    body = await renderToString(result, componentFactory, props, children, true, route);
  }
  if (body instanceof Response)
    return body;
  const init2 = result.response;
  const headers = new Headers(init2.headers);
  if (!streaming && typeof body === "string") {
    body = encoder.encode(body);
    headers.set("Content-Length", body.byteLength.toString());
  }
  if (route?.component.endsWith(".md")) {
    headers.set("Content-Type", "text/html; charset=utf-8");
  }
  const response = new Response(body, { ...init2, headers });
  return response;
}
function spreadAttributes(values = {}, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, true);
  }
  return markHTMLString(output);
}
var import_cssesc, ClientAddressNotAvailable, StaticClientAddressNotAvailable, NoMatchingStaticPathFound, OnlyResponseCanBeReturned, MissingMediaQueryDirective, NoMatchingRenderer, NoClientEntrypoint, NoClientOnlyHint, InvalidGetStaticPathsEntry, InvalidGetStaticPathsReturn, GetStaticPathsExpectedParams, GetStaticPathsInvalidRouteParam, GetStaticPathsRequired, ReservedSlotName, NoMatchingImport, InvalidComponentArgs, PageNumberParamNotFound, ImageMissingAlt, InvalidImageService, MissingImageDimension, FailedToFetchRemoteImageDimensions, UnsupportedImageFormat, UnsupportedImageConversion, PrerenderDynamicEndpointPathCollide, ExpectedImage, ExpectedImageOptions, IncompatibleDescriptorOptions, ResponseSentError, MiddlewareNoDataOrNextCalled, MiddlewareNotAResponse, LocalsNotAnObject, AstroResponseHeadersReassigned, LocalImageUsedWrongly, AstroGlobUsedOutside, AstroGlobNoMatch, AstroError, ASTRO_VERSION, REROUTE_DIRECTIVE_HEADER, ROUTE_TYPE_HEADER, DEFAULT_404_COMPONENT, REROUTABLE_STATUS_CODES, clientAddressSymbol, clientLocalsSymbol, responseSentSymbol, escapeHTML, HTMLString, markHTMLString, AstroJSX, RenderInstructionSymbol, PROP_TYPE, transitionDirectivesToCopyOnIsland, dictionary, binary, headAndContentSym, astro_island_prebuilt_default, ISLAND_STYLES, voidElementNames, htmlBooleanAttributes, htmlEnumAttributes, svgEnumAttributes, STATIC_DIRECTIVES, toIdent, toAttributeString, kebab, toStyleString, isNode, uniqueElements, slotString, SlotString, Fragment, Renderer, encoder, decoder, astroComponentInstanceSym, AstroComponentInstance, renderTemplateResultSym, RenderTemplateResult, DOCTYPE_EXP, needsHeadRenderingSymbol, rendererAliases, ASTRO_SLOT_EXP, ASTRO_STATIC_SLOT_EXP, ClientOnlyPlaceholder, Skip, originalConsoleError, consoleFilterRefs;
var init_astro_sKHNJ3WQ = __esm({
  "dist/$server_build/chunks/astro_sKHNJ3WQ.mjs"() {
    "use strict";
    init_colors();
    init_esm();
    init_clsx_m();
    import_cssesc = __toESM(require_cssesc(), 1);
    ClientAddressNotAvailable = {
      name: "ClientAddressNotAvailable",
      title: "`Astro.clientAddress` is not available in current adapter.",
      message: (adapterName) => `\`Astro.clientAddress\` is not available in the \`${adapterName}\` adapter. File an issue with the adapter to add support.`
    };
    StaticClientAddressNotAvailable = {
      name: "StaticClientAddressNotAvailable",
      title: "`Astro.clientAddress` is not available in static mode.",
      message: "`Astro.clientAddress` is only available when using `output: 'server'` or `output: 'hybrid'`. Update your Astro config if you need SSR features.",
      hint: "See https://docs.astro.build/en/guides/server-side-rendering/ for more information on how to enable SSR."
    };
    NoMatchingStaticPathFound = {
      name: "NoMatchingStaticPathFound",
      title: "No static path found for requested path.",
      message: (pathName) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${pathName}\`.`,
      hint: (possibleRoutes) => `Possible dynamic routes being matched: ${possibleRoutes.join(", ")}.`
    };
    OnlyResponseCanBeReturned = {
      name: "OnlyResponseCanBeReturned",
      title: "Invalid type returned by Astro page.",
      message: (route, returnedValue) => `Route \`${route ? route : ""}\` returned a \`${returnedValue}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
      hint: "See https://docs.astro.build/en/guides/server-side-rendering/#response for more information."
    };
    MissingMediaQueryDirective = {
      name: "MissingMediaQueryDirective",
      title: "Missing value for `client:media` directive.",
      message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'
    };
    NoMatchingRenderer = {
      name: "NoMatchingRenderer",
      title: "No matching renderer found.",
      message: (componentName, componentExtension, plural, validRenderersCount) => `Unable to render \`${componentName}\`.

${validRenderersCount > 0 ? `There ${plural ? "are" : "is"} ${validRenderersCount} renderer${plural ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were" : "it was not"} able to server-side render \`${componentName}\`.` : `No valid renderer was found ${componentExtension ? `for the \`.${componentExtension}\` file extension.` : `for this file extension.`}`}`,
      hint: (probableRenderers) => `Did you mean to enable the ${probableRenderers} integration?

See https://docs.astro.build/en/guides/framework-components/ for more information on how to install and configure integrations.`
    };
    NoClientEntrypoint = {
      name: "NoClientEntrypoint",
      title: "No client entrypoint specified in renderer.",
      message: (componentName, clientDirective, rendererName) => `\`${componentName}\` component has a \`client:${clientDirective}\` directive, but no client entrypoint was provided by \`${rendererName}\`.`,
      hint: "See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."
    };
    NoClientOnlyHint = {
      name: "NoClientOnlyHint",
      title: "Missing hint on client:only directive.",
      message: (componentName) => `Unable to render \`${componentName}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
      hint: (probableRenderers) => `Did you mean to pass \`client:only="${probableRenderers}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`
    };
    InvalidGetStaticPathsEntry = {
      name: "InvalidGetStaticPathsEntry",
      title: "Invalid entry inside getStaticPath's return value",
      message: (entryType) => `Invalid entry returned by getStaticPaths. Expected an object, got \`${entryType}\``,
      hint: "If you're using a `.map` call, you might be looking for `.flatMap()` instead. See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
    };
    InvalidGetStaticPathsReturn = {
      name: "InvalidGetStaticPathsReturn",
      title: "Invalid value returned by getStaticPaths.",
      message: (returnType) => `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${returnType}\``,
      hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
    };
    GetStaticPathsExpectedParams = {
      name: "GetStaticPathsExpectedParams",
      title: "Missing params property on `getStaticPaths` route.",
      message: "Missing or empty required `params` property on `getStaticPaths` route.",
      hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
    };
    GetStaticPathsInvalidRouteParam = {
      name: "GetStaticPathsInvalidRouteParam",
      title: "Invalid value for `getStaticPaths` route parameter.",
      message: (key, value, valueType) => `Invalid getStaticPaths route parameter for \`${key}\`. Expected undefined, a string or a number, received \`${valueType}\` (\`${value}\`)`,
      hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
    };
    GetStaticPathsRequired = {
      name: "GetStaticPathsRequired",
      title: "`getStaticPaths()` function required for dynamic routes.",
      message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
      hint: `See https://docs.astro.build/en/guides/routing/#dynamic-routes for more information on dynamic routes.

Alternatively, set \`output: "server"\` or \`output: "hybrid"\` in your Astro config file to switch to a non-static server build. This error can also occur if using \`export const prerender = true;\`.
See https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.`
    };
    ReservedSlotName = {
      name: "ReservedSlotName",
      title: "Invalid slot name.",
      message: (slotName) => `Unable to create a slot named \`${slotName}\`. \`${slotName}\` is a reserved slot name. Please update the name of this slot.`
    };
    NoMatchingImport = {
      name: "NoMatchingImport",
      title: "No import found for component.",
      message: (componentName) => `Could not render \`${componentName}\`. No matching import has been found for \`${componentName}\`.`,
      hint: "Please make sure the component is properly imported."
    };
    InvalidComponentArgs = {
      name: "InvalidComponentArgs",
      title: "Invalid component arguments.",
      message: (name) => `Invalid arguments passed to${name ? ` <${name}>` : ""} component.`,
      hint: "Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."
    };
    PageNumberParamNotFound = {
      name: "PageNumberParamNotFound",
      title: "Page number param not found.",
      message: (paramName) => `[paginate()] page number param \`${paramName}\` not found in your filepath.`,
      hint: "Rename your file to `[page].astro` or `[...page].astro`."
    };
    ImageMissingAlt = {
      name: "ImageMissingAlt",
      title: 'Image missing required "alt" property.',
      message: 'Image missing "alt" property. "alt" text is required to describe important images on the page.',
      hint: 'Use an empty string ("") for decorative images.'
    };
    InvalidImageService = {
      name: "InvalidImageService",
      title: "Error while loading image service.",
      message: "There was an error loading the configured image service. Please see the stack trace for more information."
    };
    MissingImageDimension = {
      name: "MissingImageDimension",
      title: "Missing image dimensions",
      message: (missingDimension, imageURL) => `Missing ${missingDimension === "both" ? "width and height attributes" : `${missingDimension} attribute`} for ${imageURL}. When using remote images, both dimensions are required unless in order to avoid CLS.`,
      hint: "If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets). You can also use `inferSize={true}` for remote images to get the original dimensions."
    };
    FailedToFetchRemoteImageDimensions = {
      name: "FailedToFetchRemoteImageDimensions",
      title: "Failed to retrieve remote image dimensions",
      message: (imageURL) => `Failed to get the dimensions for ${imageURL}.`,
      hint: "Verify your remote image URL is accurate, and that you are not using `inferSize` with a file located in your `public/` folder."
    };
    UnsupportedImageFormat = {
      name: "UnsupportedImageFormat",
      title: "Unsupported image format",
      message: (format, imagePath, supportedFormats) => `Received unsupported format \`${format}\` from \`${imagePath}\`. Currently only ${supportedFormats.join(
        ", "
      )} are supported by our image services.`,
      hint: "Using an `img` tag directly instead of the `Image` component might be what you're looking for."
    };
    UnsupportedImageConversion = {
      name: "UnsupportedImageConversion",
      title: "Unsupported image conversion",
      message: "Converting between vector (such as SVGs) and raster (such as PNGs and JPEGs) images is not currently supported."
    };
    PrerenderDynamicEndpointPathCollide = {
      name: "PrerenderDynamicEndpointPathCollide",
      title: "Prerendered dynamic endpoint has path collision.",
      message: (pathname) => `Could not render \`${pathname}\` with an \`undefined\` param as the generated path will collide during prerendering. Prevent passing \`undefined\` as \`params\` for the endpoint's \`getStaticPaths()\` function, or add an additional extension to the endpoint's filename.`,
      hint: (filename) => `Rename \`${filename}\` to \`${filename.replace(/\.(?:js|ts)/, (m) => `.json` + m)}\``
    };
    ExpectedImage = {
      name: "ExpectedImage",
      title: "Expected src to be an image.",
      message: (src, typeofOptions, fullOptions) => `Expected \`src\` property for \`getImage\` or \`<Image />\` to be either an ESM imported image or a string with the path of a remote image. Received \`${src}\` (type: \`${typeofOptions}\`).

Full serialized options received: \`${fullOptions}\`.`,
      hint: "This error can often happen because of a wrong path. Make sure the path to your image is correct. If you're passing an async function, make sure to call and await it."
    };
    ExpectedImageOptions = {
      name: "ExpectedImageOptions",
      title: "Expected image options.",
      message: (options) => `Expected getImage() parameter to be an object. Received \`${options}\`.`
    };
    IncompatibleDescriptorOptions = {
      name: "IncompatibleDescriptorOptions",
      title: "Cannot set both `densities` and `widths`",
      message: "Only one of `densities` or `widths` can be specified. In most cases, you'll probably want to use only `widths` if you require specific widths.",
      hint: "Those attributes are used to construct a `srcset` attribute, which cannot have both `x` and `w` descriptors."
    };
    ResponseSentError = {
      name: "ResponseSentError",
      title: "Unable to set response.",
      message: "The response has already been sent to the browser and cannot be altered."
    };
    MiddlewareNoDataOrNextCalled = {
      name: "MiddlewareNoDataOrNextCalled",
      title: "The middleware didn't return a `Response`.",
      message: "Make sure your middleware returns a `Response` object, either directly or by returning the `Response` from calling the `next` function."
    };
    MiddlewareNotAResponse = {
      name: "MiddlewareNotAResponse",
      title: "The middleware returned something that is not a `Response` object.",
      message: "Any data returned from middleware must be a valid `Response` object."
    };
    LocalsNotAnObject = {
      name: "LocalsNotAnObject",
      title: "Value assigned to `locals` is not accepted.",
      message: "`locals` can only be assigned to an object. Other values like numbers, strings, etc. are not accepted.",
      hint: "If you tried to remove some information from the `locals` object, try to use `delete` or set the property to `undefined`."
    };
    AstroResponseHeadersReassigned = {
      name: "AstroResponseHeadersReassigned",
      title: "`Astro.response.headers` must not be reassigned.",
      message: "Individual headers can be added to and removed from `Astro.response.headers`, but it must not be replaced with another instance of `Headers` altogether.",
      hint: "Consider using `Astro.response.headers.add()`, and `Astro.response.headers.delete()`."
    };
    LocalImageUsedWrongly = {
      name: "LocalImageUsedWrongly",
      title: "Local images must be imported.",
      message: (imageFilePath) => `\`Image\`'s and \`getImage\`'s \`src\` parameter must be an imported image or an URL, it cannot be a string filepath. Received \`${imageFilePath}\`.`,
      hint: "If you want to use an image from your `src` folder, you need to either import it or if the image is coming from a content collection, use the [image() schema helper](https://docs.astro.build/en/guides/images/#images-in-content-collections). See https://docs.astro.build/en/guides/images/#src-required for more information on the `src` property."
    };
    AstroGlobUsedOutside = {
      name: "AstroGlobUsedOutside",
      title: "Astro.glob() used outside of an Astro file.",
      message: (globStr) => `\`Astro.glob(${globStr})\` can only be used in \`.astro\` files. \`import.meta.glob(${globStr})\` can be used instead to achieve a similar result.`,
      hint: "See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import"
    };
    AstroGlobNoMatch = {
      name: "AstroGlobNoMatch",
      title: "Astro.glob() did not match any files.",
      message: (globStr) => `\`Astro.glob(${globStr})\` did not return any matching files.`,
      hint: "Check the pattern for typos."
    };
    AstroError = class extends Error {
      loc;
      title;
      hint;
      frame;
      type = "AstroError";
      constructor(props, options) {
        const { name, title, message, stack, location, hint, frame } = props;
        super(message, options);
        this.title = title;
        this.name = name;
        if (message)
          this.message = message;
        this.stack = stack ? stack : this.stack;
        this.loc = location;
        this.hint = hint;
        this.frame = frame;
      }
      setLocation(location) {
        this.loc = location;
      }
      setName(name) {
        this.name = name;
      }
      setMessage(message) {
        this.message = message;
      }
      setHint(hint) {
        this.hint = hint;
      }
      setFrame(source, location) {
        this.frame = codeFrame(source, location);
      }
      static is(err) {
        return err.type === "AstroError";
      }
    };
    ASTRO_VERSION = "4.5.5";
    REROUTE_DIRECTIVE_HEADER = "X-Astro-Reroute";
    ROUTE_TYPE_HEADER = "X-Astro-Route-Type";
    DEFAULT_404_COMPONENT = "astro-default-404";
    REROUTABLE_STATUS_CODES = [404, 500];
    clientAddressSymbol = Symbol.for("astro.clientAddress");
    clientLocalsSymbol = Symbol.for("astro.locals");
    responseSentSymbol = Symbol.for("astro.responseSent");
    escapeHTML = escape;
    HTMLString = class extends String {
      get [Symbol.toStringTag]() {
        return "HTMLString";
      }
    };
    markHTMLString = (value) => {
      if (value instanceof HTMLString) {
        return value;
      }
      if (typeof value === "string") {
        return new HTMLString(value);
      }
      return value;
    };
    AstroJSX = "astro:jsx";
    RenderInstructionSymbol = Symbol.for("astro:render");
    PROP_TYPE = {
      Value: 0,
      JSON: 1,
      // Actually means Array
      RegExp: 2,
      Date: 3,
      Map: 4,
      Set: 5,
      BigInt: 6,
      URL: 7,
      Uint8Array: 8,
      Uint16Array: 9,
      Uint32Array: 10
    };
    transitionDirectivesToCopyOnIsland = Object.freeze([
      "data-astro-transition-scope",
      "data-astro-transition-persist",
      "data-astro-transition-persist-props"
    ]);
    dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
    binary = dictionary.length;
    headAndContentSym = Symbol.for("astro.headAndContent");
    astro_island_prebuilt_default = `(()=>{var v=Object.defineProperty;var A=(c,s,a)=>s in c?v(c,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):c[s]=a;var d=(c,s,a)=>(A(c,typeof s!="symbol"?s+"":s,a),a);var u;{let c={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},s=t=>{let[e,n]=t;return e in c?c[e](n):void 0},a=t=>t.map(s),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([e,n])=>[e,s(n)]));customElements.get("astro-island")||customElements.define("astro-island",(u=class extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var f;if(!this.hydrator||!this.isConnected)return;let e=(f=this.parentElement)==null?void 0:f.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let n=this.querySelectorAll("astro-slot"),r={},l=this.querySelectorAll("template[data-astro-template]");for(let o of l){let i=o.closest(this.tagName);i!=null&&i.isSameNode(this)&&(r[o.getAttribute("data-astro-template")||"default"]=o.innerHTML,o.remove())}for(let o of n){let i=o.closest(this.tagName);i!=null&&i.isSameNode(this)&&(r[o.getAttribute("name")||"default"]=o.innerHTML)}let h;try{h=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(o){let i=this.getAttribute("component-url")||"<unknown>",b=this.getAttribute("component-export");throw b&&(i+=\` (export \${b})\`),console.error(\`[hydrate] Error parsing props for component \${i}\`,this.getAttribute("props"),o),o}let p;await this.hydrator(this)(this.Component,h,r,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),n.disconnect(),this.childrenConnectedCallback()},n=new MutationObserver(()=>{var r;((r=this.lastChild)==null?void 0:r.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});n.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),n=this.getAttribute("client");if(Astro[n]===void 0){window.addEventListener(\`astro:\${n}\`,()=>this.start(),{once:!0});return}try{await Astro[n](async()=>{let r=this.getAttribute("renderer-url"),[l,{default:h}]=await Promise.all([import(this.getAttribute("component-url")),r?import(r):()=>()=>{}]),p=this.getAttribute("component-export")||"default";if(!p.includes("."))this.Component=l[p];else{this.Component=l;for(let y of p.split("."))this.Component=this.Component[y]}return this.hydrator=h,this.hydrate},e,this)}catch(r){console.error(\`[astro-island] Error hydrating \${this.getAttribute("component-url")}\`,r)}}attributeChangedCallback(){this.hydrate()}},d(u,"observedAttributes",["props"]),u))}})();`;
    ISLAND_STYLES = `<style>astro-island,astro-slot,astro-static-slot{display:contents}</style>`;
    voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
    htmlBooleanAttributes = /^(?:allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
    htmlEnumAttributes = /^(?:contenteditable|draggable|spellcheck|value)$/i;
    svgEnumAttributes = /^(?:autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
    STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
    toIdent = (k) => k.trim().replace(/(?!^)\b\w|\s+|\W+/g, (match, index2) => {
      if (/\W/.test(match))
        return "";
      return index2 === 0 ? match : match.toUpperCase();
    });
    toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
    kebab = (k) => k.toLowerCase() === k ? k : k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
    toStyleString = (obj) => Object.entries(obj).filter(([_, v]) => typeof v === "string" && v.trim() || typeof v === "number").map(([k, v]) => {
      if (k[0] !== "-" && k[1] !== "-")
        return `${kebab(k)}:${v}`;
      return `${k}:${v}`;
    }).join(";");
    isNode = typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]";
    uniqueElements = (item, index2, all) => {
      const props = JSON.stringify(item.props);
      const children = item.children;
      return index2 === all.findIndex((i) => JSON.stringify(i.props) === props && i.children == children);
    };
    slotString = Symbol.for("astro:slot-string");
    SlotString = class extends HTMLString {
      instructions;
      [slotString];
      constructor(content, instructions) {
        super(content);
        this.instructions = instructions;
        this[slotString] = true;
      }
    };
    Fragment = Symbol.for("astro:fragment");
    Renderer = Symbol.for("astro:renderer");
    encoder = new TextEncoder();
    decoder = new TextDecoder();
    astroComponentInstanceSym = Symbol.for("astro.componentInstance");
    AstroComponentInstance = class {
      [astroComponentInstanceSym] = true;
      result;
      props;
      slotValues;
      factory;
      returnValue;
      constructor(result, props, slots, factory) {
        this.result = result;
        this.props = props;
        this.factory = factory;
        this.slotValues = {};
        for (const name in slots) {
          let didRender = false;
          let value = slots[name](result);
          this.slotValues[name] = () => {
            if (!didRender) {
              didRender = true;
              return value;
            }
            return slots[name](result);
          };
        }
      }
      async init(result) {
        if (this.returnValue !== void 0)
          return this.returnValue;
        this.returnValue = this.factory(result, this.props, this.slotValues);
        return this.returnValue;
      }
      async render(destination) {
        if (this.returnValue === void 0) {
          await this.init(this.result);
        }
        let value = this.returnValue;
        if (isPromise(value)) {
          value = await value;
        }
        if (isHeadAndContent(value)) {
          await value.content.render(destination);
        } else {
          await renderChild(destination, value);
        }
      }
    };
    renderTemplateResultSym = Symbol.for("astro.renderTemplateResult");
    RenderTemplateResult = class {
      [renderTemplateResultSym] = true;
      htmlParts;
      expressions;
      error;
      constructor(htmlParts, expressions) {
        this.htmlParts = htmlParts;
        this.error = void 0;
        this.expressions = expressions.map((expression) => {
          if (isPromise(expression)) {
            return Promise.resolve(expression).catch((err) => {
              if (!this.error) {
                this.error = err;
                throw err;
              }
            });
          }
          return expression;
        });
      }
      async render(destination) {
        const expRenders = this.expressions.map((exp) => {
          return renderToBufferDestination((bufferDestination) => {
            if (exp || exp === 0) {
              return renderChild(bufferDestination, exp);
            }
          });
        });
        for (let i = 0; i < this.htmlParts.length; i++) {
          const html = this.htmlParts[i];
          const expRender = expRenders[i];
          destination.write(markHTMLString(html));
          if (expRender) {
            await expRender.renderToFinalDestination(destination);
          }
        }
      }
    };
    DOCTYPE_EXP = /<!doctype html/i;
    needsHeadRenderingSymbol = Symbol.for("astro.needsHeadRendering");
    rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
    ASTRO_SLOT_EXP = /<\/?astro-slot\b[^>]*>/g;
    ASTRO_STATIC_SLOT_EXP = /<\/?astro-static-slot\b[^>]*>/g;
    ClientOnlyPlaceholder = "astro-client-only";
    Skip = class {
      constructor(vnode) {
        this.vnode = vnode;
        this.count = 0;
      }
      count;
      increment() {
        this.count++;
      }
      haveNoTried() {
        return this.count === 0;
      }
      isCompleted() {
        return this.count > 2;
      }
      static symbol = Symbol("astro:jsx:skip");
    };
    consoleFilterRefs = 0;
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("").reduce((v, c) => (v[c.charCodeAt(0)] = c, v), []);
    "-0123456789_".split("").reduce((v, c) => (v[c.charCodeAt(0)] = c, v), []);
  }
});

// ../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/Mime.js
var require_Mime = __commonJS({
  "../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/Mime.js"(exports, module) {
    "use strict";
    function Mime() {
      this._types = /* @__PURE__ */ Object.create(null);
      this._extensions = /* @__PURE__ */ Object.create(null);
      for (let i = 0; i < arguments.length; i++) {
        this.define(arguments[i]);
      }
      this.define = this.define.bind(this);
      this.getType = this.getType.bind(this);
      this.getExtension = this.getExtension.bind(this);
    }
    Mime.prototype.define = function(typeMap, force) {
      for (let type in typeMap) {
        let extensions = typeMap[type].map(function(t) {
          return t.toLowerCase();
        });
        type = type.toLowerCase();
        for (let i = 0; i < extensions.length; i++) {
          const ext = extensions[i];
          if (ext[0] === "*") {
            continue;
          }
          if (!force && ext in this._types) {
            throw new Error(
              'Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".'
            );
          }
          this._types[ext] = type;
        }
        if (force || !this._extensions[type]) {
          const ext = extensions[0];
          this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
        }
      }
    };
    Mime.prototype.getType = function(path) {
      path = String(path);
      let last = path.replace(/^.*[/\\]/, "").toLowerCase();
      let ext = last.replace(/^.*\./, "").toLowerCase();
      let hasPath = last.length < path.length;
      let hasDot = ext.length < last.length - 1;
      return (hasDot || !hasPath) && this._types[ext] || null;
    };
    Mime.prototype.getExtension = function(type) {
      type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
      return type && this._extensions[type.toLowerCase()] || null;
    };
    module.exports = Mime;
  }
});

// ../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/types/standard.js
var require_standard = __commonJS({
  "../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/types/standard.js"(exports, module) {
    module.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
  }
});

// ../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/lite.js
var require_lite = __commonJS({
  "../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/lite.js"(exports, module) {
    "use strict";
    var Mime = require_Mime();
    module.exports = new Mime(require_standard());
  }
});

// dist/$server_build/chunks/astro/assets-service_BZ7sqiXt.mjs
var assets_service_BZ7sqiXt_exports = {};
__export(assets_service_BZ7sqiXt_exports, {
  D: () => DEFAULT_HASH_PROPS,
  a: () => isESMImportedImage,
  b: () => isLocalService,
  c: () => isRemoteAllowed,
  i: () => isRemoteImage,
  n: () => noop
});
function isESMImportedImage(src) {
  return typeof src === "object";
}
function isRemoteImage(src) {
  return typeof src === "string";
}
function matchPattern(url, remotePattern) {
  return matchProtocol(url, remotePattern.protocol) && matchHostname(url, remotePattern.hostname, true) && matchPort(url, remotePattern.port) && matchPathname(url, remotePattern.pathname, true);
}
function matchPort(url, port) {
  return !port || port === url.port;
}
function matchProtocol(url, protocol) {
  return !protocol || protocol === url.protocol.slice(0, -1);
}
function matchHostname(url, hostname, allowWildcard) {
  if (!hostname) {
    return true;
  } else if (!allowWildcard || !hostname.startsWith("*")) {
    return hostname === url.hostname;
  } else if (hostname.startsWith("**.")) {
    const slicedHostname = hostname.slice(2);
    return slicedHostname !== url.hostname && url.hostname.endsWith(slicedHostname);
  } else if (hostname.startsWith("*.")) {
    const slicedHostname = hostname.slice(1);
    const additionalSubdomains = url.hostname.replace(slicedHostname, "").split(".").filter(Boolean);
    return additionalSubdomains.length === 1;
  }
  return false;
}
function matchPathname(url, pathname, allowWildcard) {
  if (!pathname) {
    return true;
  } else if (!allowWildcard || !pathname.endsWith("*")) {
    return pathname === url.pathname;
  } else if (pathname.endsWith("/**")) {
    const slicedPathname = pathname.slice(0, -2);
    return slicedPathname !== url.pathname && url.pathname.startsWith(slicedPathname);
  } else if (pathname.endsWith("/*")) {
    const slicedPathname = pathname.slice(0, -1);
    const additionalPathChunks = url.pathname.replace(slicedPathname, "").split("/").filter(Boolean);
    return additionalPathChunks.length === 1;
  }
  return false;
}
function isRemoteAllowed(src, {
  domains = [],
  remotePatterns = []
}) {
  if (!isRemotePath(src))
    return false;
  const url = new URL(src);
  return domains.some((domain) => matchHostname(url, domain)) || remotePatterns.some((remotePattern) => matchPattern(url, remotePattern));
}
function isLocalService(service) {
  if (!service) {
    return false;
  }
  return "transform" in service;
}
function getTargetDimensions(options) {
  let targetWidth = options.width;
  let targetHeight = options.height;
  if (isESMImportedImage(options.src)) {
    const aspectRatio = options.src.width / options.src.height;
    if (targetHeight && !targetWidth) {
      targetWidth = Math.round(targetHeight * aspectRatio);
    } else if (targetWidth && !targetHeight) {
      targetHeight = Math.round(targetWidth / aspectRatio);
    } else if (!targetWidth && !targetHeight) {
      targetWidth = options.src.width;
      targetHeight = options.src.height;
    }
  }
  return {
    targetWidth,
    targetHeight
  };
}
var VALID_SUPPORTED_FORMATS, DEFAULT_OUTPUT_FORMAT, DEFAULT_HASH_PROPS, baseService, noopService, noop_default, noop;
var init_assets_service_BZ7sqiXt = __esm({
  "dist/$server_build/chunks/astro/assets-service_BZ7sqiXt.mjs"() {
    "use strict";
    init_path();
    init_astro_sKHNJ3WQ();
    VALID_SUPPORTED_FORMATS = [
      "jpeg",
      "jpg",
      "png",
      "tiff",
      "webp",
      "gif",
      "svg",
      "avif"
    ];
    DEFAULT_OUTPUT_FORMAT = "webp";
    DEFAULT_HASH_PROPS = ["src", "width", "height", "format", "quality"];
    baseService = {
      propertiesToHash: DEFAULT_HASH_PROPS,
      validateOptions(options) {
        if (!options.src || typeof options.src !== "string" && typeof options.src !== "object") {
          throw new AstroError({
            ...ExpectedImage,
            message: ExpectedImage.message(
              JSON.stringify(options.src),
              typeof options.src,
              JSON.stringify(options, (_, v) => v === void 0 ? null : v)
            )
          });
        }
        if (!isESMImportedImage(options.src)) {
          if (options.src.startsWith("/@fs/") || !isRemotePath(options.src) && !options.src.startsWith("/")) {
            throw new AstroError({
              ...LocalImageUsedWrongly,
              message: LocalImageUsedWrongly.message(options.src)
            });
          }
          let missingDimension;
          if (!options.width && !options.height) {
            missingDimension = "both";
          } else if (!options.width && options.height) {
            missingDimension = "width";
          } else if (options.width && !options.height) {
            missingDimension = "height";
          }
          if (missingDimension) {
            throw new AstroError({
              ...MissingImageDimension,
              message: MissingImageDimension.message(missingDimension, options.src)
            });
          }
        } else {
          if (!VALID_SUPPORTED_FORMATS.includes(options.src.format)) {
            throw new AstroError({
              ...UnsupportedImageFormat,
              message: UnsupportedImageFormat.message(
                options.src.format,
                options.src.src,
                VALID_SUPPORTED_FORMATS
              )
            });
          }
          if (options.widths && options.densities) {
            throw new AstroError(IncompatibleDescriptorOptions);
          }
          if (options.src.format === "svg") {
            options.format = "svg";
          }
          if (options.src.format === "svg" && options.format !== "svg" || options.src.format !== "svg" && options.format === "svg") {
            throw new AstroError(UnsupportedImageConversion);
          }
        }
        if (!options.format) {
          options.format = DEFAULT_OUTPUT_FORMAT;
        }
        if (options.width)
          options.width = Math.round(options.width);
        if (options.height)
          options.height = Math.round(options.height);
        return options;
      },
      getHTMLAttributes(options) {
        const { targetWidth, targetHeight } = getTargetDimensions(options);
        const { src, width, height, format, quality, densities, widths, formats, ...attributes } = options;
        return {
          ...attributes,
          width: targetWidth,
          height: targetHeight,
          loading: attributes.loading ?? "lazy",
          decoding: attributes.decoding ?? "async"
        };
      },
      getSrcSet(options) {
        const srcSet = [];
        const { targetWidth } = getTargetDimensions(options);
        const { widths, densities } = options;
        const targetFormat = options.format ?? DEFAULT_OUTPUT_FORMAT;
        let imageWidth = options.width;
        let maxWidth = Infinity;
        if (isESMImportedImage(options.src)) {
          imageWidth = options.src.width;
          maxWidth = imageWidth;
        }
        const {
          width: transformWidth,
          height: transformHeight,
          ...transformWithoutDimensions
        } = options;
        const allWidths = [];
        if (densities) {
          const densityValues = densities.map((density) => {
            if (typeof density === "number") {
              return density;
            } else {
              return parseFloat(density);
            }
          });
          const densityWidths = densityValues.sort().map((density) => Math.round(targetWidth * density));
          allWidths.push(
            ...densityWidths.map((width, index2) => ({
              maxTargetWidth: Math.min(width, maxWidth),
              descriptor: `${densityValues[index2]}x`
            }))
          );
        } else if (widths) {
          allWidths.push(
            ...widths.map((width) => ({
              maxTargetWidth: Math.min(width, maxWidth),
              descriptor: `${width}w`
            }))
          );
        }
        for (const { maxTargetWidth, descriptor } of allWidths) {
          const srcSetTransform = { ...transformWithoutDimensions };
          if (maxTargetWidth !== imageWidth) {
            srcSetTransform.width = maxTargetWidth;
          } else {
            if (options.width && options.height) {
              srcSetTransform.width = options.width;
              srcSetTransform.height = options.height;
            }
          }
          srcSet.push({
            transform: srcSetTransform,
            descriptor,
            attributes: {
              type: `image/${targetFormat}`
            }
          });
        }
        return srcSet;
      },
      getURL(options, imageConfig2) {
        const searchParams = new URLSearchParams();
        if (isESMImportedImage(options.src)) {
          searchParams.append("href", options.src.src);
        } else if (isRemoteAllowed(options.src, imageConfig2)) {
          searchParams.append("href", options.src);
        } else {
          return options.src;
        }
        const params = {
          w: "width",
          h: "height",
          q: "quality",
          f: "format"
        };
        Object.entries(params).forEach(([param, key]) => {
          options[key] && searchParams.append(param, options[key].toString());
        });
        const imageEndpoint = joinPaths("/", "/_image");
        return `${imageEndpoint}?${searchParams}`;
      },
      parseURL(url) {
        const params = url.searchParams;
        if (!params.has("href")) {
          return void 0;
        }
        const transform = {
          src: params.get("href"),
          width: params.has("w") ? parseInt(params.get("w")) : void 0,
          height: params.has("h") ? parseInt(params.get("h")) : void 0,
          format: params.get("f"),
          quality: params.get("q")
        };
        return transform;
      }
    };
    noopService = {
      ...baseService,
      propertiesToHash: ["src"],
      async transform(inputBuffer, transformOptions) {
        return {
          data: inputBuffer,
          format: transformOptions.format
        };
      }
    };
    noop_default = noopService;
    noop = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: noop_default
    }, Symbol.toStringTag, { value: "Module" }));
  }
});

// dist/$server_build/chunks/pages/generic_9maNLffX.mjs
var generic_9maNLffX_exports = {};
__export(generic_9maNLffX_exports, {
  GET: () => GET
});
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4)
    return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize)
    return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box)
      break;
    if (box.name === boxName)
      return box;
    offset += box.size;
  }
}
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
function detectBrands(buffer, start, end3) {
  let brandsDetected = {};
  for (let i = start; i <= end3; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index2) {
  return {
    height: readUInt16BE(input, index2),
    width: readUInt16BE(input, index2 + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end3 = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end3);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index2) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index2);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index2) {
  if (index2 > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = root.match(extractorRegExps.width);
  const height = root.match(extractorRegExps.height);
  const viewbox = root.match(extractorRegExps.viewbox);
  return {
    height: height && parseLength(height[2]),
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}
function lookup(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    if (globalOptions.disabledTypes.indexOf(type) > -1) {
      throw new TypeError("disabled file type: " + type);
    }
    const size = typeHandlers.get(type).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}
async function probe(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new Error("Failed to fetch image");
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done)
      break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = lookup(accumulatedChunks);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch (error2) {
      }
    }
  }
  throw new Error("Failed to parse the size");
}
async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await Promise.resolve().then(() => (init_assets_service_BZ7sqiXt(), assets_service_BZ7sqiXt_exports)).then((n) => n.n).catch((e) => {
      const error2 = new AstroError(InvalidImageService);
      error2.cause = e;
      throw error2;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig2) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  if (options.inferSize && isRemoteImage(resolvedOptions.src)) {
    try {
      const result = await probe(resolvedOptions.src);
      resolvedOptions.width ??= result.width;
      resolvedOptions.height ??= result.height;
      delete resolvedOptions.inferSize;
    } catch {
      throw new AstroError({
        ...FailedToFetchRemoteImageDimensions,
        message: FailedToFetchRemoteImageDimensions.message(resolvedOptions.src)
      });
    }
  }
  const originalPath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : resolvedOptions.src;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig2) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig2) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig2);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig2),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash, originalPath);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalPath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig2) : {}
  };
}
async function loadRemoteImage(src) {
  try {
    const res = await fetch(src);
    if (!res.ok) {
      return void 0;
    }
    return await res.arrayBuffer();
  } catch (err) {
    return void 0;
  }
}
var import_lite, decoder2, toUTF8String, toHexString, readInt16LE, readUInt16BE, readUInt16LE, readUInt24LE, readInt32LE, readUInt32BE, readUInt32LE, methods, BMP, TYPE_ICON, SIZE_HEADER$1, SIZE_IMAGE_ENTRY, ICO, TYPE_CURSOR, CUR, DDS, gifRegexp, GIF, brandMap, HEIF, SIZE_HEADER, FILE_LENGTH_OFFSET, ENTRY_LENGTH_OFFSET, ICON_TYPE_SIZE, ICNS, J2C, JP2, EXIF_MARKER, APP1_DATA_SIZE_BYTES, EXIF_HEADER_BYTES, TIFF_BYTE_ALIGN_BYTES, BIG_ENDIAN_BYTE_ALIGN, LITTLE_ENDIAN_BYTE_ALIGN, IDF_ENTRY_BYTES, NUM_DIRECTORY_ENTRIES_BYTES, JPG, KTX, pngSignature, pngImageHeaderChunkName, pngFriedChunkName, PNG, PNMTypes, handlers, PNM, PSD, svgReg, extractorRegExps, INCH_CM, units, unitsReg, SVG, TGA, signatures, TIFF, WEBP, typeHandlers, types, firstBytes, globalOptions, fnv1a52, etag, $$Astro$1, $$Image, $$Astro, $$Picture, imageConfig, outDir, getImage, GET;
var init_generic_9maNLffX = __esm({
  "dist/$server_build/chunks/pages/generic_9maNLffX.mjs"() {
    "use strict";
    init_path();
    import_lite = __toESM(require_lite(), 1);
    init_astro_sKHNJ3WQ();
    init_assets_service_BZ7sqiXt();
    init_esm();
    init_clsx_m();
    decoder2 = new TextDecoder();
    toUTF8String = (input, start = 0, end3 = input.length) => decoder2.decode(input.slice(start, end3));
    toHexString = (input, start = 0, end3 = input.length) => input.slice(start, end3).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
    readInt16LE = (input, offset = 0) => {
      const val = input[offset] + input[offset + 1] * 2 ** 8;
      return val | (val & 2 ** 15) * 131070;
    };
    readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
    readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
    readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
    readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
    readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
    readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
    methods = {
      readUInt16BE,
      readUInt16LE,
      readUInt32BE,
      readUInt32LE
    };
    BMP = {
      validate: (input) => toUTF8String(input, 0, 2) === "BM",
      calculate: (input) => ({
        height: Math.abs(readInt32LE(input, 22)),
        width: readUInt32LE(input, 18)
      })
    };
    TYPE_ICON = 1;
    SIZE_HEADER$1 = 2 + 2 + 2;
    SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
    ICO = {
      validate(input) {
        const reserved = readUInt16LE(input, 0);
        const imageCount = readUInt16LE(input, 4);
        if (reserved !== 0 || imageCount === 0)
          return false;
        const imageType = readUInt16LE(input, 2);
        return imageType === TYPE_ICON;
      },
      calculate(input) {
        const nbImages = readUInt16LE(input, 4);
        const imageSize = getImageSize$1(input, 0);
        if (nbImages === 1)
          return imageSize;
        const imgs = [imageSize];
        for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
          imgs.push(getImageSize$1(input, imageIndex));
        }
        return {
          height: imageSize.height,
          images: imgs,
          width: imageSize.width
        };
      }
    };
    TYPE_CURSOR = 2;
    CUR = {
      validate(input) {
        const reserved = readUInt16LE(input, 0);
        const imageCount = readUInt16LE(input, 4);
        if (reserved !== 0 || imageCount === 0)
          return false;
        const imageType = readUInt16LE(input, 2);
        return imageType === TYPE_CURSOR;
      },
      calculate: (input) => ICO.calculate(input)
    };
    DDS = {
      validate: (input) => readUInt32LE(input, 0) === 542327876,
      calculate: (input) => ({
        height: readUInt32LE(input, 12),
        width: readUInt32LE(input, 16)
      })
    };
    gifRegexp = /^GIF8[79]a/;
    GIF = {
      validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
      calculate: (input) => ({
        height: readUInt16LE(input, 8),
        width: readUInt16LE(input, 6)
      })
    };
    brandMap = {
      avif: "avif",
      mif1: "heif",
      msf1: "heif",
      // hief-sequence
      heic: "heic",
      heix: "heic",
      hevc: "heic",
      // heic-sequence
      hevx: "heic"
      // heic-sequence
    };
    HEIF = {
      validate(buffer) {
        const ftype = toUTF8String(buffer, 4, 8);
        const brand = toUTF8String(buffer, 8, 12);
        return "ftyp" === ftype && brand in brandMap;
      },
      calculate(buffer) {
        const metaBox = findBox(buffer, "meta", 0);
        const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
        const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
        const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
        if (ispeBox) {
          return {
            height: readUInt32BE(buffer, ispeBox.offset + 16),
            width: readUInt32BE(buffer, ispeBox.offset + 12),
            type: detectBrands(buffer, 8, metaBox.offset)
          };
        }
        throw new TypeError("Invalid HEIF, no size found");
      }
    };
    SIZE_HEADER = 4 + 4;
    FILE_LENGTH_OFFSET = 4;
    ENTRY_LENGTH_OFFSET = 4;
    ICON_TYPE_SIZE = {
      ICON: 32,
      "ICN#": 32,
      // m => 16 x 16
      "icm#": 16,
      icm4: 16,
      icm8: 16,
      // s => 16 x 16
      "ics#": 16,
      ics4: 16,
      ics8: 16,
      is32: 16,
      s8mk: 16,
      icp4: 16,
      // l => 32 x 32
      icl4: 32,
      icl8: 32,
      il32: 32,
      l8mk: 32,
      icp5: 32,
      ic11: 32,
      // h => 48 x 48
      ich4: 48,
      ich8: 48,
      ih32: 48,
      h8mk: 48,
      // . => 64 x 64
      icp6: 64,
      ic12: 32,
      // t => 128 x 128
      it32: 128,
      t8mk: 128,
      ic07: 128,
      // . => 256 x 256
      ic08: 256,
      ic13: 256,
      // . => 512 x 512
      ic09: 512,
      ic14: 512,
      // . => 1024 x 1024
      ic10: 1024
    };
    ICNS = {
      validate: (input) => toUTF8String(input, 0, 4) === "icns",
      calculate(input) {
        const inputLength = input.length;
        const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
        let imageOffset = SIZE_HEADER;
        let imageHeader = readImageHeader(input, imageOffset);
        let imageSize = getImageSize(imageHeader[0]);
        imageOffset += imageHeader[1];
        if (imageOffset === fileLength)
          return imageSize;
        const result = {
          height: imageSize.height,
          images: [imageSize],
          width: imageSize.width
        };
        while (imageOffset < fileLength && imageOffset < inputLength) {
          imageHeader = readImageHeader(input, imageOffset);
          imageSize = getImageSize(imageHeader[0]);
          imageOffset += imageHeader[1];
          result.images.push(imageSize);
        }
        return result;
      }
    };
    J2C = {
      // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
      validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
      calculate: (input) => ({
        height: readUInt32BE(input, 12),
        width: readUInt32BE(input, 8)
      })
    };
    JP2 = {
      validate(input) {
        if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1)
          return false;
        const ftypBox = findBox(input, "ftyp", 0);
        if (!ftypBox)
          return false;
        return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
      },
      calculate(input) {
        const jp2hBox = findBox(input, "jp2h", 0);
        const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
        if (ihdrBox) {
          return {
            height: readUInt32BE(input, ihdrBox.offset + 8),
            width: readUInt32BE(input, ihdrBox.offset + 12)
          };
        }
        throw new TypeError("Unsupported JPEG 2000 format");
      }
    };
    EXIF_MARKER = "45786966";
    APP1_DATA_SIZE_BYTES = 2;
    EXIF_HEADER_BYTES = 6;
    TIFF_BYTE_ALIGN_BYTES = 2;
    BIG_ENDIAN_BYTE_ALIGN = "4d4d";
    LITTLE_ENDIAN_BYTE_ALIGN = "4949";
    IDF_ENTRY_BYTES = 12;
    NUM_DIRECTORY_ENTRIES_BYTES = 2;
    JPG = {
      validate: (input) => toHexString(input, 0, 2) === "ffd8",
      calculate(input) {
        input = input.slice(4);
        let orientation;
        let next;
        while (input.length) {
          const i = readUInt16BE(input, 0);
          if (input[i] !== 255) {
            input = input.slice(1);
            continue;
          }
          if (isEXIF(input)) {
            orientation = validateExifBlock(input, i);
          }
          validateInput(input, i);
          next = input[i + 1];
          if (next === 192 || next === 193 || next === 194) {
            const size = extractSize(input, i + 5);
            if (!orientation) {
              return size;
            }
            return {
              height: size.height,
              orientation,
              width: size.width
            };
          }
          input = input.slice(i + 2);
        }
        throw new TypeError("Invalid JPG, no size found");
      }
    };
    KTX = {
      validate: (input) => {
        const signature = toUTF8String(input, 1, 7);
        return ["KTX 11", "KTX 20"].includes(signature);
      },
      calculate: (input) => {
        const type = input[5] === 49 ? "ktx" : "ktx2";
        const offset = type === "ktx" ? 36 : 20;
        return {
          height: readUInt32LE(input, offset + 4),
          width: readUInt32LE(input, offset),
          type
        };
      }
    };
    pngSignature = "PNG\r\n\n";
    pngImageHeaderChunkName = "IHDR";
    pngFriedChunkName = "CgBI";
    PNG = {
      validate(input) {
        if (pngSignature === toUTF8String(input, 1, 8)) {
          let chunkName = toUTF8String(input, 12, 16);
          if (chunkName === pngFriedChunkName) {
            chunkName = toUTF8String(input, 28, 32);
          }
          if (chunkName !== pngImageHeaderChunkName) {
            throw new TypeError("Invalid PNG");
          }
          return true;
        }
        return false;
      },
      calculate(input) {
        if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
          return {
            height: readUInt32BE(input, 36),
            width: readUInt32BE(input, 32)
          };
        }
        return {
          height: readUInt32BE(input, 20),
          width: readUInt32BE(input, 16)
        };
      }
    };
    PNMTypes = {
      P1: "pbm/ascii",
      P2: "pgm/ascii",
      P3: "ppm/ascii",
      P4: "pbm",
      P5: "pgm",
      P6: "ppm",
      P7: "pam",
      PF: "pfm"
    };
    handlers = {
      default: (lines) => {
        let dimensions = [];
        while (lines.length > 0) {
          const line = lines.shift();
          if (line[0] === "#") {
            continue;
          }
          dimensions = line.split(" ");
          break;
        }
        if (dimensions.length === 2) {
          return {
            height: parseInt(dimensions[1], 10),
            width: parseInt(dimensions[0], 10)
          };
        } else {
          throw new TypeError("Invalid PNM");
        }
      },
      pam: (lines) => {
        const size = {};
        while (lines.length > 0) {
          const line = lines.shift();
          if (line.length > 16 || line.charCodeAt(0) > 128) {
            continue;
          }
          const [key, value] = line.split(" ");
          if (key && value) {
            size[key.toLowerCase()] = parseInt(value, 10);
          }
          if (size.height && size.width) {
            break;
          }
        }
        if (size.height && size.width) {
          return {
            height: size.height,
            width: size.width
          };
        } else {
          throw new TypeError("Invalid PAM");
        }
      }
    };
    PNM = {
      validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
      calculate(input) {
        const signature = toUTF8String(input, 0, 2);
        const type = PNMTypes[signature];
        const lines = toUTF8String(input, 3).split(/[\r\n]+/);
        const handler = handlers[type] || handlers.default;
        return handler(lines);
      }
    };
    PSD = {
      validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
      calculate: (input) => ({
        height: readUInt32BE(input, 14),
        width: readUInt32BE(input, 18)
      })
    };
    svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
    extractorRegExps = {
      height: /\sheight=(['"])([^%]+?)\1/,
      root: svgReg,
      viewbox: /\sviewBox=(['"])(.+?)\1/i,
      width: /\swidth=(['"])([^%]+?)\1/
    };
    INCH_CM = 2.54;
    units = {
      in: 96,
      cm: 96 / INCH_CM,
      em: 16,
      ex: 8,
      m: 96 / INCH_CM * 100,
      mm: 96 / INCH_CM / 10,
      pc: 96 / 72 / 12,
      pt: 96 / 72,
      px: 1
    };
    unitsReg = new RegExp(
      // eslint-disable-next-line regexp/prefer-d
      `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
    );
    SVG = {
      // Scan only the first kilo-byte to speed up the check on larger files
      validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
      calculate(input) {
        const root = toUTF8String(input).match(extractorRegExps.root);
        if (root) {
          const attrs = parseAttributes(root[0]);
          if (attrs.width && attrs.height) {
            return calculateByDimensions(attrs);
          }
          if (attrs.viewbox) {
            return calculateByViewbox(attrs, attrs.viewbox);
          }
        }
        throw new TypeError("Invalid SVG");
      }
    };
    TGA = {
      validate(input) {
        return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
      },
      calculate(input) {
        return {
          height: readUInt16LE(input, 14),
          width: readUInt16LE(input, 12)
        };
      }
    };
    signatures = [
      // '492049', // currently not supported
      "49492a00",
      // Little endian
      "4d4d002a"
      // Big Endian
      // '4d4d002a', // BigTIFF > 4GB. currently not supported
    ];
    TIFF = {
      validate: (input) => signatures.includes(toHexString(input, 0, 4)),
      calculate(input) {
        const isBigEndian = determineEndianness(input) === "BE";
        const ifdBuffer = readIFD(input, isBigEndian);
        const tags = extractTags(ifdBuffer, isBigEndian);
        const width = tags[256];
        const height = tags[257];
        if (!width || !height) {
          throw new TypeError("Invalid Tiff. Missing tags");
        }
        return { height, width };
      }
    };
    WEBP = {
      validate(input) {
        const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
        const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
        const vp8Header = "VP8" === toUTF8String(input, 12, 15);
        return riffHeader && webpHeader && vp8Header;
      },
      calculate(input) {
        const chunkHeader = toUTF8String(input, 12, 16);
        input = input.slice(20, 30);
        if (chunkHeader === "VP8X") {
          const extendedHeader = input[0];
          const validStart = (extendedHeader & 192) === 0;
          const validEnd = (extendedHeader & 1) === 0;
          if (validStart && validEnd) {
            return calculateExtended(input);
          } else {
            throw new TypeError("Invalid WebP");
          }
        }
        if (chunkHeader === "VP8 " && input[0] !== 47) {
          return calculateLossy(input);
        }
        const signature = toHexString(input, 3, 6);
        if (chunkHeader === "VP8L" && signature !== "9d012a") {
          return calculateLossless(input);
        }
        throw new TypeError("Invalid WebP");
      }
    };
    typeHandlers = /* @__PURE__ */ new Map([
      ["bmp", BMP],
      ["cur", CUR],
      ["dds", DDS],
      ["gif", GIF],
      ["heif", HEIF],
      ["icns", ICNS],
      ["ico", ICO],
      ["j2c", J2C],
      ["jp2", JP2],
      ["jpg", JPG],
      ["ktx", KTX],
      ["png", PNG],
      ["pnm", PNM],
      ["psd", PSD],
      ["svg", SVG],
      ["tga", TGA],
      ["tiff", TIFF],
      ["webp", WEBP]
    ]);
    types = Array.from(typeHandlers.keys());
    firstBytes = /* @__PURE__ */ new Map([
      [56, "psd"],
      [66, "bmp"],
      [68, "dds"],
      [71, "gif"],
      [73, "tiff"],
      [77, "tiff"],
      [82, "webp"],
      [105, "icns"],
      [137, "png"],
      [255, "jpg"]
    ]);
    globalOptions = {
      disabledTypes: []
    };
    fnv1a52 = (str) => {
      const len = str.length;
      let i = 0, t0 = 0, v0 = 8997, t1 = 0, v1 = 33826, t2 = 0, v2 = 40164, t3 = 0, v3 = 52210;
      while (i < len) {
        v0 ^= str.charCodeAt(i++);
        t0 = v0 * 435;
        t1 = v1 * 435;
        t2 = v2 * 435;
        t3 = v3 * 435;
        t2 += v0 << 8;
        t3 += v1 << 8;
        t1 += t0 >>> 16;
        v0 = t0 & 65535;
        t2 += t1 >>> 16;
        v1 = t1 & 65535;
        v3 = t3 + (t2 >>> 16) & 65535;
        v2 = t2 & 65535;
      }
      return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ v3 >> 4);
    };
    etag = (payload, weak = false) => {
      const prefix = weak ? 'W/"' : '"';
      return prefix + fnv1a52(payload).toString(36) + payload.length.toString(36) + '"';
    };
    $$Astro$1 = createAstro();
    $$Image = createComponent(async ($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
      Astro2.self = $$Image;
      const props = Astro2.props;
      if (props.alt === void 0 || props.alt === null) {
        throw new AstroError(ImageMissingAlt);
      }
      if (typeof props.width === "string") {
        props.width = parseInt(props.width);
      }
      if (typeof props.height === "string") {
        props.height = parseInt(props.height);
      }
      const image = await getImage(props);
      const additionalAttributes = {};
      if (image.srcSet.values.length > 0) {
        additionalAttributes.srcset = image.srcSet.attribute;
      }
      return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
    }, "/Users/rudix/Desktop/monext/node_modules/.pnpm/astro@4.5.5_@types+node@20.11.28_typescript@5.4.2/node_modules/astro/components/Image.astro", void 0);
    $$Astro = createAstro();
    $$Picture = createComponent(async ($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
      Astro2.self = $$Picture;
      const defaultFormats = ["webp"];
      const defaultFallbackFormat = "png";
      const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
      const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
      if (props.alt === void 0 || props.alt === null) {
        throw new AstroError(ImageMissingAlt);
      }
      const optimizedImages = await Promise.all(
        formats.map(
          async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
        )
      );
      let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
      if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
        resultFallbackFormat = props.src.format;
      }
      const fallbackImage = await getImage({
        ...props,
        format: resultFallbackFormat,
        widths: props.widths,
        densities: props.densities
      });
      const imgAdditionalAttributes = {};
      const sourceAdditionalAttributes = {};
      if (props.sizes) {
        sourceAdditionalAttributes.sizes = props.sizes;
      }
      if (fallbackImage.srcSet.values.length > 0) {
        imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
      }
      return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
        const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
        return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
      })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
    }, "/Users/rudix/Desktop/monext/node_modules/.pnpm/astro@4.5.5_@types+node@20.11.28_typescript@5.4.2/node_modules/astro/components/Picture.astro", void 0);
    imageConfig = { "service": { "entrypoint": "astro/assets/services/noop", "config": {} }, "domains": [], "remotePatterns": [] };
    outDir = new URL("file:///Users/rudix/Desktop/monext/apps/userz/dist/");
    new URL("_astro", outDir);
    getImage = async (options) => await getImage$1(options, imageConfig);
    GET = async ({ request }) => {
      try {
        const imageService = await getConfiguredImageService();
        if (!("transform" in imageService)) {
          throw new Error("Configured image service is not a local service");
        }
        const url = new URL(request.url);
        const transform = await imageService.parseURL(url, imageConfig);
        if (!transform?.src) {
          throw new Error("Incorrect transform returned by `parseURL`");
        }
        let inputBuffer = void 0;
        const sourceUrl = isRemotePath(transform.src) ? new URL(transform.src) : new URL(transform.src, url.origin);
        if (isRemotePath(transform.src) && isRemoteAllowed(transform.src, imageConfig) === false) {
          return new Response("Forbidden", { status: 403 });
        }
        inputBuffer = await loadRemoteImage(sourceUrl);
        if (!inputBuffer) {
          return new Response("Not Found", { status: 404 });
        }
        const { data, format } = await imageService.transform(
          new Uint8Array(inputBuffer),
          transform,
          imageConfig
        );
        return new Response(data, {
          status: 200,
          headers: {
            "Content-Type": import_lite.default.getType(format) ?? `image/${format}`,
            "Cache-Control": "public, max-age=31536000",
            ETag: etag(data.toString()),
            Date: (/* @__PURE__ */ new Date()).toUTCString()
          }
        });
      } catch (err) {
        console.error("Could not process image request:", err);
        return new Response(`Server Error: ${err}`, { status: 500 });
      }
    };
  }
});

// dist/$server_build/chunks/generic_CaLv3Au9.mjs
var generic_CaLv3Au9_exports = {};
__export(generic_CaLv3Au9_exports, {
  page: () => page,
  renderers: () => renderers
});
var page;
var init_generic_CaLv3Au9 = __esm({
  "dist/$server_build/chunks/generic_CaLv3Au9.mjs"() {
    "use strict";
    init_renderers();
    page = () => Promise.resolve().then(() => (init_generic_9maNLffX(), generic_9maNLffX_exports));
  }
});

// dist/$server_build/chunks/pages/_tag__K0V7HO7C.mjs
var tag_K0V7HO7C_exports = {};
__export(tag_K0V7HO7C_exports, {
  $: () => $$Layout,
  _: () => _tag_,
  g: () => gquery
});
var __freeze, __defProp2, __template, _a, $$Astro$12, $$Layout, gquery, $$Astro2, prerender, $$tag, $$file, $$url, _tag_;
var init_tag_K0V7HO7C = __esm({
  "dist/$server_build/chunks/pages/_tag__K0V7HO7C.mjs"() {
    "use strict";
    init_astro_sKHNJ3WQ();
    init_colors();
    init_esm();
    __freeze = Object.freeze;
    __defProp2 = Object.defineProperty;
    __template = (cooked, raw) => __freeze(__defProp2(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
    $$Astro$12 = createAstro();
    $$Layout = createComponent(async ($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro$12, $$props, $$slots);
      Astro2.self = $$Layout;
      const { title, description, logo, tags, topic, image } = Astro2.props;
      return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="theme-color" content="#030905"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>', '</title><meta name="description"', '><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"><meta property="og:app_id" content="281985576166744"><meta property="og:site_name" content="userz.net"><meta property="og:type" content="article"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image:width" content="612"><meta property="og:image:height" content="408"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@kloundot"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image:src"', '><meta property="og:image"', '><script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"><\/script>', '</head> <body> <div class="flex flex-col"> <nav> <div class="flex flex-wrap items-center mx-auto max-w-screen-xl p-4"> <a href="/" class="flex items-center"> <img', "", ' alt="userz logo"> </a> <div class="flex items-center absolute right-4">\ndasdas\n</div> </div> <div id="timeline-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-md bg-black/30"> <div class="relative p-4 w-full max-w-md max-h-full">\ndsda\n</div> </div> <div class="flex items-center"> <ul class="flex space-x-1 text-md overflow-auto snap-x w-screen"> ', ' </ul> </div> <div class="grow"> ', ' </div> <footer class="bottom-0 left-0 z-20 w-full p-4 border-t border-gray-800 shadow md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600"> <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">\xA9 2023 <a href="https://userz.net/" class="hover:underline">userznet\u2122</a>. All Rights Reserved.\n</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"> <li> <a href="#" class="mr-4 hover:underline md:mr-6">About</a> </li> <li> <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a> </li> <li> <a href="https://kloun.lol" class="mr-4 hover:underline md:mr-6">kloun.lol</a> </li> <li> <a href="#" class="hover:underline">Contact</a> </li> </ul> </footer> </nav> <!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-8ZJBS39VWD"><\/script> <script>\n        window.dataLayer = window.dataLayer || [];\n        function gtag() {\n          dataLayer.push(arguments);\n        }\n        gtag("js", new Date());\n        gtag("config", "G-8ZJBS39VWD");\n      <\/script> </div> </body> </html>'])), title, addAttribute(description || "Zero in on  social media presence by checking out their  profiles, featuring photos and engaging content", "content"), addAttribute(title, "content"), addAttribute(description || "Zero in on  social media presence by checking out their  profiles, featuring photos and engaging content", "content"), addAttribute("", "content"), addAttribute(title, "content"), addAttribute(description || "Zero in on  social media presence by checking out their  profiles, featuring photos and engaging content", "content"), addAttribute(image || "https://cdn.userz.net/1192206.jpg", "content"), addAttribute(image || "https://cdn.userz.net/1192206.jpg", "content"), renderHead(), addAttribute(logo !== "inner" ? "/logo2.png" : "/logotext.png", "src"), addAttribute(logo !== "inner" ? "w-2/4   " : "w-1/2", "class"), tags && tags.filter(
        (t) => t.hashtag.length > 2
      ).map(
        ({
          hashtag,
          count
        }) => renderTemplate`<li> <a${addAttribute(count === 1 ? "#" : "/t/" + hashtag, "href")} class="text-black   px-3 mx-1 mb-3 bg-emerald-600 rounded-2xl lowercase font-black flex text-md snap-center"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span class="material-symbols-outlined  -ml-2 ">
tag
</span> <span>${hashtag} </span> ` })} </a> </li>`
      ), renderSlot($$result, $$slots["default"]));
    }, "/Users/rudix/Desktop/monext/apps/userz/src/components/Layout.astro", void 0);
    gquery = async (query, variables) => {
      const response = await fetch("https://hasura.kloun.lol/v1/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query,
          variables
        })
      });
      const json = await response.json();
      if (json.errors)
        throw new Error(JSON.stringify(json.errors));
      return Promise.resolve(json.data);
    };
    $$Astro2 = createAstro();
    prerender = false;
    $$tag = createComponent(async ($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro2, $$props, $$slots);
      Astro2.self = $$tag;
      const { tag } = Astro2.params;
      const resp = await gquery(`query MyQuery($_eq: String ) {
      q_qtags(where: {hashtag: {_eq: $_eq}}) {
        count
        hashtag
        rows_with_tag
      }
    }
 `, { _eq: tag });
      if (!resp.q_qtags[0]) {
        return Astro2.redirect("/404");
      }
      const arr = resp.q_qtags[0].rows_with_tag.split(", ");
      const questions = await gquery(`query MyQuery($_in: [String!] = "") {
     q_q(where: {genid: {_in: $_in}}, limit: 10) {
       genid
       text
     }
   }
 `, { _in: arr });
      console.log(questions);
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": tag, "description": "#" + tag, "logo": "inner", "topic": tag }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative"> <div class="flex flex-col relative justify-center"> <div> ${questions.q_q.map(({ text: text3 }) => renderTemplate`<div class="z-10 flex m-4 mb-5  text-xl  font-black  odd:rotate-1 even:-rotate-1 "> <span class="z-10 text-gray-900  bg-gray-900 text-black  p-3 rounded-lg border-dashed border-2 border-emerald-900">${text3.replaceAll("?", " ")}</span> </div>`)} </div> <div class="absolute top-0"> ${questions.q_q.map(({ genid, text: text3 }) => renderTemplate`<a${addAttribute("/" + genid, "href")} class="z-0 flex m-4 mb-6  text-xl  font-black rotate-0"> <span class="z-10 text-gray-200  text-black  p-3 ">${text3.replaceAll("?", " ")} </span> </a>`)} </div> </div> </main> ` })}`;
    }, "/Users/rudix/Desktop/monext/apps/userz/src/pages/t/[tag].astro", void 0);
    $$file = "/Users/rudix/Desktop/monext/apps/userz/src/pages/t/[tag].astro";
    $$url = "/t/[tag]";
    _tag_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$tag,
      file: $$file,
      prerender,
      url: $$url
    }, Symbol.toStringTag, { value: "Module" }));
  }
});

// dist/$server_build/chunks/_tag__CtuL0ud6.mjs
var tag_CtuL0ud6_exports = {};
__export(tag_CtuL0ud6_exports, {
  page: () => page2,
  renderers: () => renderers
});
var page2;
var init_tag_CtuL0ud6 = __esm({
  "dist/$server_build/chunks/_tag__CtuL0ud6.mjs"() {
    "use strict";
    init_renderers();
    page2 = () => Promise.resolve().then(() => (init_tag_K0V7HO7C(), tag_K0V7HO7C_exports)).then((n) => n._);
  }
});

// ../../node_modules/.pnpm/@fortawesome+free-solid-svg-icons@6.5.1/node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var faComment, faPaperPlane;
var init_free_solid_svg_icons = __esm({
  "../../node_modules/.pnpm/@fortawesome+free-solid-svg-icons@6.5.1/node_modules/@fortawesome/free-solid-svg-icons/index.mjs"() {
    faComment = {
      prefix: "fas",
      iconName: "comment",
      icon: [512, 512, [128489, 61669], "f075", "M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"]
    };
    faPaperPlane = {
      prefix: "fas",
      iconName: "paper-plane",
      icon: [512, 512, [61913], "f1d8", "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]
    };
  }
});

// ../../node_modules/.pnpm/@fortawesome+fontawesome-svg-core@6.5.1/node_modules/@fortawesome/fontawesome-svg-core/index.mjs
function ownKeys(object2, enumerableOnly) {
  var keys = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function familyProxy(obj) {
  return new Proxy(obj, {
    get: function get2(target, prop) {
      return prop in target ? target[prop] : target[FAMILY_CLASSIC];
    }
  });
}
function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector("script[" + attr + "]");
  if (element) {
    return element.getAttribute(attr);
  }
}
function coerce(val) {
  if (val === "")
    return true;
  if (val === "false")
    return false;
  if (val === "true")
    return true;
  return val;
}
function onChange(cb) {
  _onChangeCb.push(cb);
  return function() {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}
function insertCss(css2) {
  if (!css2 || !IS_DOM) {
    return;
  }
  var style = DOCUMENT.createElement("style");
  style.setAttribute("type", "text/css");
  style.innerHTML = css2;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;
  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || "").toUpperCase();
    if (["STYLE", "LINK"].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  DOCUMENT.head.insertBefore(style, beforeChild);
  return css2;
}
function nextUniqueId() {
  var size = 12;
  var id = "";
  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }
  return id;
}
function toArray(obj) {
  var array2 = [];
  for (var i = (obj || []).length >>> 0; i--; ) {
    array2[i] = obj[i];
  }
  return array2;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute("class") || "").split(" ").filter(function(i) {
      return i;
    });
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function(acc, attributeName) {
    return acc + "".concat(attributeName, '="').concat(htmlEscape(attributes[attributeName]), '" ');
  }, "").trim();
}
function joinStyles(styles2) {
  return Object.keys(styles2 || {}).reduce(function(acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles2[styleName].trim(), ";");
  }, "");
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref2) {
  var transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer,
    inner,
    path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform, _ref2$width = _ref2.width, width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width, _ref2$height = _ref2.height, height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height, _ref2$startCentered = _ref2.startCentered, startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = "";
  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }
  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}
function css() {
  var dcp = DEFAULT_CSS_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.cssPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;
  if (fp !== dcp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dcp, "\\-"), "g");
    var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), "g");
    var rPatt = new RegExp("\\.".concat(drc), "g");
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }
  return s;
}
function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}
function domready(fn) {
  if (!IS_DOM)
    return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}
function toHtml(abstractNodes) {
  var tag = abstractNodes.tag, _abstractNodes$attrib = abstractNodes.attributes, attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib, _abstractNodes$childr = abstractNodes.children, children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;
  if (typeof abstractNodes === "string") {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag, ">");
  }
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix,
      iconName,
      icon: mapping[prefix][iconName]
    };
  }
}
function ucs2decode(string2) {
  var output = [];
  var counter2 = 0;
  var length = string2.length;
  while (counter2 < length) {
    var value = string2.charCodeAt(counter2++);
    if (value >= 55296 && value <= 56319 && counter2 < length) {
      var extra = string2.charCodeAt(counter2++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter2--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
function toHex(unicode) {
  var decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string2, index2) {
  var size = string2.length;
  var first = string2.charCodeAt(index2);
  var second;
  if (first >= 55296 && first <= 56319 && size > index2 + 1) {
    second = string2.charCodeAt(index2 + 1);
    if (second >= 56320 && second <= 57343) {
      return (first - 55296) * 1024 + second - 56320 + 65536;
    }
  }
  return first;
}
function normalizeIcons(icons) {
  return Object.keys(icons).reduce(function(acc, iconName) {
    var icon3 = icons[iconName];
    var expanded = !!icon3.icon;
    if (expanded) {
      acc[icon3.iconName] = icon3.icon;
    } else {
      acc[iconName] = icon3;
    }
    return acc;
  }, {});
}
function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks, skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = normalizeIcons(icons);
  if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
  }
  if (prefix === "fas") {
    defineIcons("fa", icons);
  }
}
function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function getIconName(cssPrefix, cls) {
  var parts = cls.split("-");
  var prefix = parts[0];
  var iconName = parts.slice(1).join("-");
  if (prefix === cssPrefix && iconName !== "" && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  var oldUnicode = _byOldUnicode[unicode];
  var newUnicode = byUnicode("fas", unicode);
  return oldUnicode || (newUnicode ? {
    prefix: "fas",
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
function getCanonicalPrefix(styleOrPrefix) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$family = params.family, family = _params$family === void 0 ? FAMILY_CLASSIC : _params$family;
  var style = PREFIX_TO_STYLE[family][styleOrPrefix];
  var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
  var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  return prefix || defined || null;
}
function getCanonicalIcon(values) {
  var _famProps;
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$skipLookups = params.skipLookups, skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
  var famProps = (_famProps = {}, _defineProperty(_famProps, FAMILY_CLASSIC, "".concat(config.cssPrefix, "-").concat(FAMILY_CLASSIC)), _defineProperty(_famProps, FAMILY_SHARP, "".concat(config.cssPrefix, "-").concat(FAMILY_SHARP)), _famProps);
  var givenPrefix = null;
  var family = FAMILY_CLASSIC;
  if (values.includes(famProps[FAMILY_CLASSIC]) || values.some(function(v) {
    return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v);
  })) {
    family = FAMILY_CLASSIC;
  }
  if (values.includes(famProps[FAMILY_SHARP]) || values.some(function(v) {
    return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v);
  })) {
    family = FAMILY_SHARP;
  }
  var canonical = values.reduce(function(acc, cls) {
    var iconName = getIconName(config.cssPrefix, cls);
    if (styles[cls]) {
      cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
      givenPrefix = cls;
      acc.prefix = cls;
    } else if (PREFIXES[family].indexOf(cls) > -1) {
      givenPrefix = cls;
      acc.prefix = getCanonicalPrefix(cls, {
        family
      });
    } else if (iconName) {
      acc.iconName = iconName;
    } else if (cls !== config.replacementClass && cls !== famProps[FAMILY_CLASSIC] && cls !== famProps[FAMILY_SHARP]) {
      acc.rest.push(cls);
    }
    if (!skipLookups && acc.prefix && acc.iconName) {
      var shim = givenPrefix === "fa" ? byOldName(acc.iconName) : {};
      var aliasIconName = byAlias(acc.prefix, acc.iconName);
      if (shim.prefix) {
        givenPrefix = null;
      }
      acc.iconName = shim.iconName || aliasIconName || acc.iconName;
      acc.prefix = shim.prefix || acc.prefix;
      if (acc.prefix === "far" && !styles["far"] && styles["fas"] && !config.autoFetchSvg) {
        acc.prefix = "fas";
      }
    }
    return acc;
  }, emptyCanonicalIcon());
  if (values.includes("fa-brands") || values.includes("fab")) {
    canonical.prefix = "fab";
  }
  if (values.includes("fa-duotone") || values.includes("fad")) {
    canonical.prefix = "fad";
  }
  if (!canonical.prefix && family === FAMILY_SHARP && (styles["fass"] || config.autoFetchSvg)) {
    canonical.prefix = "fass";
    canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
  }
  if (canonical.prefix === "fa" || givenPrefix === "fa") {
    canonical.prefix = getDefaultUsablePrefix() || "fas";
  }
  return canonical;
}
function registerPlugins(nextPlugins, _ref2) {
  var obj = _ref2.mixoutsTo;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(function(k) {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });
  _plugins.forEach(function(plugin) {
    var mixout8 = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout8).forEach(function(tk) {
      if (typeof mixout8[tk] === "function") {
        obj[tk] = mixout8[tk];
      }
      if (_typeof(mixout8[tk]) === "object") {
        Object.keys(mixout8[tk]).forEach(function(sk) {
          if (!obj[tk]) {
            obj[tk] = {};
          }
          obj[tk][sk] = mixout8[tk][sk];
        });
      }
    });
    if (plugin.hooks) {
      var hooks8 = plugin.hooks();
      Object.keys(hooks8).forEach(function(hook) {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }
        _hooks[hook].push(hooks8[hook]);
      });
    }
    if (plugin.provides) {
      plugin.provides(providers);
    }
  });
  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function(hookFn) {
    accumulator = hookFn.apply(null, [accumulator].concat(args));
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function(hookFn) {
    hookFn.apply(null, args);
  });
  return void 0;
}
function callProvided() {
  var hook = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : void 0;
}
function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === "fa") {
    iconLookup.prefix = "fas";
  }
  var iconName = iconLookup.iconName;
  var prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName)
    return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
function domVariants(val, abstractCreator) {
  Object.defineProperty(val, "abstract", {
    get: abstractCreator
  });
  Object.defineProperty(val, "html", {
    get: function get2() {
      return val.abstract.map(function(a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, "node", {
    get: function get2() {
      if (!IS_DOM)
        return;
      var container = DOCUMENT.createElement("div");
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}
function asIcon(_ref2) {
  var children = _ref2.children, main = _ref2.main, mask = _ref2.mask, attributes = _ref2.attributes, styles2 = _ref2.styles, transform = _ref2.transform;
  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width, height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes["style"] = joinStyles(_objectSpread2(_objectSpread2({}, styles2), {}, {
      "transform-origin": "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes,
    children
  }];
}
function asSymbol(_ref2) {
  var prefix = _ref2.prefix, iconName = _ref2.iconName, children = _ref2.children, attributes = _ref2.attributes, symbol = _ref2.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
        id
      }),
      children
    }]
  }];
}
function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons, main = _params$icons.main, mask = _params$icons.mask, prefix = params.prefix, iconName = params.iconName, transform = params.transform, symbol = params.symbol, title = params.title, maskId = params.maskId, titleId = params.titleId, extra = params.extra, _params$watchable = params.watchable, watchable = _params$watchable === void 0 ? false : _params$watchable;
  var _ref2 = mask.found ? mask : main, width = _ref2.width, height = _ref2.height;
  var isUploadedIcon = prefix === "fak";
  var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ""].filter(function(c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function(c) {
    return c !== "" || !!c;
  }).concat(extra.classes).join(" ");
  var content = {
    children: [],
    attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      "data-prefix": prefix,
      "data-icon": iconName,
      "class": attrClass,
      "role": extra.attributes.role || "img",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf("fa-fw") ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};
  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = "";
  }
  if (title) {
    content.children.push({
      tag: "title",
      attributes: {
        id: content.attributes["aria-labelledby"] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }
  var args = _objectSpread2(_objectSpread2({}, content), {}, {
    prefix,
    iconName,
    main,
    mask,
    maskId,
    transform,
    symbol,
    styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
  });
  var _ref22 = mask.found && main.found ? callProvided("generateAbstractMask", args) || {
    children: [],
    attributes: {}
  } : callProvided("generateAbstractIcon", args) || {
    children: [],
    attributes: {}
  }, children = _ref22.children, attributes = _ref22.attributes;
  args.children = children;
  args.attributes = attributes;
  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content, width = params.width, height = params.height, transform = params.transform, title = params.title, extra = params.extra, _params$watchable2 = params.watchable, watchable = _params$watchable2 === void 0 ? false : _params$watchable2;
  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    "title": title
  } : {}), {}, {
    "class": extra.classes.join(" ")
  });
  if (watchable) {
    attributes[DATA_FA_I2SVG] = "";
  }
  var styles2 = _objectSpread2({}, extra.styles);
  if (transformIsMeaningful(transform)) {
    styles2["transform"] = transformForCss({
      transform,
      startCentered: true,
      width,
      height
    });
    styles2["-webkit-transform"] = styles2["transform"];
  }
  var styleString = joinStyles(styles2);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  var val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [title]
    });
  }
  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content, title = params.title, extra = params.extra;
  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    "title": title
  } : {}), {}, {
    "class": extra.classes.join(" ")
  });
  var styleString = joinStyles(extra.styles);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  var val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [title]
    });
  }
  return val;
}
function asFoundIcon(icon3) {
  var width = icon3[0];
  var height = icon3[1];
  var _icon$slice = icon3.slice(4), _icon$slice2 = _slicedToArray(_icon$slice, 1), vectorData = _icon$slice2[0];
  var element = null;
  if (Array.isArray(vectorData)) {
    element = {
      tag: "g",
      attributes: {
        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: "path",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: "currentColor",
          d: vectorData[0]
        }
      }, {
        tag: "path",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: "currentColor",
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: "path",
      attributes: {
        fill: "currentColor",
        d: vectorData
      }
    };
  }
  return {
    found: true,
    width,
    height,
    icon: element
  };
}
function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION && !config.showMissingIcons && iconName) {
    console.error('Icon with name "'.concat(iconName, '" and prefix "').concat(prefix, '" is missing.'));
  }
}
function findIcon(iconName, prefix) {
  var givenPrefix = prefix;
  if (prefix === "fa" && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }
  return new Promise(function(resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: callProvided("missingIconAbstract") || {}
    };
    if (givenPrefix === "fa") {
      var shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }
    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      var icon3 = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon3));
    }
    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided("missingIconAbstract") || {} : {}
    }));
  });
}
function isWatched(node) {
  var i2svg2 = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg2 === "string";
}
function hasPrefixAndIcon(node) {
  var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  var icon3 = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon3;
}
function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}
function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }
  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}
function createElementNS(tag) {
  return DOCUMENT.createElementNS("http://www.w3.org/2000/svg", tag);
}
function createElement(tag) {
  return DOCUMENT.createElement(tag);
}
function convertSVG(abstractObj) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$ceFn = params.ceFn, ceFn = _params$ceFn === void 0 ? abstractObj.tag === "svg" ? createElementNS : createElement : _params$ceFn;
  if (typeof abstractObj === "string") {
    return DOCUMENT.createTextNode(abstractObj);
  }
  var tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function(key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  var children = abstractObj.children || [];
  children.forEach(function(child) {
    tag.appendChild(convertSVG(child, {
      ceFn
    }));
  });
  return tag;
}
function nodeAsComment(node) {
  var comment = " ".concat(node.outerHTML, " ");
  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  return comment;
}
function performOperationSync(op) {
  op();
}
function perform(mutations, callback) {
  var callbackFunction = typeof callback === "function" ? callback : noop$2;
  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;
    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }
    frame(function() {
      var mutator = getMutator();
      var mark = perf.begin("mutate");
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }
  if (!config.observeMutations) {
    return;
  }
  var _options$treeCallback = options.treeCallback, treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback, _options$nodeCallback = options.nodeCallback, nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback, _options$pseudoElemen = options.pseudoElementsCallback, pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen, _options$observeMutat = options.observeMutationsRoot, observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function(objects) {
    if (disabled)
      return;
    var defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(function(mutationRecord) {
      if (mutationRecord.type === "childList" && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }
        treeCallback(mutationRecord.target);
      }
      if (mutationRecord.type === "attributes" && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }
      if (mutationRecord.type === "attributes" && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === "class" && hasPrefixAndIcon(mutationRecord.target)) {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)), prefix = _getCanonicalIcon.prefix, iconName = _getCanonicalIcon.iconName;
          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName)
            mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM)
    return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo)
    return;
  mo.disconnect();
}
function styleParser(node) {
  var style = node.getAttribute("style");
  var val = [];
  if (style) {
    val = style.split(";").reduce(function(acc, style2) {
      var styles2 = style2.split(":");
      var prop = styles2[0];
      var value = styles2.slice(1);
      if (prop && value.length > 0) {
        acc[prop] = value.join(":").trim();
      }
      return acc;
    }, {});
  }
  return val;
}
function classParser(node) {
  var existingPrefix = node.getAttribute("data-prefix");
  var existingIconName = node.getAttribute("data-icon");
  var innerText = node.innerText !== void 0 ? node.innerText.trim() : "";
  var val = getCanonicalIcon(classArray(node));
  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }
  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }
  if (val.iconName && val.prefix) {
    return val;
  }
  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }
  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }
  return val;
}
function attributesParser(node) {
  var extraAttributes = toArray(node.attributes).reduce(function(acc, attr) {
    if (acc.name !== "class" && acc.name !== "style") {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});
  var title = node.getAttribute("title");
  var titleId = node.getAttribute("data-fa-title-id");
  if (config.autoA11y) {
    if (title) {
      extraAttributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes["aria-hidden"] = "true";
      extraAttributes["focusable"] = "false";
    }
  }
  return extraAttributes;
}
function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var parser = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: true
  };
  var _classParser = classParser(node), iconName = _classParser.iconName, prefix = _classParser.prefix, extraClasses = _classParser.rest;
  var extraAttributes = attributesParser(node);
  var pluginMeta = chainHooks("parseNodeAttributes", {}, node);
  var extraStyles = parser.styleParser ? styleParser(node) : [];
  return _objectSpread2({
    iconName,
    title: node.getAttribute("title"),
    titleId: node.getAttribute("data-fa-title-id"),
    prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}
function generateMutation(node) {
  var nodeMeta = config.autoReplaceSvg === "nest" ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);
  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided("generateLayersText", node, nodeMeta);
  } else {
    return callProvided("generateSvgReplacementMutation", node, nodeMeta);
  }
}
function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!IS_DOM)
    return Promise.resolve();
  var htmlClassList = DOCUMENT.documentElement.classList;
  var hclAdd = function hclAdd2(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };
  var hclRemove = function hclRemove2(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };
  var prefixes2 = config.autoFetchSvg ? knownPrefixes : FAMILIES.map(function(f) {
    return "fa-".concat(f);
  }).concat(Object.keys(styles$2));
  if (!prefixes2.includes("fa")) {
    prefixes2.push("fa");
  }
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes2.map(function(p2) {
    return ".".concat(p2, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(", ");
  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }
  var candidates = [];
  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {
  }
  if (candidates.length > 0) {
    hclAdd("pending");
    hclRemove("complete");
  } else {
    return Promise.resolve();
  }
  var mark = perf.begin("onTree");
  var mutations = candidates.reduce(function(acc, node) {
    try {
      var mutation = generateMutation(node);
      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e.name === "MissingIcon") {
          console.error(e);
        }
      }
    }
    return acc;
  }, []);
  return new Promise(function(resolve, reject) {
    Promise.all(mutations).then(function(resolvedMutations) {
      perform(resolvedMutations, function() {
        hclAdd("active");
        hclAdd("complete");
        hclRemove("pending");
        if (typeof callback === "function")
          callback();
        mark();
        resolve();
      });
    }).catch(function(e) {
      mark();
      reject(e);
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  generateMutation(node).then(function(mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}
function resolveIcons(next) {
  return function(maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;
    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }
    return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
      mask
    }));
  };
}
function hexValueFromContent(content) {
  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, "");
  var codePoint = codePointAt(cleaned, 0);
  var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}
function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(":", "-"));
  return new Promise(function(resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      return resolve();
    }
    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function(c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles2 = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles2.getPropertyValue("font-family").match(FONT_FAMILY_PATTERN);
    var fontWeight = styles2.getPropertyValue("font-weight");
    var content = styles2.getPropertyValue("content");
    if (alreadyProcessedPseudoElement && !fontFamily) {
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== "none" && content !== "") {
      var _content = styles2.getPropertyValue("content");
      var family = ~["Sharp"].indexOf(fontFamily[2]) ? FAMILY_SHARP : FAMILY_CLASSIC;
      var prefix = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[family][fontWeight];
      var _hexValueFromContent = hexValueFromContent(_content), hexValue = _hexValueFromContent.value, isSecondary = _hexValueFromContent.isSecondary;
      var isV4 = fontFamily[0].startsWith("FontAwesome");
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName;
      if (isV4) {
        var iconName4 = byOldUnicode(hexValue);
        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      }
      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);
        if (alreadyProcessedPseudoElement) {
          node.removeChild(alreadyProcessedPseudoElement);
        }
        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function(main) {
          var _abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
            icons: {
              main,
              mask: emptyCanonicalIcon()
            },
            prefix,
            iconName: iconIdentifier,
            extra,
            watchable: true
          }));
          var element = DOCUMENT.createElementNS("http://www.w3.org/2000/svg", "svg");
          if (position === "::before") {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }
          element.outerHTML = _abstract.map(function(a) {
            return toHtml(a);
          }).join("\n");
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}
function replace3(node) {
  return Promise.all([replaceForPosition(node, "::before"), replaceForPosition(node, "::after")]);
}
function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== "svg");
}
function searchPseudoElements(root) {
  if (!IS_DOM)
    return;
  return new Promise(function(resolve, reject) {
    var operations = toArray(root.querySelectorAll("*")).filter(processable).map(replace3);
    var end3 = perf.begin("searchPseudoElements");
    disableObservation();
    Promise.all(operations).then(function() {
      end3();
      enableObservation();
      resolve();
    }).catch(function() {
      end3();
      enableObservation();
      reject();
    });
  });
}
function fillBlack(_abstract) {
  var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (_abstract.attributes && (_abstract.attributes.fill || force)) {
    _abstract.attributes.fill = "black";
  }
  return _abstract;
}
function deGroup(_abstract2) {
  if (_abstract2.tag === "g") {
    return _abstract2.children;
  } else {
    return [_abstract2];
  }
}
var noop2, _WINDOW, _DOCUMENT, _MUTATION_OBSERVER, _PERFORMANCE, _ref, _ref$userAgent, userAgent, WINDOW, DOCUMENT, MUTATION_OBSERVER, PERFORMANCE, IS_BROWSER, IS_DOM, IS_IE, _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5, NAMESPACE_IDENTIFIER, UNITS_IN_GRID, DEFAULT_CSS_PREFIX, DEFAULT_REPLACEMENT_CLASS, DATA_FA_I2SVG, DATA_FA_PSEUDO_ELEMENT, DATA_FA_PSEUDO_ELEMENT_PENDING, DATA_PREFIX, DATA_ICON, HTML_CLASS_I2SVG_BASE_CLASS, MUTATION_APPROACH_ASYNC, TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS, PRODUCTION, FAMILY_CLASSIC, FAMILY_SHARP, FAMILIES, PREFIX_TO_STYLE, STYLE_TO_PREFIX, PREFIX_TO_LONG_STYLE, LONG_STYLE_TO_PREFIX, ICON_SELECTION_SYNTAX_PATTERN, LAYERS_TEXT_CLASSNAME, FONT_FAMILY_PATTERN, FONT_WEIGHT_TO_PREFIX, oneToTen, oneToTwenty, ATTRIBUTES_WATCHED_FOR_MUTATION, DUOTONE_CLASSES, prefixes, RESERVED_CLASSES, initial, attrs, _default, _config, config, _onChangeCb, d, meaninglessTransform, idPool, baseStyles, _cssInserted, InjectCSS, w, namespace, functions, listener, loaded, bindInternal4, reduce, _LONG_STYLE, _PREFIXES, _PREFIXES_FOR_FAMILY, styles, shims, LONG_STYLE, _defaultUsablePrefix, _byUnicode, _byLigature, _byOldName, _byOldUnicode, _byAlias, PREFIXES, build, emptyCanonicalIcon, PREFIXES_FOR_FAMILY, Library, _plugins, _hooks, providers, defaultProviderKeys, library, noAuto, dom, parse2, api, autoReplace, styles$1, missingIconResolutionMixin, noop$1, p, preamble, begin, end, perf, noop$2, mutators, disabled, mo, styles$2, knownPrefixes, render, ReplaceElements, Layers, LayersCounter, LayersText, CLEAN_CONTENT_PATTERN, SECONDARY_UNICODE_RANGE, PseudoElements, _unwatched, MutationObserver$1, parseTransformString, PowerTransforms, ALL_SPACE, Masks, MissingIconIndicator, SvgSymbols, plugins, noAuto$1, config$1, library$1, dom$1, parse$1, findIconDefinition$1, toHtml$1, icon2, layer, text, counter;
var init_fontawesome_svg_core = __esm({
  "../../node_modules/.pnpm/@fortawesome+fontawesome-svg-core@6.5.1/node_modules/@fortawesome/fontawesome-svg-core/index.mjs"() {
    noop2 = function noop3() {
    };
    _WINDOW = {};
    _DOCUMENT = {};
    _MUTATION_OBSERVER = null;
    _PERFORMANCE = {
      mark: noop2,
      measure: noop2
    };
    try {
      if (typeof window !== "undefined")
        _WINDOW = window;
      if (typeof document !== "undefined")
        _DOCUMENT = document;
      if (typeof MutationObserver !== "undefined")
        _MUTATION_OBSERVER = MutationObserver;
      if (typeof performance !== "undefined")
        _PERFORMANCE = performance;
    } catch (e) {
    }
    _ref = _WINDOW.navigator || {};
    _ref$userAgent = _ref.userAgent;
    userAgent = _ref$userAgent === void 0 ? "" : _ref$userAgent;
    WINDOW = _WINDOW;
    DOCUMENT = _DOCUMENT;
    MUTATION_OBSERVER = _MUTATION_OBSERVER;
    PERFORMANCE = _PERFORMANCE;
    IS_BROWSER = !!WINDOW.document;
    IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === "function" && typeof DOCUMENT.createElement === "function";
    IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");
    NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
    UNITS_IN_GRID = 16;
    DEFAULT_CSS_PREFIX = "fa";
    DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
    DATA_FA_I2SVG = "data-fa-i2svg";
    DATA_FA_PSEUDO_ELEMENT = "data-fa-pseudo-element";
    DATA_FA_PSEUDO_ELEMENT_PENDING = "data-fa-pseudo-element-pending";
    DATA_PREFIX = "data-prefix";
    DATA_ICON = "data-icon";
    HTML_CLASS_I2SVG_BASE_CLASS = "fontawesome-i2svg";
    MUTATION_APPROACH_ASYNC = "async";
    TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ["HTML", "HEAD", "STYLE", "SCRIPT"];
    PRODUCTION = function() {
      try {
        return false;
      } catch (e) {
        return false;
      }
    }();
    FAMILY_CLASSIC = "classic";
    FAMILY_SHARP = "sharp";
    FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];
    PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty(_familyProxy, FAMILY_CLASSIC, {
      "fa": "solid",
      "fas": "solid",
      "fa-solid": "solid",
      "far": "regular",
      "fa-regular": "regular",
      "fal": "light",
      "fa-light": "light",
      "fat": "thin",
      "fa-thin": "thin",
      "fad": "duotone",
      "fa-duotone": "duotone",
      "fab": "brands",
      "fa-brands": "brands",
      "fak": "kit",
      "fakd": "kit",
      "fa-kit": "kit",
      "fa-kit-duotone": "kit"
    }), _defineProperty(_familyProxy, FAMILY_SHARP, {
      "fa": "solid",
      "fass": "solid",
      "fa-solid": "solid",
      "fasr": "regular",
      "fa-regular": "regular",
      "fasl": "light",
      "fa-light": "light",
      "fast": "thin",
      "fa-thin": "thin"
    }), _familyProxy));
    STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak"
    }), _defineProperty(_familyProxy2, FAMILY_SHARP, {
      solid: "fass",
      regular: "fasr",
      light: "fasl",
      thin: "fast"
    }), _familyProxy2));
    PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin"
    }), _defineProperty(_familyProxy3, FAMILY_SHARP, {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin"
    }), _familyProxy3));
    LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat"
    }), _defineProperty(_familyProxy4, FAMILY_SHARP, {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast"
    }), _familyProxy4));
    ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/;
    LAYERS_TEXT_CLASSNAME = "fa-layers-text";
    FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
    FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    }), _defineProperty(_familyProxy5, FAMILY_SHARP, {
      900: "fass",
      400: "fasr",
      300: "fasl",
      100: "fast"
    }), _familyProxy5));
    oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    ATTRIBUTES_WATCHED_FOR_MUTATION = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"];
    DUOTONE_CLASSES = {
      GROUP: "duotone-group",
      SWAP_OPACITY: "swap-opacity",
      PRIMARY: "primary",
      SECONDARY: "secondary"
    };
    prefixes = /* @__PURE__ */ new Set();
    Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
    Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
    RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function(n) {
      return "".concat(n, "x");
    })).concat(oneToTwenty.map(function(n) {
      return "w-".concat(n);
    }));
    initial = WINDOW.FontAwesomeConfig || {};
    if (DOCUMENT && typeof DOCUMENT.querySelector === "function") {
      attrs = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
      attrs.forEach(function(_ref2) {
        var _ref22 = _slicedToArray(_ref2, 2), attr = _ref22[0], key = _ref22[1];
        var val = coerce(getAttrConfig(attr));
        if (val !== void 0 && val !== null) {
          initial[key] = val;
        }
      });
    }
    _default = {
      styleDefault: "solid",
      familyDefault: "classic",
      cssPrefix: DEFAULT_CSS_PREFIX,
      replacementClass: DEFAULT_REPLACEMENT_CLASS,
      autoReplaceSvg: true,
      autoAddCss: true,
      autoA11y: true,
      searchPseudoElements: false,
      observeMutations: true,
      mutateApproach: "async",
      keepOriginalSource: true,
      measurePerformance: false,
      showMissingIcons: true
    };
    if (initial.familyPrefix) {
      initial.cssPrefix = initial.familyPrefix;
    }
    _config = _objectSpread2(_objectSpread2({}, _default), initial);
    if (!_config.autoReplaceSvg)
      _config.observeMutations = false;
    config = {};
    Object.keys(_default).forEach(function(key) {
      Object.defineProperty(config, key, {
        enumerable: true,
        set: function set2(val) {
          _config[key] = val;
          _onChangeCb.forEach(function(cb) {
            return cb(config);
          });
        },
        get: function get2() {
          return _config[key];
        }
      });
    });
    Object.defineProperty(config, "familyPrefix", {
      enumerable: true,
      set: function set(val) {
        _config.cssPrefix = val;
        _onChangeCb.forEach(function(cb) {
          return cb(config);
        });
      },
      get: function get() {
        return _config.cssPrefix;
      }
    });
    WINDOW.FontAwesomeConfig = config;
    _onChangeCb = [];
    d = UNITS_IN_GRID;
    meaninglessTransform = {
      size: 16,
      x: 0,
      y: 0,
      rotate: 0,
      flipX: false,
      flipY: false
    };
    idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    baseStyles = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
    _cssInserted = false;
    InjectCSS = {
      mixout: function mixout() {
        return {
          dom: {
            css,
            insertCss: ensureCss
          }
        };
      },
      hooks: function hooks() {
        return {
          beforeDOMElementCreation: function beforeDOMElementCreation() {
            ensureCss();
          },
          beforeI2svg: function beforeI2svg() {
            ensureCss();
          }
        };
      }
    };
    w = WINDOW || {};
    if (!w[NAMESPACE_IDENTIFIER])
      w[NAMESPACE_IDENTIFIER] = {};
    if (!w[NAMESPACE_IDENTIFIER].styles)
      w[NAMESPACE_IDENTIFIER].styles = {};
    if (!w[NAMESPACE_IDENTIFIER].hooks)
      w[NAMESPACE_IDENTIFIER].hooks = {};
    if (!w[NAMESPACE_IDENTIFIER].shims)
      w[NAMESPACE_IDENTIFIER].shims = [];
    namespace = w[NAMESPACE_IDENTIFIER];
    functions = [];
    listener = function listener2() {
      DOCUMENT.removeEventListener("DOMContentLoaded", listener2);
      loaded = 1;
      functions.map(function(fn) {
        return fn();
      });
    };
    loaded = false;
    if (IS_DOM) {
      loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
      if (!loaded)
        DOCUMENT.addEventListener("DOMContentLoaded", listener);
    }
    bindInternal4 = function bindInternal42(func, thisContext) {
      return function(a, b, c, d2) {
        return func.call(thisContext, a, b, c, d2);
      };
    };
    reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
      var keys = Object.keys(subject), length = keys.length, iterator = thisContext !== void 0 ? bindInternal4(fn, thisContext) : fn, i, key, result;
      if (initialValue === void 0) {
        i = 1;
        result = subject[keys[0]];
      } else {
        i = 0;
        result = initialValue;
      }
      for (; i < length; i++) {
        key = keys[i];
        result = iterator(result, subject[key], key, subject);
      }
      return result;
    };
    styles = namespace.styles;
    shims = namespace.shims;
    LONG_STYLE = (_LONG_STYLE = {}, _defineProperty(_LONG_STYLE, FAMILY_CLASSIC, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_LONG_STYLE, FAMILY_SHARP, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _LONG_STYLE);
    _defaultUsablePrefix = null;
    _byUnicode = {};
    _byLigature = {};
    _byOldName = {};
    _byOldUnicode = {};
    _byAlias = {};
    PREFIXES = (_PREFIXES = {}, _defineProperty(_PREFIXES, FAMILY_CLASSIC, Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES, FAMILY_SHARP, Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])), _PREFIXES);
    build = function build2() {
      var lookup2 = function lookup3(reducer) {
        return reduce(styles, function(o, style, prefix) {
          o[prefix] = reduce(style, reducer, {});
          return o;
        }, {});
      };
      _byUnicode = lookup2(function(acc, icon3, iconName) {
        if (icon3[3]) {
          acc[icon3[3]] = iconName;
        }
        if (icon3[2]) {
          var aliases = icon3[2].filter(function(a) {
            return typeof a === "number";
          });
          aliases.forEach(function(alias) {
            acc[alias.toString(16)] = iconName;
          });
        }
        return acc;
      });
      _byLigature = lookup2(function(acc, icon3, iconName) {
        acc[iconName] = iconName;
        if (icon3[2]) {
          var aliases = icon3[2].filter(function(a) {
            return typeof a === "string";
          });
          aliases.forEach(function(alias) {
            acc[alias] = iconName;
          });
        }
        return acc;
      });
      _byAlias = lookup2(function(acc, icon3, iconName) {
        var aliases = icon3[2];
        acc[iconName] = iconName;
        aliases.forEach(function(alias) {
          acc[alias] = iconName;
        });
        return acc;
      });
      var hasRegular = "far" in styles || config.autoFetchSvg;
      var shimLookups = reduce(shims, function(acc, shim) {
        var maybeNameMaybeUnicode = shim[0];
        var prefix = shim[1];
        var iconName = shim[2];
        if (prefix === "far" && !hasRegular) {
          prefix = "fas";
        }
        if (typeof maybeNameMaybeUnicode === "string") {
          acc.names[maybeNameMaybeUnicode] = {
            prefix,
            iconName
          };
        }
        if (typeof maybeNameMaybeUnicode === "number") {
          acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
            prefix,
            iconName
          };
        }
        return acc;
      }, {
        names: {},
        unicodes: {}
      });
      _byOldName = shimLookups.names;
      _byOldUnicode = shimLookups.unicodes;
      _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
        family: config.familyDefault
      });
    };
    onChange(function(c) {
      _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault, {
        family: config.familyDefault
      });
    });
    build();
    emptyCanonicalIcon = function emptyCanonicalIcon2() {
      return {
        prefix: null,
        iconName: null,
        rest: []
      };
    };
    PREFIXES_FOR_FAMILY = (_PREFIXES_FOR_FAMILY = {}, _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_CLASSIC, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_SHARP, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _PREFIXES_FOR_FAMILY);
    Library = /* @__PURE__ */ function() {
      function Library2() {
        _classCallCheck(this, Library2);
        this.definitions = {};
      }
      _createClass(Library2, [{
        key: "add",
        value: function add() {
          var _this = this;
          for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
            definitions[_key] = arguments[_key];
          }
          var additions = definitions.reduce(this._pullDefinitions, {});
          Object.keys(additions).forEach(function(key) {
            _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
            defineIcons(key, additions[key]);
            var longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key];
            if (longPrefix)
              defineIcons(longPrefix, additions[key]);
            build();
          });
        }
      }, {
        key: "reset",
        value: function reset2() {
          this.definitions = {};
        }
      }, {
        key: "_pullDefinitions",
        value: function _pullDefinitions(additions, definition) {
          var normalized = definition.prefix && definition.iconName && definition.icon ? {
            0: definition
          } : definition;
          Object.keys(normalized).map(function(key) {
            var _normalized$key = normalized[key], prefix = _normalized$key.prefix, iconName = _normalized$key.iconName, icon3 = _normalized$key.icon;
            var aliases = icon3[2];
            if (!additions[prefix])
              additions[prefix] = {};
            if (aliases.length > 0) {
              aliases.forEach(function(alias) {
                if (typeof alias === "string") {
                  additions[prefix][alias] = icon3;
                }
              });
            }
            additions[prefix][iconName] = icon3;
          });
          return additions;
        }
      }]);
      return Library2;
    }();
    _plugins = [];
    _hooks = {};
    providers = {};
    defaultProviderKeys = Object.keys(providers);
    library = new Library();
    noAuto = function noAuto2() {
      config.autoReplaceSvg = false;
      config.observeMutations = false;
      callHooks("noAuto");
    };
    dom = {
      i2svg: function i2svg() {
        var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (IS_DOM) {
          callHooks("beforeI2svg", params);
          callProvided("pseudoElements2svg", params);
          return callProvided("i2svg", params);
        } else {
          return Promise.reject("Operation requires a DOM of some kind.");
        }
      },
      watch: function watch() {
        var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var autoReplaceSvgRoot = params.autoReplaceSvgRoot;
        if (config.autoReplaceSvg === false) {
          config.autoReplaceSvg = true;
        }
        config.observeMutations = true;
        domready(function() {
          autoReplace({
            autoReplaceSvgRoot
          });
          callHooks("watch", params);
        });
      }
    };
    parse2 = {
      icon: function icon(_icon) {
        if (_icon === null) {
          return null;
        }
        if (_typeof(_icon) === "object" && _icon.prefix && _icon.iconName) {
          return {
            prefix: _icon.prefix,
            iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
          };
        }
        if (Array.isArray(_icon) && _icon.length === 2) {
          var iconName = _icon[1].indexOf("fa-") === 0 ? _icon[1].slice(3) : _icon[1];
          var prefix = getCanonicalPrefix(_icon[0]);
          return {
            prefix,
            iconName: byAlias(prefix, iconName) || iconName
          };
        }
        if (typeof _icon === "string" && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
          var canonicalIcon = getCanonicalIcon(_icon.split(" "), {
            skipLookups: true
          });
          return {
            prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
            iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
          };
        }
        if (typeof _icon === "string") {
          var _prefix = getDefaultUsablePrefix();
          return {
            prefix: _prefix,
            iconName: byAlias(_prefix, _icon) || _icon
          };
        }
      }
    };
    api = {
      noAuto,
      config,
      dom,
      parse: parse2,
      library,
      findIconDefinition,
      toHtml
    };
    autoReplace = function autoReplace2() {
      var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var _params$autoReplaceSv = params.autoReplaceSvgRoot, autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
      if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg)
        api.dom.i2svg({
          node: autoReplaceSvgRoot
        });
    };
    styles$1 = namespace.styles;
    missingIconResolutionMixin = {
      found: false,
      width: 512,
      height: 512
    };
    noop$1 = function noop4() {
    };
    p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
      mark: noop$1,
      measure: noop$1
    };
    preamble = 'FA "6.5.1"';
    begin = function begin2(name) {
      p.mark("".concat(preamble, " ").concat(name, " begins"));
      return function() {
        return end(name);
      };
    };
    end = function end2(name) {
      p.mark("".concat(preamble, " ").concat(name, " ends"));
      p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
    };
    perf = {
      begin,
      end
    };
    noop$2 = function noop5() {
    };
    mutators = {
      replace: function replace2(mutation) {
        var node = mutation[0];
        if (node.parentNode) {
          mutation[1].forEach(function(_abstract) {
            node.parentNode.insertBefore(convertSVG(_abstract), node);
          });
          if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
            var comment = DOCUMENT.createComment(nodeAsComment(node));
            node.parentNode.replaceChild(comment, node);
          } else {
            node.remove();
          }
        }
      },
      nest: function nest(mutation) {
        var node = mutation[0];
        var _abstract2 = mutation[1];
        if (~classArray(node).indexOf(config.replacementClass)) {
          return mutators.replace(mutation);
        }
        var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
        delete _abstract2[0].attributes.id;
        if (_abstract2[0].attributes.class) {
          var splitClasses = _abstract2[0].attributes.class.split(" ").reduce(function(acc, cls) {
            if (cls === config.replacementClass || cls.match(forSvg)) {
              acc.toSvg.push(cls);
            } else {
              acc.toNode.push(cls);
            }
            return acc;
          }, {
            toNode: [],
            toSvg: []
          });
          _abstract2[0].attributes.class = splitClasses.toSvg.join(" ");
          if (splitClasses.toNode.length === 0) {
            node.removeAttribute("class");
          } else {
            node.setAttribute("class", splitClasses.toNode.join(" "));
          }
        }
        var newInnerHTML = _abstract2.map(function(a) {
          return toHtml(a);
        }).join("\n");
        node.setAttribute(DATA_FA_I2SVG, "");
        node.innerHTML = newInnerHTML;
      }
    };
    disabled = false;
    mo = null;
    styles$2 = namespace.styles;
    knownPrefixes = /* @__PURE__ */ new Set();
    FAMILIES.map(function(family) {
      knownPrefixes.add("fa-".concat(family));
    });
    Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(knownPrefixes.add.bind(knownPrefixes));
    Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(knownPrefixes.add.bind(knownPrefixes));
    knownPrefixes = _toConsumableArray(knownPrefixes);
    render = function render2(iconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$symbol = params.symbol, symbol = _params$symbol === void 0 ? false : _params$symbol, _params$mask = params.mask, mask = _params$mask === void 0 ? null : _params$mask, _params$maskId = params.maskId, maskId = _params$maskId === void 0 ? null : _params$maskId, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$titleId = params.titleId, titleId = _params$titleId === void 0 ? null : _params$titleId, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
      if (!iconDefinition)
        return;
      var prefix = iconDefinition.prefix, iconName = iconDefinition.iconName, icon3 = iconDefinition.icon;
      return domVariants(_objectSpread2({
        type: "icon"
      }, iconDefinition), function() {
        callHooks("beforeDOMElementCreation", {
          iconDefinition,
          params
        });
        if (config.autoA11y) {
          if (title) {
            attributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
          } else {
            attributes["aria-hidden"] = "true";
            attributes["focusable"] = "false";
          }
        }
        return makeInlineSvgAbstract({
          icons: {
            main: asFoundIcon(icon3),
            mask: mask ? asFoundIcon(mask.icon) : {
              found: false,
              width: null,
              height: null,
              icon: {}
            }
          },
          prefix,
          iconName,
          transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
          symbol,
          title,
          maskId,
          titleId,
          extra: {
            attributes,
            styles: styles2,
            classes
          }
        });
      });
    };
    ReplaceElements = {
      mixout: function mixout2() {
        return {
          icon: resolveIcons(render)
        };
      },
      hooks: function hooks2() {
        return {
          mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
            accumulator.treeCallback = onTree;
            accumulator.nodeCallback = onNode;
            return accumulator;
          }
        };
      },
      provides: function provides(providers$$1) {
        providers$$1.i2svg = function(params) {
          var _params$node = params.node, node = _params$node === void 0 ? DOCUMENT : _params$node, _params$callback = params.callback, callback = _params$callback === void 0 ? function() {
          } : _params$callback;
          return onTree(node, callback);
        };
        providers$$1.generateSvgReplacementMutation = function(node, nodeMeta) {
          var iconName = nodeMeta.iconName, title = nodeMeta.title, titleId = nodeMeta.titleId, prefix = nodeMeta.prefix, transform = nodeMeta.transform, symbol = nodeMeta.symbol, mask = nodeMeta.mask, maskId = nodeMeta.maskId, extra = nodeMeta.extra;
          return new Promise(function(resolve, reject) {
            Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
              found: false,
              width: 512,
              height: 512,
              icon: {}
            })]).then(function(_ref2) {
              var _ref22 = _slicedToArray(_ref2, 2), main = _ref22[0], mask2 = _ref22[1];
              resolve([node, makeInlineSvgAbstract({
                icons: {
                  main,
                  mask: mask2
                },
                prefix,
                iconName,
                transform,
                symbol,
                maskId,
                title,
                titleId,
                extra,
                watchable: true
              })]);
            }).catch(reject);
          });
        };
        providers$$1.generateAbstractIcon = function(_ref3) {
          var children = _ref3.children, attributes = _ref3.attributes, main = _ref3.main, transform = _ref3.transform, styles2 = _ref3.styles;
          var styleString = joinStyles(styles2);
          if (styleString.length > 0) {
            attributes["style"] = styleString;
          }
          var nextChild;
          if (transformIsMeaningful(transform)) {
            nextChild = callProvided("generateAbstractTransformGrouping", {
              main,
              transform,
              containerWidth: main.width,
              iconWidth: main.width
            });
          }
          children.push(nextChild || main.icon);
          return {
            children,
            attributes
          };
        };
      }
    };
    Layers = {
      mixout: function mixout3() {
        return {
          layer: function layer2(assembler) {
            var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes;
            return domVariants({
              type: "layer"
            }, function() {
              callHooks("beforeDOMElementCreation", {
                assembler,
                params
              });
              var children = [];
              assembler(function(args) {
                Array.isArray(args) ? args.map(function(a) {
                  children = children.concat(a.abstract);
                }) : children = children.concat(args.abstract);
              });
              return [{
                tag: "span",
                attributes: {
                  class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray(classes)).join(" ")
                },
                children
              }];
            });
          }
        };
      }
    };
    LayersCounter = {
      mixout: function mixout4() {
        return {
          counter: function counter2(content) {
            var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
            return domVariants({
              type: "counter",
              content
            }, function() {
              callHooks("beforeDOMElementCreation", {
                content,
                params
              });
              return makeLayersCounterAbstract({
                content: content.toString(),
                title,
                extra: {
                  attributes,
                  styles: styles2,
                  classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
                }
              });
            });
          }
        };
      }
    };
    LayersText = {
      mixout: function mixout5() {
        return {
          text: function text3(content) {
            var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
            return domVariants({
              type: "text",
              content
            }, function() {
              callHooks("beforeDOMElementCreation", {
                content,
                params
              });
              return makeLayersTextAbstract({
                content,
                transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
                title,
                extra: {
                  attributes,
                  styles: styles2,
                  classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray(classes))
                }
              });
            });
          }
        };
      },
      provides: function provides2(providers$$1) {
        providers$$1.generateLayersText = function(node, nodeMeta) {
          var title = nodeMeta.title, transform = nodeMeta.transform, extra = nodeMeta.extra;
          var width = null;
          var height = null;
          if (IS_IE) {
            var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
            var boundingClientRect = node.getBoundingClientRect();
            width = boundingClientRect.width / computedFontSize;
            height = boundingClientRect.height / computedFontSize;
          }
          if (config.autoA11y && !title) {
            extra.attributes["aria-hidden"] = "true";
          }
          return Promise.resolve([node, makeLayersTextAbstract({
            content: node.innerHTML,
            width,
            height,
            transform,
            title,
            extra,
            watchable: true
          })]);
        };
      }
    };
    CLEAN_CONTENT_PATTERN = new RegExp('"', "ug");
    SECONDARY_UNICODE_RANGE = [1105920, 1112319];
    PseudoElements = {
      hooks: function hooks3() {
        return {
          mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
            accumulator.pseudoElementsCallback = searchPseudoElements;
            return accumulator;
          }
        };
      },
      provides: function provides3(providers$$1) {
        providers$$1.pseudoElements2svg = function(params) {
          var _params$node = params.node, node = _params$node === void 0 ? DOCUMENT : _params$node;
          if (config.searchPseudoElements) {
            searchPseudoElements(node);
          }
        };
      }
    };
    _unwatched = false;
    MutationObserver$1 = {
      mixout: function mixout6() {
        return {
          dom: {
            unwatch: function unwatch() {
              disableObservation();
              _unwatched = true;
            }
          }
        };
      },
      hooks: function hooks4() {
        return {
          bootstrap: function bootstrap() {
            observe(chainHooks("mutationObserverCallbacks", {}));
          },
          noAuto: function noAuto3() {
            disconnect();
          },
          watch: function watch2(params) {
            var observeMutationsRoot = params.observeMutationsRoot;
            if (_unwatched) {
              enableObservation();
            } else {
              observe(chainHooks("mutationObserverCallbacks", {
                observeMutationsRoot
              }));
            }
          }
        };
      }
    };
    parseTransformString = function parseTransformString2(transformString) {
      var transform = {
        size: 16,
        x: 0,
        y: 0,
        flipX: false,
        flipY: false,
        rotate: 0
      };
      return transformString.toLowerCase().split(" ").reduce(function(acc, n) {
        var parts = n.toLowerCase().split("-");
        var first = parts[0];
        var rest = parts.slice(1).join("-");
        if (first && rest === "h") {
          acc.flipX = true;
          return acc;
        }
        if (first && rest === "v") {
          acc.flipY = true;
          return acc;
        }
        rest = parseFloat(rest);
        if (isNaN(rest)) {
          return acc;
        }
        switch (first) {
          case "grow":
            acc.size = acc.size + rest;
            break;
          case "shrink":
            acc.size = acc.size - rest;
            break;
          case "left":
            acc.x = acc.x - rest;
            break;
          case "right":
            acc.x = acc.x + rest;
            break;
          case "up":
            acc.y = acc.y - rest;
            break;
          case "down":
            acc.y = acc.y + rest;
            break;
          case "rotate":
            acc.rotate = acc.rotate + rest;
            break;
        }
        return acc;
      }, transform);
    };
    PowerTransforms = {
      mixout: function mixout7() {
        return {
          parse: {
            transform: function transform(transformString) {
              return parseTransformString(transformString);
            }
          }
        };
      },
      hooks: function hooks5() {
        return {
          parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
            var transformString = node.getAttribute("data-fa-transform");
            if (transformString) {
              accumulator.transform = parseTransformString(transformString);
            }
            return accumulator;
          }
        };
      },
      provides: function provides4(providers2) {
        providers2.generateAbstractTransformGrouping = function(_ref2) {
          var main = _ref2.main, transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
          var outer = {
            transform: "translate(".concat(containerWidth / 2, " 256)")
          };
          var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
          var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
          var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
          var inner = {
            transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
          };
          var path = {
            transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
          };
          var operations = {
            outer,
            inner,
            path
          };
          return {
            tag: "g",
            attributes: _objectSpread2({}, operations.outer),
            children: [{
              tag: "g",
              attributes: _objectSpread2({}, operations.inner),
              children: [{
                tag: main.icon.tag,
                children: main.icon.children,
                attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
              }]
            }]
          };
        };
      }
    };
    ALL_SPACE = {
      x: 0,
      y: 0,
      width: "100%",
      height: "100%"
    };
    Masks = {
      hooks: function hooks6() {
        return {
          parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
            var maskData = node.getAttribute("data-fa-mask");
            var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(" ").map(function(i) {
              return i.trim();
            }));
            if (!mask.prefix) {
              mask.prefix = getDefaultUsablePrefix();
            }
            accumulator.mask = mask;
            accumulator.maskId = node.getAttribute("data-fa-mask-id");
            return accumulator;
          }
        };
      },
      provides: function provides5(providers2) {
        providers2.generateAbstractMask = function(_ref2) {
          var children = _ref2.children, attributes = _ref2.attributes, main = _ref2.main, mask = _ref2.mask, explicitMaskId = _ref2.maskId, transform = _ref2.transform;
          var mainWidth = main.width, mainPath = main.icon;
          var maskWidth = mask.width, maskPath = mask.icon;
          var trans = transformForSvg({
            transform,
            containerWidth: maskWidth,
            iconWidth: mainWidth
          });
          var maskRect = {
            tag: "rect",
            attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
              fill: "white"
            })
          };
          var maskInnerGroupChildrenMixin = mainPath.children ? {
            children: mainPath.children.map(fillBlack)
          } : {};
          var maskInnerGroup = {
            tag: "g",
            attributes: _objectSpread2({}, trans.inner),
            children: [fillBlack(_objectSpread2({
              tag: mainPath.tag,
              attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
            }, maskInnerGroupChildrenMixin))]
          };
          var maskOuterGroup = {
            tag: "g",
            attributes: _objectSpread2({}, trans.outer),
            children: [maskInnerGroup]
          };
          var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
          var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
          var maskTag = {
            tag: "mask",
            attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
              id: maskId,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse"
            }),
            children: [maskRect, maskOuterGroup]
          };
          var defs = {
            tag: "defs",
            children: [{
              tag: "clipPath",
              attributes: {
                id: clipId
              },
              children: deGroup(maskPath)
            }, maskTag]
          };
          children.push(defs, {
            tag: "rect",
            attributes: _objectSpread2({
              fill: "currentColor",
              "clip-path": "url(#".concat(clipId, ")"),
              mask: "url(#".concat(maskId, ")")
            }, ALL_SPACE)
          });
          return {
            children,
            attributes
          };
        };
      }
    };
    MissingIconIndicator = {
      provides: function provides6(providers2) {
        var reduceMotion = false;
        if (WINDOW.matchMedia) {
          reduceMotion = WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches;
        }
        providers2.missingIconAbstract = function() {
          var gChildren = [];
          var FILL = {
            fill: "currentColor"
          };
          var ANIMATION_BASE = {
            attributeType: "XML",
            repeatCount: "indefinite",
            dur: "2s"
          };
          gChildren.push({
            tag: "path",
            attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
              d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
            })
          });
          var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
            attributeName: "opacity"
          });
          var dot = {
            tag: "circle",
            attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
              cx: "256",
              cy: "364",
              r: "28"
            }),
            children: []
          };
          if (!reduceMotion) {
            dot.children.push({
              tag: "animate",
              attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
                values: "1;0;1;1;0;1;"
              })
            });
          }
          gChildren.push(dot);
          gChildren.push({
            tag: "path",
            attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
              opacity: "1",
              d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
            }),
            children: reduceMotion ? [] : [{
              tag: "animate",
              attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
                values: "1;0;0;0;0;1;"
              })
            }]
          });
          if (!reduceMotion) {
            gChildren.push({
              tag: "path",
              attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            });
          }
          return {
            tag: "g",
            attributes: {
              "class": "missing"
            },
            children: gChildren
          };
        };
      }
    };
    SvgSymbols = {
      hooks: function hooks7() {
        return {
          parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
            var symbolData = node.getAttribute("data-fa-symbol");
            var symbol = symbolData === null ? false : symbolData === "" ? true : symbolData;
            accumulator["symbol"] = symbol;
            return accumulator;
          }
        };
      }
    };
    plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
    registerPlugins(plugins, {
      mixoutsTo: api
    });
    noAuto$1 = api.noAuto;
    config$1 = api.config;
    library$1 = api.library;
    dom$1 = api.dom;
    parse$1 = api.parse;
    findIconDefinition$1 = api.findIconDefinition;
    toHtml$1 = api.toHtml;
    icon2 = api.icon;
    layer = api.layer;
    text = api.text;
    counter = api.counter;
  }
});

// ../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object2) {
          if (typeof object2 === "object" && object2 !== null) {
            var $$typeof = object2.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object2.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object2) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object2) || typeOf(object2) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object2) {
          return typeOf(object2) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object2) {
          return typeOf(object2) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object2) {
          return typeOf(object2) === REACT_PROVIDER_TYPE;
        }
        function isElement(object2) {
          return typeof object2 === "object" && object2 !== null && object2.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object2) {
          return typeOf(object2) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object2) {
          return typeOf(object2) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object2) {
          return typeOf(object2) === REACT_LAZY_TYPE;
        }
        function isMemo(object2) {
          return typeOf(object2) === REACT_MEMO_TYPE;
        }
        function isPortal(object2) {
          return typeOf(object2) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object2) {
          return typeOf(object2) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object2) {
          return typeOf(object2) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object2) {
          return typeOf(object2) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// ../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// ../../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "../../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text3) {
        var message = "Warning: " + text3;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error2;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error2 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error2 = ex;
            }
            if (error2 && !(error2 instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error2 + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error2 instanceof Error && !(error2.message in loggedTypeFailures)) {
              loggedTypeFailures[error2.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error2.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text3) {
        var message = "Warning: " + text3;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is2(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error2 = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error2 instanceof Error) {
              return error2;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is2(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error2 = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error2 instanceof Error) {
                return error2;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode3(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error2 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error2) {
              return error2;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error2 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error2) {
              return error2;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode3(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode3);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode3(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode3(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// ../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.2.0";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn2(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error2(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error2("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info2) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn2("%s(...) is deprecated in plain JavaScript React classes. %s", info2[0], info2[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error2("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error2("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init2 = lazyComponent._init;
                try {
                  return getComponentNameFromType(init2(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config2) {
          {
            if (hasOwnProperty.call(config2, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.ref !== void 0;
        }
        function hasValidKey(config2) {
          {
            if (hasOwnProperty.call(config2, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error2("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error2("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config2) {
          {
            if (typeof config2.ref === "string" && ReactCurrentOwner.current && config2.__self && ReactCurrentOwner.current.stateNode !== config2.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error2('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config2.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement2(type, config2, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self2 = null;
          var source = null;
          if (config2 != null) {
            if (hasValidRef(config2)) {
              ref = config2.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config2);
              }
            }
            if (hasValidKey(config2)) {
              {
                checkKeyStringCoercion(config2.key);
              }
              key = "" + config2.key;
            }
            self2 = config2.__self === void 0 ? null : config2.__self;
            source = config2.__source === void 0 ? null : config2.__source;
            for (propName in config2) {
              if (hasOwnProperty.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config2[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config2, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self2 = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config2 != null) {
            if (hasValidRef(config2)) {
              ref = config2.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config2)) {
              {
                checkKeyStringCoercion(config2.key);
              }
              key = "" + config2.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config2) {
              if (hasOwnProperty.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config2[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config2[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self2, source, owner, props);
        }
        function isValidElement(object2) {
          return typeof object2 === "object" && object2 !== null && object2.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape2(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text3) {
          return text3.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index2) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape2("" + element.key);
          }
          return index2.toString(36);
        }
        function mapIntoArray(children, array2, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array2, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array2.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array2, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn2("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array2, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray2(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error2("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error2("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn2("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error3) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error3;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error2("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error2("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType2 = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType2, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error2("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType2, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error2("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType2, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType2;
        }
        function forwardRef(render3) {
          {
            if (render3 != null && render3.$$typeof === REACT_MEMO_TYPE) {
              error2("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render3 !== "function") {
              error2("forwardRef requires a render function but was given %s.", render3 === null ? "null" : typeof render3);
            } else {
              if (render3.length !== 0 && render3.length !== 2) {
                error2("forwardRef render functions accept exactly two parameters: props and ref. %s", render3.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render3 != null) {
              if (render3.defaultProps != null || render3.propTypes != null) {
                error2("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render3
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render3.name && !render3.displayName) {
                  render3.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error2("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error2("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error2("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error2("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState2(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init2) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init2);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error2("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init2 = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init2(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error2("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error2("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info2 = getDeclarationErrorAddendum();
          if (!info2) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info2 = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info2;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error2('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error2("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error2("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error2("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error2("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info2 = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info2 += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info2 += sourceInfo;
            } else {
              info2 += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info2 = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error2("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info2);
            }
          }
          var element = createElement2.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn2("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn2("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn2("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error2("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error3) {
              popActScope(prevActScopeDepth);
              throw error3;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error3) {
                    popActScope(prevActScopeDepth);
                    reject(error3);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error2("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error2("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error3) {
                reject(error3);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error3) {
                queue = queue.slice(i + 1);
                throw error3;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray: toArray2,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState2;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var require_react = __commonJS({
  "../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// ../../node_modules/.pnpm/@fortawesome+react-fontawesome@0.2.0_@fortawesome+fontawesome-svg-core@6.5.1_react@18.2.0/node_modules/@fortawesome/react-fontawesome/index.es.js
function ownKeys2(object2, enumerableOnly) {
  var keys = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread22(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof2(obj) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof2(obj);
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toConsumableArray2(arr) {
  return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread2();
}
function _arrayWithoutHoles2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray2(arr);
}
function _iterableToArray2(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function classList(props) {
  var _classes;
  var beat = props.beat, fade = props.fade, beatFade = props.beatFade, bounce = props.bounce, shake = props.shake, flash = props.flash, spin = props.spin, spinPulse = props.spinPulse, spinReverse = props.spinReverse, pulse = props.pulse, fixedWidth = props.fixedWidth, inverse2 = props.inverse, border = props.border, listItem = props.listItem, flip = props.flip, size = props.size, rotation = props.rotation, pull = props.pull;
  var classes = (_classes = {
    "fa-beat": beat,
    "fa-fade": fade,
    "fa-beat-fade": beatFade,
    "fa-bounce": bounce,
    "fa-shake": shake,
    "fa-flash": flash,
    "fa-spin": spin,
    "fa-spin-reverse": spinReverse,
    "fa-spin-pulse": spinPulse,
    "fa-pulse": pulse,
    "fa-fw": fixedWidth,
    "fa-inverse": inverse2,
    "fa-border": border,
    "fa-li": listItem,
    "fa-flip": flip === true,
    "fa-flip-horizontal": flip === "horizontal" || flip === "both",
    "fa-flip-vertical": flip === "vertical" || flip === "both"
  }, _defineProperty2(_classes, "fa-".concat(size), typeof size !== "undefined" && size !== null), _defineProperty2(_classes, "fa-rotate-".concat(rotation), typeof rotation !== "undefined" && rotation !== null && rotation !== 0), _defineProperty2(_classes, "fa-pull-".concat(pull), typeof pull !== "undefined" && pull !== null), _defineProperty2(_classes, "fa-swap-opacity", props.swapOpacity), _classes);
  return Object.keys(classes).map(function(key) {
    return classes[key] ? key : null;
  }).filter(function(key) {
    return key;
  });
}
function _isNumerical(obj) {
  obj = obj - 0;
  return obj === obj;
}
function camelize(string2) {
  if (_isNumerical(string2)) {
    return string2;
  }
  string2 = string2.replace(/[\-_\s]+(.)?/g, function(match, chr) {
    return chr ? chr.toUpperCase() : "";
  });
  return string2.substr(0, 1).toLowerCase() + string2.substr(1);
}
function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}
function styleToObject(style) {
  return style.split(";").map(function(s) {
    return s.trim();
  }).filter(function(s) {
    return s;
  }).reduce(function(acc, pair) {
    var i = pair.indexOf(":");
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith("webkit") ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}
function convert(createElement2, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof element === "string") {
    return element;
  }
  var children = (element.children || []).map(function(child) {
    return convert(createElement2, child);
  });
  var mixins = Object.keys(element.attributes || {}).reduce(function(acc, key) {
    var val = element.attributes[key];
    switch (key) {
      case "class":
        acc.attrs["className"] = val;
        delete element.attributes["class"];
        break;
      case "style":
        acc.attrs["style"] = styleToObject(val);
        break;
      default:
        if (key.indexOf("aria-") === 0 || key.indexOf("data-") === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }
    }
    return acc;
  }, {
    attrs: {}
  });
  var _extraProps$style = extraProps.style, existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style, remaining = _objectWithoutProperties(extraProps, _excluded);
  mixins.attrs["style"] = _objectSpread22(_objectSpread22({}, mixins.attrs["style"]), existingStyle);
  return createElement2.apply(void 0, [element.tag, _objectSpread22(_objectSpread22({}, mixins.attrs), remaining)].concat(_toConsumableArray2(children)));
}
function log2() {
  if (!PRODUCTION2 && console && typeof console.error === "function") {
    var _console;
    (_console = console).error.apply(_console, arguments);
  }
}
function normalizeIconArgs(icon3) {
  if (icon3 && _typeof2(icon3) === "object" && icon3.prefix && icon3.iconName && icon3.icon) {
    return icon3;
  }
  if (parse$1.icon) {
    return parse$1.icon(icon3);
  }
  if (icon3 === null) {
    return null;
  }
  if (icon3 && _typeof2(icon3) === "object" && icon3.prefix && icon3.iconName) {
    return icon3;
  }
  if (Array.isArray(icon3) && icon3.length === 2) {
    return {
      prefix: icon3[0],
      iconName: icon3[1]
    };
  }
  if (typeof icon3 === "string") {
    return {
      prefix: "fas",
      iconName: icon3
    };
  }
}
function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty2({}, key, value) : {};
}
var import_prop_types, import_react, _excluded, PRODUCTION2, FontAwesomeIcon, convertCurry;
var init_index_es = __esm({
  "../../node_modules/.pnpm/@fortawesome+react-fontawesome@0.2.0_@fortawesome+fontawesome-svg-core@6.5.1_react@18.2.0/node_modules/@fortawesome/react-fontawesome/index.es.js"() {
    init_fontawesome_svg_core();
    import_prop_types = __toESM(require_prop_types());
    import_react = __toESM(require_react());
    _excluded = ["style"];
    PRODUCTION2 = false;
    try {
      PRODUCTION2 = false;
    } catch (e) {
    }
    FontAwesomeIcon = /* @__PURE__ */ import_react.default.forwardRef(function(props, ref) {
      var iconArgs = props.icon, maskArgs = props.mask, symbol = props.symbol, className = props.className, title = props.title, titleId = props.titleId, maskId = props.maskId;
      var iconLookup = normalizeIconArgs(iconArgs);
      var classes = objectWithKey("classes", [].concat(_toConsumableArray2(classList(props)), _toConsumableArray2(className.split(" "))));
      var transform = objectWithKey("transform", typeof props.transform === "string" ? parse$1.transform(props.transform) : props.transform);
      var mask = objectWithKey("mask", normalizeIconArgs(maskArgs));
      var renderedIcon = icon2(iconLookup, _objectSpread22(_objectSpread22(_objectSpread22(_objectSpread22({}, classes), transform), mask), {}, {
        symbol,
        title,
        titleId,
        maskId
      }));
      if (!renderedIcon) {
        log2("Could not find icon", iconLookup);
        return null;
      }
      var abstract = renderedIcon.abstract;
      var extraProps = {
        ref
      };
      Object.keys(props).forEach(function(key) {
        if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
          extraProps[key] = props[key];
        }
      });
      return convertCurry(abstract[0], extraProps);
    });
    FontAwesomeIcon.displayName = "FontAwesomeIcon";
    FontAwesomeIcon.propTypes = {
      beat: import_prop_types.default.bool,
      border: import_prop_types.default.bool,
      beatFade: import_prop_types.default.bool,
      bounce: import_prop_types.default.bool,
      className: import_prop_types.default.string,
      fade: import_prop_types.default.bool,
      flash: import_prop_types.default.bool,
      mask: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.array, import_prop_types.default.string]),
      maskId: import_prop_types.default.string,
      fixedWidth: import_prop_types.default.bool,
      inverse: import_prop_types.default.bool,
      flip: import_prop_types.default.oneOf([true, false, "horizontal", "vertical", "both"]),
      icon: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.array, import_prop_types.default.string]),
      listItem: import_prop_types.default.bool,
      pull: import_prop_types.default.oneOf(["right", "left"]),
      pulse: import_prop_types.default.bool,
      rotation: import_prop_types.default.oneOf([0, 90, 180, 270]),
      shake: import_prop_types.default.bool,
      size: import_prop_types.default.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: import_prop_types.default.bool,
      spinPulse: import_prop_types.default.bool,
      spinReverse: import_prop_types.default.bool,
      symbol: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.string]),
      title: import_prop_types.default.string,
      titleId: import_prop_types.default.string,
      transform: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.object]),
      swapOpacity: import_prop_types.default.bool
    };
    FontAwesomeIcon.defaultProps = {
      border: false,
      className: "",
      mask: null,
      maskId: null,
      fixedWidth: false,
      inverse: false,
      flip: false,
      icon: null,
      listItem: false,
      pull: null,
      pulse: false,
      rotation: null,
      size: null,
      spin: false,
      spinPulse: false,
      spinReverse: false,
      beat: false,
      fade: false,
      beatFade: false,
      bounce: false,
      shake: false,
      symbol: false,
      title: "",
      titleId: null,
      transform: null,
      swapOpacity: false
    };
    convertCurry = convert.bind(null, import_react.default.createElement);
  }
});

// dist/$server_build/chunks/pages/_threadid__D0zY-7gY.mjs
var threadid_D0zY_7gY_exports = {};
__export(threadid_D0zY_7gY_exports, {
  default: () => $$threadid,
  file: () => $$file2,
  prerender: () => prerender2,
  url: () => $$url2
});
function Search() {
  const [searchTerm, setSearchTerm] = (0, import_react2.useState)("");
  (0, import_react2.useState)([]);
  const fetchData = async () => {
    try {
      const response = await fetch(`https://img.userz.net/embed?text=${searchTerm}&token=eyJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLXVzZXItaWQiOiIxMTU0NzkxMTY3MjYxNDM2NTUzMjUiLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJwdWJsaWMiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInB1YmxpYyJdfSwiaWF0IjoxNzAzMzYwMzMwfQ.Jex6YnFP3cWuhX3MfjN_eZmOakyPMIURTlMKQitKXJQ`);
      const data2 = await response.json();
      console.log(data2);
    } catch (error2) {
      console.error(error2);
    }
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchData();
    setSearchTerm("");
    alert(`Submitting Name ${searchTerm}`);
  };
  return /* @__PURE__ */ import_react2.default.createElement(
    "div",
    {
      id: "marketing-banner",
      tabIndex: -1,
      className: "backdrop-blur-md bg-black/30 sticky z-20 flex flex-row justify-between py-4 top-0"
    },
    /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex mb-3 flex-row grow items-center" }, /* @__PURE__ */ import_react2.default.createElement(
      "img",
      {
        src: "/ailogo.png",
        className: "h-20 w-20 mt-3",
        alt: "Flowbite Logo",
        style: { objectFit: "contain" }
      }
    )),
    /* @__PURE__ */ import_react2.default.createElement("form", { className: "w-full flex-grow flex items-center", onSubmit: handleSubmit }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "relative flex-grow" }, /* @__PURE__ */ import_react2.default.createElement(
      "div",
      {
        className: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      },
      /* @__PURE__ */ import_react2.default.createElement(FontAwesomeIcon, { icon: faComment })
    ), /* @__PURE__ */ import_react2.default.createElement(
      "input",
      {
        value: searchTerm,
        onChange: handleSearch,
        type: "search",
        id: "default-search",
        className: "block p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-900 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full",
        placeholder: "Ask me anything...",
        required: true
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        type: "submit",
        className: "text-white absolute end-2.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      },
      /* @__PURE__ */ import_react2.default.createElement(FontAwesomeIcon, { icon: faPaperPlane })
    ))),
    /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center flex-shrink-0" }, /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        "data-dismiss-target": "#marketing-banner",
        type: "button",
        className: "flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-0 dark:hover:bg-gray-600 dark:hover:text-white"
      },
      /* @__PURE__ */ import_react2.default.createElement(
        "svg",
        {
          className: "w-3 h-3",
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 14 14"
        },
        /* @__PURE__ */ import_react2.default.createElement(
          "path",
          {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          }
        )
      ),
      /* @__PURE__ */ import_react2.default.createElement("span", { className: "sr-only" }, "Close")
    ))
  );
}
var import_react2, $$Astro3, prerender2, $$threadid, $$file2, $$url2;
var init_threadid_D0zY_7gY = __esm({
  "dist/$server_build/chunks/pages/_threadid__D0zY-7gY.mjs"() {
    "use strict";
    init_astro_sKHNJ3WQ();
    init_colors();
    init_esm();
    init_tag_K0V7HO7C();
    init_free_solid_svg_icons();
    init_index_es();
    import_react2 = __toESM(require_react(), 1);
    $$Astro3 = createAstro();
    prerender2 = false;
    $$threadid = createComponent(async ($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro3, $$props, $$slots);
      Astro2.self = $$threadid;
      const { threadid } = Astro2.params;
      async function extractUniqueHashtags(inputString) {
        const hashtagRegex = /#(\w+)/g;
        const hashtags = inputString.match(hashtagRegex);
        if (!hashtags)
          return [];
        const uniqueHashtags = Array.from(
          new Set(hashtags.map((tag) => ({ hashtag: tag.slice(1), count: 10 })))
        );
        return uniqueHashtags;
      }
      function removeHashtags(inputString) {
        const hashtagRegex = /#\w+/g;
        const stringWithoutHashtags = inputString.replaceAll("\\n", "\n").replace(hashtagRegex, "");
        return stringWithoutHashtags;
      }
      const respOne = await gquery(
        `query MyQuery($_eq: String ) {
    similar: quq(args: {genid: "${threadid}"}) {
    genid
    text
  }
  single: q_q(limit: 1, where: {genid: {_eq: $_eq}}) {
    genid
    text
    image
  }
  answer: q_a(limit: 1, where: {genid: {_eq: $_eq} }) {
    genid
    text
  }
}
`,
        { _eq: threadid }
      );
      const _eq = JSON.stringify(
        respOne.similar.map((x) => x.genid)
      );
      const respTwo = await gquery(
        `query MyQueryx {
  q_q(where: {genid: {_in: ${_eq}}}) {
    genid
    text
    image
  }

}`,
        {}
      );
      const image = respOne.single[0]?.image;
      const question = respOne.single[0]?.text;
      if (!question) {
        return Astro2.redirect("/404");
      }
      const answer = respOne.answer[0].text;
      const formatter = (text3) => {
        let resp = removeHashtags(text3).replaceAll("@username,", "").replaceAll("@username", "").split("\n");
        return resp;
      };
      const questions = respTwo.q_q;
      const answers = respOne.similar;
      const thread = questions.map((x, i) => ({
        q: { text: x.text, genid: x.genid, image: x.image },
        a: answers[i]?.text || ""
      })).filter((x) => x.q.genid !== threadid);
      const flat = await extractUniqueHashtags(
        thread.flatMap((x) => x.a).join(" ")
      );
      let tagzfiltered;
      if (flat[0]) {
        const qtags = await gquery(
          `query MyQuery($_in: [String!] = "") {
     q_qtags(where: {hashtag: {_in: $_in}}) {
       count
       hashtag
     }
   }
 `,
          { _in: flat.map((x) => x.hashtag) }
        );
        tagzfiltered = qtags.q_qtags.filter((x) => x.count >= 10).sort((a, z2) => {
          return z2.count - a.count;
        }).slice(0, 30);
      } else {
        tagzfiltered = [];
      }
      const split = threadid.split("");
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": question, "description": "", "logo": "inner", "tags": tagzfiltered, "image": image }, { "default": ($$result2) => renderTemplate`${image && image !== "none" ? renderTemplate`${maybeRenderHead()}<div class="relative"> <img${addAttribute(`https://cdn2.userz.net/static/out/${split[0]}/${split[1]}/${split[2]}/${threadid}.jpg`, "src")} width="1250" height="500" class="object-cover w-full h-64 lg:h-96" style="aspect-ratio: 1250 / 500; object-fit: cover;"${addAttribute(question, "alt")}> <div class="absolute inset-0 flex items-center justify-center p-4 md:p-6 lg:p-8"> <h1 class="text-3xl   text-white text-center bg-black bg-opacity-80 rounded-lg p-2"> ${question} </h1> </div> </div>` : renderTemplate`<h1 class="text-white font-medium text-3xl text-center">${question}</h1>`}<article class="prose prose-invert mx-auto"> <div class="text-white text-xl font-light"> ${formatter(answer).map((x) => renderTemplate`<p>${x}</p>`)} </div> </article> ${renderComponent($$result2, "Search", Search, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rudix/Desktop/monext/apps/userz/src/components/Search", "client:component-export": "default" })} ${questions[0] && renderTemplate`<h2 class="text-gray-100 font-bold">Extended FAQ</h2>`}${thread.map((q) => {
        const spl = q.q.genid.split("");
        const img = q.q.image && renderTemplate`<img${addAttribute(`https://cdn2.userz.net/static/out/${spl[0]}/${spl[1]}/${spl[2]}/${q.q.genid}.jpg`, "src")} width="100" class="rounded-md mr-2 -mb-2"${addAttribute(q.q.text, "alt")}>`;
        return renderTemplate`<article class="prose prose-invert mx-auto"> <a class="flex items-center"${addAttribute("/" + q.q.genid, "href")}> ${img} <h2 class="pl-2 text-gray-200 underline"> ${q.q.text.replace("?", "")} </h2> </a> ${formatter(q.a).map((x) => renderTemplate`<p>${x}</p>`)} </article>`;
      })}` })}`;
    }, "/Users/rudix/Desktop/monext/apps/userz/src/pages/[threadid].astro", void 0);
    $$file2 = "/Users/rudix/Desktop/monext/apps/userz/src/pages/[threadid].astro";
    $$url2 = "/[threadid]";
  }
});

// dist/$server_build/chunks/_threadid__uDyofaKZ.mjs
var threadid_uDyofaKZ_exports = {};
__export(threadid_uDyofaKZ_exports, {
  page: () => page3,
  renderers: () => renderers
});
var page3;
var init_threadid_uDyofaKZ = __esm({
  "dist/$server_build/chunks/_threadid__uDyofaKZ.mjs"() {
    "use strict";
    init_renderers();
    page3 = () => Promise.resolve().then(() => (init_threadid_D0zY_7gY(), threadid_D0zY_7gY_exports));
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSlice.js
var require_baseSlice = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSlice.js"(exports, module) {
    function baseSlice(array2, start, end3) {
      var index2 = -1, length = array2.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end3 = end3 > length ? length : end3;
      if (end3 < 0) {
        end3 += length;
      }
      length = start > end3 ? 0 : end3 - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index2 < length) {
        result[index2] = array2[index2 + start];
      }
      return result;
    }
    module.exports = baseSlice;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js
var require_eq = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js"(exports, module) {
    function eq2(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq2;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js
var require_root = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIterateeCall.js"(exports, module) {
    var eq2 = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    function isIterateeCall(value, index2, object2) {
      if (!isObject(object2)) {
        return false;
      }
      var type = typeof index2;
      if (type == "number" ? isArrayLike(object2) && isIndex(index2, object2.length) : type == "string" && index2 in object2) {
        return eq2(object2[index2], value);
      }
      return false;
    }
    module.exports = isIterateeCall;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string2) {
      var index2 = string2.length;
      while (index2-- && reWhitespace.test(string2.charAt(index2))) {
      }
      return index2;
    }
    module.exports = trimmedEndIndex;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string2) {
      return string2 ? string2.slice(0, trimmedEndIndex(string2) + 1).replace(reTrimStart, "") : string2;
    }
    module.exports = baseTrim;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toFinite.js
var require_toFinite = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toFinite.js"(exports, module) {
    var toNumber = require_toNumber();
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    module.exports = toFinite;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toInteger.js
var require_toInteger = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toInteger.js"(exports, module) {
    var toFinite = require_toFinite();
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    module.exports = toInteger;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/chunk.js
var require_chunk = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/chunk.js"(exports, module) {
    var baseSlice = require_baseSlice();
    var isIterateeCall = require_isIterateeCall();
    var toInteger = require_toInteger();
    var nativeCeil = Math.ceil;
    var nativeMax = Math.max;
    function chunk2(array2, size, guard) {
      if (guard ? isIterateeCall(array2, size, guard) : size === void 0) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array2 == null ? 0 : array2.length;
      if (!length || size < 1) {
        return [];
      }
      var index2 = 0, resIndex = 0, result = Array(nativeCeil(length / size));
      while (index2 < length) {
        result[resIndex++] = baseSlice(array2, index2, index2 += size);
      }
      return result;
    }
    module.exports = chunk2;
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/entity.js
function is(value, type) {
  if (!value || typeof value !== "object") {
    return false;
  }
  if (value instanceof type) {
    return true;
  }
  if (!Object.prototype.hasOwnProperty.call(type, entityKind)) {
    throw new Error(
      `Class "${type.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`
    );
  }
  let cls = value.constructor;
  if (cls) {
    while (cls) {
      if (entityKind in cls && cls[entityKind] === type[entityKind]) {
        return true;
      }
      cls = Object.getPrototypeOf(cls);
    }
  }
  return false;
}
var entityKind, hasOwnEntityKind;
var init_entity = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/entity.js"() {
    entityKind = Symbol.for("drizzle:entityKind");
    hasOwnEntityKind = Symbol.for("drizzle:hasOwnEntityKind");
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/column.js
var Column;
var init_column = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/column.js"() {
    init_entity();
    Column = class {
      constructor(table, config2) {
        this.table = table;
        this.config = config2;
        this.name = config2.name;
        this.notNull = config2.notNull;
        this.default = config2.default;
        this.defaultFn = config2.defaultFn;
        this.hasDefault = config2.hasDefault;
        this.primary = config2.primaryKey;
        this.isUnique = config2.isUnique;
        this.uniqueName = config2.uniqueName;
        this.uniqueType = config2.uniqueType;
        this.dataType = config2.dataType;
        this.columnType = config2.columnType;
      }
      static [entityKind] = "Column";
      name;
      primary;
      notNull;
      default;
      defaultFn;
      hasDefault;
      isUnique;
      uniqueName;
      uniqueType;
      dataType;
      columnType;
      enumValues = void 0;
      config;
      mapFromDriverValue(value) {
        return value;
      }
      mapToDriverValue(value) {
        return value;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/subquery.js
var SubqueryConfig, Subquery, WithSubquery;
var init_subquery = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/subquery.js"() {
    init_entity();
    SubqueryConfig = Symbol.for("drizzle:SubqueryConfig");
    Subquery = class {
      static [entityKind] = "Subquery";
      /** @internal */
      [SubqueryConfig];
      constructor(sql2, selection, alias, isWith = false) {
        this[SubqueryConfig] = {
          sql: sql2,
          selection,
          alias,
          isWith
        };
      }
      // getSQL(): SQL<unknown> {
      // 	return new SQL([this]);
      // }
    };
    WithSubquery = class extends Subquery {
      static [entityKind] = "WithSubquery";
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/tracing-utils.js
function iife(fn, ...args) {
  return fn(...args);
}
var init_tracing_utils = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/tracing-utils.js"() {
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/version.js
var version;
var init_version = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/version.js"() {
    version = "0.29.5";
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/tracing.js
var otel, rawTracer, tracer;
var init_tracing = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/tracing.js"() {
    init_tracing_utils();
    init_version();
    tracer = {
      startActiveSpan(name, fn) {
        if (!otel) {
          return fn();
        }
        if (!rawTracer) {
          rawTracer = otel.trace.getTracer("drizzle-orm", version);
        }
        return iife(
          (otel2, rawTracer2) => rawTracer2.startActiveSpan(
            name,
            (span) => {
              try {
                return fn(span);
              } catch (e) {
                span.setStatus({
                  code: otel2.SpanStatusCode.ERROR,
                  message: e instanceof Error ? e.message : "Unknown error"
                  // eslint-disable-line no-instanceof/no-instanceof
                });
                throw e;
              } finally {
                span.end();
              }
            }
          ),
          otel,
          rawTracer
        );
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/view-common.js
var ViewBaseConfig;
var init_view_common = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/view-common.js"() {
    ViewBaseConfig = Symbol.for("drizzle:ViewBaseConfig");
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/table.js
function isTable(table) {
  return typeof table === "object" && table !== null && IsDrizzleTable in table;
}
function getTableName(table) {
  return table[TableName];
}
var TableName, Schema, Columns, OriginalName, BaseName, IsAlias, ExtraConfigBuilder, IsDrizzleTable, Table;
var init_table = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/table.js"() {
    init_entity();
    TableName = Symbol.for("drizzle:Name");
    Schema = Symbol.for("drizzle:Schema");
    Columns = Symbol.for("drizzle:Columns");
    OriginalName = Symbol.for("drizzle:OriginalName");
    BaseName = Symbol.for("drizzle:BaseName");
    IsAlias = Symbol.for("drizzle:IsAlias");
    ExtraConfigBuilder = Symbol.for("drizzle:ExtraConfigBuilder");
    IsDrizzleTable = Symbol.for("drizzle:IsDrizzleTable");
    Table = class {
      static [entityKind] = "Table";
      /** @internal */
      static Symbol = {
        Name: TableName,
        Schema,
        OriginalName,
        Columns,
        BaseName,
        IsAlias,
        ExtraConfigBuilder
      };
      /**
       * @internal
       * Can be changed if the table is aliased.
       */
      [TableName];
      /**
       * @internal
       * Used to store the original name of the table, before any aliasing.
       */
      [OriginalName];
      /** @internal */
      [Schema];
      /** @internal */
      [Columns];
      /**
       *  @internal
       * Used to store the table name before the transformation via the `tableCreator` functions.
       */
      [BaseName];
      /** @internal */
      [IsAlias] = false;
      /** @internal */
      [ExtraConfigBuilder] = void 0;
      [IsDrizzleTable] = true;
      constructor(name, schema, baseName) {
        this[TableName] = this[OriginalName] = name;
        this[Schema] = schema;
        this[BaseName] = baseName;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sql/sql.js
function isSQLWrapper(value) {
  return typeof value === "object" && value !== null && "getSQL" in value && typeof value.getSQL === "function";
}
function mergeQueries(queries) {
  const result = { sql: "", params: [] };
  for (const query of queries) {
    result.sql += query.sql;
    result.params.push(...query.params);
    if (query.typings?.length) {
      if (!result.typings) {
        result.typings = [];
      }
      result.typings.push(...query.typings);
    }
  }
  return result;
}
function isDriverValueEncoder(value) {
  return typeof value === "object" && value !== null && "mapToDriverValue" in value && typeof value.mapToDriverValue === "function";
}
function sql(strings, ...params) {
  const queryChunks = [];
  if (params.length > 0 || strings.length > 0 && strings[0] !== "") {
    queryChunks.push(new StringChunk(strings[0]));
  }
  for (const [paramIndex, param2] of params.entries()) {
    queryChunks.push(param2, new StringChunk(strings[paramIndex + 1]));
  }
  return new SQL(queryChunks);
}
function fillPlaceholders(params, values) {
  return params.map((p2) => {
    if (is(p2, Placeholder)) {
      if (!(p2.name in values)) {
        throw new Error(`No value for placeholder "${p2.name}" was provided`);
      }
      return values[p2.name];
    }
    return p2;
  });
}
var FakePrimitiveParam, StringChunk, SQL, Name, noopDecoder, noopEncoder, noopMapper, Param, Placeholder, View;
var init_sql = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sql/sql.js"() {
    init_entity();
    init_subquery();
    init_tracing();
    init_view_common();
    init_column();
    init_table();
    FakePrimitiveParam = class {
      static [entityKind] = "FakePrimitiveParam";
    };
    StringChunk = class {
      static [entityKind] = "StringChunk";
      value;
      constructor(value) {
        this.value = Array.isArray(value) ? value : [value];
      }
      getSQL() {
        return new SQL([this]);
      }
    };
    SQL = class _SQL {
      constructor(queryChunks) {
        this.queryChunks = queryChunks;
      }
      static [entityKind] = "SQL";
      /** @internal */
      decoder = noopDecoder;
      shouldInlineParams = false;
      append(query) {
        this.queryChunks.push(...query.queryChunks);
        return this;
      }
      toQuery(config2) {
        return tracer.startActiveSpan("drizzle.buildSQL", (span) => {
          const query = this.buildQueryFromSourceParams(this.queryChunks, config2);
          span?.setAttributes({
            "drizzle.query.text": query.sql,
            "drizzle.query.params": JSON.stringify(query.params)
          });
          return query;
        });
      }
      buildQueryFromSourceParams(chunks, _config2) {
        const config2 = Object.assign({}, _config2, {
          inlineParams: _config2.inlineParams || this.shouldInlineParams,
          paramStartIndex: _config2.paramStartIndex || { value: 0 }
        });
        const {
          escapeName,
          escapeParam,
          prepareTyping,
          inlineParams,
          paramStartIndex
        } = config2;
        return mergeQueries(chunks.map((chunk2) => {
          if (is(chunk2, StringChunk)) {
            return { sql: chunk2.value.join(""), params: [] };
          }
          if (is(chunk2, Name)) {
            return { sql: escapeName(chunk2.value), params: [] };
          }
          if (chunk2 === void 0) {
            return { sql: "", params: [] };
          }
          if (Array.isArray(chunk2)) {
            const result = [new StringChunk("(")];
            for (const [i, p2] of chunk2.entries()) {
              result.push(p2);
              if (i < chunk2.length - 1) {
                result.push(new StringChunk(", "));
              }
            }
            result.push(new StringChunk(")"));
            return this.buildQueryFromSourceParams(result, config2);
          }
          if (is(chunk2, _SQL)) {
            return this.buildQueryFromSourceParams(chunk2.queryChunks, {
              ...config2,
              inlineParams: inlineParams || chunk2.shouldInlineParams
            });
          }
          if (is(chunk2, Table)) {
            const schemaName = chunk2[Table.Symbol.Schema];
            const tableName = chunk2[Table.Symbol.Name];
            return {
              sql: schemaName === void 0 ? escapeName(tableName) : escapeName(schemaName) + "." + escapeName(tableName),
              params: []
            };
          }
          if (is(chunk2, Column)) {
            return { sql: escapeName(chunk2.table[Table.Symbol.Name]) + "." + escapeName(chunk2.name), params: [] };
          }
          if (is(chunk2, View)) {
            const schemaName = chunk2[ViewBaseConfig].schema;
            const viewName = chunk2[ViewBaseConfig].name;
            return {
              sql: schemaName === void 0 ? escapeName(viewName) : escapeName(schemaName) + "." + escapeName(viewName),
              params: []
            };
          }
          if (is(chunk2, Param)) {
            const mappedValue = chunk2.value === null ? null : chunk2.encoder.mapToDriverValue(chunk2.value);
            if (is(mappedValue, _SQL)) {
              return this.buildQueryFromSourceParams([mappedValue], config2);
            }
            if (inlineParams) {
              return { sql: this.mapInlineParam(mappedValue, config2), params: [] };
            }
            let typings;
            if (prepareTyping !== void 0) {
              typings = [prepareTyping(chunk2.encoder)];
            }
            return { sql: escapeParam(paramStartIndex.value++, mappedValue), params: [mappedValue], typings };
          }
          if (is(chunk2, Placeholder)) {
            return { sql: escapeParam(paramStartIndex.value++, chunk2), params: [chunk2] };
          }
          if (is(chunk2, _SQL.Aliased) && chunk2.fieldAlias !== void 0) {
            return { sql: escapeName(chunk2.fieldAlias), params: [] };
          }
          if (is(chunk2, Subquery)) {
            if (chunk2[SubqueryConfig].isWith) {
              return { sql: escapeName(chunk2[SubqueryConfig].alias), params: [] };
            }
            return this.buildQueryFromSourceParams([
              new StringChunk("("),
              chunk2[SubqueryConfig].sql,
              new StringChunk(") "),
              new Name(chunk2[SubqueryConfig].alias)
            ], config2);
          }
          if (isSQLWrapper(chunk2)) {
            return this.buildQueryFromSourceParams([
              new StringChunk("("),
              chunk2.getSQL(),
              new StringChunk(")")
            ], config2);
          }
          if (inlineParams) {
            return { sql: this.mapInlineParam(chunk2, config2), params: [] };
          }
          return { sql: escapeParam(paramStartIndex.value++, chunk2), params: [chunk2] };
        }));
      }
      mapInlineParam(chunk2, { escapeString: escapeString2 }) {
        if (chunk2 === null) {
          return "null";
        }
        if (typeof chunk2 === "number" || typeof chunk2 === "boolean") {
          return chunk2.toString();
        }
        if (typeof chunk2 === "string") {
          return escapeString2(chunk2);
        }
        if (typeof chunk2 === "object") {
          const mappedValueAsString = chunk2.toString();
          if (mappedValueAsString === "[object Object]") {
            return escapeString2(JSON.stringify(chunk2));
          }
          return escapeString2(mappedValueAsString);
        }
        throw new Error("Unexpected param value: " + chunk2);
      }
      getSQL() {
        return this;
      }
      as(alias) {
        if (alias === void 0) {
          return this;
        }
        return new _SQL.Aliased(this, alias);
      }
      mapWith(decoder3) {
        this.decoder = typeof decoder3 === "function" ? { mapFromDriverValue: decoder3 } : decoder3;
        return this;
      }
      inlineParams() {
        this.shouldInlineParams = true;
        return this;
      }
    };
    Name = class {
      constructor(value) {
        this.value = value;
      }
      static [entityKind] = "Name";
      brand;
      getSQL() {
        return new SQL([this]);
      }
    };
    noopDecoder = {
      mapFromDriverValue: (value) => value
    };
    noopEncoder = {
      mapToDriverValue: (value) => value
    };
    noopMapper = {
      ...noopDecoder,
      ...noopEncoder
    };
    Param = class {
      /**
       * @param value - Parameter value
       * @param encoder - Encoder to convert the value to a driver parameter
       */
      constructor(value, encoder2 = noopEncoder) {
        this.value = value;
        this.encoder = encoder2;
      }
      static [entityKind] = "Param";
      brand;
      getSQL() {
        return new SQL([this]);
      }
    };
    ((sql2) => {
      function empty() {
        return new SQL([]);
      }
      sql2.empty = empty;
      function fromList(list) {
        return new SQL(list);
      }
      sql2.fromList = fromList;
      function raw(str) {
        return new SQL([new StringChunk(str)]);
      }
      sql2.raw = raw;
      function join(chunks, separator) {
        const result = [];
        for (const [i, chunk2] of chunks.entries()) {
          if (i > 0 && separator !== void 0) {
            result.push(separator);
          }
          result.push(chunk2);
        }
        return new SQL(result);
      }
      sql2.join = join;
      function identifier(value) {
        return new Name(value);
      }
      sql2.identifier = identifier;
      function placeholder2(name2) {
        return new Placeholder(name2);
      }
      sql2.placeholder = placeholder2;
      function param2(value, encoder2) {
        return new Param(value, encoder2);
      }
      sql2.param = param2;
    })(sql || (sql = {}));
    ((SQL2) => {
      class Aliased {
        constructor(sql2, fieldAlias) {
          this.sql = sql2;
          this.fieldAlias = fieldAlias;
        }
        static [entityKind] = "SQL.Aliased";
        /** @internal */
        isSelectionField = false;
        getSQL() {
          return this.sql;
        }
        /** @internal */
        clone() {
          return new Aliased(this.sql, this.fieldAlias);
        }
      }
      SQL2.Aliased = Aliased;
    })(SQL || (SQL = {}));
    Placeholder = class {
      constructor(name2) {
        this.name = name2;
      }
      static [entityKind] = "Placeholder";
      getSQL() {
        return new SQL([this]);
      }
    };
    View = class {
      static [entityKind] = "View";
      /** @internal */
      [ViewBaseConfig];
      constructor({ name: name2, schema, selectedFields, query }) {
        this[ViewBaseConfig] = {
          name: name2,
          originalName: name2,
          schema,
          selectedFields,
          query,
          isExisting: !query,
          isAlias: false
        };
      }
      getSQL() {
        return new SQL([this]);
      }
    };
    Column.prototype.getSQL = function() {
      return new SQL([this]);
    };
    Table.prototype.getSQL = function() {
      return new SQL([this]);
    };
    Subquery.prototype.getSQL = function() {
      return new SQL([this]);
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/alias.js
function aliasedTable(table, tableAlias) {
  return new Proxy(table, new TableAliasProxyHandler(tableAlias, false));
}
function aliasedTableColumn(column, tableAlias) {
  return new Proxy(
    column,
    new ColumnAliasProxyHandler(new Proxy(column.table, new TableAliasProxyHandler(tableAlias, false)))
  );
}
function mapColumnsInAliasedSQLToAlias(query, alias) {
  return new SQL.Aliased(mapColumnsInSQLToAlias(query.sql, alias), query.fieldAlias);
}
function mapColumnsInSQLToAlias(query, alias) {
  return sql.join(query.queryChunks.map((c) => {
    if (is(c, Column)) {
      return aliasedTableColumn(c, alias);
    }
    if (is(c, SQL)) {
      return mapColumnsInSQLToAlias(c, alias);
    }
    if (is(c, SQL.Aliased)) {
      return mapColumnsInAliasedSQLToAlias(c, alias);
    }
    return c;
  }));
}
var ColumnAliasProxyHandler, TableAliasProxyHandler, RelationTableAliasProxyHandler;
var init_alias = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/alias.js"() {
    init_column();
    init_entity();
    init_sql();
    init_table();
    init_view_common();
    ColumnAliasProxyHandler = class {
      constructor(table) {
        this.table = table;
      }
      static [entityKind] = "ColumnAliasProxyHandler";
      get(columnObj, prop) {
        if (prop === "table") {
          return this.table;
        }
        return columnObj[prop];
      }
    };
    TableAliasProxyHandler = class {
      constructor(alias, replaceOriginalName) {
        this.alias = alias;
        this.replaceOriginalName = replaceOriginalName;
      }
      static [entityKind] = "TableAliasProxyHandler";
      get(target, prop) {
        if (prop === Table.Symbol.IsAlias) {
          return true;
        }
        if (prop === Table.Symbol.Name) {
          return this.alias;
        }
        if (this.replaceOriginalName && prop === Table.Symbol.OriginalName) {
          return this.alias;
        }
        if (prop === ViewBaseConfig) {
          return {
            ...target[ViewBaseConfig],
            name: this.alias,
            isAlias: true
          };
        }
        if (prop === Table.Symbol.Columns) {
          const columns = target[Table.Symbol.Columns];
          if (!columns) {
            return columns;
          }
          const proxiedColumns = {};
          Object.keys(columns).map((key) => {
            proxiedColumns[key] = new Proxy(
              columns[key],
              new ColumnAliasProxyHandler(new Proxy(target, this))
            );
          });
          return proxiedColumns;
        }
        const value = target[prop];
        if (is(value, Column)) {
          return new Proxy(value, new ColumnAliasProxyHandler(new Proxy(target, this)));
        }
        return value;
      }
    };
    RelationTableAliasProxyHandler = class {
      constructor(alias) {
        this.alias = alias;
      }
      static [entityKind] = "RelationTableAliasProxyHandler";
      get(target, prop) {
        if (prop === "sourceTable") {
          return aliasedTable(target.sourceTable, this.alias);
        }
        return target[prop];
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/column-builder.js
var ColumnBuilder;
var init_column_builder = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/column-builder.js"() {
    init_entity();
    ColumnBuilder = class {
      static [entityKind] = "ColumnBuilder";
      config;
      constructor(name, dataType, columnType) {
        this.config = {
          name,
          notNull: false,
          default: void 0,
          hasDefault: false,
          primaryKey: false,
          isUnique: false,
          uniqueName: void 0,
          uniqueType: void 0,
          dataType,
          columnType
        };
      }
      /**
       * Changes the data type of the column. Commonly used with `json` columns. Also, useful for branded types.
       *
       * @example
       * ```ts
       * const users = pgTable('users', {
       * 	id: integer('id').$type<UserId>().primaryKey(),
       * 	details: json('details').$type<UserDetails>().notNull(),
       * });
       * ```
       */
      $type() {
        return this;
      }
      /**
       * Adds a `not null` clause to the column definition.
       *
       * Affects the `select` model of the table - columns *without* `not null` will be nullable on select.
       */
      notNull() {
        this.config.notNull = true;
        return this;
      }
      /**
       * Adds a `default <value>` clause to the column definition.
       *
       * Affects the `insert` model of the table - columns *with* `default` are optional on insert.
       *
       * If you need to set a dynamic default value, use {@link $defaultFn} instead.
       */
      default(value) {
        this.config.default = value;
        this.config.hasDefault = true;
        return this;
      }
      /**
       * Adds a dynamic default value to the column.
       * The function will be called when the row is inserted, and the returned value will be used as the column value.
       *
       * **Note:** This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`.
       */
      $defaultFn(fn) {
        this.config.defaultFn = fn;
        this.config.hasDefault = true;
        return this;
      }
      /**
       * Alias for {@link $defaultFn}.
       */
      $default = this.$defaultFn;
      /**
       * Adds a `primary key` clause to the column definition. This implicitly makes the column `not null`.
       *
       * In SQLite, `integer primary key` implicitly makes the column auto-incrementing.
       */
      primaryKey() {
        this.config.primaryKey = true;
        this.config.notNull = true;
        return this;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/errors.js
var DrizzleError, TransactionRollbackError;
var init_errors = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/errors.js"() {
    init_entity();
    DrizzleError = class extends Error {
      static [entityKind] = "DrizzleError";
      constructor({ message, cause }) {
        super(message);
        this.name = "DrizzleError";
        this.cause = cause;
      }
    };
    TransactionRollbackError = class extends DrizzleError {
      static [entityKind] = "TransactionRollbackError";
      constructor() {
        super({ message: "Rollback" });
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sql/expressions/conditions.js
function bindIfParam(value, column) {
  if (isDriverValueEncoder(column) && !isSQLWrapper(value) && !is(value, Param) && !is(value, Placeholder) && !is(value, Column) && !is(value, Table) && !is(value, View)) {
    return new Param(value, column);
  }
  return value;
}
function and(...unfilteredConditions) {
  const conditions = unfilteredConditions.filter(
    (c) => c !== void 0
  );
  if (conditions.length === 0) {
    return void 0;
  }
  if (conditions.length === 1) {
    return new SQL(conditions);
  }
  return new SQL([
    new StringChunk("("),
    sql.join(conditions, new StringChunk(" and ")),
    new StringChunk(")")
  ]);
}
function or(...unfilteredConditions) {
  const conditions = unfilteredConditions.filter(
    (c) => c !== void 0
  );
  if (conditions.length === 0) {
    return void 0;
  }
  if (conditions.length === 1) {
    return new SQL(conditions);
  }
  return new SQL([
    new StringChunk("("),
    sql.join(conditions, new StringChunk(" or ")),
    new StringChunk(")")
  ]);
}
function not(condition) {
  return sql`not ${condition}`;
}
function inArray(column, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      throw new Error("inArray requires at least one value");
    }
    return sql`${column} in ${values.map((v) => bindIfParam(v, column))}`;
  }
  return sql`${column} in ${bindIfParam(values, column)}`;
}
function notInArray(column, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      throw new Error("notInArray requires at least one value");
    }
    return sql`${column} not in ${values.map((v) => bindIfParam(v, column))}`;
  }
  return sql`${column} not in ${bindIfParam(values, column)}`;
}
function isNull(value) {
  return sql`${value} is null`;
}
function isNotNull(value) {
  return sql`${value} is not null`;
}
function exists(subquery) {
  return sql`exists ${subquery}`;
}
function notExists(subquery) {
  return sql`not exists ${subquery}`;
}
function between(column, min, max) {
  return sql`${column} between ${bindIfParam(min, column)} and ${bindIfParam(
    max,
    column
  )}`;
}
function notBetween(column, min, max) {
  return sql`${column} not between ${bindIfParam(
    min,
    column
  )} and ${bindIfParam(max, column)}`;
}
function like(column, value) {
  return sql`${column} like ${value}`;
}
function notLike(column, value) {
  return sql`${column} not like ${value}`;
}
function ilike(column, value) {
  return sql`${column} ilike ${value}`;
}
function notIlike(column, value) {
  return sql`${column} not ilike ${value}`;
}
var eq, ne, gt, gte, lt, lte;
var init_conditions = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sql/expressions/conditions.js"() {
    init_column();
    init_entity();
    init_table();
    init_sql();
    eq = (left, right) => {
      return sql`${left} = ${bindIfParam(right, left)}`;
    };
    ne = (left, right) => {
      return sql`${left} <> ${bindIfParam(right, left)}`;
    };
    gt = (left, right) => {
      return sql`${left} > ${bindIfParam(right, left)}`;
    };
    gte = (left, right) => {
      return sql`${left} >= ${bindIfParam(right, left)}`;
    };
    lt = (left, right) => {
      return sql`${left} < ${bindIfParam(right, left)}`;
    };
    lte = (left, right) => {
      return sql`${left} <= ${bindIfParam(right, left)}`;
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sql/expressions/select.js
function asc(column) {
  return sql`${column} asc`;
}
function desc(column) {
  return sql`${column} desc`;
}
var init_select = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sql/expressions/select.js"() {
    init_sql();
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sql/expressions/index.js
var init_expressions = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sql/expressions/index.js"() {
    init_conditions();
    init_select();
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/expressions.js
var init_expressions2 = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/expressions.js"() {
    init_expressions();
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/logger.js
var ConsoleLogWriter, DefaultLogger, NoopLogger;
var init_logger = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/logger.js"() {
    init_entity();
    ConsoleLogWriter = class {
      static [entityKind] = "ConsoleLogWriter";
      write(message) {
        console.log(message);
      }
    };
    DefaultLogger = class {
      static [entityKind] = "DefaultLogger";
      writer;
      constructor(config2) {
        this.writer = config2?.writer ?? new ConsoleLogWriter();
      }
      logQuery(query, params) {
        const stringifiedParams = params.map((p2) => {
          try {
            return JSON.stringify(p2);
          } catch {
            return String(p2);
          }
        });
        const paramsStr = stringifiedParams.length ? ` -- params: [${stringifiedParams.join(", ")}]` : "";
        this.writer.write(`Query: ${query}${paramsStr}`);
      }
    };
    NoopLogger = class {
      static [entityKind] = "NoopLogger";
      logQuery() {
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/operations.js
var init_operations = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/operations.js"() {
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/query-promise.js
var QueryPromise;
var init_query_promise = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/query-promise.js"() {
    init_entity();
    QueryPromise = class {
      static [entityKind] = "QueryPromise";
      [Symbol.toStringTag] = "QueryPromise";
      catch(onRejected) {
        return this.then(void 0, onRejected);
      }
      finally(onFinally) {
        return this.then(
          (value) => {
            onFinally?.();
            return value;
          },
          (reason) => {
            onFinally?.();
            throw reason;
          }
        );
      }
      then(onFulfilled, onRejected) {
        return this.execute().then(onFulfilled, onRejected);
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/pg-core/table.js
var InlineForeignKeys, PgTable;
var init_table2 = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/pg-core/table.js"() {
    init_entity();
    init_table();
    InlineForeignKeys = Symbol.for("drizzle:PgInlineForeignKeys");
    PgTable = class extends Table {
      static [entityKind] = "PgTable";
      /** @internal */
      static Symbol = Object.assign({}, Table.Symbol, {
        InlineForeignKeys
      });
      /**@internal */
      [InlineForeignKeys] = [];
      /** @internal */
      [Table.Symbol.ExtraConfigBuilder] = void 0;
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/pg-core/primary-keys.js
var PrimaryKeyBuilder, PrimaryKey;
var init_primary_keys = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/pg-core/primary-keys.js"() {
    init_entity();
    init_table2();
    PrimaryKeyBuilder = class {
      static [entityKind] = "PgPrimaryKeyBuilder";
      /** @internal */
      columns;
      /** @internal */
      name;
      constructor(columns, name) {
        this.columns = columns;
        this.name = name;
      }
      /** @internal */
      build(table) {
        return new PrimaryKey(table, this.columns, this.name);
      }
    };
    PrimaryKey = class {
      constructor(table, columns, name) {
        this.table = table;
        this.columns = columns;
        this.name = name;
      }
      static [entityKind] = "PgPrimaryKey";
      columns;
      name;
      getName() {
        return this.name ?? `${this.table[PgTable.Symbol.Name]}_${this.columns.map((column) => column.name).join("_")}_pk`;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/relations.js
function getOperators() {
  return {
    and,
    between,
    eq,
    exists,
    gt,
    gte,
    ilike,
    inArray,
    isNull,
    isNotNull,
    like,
    lt,
    lte,
    ne,
    not,
    notBetween,
    notExists,
    notLike,
    notIlike,
    notInArray,
    or,
    sql
  };
}
function getOrderByOperators() {
  return {
    sql,
    asc,
    desc
  };
}
function extractTablesRelationalConfig(schema, configHelpers) {
  if (Object.keys(schema).length === 1 && "default" in schema && !is(schema["default"], Table)) {
    schema = schema["default"];
  }
  const tableNamesMap = {};
  const relationsBuffer = {};
  const tablesConfig = {};
  for (const [key, value] of Object.entries(schema)) {
    if (isTable(value)) {
      const dbName = value[Table.Symbol.Name];
      const bufferedRelations = relationsBuffer[dbName];
      tableNamesMap[dbName] = key;
      tablesConfig[key] = {
        tsName: key,
        dbName: value[Table.Symbol.Name],
        schema: value[Table.Symbol.Schema],
        columns: value[Table.Symbol.Columns],
        relations: bufferedRelations?.relations ?? {},
        primaryKey: bufferedRelations?.primaryKey ?? []
      };
      for (const column of Object.values(
        value[Table.Symbol.Columns]
      )) {
        if (column.primary) {
          tablesConfig[key].primaryKey.push(column);
        }
      }
      const extraConfig = value[Table.Symbol.ExtraConfigBuilder]?.(value);
      if (extraConfig) {
        for (const configEntry of Object.values(extraConfig)) {
          if (is(configEntry, PrimaryKeyBuilder)) {
            tablesConfig[key].primaryKey.push(...configEntry.columns);
          }
        }
      }
    } else if (is(value, Relations)) {
      const dbName = value.table[Table.Symbol.Name];
      const tableName = tableNamesMap[dbName];
      const relations2 = value.config(
        configHelpers(value.table)
      );
      let primaryKey;
      for (const [relationName, relation] of Object.entries(relations2)) {
        if (tableName) {
          const tableConfig = tablesConfig[tableName];
          tableConfig.relations[relationName] = relation;
          if (primaryKey) {
            tableConfig.primaryKey.push(...primaryKey);
          }
        } else {
          if (!(dbName in relationsBuffer)) {
            relationsBuffer[dbName] = {
              relations: {},
              primaryKey
            };
          }
          relationsBuffer[dbName].relations[relationName] = relation;
        }
      }
    }
  }
  return { tables: tablesConfig, tableNamesMap };
}
function createOne(sourceTable) {
  return function one(table, config2) {
    return new One(
      sourceTable,
      table,
      config2,
      config2?.fields.reduce((res, f) => res && f.notNull, true) ?? false
    );
  };
}
function createMany(sourceTable) {
  return function many(referencedTable, config2) {
    return new Many(sourceTable, referencedTable, config2);
  };
}
function normalizeRelation(schema, tableNamesMap, relation) {
  if (is(relation, One) && relation.config) {
    return {
      fields: relation.config.fields,
      references: relation.config.references
    };
  }
  const referencedTableTsName = tableNamesMap[relation.referencedTable[Table.Symbol.Name]];
  if (!referencedTableTsName) {
    throw new Error(
      `Table "${relation.referencedTable[Table.Symbol.Name]}" not found in schema`
    );
  }
  const referencedTableConfig = schema[referencedTableTsName];
  if (!referencedTableConfig) {
    throw new Error(`Table "${referencedTableTsName}" not found in schema`);
  }
  const sourceTable = relation.sourceTable;
  const sourceTableTsName = tableNamesMap[sourceTable[Table.Symbol.Name]];
  if (!sourceTableTsName) {
    throw new Error(
      `Table "${sourceTable[Table.Symbol.Name]}" not found in schema`
    );
  }
  const reverseRelations = [];
  for (const referencedTableRelation of Object.values(
    referencedTableConfig.relations
  )) {
    if (relation.relationName && relation !== referencedTableRelation && referencedTableRelation.relationName === relation.relationName || !relation.relationName && referencedTableRelation.referencedTable === relation.sourceTable) {
      reverseRelations.push(referencedTableRelation);
    }
  }
  if (reverseRelations.length > 1) {
    throw relation.relationName ? new Error(
      `There are multiple relations with name "${relation.relationName}" in table "${referencedTableTsName}"`
    ) : new Error(
      `There are multiple relations between "${referencedTableTsName}" and "${relation.sourceTable[Table.Symbol.Name]}". Please specify relation name`
    );
  }
  if (reverseRelations[0] && is(reverseRelations[0], One) && reverseRelations[0].config) {
    return {
      fields: reverseRelations[0].config.references,
      references: reverseRelations[0].config.fields
    };
  }
  throw new Error(
    `There is not enough information to infer relation "${sourceTableTsName}.${relation.fieldName}"`
  );
}
function createTableRelationsHelpers(sourceTable) {
  return {
    one: createOne(sourceTable),
    many: createMany(sourceTable)
  };
}
function mapRelationalRow(tablesConfig, tableConfig, row, buildQueryResultSelection, mapColumnValue = (value) => value) {
  const result = {};
  for (const [
    selectionItemIndex,
    selectionItem
  ] of buildQueryResultSelection.entries()) {
    if (selectionItem.isJson) {
      const relation = tableConfig.relations[selectionItem.tsKey];
      const rawSubRows = row[selectionItemIndex];
      const subRows = typeof rawSubRows === "string" ? JSON.parse(rawSubRows) : rawSubRows;
      result[selectionItem.tsKey] = is(relation, One) ? subRows && mapRelationalRow(
        tablesConfig,
        tablesConfig[selectionItem.relationTableTsKey],
        subRows,
        selectionItem.selection,
        mapColumnValue
      ) : subRows.map(
        (subRow) => mapRelationalRow(
          tablesConfig,
          tablesConfig[selectionItem.relationTableTsKey],
          subRow,
          selectionItem.selection,
          mapColumnValue
        )
      );
    } else {
      const value = mapColumnValue(row[selectionItemIndex]);
      const field = selectionItem.field;
      let decoder3;
      if (is(field, Column)) {
        decoder3 = field;
      } else if (is(field, SQL)) {
        decoder3 = field.decoder;
      } else {
        decoder3 = field.sql.decoder;
      }
      result[selectionItem.tsKey] = value === null ? null : decoder3.mapFromDriverValue(value);
    }
  }
  return result;
}
var Relation, Relations, One, Many;
var init_relations = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/relations.js"() {
    init_table();
    init_column();
    init_entity();
    init_primary_keys();
    init_expressions();
    init_sql();
    Relation = class {
      constructor(sourceTable, referencedTable, relationName) {
        this.sourceTable = sourceTable;
        this.referencedTable = referencedTable;
        this.relationName = relationName;
        this.referencedTableName = referencedTable[Table.Symbol.Name];
      }
      static [entityKind] = "Relation";
      referencedTableName;
      fieldName;
    };
    Relations = class {
      constructor(table, config2) {
        this.table = table;
        this.config = config2;
      }
      static [entityKind] = "Relations";
    };
    One = class _One extends Relation {
      constructor(sourceTable, referencedTable, config2, isNullable) {
        super(sourceTable, referencedTable, config2?.relationName);
        this.config = config2;
        this.isNullable = isNullable;
      }
      static [entityKind] = "One";
      withFieldName(fieldName) {
        const relation = new _One(
          this.sourceTable,
          this.referencedTable,
          this.config,
          this.isNullable
        );
        relation.fieldName = fieldName;
        return relation;
      }
    };
    Many = class _Many extends Relation {
      constructor(sourceTable, referencedTable, config2) {
        super(sourceTable, referencedTable, config2?.relationName);
        this.config = config2;
      }
      static [entityKind] = "Many";
      withFieldName(fieldName) {
        const relation = new _Many(
          this.sourceTable,
          this.referencedTable,
          this.config
        );
        relation.fieldName = fieldName;
        return relation;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sql/functions/aggregate.js
var init_aggregate = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sql/functions/aggregate.js"() {
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sql/functions/index.js
var init_functions = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sql/functions/index.js"() {
    init_aggregate();
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sql/index.js
var init_sql2 = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sql/index.js"() {
    init_expressions();
    init_sql();
    init_functions();
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/utils.js
function mapResultRow(columns, row, joinsNotNullableMap) {
  const nullifyMap = {};
  const result = columns.reduce(
    (result2, { path, field }, columnIndex) => {
      let decoder3;
      if (is(field, Column)) {
        decoder3 = field;
      } else if (is(field, SQL)) {
        decoder3 = field.decoder;
      } else {
        decoder3 = field.sql.decoder;
      }
      let node = result2;
      for (const [pathChunkIndex, pathChunk] of path.entries()) {
        if (pathChunkIndex < path.length - 1) {
          if (!(pathChunk in node)) {
            node[pathChunk] = {};
          }
          node = node[pathChunk];
        } else {
          const rawValue = row[columnIndex];
          const value = node[pathChunk] = rawValue === null ? null : decoder3.mapFromDriverValue(rawValue);
          if (joinsNotNullableMap && is(field, Column) && path.length === 2) {
            const objectName = path[0];
            if (!(objectName in nullifyMap)) {
              nullifyMap[objectName] = value === null ? getTableName(field.table) : false;
            } else if (typeof nullifyMap[objectName] === "string" && nullifyMap[objectName] !== getTableName(field.table)) {
              nullifyMap[objectName] = false;
            }
          }
        }
      }
      return result2;
    },
    {}
  );
  if (joinsNotNullableMap && Object.keys(nullifyMap).length > 0) {
    for (const [objectName, tableName] of Object.entries(nullifyMap)) {
      if (typeof tableName === "string" && !joinsNotNullableMap[tableName]) {
        result[objectName] = null;
      }
    }
  }
  return result;
}
function orderSelectedFields(fields, pathPrefix) {
  return Object.entries(fields).reduce((result, [name, field]) => {
    if (typeof name !== "string") {
      return result;
    }
    const newPath = pathPrefix ? [...pathPrefix, name] : [name];
    if (is(field, Column) || is(field, SQL) || is(field, SQL.Aliased)) {
      result.push({ path: newPath, field });
    } else if (is(field, Table)) {
      result.push(...orderSelectedFields(field[Table.Symbol.Columns], newPath));
    } else {
      result.push(...orderSelectedFields(field, newPath));
    }
    return result;
  }, []);
}
function haveSameKeys(left, right) {
  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length) {
    return false;
  }
  for (const [index2, key] of leftKeys.entries()) {
    if (key !== rightKeys[index2]) {
      return false;
    }
  }
  return true;
}
function mapUpdateSet(table, values) {
  const entries = Object.entries(values).filter(([, value]) => value !== void 0).map(([key, value]) => {
    if (is(value, SQL)) {
      return [key, value];
    } else {
      return [key, new Param(value, table[Table.Symbol.Columns][key])];
    }
  });
  if (entries.length === 0) {
    throw new Error("No values to set");
  }
  return Object.fromEntries(entries);
}
function applyMixins(baseClass, extendedClasses) {
  for (const extendedClass of extendedClasses) {
    for (const name of Object.getOwnPropertyNames(extendedClass.prototype)) {
      if (name === "constructor")
        continue;
      Object.defineProperty(
        baseClass.prototype,
        name,
        Object.getOwnPropertyDescriptor(extendedClass.prototype, name) || /* @__PURE__ */ Object.create(null)
      );
    }
  }
}
function getTableColumns(table) {
  return table[Table.Symbol.Columns];
}
function getTableLikeName(table) {
  return is(table, Subquery) ? table[SubqueryConfig].alias : is(table, View) ? table[ViewBaseConfig].name : is(table, SQL) ? void 0 : table[Table.Symbol.IsAlias] ? table[Table.Symbol.Name] : table[Table.Symbol.BaseName];
}
var init_utils = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/utils.js"() {
    init_column();
    init_entity();
    init_sql();
    init_subquery();
    init_table();
    init_view_common();
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/index.js
var init_drizzle_orm = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/index.js"() {
    init_alias();
    init_column_builder();
    init_column();
    init_entity();
    init_errors();
    init_expressions2();
    init_logger();
    init_operations();
    init_query_promise();
    init_relations();
    init_sql2();
    init_subquery();
    init_table();
    init_utils();
    init_view_common();
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/alias.js
var init_alias2 = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/alias.js"() {
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/checks.js
var CheckBuilder, Check;
var init_checks = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/checks.js"() {
    init_entity();
    CheckBuilder = class {
      constructor(name, value) {
        this.name = name;
        this.value = value;
      }
      static [entityKind] = "SQLiteCheckBuilder";
      brand;
      build(table) {
        return new Check(table, this);
      }
    };
    Check = class {
      constructor(table, builder) {
        this.table = table;
        this.name = builder.name;
        this.value = builder.value;
      }
      static [entityKind] = "SQLiteCheck";
      name;
      value;
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/table.js
function sqliteTableBase(name, columns, extraConfig, schema, baseName = name) {
  const rawTable = new SQLiteTable(name, schema, baseName);
  const builtColumns = Object.fromEntries(
    Object.entries(columns).map(([name2, colBuilderBase]) => {
      const colBuilder = colBuilderBase;
      const column = colBuilder.build(rawTable);
      rawTable[InlineForeignKeys2].push(...colBuilder.buildForeignKeys(column, rawTable));
      return [name2, column];
    })
  );
  const table = Object.assign(rawTable, builtColumns);
  table[Table.Symbol.Columns] = builtColumns;
  if (extraConfig) {
    table[SQLiteTable.Symbol.ExtraConfigBuilder] = extraConfig;
  }
  return table;
}
var InlineForeignKeys2, SQLiteTable, sqliteTable;
var init_table3 = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/table.js"() {
    init_entity();
    init_table();
    InlineForeignKeys2 = Symbol.for("drizzle:SQLiteInlineForeignKeys");
    SQLiteTable = class extends Table {
      static [entityKind] = "SQLiteTable";
      /** @internal */
      static Symbol = Object.assign({}, Table.Symbol, {
        InlineForeignKeys: InlineForeignKeys2
      });
      /** @internal */
      [Table.Symbol.Columns];
      /** @internal */
      [InlineForeignKeys2] = [];
      /** @internal */
      [Table.Symbol.ExtraConfigBuilder] = void 0;
    };
    sqliteTable = (name, columns, extraConfig) => {
      return sqliteTableBase(name, columns, extraConfig);
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/foreign-keys.js
var ForeignKeyBuilder, ForeignKey;
var init_foreign_keys = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/foreign-keys.js"() {
    init_entity();
    init_table3();
    ForeignKeyBuilder = class {
      static [entityKind] = "SQLiteForeignKeyBuilder";
      /** @internal */
      reference;
      /** @internal */
      _onUpdate;
      /** @internal */
      _onDelete;
      constructor(config2, actions) {
        this.reference = () => {
          const { name, columns, foreignColumns } = config2();
          return { name, columns, foreignTable: foreignColumns[0].table, foreignColumns };
        };
        if (actions) {
          this._onUpdate = actions.onUpdate;
          this._onDelete = actions.onDelete;
        }
      }
      onUpdate(action) {
        this._onUpdate = action;
        return this;
      }
      onDelete(action) {
        this._onDelete = action;
        return this;
      }
      /** @internal */
      build(table) {
        return new ForeignKey(table, this);
      }
    };
    ForeignKey = class {
      constructor(table, builder) {
        this.table = table;
        this.reference = builder.reference;
        this.onUpdate = builder._onUpdate;
        this.onDelete = builder._onDelete;
      }
      static [entityKind] = "SQLiteForeignKey";
      reference;
      onUpdate;
      onDelete;
      getName() {
        const { name, columns, foreignColumns } = this.reference();
        const columnNames = columns.map((column) => column.name);
        const foreignColumnNames = foreignColumns.map((column) => column.name);
        const chunks = [
          this.table[SQLiteTable.Symbol.Name],
          ...columnNames,
          foreignColumns[0].table[SQLiteTable.Symbol.Name],
          ...foreignColumnNames
        ];
        return name ?? `${chunks.join("_")}_fk`;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/unique-constraint.js
function uniqueKeyName(table, columns) {
  return `${table[SQLiteTable.Symbol.Name]}_${columns.join("_")}_unique`;
}
var UniqueConstraintBuilder, UniqueOnConstraintBuilder, UniqueConstraint;
var init_unique_constraint = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/unique-constraint.js"() {
    init_entity();
    init_table3();
    UniqueConstraintBuilder = class {
      constructor(columns, name) {
        this.name = name;
        this.columns = columns;
      }
      static [entityKind] = "SQLiteUniqueConstraintBuilder";
      /** @internal */
      columns;
      /** @internal */
      build(table) {
        return new UniqueConstraint(table, this.columns, this.name);
      }
    };
    UniqueOnConstraintBuilder = class {
      static [entityKind] = "SQLiteUniqueOnConstraintBuilder";
      /** @internal */
      name;
      constructor(name) {
        this.name = name;
      }
      on(...columns) {
        return new UniqueConstraintBuilder(columns, this.name);
      }
    };
    UniqueConstraint = class {
      constructor(table, columns, name) {
        this.table = table;
        this.columns = columns;
        this.name = name ?? uniqueKeyName(this.table, this.columns.map((column) => column.name));
      }
      static [entityKind] = "SQLiteUniqueConstraint";
      columns;
      name;
      getName() {
        return this.name;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/columns/common.js
var SQLiteColumnBuilder, SQLiteColumn;
var init_common = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/columns/common.js"() {
    init_column_builder();
    init_column();
    init_entity();
    init_foreign_keys();
    init_unique_constraint();
    SQLiteColumnBuilder = class extends ColumnBuilder {
      static [entityKind] = "SQLiteColumnBuilder";
      foreignKeyConfigs = [];
      references(ref, actions = {}) {
        this.foreignKeyConfigs.push({ ref, actions });
        return this;
      }
      unique(name) {
        this.config.isUnique = true;
        this.config.uniqueName = name;
        return this;
      }
      /** @internal */
      buildForeignKeys(column, table) {
        return this.foreignKeyConfigs.map(({ ref, actions }) => {
          return ((ref2, actions2) => {
            const builder = new ForeignKeyBuilder(() => {
              const foreignColumn = ref2();
              return { columns: [column], foreignColumns: [foreignColumn] };
            });
            if (actions2.onUpdate) {
              builder.onUpdate(actions2.onUpdate);
            }
            if (actions2.onDelete) {
              builder.onDelete(actions2.onDelete);
            }
            return builder.build(table);
          })(ref, actions);
        });
      }
    };
    SQLiteColumn = class extends Column {
      constructor(table, config2) {
        if (!config2.uniqueName) {
          config2.uniqueName = uniqueKeyName(table, [config2.name]);
        }
        super(table, config2);
        this.table = table;
      }
      static [entityKind] = "SQLiteColumn";
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/columns/blob.js
var SQLiteBigIntBuilder, SQLiteBigInt, SQLiteBlobJsonBuilder, SQLiteBlobJson, SQLiteBlobBufferBuilder, SQLiteBlobBuffer;
var init_blob = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/columns/blob.js"() {
    init_entity();
    init_common();
    SQLiteBigIntBuilder = class extends SQLiteColumnBuilder {
      static [entityKind] = "SQLiteBigIntBuilder";
      constructor(name) {
        super(name, "bigint", "SQLiteBigInt");
      }
      /** @internal */
      build(table) {
        return new SQLiteBigInt(table, this.config);
      }
    };
    SQLiteBigInt = class extends SQLiteColumn {
      static [entityKind] = "SQLiteBigInt";
      getSQLType() {
        return "blob";
      }
      mapFromDriverValue(value) {
        return BigInt(value.toString());
      }
      mapToDriverValue(value) {
        return Buffer.from(value.toString());
      }
    };
    SQLiteBlobJsonBuilder = class extends SQLiteColumnBuilder {
      static [entityKind] = "SQLiteBlobJsonBuilder";
      constructor(name) {
        super(name, "json", "SQLiteBlobJson");
      }
      /** @internal */
      build(table) {
        return new SQLiteBlobJson(
          table,
          this.config
        );
      }
    };
    SQLiteBlobJson = class extends SQLiteColumn {
      static [entityKind] = "SQLiteBlobJson";
      getSQLType() {
        return "blob";
      }
      mapFromDriverValue(value) {
        return JSON.parse(value.toString());
      }
      mapToDriverValue(value) {
        return Buffer.from(JSON.stringify(value));
      }
    };
    SQLiteBlobBufferBuilder = class extends SQLiteColumnBuilder {
      static [entityKind] = "SQLiteBlobBufferBuilder";
      constructor(name) {
        super(name, "buffer", "SQLiteBlobBuffer");
      }
      /** @internal */
      build(table) {
        return new SQLiteBlobBuffer(table, this.config);
      }
    };
    SQLiteBlobBuffer = class extends SQLiteColumn {
      static [entityKind] = "SQLiteBlobBuffer";
      getSQLType() {
        return "blob";
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/columns/custom.js
function customType(customTypeParams) {
  return (dbName, fieldConfig) => {
    return new SQLiteCustomColumnBuilder(
      dbName,
      fieldConfig,
      customTypeParams
    );
  };
}
var SQLiteCustomColumnBuilder, SQLiteCustomColumn;
var init_custom = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/columns/custom.js"() {
    init_entity();
    init_common();
    SQLiteCustomColumnBuilder = class extends SQLiteColumnBuilder {
      static [entityKind] = "SQLiteCustomColumnBuilder";
      constructor(name, fieldConfig, customTypeParams) {
        super(name, "custom", "SQLiteCustomColumn");
        this.config.fieldConfig = fieldConfig;
        this.config.customTypeParams = customTypeParams;
      }
      /** @internal */
      build(table) {
        return new SQLiteCustomColumn(
          table,
          this.config
        );
      }
    };
    SQLiteCustomColumn = class extends SQLiteColumn {
      static [entityKind] = "SQLiteCustomColumn";
      sqlName;
      mapTo;
      mapFrom;
      constructor(table, config2) {
        super(table, config2);
        this.sqlName = config2.customTypeParams.dataType(config2.fieldConfig);
        this.mapTo = config2.customTypeParams.toDriver;
        this.mapFrom = config2.customTypeParams.fromDriver;
      }
      getSQLType() {
        return this.sqlName;
      }
      mapFromDriverValue(value) {
        return typeof this.mapFrom === "function" ? this.mapFrom(value) : value;
      }
      mapToDriverValue(value) {
        return typeof this.mapTo === "function" ? this.mapTo(value) : value;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/columns/integer.js
function integer(name, config2) {
  if (config2?.mode === "timestamp" || config2?.mode === "timestamp_ms") {
    return new SQLiteTimestampBuilder(name, config2.mode);
  }
  if (config2?.mode === "boolean") {
    return new SQLiteBooleanBuilder(name, config2.mode);
  }
  return new SQLiteIntegerBuilder(name);
}
var SQLiteBaseIntegerBuilder, SQLiteBaseInteger, SQLiteIntegerBuilder, SQLiteInteger, SQLiteTimestampBuilder, SQLiteTimestamp, SQLiteBooleanBuilder, SQLiteBoolean;
var init_integer = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/columns/integer.js"() {
    init_entity();
    init_sql();
    init_common();
    SQLiteBaseIntegerBuilder = class extends SQLiteColumnBuilder {
      static [entityKind] = "SQLiteBaseIntegerBuilder";
      constructor(name, dataType, columnType) {
        super(name, dataType, columnType);
        this.config.autoIncrement = false;
      }
      primaryKey(config2) {
        if (config2?.autoIncrement) {
          this.config.autoIncrement = true;
        }
        this.config.hasDefault = true;
        return super.primaryKey();
      }
    };
    SQLiteBaseInteger = class extends SQLiteColumn {
      static [entityKind] = "SQLiteBaseInteger";
      autoIncrement = this.config.autoIncrement;
      getSQLType() {
        return "integer";
      }
    };
    SQLiteIntegerBuilder = class extends SQLiteBaseIntegerBuilder {
      static [entityKind] = "SQLiteIntegerBuilder";
      constructor(name) {
        super(name, "number", "SQLiteInteger");
      }
      build(table) {
        return new SQLiteInteger(
          table,
          this.config
        );
      }
    };
    SQLiteInteger = class extends SQLiteBaseInteger {
      static [entityKind] = "SQLiteInteger";
    };
    SQLiteTimestampBuilder = class extends SQLiteBaseIntegerBuilder {
      static [entityKind] = "SQLiteTimestampBuilder";
      constructor(name, mode) {
        super(name, "date", "SQLiteTimestamp");
        this.config.mode = mode;
      }
      /**
       * @deprecated Use `default()` with your own expression instead.
       *
       * Adds `DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer))` to the column, which is the current epoch timestamp in milliseconds.
       */
      defaultNow() {
        return this.default(sql`(cast((julianday('now') - 2440587.5)*86400000 as integer))`);
      }
      build(table) {
        return new SQLiteTimestamp(
          table,
          this.config
        );
      }
    };
    SQLiteTimestamp = class extends SQLiteBaseInteger {
      static [entityKind] = "SQLiteTimestamp";
      mode = this.config.mode;
      mapFromDriverValue(value) {
        if (this.config.mode === "timestamp") {
          return new Date(value * 1e3);
        }
        return new Date(value);
      }
      mapToDriverValue(value) {
        const unix = value.getTime();
        if (this.config.mode === "timestamp") {
          return Math.floor(unix / 1e3);
        }
        return unix;
      }
    };
    SQLiteBooleanBuilder = class extends SQLiteBaseIntegerBuilder {
      static [entityKind] = "SQLiteBooleanBuilder";
      constructor(name, mode) {
        super(name, "boolean", "SQLiteBoolean");
        this.config.mode = mode;
      }
      build(table) {
        return new SQLiteBoolean(
          table,
          this.config
        );
      }
    };
    SQLiteBoolean = class extends SQLiteBaseInteger {
      static [entityKind] = "SQLiteBoolean";
      mode = this.config.mode;
      mapFromDriverValue(value) {
        return Number(value) === 1;
      }
      mapToDriverValue(value) {
        return value ? 1 : 0;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/columns/numeric.js
var SQLiteNumericBuilder, SQLiteNumeric;
var init_numeric = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/columns/numeric.js"() {
    init_entity();
    init_common();
    SQLiteNumericBuilder = class extends SQLiteColumnBuilder {
      static [entityKind] = "SQLiteNumericBuilder";
      constructor(name) {
        super(name, "string", "SQLiteNumeric");
      }
      /** @internal */
      build(table) {
        return new SQLiteNumeric(
          table,
          this.config
        );
      }
    };
    SQLiteNumeric = class extends SQLiteColumn {
      static [entityKind] = "SQLiteNumeric";
      getSQLType() {
        return "numeric";
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/columns/real.js
var SQLiteRealBuilder, SQLiteReal;
var init_real = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/columns/real.js"() {
    init_entity();
    init_common();
    SQLiteRealBuilder = class extends SQLiteColumnBuilder {
      static [entityKind] = "SQLiteRealBuilder";
      constructor(name) {
        super(name, "number", "SQLiteReal");
      }
      /** @internal */
      build(table) {
        return new SQLiteReal(table, this.config);
      }
    };
    SQLiteReal = class extends SQLiteColumn {
      static [entityKind] = "SQLiteReal";
      getSQLType() {
        return "real";
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/columns/text.js
function text2(name, config2 = {}) {
  return config2.mode === "json" ? new SQLiteTextJsonBuilder(name) : new SQLiteTextBuilder(name, config2);
}
var SQLiteTextBuilder, SQLiteText, SQLiteTextJsonBuilder, SQLiteTextJson;
var init_text = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/columns/text.js"() {
    init_entity();
    init_common();
    SQLiteTextBuilder = class extends SQLiteColumnBuilder {
      static [entityKind] = "SQLiteTextBuilder";
      constructor(name, config2) {
        super(name, "string", "SQLiteText");
        this.config.enumValues = config2.enum;
        this.config.length = config2.length;
      }
      /** @internal */
      build(table) {
        return new SQLiteText(table, this.config);
      }
    };
    SQLiteText = class extends SQLiteColumn {
      static [entityKind] = "SQLiteText";
      enumValues = this.config.enumValues;
      length = this.config.length;
      constructor(table, config2) {
        super(table, config2);
      }
      getSQLType() {
        return `text${this.config.length ? `(${this.config.length})` : ""}`;
      }
    };
    SQLiteTextJsonBuilder = class extends SQLiteColumnBuilder {
      static [entityKind] = "SQLiteTextJsonBuilder";
      constructor(name) {
        super(name, "json", "SQLiteTextJson");
      }
      /** @internal */
      build(table) {
        return new SQLiteTextJson(
          table,
          this.config
        );
      }
    };
    SQLiteTextJson = class extends SQLiteColumn {
      static [entityKind] = "SQLiteTextJson";
      getSQLType() {
        return "text";
      }
      mapFromDriverValue(value) {
        return JSON.parse(value);
      }
      mapToDriverValue(value) {
        return JSON.stringify(value);
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/columns/index.js
var init_columns = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/columns/index.js"() {
    init_blob();
    init_common();
    init_custom();
    init_integer();
    init_numeric();
    init_real();
    init_text();
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/selection-proxy.js
var SelectionProxyHandler;
var init_selection_proxy = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/selection-proxy.js"() {
    init_alias();
    init_column();
    init_entity();
    init_sql();
    init_subquery();
    init_view_common();
    SelectionProxyHandler = class _SelectionProxyHandler {
      static [entityKind] = "SelectionProxyHandler";
      config;
      constructor(config2) {
        this.config = { ...config2 };
      }
      get(subquery, prop) {
        if (prop === SubqueryConfig) {
          return {
            ...subquery[SubqueryConfig],
            selection: new Proxy(
              subquery[SubqueryConfig].selection,
              this
            )
          };
        }
        if (prop === ViewBaseConfig) {
          return {
            ...subquery[ViewBaseConfig],
            selectedFields: new Proxy(
              subquery[ViewBaseConfig].selectedFields,
              this
            )
          };
        }
        if (typeof prop === "symbol") {
          return subquery[prop];
        }
        const columns = is(subquery, Subquery) ? subquery[SubqueryConfig].selection : is(subquery, View) ? subquery[ViewBaseConfig].selectedFields : subquery;
        const value = columns[prop];
        if (is(value, SQL.Aliased)) {
          if (this.config.sqlAliasedBehavior === "sql" && !value.isSelectionField) {
            return value.sql;
          }
          const newValue = value.clone();
          newValue.isSelectionField = true;
          return newValue;
        }
        if (is(value, SQL)) {
          if (this.config.sqlBehavior === "sql") {
            return value;
          }
          throw new Error(
            `You tried to reference "${prop}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`
          );
        }
        if (is(value, Column)) {
          if (this.config.alias) {
            return new Proxy(
              value,
              new ColumnAliasProxyHandler(
                new Proxy(
                  value.table,
                  new TableAliasProxyHandler(this.config.alias, this.config.replaceOriginalName ?? false)
                )
              )
            );
          }
          return value;
        }
        if (typeof value !== "object" || value === null) {
          return value;
        }
        return new Proxy(value, new _SelectionProxyHandler(this.config));
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/delete.js
var SQLiteDeleteBase;
var init_delete = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/delete.js"() {
    init_entity();
    init_query_promise();
    init_table3();
    init_utils();
    SQLiteDeleteBase = class extends QueryPromise {
      constructor(table, session, dialect, withList) {
        super();
        this.table = table;
        this.session = session;
        this.dialect = dialect;
        this.config = { table, withList };
      }
      static [entityKind] = "SQLiteDelete";
      /** @internal */
      config;
      /**
       * Adds a `where` clause to the query.
       *
       * Calling this method will delete only those rows that fulfill a specified condition.
       *
       * See docs: {@link https://orm.drizzle.team/docs/delete}
       *
       * @param where the `where` clause.
       *
       * @example
       * You can use conditional operators and `sql function` to filter the rows to be deleted.
       *
       * ```ts
       * // Delete all cars with green color
       * db.delete(cars).where(eq(cars.color, 'green'));
       * // or
       * db.delete(cars).where(sql`${cars.color} = 'green'`)
       * ```
       *
       * You can logically combine conditional operators with `and()` and `or()` operators:
       *
       * ```ts
       * // Delete all BMW cars with a green color
       * db.delete(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
       *
       * // Delete all cars with the green or blue color
       * db.delete(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
       * ```
       */
      where(where) {
        this.config.where = where;
        return this;
      }
      returning(fields = this.table[SQLiteTable.Symbol.Columns]) {
        this.config.returning = orderSelectedFields(fields);
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildDeleteQuery(this.config);
      }
      toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
      }
      /** @internal */
      _prepare(isOneTimeQuery = true) {
        return this.session[isOneTimeQuery ? "prepareOneTimeQuery" : "prepareQuery"](
          this.dialect.sqlToQuery(this.getSQL()),
          this.config.returning,
          this.config.returning ? "all" : "run"
        );
      }
      prepare() {
        return this._prepare(false);
      }
      run = (placeholderValues) => {
        return this._prepare().run(placeholderValues);
      };
      all = (placeholderValues) => {
        return this._prepare().all(placeholderValues);
      };
      get = (placeholderValues) => {
        return this._prepare().get(placeholderValues);
      };
      values = (placeholderValues) => {
        return this._prepare().values(placeholderValues);
      };
      async execute(placeholderValues) {
        return this._prepare().execute(placeholderValues);
      }
      $dynamic() {
        return this;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/insert.js
var SQLiteInsertBuilder, SQLiteInsertBase;
var init_insert = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/insert.js"() {
    init_entity();
    init_query_promise();
    init_sql();
    init_table3();
    init_table();
    init_utils();
    SQLiteInsertBuilder = class {
      constructor(table, session, dialect, withList) {
        this.table = table;
        this.session = session;
        this.dialect = dialect;
        this.withList = withList;
      }
      static [entityKind] = "SQLiteInsertBuilder";
      values(values) {
        values = Array.isArray(values) ? values : [values];
        if (values.length === 0) {
          throw new Error("values() must be called with at least one value");
        }
        const mappedValues = values.map((entry) => {
          const result = {};
          const cols = this.table[Table.Symbol.Columns];
          for (const colKey of Object.keys(entry)) {
            const colValue = entry[colKey];
            result[colKey] = is(colValue, SQL) ? colValue : new Param(colValue, cols[colKey]);
          }
          return result;
        });
        return new SQLiteInsertBase(this.table, mappedValues, this.session, this.dialect, this.withList);
      }
    };
    SQLiteInsertBase = class extends QueryPromise {
      constructor(table, values, session, dialect, withList) {
        super();
        this.session = session;
        this.dialect = dialect;
        this.config = { table, values, withList };
      }
      static [entityKind] = "SQLiteInsert";
      /** @internal */
      config;
      returning(fields = this.config.table[SQLiteTable.Symbol.Columns]) {
        this.config.returning = orderSelectedFields(fields);
        return this;
      }
      /**
       * Adds an `on conflict do nothing` clause to the query.
       *
       * Calling this method simply avoids inserting a row as its alternative action.
       *
       * See docs: {@link https://orm.drizzle.team/docs/insert#on-conflict-do-nothing}
       *
       * @param config The `target` and `where` clauses.
       *
       * @example
       * ```ts
       * // Insert one row and cancel the insert if there's a conflict
       * await db.insert(cars)
       *   .values({ id: 1, brand: 'BMW' })
       *   .onConflictDoNothing();
       *
       * // Explicitly specify conflict target
       * await db.insert(cars)
       *   .values({ id: 1, brand: 'BMW' })
       *   .onConflictDoNothing({ target: cars.id });
       * ```
       */
      onConflictDoNothing(config2 = {}) {
        if (config2.target === void 0) {
          this.config.onConflict = sql`do nothing`;
        } else {
          const targetSql = Array.isArray(config2.target) ? sql`${config2.target}` : sql`${[config2.target]}`;
          const whereSql = config2.where ? sql` where ${config2.where}` : sql``;
          this.config.onConflict = sql`${targetSql} do nothing${whereSql}`;
        }
        return this;
      }
      /**
       * Adds an `on conflict do update` clause to the query.
       *
       * Calling this method will update the existing row that conflicts with the row proposed for insertion as its alternative action.
       *
       * See docs: {@link https://orm.drizzle.team/docs/insert#upserts-and-conflicts}
       *
       * @param config The `target`, `set` and `where` clauses.
       *
       * @example
       * ```ts
       * // Update the row if there's a conflict
       * await db.insert(cars)
       *   .values({ id: 1, brand: 'BMW' })
       *   .onConflictDoUpdate({
       *     target: cars.id,
       *     set: { brand: 'Porsche' }
       *   });
       *
       * // Upsert with 'where' clause
       * await db.insert(cars)
       *   .values({ id: 1, brand: 'BMW' })
       *   .onConflictDoUpdate({
       *     target: cars.id,
       *     set: { brand: 'newBMW' },
       *     where: sql`${cars.createdAt} > '2023-01-01'::date`,
       *   });
       * ```
       */
      onConflictDoUpdate(config2) {
        const targetSql = Array.isArray(config2.target) ? sql`${config2.target}` : sql`${[config2.target]}`;
        const whereSql = config2.where ? sql` where ${config2.where}` : sql``;
        const setSql = this.dialect.buildUpdateSet(this.config.table, mapUpdateSet(this.config.table, config2.set));
        this.config.onConflict = sql`${targetSql} do update set ${setSql}${whereSql}`;
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildInsertQuery(this.config);
      }
      toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
      }
      /** @internal */
      _prepare(isOneTimeQuery = true) {
        return this.session[isOneTimeQuery ? "prepareOneTimeQuery" : "prepareQuery"](
          this.dialect.sqlToQuery(this.getSQL()),
          this.config.returning,
          this.config.returning ? "all" : "run"
        );
      }
      prepare() {
        return this._prepare(false);
      }
      run = (placeholderValues) => {
        return this._prepare().run(placeholderValues);
      };
      all = (placeholderValues) => {
        return this._prepare().all(placeholderValues);
      };
      get = (placeholderValues) => {
        return this._prepare().get(placeholderValues);
      };
      values = (placeholderValues) => {
        return this._prepare().values(placeholderValues);
      };
      async execute() {
        return this.config.returning ? this.all() : this.run();
      }
      $dynamic() {
        return this;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/view-base.js
var SQLiteViewBase;
var init_view_base = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/view-base.js"() {
    init_entity();
    init_sql();
    SQLiteViewBase = class extends View {
      static [entityKind] = "SQLiteViewBase";
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/dialect.js
var SQLiteDialect, SQLiteSyncDialect, SQLiteAsyncDialect;
var init_dialect = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/dialect.js"() {
    init_alias();
    init_column();
    init_entity();
    init_errors();
    init_relations();
    init_sql2();
    init_sql();
    init_columns();
    init_table3();
    init_subquery();
    init_table();
    init_utils();
    init_view_common();
    init_view_base();
    SQLiteDialect = class {
      static [entityKind] = "SQLiteDialect";
      escapeName(name) {
        return `"${name}"`;
      }
      escapeParam(_num) {
        return "?";
      }
      escapeString(str) {
        return `'${str.replace(/'/g, "''")}'`;
      }
      buildWithCTE(queries) {
        if (!queries?.length)
          return void 0;
        const withSqlChunks = [sql`with `];
        for (const [i, w2] of queries.entries()) {
          withSqlChunks.push(sql`${sql.identifier(w2[SubqueryConfig].alias)} as (${w2[SubqueryConfig].sql})`);
          if (i < queries.length - 1) {
            withSqlChunks.push(sql`, `);
          }
        }
        withSqlChunks.push(sql` `);
        return sql.join(withSqlChunks);
      }
      buildDeleteQuery({ table, where, returning, withList }) {
        const withSql = this.buildWithCTE(withList);
        const returningSql = returning ? sql` returning ${this.buildSelection(returning, { isSingleTable: true })}` : void 0;
        const whereSql = where ? sql` where ${where}` : void 0;
        return sql`${withSql}delete from ${table}${whereSql}${returningSql}`;
      }
      buildUpdateSet(table, set2) {
        const setEntries = Object.entries(set2);
        const setSize = setEntries.length;
        return sql.join(
          setEntries.flatMap(([colName, value], i) => {
            const col = table[Table.Symbol.Columns][colName];
            const res = sql`${sql.identifier(col.name)} = ${value}`;
            if (i < setSize - 1) {
              return [res, sql.raw(", ")];
            }
            return [res];
          })
        );
      }
      buildUpdateQuery({ table, set: set2, where, returning, withList }) {
        const withSql = this.buildWithCTE(withList);
        const setSql = this.buildUpdateSet(table, set2);
        const returningSql = returning ? sql` returning ${this.buildSelection(returning, { isSingleTable: true })}` : void 0;
        const whereSql = where ? sql` where ${where}` : void 0;
        return sql`${withSql}update ${table} set ${setSql}${whereSql}${returningSql}`;
      }
      /**
       * Builds selection SQL with provided fields/expressions
       *
       * Examples:
       *
       * `select <selection> from`
       *
       * `insert ... returning <selection>`
       *
       * If `isSingleTable` is true, then columns won't be prefixed with table name
       */
      buildSelection(fields, { isSingleTable = false } = {}) {
        const columnsLen = fields.length;
        const chunks = fields.flatMap(({ field }, i) => {
          const chunk2 = [];
          if (is(field, SQL.Aliased) && field.isSelectionField) {
            chunk2.push(sql.identifier(field.fieldAlias));
          } else if (is(field, SQL.Aliased) || is(field, SQL)) {
            const query = is(field, SQL.Aliased) ? field.sql : field;
            if (isSingleTable) {
              chunk2.push(
                new SQL(
                  query.queryChunks.map((c) => {
                    if (is(c, Column)) {
                      return sql.identifier(c.name);
                    }
                    return c;
                  })
                )
              );
            } else {
              chunk2.push(query);
            }
            if (is(field, SQL.Aliased)) {
              chunk2.push(sql` as ${sql.identifier(field.fieldAlias)}`);
            }
          } else if (is(field, Column)) {
            const tableName = field.table[Table.Symbol.Name];
            const columnName = field.name;
            if (isSingleTable) {
              chunk2.push(sql.identifier(columnName));
            } else {
              chunk2.push(sql`${sql.identifier(tableName)}.${sql.identifier(columnName)}`);
            }
          }
          if (i < columnsLen - 1) {
            chunk2.push(sql`, `);
          }
          return chunk2;
        });
        return sql.join(chunks);
      }
      buildSelectQuery({
        withList,
        fields,
        fieldsFlat,
        where,
        having,
        table,
        joins,
        orderBy,
        groupBy,
        limit,
        offset,
        distinct,
        setOperators
      }) {
        const fieldsList = fieldsFlat ?? orderSelectedFields(fields);
        for (const f of fieldsList) {
          if (is(f.field, Column) && getTableName(f.field.table) !== (is(table, Subquery) ? table[SubqueryConfig].alias : is(table, SQLiteViewBase) ? table[ViewBaseConfig].name : is(table, SQL) ? void 0 : getTableName(table)) && !((table2) => joins?.some(
            ({ alias }) => alias === (table2[Table.Symbol.IsAlias] ? getTableName(table2) : table2[Table.Symbol.BaseName])
          ))(f.field.table)) {
            const tableName = getTableName(f.field.table);
            throw new Error(
              `Your "${f.path.join("->")}" field references a column "${tableName}"."${f.field.name}", but the table "${tableName}" is not part of the query! Did you forget to join it?`
            );
          }
        }
        const isSingleTable = !joins || joins.length === 0;
        const withSql = this.buildWithCTE(withList);
        const distinctSql = distinct ? sql` distinct` : void 0;
        const selection = this.buildSelection(fieldsList, { isSingleTable });
        const tableSql = (() => {
          if (is(table, Table) && table[Table.Symbol.OriginalName] !== table[Table.Symbol.Name]) {
            return sql`${sql.identifier(table[Table.Symbol.OriginalName])} ${sql.identifier(table[Table.Symbol.Name])}`;
          }
          return table;
        })();
        const joinsArray = [];
        if (joins) {
          for (const [index2, joinMeta] of joins.entries()) {
            if (index2 === 0) {
              joinsArray.push(sql` `);
            }
            const table2 = joinMeta.table;
            if (is(table2, SQLiteTable)) {
              const tableName = table2[SQLiteTable.Symbol.Name];
              const tableSchema = table2[SQLiteTable.Symbol.Schema];
              const origTableName = table2[SQLiteTable.Symbol.OriginalName];
              const alias = tableName === origTableName ? void 0 : joinMeta.alias;
              joinsArray.push(
                sql`${sql.raw(joinMeta.joinType)} join ${tableSchema ? sql`${sql.identifier(tableSchema)}.` : void 0}${sql.identifier(origTableName)}${alias && sql` ${sql.identifier(alias)}`} on ${joinMeta.on}`
              );
            } else {
              joinsArray.push(
                sql`${sql.raw(joinMeta.joinType)} join ${table2} on ${joinMeta.on}`
              );
            }
            if (index2 < joins.length - 1) {
              joinsArray.push(sql` `);
            }
          }
        }
        const joinsSql = sql.join(joinsArray);
        const whereSql = where ? sql` where ${where}` : void 0;
        const havingSql = having ? sql` having ${having}` : void 0;
        const orderByList = [];
        if (orderBy) {
          for (const [index2, orderByValue] of orderBy.entries()) {
            orderByList.push(orderByValue);
            if (index2 < orderBy.length - 1) {
              orderByList.push(sql`, `);
            }
          }
        }
        const groupByList = [];
        if (groupBy) {
          for (const [index2, groupByValue] of groupBy.entries()) {
            groupByList.push(groupByValue);
            if (index2 < groupBy.length - 1) {
              groupByList.push(sql`, `);
            }
          }
        }
        const groupBySql = groupByList.length > 0 ? sql` group by ${sql.join(groupByList)}` : void 0;
        const orderBySql = orderByList.length > 0 ? sql` order by ${sql.join(orderByList)}` : void 0;
        const limitSql = limit ? sql` limit ${limit}` : void 0;
        const offsetSql = offset ? sql` offset ${offset}` : void 0;
        const finalQuery = sql`${withSql}select${distinctSql} ${selection} from ${tableSql}${joinsSql}${whereSql}${groupBySql}${havingSql}${orderBySql}${limitSql}${offsetSql}`;
        if (setOperators.length > 0) {
          return this.buildSetOperations(finalQuery, setOperators);
        }
        return finalQuery;
      }
      buildSetOperations(leftSelect, setOperators) {
        const [setOperator, ...rest] = setOperators;
        if (!setOperator) {
          throw new Error("Cannot pass undefined values to any set operator");
        }
        if (rest.length === 0) {
          return this.buildSetOperationQuery({ leftSelect, setOperator });
        }
        return this.buildSetOperations(
          this.buildSetOperationQuery({ leftSelect, setOperator }),
          rest
        );
      }
      buildSetOperationQuery({
        leftSelect,
        setOperator: { type, isAll, rightSelect, limit, orderBy, offset }
      }) {
        const leftChunk = sql`${leftSelect.getSQL()} `;
        const rightChunk = sql`${rightSelect.getSQL()}`;
        let orderBySql;
        if (orderBy && orderBy.length > 0) {
          const orderByValues = [];
          for (const singleOrderBy of orderBy) {
            if (is(singleOrderBy, SQLiteColumn)) {
              orderByValues.push(sql.identifier(singleOrderBy.name));
            } else if (is(singleOrderBy, SQL)) {
              for (let i = 0; i < singleOrderBy.queryChunks.length; i++) {
                const chunk2 = singleOrderBy.queryChunks[i];
                if (is(chunk2, SQLiteColumn)) {
                  singleOrderBy.queryChunks[i] = sql.identifier(chunk2.name);
                }
              }
              orderByValues.push(sql`${singleOrderBy}`);
            } else {
              orderByValues.push(sql`${singleOrderBy}`);
            }
          }
          orderBySql = sql` order by ${sql.join(orderByValues, sql`, `)}`;
        }
        const limitSql = limit ? sql` limit ${limit}` : void 0;
        const operatorChunk = sql.raw(`${type} ${isAll ? "all " : ""}`);
        const offsetSql = offset ? sql` offset ${offset}` : void 0;
        return sql`${leftChunk}${operatorChunk}${rightChunk}${orderBySql}${limitSql}${offsetSql}`;
      }
      buildInsertQuery({ table, values, onConflict, returning, withList }) {
        const valuesSqlList = [];
        const columns = table[Table.Symbol.Columns];
        const colEntries = Object.entries(columns);
        const insertOrder = colEntries.map(([, column]) => sql.identifier(column.name));
        for (const [valueIndex, value] of values.entries()) {
          const valueList = [];
          for (const [fieldName, col] of colEntries) {
            const colValue = value[fieldName];
            if (colValue === void 0 || is(colValue, Param) && colValue.value === void 0) {
              let defaultValue;
              if (col.default !== null && col.default !== void 0) {
                defaultValue = is(col.default, SQL) ? col.default : sql.param(col.default, col);
              } else if (col.defaultFn !== void 0) {
                const defaultFnResult = col.defaultFn();
                defaultValue = is(defaultFnResult, SQL) ? defaultFnResult : sql.param(defaultFnResult, col);
              } else {
                defaultValue = sql`null`;
              }
              valueList.push(defaultValue);
            } else {
              valueList.push(colValue);
            }
          }
          valuesSqlList.push(valueList);
          if (valueIndex < values.length - 1) {
            valuesSqlList.push(sql`, `);
          }
        }
        const withSql = this.buildWithCTE(withList);
        const valuesSql = sql.join(valuesSqlList);
        const returningSql = returning ? sql` returning ${this.buildSelection(returning, { isSingleTable: true })}` : void 0;
        const onConflictSql = onConflict ? sql` on conflict ${onConflict}` : void 0;
        return sql`${withSql}insert into ${table} ${insertOrder} values ${valuesSql}${onConflictSql}${returningSql}`;
      }
      sqlToQuery(sql2) {
        return sql2.toQuery({
          escapeName: this.escapeName,
          escapeParam: this.escapeParam,
          escapeString: this.escapeString
        });
      }
      buildRelationalQuery({
        fullSchema,
        schema,
        tableNamesMap,
        table,
        tableConfig,
        queryConfig: config2,
        tableAlias,
        nestedQueryRelation,
        joinOn
      }) {
        let selection = [];
        let limit, offset, orderBy = [], where;
        const joins = [];
        if (config2 === true) {
          const selectionEntries = Object.entries(tableConfig.columns);
          selection = selectionEntries.map(([key, value]) => ({
            dbKey: value.name,
            tsKey: key,
            field: aliasedTableColumn(value, tableAlias),
            relationTableTsKey: void 0,
            isJson: false,
            selection: []
          }));
        } else {
          const aliasedColumns = Object.fromEntries(
            Object.entries(tableConfig.columns).map(([key, value]) => [key, aliasedTableColumn(value, tableAlias)])
          );
          if (config2.where) {
            const whereSql = typeof config2.where === "function" ? config2.where(aliasedColumns, getOperators()) : config2.where;
            where = whereSql && mapColumnsInSQLToAlias(whereSql, tableAlias);
          }
          const fieldsSelection = [];
          let selectedColumns = [];
          if (config2.columns) {
            let isIncludeMode = false;
            for (const [field, value] of Object.entries(config2.columns)) {
              if (value === void 0) {
                continue;
              }
              if (field in tableConfig.columns) {
                if (!isIncludeMode && value === true) {
                  isIncludeMode = true;
                }
                selectedColumns.push(field);
              }
            }
            if (selectedColumns.length > 0) {
              selectedColumns = isIncludeMode ? selectedColumns.filter((c) => config2.columns?.[c] === true) : Object.keys(tableConfig.columns).filter((key) => !selectedColumns.includes(key));
            }
          } else {
            selectedColumns = Object.keys(tableConfig.columns);
          }
          for (const field of selectedColumns) {
            const column = tableConfig.columns[field];
            fieldsSelection.push({ tsKey: field, value: column });
          }
          let selectedRelations = [];
          if (config2.with) {
            selectedRelations = Object.entries(config2.with).filter((entry) => !!entry[1]).map(([tsKey, queryConfig]) => ({ tsKey, queryConfig, relation: tableConfig.relations[tsKey] }));
          }
          let extras;
          if (config2.extras) {
            extras = typeof config2.extras === "function" ? config2.extras(aliasedColumns, { sql }) : config2.extras;
            for (const [tsKey, value] of Object.entries(extras)) {
              fieldsSelection.push({
                tsKey,
                value: mapColumnsInAliasedSQLToAlias(value, tableAlias)
              });
            }
          }
          for (const { tsKey, value } of fieldsSelection) {
            selection.push({
              dbKey: is(value, SQL.Aliased) ? value.fieldAlias : tableConfig.columns[tsKey].name,
              tsKey,
              field: is(value, Column) ? aliasedTableColumn(value, tableAlias) : value,
              relationTableTsKey: void 0,
              isJson: false,
              selection: []
            });
          }
          let orderByOrig = typeof config2.orderBy === "function" ? config2.orderBy(aliasedColumns, getOrderByOperators()) : config2.orderBy ?? [];
          if (!Array.isArray(orderByOrig)) {
            orderByOrig = [orderByOrig];
          }
          orderBy = orderByOrig.map((orderByValue) => {
            if (is(orderByValue, Column)) {
              return aliasedTableColumn(orderByValue, tableAlias);
            }
            return mapColumnsInSQLToAlias(orderByValue, tableAlias);
          });
          limit = config2.limit;
          offset = config2.offset;
          for (const {
            tsKey: selectedRelationTsKey,
            queryConfig: selectedRelationConfigValue,
            relation
          } of selectedRelations) {
            const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
            const relationTableName = relation.referencedTable[Table.Symbol.Name];
            const relationTableTsName = tableNamesMap[relationTableName];
            const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
            const joinOn2 = and(
              ...normalizedRelation.fields.map(
                (field2, i) => eq(
                  aliasedTableColumn(normalizedRelation.references[i], relationTableAlias),
                  aliasedTableColumn(field2, tableAlias)
                )
              )
            );
            const builtRelation = this.buildRelationalQuery({
              fullSchema,
              schema,
              tableNamesMap,
              table: fullSchema[relationTableTsName],
              tableConfig: schema[relationTableTsName],
              queryConfig: is(relation, One) ? selectedRelationConfigValue === true ? { limit: 1 } : { ...selectedRelationConfigValue, limit: 1 } : selectedRelationConfigValue,
              tableAlias: relationTableAlias,
              joinOn: joinOn2,
              nestedQueryRelation: relation
            });
            const field = sql`(${builtRelation.sql})`.as(selectedRelationTsKey);
            selection.push({
              dbKey: selectedRelationTsKey,
              tsKey: selectedRelationTsKey,
              field,
              relationTableTsKey: relationTableTsName,
              isJson: true,
              selection: builtRelation.selection
            });
          }
        }
        if (selection.length === 0) {
          throw new DrizzleError({
            message: `No fields selected for table "${tableConfig.tsName}" ("${tableAlias}"). You need to have at least one item in "columns", "with" or "extras". If you need to select all columns, omit the "columns" key or set it to undefined.`
          });
        }
        let result;
        where = and(joinOn, where);
        if (nestedQueryRelation) {
          let field = sql`json_array(${sql.join(
            selection.map(
              ({ field: field2 }) => is(field2, SQLiteColumn) ? sql.identifier(field2.name) : is(field2, SQL.Aliased) ? field2.sql : field2
            ),
            sql`, `
          )})`;
          if (is(nestedQueryRelation, Many)) {
            field = sql`coalesce(json_group_array(${field}), json_array())`;
          }
          const nestedSelection = [{
            dbKey: "data",
            tsKey: "data",
            field: field.as("data"),
            isJson: true,
            relationTableTsKey: tableConfig.tsName,
            selection
          }];
          const needsSubquery = limit !== void 0 || offset !== void 0 || orderBy.length > 0;
          if (needsSubquery) {
            result = this.buildSelectQuery({
              table: aliasedTable(table, tableAlias),
              fields: {},
              fieldsFlat: [
                {
                  path: [],
                  field: sql.raw("*")
                }
              ],
              where,
              limit,
              offset,
              orderBy,
              setOperators: []
            });
            where = void 0;
            limit = void 0;
            offset = void 0;
            orderBy = void 0;
          } else {
            result = aliasedTable(table, tableAlias);
          }
          result = this.buildSelectQuery({
            table: is(result, SQLiteTable) ? result : new Subquery(result, {}, tableAlias),
            fields: {},
            fieldsFlat: nestedSelection.map(({ field: field2 }) => ({
              path: [],
              field: is(field2, Column) ? aliasedTableColumn(field2, tableAlias) : field2
            })),
            joins,
            where,
            limit,
            offset,
            orderBy,
            setOperators: []
          });
        } else {
          result = this.buildSelectQuery({
            table: aliasedTable(table, tableAlias),
            fields: {},
            fieldsFlat: selection.map(({ field }) => ({
              path: [],
              field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field
            })),
            joins,
            where,
            limit,
            offset,
            orderBy,
            setOperators: []
          });
        }
        return {
          tableTsKey: tableConfig.tsName,
          sql: result,
          selection
        };
      }
    };
    SQLiteSyncDialect = class extends SQLiteDialect {
      static [entityKind] = "SQLiteSyncDialect";
      migrate(migrations, session, config2) {
        const migrationsTable = config2 === void 0 ? "__drizzle_migrations" : typeof config2 === "string" ? "__drizzle_migrations" : config2.migrationsTable ?? "__drizzle_migrations";
        const migrationTableCreate = sql`
			CREATE TABLE IF NOT EXISTS ${sql.identifier(migrationsTable)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at numeric
			)
		`;
        session.run(migrationTableCreate);
        const dbMigrations = session.values(
          sql`SELECT id, hash, created_at FROM ${sql.identifier(migrationsTable)} ORDER BY created_at DESC LIMIT 1`
        );
        const lastDbMigration = dbMigrations[0] ?? void 0;
        session.run(sql`BEGIN`);
        try {
          for (const migration of migrations) {
            if (!lastDbMigration || Number(lastDbMigration[2]) < migration.folderMillis) {
              for (const stmt of migration.sql) {
                session.run(sql.raw(stmt));
              }
              session.run(
                sql`INSERT INTO ${sql.identifier(migrationsTable)} ("hash", "created_at") VALUES(${migration.hash}, ${migration.folderMillis})`
              );
            }
          }
          session.run(sql`COMMIT`);
        } catch (e) {
          session.run(sql`ROLLBACK`);
          throw e;
        }
      }
    };
    SQLiteAsyncDialect = class extends SQLiteDialect {
      static [entityKind] = "SQLiteAsyncDialect";
      async migrate(migrations, session, config2) {
        const migrationsTable = typeof config2 === "string" ? "__drizzle_migrations" : config2.migrationsTable ?? "__drizzle_migrations";
        const migrationTableCreate = sql`
			CREATE TABLE IF NOT EXISTS ${sql.identifier(migrationsTable)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at numeric
			)
		`;
        await session.run(migrationTableCreate);
        const dbMigrations = await session.values(
          sql`SELECT id, hash, created_at FROM ${sql.identifier(migrationsTable)} ORDER BY created_at DESC LIMIT 1`
        );
        const lastDbMigration = dbMigrations[0] ?? void 0;
        await session.transaction(async (tx) => {
          for (const migration of migrations) {
            if (!lastDbMigration || Number(lastDbMigration[2]) < migration.folderMillis) {
              for (const stmt of migration.sql) {
                await tx.run(sql.raw(stmt));
              }
              await tx.run(
                sql`INSERT INTO ${sql.identifier(migrationsTable)} ("hash", "created_at") VALUES(${migration.hash}, ${migration.folderMillis})`
              );
            }
          }
        });
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/query-builders/query-builder.js
var TypedQueryBuilder;
var init_query_builder = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/query-builders/query-builder.js"() {
    init_entity();
    TypedQueryBuilder = class {
      static [entityKind] = "TypedQueryBuilder";
      /** @internal */
      getSelectedFields() {
        return this._.selectedFields;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/select.js
function createSetOperator(type, isAll) {
  return (leftSelect, rightSelect, ...restSelects) => {
    const setOperators = [rightSelect, ...restSelects].map((select) => ({
      type,
      isAll,
      rightSelect: select
    }));
    for (const setOperator of setOperators) {
      if (!haveSameKeys(leftSelect.getSelectedFields(), setOperator.rightSelect.getSelectedFields())) {
        throw new Error(
          "Set operator error (union / intersect / except): selected fields are not the same or are in a different order"
        );
      }
    }
    return leftSelect.addSetOperators(setOperators);
  };
}
var SQLiteSelectBuilder, SQLiteSelectQueryBuilderBase, SQLiteSelectBase, getSQLiteSetOperators, union, unionAll, intersect, except;
var init_select2 = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/select.js"() {
    init_entity();
    init_query_builder();
    init_query_promise();
    init_selection_proxy();
    init_sql();
    init_subquery();
    init_table();
    init_utils();
    init_view_common();
    init_view_base();
    SQLiteSelectBuilder = class {
      static [entityKind] = "SQLiteSelectBuilder";
      fields;
      session;
      dialect;
      withList;
      distinct;
      constructor(config2) {
        this.fields = config2.fields;
        this.session = config2.session;
        this.dialect = config2.dialect;
        this.withList = config2.withList;
        this.distinct = config2.distinct;
      }
      from(source) {
        const isPartialSelect = !!this.fields;
        let fields;
        if (this.fields) {
          fields = this.fields;
        } else if (is(source, Subquery)) {
          fields = Object.fromEntries(
            Object.keys(source[SubqueryConfig].selection).map((key) => [key, source[key]])
          );
        } else if (is(source, SQLiteViewBase)) {
          fields = source[ViewBaseConfig].selectedFields;
        } else if (is(source, SQL)) {
          fields = {};
        } else {
          fields = getTableColumns(source);
        }
        return new SQLiteSelectBase({
          table: source,
          fields,
          isPartialSelect,
          session: this.session,
          dialect: this.dialect,
          withList: this.withList,
          distinct: this.distinct
        });
      }
    };
    SQLiteSelectQueryBuilderBase = class extends TypedQueryBuilder {
      static [entityKind] = "SQLiteSelectQueryBuilder";
      _;
      /** @internal */
      config;
      joinsNotNullableMap;
      tableName;
      isPartialSelect;
      session;
      dialect;
      constructor({ table, fields, isPartialSelect, session, dialect, withList, distinct }) {
        super();
        this.config = {
          withList,
          table,
          fields: { ...fields },
          distinct,
          setOperators: []
        };
        this.isPartialSelect = isPartialSelect;
        this.session = session;
        this.dialect = dialect;
        this._ = {
          selectedFields: fields
        };
        this.tableName = getTableLikeName(table);
        this.joinsNotNullableMap = typeof this.tableName === "string" ? { [this.tableName]: true } : {};
      }
      createJoin(joinType) {
        return (table, on) => {
          const baseTableName = this.tableName;
          const tableName = getTableLikeName(table);
          if (typeof tableName === "string" && this.config.joins?.some((join) => join.alias === tableName)) {
            throw new Error(`Alias "${tableName}" is already used in this query`);
          }
          if (!this.isPartialSelect) {
            if (Object.keys(this.joinsNotNullableMap).length === 1 && typeof baseTableName === "string") {
              this.config.fields = {
                [baseTableName]: this.config.fields
              };
            }
            if (typeof tableName === "string" && !is(table, SQL)) {
              const selection = is(table, Subquery) ? table[SubqueryConfig].selection : is(table, View) ? table[ViewBaseConfig].selectedFields : table[Table.Symbol.Columns];
              this.config.fields[tableName] = selection;
            }
          }
          if (typeof on === "function") {
            on = on(
              new Proxy(
                this.config.fields,
                new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
              )
            );
          }
          if (!this.config.joins) {
            this.config.joins = [];
          }
          this.config.joins.push({ on, table, joinType, alias: tableName });
          if (typeof tableName === "string") {
            switch (joinType) {
              case "left": {
                this.joinsNotNullableMap[tableName] = false;
                break;
              }
              case "right": {
                this.joinsNotNullableMap = Object.fromEntries(
                  Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false])
                );
                this.joinsNotNullableMap[tableName] = true;
                break;
              }
              case "inner": {
                this.joinsNotNullableMap[tableName] = true;
                break;
              }
              case "full": {
                this.joinsNotNullableMap = Object.fromEntries(
                  Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false])
                );
                this.joinsNotNullableMap[tableName] = false;
                break;
              }
            }
          }
          return this;
        };
      }
      /**
       * Executes a `left join` operation by adding another table to the current query.
       *
       * Calling this method associates each row of the table with the corresponding row from the joined table, if a match is found. If no matching row exists, it sets all columns of the joined table to null.
       *
       * See docs: {@link https://orm.drizzle.team/docs/joins#left-join}
       *
       * @param table the table to join.
       * @param on the `on` clause.
       *
       * @example
       *
       * ```ts
       * // Select all users and their pets
       * const usersWithPets: { user: User; pets: Pet | null }[] = await db.select()
       *   .from(users)
       *   .leftJoin(pets, eq(users.id, pets.ownerId))
       *
       * // Select userId and petId
       * const usersIdsAndPetIds: { userId: number; petId: number | null }[] = await db.select({
       *   userId: users.id,
       *   petId: pets.id,
       * })
       *   .from(users)
       *   .leftJoin(pets, eq(users.id, pets.ownerId))
       * ```
       */
      leftJoin = this.createJoin("left");
      /**
       * Executes a `right join` operation by adding another table to the current query.
       *
       * Calling this method associates each row of the joined table with the corresponding row from the main table, if a match is found. If no matching row exists, it sets all columns of the main table to null.
       *
       * See docs: {@link https://orm.drizzle.team/docs/joins#right-join}
       *
       * @param table the table to join.
       * @param on the `on` clause.
       *
       * @example
       *
       * ```ts
       * // Select all users and their pets
       * const usersWithPets: { user: User | null; pets: Pet }[] = await db.select()
       *   .from(users)
       *   .rightJoin(pets, eq(users.id, pets.ownerId))
       *
       * // Select userId and petId
       * const usersIdsAndPetIds: { userId: number | null; petId: number }[] = await db.select({
       *   userId: users.id,
       *   petId: pets.id,
       * })
       *   .from(users)
       *   .rightJoin(pets, eq(users.id, pets.ownerId))
       * ```
       */
      rightJoin = this.createJoin("right");
      /**
       * Executes an `inner join` operation, creating a new table by combining rows from two tables that have matching values.
       *
       * Calling this method retrieves rows that have corresponding entries in both joined tables. Rows without matching entries in either table are excluded, resulting in a table that includes only matching pairs.
       *
       * See docs: {@link https://orm.drizzle.team/docs/joins#inner-join}
       *
       * @param table the table to join.
       * @param on the `on` clause.
       *
       * @example
       *
       * ```ts
       * // Select all users and their pets
       * const usersWithPets: { user: User; pets: Pet }[] = await db.select()
       *   .from(users)
       *   .innerJoin(pets, eq(users.id, pets.ownerId))
       *
       * // Select userId and petId
       * const usersIdsAndPetIds: { userId: number; petId: number }[] = await db.select({
       *   userId: users.id,
       *   petId: pets.id,
       * })
       *   .from(users)
       *   .innerJoin(pets, eq(users.id, pets.ownerId))
       * ```
       */
      innerJoin = this.createJoin("inner");
      /**
       * Executes a `full join` operation by combining rows from two tables into a new table.
       *
       * Calling this method retrieves all rows from both main and joined tables, merging rows with matching values and filling in `null` for non-matching columns.
       *
       * See docs: {@link https://orm.drizzle.team/docs/joins#full-join}
       *
       * @param table the table to join.
       * @param on the `on` clause.
       *
       * @example
       *
       * ```ts
       * // Select all users and their pets
       * const usersWithPets: { user: User | null; pets: Pet | null }[] = await db.select()
       *   .from(users)
       *   .fullJoin(pets, eq(users.id, pets.ownerId))
       *
       * // Select userId and petId
       * const usersIdsAndPetIds: { userId: number | null; petId: number | null }[] = await db.select({
       *   userId: users.id,
       *   petId: pets.id,
       * })
       *   .from(users)
       *   .fullJoin(pets, eq(users.id, pets.ownerId))
       * ```
       */
      fullJoin = this.createJoin("full");
      createSetOperator(type, isAll) {
        return (rightSelection) => {
          const rightSelect = typeof rightSelection === "function" ? rightSelection(getSQLiteSetOperators()) : rightSelection;
          if (!haveSameKeys(this.getSelectedFields(), rightSelect.getSelectedFields())) {
            throw new Error(
              "Set operator error (union / intersect / except): selected fields are not the same or are in a different order"
            );
          }
          this.config.setOperators.push({ type, isAll, rightSelect });
          return this;
        };
      }
      /**
       * Adds `union` set operator to the query.
       *
       * Calling this method will combine the result sets of the `select` statements and remove any duplicate rows that appear across them.
       *
       * See docs: {@link https://orm.drizzle.team/docs/set-operations#union}
       *
       * @example
       *
       * ```ts
       * // Select all unique names from customers and users tables
       * await db.select({ name: users.name })
       *   .from(users)
       *   .union(
       *     db.select({ name: customers.name }).from(customers)
       *   );
       * // or
       * import { union } from 'drizzle-orm/sqlite-core'
       *
       * await union(
       *   db.select({ name: users.name }).from(users),
       *   db.select({ name: customers.name }).from(customers)
       * );
       * ```
       */
      union = this.createSetOperator("union", false);
      /**
       * Adds `union all` set operator to the query.
       *
       * Calling this method will combine the result-set of the `select` statements and keep all duplicate rows that appear across them.
       *
       * See docs: {@link https://orm.drizzle.team/docs/set-operations#union-all}
       *
       * @example
       *
       * ```ts
       * // Select all transaction ids from both online and in-store sales
       * await db.select({ transaction: onlineSales.transactionId })
       *   .from(onlineSales)
       *   .unionAll(
       *     db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
       *   );
       * // or
       * import { unionAll } from 'drizzle-orm/sqlite-core'
       *
       * await unionAll(
       *   db.select({ transaction: onlineSales.transactionId }).from(onlineSales),
       *   db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
       * );
       * ```
       */
      unionAll = this.createSetOperator("union", true);
      /**
       * Adds `intersect` set operator to the query.
       *
       * Calling this method will retain only the rows that are present in both result sets and eliminate duplicates.
       *
       * See docs: {@link https://orm.drizzle.team/docs/set-operations#intersect}
       *
       * @example
       *
       * ```ts
       * // Select course names that are offered in both departments A and B
       * await db.select({ courseName: depA.courseName })
       *   .from(depA)
       *   .intersect(
       *     db.select({ courseName: depB.courseName }).from(depB)
       *   );
       * // or
       * import { intersect } from 'drizzle-orm/sqlite-core'
       *
       * await intersect(
       *   db.select({ courseName: depA.courseName }).from(depA),
       *   db.select({ courseName: depB.courseName }).from(depB)
       * );
       * ```
       */
      intersect = this.createSetOperator("intersect", false);
      /**
       * Adds `except` set operator to the query.
       *
       * Calling this method will retrieve all unique rows from the left query, except for the rows that are present in the result set of the right query.
       *
       * See docs: {@link https://orm.drizzle.team/docs/set-operations#except}
       *
       * @example
       *
       * ```ts
       * // Select all courses offered in department A but not in department B
       * await db.select({ courseName: depA.courseName })
       *   .from(depA)
       *   .except(
       *     db.select({ courseName: depB.courseName }).from(depB)
       *   );
       * // or
       * import { except } from 'drizzle-orm/sqlite-core'
       *
       * await except(
       *   db.select({ courseName: depA.courseName }).from(depA),
       *   db.select({ courseName: depB.courseName }).from(depB)
       * );
       * ```
       */
      except = this.createSetOperator("except", false);
      /** @internal */
      addSetOperators(setOperators) {
        this.config.setOperators.push(...setOperators);
        return this;
      }
      /**
       * Adds a `where` clause to the query.
       *
       * Calling this method will select only those rows that fulfill a specified condition.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#filtering}
       *
       * @param where the `where` clause.
       *
       * @example
       * You can use conditional operators and `sql function` to filter the rows to be selected.
       *
       * ```ts
       * // Select all cars with green color
       * await db.select().from(cars).where(eq(cars.color, 'green'));
       * // or
       * await db.select().from(cars).where(sql`${cars.color} = 'green'`)
       * ```
       *
       * You can logically combine conditional operators with `and()` and `or()` operators:
       *
       * ```ts
       * // Select all BMW cars with a green color
       * await db.select().from(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
       *
       * // Select all cars with the green or blue color
       * await db.select().from(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
       * ```
       */
      where(where) {
        if (typeof where === "function") {
          where = where(
            new Proxy(
              this.config.fields,
              new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
            )
          );
        }
        this.config.where = where;
        return this;
      }
      /**
       * Adds a `having` clause to the query.
       *
       * Calling this method will select only those rows that fulfill a specified condition. It is typically used with aggregate functions to filter the aggregated data based on a specified condition.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#aggregations}
       *
       * @param having the `having` clause.
       *
       * @example
       *
       * ```ts
       * // Select all brands with more than one car
       * await db.select({
       * 	brand: cars.brand,
       * 	count: sql<number>`cast(count(${cars.id}) as int)`,
       * })
       *   .from(cars)
       *   .groupBy(cars.brand)
       *   .having(({ count }) => gt(count, 1));
       * ```
       */
      having(having) {
        if (typeof having === "function") {
          having = having(
            new Proxy(
              this.config.fields,
              new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
            )
          );
        }
        this.config.having = having;
        return this;
      }
      groupBy(...columns) {
        if (typeof columns[0] === "function") {
          const groupBy = columns[0](
            new Proxy(
              this.config.fields,
              new SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })
            )
          );
          this.config.groupBy = Array.isArray(groupBy) ? groupBy : [groupBy];
        } else {
          this.config.groupBy = columns;
        }
        return this;
      }
      orderBy(...columns) {
        if (typeof columns[0] === "function") {
          const orderBy = columns[0](
            new Proxy(
              this.config.fields,
              new SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })
            )
          );
          const orderByArray = Array.isArray(orderBy) ? orderBy : [orderBy];
          if (this.config.setOperators.length > 0) {
            this.config.setOperators.at(-1).orderBy = orderByArray;
          } else {
            this.config.orderBy = orderByArray;
          }
        } else {
          const orderByArray = columns;
          if (this.config.setOperators.length > 0) {
            this.config.setOperators.at(-1).orderBy = orderByArray;
          } else {
            this.config.orderBy = orderByArray;
          }
        }
        return this;
      }
      /**
       * Adds a `limit` clause to the query.
       *
       * Calling this method will set the maximum number of rows that will be returned by this query.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
       *
       * @param limit the `limit` clause.
       *
       * @example
       *
       * ```ts
       * // Get the first 10 people from this query.
       * await db.select().from(people).limit(10);
       * ```
       */
      limit(limit) {
        if (this.config.setOperators.length > 0) {
          this.config.setOperators.at(-1).limit = limit;
        } else {
          this.config.limit = limit;
        }
        return this;
      }
      /**
       * Adds an `offset` clause to the query.
       *
       * Calling this method will skip a number of rows when returning results from this query.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
       *
       * @param offset the `offset` clause.
       *
       * @example
       *
       * ```ts
       * // Get the 10th-20th people from this query.
       * await db.select().from(people).offset(10).limit(10);
       * ```
       */
      offset(offset) {
        if (this.config.setOperators.length > 0) {
          this.config.setOperators.at(-1).offset = offset;
        } else {
          this.config.offset = offset;
        }
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildSelectQuery(this.config);
      }
      toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
      }
      as(alias) {
        return new Proxy(
          new Subquery(this.getSQL(), this.config.fields, alias),
          new SelectionProxyHandler({ alias, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
        );
      }
      /** @internal */
      getSelectedFields() {
        return new Proxy(
          this.config.fields,
          new SelectionProxyHandler({ alias: this.tableName, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
        );
      }
      $dynamic() {
        return this;
      }
    };
    SQLiteSelectBase = class extends SQLiteSelectQueryBuilderBase {
      static [entityKind] = "SQLiteSelect";
      /** @internal */
      _prepare(isOneTimeQuery = true) {
        if (!this.session) {
          throw new Error("Cannot execute a query on a query builder. Please use a database instance instead.");
        }
        const fieldsList = orderSelectedFields(this.config.fields);
        const query = this.session[isOneTimeQuery ? "prepareOneTimeQuery" : "prepareQuery"](
          this.dialect.sqlToQuery(this.getSQL()),
          fieldsList,
          "all"
        );
        query.joinsNotNullableMap = this.joinsNotNullableMap;
        return query;
      }
      prepare() {
        return this._prepare(false);
      }
      run = (placeholderValues) => {
        return this._prepare().run(placeholderValues);
      };
      all = (placeholderValues) => {
        return this._prepare().all(placeholderValues);
      };
      get = (placeholderValues) => {
        return this._prepare().get(placeholderValues);
      };
      values = (placeholderValues) => {
        return this._prepare().values(placeholderValues);
      };
      async execute() {
        return this.all();
      }
    };
    applyMixins(SQLiteSelectBase, [QueryPromise]);
    getSQLiteSetOperators = () => ({
      union,
      unionAll,
      intersect,
      except
    });
    union = createSetOperator("union", false);
    unionAll = createSetOperator("union", true);
    intersect = createSetOperator("intersect", false);
    except = createSetOperator("except", false);
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/query-builder.js
var QueryBuilder;
var init_query_builder2 = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/query-builder.js"() {
    init_entity();
    init_dialect();
    init_select2();
    init_subquery();
    init_selection_proxy();
    QueryBuilder = class {
      static [entityKind] = "SQLiteQueryBuilder";
      dialect;
      $with(alias) {
        const queryBuilder = this;
        return {
          as(qb) {
            if (typeof qb === "function") {
              qb = qb(queryBuilder);
            }
            return new Proxy(
              new WithSubquery(qb.getSQL(), qb.getSelectedFields(), alias, true),
              new SelectionProxyHandler({ alias, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
            );
          }
        };
      }
      with(...queries) {
        const self2 = this;
        function select(fields) {
          return new SQLiteSelectBuilder({
            fields: fields ?? void 0,
            session: void 0,
            dialect: self2.getDialect(),
            withList: queries
          });
        }
        function selectDistinct(fields) {
          return new SQLiteSelectBuilder({
            fields: fields ?? void 0,
            session: void 0,
            dialect: self2.getDialect(),
            withList: queries,
            distinct: true
          });
        }
        return { select, selectDistinct };
      }
      select(fields) {
        return new SQLiteSelectBuilder({ fields: fields ?? void 0, session: void 0, dialect: this.getDialect() });
      }
      selectDistinct(fields) {
        return new SQLiteSelectBuilder({
          fields: fields ?? void 0,
          session: void 0,
          dialect: this.getDialect(),
          distinct: true
        });
      }
      // Lazy load dialect to avoid circular dependency
      getDialect() {
        if (!this.dialect) {
          this.dialect = new SQLiteSyncDialect();
        }
        return this.dialect;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/select.types.js
var init_select_types = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/select.types.js"() {
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/update.js
var SQLiteUpdateBuilder, SQLiteUpdateBase;
var init_update = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/update.js"() {
    init_entity();
    init_query_promise();
    init_table3();
    init_utils();
    SQLiteUpdateBuilder = class {
      constructor(table, session, dialect, withList) {
        this.table = table;
        this.session = session;
        this.dialect = dialect;
        this.withList = withList;
      }
      static [entityKind] = "SQLiteUpdateBuilder";
      set(values) {
        return new SQLiteUpdateBase(
          this.table,
          mapUpdateSet(this.table, values),
          this.session,
          this.dialect,
          this.withList
        );
      }
    };
    SQLiteUpdateBase = class extends QueryPromise {
      constructor(table, set2, session, dialect, withList) {
        super();
        this.session = session;
        this.dialect = dialect;
        this.config = { set: set2, table, withList };
      }
      static [entityKind] = "SQLiteUpdate";
      /** @internal */
      config;
      /**
       * Adds a 'where' clause to the query.
       *
       * Calling this method will update only those rows that fulfill a specified condition.
       *
       * See docs: {@link https://orm.drizzle.team/docs/update}
       *
       * @param where the 'where' clause.
       *
       * @example
       * You can use conditional operators and `sql function` to filter the rows to be updated.
       *
       * ```ts
       * // Update all cars with green color
       * db.update(cars).set({ color: 'red' })
       *   .where(eq(cars.color, 'green'));
       * // or
       * db.update(cars).set({ color: 'red' })
       *   .where(sql`${cars.color} = 'green'`)
       * ```
       *
       * You can logically combine conditional operators with `and()` and `or()` operators:
       *
       * ```ts
       * // Update all BMW cars with a green color
       * db.update(cars).set({ color: 'red' })
       *   .where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
       *
       * // Update all cars with the green or blue color
       * db.update(cars).set({ color: 'red' })
       *   .where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
       * ```
       */
      where(where) {
        this.config.where = where;
        return this;
      }
      returning(fields = this.config.table[SQLiteTable.Symbol.Columns]) {
        this.config.returning = orderSelectedFields(fields);
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildUpdateQuery(this.config);
      }
      toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
      }
      /** @internal */
      _prepare(isOneTimeQuery = true) {
        return this.session[isOneTimeQuery ? "prepareOneTimeQuery" : "prepareQuery"](
          this.dialect.sqlToQuery(this.getSQL()),
          this.config.returning,
          this.config.returning ? "all" : "run"
        );
      }
      prepare() {
        return this._prepare(false);
      }
      run = (placeholderValues) => {
        return this._prepare().run(placeholderValues);
      };
      all = (placeholderValues) => {
        return this._prepare().all(placeholderValues);
      };
      get = (placeholderValues) => {
        return this._prepare().get(placeholderValues);
      };
      values = (placeholderValues) => {
        return this._prepare().values(placeholderValues);
      };
      async execute() {
        return this.config.returning ? this.all() : this.run();
      }
      $dynamic() {
        return this;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/index.js
var init_query_builders = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/index.js"() {
    init_delete();
    init_insert();
    init_query_builder2();
    init_select2();
    init_select_types();
    init_update();
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/query.js
var RelationalQueryBuilder, SQLiteRelationalQuery, SQLiteSyncRelationalQuery;
var init_query = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/query.js"() {
    init_entity();
    init_query_promise();
    init_relations();
    RelationalQueryBuilder = class {
      constructor(mode, fullSchema, schema, tableNamesMap, table, tableConfig, dialect, session) {
        this.mode = mode;
        this.fullSchema = fullSchema;
        this.schema = schema;
        this.tableNamesMap = tableNamesMap;
        this.table = table;
        this.tableConfig = tableConfig;
        this.dialect = dialect;
        this.session = session;
      }
      static [entityKind] = "SQLiteAsyncRelationalQueryBuilder";
      findMany(config2) {
        return this.mode === "sync" ? new SQLiteSyncRelationalQuery(
          this.fullSchema,
          this.schema,
          this.tableNamesMap,
          this.table,
          this.tableConfig,
          this.dialect,
          this.session,
          config2 ? config2 : {},
          "many"
        ) : new SQLiteRelationalQuery(
          this.fullSchema,
          this.schema,
          this.tableNamesMap,
          this.table,
          this.tableConfig,
          this.dialect,
          this.session,
          config2 ? config2 : {},
          "many"
        );
      }
      findFirst(config2) {
        return this.mode === "sync" ? new SQLiteSyncRelationalQuery(
          this.fullSchema,
          this.schema,
          this.tableNamesMap,
          this.table,
          this.tableConfig,
          this.dialect,
          this.session,
          config2 ? { ...config2, limit: 1 } : { limit: 1 },
          "first"
        ) : new SQLiteRelationalQuery(
          this.fullSchema,
          this.schema,
          this.tableNamesMap,
          this.table,
          this.tableConfig,
          this.dialect,
          this.session,
          config2 ? { ...config2, limit: 1 } : { limit: 1 },
          "first"
        );
      }
    };
    SQLiteRelationalQuery = class extends QueryPromise {
      constructor(fullSchema, schema, tableNamesMap, table, tableConfig, dialect, session, config2, mode) {
        super();
        this.fullSchema = fullSchema;
        this.schema = schema;
        this.tableNamesMap = tableNamesMap;
        this.table = table;
        this.tableConfig = tableConfig;
        this.dialect = dialect;
        this.session = session;
        this.config = config2;
        this.mode = mode;
      }
      static [entityKind] = "SQLiteAsyncRelationalQuery";
      /** @internal */
      mode;
      /** @internal */
      getSQL() {
        return this.dialect.buildRelationalQuery({
          fullSchema: this.fullSchema,
          schema: this.schema,
          tableNamesMap: this.tableNamesMap,
          table: this.table,
          tableConfig: this.tableConfig,
          queryConfig: this.config,
          tableAlias: this.tableConfig.tsName
        }).sql;
      }
      /** @internal */
      _prepare(isOneTimeQuery = false) {
        const { query, builtQuery } = this._toSQL();
        return this.session[isOneTimeQuery ? "prepareOneTimeQuery" : "prepareQuery"](
          builtQuery,
          void 0,
          this.mode === "first" ? "get" : "all",
          (rawRows, mapColumnValue) => {
            const rows = rawRows.map(
              (row) => mapRelationalRow(this.schema, this.tableConfig, row, query.selection, mapColumnValue)
            );
            if (this.mode === "first") {
              return rows[0];
            }
            return rows;
          }
        );
      }
      prepare() {
        return this._prepare(false);
      }
      _toSQL() {
        const query = this.dialect.buildRelationalQuery({
          fullSchema: this.fullSchema,
          schema: this.schema,
          tableNamesMap: this.tableNamesMap,
          table: this.table,
          tableConfig: this.tableConfig,
          queryConfig: this.config,
          tableAlias: this.tableConfig.tsName
        });
        const builtQuery = this.dialect.sqlToQuery(query.sql);
        return { query, builtQuery };
      }
      toSQL() {
        return this._toSQL().builtQuery;
      }
      /** @internal */
      executeRaw() {
        if (this.mode === "first") {
          return this._prepare(false).get();
        }
        return this._prepare(false).all();
      }
      async execute() {
        return this.executeRaw();
      }
    };
    SQLiteSyncRelationalQuery = class extends SQLiteRelationalQuery {
      static [entityKind] = "SQLiteSyncRelationalQuery";
      sync() {
        return this.executeRaw();
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/raw.js
var SQLiteRaw;
var init_raw = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/query-builders/raw.js"() {
    init_entity();
    init_query_promise();
    SQLiteRaw = class extends QueryPromise {
      constructor(execute, getSQL, action, dialect, mapBatchResult) {
        super();
        this.execute = execute;
        this.getSQL = getSQL;
        this.dialect = dialect;
        this.mapBatchResult = mapBatchResult;
        this.config = { action };
      }
      static [entityKind] = "SQLiteRaw";
      /** @internal */
      config;
      getQuery() {
        return { ...this.dialect.sqlToQuery(this.getSQL()), method: this.config.action };
      }
      mapResult(result, isFromBatch) {
        return isFromBatch ? this.mapBatchResult(result) : result;
      }
      _prepare() {
        return this;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/db.js
var BaseSQLiteDatabase;
var init_db = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/db.js"() {
    init_entity();
    init_selection_proxy();
    init_query_builders();
    init_subquery();
    init_query();
    init_raw();
    BaseSQLiteDatabase = class {
      constructor(resultKind, dialect, session, schema) {
        this.resultKind = resultKind;
        this.dialect = dialect;
        this.session = session;
        this._ = schema ? { schema: schema.schema, tableNamesMap: schema.tableNamesMap } : { schema: void 0, tableNamesMap: {} };
        this.query = {};
        const query = this.query;
        if (this._.schema) {
          for (const [tableName, columns] of Object.entries(this._.schema)) {
            query[tableName] = new RelationalQueryBuilder(
              resultKind,
              schema.fullSchema,
              this._.schema,
              this._.tableNamesMap,
              schema.fullSchema[tableName],
              columns,
              dialect,
              session
            );
          }
        }
      }
      static [entityKind] = "BaseSQLiteDatabase";
      query;
      /**
       * Creates a subquery that defines a temporary named result set as a CTE.
       *
       * It is useful for breaking down complex queries into simpler parts and for reusing the result set in subsequent parts of the query.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#with-clause}
       *
       * @param alias The alias for the subquery.
       *
       * Failure to provide an alias will result in a DrizzleTypeError, preventing the subquery from being referenced in other queries.
       *
       * @example
       *
       * ```ts
       * // Create a subquery with alias 'sq' and use it in the select query
       * const sq = db.$with('sq').as(db.select().from(users).where(eq(users.id, 42)));
       *
       * const result = await db.with(sq).select().from(sq);
       * ```
       *
       * To select arbitrary SQL values as fields in a CTE and reference them in other CTEs or in the main query, you need to add aliases to them:
       *
       * ```ts
       * // Select an arbitrary SQL value as a field in a CTE and reference it in the main query
       * const sq = db.$with('sq').as(db.select({
       *   name: sql<string>`upper(${users.name})`.as('name'),
       * })
       * .from(users));
       *
       * const result = await db.with(sq).select({ name: sq.name }).from(sq);
       * ```
       */
      $with(alias) {
        return {
          as(qb) {
            if (typeof qb === "function") {
              qb = qb(new QueryBuilder());
            }
            return new Proxy(
              new WithSubquery(qb.getSQL(), qb.getSelectedFields(), alias, true),
              new SelectionProxyHandler({ alias, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
            );
          }
        };
      }
      /**
       * Incorporates a previously defined CTE (using `$with`) into the main query.
       *
       * This method allows the main query to reference a temporary named result set.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#with-clause}
       *
       * @param queries The CTEs to incorporate into the main query.
       *
       * @example
       *
       * ```ts
       * // Define a subquery 'sq' as a CTE using $with
       * const sq = db.$with('sq').as(db.select().from(users).where(eq(users.id, 42)));
       *
       * // Incorporate the CTE 'sq' into the main query and select from it
       * const result = await db.with(sq).select().from(sq);
       * ```
       */
      with(...queries) {
        const self2 = this;
        function select(fields) {
          return new SQLiteSelectBuilder({
            fields: fields ?? void 0,
            session: self2.session,
            dialect: self2.dialect,
            withList: queries
          });
        }
        function selectDistinct(fields) {
          return new SQLiteSelectBuilder({
            fields: fields ?? void 0,
            session: self2.session,
            dialect: self2.dialect,
            withList: queries,
            distinct: true
          });
        }
        function update(table) {
          return new SQLiteUpdateBuilder(table, self2.session, self2.dialect, queries);
        }
        function insert(into) {
          return new SQLiteInsertBuilder(into, self2.session, self2.dialect, queries);
        }
        function delete_(from) {
          return new SQLiteDeleteBase(from, self2.session, self2.dialect, queries);
        }
        return { select, selectDistinct, update, insert, delete: delete_ };
      }
      select(fields) {
        return new SQLiteSelectBuilder({ fields: fields ?? void 0, session: this.session, dialect: this.dialect });
      }
      selectDistinct(fields) {
        return new SQLiteSelectBuilder({
          fields: fields ?? void 0,
          session: this.session,
          dialect: this.dialect,
          distinct: true
        });
      }
      /**
       * Creates an update query.
       *
       * Calling this method without `.where()` clause will update all rows in a table. The `.where()` clause specifies which rows should be updated.
       *
       * Use `.set()` method to specify which values to update.
       *
       * See docs: {@link https://orm.drizzle.team/docs/update}
       *
       * @param table The table to update.
       *
       * @example
       *
       * ```ts
       * // Update all rows in the 'cars' table
       * await db.update(cars).set({ color: 'red' });
       *
       * // Update rows with filters and conditions
       * await db.update(cars).set({ color: 'red' }).where(eq(cars.brand, 'BMW'));
       *
       * // Update with returning clause
       * const updatedCar: Car[] = await db.update(cars)
       *   .set({ color: 'red' })
       *   .where(eq(cars.id, 1))
       *   .returning();
       * ```
       */
      update(table) {
        return new SQLiteUpdateBuilder(table, this.session, this.dialect);
      }
      /**
       * Creates an insert query.
       *
       * Calling this method will create new rows in a table. Use `.values()` method to specify which values to insert.
       *
       * See docs: {@link https://orm.drizzle.team/docs/insert}
       *
       * @param table The table to insert into.
       *
       * @example
       *
       * ```ts
       * // Insert one row
       * await db.insert(cars).values({ brand: 'BMW' });
       *
       * // Insert multiple rows
       * await db.insert(cars).values([{ brand: 'BMW' }, { brand: 'Porsche' }]);
       *
       * // Insert with returning clause
       * const insertedCar: Car[] = await db.insert(cars)
       *   .values({ brand: 'BMW' })
       *   .returning();
       * ```
       */
      insert(into) {
        return new SQLiteInsertBuilder(into, this.session, this.dialect);
      }
      /**
       * Creates a delete query.
       *
       * Calling this method without `.where()` clause will delete all rows in a table. The `.where()` clause specifies which rows should be deleted.
       *
       * See docs: {@link https://orm.drizzle.team/docs/delete}
       *
       * @param table The table to delete from.
       *
       * @example
       *
       * ```ts
       * // Delete all rows in the 'cars' table
       * await db.delete(cars);
       *
       * // Delete rows with filters and conditions
       * await db.delete(cars).where(eq(cars.color, 'green'));
       *
       * // Delete with returning clause
       * const deletedCar: Car[] = await db.delete(cars)
       *   .where(eq(cars.id, 1))
       *   .returning();
       * ```
       */
      delete(from) {
        return new SQLiteDeleteBase(from, this.session, this.dialect);
      }
      run(query) {
        const sql2 = query.getSQL();
        if (this.resultKind === "async") {
          return new SQLiteRaw(
            async () => this.session.run(sql2),
            () => sql2,
            "run",
            this.dialect,
            this.session.extractRawRunValueFromBatchResult.bind(this.session)
          );
        }
        return this.session.run(sql2);
      }
      all(query) {
        const sql2 = query.getSQL();
        if (this.resultKind === "async") {
          return new SQLiteRaw(
            async () => this.session.all(sql2),
            () => sql2,
            "all",
            this.dialect,
            this.session.extractRawAllValueFromBatchResult.bind(this.session)
          );
        }
        return this.session.all(sql2);
      }
      get(query) {
        const sql2 = query.getSQL();
        if (this.resultKind === "async") {
          return new SQLiteRaw(
            async () => this.session.get(sql2),
            () => sql2,
            "get",
            this.dialect,
            this.session.extractRawGetValueFromBatchResult.bind(this.session)
          );
        }
        return this.session.get(sql2);
      }
      values(query) {
        const sql2 = query.getSQL();
        if (this.resultKind === "async") {
          return new SQLiteRaw(
            async () => this.session.values(sql2),
            () => sql2,
            "values",
            this.dialect,
            this.session.extractRawValuesValueFromBatchResult.bind(this.session)
          );
        }
        return this.session.values(sql2);
      }
      transaction(transaction, config2) {
        return this.session.transaction(transaction, config2);
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/indexes.js
function index(name) {
  return new IndexBuilderOn(name, false);
}
var IndexBuilderOn, IndexBuilder, Index;
var init_indexes = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/indexes.js"() {
    init_entity();
    IndexBuilderOn = class {
      constructor(name, unique) {
        this.name = name;
        this.unique = unique;
      }
      static [entityKind] = "SQLiteIndexBuilderOn";
      on(...columns) {
        return new IndexBuilder(this.name, columns, this.unique);
      }
    };
    IndexBuilder = class {
      static [entityKind] = "SQLiteIndexBuilder";
      /** @internal */
      config;
      constructor(name, columns, unique) {
        this.config = {
          name,
          columns,
          unique,
          where: void 0
        };
      }
      /**
       * Condition for partial index.
       */
      where(condition) {
        this.config.where = condition;
        return this;
      }
      /** @internal */
      build(table) {
        return new Index(this.config, table);
      }
    };
    Index = class {
      static [entityKind] = "SQLiteIndex";
      config;
      constructor(config2, table) {
        this.config = { ...config2, table };
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/primary-keys.js
var PrimaryKeyBuilder2, PrimaryKey2;
var init_primary_keys2 = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/primary-keys.js"() {
    init_entity();
    init_table3();
    PrimaryKeyBuilder2 = class {
      static [entityKind] = "SQLitePrimaryKeyBuilder";
      /** @internal */
      columns;
      /** @internal */
      name;
      constructor(columns, name) {
        this.columns = columns;
        this.name = name;
      }
      /** @internal */
      build(table) {
        return new PrimaryKey2(table, this.columns, this.name);
      }
    };
    PrimaryKey2 = class {
      constructor(table, columns, name) {
        this.table = table;
        this.columns = columns;
        this.name = name;
      }
      static [entityKind] = "SQLitePrimaryKey";
      columns;
      name;
      getName() {
        return this.name ?? `${this.table[SQLiteTable.Symbol.Name]}_${this.columns.map((column) => column.name).join("_")}_pk`;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/session.js
var ExecuteResultSync, SQLitePreparedQuery, SQLiteSession, SQLiteTransaction;
var init_session = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/session.js"() {
    init_entity();
    init_errors();
    init_drizzle_orm();
    init_db();
    ExecuteResultSync = class extends QueryPromise {
      constructor(resultCb) {
        super();
        this.resultCb = resultCb;
      }
      static [entityKind] = "ExecuteResultSync";
      async execute() {
        return this.resultCb();
      }
      sync() {
        return this.resultCb();
      }
    };
    SQLitePreparedQuery = class {
      constructor(mode, executeMethod, query) {
        this.mode = mode;
        this.executeMethod = executeMethod;
        this.query = query;
      }
      static [entityKind] = "PreparedQuery";
      /** @internal */
      joinsNotNullableMap;
      getQuery() {
        return this.query;
      }
      mapRunResult(result, _isFromBatch) {
        return result;
      }
      mapAllResult(_result, _isFromBatch) {
        throw new Error("Not implemented");
      }
      mapGetResult(_result, _isFromBatch) {
        throw new Error("Not implemented");
      }
      execute(placeholderValues) {
        if (this.mode === "async") {
          return this[this.executeMethod](placeholderValues);
        }
        return new ExecuteResultSync(() => this[this.executeMethod](placeholderValues));
      }
      mapResult(response, isFromBatch) {
        switch (this.executeMethod) {
          case "run": {
            return this.mapRunResult(response, isFromBatch);
          }
          case "all": {
            return this.mapAllResult(response, isFromBatch);
          }
          case "get": {
            return this.mapGetResult(response, isFromBatch);
          }
        }
      }
    };
    SQLiteSession = class {
      constructor(dialect) {
        this.dialect = dialect;
      }
      static [entityKind] = "SQLiteSession";
      prepareOneTimeQuery(query, fields, executeMethod) {
        return this.prepareQuery(query, fields, executeMethod);
      }
      run(query) {
        const staticQuery = this.dialect.sqlToQuery(query);
        try {
          return this.prepareOneTimeQuery(staticQuery, void 0, "run").run();
        } catch (err) {
          throw new DrizzleError({ cause: err, message: `Failed to run the query '${staticQuery.sql}'` });
        }
      }
      /** @internal */
      extractRawRunValueFromBatchResult(result) {
        return result;
      }
      all(query) {
        return this.prepareOneTimeQuery(this.dialect.sqlToQuery(query), void 0, "run").all();
      }
      /** @internal */
      extractRawAllValueFromBatchResult(_result) {
        throw new Error("Not implemented");
      }
      get(query) {
        return this.prepareOneTimeQuery(this.dialect.sqlToQuery(query), void 0, "run").get();
      }
      /** @internal */
      extractRawGetValueFromBatchResult(_result) {
        throw new Error("Not implemented");
      }
      values(query) {
        return this.prepareOneTimeQuery(this.dialect.sqlToQuery(query), void 0, "run").values();
      }
      /** @internal */
      extractRawValuesValueFromBatchResult(_result) {
        throw new Error("Not implemented");
      }
    };
    SQLiteTransaction = class extends BaseSQLiteDatabase {
      constructor(resultType, dialect, session, schema, nestedIndex = 0) {
        super(resultType, dialect, session, schema);
        this.schema = schema;
        this.nestedIndex = nestedIndex;
      }
      static [entityKind] = "SQLiteTransaction";
      rollback() {
        throw new TransactionRollbackError();
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/subquery.js
var init_subquery2 = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/subquery.js"() {
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/view-common.js
var SQLiteViewConfig;
var init_view_common2 = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/view-common.js"() {
    SQLiteViewConfig = Symbol.for("drizzle:SQLiteViewConfig");
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/utils.js
var init_utils2 = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/utils.js"() {
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/view.js
var ViewBuilderCore, ViewBuilder, ManualViewBuilder, SQLiteView;
var init_view = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/view.js"() {
    init_entity();
    init_utils();
    init_query_builder2();
    init_table3();
    init_view_common2();
    init_view_base();
    init_selection_proxy();
    ViewBuilderCore = class {
      constructor(name) {
        this.name = name;
      }
      static [entityKind] = "SQLiteViewBuilderCore";
      config = {};
    };
    ViewBuilder = class extends ViewBuilderCore {
      static [entityKind] = "SQLiteViewBuilder";
      as(qb) {
        if (typeof qb === "function") {
          qb = qb(new QueryBuilder());
        }
        const selectionProxy = new SelectionProxyHandler({
          alias: this.name,
          sqlBehavior: "error",
          sqlAliasedBehavior: "alias",
          replaceOriginalName: true
        });
        const aliasedSelectedFields = qb.getSelectedFields();
        return new Proxy(
          new SQLiteView({
            sqliteConfig: this.config,
            config: {
              name: this.name,
              schema: void 0,
              selectedFields: aliasedSelectedFields,
              query: qb.getSQL().inlineParams()
            }
          }),
          selectionProxy
        );
      }
    };
    ManualViewBuilder = class extends ViewBuilderCore {
      static [entityKind] = "SQLiteManualViewBuilder";
      columns;
      constructor(name, columns) {
        super(name);
        this.columns = getTableColumns(sqliteTable(name, columns));
      }
      existing() {
        return new Proxy(
          new SQLiteView({
            sqliteConfig: void 0,
            config: {
              name: this.name,
              schema: void 0,
              selectedFields: this.columns,
              query: void 0
            }
          }),
          new SelectionProxyHandler({
            alias: this.name,
            sqlBehavior: "error",
            sqlAliasedBehavior: "alias",
            replaceOriginalName: true
          })
        );
      }
      as(query) {
        return new Proxy(
          new SQLiteView({
            sqliteConfig: this.config,
            config: {
              name: this.name,
              schema: void 0,
              selectedFields: this.columns,
              query: query.inlineParams()
            }
          }),
          new SelectionProxyHandler({
            alias: this.name,
            sqlBehavior: "error",
            sqlAliasedBehavior: "alias",
            replaceOriginalName: true
          })
        );
      }
    };
    SQLiteView = class extends SQLiteViewBase {
      static [entityKind] = "SQLiteView";
      /** @internal */
      [SQLiteViewConfig];
      constructor({ sqliteConfig, config: config2 }) {
        super(config2);
        this[SQLiteViewConfig] = sqliteConfig;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/index.js
var init_sqlite_core = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-core/index.js"() {
    init_alias2();
    init_checks();
    init_columns();
    init_db();
    init_dialect();
    init_foreign_keys();
    init_indexes();
    init_primary_keys2();
    init_query_builders();
    init_session();
    init_subquery2();
    init_table3();
    init_unique_constraint();
    init_utils2();
    init_view();
  }
});

// ../../node_modules/.pnpm/@astrojs+db@0.8.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/@astrojs/db/dist/runtime/types.js
function isSerializedSQL(value) {
  return typeof value === "object" && value !== null && SERIALIZED_SQL_KEY in value;
}
var SERIALIZED_SQL_KEY;
var init_types = __esm({
  "../../node_modules/.pnpm/@astrojs+db@0.8.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/@astrojs/db/dist/runtime/types.js"() {
    SERIALIZED_SQL_KEY = "__serializedSQL";
  }
});

// ../../node_modules/.pnpm/@libsql+core@0.5.6/node_modules/@libsql/core/lib-esm/api.js
var init_api = __esm({
  "../../node_modules/.pnpm/@libsql+core@0.5.6/node_modules/@libsql/core/lib-esm/api.js"() {
  }
});

// ../../node_modules/.pnpm/@libsql+core@0.5.6/node_modules/@libsql/core/lib-esm/uri.js
var URI_RE, AUTHORITY_RE;
var init_uri = __esm({
  "../../node_modules/.pnpm/@libsql+core@0.5.6/node_modules/@libsql/core/lib-esm/uri.js"() {
    init_api();
    URI_RE = (() => {
      const SCHEME = "(?<scheme>[A-Za-z][A-Za-z.+-]*)";
      const AUTHORITY = "(?<authority>[^/?#]*)";
      const PATH = "(?<path>[^?#]*)";
      const QUERY = "(?<query>[^#]*)";
      const FRAGMENT = "(?<fragment>.*)";
      return new RegExp(`^${SCHEME}:(//${AUTHORITY})?${PATH}(\\?${QUERY})?(#${FRAGMENT})?$`, "su");
    })();
    AUTHORITY_RE = (() => {
      return new RegExp(`^((?<username>[^:]*)(:(?<password>.*))?@)?((?<host>[^:\\[\\]]*)|(\\[(?<host_br>[^\\[\\]]*)\\]))(:(?<port>[0-9]*))?$`, "su");
    })();
  }
});

// ../../node_modules/.pnpm/@libsql+core@0.5.6/node_modules/@libsql/core/lib-esm/util.js
var init_util = __esm({
  "../../node_modules/.pnpm/@libsql+core@0.5.6/node_modules/@libsql/core/lib-esm/util.js"() {
  }
});

// ../../node_modules/.pnpm/@libsql+core@0.5.6/node_modules/@libsql/core/lib-esm/config.js
var init_config = __esm({
  "../../node_modules/.pnpm/@libsql+core@0.5.6/node_modules/@libsql/core/lib-esm/config.js"() {
    init_api();
    init_uri();
    init_util();
  }
});

// ../../node_modules/.pnpm/@libsql+isomorphic-ws@0.1.5/node_modules/@libsql/isomorphic-ws/web.mjs
var _WebSocket;
var init_web = __esm({
  "../../node_modules/.pnpm/@libsql+isomorphic-ws@0.1.5/node_modules/@libsql/isomorphic-ws/web.mjs"() {
    if (typeof WebSocket !== "undefined") {
      _WebSocket = WebSocket;
    } else if (typeof global !== "undefined") {
      _WebSocket = global.WebSocket;
    } else if (typeof window !== "undefined") {
      _WebSocket = window.WebSocket;
    } else if (typeof self !== "undefined") {
      _WebSocket = self.WebSocket;
    }
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/client.js
var init_client = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/client.js"() {
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/errors.js
var init_errors2 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/errors.js"() {
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/encoding/json/decode.js
var init_decode = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/encoding/json/decode.js"() {
    init_errors2();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/encoding/json/encode.js
var init_encode = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/encoding/json/encode.js"() {
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/encoding/protobuf/util.js
var init_util2 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/encoding/protobuf/util.js"() {
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/encoding/protobuf/decode.js
var init_decode2 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/encoding/protobuf/decode.js"() {
    init_errors2();
    init_util2();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/encoding/protobuf/encode.js
var init_encode2 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/encoding/protobuf/encode.js"() {
    init_util2();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/encoding/index.js
var init_encoding = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/encoding/index.js"() {
    init_decode();
    init_encode();
    init_decode2();
    init_encode2();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/id_alloc.js
var init_id_alloc = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/id_alloc.js"() {
    init_errors2();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/util.js
var init_util3 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/util.js"() {
    init_errors2();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/value.js
var minInteger;
var init_value = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/value.js"() {
    init_errors2();
    init_util3();
    minInteger = -9223372036854775808n;
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/result.js
var init_result = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/result.js"() {
    init_errors2();
    init_value();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/sql.js
var init_sql3 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/sql.js"() {
    init_errors2();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/queue.js
var init_queue = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/queue.js"() {
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/stmt.js
var init_stmt = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/stmt.js"() {
    init_sql3();
    init_value();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/batch.js
var init_batch = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/batch.js"() {
    init_errors2();
    init_result();
    init_stmt();
    init_util3();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/describe.js
var init_describe = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/describe.js"() {
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/stream.js
var init_stream = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/stream.js"() {
    init_batch();
    init_describe();
    init_result();
    init_sql3();
    init_stmt();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/cursor.js
var init_cursor = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/cursor.js"() {
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/ws/cursor.js
var init_cursor2 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/ws/cursor.js"() {
    init_errors2();
    init_cursor();
    init_queue();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/ws/stream.js
var init_stream2 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/ws/stream.js"() {
    init_errors2();
    init_queue();
    init_stream();
    init_cursor2();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/shared/json_encode.js
var init_json_encode = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/shared/json_encode.js"() {
    init_util3();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/ws/json_encode.js
var init_json_encode2 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/ws/json_encode.js"() {
    init_json_encode();
    init_util3();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/shared/protobuf_encode.js
var init_protobuf_encode = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/shared/protobuf_encode.js"() {
    init_util3();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/ws/protobuf_encode.js
var init_protobuf_encode2 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/ws/protobuf_encode.js"() {
    init_protobuf_encode();
    init_util3();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/shared/json_decode.js
var init_json_decode = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/shared/json_decode.js"() {
    init_errors2();
    init_decode();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/ws/json_decode.js
var init_json_decode2 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/ws/json_decode.js"() {
    init_errors2();
    init_decode();
    init_json_decode();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/shared/protobuf_decode.js
var init_protobuf_decode = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/shared/protobuf_decode.js"() {
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/ws/protobuf_decode.js
var init_protobuf_decode2 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/ws/protobuf_decode.js"() {
    init_protobuf_decode();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/ws/client.js
var init_client2 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/ws/client.js"() {
    init_client();
    init_encoding();
    init_errors2();
    init_id_alloc();
    init_result();
    init_sql3();
    init_util3();
    init_stream2();
    init_json_encode2();
    init_protobuf_encode2();
    init_json_decode2();
    init_protobuf_decode2();
  }
});

// ../../node_modules/.pnpm/@libsql+isomorphic-fetch@0.1.12/node_modules/@libsql/isomorphic-fetch/web.js
var init_web2 = __esm({
  "../../node_modules/.pnpm/@libsql+isomorphic-fetch@0.1.12/node_modules/@libsql/isomorphic-fetch/web.js"() {
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/queue_microtask.js
var _queueMicrotask;
var init_queue_microtask = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/queue_microtask.js"() {
    if (typeof queueMicrotask !== "undefined") {
      _queueMicrotask = queueMicrotask;
    } else {
      const resolved = Promise.resolve();
      _queueMicrotask = (callback) => {
        resolved.then(callback);
      };
    }
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/byte_queue.js
var init_byte_queue = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/byte_queue.js"() {
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/http/json_decode.js
var init_json_decode3 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/http/json_decode.js"() {
    init_errors2();
    init_decode();
    init_json_decode();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/http/protobuf_decode.js
var init_protobuf_decode3 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/http/protobuf_decode.js"() {
    init_protobuf_decode();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/http/cursor.js
var init_cursor3 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/http/cursor.js"() {
    init_byte_queue();
    init_cursor();
    init_decode();
    init_decode2();
    init_errors2();
    init_util3();
    init_json_decode3();
    init_protobuf_decode3();
    init_json_decode();
    init_protobuf_decode();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/http/json_encode.js
var init_json_encode3 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/http/json_encode.js"() {
    init_json_encode();
    init_util3();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/http/protobuf_encode.js
var init_protobuf_encode3 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/http/protobuf_encode.js"() {
    init_protobuf_encode();
    init_util3();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/http/stream.js
var init_stream3 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/http/stream.js"() {
    init_web2();
    init_errors2();
    init_encoding();
    init_id_alloc();
    init_queue();
    init_queue_microtask();
    init_result();
    init_sql3();
    init_stream();
    init_util3();
    init_cursor3();
    init_json_encode3();
    init_protobuf_encode3();
    init_json_encode3();
    init_protobuf_encode3();
    init_json_decode3();
    init_protobuf_decode3();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/http/client.js
var init_client3 = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/http/client.js"() {
    init_web2();
    init_client();
    init_errors2();
    init_stream3();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/libsql_url.js
var init_libsql_url = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/libsql_url.js"() {
    init_errors2();
  }
});

// ../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/index.js
var init_lib_esm = __esm({
  "../../node_modules/.pnpm/@libsql+hrana-client@0.5.6/node_modules/@libsql/hrana-client/lib-esm/index.js"() {
    init_web();
    init_client2();
    init_errors2();
    init_client3();
    init_client2();
    init_web();
    init_web2();
    init_client();
    init_errors2();
    init_batch();
    init_libsql_url();
    init_sql3();
    init_stmt();
    init_stream();
    init_client3();
    init_stream3();
    init_client2();
    init_stream2();
  }
});

// ../../node_modules/.pnpm/@libsql+client@0.5.6/node_modules/@libsql/client/lib-esm/hrana.js
var init_hrana = __esm({
  "../../node_modules/.pnpm/@libsql+client@0.5.6/node_modules/@libsql/client/lib-esm/hrana.js"() {
    init_lib_esm();
    init_api();
    init_util();
  }
});

// ../../node_modules/.pnpm/@libsql+client@0.5.6/node_modules/@libsql/client/lib-esm/sql_cache.js
var init_sql_cache = __esm({
  "../../node_modules/.pnpm/@libsql+client@0.5.6/node_modules/@libsql/client/lib-esm/sql_cache.js"() {
  }
});

// ../../node_modules/.pnpm/@libsql+client@0.5.6/node_modules/@libsql/client/lib-esm/ws.js
var maxConnAgeMillis;
var init_ws = __esm({
  "../../node_modules/.pnpm/@libsql+client@0.5.6/node_modules/@libsql/client/lib-esm/ws.js"() {
    init_lib_esm();
    init_api();
    init_config();
    init_hrana();
    init_sql_cache();
    init_uri();
    init_util();
    init_api();
    maxConnAgeMillis = 60 * 1e3;
  }
});

// ../../node_modules/.pnpm/@libsql+client@0.5.6/node_modules/@libsql/client/lib-esm/http.js
var init_http = __esm({
  "../../node_modules/.pnpm/@libsql+client@0.5.6/node_modules/@libsql/client/lib-esm/http.js"() {
    init_lib_esm();
    init_api();
    init_config();
    init_hrana();
    init_sql_cache();
    init_uri();
    init_util();
    init_api();
  }
});

// ../../node_modules/.pnpm/@libsql+client@0.5.6/node_modules/@libsql/client/lib-esm/web.js
var init_web3 = __esm({
  "../../node_modules/.pnpm/@libsql+client@0.5.6/node_modules/@libsql/client/lib-esm/web.js"() {
    init_api();
    init_config();
    init_util();
    init_ws();
    init_http();
    init_api();
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-proxy/session.js
var SQLiteRemoteSession, SQLiteProxyTransaction, RemotePreparedQuery;
var init_session2 = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-proxy/session.js"() {
    init_entity();
    init_logger();
    init_sql();
    init_sqlite_core();
    init_session();
    init_utils();
    SQLiteRemoteSession = class extends SQLiteSession {
      constructor(client, dialect, schema, batchCLient, options = {}) {
        super(dialect);
        this.client = client;
        this.schema = schema;
        this.batchCLient = batchCLient;
        this.logger = options.logger ?? new NoopLogger();
      }
      static [entityKind] = "SQLiteRemoteSession";
      logger;
      prepareQuery(query, fields, executeMethod, customResultMapper) {
        return new RemotePreparedQuery(this.client, query, this.logger, fields, executeMethod, customResultMapper);
      }
      async batch(queries) {
        const preparedQueries = [];
        const builtQueries = [];
        for (const query of queries) {
          const preparedQuery = query._prepare();
          const builtQuery = preparedQuery.getQuery();
          preparedQueries.push(preparedQuery);
          builtQueries.push({ sql: builtQuery.sql, params: builtQuery.params, method: builtQuery.method });
        }
        const batchResults = await this.batchCLient(builtQueries);
        return batchResults.map((result, i) => preparedQueries[i].mapResult(result, true));
      }
      async transaction(transaction, config2) {
        const tx = new SQLiteProxyTransaction("async", this.dialect, this, this.schema);
        await this.run(sql.raw(`begin${config2?.behavior ? " " + config2.behavior : ""}`));
        try {
          const result = await transaction(tx);
          await this.run(sql`commit`);
          return result;
        } catch (err) {
          await this.run(sql`rollback`);
          throw err;
        }
      }
      extractRawAllValueFromBatchResult(result) {
        return result.rows;
      }
      extractRawGetValueFromBatchResult(result) {
        return result.rows[0];
      }
      extractRawValuesValueFromBatchResult(result) {
        return result.rows;
      }
    };
    SQLiteProxyTransaction = class _SQLiteProxyTransaction extends SQLiteTransaction {
      static [entityKind] = "SQLiteProxyTransaction";
      async transaction(transaction) {
        const savepointName = `sp${this.nestedIndex}`;
        const tx = new _SQLiteProxyTransaction("async", this.dialect, this.session, this.schema, this.nestedIndex + 1);
        await this.session.run(sql.raw(`savepoint ${savepointName}`));
        try {
          const result = await transaction(tx);
          await this.session.run(sql.raw(`release savepoint ${savepointName}`));
          return result;
        } catch (err) {
          await this.session.run(sql.raw(`rollback to savepoint ${savepointName}`));
          throw err;
        }
      }
    };
    RemotePreparedQuery = class extends SQLitePreparedQuery {
      constructor(client, query, logger, fields, executeMethod, customResultMapper) {
        super("async", executeMethod, query);
        this.client = client;
        this.logger = logger;
        this.fields = fields;
        this.customResultMapper = customResultMapper;
        this.customResultMapper = customResultMapper;
        this.method = executeMethod;
      }
      static [entityKind] = "SQLiteProxyPreparedQuery";
      method;
      getQuery() {
        return { ...this.query, method: this.method };
      }
      run(placeholderValues) {
        const params = fillPlaceholders(this.query.params, placeholderValues ?? {});
        this.logger.logQuery(this.query.sql, params);
        return this.client(this.query.sql, params, "run").then((t) => t.rows);
      }
      mapAllResult(rows, isFromBatch) {
        if (isFromBatch) {
          rows = rows.rows;
        }
        if (!this.fields && !this.customResultMapper) {
          return rows;
        }
        if (this.customResultMapper) {
          return this.customResultMapper(rows);
        }
        return rows.map((row) => {
          return mapResultRow(
            this.fields,
            row,
            this.joinsNotNullableMap
          );
        });
      }
      async all(placeholderValues) {
        const { query, logger, client } = this;
        const params = fillPlaceholders(query.params, placeholderValues ?? {});
        logger.logQuery(query.sql, params);
        const { rows } = await client(query.sql, params, "all");
        return this.mapAllResult(rows);
      }
      async get(placeholderValues) {
        const { query, logger, client } = this;
        const params = fillPlaceholders(query.params, placeholderValues ?? {});
        logger.logQuery(query.sql, params);
        const clientResult = await client(query.sql, params, "get");
        return this.mapGetResult(clientResult.rows);
      }
      mapGetResult(rows, isFromBatch) {
        if (isFromBatch) {
          rows = rows.rows;
        }
        const row = rows;
        if (!this.fields && !this.customResultMapper) {
          return row;
        }
        if (!row) {
          return void 0;
        }
        if (this.customResultMapper) {
          return this.customResultMapper([rows]);
        }
        return mapResultRow(
          this.fields,
          row,
          this.joinsNotNullableMap
        );
      }
      async values(placeholderValues) {
        const params = fillPlaceholders(this.query.params, placeholderValues ?? {});
        this.logger.logQuery(this.query.sql, params);
        const clientResult = await this.client(this.query.sql, params, "values");
        return clientResult.rows;
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-proxy/driver.js
function drizzle(callback, batchCallback, config2) {
  const dialect = new SQLiteAsyncDialect();
  let logger;
  let _batchCallback;
  let _config2 = {};
  if (batchCallback) {
    if (typeof batchCallback === "function") {
      _batchCallback = batchCallback;
      _config2 = config2 ?? {};
    } else {
      _batchCallback = void 0;
      _config2 = batchCallback;
    }
    if (_config2.logger === true) {
      logger = new DefaultLogger();
    } else if (_config2.logger !== false) {
      logger = _config2.logger;
    }
  }
  let schema;
  if (_config2.schema) {
    const tablesConfig = extractTablesRelationalConfig(
      _config2.schema,
      createTableRelationsHelpers
    );
    schema = {
      fullSchema: _config2.schema,
      schema: tablesConfig.tables,
      tableNamesMap: tablesConfig.tableNamesMap
    };
  }
  const session = new SQLiteRemoteSession(callback, dialect, schema, _batchCallback, { logger });
  return new SqliteRemoteDatabase("async", dialect, session, schema);
}
var SqliteRemoteDatabase;
var init_driver = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-proxy/driver.js"() {
    init_entity();
    init_logger();
    init_relations();
    init_db();
    init_dialect();
    init_session2();
    SqliteRemoteDatabase = class extends BaseSQLiteDatabase {
      static [entityKind] = "SqliteRemoteDatabase";
      async batch(batch) {
        return this.session.batch(batch);
      }
    };
  }
});

// ../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-proxy/index.js
var init_sqlite_proxy = __esm({
  "../../node_modules/.pnpm/drizzle-orm@0.29.5_@libsql+client@0.5.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/drizzle-orm/sqlite-proxy/index.js"() {
    init_driver();
    init_session2();
  }
});

// ../../node_modules/.pnpm/zod@3.22.4/node_modules/zod/lib/index.mjs
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
function addIssueToContext(ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
    }
    return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
function isValidIP(ip, version2) {
  if ((version2 === "v4" || !version2) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version2 === "v6" || !version2) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index2 = 0; index2 < a.length; index2++) {
      const itemA = a[index2];
      const itemB = b[index2];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var util, objectUtil, ZodParsedType, getParsedType, ZodIssueCode, quotelessJson, ZodError, errorMap, overrideErrorMap, makeIssue, EMPTY_PATH, ParseStatus, INVALID, DIRTY, OK, isAborted, isDirty, isValid, isAsync, errorUtil, ParseInputLazyPath, handleResult, ZodType, cuidRegex, cuid2Regex, ulidRegex, uuidRegex, emailRegex, _emojiRegex, emojiRegex, ipv4Regex, ipv6Regex, datetimeRegex, ZodString, ZodNumber, ZodBigInt, ZodBoolean, ZodDate, ZodSymbol, ZodUndefined, ZodNull, ZodAny, ZodUnknown, ZodNever, ZodVoid, ZodArray, ZodObject, ZodUnion, getDiscriminator, ZodDiscriminatedUnion, ZodIntersection, ZodTuple, ZodRecord, ZodMap, ZodSet, ZodFunction, ZodLazy, ZodLiteral, ZodEnum, ZodNativeEnum, ZodPromise, ZodEffects, ZodOptional, ZodNullable, ZodDefault, ZodCatch, ZodNaN, BRAND, ZodBranded, ZodPipeline, ZodReadonly, custom, late, ZodFirstPartyTypeKind, instanceOfType, stringType, numberType, nanType, bigIntType, booleanType, dateType, symbolType, undefinedType, nullType, anyType, unknownType, neverType, voidType, arrayType, objectType, strictObjectType, unionType, discriminatedUnionType, intersectionType, tupleType, recordType, mapType, setType, functionType, lazyType, literalType, enumType, nativeEnumType, promiseType, effectsType, optionalType, nullableType, preprocessType, pipelineType, ostring, onumber, oboolean, coerce2, NEVER, z;
var init_lib = __esm({
  "../../node_modules/.pnpm/zod@3.22.4/node_modules/zod/lib/index.mjs"() {
    (function(util2) {
      util2.assertEqual = (val) => val;
      function assertIs(_arg) {
      }
      util2.assertIs = assertIs;
      function assertNever(_x) {
        throw new Error();
      }
      util2.assertNever = assertNever;
      util2.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
          obj[item] = item;
        }
        return obj;
      };
      util2.getValidEnumValues = (obj) => {
        const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
          filtered[k] = obj[k];
        }
        return util2.objectValues(filtered);
      };
      util2.objectValues = (obj) => {
        return util2.objectKeys(obj).map(function(e) {
          return obj[e];
        });
      };
      util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object2) => {
        const keys = [];
        for (const key in object2) {
          if (Object.prototype.hasOwnProperty.call(object2, key)) {
            keys.push(key);
          }
        }
        return keys;
      };
      util2.find = (arr, checker) => {
        for (const item of arr) {
          if (checker(item))
            return item;
        }
        return void 0;
      };
      util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
      function joinValues(array2, separator = " | ") {
        return array2.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
      }
      util2.joinValues = joinValues;
      util2.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
          return value.toString();
        }
        return value;
      };
    })(util || (util = {}));
    (function(objectUtil2) {
      objectUtil2.mergeShapes = (first, second) => {
        return {
          ...first,
          ...second
          // second overwrites first
        };
      };
    })(objectUtil || (objectUtil = {}));
    ZodParsedType = util.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set"
    ]);
    getParsedType = (data) => {
      const t = typeof data;
      switch (t) {
        case "undefined":
          return ZodParsedType.undefined;
        case "string":
          return ZodParsedType.string;
        case "number":
          return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
          return ZodParsedType.boolean;
        case "function":
          return ZodParsedType.function;
        case "bigint":
          return ZodParsedType.bigint;
        case "symbol":
          return ZodParsedType.symbol;
        case "object":
          if (Array.isArray(data)) {
            return ZodParsedType.array;
          }
          if (data === null) {
            return ZodParsedType.null;
          }
          if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
            return ZodParsedType.promise;
          }
          if (typeof Map !== "undefined" && data instanceof Map) {
            return ZodParsedType.map;
          }
          if (typeof Set !== "undefined" && data instanceof Set) {
            return ZodParsedType.set;
          }
          if (typeof Date !== "undefined" && data instanceof Date) {
            return ZodParsedType.date;
          }
          return ZodParsedType.object;
        default:
          return ZodParsedType.unknown;
      }
    };
    ZodIssueCode = util.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite"
    ]);
    quotelessJson = (obj) => {
      const json = JSON.stringify(obj, null, 2);
      return json.replace(/"([^"]+)":/g, "$1:");
    };
    ZodError = class extends Error {
      constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
          this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
          this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(this, actualProto);
        } else {
          this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
      }
      get errors() {
        return this.issues;
      }
      format(_mapper) {
        const mapper = _mapper || function(issue) {
          return issue.message;
        };
        const fieldErrors = { _errors: [] };
        const processError = (error2) => {
          for (const issue of error2.issues) {
            if (issue.code === "invalid_union") {
              issue.unionErrors.map(processError);
            } else if (issue.code === "invalid_return_type") {
              processError(issue.returnTypeError);
            } else if (issue.code === "invalid_arguments") {
              processError(issue.argumentsError);
            } else if (issue.path.length === 0) {
              fieldErrors._errors.push(mapper(issue));
            } else {
              let curr = fieldErrors;
              let i = 0;
              while (i < issue.path.length) {
                const el = issue.path[i];
                const terminal = i === issue.path.length - 1;
                if (!terminal) {
                  curr[el] = curr[el] || { _errors: [] };
                } else {
                  curr[el] = curr[el] || { _errors: [] };
                  curr[el]._errors.push(mapper(issue));
                }
                curr = curr[el];
                i++;
              }
            }
          }
        };
        processError(this);
        return fieldErrors;
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues) {
          if (sub.path.length > 0) {
            fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
            fieldErrors[sub.path[0]].push(mapper(sub));
          } else {
            formErrors.push(mapper(sub));
          }
        }
        return { formErrors, fieldErrors };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    ZodError.create = (issues) => {
      const error2 = new ZodError(issues);
      return error2;
    };
    errorMap = (issue, _ctx) => {
      let message;
      switch (issue.code) {
        case ZodIssueCode.invalid_type:
          if (issue.received === ZodParsedType.undefined) {
            message = "Required";
          } else {
            message = `Expected ${issue.expected}, received ${issue.received}`;
          }
          break;
        case ZodIssueCode.invalid_literal:
          message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
          break;
        case ZodIssueCode.unrecognized_keys:
          message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
          break;
        case ZodIssueCode.invalid_union:
          message = `Invalid input`;
          break;
        case ZodIssueCode.invalid_union_discriminator:
          message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
          break;
        case ZodIssueCode.invalid_enum_value:
          message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
          break;
        case ZodIssueCode.invalid_arguments:
          message = `Invalid function arguments`;
          break;
        case ZodIssueCode.invalid_return_type:
          message = `Invalid function return type`;
          break;
        case ZodIssueCode.invalid_date:
          message = `Invalid date`;
          break;
        case ZodIssueCode.invalid_string:
          if (typeof issue.validation === "object") {
            if ("includes" in issue.validation) {
              message = `Invalid input: must include "${issue.validation.includes}"`;
              if (typeof issue.validation.position === "number") {
                message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
              }
            } else if ("startsWith" in issue.validation) {
              message = `Invalid input: must start with "${issue.validation.startsWith}"`;
            } else if ("endsWith" in issue.validation) {
              message = `Invalid input: must end with "${issue.validation.endsWith}"`;
            } else {
              util.assertNever(issue.validation);
            }
          } else if (issue.validation !== "regex") {
            message = `Invalid ${issue.validation}`;
          } else {
            message = "Invalid";
          }
          break;
        case ZodIssueCode.too_small:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode.too_big:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "bigint")
            message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode.custom:
          message = `Invalid input`;
          break;
        case ZodIssueCode.invalid_intersection_types:
          message = `Intersection results could not be merged`;
          break;
        case ZodIssueCode.not_multiple_of:
          message = `Number must be a multiple of ${issue.multipleOf}`;
          break;
        case ZodIssueCode.not_finite:
          message = "Number must be finite";
          break;
        default:
          message = _ctx.defaultError;
          util.assertNever(issue);
      }
      return { message };
    };
    overrideErrorMap = errorMap;
    makeIssue = (params) => {
      const { data, path, errorMaps, issueData } = params;
      const fullPath = [...path, ...issueData.path || []];
      const fullIssue = {
        ...issueData,
        path: fullPath
      };
      let errorMessage = "";
      const maps = errorMaps.filter((m) => !!m).slice().reverse();
      for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
      }
      return {
        ...issueData,
        path: fullPath,
        message: issueData.message || errorMessage
      };
    };
    EMPTY_PATH = [];
    ParseStatus = class _ParseStatus {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        if (this.value === "valid")
          this.value = "dirty";
      }
      abort() {
        if (this.value !== "aborted")
          this.value = "aborted";
      }
      static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
          if (s.status === "aborted")
            return INVALID;
          if (s.status === "dirty")
            status.dirty();
          arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
      }
      static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
          syncPairs.push({
            key: await pair.key,
            value: await pair.value
          });
        }
        return _ParseStatus.mergeObjectSync(status, syncPairs);
      }
      static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
          const { key, value } = pair;
          if (key.status === "aborted")
            return INVALID;
          if (value.status === "aborted")
            return INVALID;
          if (key.status === "dirty")
            status.dirty();
          if (value.status === "dirty")
            status.dirty();
          if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
            finalObject[key.value] = value.value;
          }
        }
        return { status: status.value, value: finalObject };
      }
    };
    INVALID = Object.freeze({
      status: "aborted"
    });
    DIRTY = (value) => ({ status: "dirty", value });
    OK = (value) => ({ status: "valid", value });
    isAborted = (x) => x.status === "aborted";
    isDirty = (x) => x.status === "dirty";
    isValid = (x) => x.status === "valid";
    isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
    (function(errorUtil2) {
      errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
      errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
    })(errorUtil || (errorUtil = {}));
    ParseInputLazyPath = class {
      constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
      }
      get path() {
        if (!this._cachedPath.length) {
          if (this._key instanceof Array) {
            this._cachedPath.push(...this._path, ...this._key);
          } else {
            this._cachedPath.push(...this._path, this._key);
          }
        }
        return this._cachedPath;
      }
    };
    handleResult = (ctx, result) => {
      if (isValid(result)) {
        return { success: true, data: result.value };
      } else {
        if (!ctx.common.issues.length) {
          throw new Error("Validation failed but no issues detected.");
        }
        return {
          success: false,
          get error() {
            if (this._error)
              return this._error;
            const error2 = new ZodError(ctx.common.issues);
            this._error = error2;
            return this._error;
          }
        };
      }
    };
    ZodType = class {
      constructor(def) {
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
      }
      get description() {
        return this._def.description;
      }
      _getType(input) {
        return getParsedType(input.data);
      }
      _getOrReturnCtx(input, ctx) {
        return ctx || {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        };
      }
      _processInputParams(input) {
        return {
          status: new ParseStatus(),
          ctx: {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
          }
        };
      }
      _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) {
          throw new Error("Synchronous parse encountered promise.");
        }
        return result;
      }
      _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
      }
      parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      safeParse(data, params) {
        var _a2;
        const ctx = {
          common: {
            issues: [],
            async: (_a2 = params === null || params === void 0 ? void 0 : params.async) !== null && _a2 !== void 0 ? _a2 : false,
            contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
          },
          path: (params === null || params === void 0 ? void 0 : params.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType(data)
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
      }
      async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      async safeParseAsync(data, params) {
        const ctx = {
          common: {
            issues: [],
            contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
            async: true
          },
          path: (params === null || params === void 0 ? void 0 : params.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType(data)
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
      }
      refine(check, message) {
        const getIssueProperties = (val) => {
          if (typeof message === "string" || typeof message === "undefined") {
            return { message };
          } else if (typeof message === "function") {
            return message(val);
          } else {
            return message;
          }
        };
        return this._refinement((val, ctx) => {
          const result = check(val);
          const setError = () => ctx.addIssue({
            code: ZodIssueCode.custom,
            ...getIssueProperties(val)
          });
          if (typeof Promise !== "undefined" && result instanceof Promise) {
            return result.then((data) => {
              if (!data) {
                setError();
                return false;
              } else {
                return true;
              }
            });
          }
          if (!result) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
          if (!check(val)) {
            ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
            return false;
          } else {
            return true;
          }
        });
      }
      _refinement(refinement) {
        return new ZodEffects({
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "refinement", refinement }
        });
      }
      superRefine(refinement) {
        return this._refinement(refinement);
      }
      optional() {
        return ZodOptional.create(this, this._def);
      }
      nullable() {
        return ZodNullable.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return ZodArray.create(this, this._def);
      }
      promise() {
        return ZodPromise.create(this, this._def);
      }
      or(option) {
        return ZodUnion.create([this, option], this._def);
      }
      and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
      }
      transform(transform) {
        return new ZodEffects({
          ...processCreateParams(this._def),
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "transform", transform }
        });
      }
      default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
          ...processCreateParams(this._def),
          innerType: this,
          defaultValue: defaultValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodDefault
        });
      }
      brand() {
        return new ZodBranded({
          typeName: ZodFirstPartyTypeKind.ZodBranded,
          type: this,
          ...processCreateParams(this._def)
        });
      }
      catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
          ...processCreateParams(this._def),
          innerType: this,
          catchValue: catchValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodCatch
        });
      }
      describe(description) {
        const This = this.constructor;
        return new This({
          ...this._def,
          description
        });
      }
      pipe(target) {
        return ZodPipeline.create(this, target);
      }
      readonly() {
        return ZodReadonly.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    };
    cuidRegex = /^c[^\s-]{8,}$/i;
    cuid2Regex = /^[a-z][a-z0-9]*$/;
    ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
    uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
    ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
    ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    datetimeRegex = (args) => {
      if (args.precision) {
        if (args.offset) {
          return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
        } else {
          return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
        }
      } else if (args.precision === 0) {
        if (args.offset) {
          return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
        } else {
          return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
        }
      } else {
        if (args.offset) {
          return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
        } else {
          return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
        }
      }
    };
    ZodString = class _ZodString extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(
            ctx2,
            {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.string,
              received: ctx2.parsedType
            }
            //
          );
          return INVALID;
        }
        const status = new ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.length < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.length > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "length") {
            const tooBig = input.data.length > check.value;
            const tooSmall = input.data.length < check.value;
            if (tooBig || tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              if (tooBig) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_big,
                  maximum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              } else if (tooSmall) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_small,
                  minimum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              }
              status.dirty();
            }
          } else if (check.kind === "email") {
            if (!emailRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "email",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "emoji") {
            if (!emojiRegex) {
              emojiRegex = new RegExp(_emojiRegex, "u");
            }
            if (!emojiRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "emoji",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "uuid") {
            if (!uuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "uuid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid") {
            if (!cuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "cuid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid2") {
            if (!cuid2Regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "cuid2",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ulid") {
            if (!ulidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "ulid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "url") {
            try {
              new URL(input.data);
            } catch (_a2) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "url",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "regex") {
            check.regex.lastIndex = 0;
            const testResult = check.regex.test(input.data);
            if (!testResult) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "regex",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "trim") {
            input.data = input.data.trim();
          } else if (check.kind === "includes") {
            if (!input.data.includes(check.value, check.position)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { includes: check.value, position: check.position },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "toLowerCase") {
            input.data = input.data.toLowerCase();
          } else if (check.kind === "toUpperCase") {
            input.data = input.data.toUpperCase();
          } else if (check.kind === "startsWith") {
            if (!input.data.startsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { startsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "endsWith") {
            if (!input.data.endsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { endsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "datetime") {
            const regex = datetimeRegex(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: "datetime",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ip") {
            if (!isValidIP(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "ip",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
          validation,
          code: ZodIssueCode.invalid_string,
          ...errorUtil.errToObj(message)
        });
      }
      _addCheck(check) {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      email(message) {
        return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
      }
      url(message) {
        return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
      }
      emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
      }
      uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
      }
      cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
      }
      cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
      }
      ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
      }
      ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
      }
      datetime(options) {
        var _a2;
        if (typeof options === "string") {
          return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            message: options
          });
        }
        return this._addCheck({
          kind: "datetime",
          precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
          offset: (_a2 = options === null || options === void 0 ? void 0 : options.offset) !== null && _a2 !== void 0 ? _a2 : false,
          ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
        });
      }
      regex(regex, message) {
        return this._addCheck({
          kind: "regex",
          regex,
          ...errorUtil.errToObj(message)
        });
      }
      includes(value, options) {
        return this._addCheck({
          kind: "includes",
          value,
          position: options === null || options === void 0 ? void 0 : options.position,
          ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
        });
      }
      startsWith(value, message) {
        return this._addCheck({
          kind: "startsWith",
          value,
          ...errorUtil.errToObj(message)
        });
      }
      endsWith(value, message) {
        return this._addCheck({
          kind: "endsWith",
          value,
          ...errorUtil.errToObj(message)
        });
      }
      min(minLength, message) {
        return this._addCheck({
          kind: "min",
          value: minLength,
          ...errorUtil.errToObj(message)
        });
      }
      max(maxLength, message) {
        return this._addCheck({
          kind: "max",
          value: maxLength,
          ...errorUtil.errToObj(message)
        });
      }
      length(len, message) {
        return this._addCheck({
          kind: "length",
          value: len,
          ...errorUtil.errToObj(message)
        });
      }
      /**
       * @deprecated Use z.string().min(1) instead.
       * @see {@link ZodString.min}
       */
      nonempty(message) {
        return this.min(1, errorUtil.errToObj(message));
      }
      trim() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "trim" }]
        });
      }
      toLowerCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toLowerCase" }]
        });
      }
      toUpperCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toUpperCase" }]
        });
      }
      get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
      }
      get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
      }
      get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
      }
      get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    ZodString.create = (params) => {
      var _a2;
      return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: (_a2 = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a2 !== void 0 ? _a2 : false,
        ...processCreateParams(params)
      });
    };
    ZodNumber = class _ZodNumber extends ZodType {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.number,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        let ctx = void 0;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "int") {
            if (!util.isInteger(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: "integer",
                received: "float",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (floatSafeRemainder(input.data, check.value) !== 0) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "finite") {
            if (!Number.isFinite(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_finite,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodNumber({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodNumber({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      int(message) {
        return this._addCheck({
          kind: "int",
          message: errorUtil.toString(message)
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil.toString(message)
        });
      }
      finite(message) {
        return this._addCheck({
          kind: "finite",
          message: errorUtil.toString(message)
        });
      }
      safe(message) {
        return this._addCheck({
          kind: "min",
          inclusive: true,
          value: Number.MIN_SAFE_INTEGER,
          message: errorUtil.toString(message)
        })._addCheck({
          kind: "max",
          inclusive: true,
          value: Number.MAX_SAFE_INTEGER,
          message: errorUtil.toString(message)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
      get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
      }
      get isFinite() {
        let max = null, min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
            return true;
          } else if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          } else if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return Number.isFinite(min) && Number.isFinite(max);
      }
    };
    ZodNumber.create = (params) => {
      return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params)
      });
    };
    ZodBigInt = class _ZodBigInt extends ZodType {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = BigInt(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.bigint,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        let ctx = void 0;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                type: "bigint",
                minimum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                type: "bigint",
                maximum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (input.data % check.value !== BigInt(0)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodBigInt({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodBigInt({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil.toString(message)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    ZodBigInt.create = (params) => {
      var _a2;
      return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: (_a2 = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a2 !== void 0 ? _a2 : false,
        ...processCreateParams(params)
      });
    };
    ZodBoolean = class extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.boolean,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodBoolean.create = (params) => {
      return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params)
      });
    };
    ZodDate = class _ZodDate extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.date,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        if (isNaN(input.data.getTime())) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_date
          });
          return INVALID;
        }
        const status = new ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.getTime() < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                message: check.message,
                inclusive: true,
                exact: false,
                minimum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.getTime() > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                message: check.message,
                inclusive: true,
                exact: false,
                maximum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return {
          status: status.value,
          value: new Date(input.data.getTime())
        };
      }
      _addCheck(check) {
        return new _ZodDate({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      min(minDate, message) {
        return this._addCheck({
          kind: "min",
          value: minDate.getTime(),
          message: errorUtil.toString(message)
        });
      }
      max(maxDate, message) {
        return this._addCheck({
          kind: "max",
          value: maxDate.getTime(),
          message: errorUtil.toString(message)
        });
      }
      get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min != null ? new Date(min) : null;
      }
      get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max != null ? new Date(max) : null;
      }
    };
    ZodDate.create = (params) => {
      return new ZodDate({
        checks: [],
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params)
      });
    };
    ZodSymbol = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.symbol,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodSymbol.create = (params) => {
      return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params)
      });
    };
    ZodUndefined = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.undefined,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodUndefined.create = (params) => {
      return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params)
      });
    };
    ZodNull = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.null,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodNull.create = (params) => {
      return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params)
      });
    };
    ZodAny = class extends ZodType {
      constructor() {
        super(...arguments);
        this._any = true;
      }
      _parse(input) {
        return OK(input.data);
      }
    };
    ZodAny.create = (params) => {
      return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params)
      });
    };
    ZodUnknown = class extends ZodType {
      constructor() {
        super(...arguments);
        this._unknown = true;
      }
      _parse(input) {
        return OK(input.data);
      }
    };
    ZodUnknown.create = (params) => {
      return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params)
      });
    };
    ZodNever = class extends ZodType {
      _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.never,
          received: ctx.parsedType
        });
        return INVALID;
      }
    };
    ZodNever.create = (params) => {
      return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params)
      });
    };
    ZodVoid = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.void,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodVoid.create = (params) => {
      return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params)
      });
    };
    ZodArray = class _ZodArray extends ZodType {
      _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.array,
            received: ctx.parsedType
          });
          return INVALID;
        }
        if (def.exactLength !== null) {
          const tooBig = ctx.data.length > def.exactLength.value;
          const tooSmall = ctx.data.length < def.exactLength.value;
          if (tooBig || tooSmall) {
            addIssueToContext(ctx, {
              code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
              minimum: tooSmall ? def.exactLength.value : void 0,
              maximum: tooBig ? def.exactLength.value : void 0,
              type: "array",
              inclusive: true,
              exact: true,
              message: def.exactLength.message
            });
            status.dirty();
          }
        }
        if (def.minLength !== null) {
          if (ctx.data.length < def.minLength.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: def.minLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.minLength.message
            });
            status.dirty();
          }
        }
        if (def.maxLength !== null) {
          if (ctx.data.length > def.maxLength.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: def.maxLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.maxLength.message
            });
            status.dirty();
          }
        }
        if (ctx.common.async) {
          return Promise.all([...ctx.data].map((item, i) => {
            return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
          })).then((result2) => {
            return ParseStatus.mergeArray(status, result2);
          });
        }
        const result = [...ctx.data].map((item, i) => {
          return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
      }
      get element() {
        return this._def.type;
      }
      min(minLength, message) {
        return new _ZodArray({
          ...this._def,
          minLength: { value: minLength, message: errorUtil.toString(message) }
        });
      }
      max(maxLength, message) {
        return new _ZodArray({
          ...this._def,
          maxLength: { value: maxLength, message: errorUtil.toString(message) }
        });
      }
      length(len, message) {
        return new _ZodArray({
          ...this._def,
          exactLength: { value: len, message: errorUtil.toString(message) }
        });
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodArray.create = (schema, params) => {
      return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params)
      });
    };
    ZodObject = class _ZodObject extends ZodType {
      constructor() {
        super(...arguments);
        this._cached = null;
        this.nonstrict = this.passthrough;
        this.augment = this.extend;
      }
      _getCached() {
        if (this._cached !== null)
          return this._cached;
        const shape = this._def.shape();
        const keys = util.objectKeys(shape);
        return this._cached = { shape, keys };
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
          for (const key in ctx.data) {
            if (!shapeKeys.includes(key)) {
              extraKeys.push(key);
            }
          }
        }
        const pairs = [];
        for (const key of shapeKeys) {
          const keyValidator = shape[key];
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (this._def.catchall instanceof ZodNever) {
          const unknownKeys = this._def.unknownKeys;
          if (unknownKeys === "passthrough") {
            for (const key of extraKeys) {
              pairs.push({
                key: { status: "valid", value: key },
                value: { status: "valid", value: ctx.data[key] }
              });
            }
          } else if (unknownKeys === "strict") {
            if (extraKeys.length > 0) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.unrecognized_keys,
                keys: extraKeys
              });
              status.dirty();
            }
          } else if (unknownKeys === "strip")
            ;
          else {
            throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
          }
        } else {
          const catchall = this._def.catchall;
          for (const key of extraKeys) {
            const value = ctx.data[key];
            pairs.push({
              key: { status: "valid", value: key },
              value: catchall._parse(
                new ParseInputLazyPath(ctx, value, ctx.path, key)
                //, ctx.child(key), value, getParsedType(value)
              ),
              alwaysSet: key in ctx.data
            });
          }
        }
        if (ctx.common.async) {
          return Promise.resolve().then(async () => {
            const syncPairs = [];
            for (const pair of pairs) {
              const key = await pair.key;
              syncPairs.push({
                key,
                value: await pair.value,
                alwaysSet: pair.alwaysSet
              });
            }
            return syncPairs;
          }).then((syncPairs) => {
            return ParseStatus.mergeObjectSync(status, syncPairs);
          });
        } else {
          return ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get shape() {
        return this._def.shape();
      }
      strict(message) {
        errorUtil.errToObj;
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strict",
          ...message !== void 0 ? {
            errorMap: (issue, ctx) => {
              var _a2, _b, _c, _d;
              const defaultError = (_c = (_b = (_a2 = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a2, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
              if (issue.code === "unrecognized_keys")
                return {
                  message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
                };
              return {
                message: defaultError
              };
            }
          } : {}
        });
      }
      strip() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strip"
        });
      }
      passthrough() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "passthrough"
        });
      }
      // const AugmentFactory =
      //   <Def extends ZodObjectDef>(def: Def) =>
      //   <Augmentation extends ZodRawShape>(
      //     augmentation: Augmentation
      //   ): ZodObject<
      //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
      //     Def["unknownKeys"],
      //     Def["catchall"]
      //   > => {
      //     return new ZodObject({
      //       ...def,
      //       shape: () => ({
      //         ...def.shape(),
      //         ...augmentation,
      //       }),
      //     }) as any;
      //   };
      extend(augmentation) {
        return new _ZodObject({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...augmentation
          })
        });
      }
      /**
       * Prior to zod@1.0.12 there was a bug in the
       * inferred type of merged objects. Please
       * upgrade if you are experiencing issues.
       */
      merge(merging) {
        const merged = new _ZodObject({
          unknownKeys: merging._def.unknownKeys,
          catchall: merging._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...merging._def.shape()
          }),
          typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
      }
      // merge<
      //   Incoming extends AnyZodObject,
      //   Augmentation extends Incoming["shape"],
      //   NewOutput extends {
      //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
      //       ? Augmentation[k]["_output"]
      //       : k extends keyof Output
      //       ? Output[k]
      //       : never;
      //   },
      //   NewInput extends {
      //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
      //       ? Augmentation[k]["_input"]
      //       : k extends keyof Input
      //       ? Input[k]
      //       : never;
      //   }
      // >(
      //   merging: Incoming
      // ): ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"],
      //   NewOutput,
      //   NewInput
      // > {
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      setKey(key, schema) {
        return this.augment({ [key]: schema });
      }
      // merge<Incoming extends AnyZodObject>(
      //   merging: Incoming
      // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
      // ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"]
      // > {
      //   // const mergedShape = objectUtil.mergeShapes(
      //   //   this._def.shape(),
      //   //   merging._def.shape()
      //   // );
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      catchall(index2) {
        return new _ZodObject({
          ...this._def,
          catchall: index2
        });
      }
      pick(mask) {
        const shape = {};
        util.objectKeys(mask).forEach((key) => {
          if (mask[key] && this.shape[key]) {
            shape[key] = this.shape[key];
          }
        });
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      omit(mask) {
        const shape = {};
        util.objectKeys(this.shape).forEach((key) => {
          if (!mask[key]) {
            shape[key] = this.shape[key];
          }
        });
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      /**
       * @deprecated
       */
      deepPartial() {
        return deepPartialify(this);
      }
      partial(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key) => {
          const fieldSchema = this.shape[key];
          if (mask && !mask[key]) {
            newShape[key] = fieldSchema;
          } else {
            newShape[key] = fieldSchema.optional();
          }
        });
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      required(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key) => {
          if (mask && !mask[key]) {
            newShape[key] = this.shape[key];
          } else {
            const fieldSchema = this.shape[key];
            let newField = fieldSchema;
            while (newField instanceof ZodOptional) {
              newField = newField._def.innerType;
            }
            newShape[key] = newField;
          }
        });
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      keyof() {
        return createZodEnum(util.objectKeys(this.shape));
      }
    };
    ZodObject.create = (shape, params) => {
      return new ZodObject({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.strictCreate = (shape, params) => {
      return new ZodObject({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.lazycreate = (shape, params) => {
      return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodUnion = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
          for (const result of results) {
            if (result.result.status === "valid") {
              return result.result;
            }
          }
          for (const result of results) {
            if (result.result.status === "dirty") {
              ctx.common.issues.push(...result.ctx.common.issues);
              return result.result;
            }
          }
          const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union,
            unionErrors
          });
          return INVALID;
        }
        if (ctx.common.async) {
          return Promise.all(options.map(async (option) => {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            return {
              result: await option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              }),
              ctx: childCtx
            };
          })).then(handleResults);
        } else {
          let dirty = void 0;
          const issues = [];
          for (const option of options) {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            const result = option._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            });
            if (result.status === "valid") {
              return result;
            } else if (result.status === "dirty" && !dirty) {
              dirty = { result, ctx: childCtx };
            }
            if (childCtx.common.issues.length) {
              issues.push(childCtx.common.issues);
            }
          }
          if (dirty) {
            ctx.common.issues.push(...dirty.ctx.common.issues);
            return dirty.result;
          }
          const unionErrors = issues.map((issues2) => new ZodError(issues2));
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union,
            unionErrors
          });
          return INVALID;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    ZodUnion.create = (types2, params) => {
      return new ZodUnion({
        options: types2,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params)
      });
    };
    getDiscriminator = (type) => {
      if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
      } else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
      } else if (type instanceof ZodLiteral) {
        return [type.value];
      } else if (type instanceof ZodEnum) {
        return type.options;
      } else if (type instanceof ZodNativeEnum) {
        return Object.keys(type.enum);
      } else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
      } else if (type instanceof ZodUndefined) {
        return [void 0];
      } else if (type instanceof ZodNull) {
        return [null];
      } else {
        return null;
      }
    };
    ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [discriminator]
          });
          return INVALID;
        }
        if (ctx.common.async) {
          return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        } else {
          return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        }
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      /**
       * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
       * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
       * have a different value for each object in the union.
       * @param discriminator the name of the discriminator property
       * @param types an array of object schemas
       * @param params
       */
      static create(discriminator, options, params) {
        const optionsMap = /* @__PURE__ */ new Map();
        for (const type of options) {
          const discriminatorValues = getDiscriminator(type.shape[discriminator]);
          if (!discriminatorValues) {
            throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
          }
          for (const value of discriminatorValues) {
            if (optionsMap.has(value)) {
              throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
            }
            optionsMap.set(value, type);
          }
        }
        return new _ZodDiscriminatedUnion({
          typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
          discriminator,
          options,
          optionsMap,
          ...processCreateParams(params)
        });
      }
    };
    ZodIntersection = class extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
          if (isAborted(parsedLeft) || isAborted(parsedRight)) {
            return INVALID;
          }
          const merged = mergeValues(parsedLeft.value, parsedRight.value);
          if (!merged.valid) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_intersection_types
            });
            return INVALID;
          }
          if (isDirty(parsedLeft) || isDirty(parsedRight)) {
            status.dirty();
          }
          return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
          return Promise.all([
            this._def.left._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }),
            this._def.right._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            })
          ]).then(([left, right]) => handleParsed(left, right));
        } else {
          return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }));
        }
      }
    };
    ZodIntersection.create = (left, right, params) => {
      return new ZodIntersection({
        left,
        right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params)
      });
    };
    ZodTuple = class _ZodTuple extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.array,
            received: ctx.parsedType
          });
          return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          status.dirty();
        }
        const items = [...ctx.data].map((item, itemIndex) => {
          const schema = this._def.items[itemIndex] || this._def.rest;
          if (!schema)
            return null;
          return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x) => !!x);
        if (ctx.common.async) {
          return Promise.all(items).then((results) => {
            return ParseStatus.mergeArray(status, results);
          });
        } else {
          return ParseStatus.mergeArray(status, items);
        }
      }
      get items() {
        return this._def.items;
      }
      rest(rest) {
        return new _ZodTuple({
          ...this._def,
          rest
        });
      }
    };
    ZodTuple.create = (schemas, params) => {
      if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      }
      return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params)
      });
    };
    ZodRecord = class _ZodRecord extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
          pairs.push({
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
            value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
          });
        }
        if (ctx.common.async) {
          return ParseStatus.mergeObjectAsync(status, pairs);
        } else {
          return ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get element() {
        return this._def.valueType;
      }
      static create(first, second, third) {
        if (second instanceof ZodType) {
          return new _ZodRecord({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(third)
          });
        }
        return new _ZodRecord({
          keyType: ZodString.create(),
          valueType: first,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...processCreateParams(second)
        });
      }
    };
    ZodMap = class extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.map,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index2) => {
          return {
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index2, "key"])),
            value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index2, "value"]))
          };
        });
        if (ctx.common.async) {
          const finalMap = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              if (key.status === "aborted" || value.status === "aborted") {
                return INVALID;
              }
              if (key.status === "dirty" || value.status === "dirty") {
                status.dirty();
              }
              finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
          });
        } else {
          const finalMap = /* @__PURE__ */ new Map();
          for (const pair of pairs) {
            const key = pair.key;
            const value = pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        }
      }
    };
    ZodMap.create = (keyType, valueType, params) => {
      return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params)
      });
    };
    ZodSet = class _ZodSet extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.set,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
          if (ctx.data.size < def.minSize.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: def.minSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.minSize.message
            });
            status.dirty();
          }
        }
        if (def.maxSize !== null) {
          if (ctx.data.size > def.maxSize.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: def.maxSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.maxSize.message
            });
            status.dirty();
          }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements2) {
          const parsedSet = /* @__PURE__ */ new Set();
          for (const element of elements2) {
            if (element.status === "aborted")
              return INVALID;
            if (element.status === "dirty")
              status.dirty();
            parsedSet.add(element.value);
          }
          return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
          return Promise.all(elements).then((elements2) => finalizeSet(elements2));
        } else {
          return finalizeSet(elements);
        }
      }
      min(minSize, message) {
        return new _ZodSet({
          ...this._def,
          minSize: { value: minSize, message: errorUtil.toString(message) }
        });
      }
      max(maxSize, message) {
        return new _ZodSet({
          ...this._def,
          maxSize: { value: maxSize, message: errorUtil.toString(message) }
        });
      }
      size(size, message) {
        return this.min(size, message).max(size, message);
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodSet.create = (valueType, params) => {
      return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params)
      });
    };
    ZodFunction = class _ZodFunction extends ZodType {
      constructor() {
        super(...arguments);
        this.validate = this.implement;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.function,
            received: ctx.parsedType
          });
          return INVALID;
        }
        function makeArgsIssue(args, error2) {
          return makeIssue({
            data: args,
            path: ctx.path,
            errorMaps: [
              ctx.common.contextualErrorMap,
              ctx.schemaErrorMap,
              getErrorMap(),
              errorMap
            ].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode.invalid_arguments,
              argumentsError: error2
            }
          });
        }
        function makeReturnsIssue(returns, error2) {
          return makeIssue({
            data: returns,
            path: ctx.path,
            errorMaps: [
              ctx.common.contextualErrorMap,
              ctx.schemaErrorMap,
              getErrorMap(),
              errorMap
            ].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode.invalid_return_type,
              returnTypeError: error2
            }
          });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
          const me = this;
          return OK(async function(...args) {
            const error2 = new ZodError([]);
            const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
              error2.addIssue(makeArgsIssue(args, e));
              throw error2;
            });
            const result = await Reflect.apply(fn, this, parsedArgs);
            const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
              error2.addIssue(makeReturnsIssue(result, e));
              throw error2;
            });
            return parsedReturns;
          });
        } else {
          const me = this;
          return OK(function(...args) {
            const parsedArgs = me._def.args.safeParse(args, params);
            if (!parsedArgs.success) {
              throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
            }
            const result = Reflect.apply(fn, this, parsedArgs.data);
            const parsedReturns = me._def.returns.safeParse(result, params);
            if (!parsedReturns.success) {
              throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
            }
            return parsedReturns.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...items) {
        return new _ZodFunction({
          ...this._def,
          args: ZodTuple.create(items).rest(ZodUnknown.create())
        });
      }
      returns(returnType) {
        return new _ZodFunction({
          ...this._def,
          returns: returnType
        });
      }
      implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      static create(args, returns, params) {
        return new _ZodFunction({
          args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
          returns: returns || ZodUnknown.create(),
          typeName: ZodFirstPartyTypeKind.ZodFunction,
          ...processCreateParams(params)
        });
      }
    };
    ZodLazy = class extends ZodType {
      get schema() {
        return this._def.getter();
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
      }
    };
    ZodLazy.create = (getter, params) => {
      return new ZodLazy({
        getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params)
      });
    };
    ZodLiteral = class extends ZodType {
      _parse(input) {
        if (input.data !== this._def.value) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_literal,
            expected: this._def.value
          });
          return INVALID;
        }
        return { status: "valid", value: input.data };
      }
      get value() {
        return this._def.value;
      }
    };
    ZodLiteral.create = (value, params) => {
      return new ZodLiteral({
        value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params)
      });
    };
    ZodEnum = class _ZodEnum extends ZodType {
      _parse(input) {
        if (typeof input.data !== "string") {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext(ctx, {
            expected: util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode.invalid_type
          });
          return INVALID;
        }
        if (this._def.values.indexOf(input.data) === -1) {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return INVALID;
        }
        return OK(input.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      extract(values) {
        return _ZodEnum.create(values);
      }
      exclude(values) {
        return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
      }
    };
    ZodEnum.create = createZodEnum;
    ZodNativeEnum = class extends ZodType {
      _parse(input) {
        const nativeEnumValues = util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
          const expectedValues = util.objectValues(nativeEnumValues);
          addIssueToContext(ctx, {
            expected: util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode.invalid_type
          });
          return INVALID;
        }
        if (nativeEnumValues.indexOf(input.data) === -1) {
          const expectedValues = util.objectValues(nativeEnumValues);
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return INVALID;
        }
        return OK(input.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    ZodNativeEnum.create = (values, params) => {
      return new ZodNativeEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params)
      });
    };
    ZodPromise = class extends ZodType {
      unwrap() {
        return this._def.type;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.promise,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
        return OK(promisified.then((data) => {
          return this._def.type.parseAsync(data, {
            path: ctx.path,
            errorMap: ctx.common.contextualErrorMap
          });
        }));
      }
    };
    ZodPromise.create = (schema, params) => {
      return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params)
      });
    };
    ZodEffects = class extends ZodType {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
          addIssue: (arg) => {
            addIssueToContext(ctx, arg);
            if (arg.fatal) {
              status.abort();
            } else {
              status.dirty();
            }
          },
          get path() {
            return ctx.path;
          }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
          const processed = effect.transform(ctx.data, checkCtx);
          if (ctx.common.issues.length) {
            return {
              status: "dirty",
              value: ctx.data
            };
          }
          if (ctx.common.async) {
            return Promise.resolve(processed).then((processed2) => {
              return this._def.schema._parseAsync({
                data: processed2,
                path: ctx.path,
                parent: ctx
              });
            });
          } else {
            return this._def.schema._parseSync({
              data: processed,
              path: ctx.path,
              parent: ctx
            });
          }
        }
        if (effect.type === "refinement") {
          const executeRefinement = (acc) => {
            const result = effect.refinement(acc, checkCtx);
            if (ctx.common.async) {
              return Promise.resolve(result);
            }
            if (result instanceof Promise) {
              throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            }
            return acc;
          };
          if (ctx.common.async === false) {
            const inner = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inner.status === "aborted")
              return INVALID;
            if (inner.status === "dirty")
              status.dirty();
            executeRefinement(inner.value);
            return { status: status.value, value: inner.value };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
              if (inner.status === "aborted")
                return INVALID;
              if (inner.status === "dirty")
                status.dirty();
              return executeRefinement(inner.value).then(() => {
                return { status: status.value, value: inner.value };
              });
            });
          }
        }
        if (effect.type === "transform") {
          if (ctx.common.async === false) {
            const base = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (!isValid(base))
              return base;
            const result = effect.transform(base.value, checkCtx);
            if (result instanceof Promise) {
              throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
            }
            return { status: status.value, value: result };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
              if (!isValid(base))
                return base;
              return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
            });
          }
        }
        util.assertNever(effect);
      }
    };
    ZodEffects.create = (schema, effect, params) => {
      return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params)
      });
    };
    ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
      return new ZodEffects({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params)
      });
    };
    ZodOptional = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) {
          return OK(void 0);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodOptional.create = (type, params) => {
      return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params)
      });
    };
    ZodNullable = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) {
          return OK(null);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodNullable.create = (type, params) => {
      return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params)
      });
    };
    ZodDefault = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
          data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    ZodDefault.create = (type, params) => {
      return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : () => params.default,
        ...processCreateParams(params)
      });
    };
    ZodCatch = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const newCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          }
        };
        const result = this._def.innerType._parse({
          data: newCtx.data,
          path: newCtx.path,
          parent: {
            ...newCtx
          }
        });
        if (isAsync(result)) {
          return result.then((result2) => {
            return {
              status: "valid",
              value: result2.status === "valid" ? result2.value : this._def.catchValue({
                get error() {
                  return new ZodError(newCtx.common.issues);
                },
                input: newCtx.data
              })
            };
          });
        } else {
          return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue({
              get error() {
                return new ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        }
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    ZodCatch.create = (type, params) => {
      return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params)
      });
    };
    ZodNaN = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.nan,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return { status: "valid", value: input.data };
      }
    };
    ZodNaN.create = (params) => {
      return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params)
      });
    };
    BRAND = Symbol("zod_brand");
    ZodBranded = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      unwrap() {
        return this._def.type;
      }
    };
    ZodPipeline = class _ZodPipeline extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
          const handleAsync = async () => {
            const inResult = await this._def.in._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inResult.status === "aborted")
              return INVALID;
            if (inResult.status === "dirty") {
              status.dirty();
              return DIRTY(inResult.value);
            } else {
              return this._def.out._parseAsync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
              });
            }
          };
          return handleAsync();
        } else {
          const inResult = this._def.in._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return {
              status: "dirty",
              value: inResult.value
            };
          } else {
            return this._def.out._parseSync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        }
      }
      static create(a, b) {
        return new _ZodPipeline({
          in: a,
          out: b,
          typeName: ZodFirstPartyTypeKind.ZodPipeline
        });
      }
    };
    ZodReadonly = class extends ZodType {
      _parse(input) {
        const result = this._def.innerType._parse(input);
        if (isValid(result)) {
          result.value = Object.freeze(result.value);
        }
        return result;
      }
    };
    ZodReadonly.create = (type, params) => {
      return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params)
      });
    };
    custom = (check, params = {}, fatal) => {
      if (check)
        return ZodAny.create().superRefine((data, ctx) => {
          var _a2, _b;
          if (!check(data)) {
            const p2 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
            const _fatal = (_b = (_a2 = p2.fatal) !== null && _a2 !== void 0 ? _a2 : fatal) !== null && _b !== void 0 ? _b : true;
            const p22 = typeof p2 === "string" ? { message: p2 } : p2;
            ctx.addIssue({ code: "custom", ...p22, fatal: _fatal });
          }
        });
      return ZodAny.create();
    };
    late = {
      object: ZodObject.lazycreate
    };
    (function(ZodFirstPartyTypeKind2) {
      ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
      ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
      ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
      ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
      ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
      ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
      ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
      ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
      ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
      ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
      ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
      ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
      ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
      ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
      ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
      ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
      ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
      ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
      ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
      ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
      ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
      ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
      ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
      ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
      ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
      ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
      ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
      ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
      ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
      ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
      ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
      ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
      ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
      ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
      ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
      ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
    })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
    instanceOfType = (cls, params = {
      message: `Input not instance of ${cls.name}`
    }) => custom((data) => data instanceof cls, params);
    stringType = ZodString.create;
    numberType = ZodNumber.create;
    nanType = ZodNaN.create;
    bigIntType = ZodBigInt.create;
    booleanType = ZodBoolean.create;
    dateType = ZodDate.create;
    symbolType = ZodSymbol.create;
    undefinedType = ZodUndefined.create;
    nullType = ZodNull.create;
    anyType = ZodAny.create;
    unknownType = ZodUnknown.create;
    neverType = ZodNever.create;
    voidType = ZodVoid.create;
    arrayType = ZodArray.create;
    objectType = ZodObject.create;
    strictObjectType = ZodObject.strictCreate;
    unionType = ZodUnion.create;
    discriminatedUnionType = ZodDiscriminatedUnion.create;
    intersectionType = ZodIntersection.create;
    tupleType = ZodTuple.create;
    recordType = ZodRecord.create;
    mapType = ZodMap.create;
    setType = ZodSet.create;
    functionType = ZodFunction.create;
    lazyType = ZodLazy.create;
    literalType = ZodLiteral.create;
    enumType = ZodEnum.create;
    nativeEnumType = ZodNativeEnum.create;
    promiseType = ZodPromise.create;
    effectsType = ZodEffects.create;
    optionalType = ZodOptional.create;
    nullableType = ZodNullable.create;
    preprocessType = ZodEffects.createWithPreprocess;
    pipelineType = ZodPipeline.create;
    ostring = () => stringType().optional();
    onumber = () => numberType().optional();
    oboolean = () => booleanType().optional();
    coerce2 = {
      string: (arg) => ZodString.create({ ...arg, coerce: true }),
      number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
      boolean: (arg) => ZodBoolean.create({
        ...arg,
        coerce: true
      }),
      bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
      date: (arg) => ZodDate.create({ ...arg, coerce: true })
    };
    NEVER = INVALID;
    z = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      defaultErrorMap: errorMap,
      setErrorMap,
      getErrorMap,
      makeIssue,
      EMPTY_PATH,
      addIssueToContext,
      ParseStatus,
      INVALID,
      DIRTY,
      OK,
      isAborted,
      isDirty,
      isValid,
      isAsync,
      get util() {
        return util;
      },
      get objectUtil() {
        return objectUtil;
      },
      ZodParsedType,
      getParsedType,
      ZodType,
      ZodString,
      ZodNumber,
      ZodBigInt,
      ZodBoolean,
      ZodDate,
      ZodSymbol,
      ZodUndefined,
      ZodNull,
      ZodAny,
      ZodUnknown,
      ZodNever,
      ZodVoid,
      ZodArray,
      ZodObject,
      ZodUnion,
      ZodDiscriminatedUnion,
      ZodIntersection,
      ZodTuple,
      ZodRecord,
      ZodMap,
      ZodSet,
      ZodFunction,
      ZodLazy,
      ZodLiteral,
      ZodEnum,
      ZodNativeEnum,
      ZodPromise,
      ZodEffects,
      ZodTransformer: ZodEffects,
      ZodOptional,
      ZodNullable,
      ZodDefault,
      ZodCatch,
      ZodNaN,
      BRAND,
      ZodBranded,
      ZodPipeline,
      ZodReadonly,
      custom,
      Schema: ZodType,
      ZodSchema: ZodType,
      late,
      get ZodFirstPartyTypeKind() {
        return ZodFirstPartyTypeKind;
      },
      coerce: coerce2,
      any: anyType,
      array: arrayType,
      bigint: bigIntType,
      boolean: booleanType,
      date: dateType,
      discriminatedUnion: discriminatedUnionType,
      effect: effectsType,
      "enum": enumType,
      "function": functionType,
      "instanceof": instanceOfType,
      intersection: intersectionType,
      lazy: lazyType,
      literal: literalType,
      map: mapType,
      nan: nanType,
      nativeEnum: nativeEnumType,
      never: neverType,
      "null": nullType,
      nullable: nullableType,
      number: numberType,
      object: objectType,
      oboolean,
      onumber,
      optional: optionalType,
      ostring,
      pipeline: pipelineType,
      preprocess: preprocessType,
      promise: promiseType,
      record: recordType,
      set: setType,
      strictObject: strictObjectType,
      string: stringType,
      symbol: symbolType,
      transformer: effectsType,
      tuple: tupleType,
      "undefined": undefinedType,
      union: unionType,
      unknown: unknownType,
      "void": voidType,
      NEVER,
      ZodIssueCode,
      quotelessJson,
      ZodError
    });
  }
});

// ../../node_modules/.pnpm/@astrojs+db@0.8.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/@astrojs/db/dist/runtime/utils.js
async function safeFetch(url, options = {}, onNotOK = () => {
  throw new Error(`Request to ${url} returned a non-OK status code.`);
}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    await onNotOK(response);
  }
  return response;
}
var init_utils3 = __esm({
  "../../node_modules/.pnpm/@astrojs+db@0.8.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/@astrojs/db/dist/runtime/utils.js"() {
  }
});

// ../../node_modules/.pnpm/@astrojs+db@0.8.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/@astrojs/db/dist/runtime/db-client.js
function createRemoteDatabaseClient(appToken, remoteDbURL) {
  const url = new URL("/db/query", remoteDbURL);
  const db2 = drizzle(
    async (sql2, parameters, method) => {
      const requestBody = { sql: sql2, args: parameters };
      const res = await safeFetch(
        url,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${appToken}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestBody)
        },
        (response) => {
          throw new Error(
            `Failed to execute query.
Query: ${sql2}
Full error: ${response.status} ${response.statusText}`
          );
        }
      );
      let remoteResult;
      try {
        const json = await res.json();
        remoteResult = remoteResultSchema.parse(json);
      } catch (e) {
        throw new Error(
          `Failed to execute query.
Query: ${sql2}
Full error: Unexpected JSON response. ${e instanceof Error ? e.message : String(e)}`
        );
      }
      if (method === "run")
        return remoteResult;
      const rowValues = [];
      for (const row of remoteResult.rows) {
        if (row != null && typeof row === "object") {
          rowValues.push(Object.values(row));
        }
      }
      if (method === "get") {
        return { rows: rowValues[0] };
      }
      return { rows: rowValues };
    },
    async (queries) => {
      const stmts = queries.map(({ sql: sql2, params }) => ({ sql: sql2, args: params }));
      const res = await safeFetch(
        url,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${appToken}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(stmts)
        },
        (response) => {
          throw new Error(
            `Failed to execute batch queries.
Full error: ${response.status} ${response.statusText}}`
          );
        }
      );
      let remoteResults;
      try {
        const json = await res.json();
        remoteResults = z.array(remoteResultSchema).parse(json);
      } catch (e) {
        throw new Error(
          `Failed to execute batch queries.
Full error: Unexpected JSON response. ${e instanceof Error ? e.message : String(e)}`
        );
      }
      let results = [];
      for (const [idx, rawResult] of remoteResults.entries()) {
        if (queries[idx]?.method === "run") {
          results.push(rawResult);
          continue;
        }
        const rowValues = [];
        for (const row of rawResult.rows) {
          if (row != null && typeof row === "object") {
            rowValues.push(Object.values(row));
          }
        }
        if (queries[idx]?.method === "get") {
          results.push({ rows: rowValues[0] });
        }
        results.push({ rows: rowValues });
      }
      return results;
    }
  );
  return db2;
}
var isWebContainer, remoteResultSchema;
var init_db_client = __esm({
  "../../node_modules/.pnpm/@astrojs+db@0.8.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/@astrojs/db/dist/runtime/db-client.js"() {
    init_web3();
    init_sqlite_proxy();
    init_lib();
    init_utils3();
    isWebContainer = !!process.versions?.webcontainer;
    remoteResultSchema = z.object({
      columns: z.array(z.string()),
      columnTypes: z.array(z.string()),
      rows: z.array(z.array(z.unknown())),
      rowsAffected: z.number(),
      lastInsertRowid: z.unknown().optional()
    });
  }
});

// ../../node_modules/.pnpm/@astrojs+db@0.8.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/@astrojs/db/dist/core/errors.js
var MISSING_SESSION_ID_ERROR, MISSING_PROJECT_ID_ERROR, MISSING_EXECUTE_PATH_ERROR, SHELL_QUERY_MISSING_ERROR;
var init_errors3 = __esm({
  "../../node_modules/.pnpm/@astrojs+db@0.8.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/@astrojs/db/dist/core/errors.js"() {
    init_colors();
    MISSING_SESSION_ID_ERROR = `${red("\u25B6 Login required!")}

  To authenticate with Astro Studio, run
  ${cyan("astro db login")}
`;
    MISSING_PROJECT_ID_ERROR = `${red("\u25B6 Directory not linked.")}

  To link this directory to an Astro Studio project, run
  ${cyan("astro db link")}
`;
    MISSING_EXECUTE_PATH_ERROR = `${red(
      "\u25B6 No file path provided."
    )} Provide a path by running ${cyan("astro db execute <path>")}
`;
    SHELL_QUERY_MISSING_ERROR = `${red(
      "\u25B6 Please provide a query to execute using the --query flag."
    )}
`;
  }
});

// ../../node_modules/.pnpm/@astrojs+db@0.8.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/@astrojs/db/dist/runtime/queries.js
var sqlite;
var init_queries = __esm({
  "../../node_modules/.pnpm/@astrojs+db@0.8.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/@astrojs/db/dist/runtime/queries.js"() {
    init_sqlite_core();
    init_colors();
    init_errors3();
    init_runtime();
    init_types();
    sqlite = new SQLiteAsyncDialect();
  }
});

// ../../node_modules/.pnpm/@astrojs+db@0.8.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/@astrojs/db/dist/runtime/seed-local.js
var sqlite2;
var init_seed_local = __esm({
  "../../node_modules/.pnpm/@astrojs+db@0.8.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/@astrojs/db/dist/runtime/seed-local.js"() {
    init_web3();
    init_sqlite_core();
    init_errors3();
    init_queries();
    sqlite2 = new SQLiteAsyncDialect();
  }
});

// ../../node_modules/.pnpm/@astrojs+db@0.8.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/@astrojs/db/dist/runtime/index.js
function hasPrimaryKey(column) {
  return "primaryKey" in column.schema && !!column.schema.primaryKey;
}
function asDrizzleTable(name, table) {
  const columns = {};
  if (!Object.entries(table.columns).some(([, column]) => hasPrimaryKey(column))) {
    columns["_id"] = integer("_id").primaryKey();
  }
  for (const [columnName, column] of Object.entries(table.columns)) {
    columns[columnName] = columnMapper(columnName, column);
  }
  const drizzleTable = sqliteTable(name, columns, (ormTable) => {
    const indexes = {};
    for (const [indexName, indexProps] of Object.entries(table.indexes ?? {})) {
      const onColNames = Array.isArray(indexProps.on) ? indexProps.on : [indexProps.on];
      const onCols = onColNames.map((colName) => ormTable[colName]);
      if (!atLeastOne(onCols))
        continue;
      indexes[indexName] = index(indexName).on(...onCols);
    }
    return indexes;
  });
  return drizzleTable;
}
function atLeastOne(arr) {
  return arr.length > 0;
}
function columnMapper(columnName, column) {
  let c;
  switch (column.type) {
    case "text": {
      c = text2(columnName);
      if (column.schema.default !== void 0)
        c = c.default(handleSerializedSQL(column.schema.default));
      if (column.schema.primaryKey === true)
        c = c.primaryKey();
      break;
    }
    case "number": {
      c = integer(columnName);
      if (column.schema.default !== void 0)
        c = c.default(handleSerializedSQL(column.schema.default));
      if (column.schema.primaryKey === true)
        c = c.primaryKey();
      break;
    }
    case "boolean": {
      c = integer(columnName, { mode: "boolean" });
      if (column.schema.default !== void 0)
        c = c.default(handleSerializedSQL(column.schema.default));
      break;
    }
    case "json":
      c = jsonType(columnName);
      if (column.schema.default !== void 0)
        c = c.default(column.schema.default);
      break;
    case "date": {
      c = dateType2(columnName);
      if (column.schema.default !== void 0) {
        const def = handleSerializedSQL(column.schema.default);
        c = c.default(typeof def === "string" ? new Date(def) : def);
      }
      break;
    }
  }
  if (!column.schema.optional)
    c = c.notNull();
  if (column.schema.unique)
    c = c.unique();
  return c;
}
function handleSerializedSQL(def) {
  if (isSerializedSQL(def)) {
    return sql.raw(def.sql);
  }
  return def;
}
var NOW, TRUE, FALSE, dateType2, jsonType;
var init_runtime = __esm({
  "../../node_modules/.pnpm/@astrojs+db@0.8.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/@astrojs/db/dist/runtime/index.js"() {
    init_drizzle_orm();
    init_sqlite_core();
    init_types();
    init_db_client();
    init_seed_local();
    NOW = sql`CURRENT_TIMESTAMP`;
    TRUE = sql`TRUE`;
    FALSE = sql`FALSE`;
    dateType2 = customType({
      dataType() {
        return "text";
      },
      toDriver(value) {
        return value.toISOString();
      },
      fromDriver(value) {
        return new Date(value);
      }
    });
    jsonType = customType({
      dataType() {
        return "text";
      },
      toDriver(value) {
        return JSON.stringify(value);
      },
      fromDriver(value) {
        return JSON.parse(value);
      }
    });
  }
});

// ../../node_modules/.pnpm/@astrojs+db@0.8.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/@astrojs/db/dist/runtime/config.js
var init_config2 = __esm({
  "../../node_modules/.pnpm/@astrojs+db@0.8.6_@neondatabase+serverless@0.6.1_bun-types@1.0.31_react@18.2.0/node_modules/@astrojs/db/dist/runtime/config.js"() {
    init_runtime();
  }
});

// dist/$server_build/chunks/pages/index_DN58ykhj.mjs
var index_DN58ykhj_exports = {};
__export(index_DN58ykhj_exports, {
  default: () => $$Index,
  file: () => $$file3,
  prerender: () => prerender3,
  url: () => $$url3
});
var import_chunk, daysarr, db, Company, $$Astro4, prerender3, $$Index, $$file3, $$url3;
var init_index_DN58ykhj = __esm({
  async "dist/$server_build/chunks/pages/index_DN58ykhj.mjs"() {
    "use strict";
    init_astro_sKHNJ3WQ();
    init_colors();
    init_esm();
    import_chunk = __toESM(require_chunk(), 1);
    init_tag_K0V7HO7C();
    init_runtime();
    init_config2();
    daysarr = [
      "00000c4618",
      "00001152",
      "00001268",
      "000018d6",
      "00002a3a",
      "00002d1c",
      "00002ef3",
      "000037eb",
      "000039c9",
      "00003cd1",
      "00004461",
      "0000698d",
      "0000700c",
      "000075d32d",
      "00007dea28",
      "000088eb",
      "00008fd1",
      "0000a1ee",
      "0000a6fc",
      "0000b82052",
      "0000b99c",
      "0000ba02",
      "0000c19c",
      "0000c23a",
      "0000cd12",
      "0000d7dd",
      "0000e26c",
      "0000ea29",
      "0000fb53",
      "0000fdc8",
      "0001041d",
      "000106c7",
      "00010ba2",
      "00011025",
      "00011390",
      "00011ad1",
      "000122a8",
      "00012f3f",
      "00013ab3",
      "0001427b",
      "000145df",
      "00014990",
      "000149d0",
      "00015849",
      "00015d52",
      "0001601a",
      "00016252",
      "00016ff2",
      "000175e3",
      "000179d4",
      "00017bf8",
      "00017ea0",
      "0001852a5a",
      "00018920",
      "00018d79",
      "00018ed44e",
      "00019f1e",
      "0001a55c",
      "0001ab644b",
      "0001ad81",
      "0001b3e8",
      "0001bcb0",
      "0001dae4",
      "0001dcc0",
      "0001deea",
      "0001e202",
      "0001e297",
      "0001e398",
      "0001ea49",
      "0001f74f",
      "0001fd34",
      "00020f4d",
      "0002156f",
      "00022d86",
      "0002340a",
      "00023c68",
      "00023d66",
      "00023ef3",
      "00024ac4",
      "000255b2",
      "00025a7adc",
      "000269b9",
      "000279a530",
      "00028186",
      "00028e89",
      "000291a9",
      "00029f55",
      "0002a103",
      "0002a72c1b",
      "0002ab72",
      "0002ad63e7",
      "0002af6a",
      "0002b071",
      "0002b3cc",
      "0002b481",
      "0002c720",
      "0002ce02",
      "0002d38f",
      "0002dcec",
      "0002dd03",
      "0002e2f7",
      "0002eac8",
      "0002ec91",
      "0002eca6",
      "0002ed76",
      "0002f87938",
      "0002fc9d",
      "00030b4a",
      "00030fc3",
      "00031ccd",
      "00031f91",
      "000321ae",
      "000339d2",
      "00033c3e",
      "00034e3e",
      "00035875",
      "00035e4c",
      "000362f4",
      "00036d1d",
      "00036d7b",
      "00038bbd",
      "00038e79",
      "00039562",
      "00039c45",
      "0003a30f",
      "0003a500",
      "0003ab19",
      "0003b6d5",
      "0003ba52",
      "0003be66",
      "0003bf5f",
      "0003c413",
      "0003cf6b",
      "0003d085",
      "0003d3db",
      "0003d7553c",
      "0003dd97",
      "0003ebd7",
      "0003ec54",
      "000403b0",
      "00040992",
      "000411fb2f",
      "00041d0d",
      "00041fae",
      "00042513",
      "00044e00",
      "000451ce",
      "00046c1c",
      "000475d9",
      "0004831d",
      "00048ca3",
      "00049969b3",
      "00049cb7",
      "0004a11c",
      "0004a186",
      "0004a49a",
      "0004a4f0",
      "0004ab01",
      "0004b626",
      "0004b6b5",
      "0004bba1",
      "0004be4a9e",
      "0004c3aa",
      "0004c518",
      "0004ccd6",
      "0004ceb974",
      "0004d052",
      "0004d6a9",
      "0004d6bf",
      "0004dbbe",
      "0004dda9",
      "0004e3fc",
      "0004ee3d",
      "0004fbde",
      "00050412",
      "00050ae8",
      "00050b70",
      "00051757",
      "0005192a",
      "00051b9d",
      "00051d2a",
      "0005300d",
      "00053aec",
      "0005491b54",
      "00054e56",
      "000559f6",
      "00055b7d79",
      "000563ba",
      "00057087",
      "0005737f",
      "0005790d",
      "00057c48",
      "0005872d",
      "000589ea",
      "00058c37",
      "0005a089",
      "0005b755",
      "0005c4bf",
      "0005c6d1",
      "0005c6e1",
      "0005c908",
      "0005cf2f",
      "0005d988",
      "0005de1b",
      "0005ea81",
      "0005ec1c",
      "0005f6ae",
      "00060266",
      "000608c8",
      "0006096a",
      "0006138c",
      "000614e5",
      "0006236a",
      "00062de5",
      "00063ecd",
      "00064046",
      "00064235",
      "000647b6aa",
      "00064dfc79",
      "00064ffe",
      "00065206",
      "000663db",
      "00067370",
      "00067395",
      "00067771",
      "00067de1",
      "000690c4",
      "0006ac6c",
      "0006ad69",
      "0006adfa",
      "0006af6d",
      "0006b56d",
      "0006b5d1",
      "0006b9df",
      "0006bfe7",
      "0006c596",
      "0006c5b0",
      "0006caca",
      "0006cd07",
      "0006d126",
      "0006d5c155",
      "0006d73f",
      "0006df53",
      "0006e034",
      "0006f4e1",
      "0006f9d0",
      "0006fba4",
      "000705ff",
      "00072228",
      "0007391f",
      "00073dec",
      "000742f8",
      "00075589ff",
      "00075900",
      "00076cd0",
      "00076e06",
      "00077f51",
      "00078599",
      "000797f7",
      "00079b52",
      "00079e0977",
      "0007aa9548",
      "0007abcd",
      "0007b10f",
      "0007c0c1",
      "0007c2b4",
      "0007d6ca",
      "0007d98f",
      "0007e2c4",
      "0007e3e5",
      "0007e440",
      "0007f16d",
      "0008036d",
      "0008092c",
      "00080994",
      "00081233",
      "000816ae",
      "00082041",
      "00082803",
      "000833a5",
      "0008359f60",
      "00083d60",
      "00083dbb",
      "0008480c",
      "00084f5c",
      "00085321",
      "00085935",
      "00085b4b",
      "000863eb",
      "000866db",
      "00086a23",
      "0008704f",
      "00087e43",
      "00088221",
      "00088866cb",
      "0008909e",
      "000894e4",
      "00089a5b-1935-4214-8d59-65e0cac7c654",
      "00089ca3",
      "00089ce364",
      "0008a2e9",
      "0008b2b1",
      "0008b353",
      "0008bb41",
      "0008bd70",
      "0008ccdc",
      "0008d032",
      "0008dfdd",
      "0008e094",
      "0008e0d8",
      "0008e168",
      "0008e3c3",
      "0008e650cc",
      "0008f8f0",
      "000903b2",
      "000906ba",
      "00091977",
      "000919de0e",
      "00091b27",
      "00091c33",
      "000927d2",
      "00092c4b",
      "00092e0e",
      "0009308e",
      "0009310d",
      "00093208",
      "0009335a",
      "0009342e",
      "00094615",
      "00094ab0",
      "0009520f",
      "00095e32",
      "0009622c",
      "00096cc4",
      "00096dba",
      "00097588",
      "0009759a",
      "000975d5",
      "0009843d",
      "00098ff0",
      "00099ba6",
      "00099d33",
      "00099eb5",
      "00099ed8",
      "0009aac5",
      "0009aebf",
      "0009b385",
      "0009b627",
      "0009bbdb",
      "0009c31b",
      "0009c7e3",
      "0009eaf4",
      "0009f1ae",
      "0009f603",
      "0009f654",
      "0009f86e15",
      "0009fd38",
      "000a0041",
      "000a04db",
      "000a0c59",
      "000a0f4d",
      "000a2088",
      "000a27cf",
      "000a3df927",
      "000a41bf",
      "000a448e",
      "000a4cfc",
      "000a505e6d",
      "000a5259",
      "000a54f3",
      "000a59ab",
      "000a5a8e",
      "000a6358",
      "000a65fb",
      "000a6a59",
      "000a6e8140",
      "000a72f7",
      "000a7d52",
      "000a8f95",
      "000a9313",
      "000aa11c",
      "000aa9bc",
      "000aad2b",
      "000aafdc",
      "000aaffa",
      "000ab278",
      "000ab7ef",
      "000ab8a4",
      "000ac593",
      "000ac75a",
      "000acf7c",
      "000ad7ab",
      "000aedb1",
      "000af071",
      "000af218",
      "000af67b",
      "000b00892a",
      "000b0bf9",
      "000b0e7e",
      "000b1f1d"
    ];
    db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN ?? "e822f8a16198bf2a0f315281a5966baf99ea9513:qhxqlbatbh4d0j9u8nijos9av78r", { "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": void 0, "ASSETS_PREFIX": void 0 }.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
    asDrizzleTable("JobPosting", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "JobPosting", "primaryKey": true } }, "title": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "title", "collection": "JobPosting", "primaryKey": false, "optional": false } }, "companyId": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "companyId", "collection": "JobPosting", "primaryKey": false, "optional": false, "references": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Company", "primaryKey": true } } } }, "description": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "description", "collection": "JobPosting", "primaryKey": false, "optional": false } }, "type": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "type", "collection": "JobPosting", "primaryKey": false, "optional": false, "references": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "JobType", "primaryKey": true } } } }, "location": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "location", "collection": "JobPosting", "primaryKey": false, "optional": false } }, "posted": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "posted", "collection": "JobPosting", "default": { "__serializedSQL": true, "sql": "CURRENT_TIMESTAMP" } } }, "richText": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "richText", "collection": "JobPosting", "primaryKey": false, "optional": true } } }, "deprecated": false }, false);
    Company = asDrizzleTable("Company", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Company", "primaryKey": true } }, "title": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "title", "collection": "Company", "primaryKey": false, "optional": false } }, "description": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "description", "collection": "Company", "primaryKey": false, "optional": false } }, "logo": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "logo", "collection": "Company", "primaryKey": false, "optional": false } } }, "deprecated": false }, false);
    asDrizzleTable("JobType", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "JobType", "primaryKey": true } }, "title": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "title", "collection": "JobType", "primaryKey": false, "optional": false } }, "value": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "value", "collection": "JobType", "primaryKey": false, "optional": false } } }, "deprecated": false }, false);
    asDrizzleTable("Users", { "columns": { "username": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "username", "collection": "Users", "primaryKey": false, "optional": false } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Users", "primaryKey": false, "optional": false } }, "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Users", "primaryKey": true } }, "email": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "email", "collection": "Users", "primaryKey": false, "optional": false } }, "password_hash": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "password_hash", "collection": "Users", "primaryKey": false, "optional": false } } }, "deprecated": false }, false);
    asDrizzleTable("Sessions", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Sessions", "primaryKey": true } }, "userId": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "userId", "collection": "Sessions", "primaryKey": false, "optional": false, "references": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Users", "primaryKey": true } } } }, "expiresAt": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "expiresAt", "collection": "Sessions", "primaryKey": false, "optional": false } } }, "deprecated": false }, false);
    $$Astro4 = createAstro();
    prerender3 = false;
    $$Index = createComponent(async ($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro4, $$props, $$slots);
      Astro2.self = $$Index;
      Astro2.cookies.get("session");
      const x = await db.select({ body: Company.id }).from(Company);
      console.log(x);
      const currentDate = /* @__PURE__ */ new Date();
      const dayOfYear = Math.floor(
        (currentDate.getTime() - new Date(currentDate.getFullYear(), 0, 0).getTime()) / 864e5 + 1
      );
      const genid = daysarr[dayOfYear];
      const simOne = await gquery(
        `query MyQuery($_eq: String ) {
    similar: quq(args: {genid: "${genid}"}) {
    genid
  }
}
`,
        {}
      );
      const data = await gquery(
        `query MyQuery( $_in: [String!])  {
	  questions: q_q(where: {genid: {_in: $_in}}) {
		text
		genid
	  }
    answers: q_a(where: {genid: {_in: $_in}}) {
		text
		genid
	  }
	  q_qtags(order_by: {count: desc}, limit: 40) {
		  count
		  hashtag
		}
	}`,
        { _in: simOne.similar.map(({ genid: genid2 }) => genid2) }
      );
      const { questions, answers } = data;
      const chunks = (0, import_chunk.default)(questions, 3);
      const chunksa = (0, import_chunk.default)(answers, 3);
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "userz dot net.", "tags": data.qtags }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-screen-xl px-4 py-3 mx-auto"> -${JSON.stringify(x)} <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"> ${chunks.map((chunk2, i) => renderTemplate`<div> ${chunk2.map(({ genid: genid2, text: text3 }, i1) => renderTemplate`<div class="grid"> <a${addAttribute("/" + genid2, "href")} class="p-6  m-3 border-emerald-600 border-4 rounded-lg shadow hover:bg-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative"> <div class="absolute -top-1 -right-0.5 bg-emerald-600 px-2 rounded-bl-md  rounded-tr-lg text-xs text-black"> ${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]} </div> <h5 class="mb-2 text-xl xs:text-2xl sm:text-3xl font-bold tracking-tight text-gray-200"> ${" "} ${text3.replaceAll("?", " ")} </h5> ${chunksa[i][i1]?.text.slice(0, 150)} ...
</a> </div>`)} </div>`)} </div> </div> ` })}`;
    }, "/Users/rudix/Desktop/monext/apps/userz/src/pages/index.astro", void 0);
    $$file3 = "/Users/rudix/Desktop/monext/apps/userz/src/pages/index.astro";
    $$url3 = "";
  }
});

// dist/$server_build/chunks/index_DLVGDehB.mjs
var index_DLVGDehB_exports = {};
__export(index_DLVGDehB_exports, {
  page: () => page4,
  renderers: () => renderers
});
var page4;
var init_index_DLVGDehB = __esm({
  "dist/$server_build/chunks/index_DLVGDehB.mjs"() {
    "use strict";
    init_renderers();
    page4 = () => init_index_DN58ykhj().then(() => index_DN58ykhj_exports);
  }
});

// dist/$server_build/_worker.mjs
init_renderers();

// dist/$server_build/manifest_Di6SZzqx.mjs
init_path();
var import_cookie = __toESM(require_cookie(), 1);
init_colors();
init_esm();
init_clsx_m();
init_astro_sKHNJ3WQ();

// ../../node_modules/.pnpm/path-to-regexp@6.2.1/node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a2 = options.prefixes, prefixes2 = _a2 === void 0 ? "./" : _a2;
  var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a3 = tokens[i], nextType = _a3.type, index2 = _a3.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index2, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes2.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }
  var reFlags = flags(options);
  var _a2 = options.encode, encode = _a2 === void 0 ? function(x) {
    return x;
  } : _a2, _b = options.validate, validate = _b === void 0 ? true : _b;
  var matches = tokens.map(function(token) {
    if (typeof token === "object") {
      return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    }
  });
  return function(data) {
    var path = "";
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data ? data[token.name] : void 0;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";
      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
        }
        if (value.length === 0) {
          if (optional)
            continue;
          throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
        }
        for (var j = 0; j < value.length; j++) {
          var segment = encode(value[j], token);
          if (validate && !matches[i].test(segment)) {
            throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
          }
          path += token.prefix + segment + token.suffix;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number") {
        var segment = encode(String(value), token);
        if (validate && !matches[i].test(segment)) {
          throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
        }
        path += token.prefix + segment + token.suffix;
        continue;
      }
      if (optional)
        continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
    }
    return path;
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}

// dist/$server_build/manifest_Di6SZzqx.mjs
var dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
var levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose"))
      ;
    else if (proc.argv.includes("--silent"))
      ;
    else
      ;
  }
}
var Logger = class {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
};
var AstroIntegrationLogger = class _AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new _AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
};
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}
function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}
function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}
var manifest = deserializeManifest({ "adapterName": "@astrojs/cloudflare", "routes": [{ "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "type": "endpoint", "isIndex": false, "route": "/_image", "pattern": "^\\/_image$", "segments": [[{ "content": "_image", "dynamic": false, "spread": false }]], "params": [], "component": "../../node_modules/.pnpm/astro@4.5.5_@types+node@20.11.28_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js", "pathname": "/_image", "prerender": false, "fallbackRoutes": [], "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/_threadid_.DY4-YYNx.css" }], "routeData": { "route": "/t/[tag]", "isIndex": false, "type": "page", "pattern": "^\\/t\\/([^/]+?)\\/?$", "segments": [[{ "content": "t", "dynamic": false, "spread": false }], [{ "content": "tag", "dynamic": true, "spread": false }]], "params": ["tag"], "component": "src/pages/t/[tag].astro", "prerender": false, "fallbackRoutes": [], "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/_threadid_.DY4-YYNx.css" }], "routeData": { "route": "/[threadid]", "isIndex": false, "type": "page", "pattern": "^\\/([^/]+?)\\/?$", "segments": [[{ "content": "threadid", "dynamic": true, "spread": false }]], "params": ["threadid"], "component": "src/pages/[threadid].astro", "prerender": false, "fallbackRoutes": [], "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/_threadid_.DY4-YYNx.css" }], "routeData": { "route": "/", "isIndex": true, "type": "page", "pattern": "^\\/$", "segments": [], "params": [], "component": "src/pages/index.astro", "pathname": "/", "prerender": false, "fallbackRoutes": [], "_meta": { "trailingSlash": "ignore" } } }], "base": "/", "trailingSlash": "ignore", "compressHTML": true, "componentMetadata": [["/Users/rudix/Desktop/monext/apps/userz/src/pages/[threadid].astro", { "propagation": "none", "containsHead": true }], ["/Users/rudix/Desktop/monext/apps/userz/src/pages/index.astro", { "propagation": "none", "containsHead": true }], ["/Users/rudix/Desktop/monext/apps/userz/src/pages/t/[tag].astro", { "propagation": "none", "containsHead": true }]], "renderers": [], "clientDirectives": [["idle", '(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();'], ["load", '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();'], ["media", '(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();'], ["only", '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();'], ["visible", '(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value=="object"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event("astro:visible"));})();']], "entryModules": { "\0astro-internal:middleware": "_astro-internal_middleware.mjs", "\0@astrojs-ssr-virtual-entry": "_worker.mjs", "\0@astro-renderers": "renderers.mjs", "/src/pages/[threadid].astro": "chunks/pages/_threadid__D0zY-7gY.mjs", "/../../node_modules/.pnpm/astro@4.5.5_@types+node@20.11.28_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js": "chunks/pages/generic_9maNLffX.mjs", "/src/pages/index.astro": "chunks/pages/index_DN58ykhj.mjs", "\0@astrojs-manifest": "manifest_Di6SZzqx.mjs", "\0@astro-page:../../node_modules/.pnpm/astro@4.5.5_@types+node@20.11.28_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic@_@js": "chunks/generic_CaLv3Au9.mjs", "\0@astro-page:src/pages/t/[tag]@_@astro": "chunks/_tag__CtuL0ud6.mjs", "\0@astro-page:src/pages/[threadid]@_@astro": "chunks/_threadid__uDyofaKZ.mjs", "\0@astro-page:src/pages/index@_@astro": "chunks/index_DLVGDehB.mjs", "/Users/rudix/Desktop/monext/apps/userz/src/components/Search": "_astro/Search.UYcR9SEx.js", "astro:scripts/before-hydration.js": "" }, "inlinedScripts": [], "assets": ["/_astro/_threadid_.DY4-YYNx.css", "/[type].ayth.html", "/ailogo.png", "/favicon.ico", "/favicon.svg", "/flow.js", "/logo.png", "/logo2.png", "/logotext.png", "/logotext.svg", "/roboto-regular.woff2", "/roboto.ttf", "/robots.txt", "/sam.html", "/test.js", "/$server_build/_astro-internal_middleware.mjs", "/$server_build/_worker.mjs", "/$server_build/middleware.mjs", "/$server_build/renderers.mjs", "/_astro/Search.UYcR9SEx.js", "/fonts/tilt.ttf", "/$server_build/_astro/_threadid_.DY4-YYNx.css", "/$server_build/chunks/_astro-internal_middleware_D7bQAAD3.mjs", "/$server_build/chunks/_tag__CtuL0ud6.mjs", "/$server_build/chunks/_threadid__uDyofaKZ.mjs", "/$server_build/chunks/astro_sKHNJ3WQ.mjs", "/$server_build/chunks/generic_CaLv3Au9.mjs", "/$server_build/chunks/index_DLVGDehB.mjs", "/$server_build/chunks/astro/assets-service_BZ7sqiXt.mjs", "/$server_build/chunks/pages/_tag__K0V7HO7C.mjs", "/$server_build/chunks/pages/_threadid__D0zY-7gY.mjs", "/$server_build/chunks/pages/generic_9maNLffX.mjs", "/$server_build/chunks/pages/index_DN58ykhj.mjs"], "buildFormat": "directory" });

// dist/$server_build/_worker.mjs
init_path();
init_astro_sKHNJ3WQ();
var import_cookie3 = __toESM(require_cookie(), 1);
init_esm();
init_clsx_m();

// dist/$server_build/chunks/_astro-internal_middleware_D7bQAAD3.mjs
init_path();
var import_cookie2 = __toESM(require_cookie(), 1);
var onRequest$1 = (context, next) => {
  const userAgent2 = context.request.headers.get("user-agent");
  const botDiff = context.request.cf?.verifiedBotCategory;
  const isBot = userAgent2 && /googlebot|bingbot|yandexbot|slurp|duckduckbot/i.test(userAgent2);
  const isBrowser = userAgent2 && /chrome|safari|firefox|edge/i.test(userAgent2);
  const isMobileBrowser = userAgent2 && /android|iphone|ipad|ipod/i.test(userAgent2);
  if (botDiff === "AI Crawler") {
    return new Response(
      "Sorry, this site is not available in your country.",
      {
        status: 404
      }
    );
  } else if (isBrowser || isMobileBrowser || isBot) {
    return next();
  } else {
    return new Response(
      "Sorry, this site is not available in your country.",
      {
        status: 404
      }
    );
  }
};
function sequence(...handlers2) {
  const filtered = handlers2.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    const handler = defineMiddleware((context, next) => {
      return next();
    });
    return handler;
  }
  return defineMiddleware((context, next) => {
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async () => {
        if (i < length - 1) {
          return applyHandle(i + 1, handleContext);
        } else {
          return next();
        }
      });
      return result;
    }
  });
}
function defineMiddleware(fn) {
  return fn;
}
var onRequest = sequence(
  onRequest$1
);

// dist/$server_build/_worker.mjs
init_colors();
function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}
function getPathByLocale(locale, locales) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
  throw new Unreachable();
}
function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}
function toCodes(locales) {
  return locales.map((loopLocale) => {
    if (typeof loopLocale === "string") {
      return loopLocale;
    } else {
      return loopLocale.codes[0];
    }
  });
}
var Unreachable = class extends Error {
  constructor() {
    super(
      "Astro encountered an unexpected line of code.\nIn most cases, this is not your fault, but a bug in astro code.\nIf there isn't one already, please create an issue.\nhttps://astro.build/issues"
    );
  }
};
function parseLocale(header) {
  if (header === "*") {
    return [{ locale: header, qualityValue: void 0 }];
  }
  const result = [];
  const localeValues = header.split(",").map((str) => str.trim());
  for (const localeValue of localeValues) {
    const split = localeValue.split(";").map((str) => str.trim());
    const localeName = split[0];
    const qualityValue = split[1];
    if (!split) {
      continue;
    }
    if (qualityValue && qualityValue.startsWith("q=")) {
      const qualityValueAsFloat = Number.parseFloat(qualityValue.slice("q=".length));
      if (Number.isNaN(qualityValueAsFloat) || qualityValueAsFloat > 1) {
        result.push({
          locale: localeName,
          qualityValue: void 0
        });
      } else {
        result.push({
          locale: localeName,
          qualityValue: qualityValueAsFloat
        });
      }
    } else {
      result.push({
        locale: localeName,
        qualityValue: void 0
      });
    }
  }
  return result;
}
function sortAndFilterLocales(browserLocaleList, locales) {
  const normalizedLocales = toCodes(locales).map(normalizeTheLocale);
  return browserLocaleList.filter((browserLocale) => {
    if (browserLocale.locale !== "*") {
      return normalizedLocales.includes(normalizeTheLocale(browserLocale.locale));
    }
    return true;
  }).sort((a, b) => {
    if (a.qualityValue && b.qualityValue) {
      if (a.qualityValue > b.qualityValue) {
        return -1;
      } else if (a.qualityValue < b.qualityValue) {
        return 1;
      }
    }
    return 0;
  });
}
function computePreferredLocale(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = void 0;
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    const firstResult = browserLocaleList.at(0);
    if (firstResult && firstResult.locale !== "*") {
      for (const currentLocale of locales) {
        if (typeof currentLocale === "string") {
          if (normalizeTheLocale(currentLocale) === normalizeTheLocale(firstResult.locale)) {
            result = currentLocale;
          }
        } else {
          for (const currentCode of currentLocale.codes) {
            if (normalizeTheLocale(currentCode) === normalizeTheLocale(firstResult.locale)) {
              result = currentLocale.path;
            }
          }
        }
      }
    }
  }
  return result;
}
function computePreferredLocaleList(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = [];
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    if (browserLocaleList.length === 1 && browserLocaleList.at(0).locale === "*") {
      return locales.map((locale) => {
        if (typeof locale === "string") {
          return locale;
        } else {
          return locale.codes.at(0);
        }
      });
    } else if (browserLocaleList.length > 0) {
      for (const browserLocale of browserLocaleList) {
        for (const loopLocale of locales) {
          if (typeof loopLocale === "string") {
            if (normalizeTheLocale(loopLocale) === normalizeTheLocale(browserLocale.locale)) {
              result.push(loopLocale);
            }
          } else {
            for (const code of loopLocale.codes) {
              if (code === browserLocale.locale) {
                result.push(loopLocale.path);
              }
            }
          }
        }
      }
    }
  }
  return result;
}
function computeCurrentLocale(pathname, locales) {
  for (const segment of pathname.split("/")) {
    for (const locale of locales) {
      if (typeof locale === "string") {
        if (!segment.includes(locale))
          continue;
        if (normalizeTheLocale(locale) === normalizeTheLocale(segment)) {
          return locale;
        }
      } else {
        if (locale.path === segment) {
          return locale.codes.at(0);
        } else {
          for (const code of locale.codes) {
            if (normalizeTheLocale(code) === normalizeTheLocale(segment)) {
              return code;
            }
          }
        }
      }
    }
  }
}
var DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
var DELETED_VALUE = "deleted";
var responseSentSymbol2 = Symbol.for("astro.responseSent");
var AstroCookie = class {
  constructor(value) {
    this.value = value;
  }
  json() {
    if (this.value === void 0) {
      throw new Error(`Cannot convert undefined to an object.`);
    }
    return JSON.parse(this.value);
  }
  number() {
    return Number(this.value);
  }
  boolean() {
    if (this.value === "false")
      return false;
    if (this.value === "0")
      return false;
    return Boolean(this.value);
  }
};
var AstroCookies = class {
  #request;
  #requestValues;
  #outgoing;
  #consumed;
  constructor(request) {
    this.#request = request;
    this.#requestValues = null;
    this.#outgoing = null;
    this.#consumed = false;
  }
  /**
   * Astro.cookies.delete(key) is used to delete a cookie. Using this method will result
   * in a Set-Cookie header added to the response.
   * @param key The cookie to delete
   * @param options Options related to this deletion, such as the path of the cookie.
   */
  delete(key, options) {
    const serializeOptions = {
      expires: DELETED_EXPIRATION
    };
    if (options?.domain) {
      serializeOptions.domain = options.domain;
    }
    if (options?.path) {
      serializeOptions.path = options.path;
    }
    this.#ensureOutgoingMap().set(key, [
      DELETED_VALUE,
      (0, import_cookie3.serialize)(key, DELETED_VALUE, serializeOptions),
      false
    ]);
  }
  /**
   * Astro.cookies.get(key) is used to get a cookie value. The cookie value is read from the
   * request. If you have set a cookie via Astro.cookies.set(key, value), the value will be taken
   * from that set call, overriding any values already part of the request.
   * @param key The cookie to get.
   * @returns An object containing the cookie value as well as convenience methods for converting its value.
   */
  get(key, options = void 0) {
    if (this.#outgoing?.has(key)) {
      let [serializedValue, , isSetValue] = this.#outgoing.get(key);
      if (isSetValue) {
        return new AstroCookie(serializedValue);
      } else {
        return void 0;
      }
    }
    const values = this.#ensureParsed(options);
    if (key in values) {
      const value = values[key];
      return new AstroCookie(value);
    }
  }
  /**
   * Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
   * part of the initial request or set via Astro.cookies.set(key)
   * @param key The cookie to check for.
   * @returns
   */
  has(key, options = void 0) {
    if (this.#outgoing?.has(key)) {
      let [, , isSetValue] = this.#outgoing.get(key);
      return isSetValue;
    }
    const values = this.#ensureParsed(options);
    return !!values[key];
  }
  /**
   * Astro.cookies.set(key, value) is used to set a cookie's value. If provided
   * an object it will be stringified via JSON.stringify(value). Additionally you
   * can provide options customizing how this cookie will be set, such as setting httpOnly
   * in order to prevent the cookie from being read in client-side JavaScript.
   * @param key The name of the cookie to set.
   * @param value A value, either a string or other primitive or an object.
   * @param options Options for the cookie, such as the path and security settings.
   */
  set(key, value, options) {
    if (this.#consumed) {
      const warning = new Error(
        "Astro.cookies.set() was called after the cookies had already been sent to the browser.\nThis may have happened if this method was called in an imported component.\nPlease make sure that Astro.cookies.set() is only called in the frontmatter of the main page."
      );
      warning.name = "Warning";
      console.warn(warning);
    }
    let serializedValue;
    if (typeof value === "string") {
      serializedValue = value;
    } else {
      let toStringValue = value.toString();
      if (toStringValue === Object.prototype.toString.call(value)) {
        serializedValue = JSON.stringify(value);
      } else {
        serializedValue = toStringValue;
      }
    }
    const serializeOptions = {};
    if (options) {
      Object.assign(serializeOptions, options);
    }
    this.#ensureOutgoingMap().set(key, [
      serializedValue,
      (0, import_cookie3.serialize)(key, serializedValue, serializeOptions),
      true
    ]);
    if (this.#request[responseSentSymbol2]) {
      throw new AstroError({
        ...ResponseSentError
      });
    }
  }
  /**
   * Astro.cookies.header() returns an iterator for the cookies that have previously
   * been set by either Astro.cookies.set() or Astro.cookies.delete().
   * This method is primarily used by adapters to set the header on outgoing responses.
   * @returns
   */
  *headers() {
    if (this.#outgoing == null)
      return;
    for (const [, value] of this.#outgoing) {
      yield value[1];
    }
  }
  /**
   * Behaves the same as AstroCookies.prototype.headers(),
   * but allows a warning when cookies are set after the instance is consumed.
   */
  static consume(cookies) {
    cookies.#consumed = true;
    return cookies.headers();
  }
  #ensureParsed(options = void 0) {
    if (!this.#requestValues) {
      this.#parse(options);
    }
    if (!this.#requestValues) {
      this.#requestValues = {};
    }
    return this.#requestValues;
  }
  #ensureOutgoingMap() {
    if (!this.#outgoing) {
      this.#outgoing = /* @__PURE__ */ new Map();
    }
    return this.#outgoing;
  }
  #parse(options = void 0) {
    const raw = this.#request.headers.get("cookie");
    if (!raw) {
      return;
    }
    this.#requestValues = (0, import_cookie3.parse)(raw, options);
  }
};
var astroCookiesSymbol = Symbol.for("astro.cookies");
function attachCookiesToResponse(response, cookies) {
  Reflect.set(response, astroCookiesSymbol, cookies);
}
function getFromResponse(response) {
  let cookies = Reflect.get(response, astroCookiesSymbol);
  if (cookies != null) {
    return cookies;
  } else {
    return void 0;
  }
}
function* getSetCookiesFromResponse(response) {
  const cookies = getFromResponse(response);
  if (!cookies) {
    return [];
  }
  for (const headerValue of AstroCookies.consume(cookies)) {
    yield headerValue;
  }
  return [];
}
var consoleLogDestination = {
  write(event) {
    let dest = console.error;
    if (levels[event.level] < levels["error"]) {
      dest = console.log;
    }
    if (event.label === "SKIP_FORMAT") {
      dest(event.message);
    } else {
      dest(getEventPrefix(event) + " " + event.message);
    }
    return true;
  }
};
var RedirectComponentInstance = {
  default() {
    return new Response(null, {
      status: 301
    });
  }
};
var RedirectSinglePageBuiltModule = {
  page: () => Promise.resolve(RedirectComponentInstance),
  onRequest: (_, next) => next(),
  renderers: []
};
function routeIsRedirect(route) {
  return route?.type === "redirect";
}
function routeIsFallback(route) {
  return route?.type === "fallback";
}
async function renderRedirect(renderContext) {
  const {
    request: { method },
    routeData
  } = renderContext;
  const { redirect, redirectRoute } = routeData;
  const status = redirectRoute && typeof redirect === "object" ? redirect.status : method === "GET" ? 301 : 308;
  const headers = { location: encodeURI(redirectRouteGenerate(renderContext)) };
  return new Response(null, { status, headers });
}
function redirectRouteGenerate(renderContext) {
  const {
    params,
    routeData: { redirect, redirectRoute }
  } = renderContext;
  if (typeof redirectRoute !== "undefined") {
    return redirectRoute?.generate(params) || redirectRoute?.pathname || "/";
  } else if (typeof redirect === "string") {
    let target = redirect;
    for (const param of Object.keys(params)) {
      const paramValue = params[param];
      target = target.replace(`[${param}]`, paramValue);
      target = target.replace(`[...${param}]`, paramValue);
    }
    return target;
  } else if (typeof redirect === "undefined") {
    return "/";
  }
  return redirect.destination;
}
async function callMiddleware(onRequest3, apiContext, responseFunction) {
  let nextCalled = false;
  let responseFunctionPromise = void 0;
  const next = async () => {
    nextCalled = true;
    responseFunctionPromise = responseFunction();
    return responseFunctionPromise;
  };
  let middlewarePromise = onRequest3(apiContext, next);
  return await Promise.resolve(middlewarePromise).then(async (value) => {
    if (nextCalled) {
      if (typeof value !== "undefined") {
        if (value instanceof Response === false) {
          throw new AstroError(MiddlewareNotAResponse);
        }
        return value;
      } else {
        if (responseFunctionPromise) {
          return responseFunctionPromise;
        } else {
          throw new AstroError(MiddlewareNotAResponse);
        }
      }
    } else if (typeof value === "undefined") {
      throw new AstroError(MiddlewareNoDataOrNextCalled);
    } else if (value instanceof Response === false) {
      throw new AstroError(MiddlewareNotAResponse);
    } else {
      return value;
    }
  });
}
function pathnameHasLocale(pathname, locales) {
  const segments = pathname.split("/");
  for (const segment of segments) {
    for (const locale of locales) {
      if (typeof locale === "string") {
        if (normalizeTheLocale(segment) === normalizeTheLocale(locale)) {
          return true;
        }
      } else if (segment === locale.path) {
        return true;
      }
    }
  }
  return false;
}
function createI18nMiddleware(i18n, base, trailingSlash, buildFormat) {
  if (!i18n)
    return (_, next) => next();
  const prefixAlways = (url, response, context) => {
    if (url.pathname === base + "/" || url.pathname === base) {
      if (shouldAppendForwardSlash(trailingSlash, buildFormat)) {
        return context.redirect(`${appendForwardSlash(joinPaths(base, i18n.defaultLocale))}`);
      } else {
        return context.redirect(`${joinPaths(base, i18n.defaultLocale)}`);
      }
    } else if (!pathnameHasLocale(url.pathname, i18n.locales)) {
      return notFound(response);
    }
    return void 0;
  };
  const prefixOtherLocales = (url, response) => {
    let pathnameContainsDefaultLocale = false;
    for (const segment of url.pathname.split("/")) {
      if (normalizeTheLocale(segment) === normalizeTheLocale(i18n.defaultLocale)) {
        pathnameContainsDefaultLocale = true;
        break;
      }
    }
    if (pathnameContainsDefaultLocale) {
      const newLocation = url.pathname.replace(`/${i18n.defaultLocale}`, "");
      response.headers.set("Location", newLocation);
      return notFound(response);
    }
    return void 0;
  };
  const prefixAlwaysNoRedirect = (url, response) => {
    const isRoot = url.pathname === base + "/" || url.pathname === base;
    if (!(isRoot || pathnameHasLocale(url.pathname, i18n.locales))) {
      return notFound(response);
    }
    return void 0;
  };
  return async (context, next) => {
    const response = await next();
    const type = response.headers.get(ROUTE_TYPE_HEADER);
    if (type !== "page" && type !== "fallback") {
      return response;
    }
    const { url, currentLocale } = context;
    const { locales, defaultLocale, fallback, strategy } = i18n;
    switch (i18n.strategy) {
      case "domains-prefix-other-locales": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = prefixOtherLocales(url, response);
          if (result) {
            return result;
          }
        }
        break;
      }
      case "pathname-prefix-other-locales": {
        const result = prefixOtherLocales(url, response);
        if (result) {
          return result;
        }
        break;
      }
      case "domains-prefix-always-no-redirect": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = prefixAlwaysNoRedirect(url, response);
          if (result) {
            return result;
          }
        }
        break;
      }
      case "pathname-prefix-always-no-redirect": {
        const result = prefixAlwaysNoRedirect(url, response);
        if (result) {
          return result;
        }
        break;
      }
      case "pathname-prefix-always": {
        const result = prefixAlways(url, response, context);
        if (result) {
          return result;
        }
        break;
      }
      case "domains-prefix-always": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = prefixAlways(url, response, context);
          if (result) {
            return result;
          }
        }
        break;
      }
    }
    if (response.status >= 300 && fallback) {
      const fallbackKeys = i18n.fallback ? Object.keys(i18n.fallback) : [];
      const segments = url.pathname.split("/");
      const urlLocale = segments.find((segment) => {
        for (const locale of locales) {
          if (typeof locale === "string") {
            if (locale === segment) {
              return true;
            }
          } else if (locale.path === segment) {
            return true;
          }
        }
        return false;
      });
      if (urlLocale && fallbackKeys.includes(urlLocale)) {
        const fallbackLocale = fallback[urlLocale];
        const pathFallbackLocale = getPathByLocale(fallbackLocale, locales);
        let newPathname;
        if (pathFallbackLocale === defaultLocale && strategy === "pathname-prefix-other-locales") {
          newPathname = url.pathname.replace(`/${urlLocale}`, ``);
        } else {
          newPathname = url.pathname.replace(`/${urlLocale}`, `/${pathFallbackLocale}`);
        }
        return context.redirect(newPathname);
      }
    }
    return response;
  };
}
function notFound(response) {
  if (response.headers.get(REROUTE_DIRECTIVE_HEADER) === "no")
    return response;
  return new Response(null, {
    status: 404,
    headers: response.headers
  });
}
function localeHasntDomain(i18n, currentLocale) {
  for (const domainLocale of Object.values(i18n.domainLookupTable)) {
    if (domainLocale === currentLocale) {
      return false;
    }
  }
  return true;
}
var VALID_PARAM_TYPES = ["string", "number", "undefined"];
function validateGetStaticPathsParameter([key, value], route) {
  if (!VALID_PARAM_TYPES.includes(typeof value)) {
    throw new AstroError({
      ...GetStaticPathsInvalidRouteParam,
      message: GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
      location: {
        file: route
      }
    });
  }
}
function validateDynamicRouteModule(mod, {
  ssr,
  route
}) {
  if ((!ssr || route.prerender) && !mod.getStaticPaths) {
    throw new AstroError({
      ...GetStaticPathsRequired,
      location: { file: route.component }
    });
  }
}
function validateGetStaticPathsResult(result, logger, route) {
  if (!Array.isArray(result)) {
    throw new AstroError({
      ...InvalidGetStaticPathsReturn,
      message: InvalidGetStaticPathsReturn.message(typeof result),
      location: {
        file: route.component
      }
    });
  }
  result.forEach((pathObject) => {
    if (typeof pathObject === "object" && Array.isArray(pathObject) || pathObject === null) {
      throw new AstroError({
        ...InvalidGetStaticPathsEntry,
        message: InvalidGetStaticPathsEntry.message(
          Array.isArray(pathObject) ? "array" : typeof pathObject
        )
      });
    }
    if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0) {
      throw new AstroError({
        ...GetStaticPathsExpectedParams,
        location: {
          file: route.component
        }
      });
    }
    for (const [key, val] of Object.entries(pathObject.params)) {
      if (!(typeof val === "undefined" || typeof val === "string" || typeof val === "number")) {
        logger.warn(
          "router",
          `getStaticPaths() returned an invalid path param: "${key}". A string, number or undefined value was expected, but got \`${JSON.stringify(
            val
          )}\`.`
        );
      }
      if (typeof val === "string" && val === "") {
        logger.warn(
          "router",
          `getStaticPaths() returned an invalid path param: "${key}". \`undefined\` expected for an optional param, but got empty string.`
        );
      }
    }
  });
}
function stringifyParams(params, route) {
  const validatedParams = Object.entries(params).reduce((acc, next) => {
    validateGetStaticPathsParameter(next, route.component);
    const [key, value] = next;
    if (value !== void 0) {
      acc[key] = typeof value === "string" ? trimSlashes(value) : value.toString();
    }
    return acc;
  }, {});
  return JSON.stringify(route.generate(validatedParams));
}
function generatePaginateFunction(routeMatch) {
  return function paginateUtility(data, args = {}) {
    let { pageSize: _pageSize, params: _params, props: _props } = args;
    const pageSize = _pageSize || 10;
    const paramName = "page";
    const additionalParams = _params || {};
    const additionalProps = _props || {};
    let includesFirstPageNumber;
    if (routeMatch.params.includes(`...${paramName}`)) {
      includesFirstPageNumber = false;
    } else if (routeMatch.params.includes(`${paramName}`)) {
      includesFirstPageNumber = true;
    } else {
      throw new AstroError({
        ...PageNumberParamNotFound,
        message: PageNumberParamNotFound.message(paramName)
      });
    }
    const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
    const result = [...Array(lastPage).keys()].map((num) => {
      const pageNum = num + 1;
      const start = pageSize === Infinity ? 0 : (pageNum - 1) * pageSize;
      const end3 = Math.min(start + pageSize, data.length);
      const params = {
        ...additionalParams,
        [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
      };
      const current = correctIndexRoute(routeMatch.generate({ ...params }));
      const next = pageNum === lastPage ? void 0 : correctIndexRoute(routeMatch.generate({ ...params, page: String(pageNum + 1) }));
      const prev = pageNum === 1 ? void 0 : correctIndexRoute(
        routeMatch.generate({
          ...params,
          page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
        })
      );
      return {
        params,
        props: {
          ...additionalProps,
          page: {
            data: data.slice(start, end3),
            start,
            end: end3 - 1,
            size: pageSize,
            total: data.length,
            currentPage: pageNum,
            lastPage,
            url: { current, next, prev }
          }
        }
      };
    });
    return result;
  };
}
function correctIndexRoute(route) {
  if (route === "") {
    return "/";
  }
  return route;
}
async function callGetStaticPaths({
  mod,
  route,
  routeCache,
  logger,
  ssr
}) {
  const cached = routeCache.get(route);
  if (!mod) {
    throw new Error("This is an error caused by Astro and not your code. Please file an issue.");
  }
  if (cached?.staticPaths) {
    return cached.staticPaths;
  }
  validateDynamicRouteModule(mod, { ssr, route });
  if (ssr && !route.prerender) {
    const entry = Object.assign([], { keyed: /* @__PURE__ */ new Map() });
    routeCache.set(route, { ...cached, staticPaths: entry });
    return entry;
  }
  let staticPaths = [];
  if (!mod.getStaticPaths) {
    throw new Error("Unexpected Error.");
  }
  staticPaths = await mod.getStaticPaths({
    // Q: Why the cast?
    // A: So users downstream can have nicer typings, we have to make some sacrifice in our internal typings, which necessitate a cast here
    paginate: generatePaginateFunction(route)
  });
  validateGetStaticPathsResult(staticPaths, logger, route);
  const keyedStaticPaths = staticPaths;
  keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
  for (const sp of keyedStaticPaths) {
    const paramsKey = stringifyParams(sp.params, route);
    keyedStaticPaths.keyed.set(paramsKey, sp);
  }
  routeCache.set(route, { ...cached, staticPaths: keyedStaticPaths });
  return keyedStaticPaths;
}
var RouteCache = class {
  logger;
  cache = {};
  mode;
  constructor(logger, mode = "production") {
    this.logger = logger;
    this.mode = mode;
  }
  /** Clear the cache. */
  clearAll() {
    this.cache = {};
  }
  set(route, entry) {
    const key = this.key(route);
    if (this.mode === "production" && this.cache[key]?.staticPaths) {
      this.logger.warn(null, `Internal Warning: route cache overwritten. (${key})`);
    }
    this.cache[key] = entry;
  }
  get(route) {
    return this.cache[this.key(route)];
  }
  key(route) {
    return `${route.route}_${route.component}`;
  }
};
function findPathItemByKey(staticPaths, params, route, logger) {
  const paramsKey = stringifyParams(params, route);
  const matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath) {
    return matchedStaticPath;
  }
  logger.debug("router", `findPathItemByKey() - Unexpected cache miss looking for ${paramsKey}`);
}
var Pipeline = class {
  constructor(logger, manifest3, mode, renderers2, resolve, serverLike, streaming, adapterName = manifest3.adapterName, clientDirectives = manifest3.clientDirectives, inlinedScripts = manifest3.inlinedScripts, compressHTML = manifest3.compressHTML, i18n = manifest3.i18n, middleware = manifest3.middleware, routeCache = new RouteCache(logger, mode), site = manifest3.site ? new URL(manifest3.site) : void 0) {
    this.logger = logger;
    this.manifest = manifest3;
    this.mode = mode;
    this.renderers = renderers2;
    this.resolve = resolve;
    this.serverLike = serverLike;
    this.streaming = streaming;
    this.adapterName = adapterName;
    this.clientDirectives = clientDirectives;
    this.inlinedScripts = inlinedScripts;
    this.compressHTML = compressHTML;
    this.i18n = i18n;
    this.middleware = middleware;
    this.routeCache = routeCache;
    this.site = site;
    this.internalMiddleware = [
      createI18nMiddleware(i18n, manifest3.base, manifest3.trailingSlash, manifest3.buildFormat)
    ];
  }
  internalMiddleware;
};
async function getProps(opts) {
  const { logger, mod, routeData: route, routeCache, pathname, serverLike } = opts;
  if (!route || route.pathname) {
    return {};
  }
  if (routeIsRedirect(route) || routeIsFallback(route) || route.component === DEFAULT_404_COMPONENT) {
    return {};
  }
  const params = getParams(route, pathname);
  if (mod) {
    validatePrerenderEndpointCollision(route, mod, params);
  }
  const staticPaths = await callGetStaticPaths({
    mod,
    route,
    routeCache,
    logger,
    ssr: serverLike
  });
  const matchedStaticPath = findPathItemByKey(staticPaths, params, route, logger);
  if (!matchedStaticPath && (serverLike ? route.prerender : true)) {
    throw new AstroError({
      ...NoMatchingStaticPathFound,
      message: NoMatchingStaticPathFound.message(pathname),
      hint: NoMatchingStaticPathFound.hint([route.component])
    });
  }
  const props = matchedStaticPath?.props ? { ...matchedStaticPath.props } : {};
  return props;
}
function getParams(route, pathname) {
  if (!route.params.length)
    return {};
  const paramsMatch = route.pattern.exec(decodeURIComponent(pathname));
  if (!paramsMatch)
    return {};
  const params = {};
  route.params.forEach((key, i) => {
    if (key.startsWith("...")) {
      params[key.slice(3)] = paramsMatch[i + 1] ? paramsMatch[i + 1] : void 0;
    } else {
      params[key] = paramsMatch[i + 1];
    }
  });
  return params;
}
function validatePrerenderEndpointCollision(route, mod, params) {
  if (route.type === "endpoint" && mod.getStaticPaths) {
    const lastSegment = route.segments[route.segments.length - 1];
    const paramValues = Object.values(params);
    const lastParam = paramValues[paramValues.length - 1];
    if (lastSegment.length === 1 && lastSegment[0].dynamic && lastParam === void 0) {
      throw new AstroError({
        ...PrerenderDynamicEndpointPathCollide,
        message: PrerenderDynamicEndpointPathCollide.message(route.route),
        hint: PrerenderDynamicEndpointPathCollide.hint(route.component),
        location: {
          file: route.component
        }
      });
    }
  }
}
function getFunctionExpression(slot) {
  if (!slot)
    return;
  if (slot.expressions?.length !== 1)
    return;
  return slot.expressions[0];
}
var Slots = class {
  #result;
  #slots;
  #logger;
  constructor(result, slots, logger) {
    this.#result = result;
    this.#slots = slots;
    this.#logger = logger;
    if (slots) {
      for (const key of Object.keys(slots)) {
        if (this[key] !== void 0) {
          throw new AstroError({
            ...ReservedSlotName,
            message: ReservedSlotName.message(key)
          });
        }
        Object.defineProperty(this, key, {
          get() {
            return true;
          },
          enumerable: true
        });
      }
    }
  }
  has(name) {
    if (!this.#slots)
      return false;
    return Boolean(this.#slots[name]);
  }
  async render(name, args = []) {
    if (!this.#slots || !this.has(name))
      return;
    const result = this.#result;
    if (!Array.isArray(args)) {
      this.#logger.warn(
        null,
        `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
      );
    } else if (args.length > 0) {
      const slotValue = this.#slots[name];
      const component = typeof slotValue === "function" ? await slotValue(result) : await slotValue;
      const expression = getFunctionExpression(component);
      if (expression) {
        const slot = async () => typeof expression === "function" ? expression(...args) : expression;
        return await renderSlotToString(result, slot).then((res) => {
          return res;
        });
      }
      if (typeof component === "function") {
        return await renderJSX(result, component(...args)).then(
          (res) => res != null ? String(res) : res
        );
      }
    }
    const content = await renderSlotToString(result, this.#slots[name]);
    const outHTML = chunkToString(result, content);
    return outHTML;
  }
};
var RenderContext = class _RenderContext {
  constructor(pipeline, locals, middleware, pathname, request, routeData, status, cookies = new AstroCookies(request), params = getParams(routeData, pathname), url = new URL(request.url)) {
    this.pipeline = pipeline;
    this.locals = locals;
    this.middleware = middleware;
    this.pathname = pathname;
    this.request = request;
    this.routeData = routeData;
    this.status = status;
    this.cookies = cookies;
    this.params = params;
    this.url = url;
  }
  static create({
    locals = {},
    middleware,
    pathname,
    pipeline,
    request,
    routeData,
    status = 200
  }) {
    return new _RenderContext(
      pipeline,
      locals,
      sequence(...pipeline.internalMiddleware, middleware ?? pipeline.middleware),
      pathname,
      request,
      routeData,
      status
    );
  }
  /**
   * The main function of the RenderContext.
   *
   * Use this function to render any route known to Astro.
   * It attempts to render a route. A route can be a:
   *
   * - page
   * - redirect
   * - endpoint
   * - fallback
   */
  async render(componentInstance) {
    const { cookies, middleware, pathname, pipeline, routeData } = this;
    const { logger, routeCache, serverLike, streaming } = pipeline;
    const props = await getProps({
      mod: componentInstance,
      routeData,
      routeCache,
      pathname,
      logger,
      serverLike
    });
    const apiContext = this.createAPIContext(props);
    const { type } = routeData;
    const lastNext = type === "endpoint" ? () => renderEndpoint(componentInstance, apiContext, serverLike, logger) : type === "redirect" ? () => renderRedirect(this) : type === "page" ? async () => {
      const result = await this.createResult(componentInstance);
      const response2 = await renderPage(
        result,
        componentInstance?.default,
        props,
        {},
        streaming,
        routeData
      );
      response2.headers.set(ROUTE_TYPE_HEADER, "page");
      if (routeData.route === "/404" || routeData.route === "/500") {
        response2.headers.set(REROUTE_DIRECTIVE_HEADER, "no");
      }
      return response2;
    } : type === "fallback" ? () => new Response(null, { status: 500, headers: { [ROUTE_TYPE_HEADER]: "fallback" } }) : () => {
      throw new Error("Unknown type of route: " + type);
    };
    const response = await callMiddleware(middleware, apiContext, lastNext);
    if (response.headers.get(ROUTE_TYPE_HEADER)) {
      response.headers.delete(ROUTE_TYPE_HEADER);
    }
    attachCookiesToResponse(response, cookies);
    return response;
  }
  createAPIContext(props) {
    const renderContext = this;
    const { cookies, params, pipeline, request, url } = this;
    const generator = `Astro v${ASTRO_VERSION}`;
    const redirect = (path, status = 302) => new Response(null, { status, headers: { Location: path } });
    return {
      cookies,
      get clientAddress() {
        return renderContext.clientAddress();
      },
      get currentLocale() {
        return renderContext.computeCurrentLocale();
      },
      generator,
      get locals() {
        return renderContext.locals;
      },
      // TODO(breaking): disallow replacing the locals object
      set locals(val) {
        if (typeof val !== "object") {
          throw new AstroError(LocalsNotAnObject);
        } else {
          renderContext.locals = val;
          Reflect.set(request, clientLocalsSymbol, val);
        }
      },
      params,
      get preferredLocale() {
        return renderContext.computePreferredLocale();
      },
      get preferredLocaleList() {
        return renderContext.computePreferredLocaleList();
      },
      props,
      redirect,
      request,
      site: pipeline.site,
      url
    };
  }
  async createResult(mod) {
    const { cookies, pathname, pipeline, routeData, status } = this;
    const { clientDirectives, inlinedScripts, compressHTML, manifest: manifest3, renderers: renderers2, resolve } = pipeline;
    const { links, scripts, styles: styles2 } = await pipeline.headElements(routeData);
    const componentMetadata = await pipeline.componentMetadata(routeData) ?? manifest3.componentMetadata;
    const headers = new Headers({ "Content-Type": "text/html" });
    const partial = Boolean(mod.partial);
    const response = {
      status,
      statusText: "OK",
      get headers() {
        return headers;
      },
      // Disallow `Astro.response.headers = new Headers`
      set headers(_) {
        throw new AstroError(AstroResponseHeadersReassigned);
      }
    };
    const result = {
      clientDirectives,
      inlinedScripts,
      componentMetadata,
      compressHTML,
      cookies,
      /** This function returns the `Astro` faux-global */
      createAstro: (astroGlobal, props, slots) => this.createAstro(result, astroGlobal, props, slots),
      links,
      partial,
      pathname,
      renderers: renderers2,
      resolve,
      response,
      scripts,
      styles: styles2,
      _metadata: {
        hasHydrationScript: false,
        rendererSpecificHydrationScripts: /* @__PURE__ */ new Set(),
        hasRenderedHead: false,
        renderedScripts: /* @__PURE__ */ new Set(),
        hasDirectives: /* @__PURE__ */ new Set(),
        headInTree: false,
        extraHead: [],
        propagators: /* @__PURE__ */ new Set()
      }
    };
    return result;
  }
  createAstro(result, astroGlobalPartial, props, slotValues) {
    const renderContext = this;
    const { cookies, locals, params, pipeline, request, url } = this;
    const { response } = result;
    const redirect = (path, status = 302) => {
      if (request[responseSentSymbol]) {
        throw new AstroError({
          ...ResponseSentError
        });
      }
      return new Response(null, { status, headers: { Location: path } });
    };
    const slots = new Slots(result, slotValues, pipeline.logger);
    const astroGlobalCombined = {
      ...astroGlobalPartial,
      cookies,
      get clientAddress() {
        return renderContext.clientAddress();
      },
      get currentLocale() {
        return renderContext.computeCurrentLocale();
      },
      params,
      get preferredLocale() {
        return renderContext.computePreferredLocale();
      },
      get preferredLocaleList() {
        return renderContext.computePreferredLocaleList();
      },
      props,
      locals,
      redirect,
      request,
      response,
      slots,
      site: pipeline.site,
      url
    };
    return astroGlobalCombined;
  }
  clientAddress() {
    const { pipeline, request } = this;
    if (clientAddressSymbol in request) {
      return Reflect.get(request, clientAddressSymbol);
    }
    if (pipeline.adapterName) {
      throw new AstroError({
        ...ClientAddressNotAvailable,
        message: ClientAddressNotAvailable.message(pipeline.adapterName)
      });
    } else {
      throw new AstroError(StaticClientAddressNotAvailable);
    }
  }
  /**
   * API Context may be created multiple times per request, i18n data needs to be computed only once.
   * So, it is computed and saved here on creation of the first APIContext and reused for later ones.
   */
  #currentLocale;
  computeCurrentLocale() {
    const {
      url,
      pipeline: { i18n },
      routeData
    } = this;
    if (!i18n)
      return;
    const { defaultLocale, locales, strategy } = i18n;
    const fallbackTo = strategy === "pathname-prefix-other-locales" || strategy === "domains-prefix-other-locales" ? defaultLocale : void 0;
    return this.#currentLocale ??= computeCurrentLocale(routeData.route, locales) ?? computeCurrentLocale(url.pathname, locales) ?? fallbackTo;
  }
  #preferredLocale;
  computePreferredLocale() {
    const {
      pipeline: { i18n },
      request
    } = this;
    if (!i18n)
      return;
    return this.#preferredLocale ??= computePreferredLocale(request, i18n.locales);
  }
  #preferredLocaleList;
  computePreferredLocaleList() {
    const {
      pipeline: { i18n },
      request
    } = this;
    if (!i18n)
      return;
    return this.#preferredLocaleList ??= computePreferredLocaleList(request, i18n.locales);
  }
};
function getAssetsPrefix(fileExtension2, assetsPrefix) {
  if (!assetsPrefix)
    return "";
  if (typeof assetsPrefix === "string")
    return assetsPrefix;
  const dotLessFileExtension = fileExtension2.slice(1);
  if (assetsPrefix[dotLessFileExtension]) {
    return assetsPrefix[dotLessFileExtension];
  }
  return assetsPrefix.fallback;
}
function createAssetLink(href, base, assetsPrefix) {
  if (assetsPrefix) {
    const pf = getAssetsPrefix(fileExtension(href), assetsPrefix);
    return joinPaths(pf, slash(href));
  } else if (base) {
    return prependForwardSlash(joinPaths(base, slash(href)));
  } else {
    return href;
  }
}
function createStylesheetElement(stylesheet, base, assetsPrefix) {
  if (stylesheet.type === "inline") {
    return {
      props: {},
      children: stylesheet.content
    };
  } else {
    return {
      props: {
        rel: "stylesheet",
        href: createAssetLink(stylesheet.src, base, assetsPrefix)
      },
      children: ""
    };
  }
}
function createStylesheetElementSet(stylesheets, base, assetsPrefix) {
  return new Set(stylesheets.map((s) => createStylesheetElement(s, base, assetsPrefix)));
}
function createModuleScriptElement(script, base, assetsPrefix) {
  if (script.type === "external") {
    return createModuleScriptElementWithSrc(script.value, base, assetsPrefix);
  } else {
    return {
      props: {
        type: "module"
      },
      children: script.value
    };
  }
}
function createModuleScriptElementWithSrc(src, base, assetsPrefix) {
  return {
    props: {
      type: "module",
      src: createAssetLink(src, base, assetsPrefix)
    },
    children: ""
  };
}
function ensure404Route(manifest3) {
  if (!manifest3.routes.some((route) => route.route === "/404")) {
    manifest3.routes.push({
      component: DEFAULT_404_COMPONENT,
      generate: () => "",
      params: [],
      pattern: /\/404/,
      prerender: false,
      segments: [],
      type: "page",
      route: "/404",
      fallbackRoutes: [],
      isIndex: false
    });
  }
  return manifest3;
}
function matchRoute(pathname, manifest3) {
  const decodedPathname = decodeURI(pathname);
  return manifest3.routes.find((route) => {
    return route.pattern.test(decodedPathname) || route.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(decodedPathname));
  });
}
var AppPipeline = class _AppPipeline extends Pipeline {
  static create({
    logger,
    manifest: manifest3,
    mode,
    renderers: renderers2,
    resolve,
    serverLike,
    streaming
  }) {
    return new _AppPipeline(logger, manifest3, mode, renderers2, resolve, serverLike, streaming);
  }
  headElements(routeData) {
    const routeInfo = this.manifest.routes.find((route) => route.routeData === routeData);
    const links = /* @__PURE__ */ new Set();
    const scripts = /* @__PURE__ */ new Set();
    const styles2 = createStylesheetElementSet(routeInfo?.styles ?? []);
    for (const script of routeInfo?.scripts ?? []) {
      if ("stage" in script) {
        if (script.stage === "head-inline") {
          scripts.add({
            props: {},
            children: script.children
          });
        }
      } else {
        scripts.add(createModuleScriptElement(script));
      }
    }
    return { links, styles: styles2, scripts };
  }
  componentMetadata() {
  }
};
var App = class _App {
  #manifest;
  #manifestData;
  #logger = new Logger({
    dest: consoleLogDestination,
    level: "info"
  });
  #baseWithoutTrailingSlash;
  #pipeline;
  #adapterLogger;
  #renderOptionsDeprecationWarningShown = false;
  constructor(manifest3, streaming = true) {
    this.#manifest = manifest3;
    this.#manifestData = ensure404Route({
      routes: manifest3.routes.map((route) => route.routeData)
    });
    this.#baseWithoutTrailingSlash = removeTrailingForwardSlash(this.#manifest.base);
    this.#pipeline = this.#createPipeline(streaming);
    this.#adapterLogger = new AstroIntegrationLogger(
      this.#logger.options,
      this.#manifest.adapterName
    );
  }
  getAdapterLogger() {
    return this.#adapterLogger;
  }
  /**
   * Creates a pipeline by reading the stored manifest
   *
   * @param streaming
   * @private
   */
  #createPipeline(streaming = false) {
    return AppPipeline.create({
      logger: this.#logger,
      manifest: this.#manifest,
      mode: "production",
      renderers: this.#manifest.renderers,
      resolve: async (specifier) => {
        if (!(specifier in this.#manifest.entryModules)) {
          throw new Error(`Unable to resolve [${specifier}]`);
        }
        const bundlePath = this.#manifest.entryModules[specifier];
        switch (true) {
          case bundlePath.startsWith("data:"):
          case bundlePath.length === 0: {
            return bundlePath;
          }
          default: {
            return createAssetLink(bundlePath, this.#manifest.base, this.#manifest.assetsPrefix);
          }
        }
      },
      serverLike: true,
      streaming
    });
  }
  set setManifestData(newManifestData) {
    this.#manifestData = newManifestData;
  }
  removeBase(pathname) {
    if (pathname.startsWith(this.#manifest.base)) {
      return pathname.slice(this.#baseWithoutTrailingSlash.length + 1);
    }
    return pathname;
  }
  #getPathnameFromRequest(request) {
    const url = new URL(request.url);
    const pathname = prependForwardSlash(this.removeBase(url.pathname));
    return pathname;
  }
  match(request) {
    const url = new URL(request.url);
    if (this.#manifest.assets.has(url.pathname))
      return void 0;
    let pathname = this.#computePathnameFromDomain(request);
    if (!pathname) {
      pathname = prependForwardSlash(this.removeBase(url.pathname));
    }
    let routeData = matchRoute(pathname, this.#manifestData);
    if (!routeData || routeData.prerender)
      return void 0;
    return routeData;
  }
  #computePathnameFromDomain(request) {
    let pathname = void 0;
    const url = new URL(request.url);
    if (this.#manifest.i18n && (this.#manifest.i18n.strategy === "domains-prefix-always" || this.#manifest.i18n.strategy === "domains-prefix-other-locales" || this.#manifest.i18n.strategy === "domains-prefix-always-no-redirect")) {
      let host = request.headers.get("X-Forwarded-Host");
      let protocol = request.headers.get("X-Forwarded-Proto");
      if (protocol) {
        protocol = protocol + ":";
      } else {
        protocol = url.protocol;
      }
      if (!host) {
        host = request.headers.get("Host");
      }
      if (host && protocol) {
        host = host.split(":")[0];
        try {
          let locale;
          const hostAsUrl = new URL(`${protocol}//${host}`);
          for (const [domainKey, localeValue] of Object.entries(
            this.#manifest.i18n.domainLookupTable
          )) {
            const domainKeyAsUrl = new URL(domainKey);
            if (hostAsUrl.host === domainKeyAsUrl.host && hostAsUrl.protocol === domainKeyAsUrl.protocol) {
              locale = localeValue;
              break;
            }
          }
          if (locale) {
            pathname = prependForwardSlash(
              joinPaths(normalizeTheLocale(locale), this.removeBase(url.pathname))
            );
            if (url.pathname.endsWith("/")) {
              pathname = appendForwardSlash(pathname);
            }
          }
        } catch (e) {
          this.#logger.error(
            "router",
            `Astro tried to parse ${protocol}//${host} as an URL, but it threw a parsing error. Check the X-Forwarded-Host and X-Forwarded-Proto headers.`
          );
          this.#logger.error("router", `Error: ${e}`);
        }
      }
    }
    return pathname;
  }
  async render(request, routeDataOrOptions, maybeLocals) {
    let routeData;
    let locals;
    let clientAddress;
    let addCookieHeader;
    if (routeDataOrOptions && ("addCookieHeader" in routeDataOrOptions || "clientAddress" in routeDataOrOptions || "locals" in routeDataOrOptions || "routeData" in routeDataOrOptions)) {
      if ("addCookieHeader" in routeDataOrOptions) {
        addCookieHeader = routeDataOrOptions.addCookieHeader;
      }
      if ("clientAddress" in routeDataOrOptions) {
        clientAddress = routeDataOrOptions.clientAddress;
      }
      if ("routeData" in routeDataOrOptions) {
        routeData = routeDataOrOptions.routeData;
      }
      if ("locals" in routeDataOrOptions) {
        locals = routeDataOrOptions.locals;
      }
    } else {
      routeData = routeDataOrOptions;
      locals = maybeLocals;
      if (routeDataOrOptions || locals) {
        this.#logRenderOptionsDeprecationWarning();
      }
    }
    if (locals) {
      if (typeof locals !== "object") {
        this.#logger.error(null, new AstroError(LocalsNotAnObject).stack);
        return this.#renderError(request, { status: 500 });
      }
      Reflect.set(request, clientLocalsSymbol, locals);
    }
    if (clientAddress) {
      Reflect.set(request, clientAddressSymbol, clientAddress);
    }
    if (request.url !== collapseDuplicateSlashes(request.url)) {
      request = new Request(collapseDuplicateSlashes(request.url), request);
    }
    if (!routeData) {
      routeData = this.match(request);
    }
    if (!routeData) {
      return this.#renderError(request, { locals, status: 404 });
    }
    const pathname = this.#getPathnameFromRequest(request);
    const defaultStatus = this.#getDefaultStatusCode(routeData, pathname);
    const mod = await this.#getModuleForRoute(routeData);
    let response;
    try {
      const renderContext = RenderContext.create({
        pipeline: this.#pipeline,
        locals,
        pathname,
        request,
        routeData,
        status: defaultStatus
      });
      response = await renderContext.render(await mod.page());
    } catch (err) {
      this.#logger.error(null, err.stack || err.message || String(err));
      return this.#renderError(request, { locals, status: 500 });
    }
    if (REROUTABLE_STATUS_CODES.includes(response.status) && response.headers.get(REROUTE_DIRECTIVE_HEADER) !== "no") {
      return this.#renderError(request, {
        locals,
        response,
        status: response.status
      });
    }
    if (response.headers.has(REROUTE_DIRECTIVE_HEADER)) {
      response.headers.delete(REROUTE_DIRECTIVE_HEADER);
    }
    if (addCookieHeader) {
      for (const setCookieHeaderValue of _App.getSetCookieFromResponse(response)) {
        response.headers.append("set-cookie", setCookieHeaderValue);
      }
    }
    Reflect.set(response, responseSentSymbol, true);
    return response;
  }
  #logRenderOptionsDeprecationWarning() {
    if (this.#renderOptionsDeprecationWarningShown)
      return;
    this.#logger.warn(
      "deprecated",
      `The adapter ${this.#manifest.adapterName} is using a deprecated signature of the 'app.render()' method. From Astro 4.0, locals and routeData are provided as properties on an optional object to this method. Using the old signature will cause an error in Astro 5.0. See https://github.com/withastro/astro/pull/9199 for more information.`
    );
    this.#renderOptionsDeprecationWarningShown = true;
  }
  setCookieHeaders(response) {
    return getSetCookiesFromResponse(response);
  }
  /**
   * Reads all the cookies written by `Astro.cookie.set()` onto the passed response.
   * For example,
   * ```ts
   * for (const cookie_ of App.getSetCookieFromResponse(response)) {
   *     const cookie: string = cookie_
   * }
   * ```
   * @param response The response to read cookies from.
   * @returns An iterator that yields key-value pairs as equal-sign-separated strings.
   */
  static getSetCookieFromResponse = getSetCookiesFromResponse;
  /**
   * If it is a known error code, try sending the according page (e.g. 404.astro / 500.astro).
   * This also handles pre-rendered /404 or /500 routes
   */
  async #renderError(request, { locals, status, response: originalResponse, skipMiddleware = false }) {
    const errorRoutePath = `/${status}${this.#manifest.trailingSlash === "always" ? "/" : ""}`;
    const errorRouteData = matchRoute(errorRoutePath, this.#manifestData);
    const url = new URL(request.url);
    if (errorRouteData) {
      if (errorRouteData.prerender) {
        const maybeDotHtml = errorRouteData.route.endsWith(`/${status}`) ? ".html" : "";
        const statusURL = new URL(
          `${this.#baseWithoutTrailingSlash}/${status}${maybeDotHtml}`,
          url
        );
        const response2 = await fetch(statusURL.toString());
        const override = { status };
        return this.#mergeResponses(response2, originalResponse, override);
      }
      const mod = await this.#getModuleForRoute(errorRouteData);
      try {
        const renderContext = RenderContext.create({
          locals,
          pipeline: this.#pipeline,
          middleware: skipMiddleware ? (_, next) => next() : void 0,
          pathname: this.#getPathnameFromRequest(request),
          request,
          routeData: errorRouteData,
          status
        });
        const response2 = await renderContext.render(await mod.page());
        return this.#mergeResponses(response2, originalResponse);
      } catch {
        if (skipMiddleware === false) {
          return this.#renderError(request, {
            locals,
            status,
            response: originalResponse,
            skipMiddleware: true
          });
        }
      }
    }
    const response = this.#mergeResponses(new Response(null, { status }), originalResponse);
    Reflect.set(response, responseSentSymbol, true);
    return response;
  }
  #mergeResponses(newResponse, originalResponse, override) {
    if (!originalResponse) {
      if (override !== void 0) {
        return new Response(newResponse.body, {
          status: override.status,
          statusText: newResponse.statusText,
          headers: newResponse.headers
        });
      }
      return newResponse;
    }
    const status = override?.status ? override.status : originalResponse.status === 200 ? newResponse.status : originalResponse.status;
    try {
      originalResponse.headers.delete("Content-type");
    } catch {
    }
    return new Response(newResponse.body, {
      status,
      statusText: status === 200 ? newResponse.statusText : originalResponse.statusText,
      // If you're looking at here for possible bugs, it means that it's not a bug.
      // With the middleware, users can meddle with headers, and we should pass to the 404/500.
      // If users see something weird, it's because they are setting some headers they should not.
      //
      // Although, we don't want it to replace the content-type, because the error page must return `text/html`
      headers: new Headers([
        ...Array.from(newResponse.headers),
        ...Array.from(originalResponse.headers)
      ])
    });
  }
  #getDefaultStatusCode(routeData, pathname) {
    if (!routeData.pattern.exec(pathname)) {
      for (const fallbackRoute of routeData.fallbackRoutes) {
        if (fallbackRoute.pattern.test(pathname)) {
          return 302;
        }
      }
    }
    const route = removeTrailingForwardSlash(routeData.route);
    if (route.endsWith("/404"))
      return 404;
    if (route.endsWith("/500"))
      return 500;
    return 200;
  }
  async #getModuleForRoute(route) {
    if (route.component === DEFAULT_404_COMPONENT) {
      return {
        page: async () => ({ default: () => new Response(null, { status: 404 }) }),
        renderers: []
      };
    }
    if (route.type === "redirect") {
      return RedirectSinglePageBuiltModule;
    } else {
      if (this.#manifest.pageMap) {
        const importComponentInstance = this.#manifest.pageMap.get(route.component);
        if (!importComponentInstance) {
          throw new Error(
            `Unexpectedly unable to find a component instance for route ${route.route}`
          );
        }
        const pageModule = await importComponentInstance();
        return pageModule;
      } else if (this.#manifest.pageModule) {
        const importComponentInstance = this.#manifest.pageModule;
        return importComponentInstance;
      } else {
        throw new Error(
          "Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue."
        );
      }
    }
  }
};
var isNode2 = typeof process === "object" && Object.prototype.toString.call(process) === "[object process]";
function getProcessEnvProxy() {
  return new Proxy({}, {
    get: (target, prop) => {
      console.warn(
        // NOTE: \0 prevents Vite replacement
        `Unable to access \`import.meta\0.env.${prop.toString()}\` on initialization as the Cloudflare platform only provides the environment variables per request. Please move the environment variable access inside a function that's only called after a request has been received.`
      );
    }
  });
}
if (!isNode2) {
  process.env = getProcessEnvProxy();
}
function createExports(manifest3) {
  const app = new App(manifest3);
  const onRequest3 = async (context) => {
    const request = context.request;
    const { env } = context;
    process.env = env;
    const { pathname } = new URL(request.url);
    if (manifest3.assets.has(pathname)) {
      return env.ASSETS.fetch(request);
    }
    const routeData = app.match(request);
    Reflect.set(request, Symbol.for("astro.clientAddress"), request.headers.get("cf-connecting-ip"));
    const locals = {
      runtime: {
        waitUntil: (promise) => {
          context.waitUntil(promise);
        },
        env: context.env,
        cf: request.cf,
        caches
      }
    };
    const response = await app.render(request, { routeData, locals });
    if (app.setCookieHeaders) {
      for (const setCookieHeader of app.setCookieHeaders(response)) {
        response.headers.append("Set-Cookie", setCookieHeader);
      }
    }
    return response;
  };
  return { onRequest: onRequest3, manifest: manifest3 };
}
var serverEntrypointModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createExports
}, Symbol.toStringTag, { value: "Module" }));
var _page0 = () => Promise.resolve().then(() => (init_generic_CaLv3Au9(), generic_CaLv3Au9_exports));
var _page1 = () => Promise.resolve().then(() => (init_tag_CtuL0ud6(), tag_CtuL0ud6_exports));
var _page2 = () => Promise.resolve().then(() => (init_threadid_uDyofaKZ(), threadid_uDyofaKZ_exports));
var _page3 = () => Promise.resolve().then(() => (init_index_DLVGDehB(), index_DLVGDehB_exports));
var pageMap = /* @__PURE__ */ new Map([
  ["../../node_modules/.pnpm/astro@4.5.5_@types+node@20.11.28_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["src/pages/t/[tag].astro", _page1],
  ["src/pages/[threadid].astro", _page2],
  ["src/pages/index.astro", _page3]
]);
var _manifest = Object.assign(manifest, {
  pageMap,
  renderers,
  middleware: onRequest
});
var _args = void 0;
var _exports = createExports(_manifest);
var onRequest2 = _exports["onRequest"];
var manifest2 = _exports["manifest"];
var _start = "start";
if (_start in serverEntrypointModule) {
  serverEntrypointModule[_start](_manifest, _args);
}
export {
  manifest2 as manifest,
  onRequest2 as onRequest,
  pageMap
};
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

cssesc/cssesc.js:
  (*! https://mths.be/cssesc v3.0.0 by @mathias *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
