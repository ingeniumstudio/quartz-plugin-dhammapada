import { createRequire } from 'module';

createRequire(import.meta.url);

// node_modules/@quartz-community/utils/dist/lang.js
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/styles/example.scss
var example_default = ".example-component {\n  padding: 8px 16px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-radius: 4px;\n  font-weight: 600;\n  display: inline-block;\n}";

// src/components/scripts/example.inline.ts
var example_inline_default = 'function l(){let e=window.location.pathname;return e.startsWith("/")&&(e=e.slice(1)),e.endsWith("/")&&(e=e.slice(0,-1)),e||"index"}function r(){let e=document.querySelectorAll(".example-component");if(e.length===0)return;let t=[];function o(n){(n.ctrlKey||n.metaKey)&&n.shiftKey&&n.key.toLowerCase()==="e"&&(n.preventDefault(),console.log("[ExampleComponent] Keyboard shortcut triggered!"))}document.addEventListener("keydown",o),t.push(()=>document.removeEventListener("keydown",o));for(let n of e){let i=()=>{console.log("[ExampleComponent] Clicked!")};n.addEventListener("click",i),t.push(()=>n.removeEventListener("click",i))}typeof window<"u"&&window.addCleanup&&window.addCleanup(()=>{t.forEach(n=>n())}),console.log("[ExampleComponent] Initialized with",e.length,"component(s)")}document.addEventListener("nav",e=>{let t=e.detail?.url||l();console.log("[ExampleComponent] Navigation to:",t),r()});document.addEventListener("render",()=>{console.log("[ExampleComponent] Render event - re-initializing"),r()});document.addEventListener("prenav",()=>{let e=document.querySelector(".example-component");e&&sessionStorage.setItem("exampleScrollTop",e.scrollTop?.toString()||"0")});\n';
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/ExampleComponent.tsx
var ExampleComponent_default = ((opts) => {
  const { prefix = "", suffix = "", className = "example-component" } = opts ?? {};
  const Component = (props) => {
    const frontmatter = props.fileData?.frontmatter;
    const title = frontmatter?.title ?? "Untitled";
    const fullText = `${prefix}${title}${suffix}`;
    return /* @__PURE__ */ u2("div", { class: classNames(className), children: fullText });
  };
  Component.css = example_default;
  Component.afterDOMLoaded = example_inline_default;
  return Component;
});

// src/components/styles/dhammapada.scss
var dhammapada_default = '.dhammapada-container {\n  margin: 2rem 0;\n  padding: 1.5rem;\n  border-left: 4px solid var(--secondary);\n  background-color: var(--lightgray);\n  border-radius: 0 8px 8px 0;\n  font-style: italic;\n}\n.dhammapada-container .dhammapada-text {\n  margin: 0;\n  color: var(--dark);\n  line-height: 1.6;\n}\n.dhammapada-container .dhammapada-text.loading {\n  color: var(--gray);\n}\n.dhammapada-container .dhammapada-text.loading::after {\n  content: "...";\n  animation: loading 1.5s infinite;\n}\n.dhammapada-container .dhammapada-text.error {\n  color: var(--red);\n}\n\n@keyframes loading {\n  0% {\n    opacity: 0.2;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.2;\n  }\n}';

// src/components/scripts/dhammapada.inline.ts
var dhammapada_inline_default = 'var a=()=>{let e=document.getElementById("dhammapada-text");if(!e)return;let n=e.dataset.endpoint;n&&e.classList.contains("loading")&&fetch(n).then(t=>{if(!t.ok)throw new Error("Failed to fetch verse");return t.text()}).then(t=>{e.textContent=t,e.classList.remove("loading")}).catch(t=>{console.error("Dhammapada error:",t),e.textContent="Could not load verse. Please try again later.",e.classList.remove("loading"),e.classList.add("error")})};document.addEventListener("nav",a);typeof window<"u"&&window.addCleanup&&window.addCleanup(()=>document.removeEventListener("nav",a));\n';

// src/components/Dhammapada.tsx
var Dhammapada_default = ((opts) => {
  const { endpoint, className = "dhammapada-container" } = opts ?? {};
  const Component = (props) => {
    if (props.fileData.slug !== "index") {
      return null;
    }
    if (!endpoint) {
      console.warn("DhammapadaComponent: No endpoint provided in options.");
      return null;
    }
    return /* @__PURE__ */ u2("div", { class: classNames(className), children: /* @__PURE__ */ u2("p", { id: "dhammapada-text", class: "dhammapada-text loading", "data-endpoint": endpoint, children: "Fetching Dhammapada verse" }) });
  };
  Component.css = dhammapada_default;
  Component.afterDOMLoaded = dhammapada_inline_default;
  return Component;
});

export { Dhammapada_default as DhammapadaComponent, ExampleComponent_default as ExampleComponent };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map