"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/VirtualList.tsx
var VirtualList_exports = {};
__export(VirtualList_exports, {
  VirtualList: () => VirtualList
});
module.exports = __toCommonJS(VirtualList_exports);
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function VirtualList({ items, itemHeight, height, renderItem }) {
  const [scrollTop, setScrollTop] = (0, import_react.useState)(0);
  const totalCount = items.length;
  const visibleCount = Math.ceil(height / itemHeight);
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight));
  const endIndex = Math.min(totalCount, startIndex + visibleCount);
  const visibleItems = items.slice(startIndex, endIndex);
  const topPadding = startIndex * itemHeight;
  const bottomPadding = (totalCount - endIndex) * itemHeight;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      style: { overflowY: "auto", height, position: "relative" },
      onScroll: (e) => setScrollTop(e.currentTarget.scrollTop),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: topPadding } }),
        visibleItems.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: itemHeight }, children: renderItem(item, startIndex + i) }, startIndex + i)),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: bottomPadding } })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  VirtualList
});
