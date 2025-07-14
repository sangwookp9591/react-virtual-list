// src/VirtualList.tsx
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function VirtualList({ items, itemHeight, height, renderItem }) {
  const [scrollTop, setScrollTop] = useState(0);
  const totalCount = items.length;
  const visibleCount = Math.ceil(height / itemHeight);
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight));
  const endIndex = Math.min(totalCount, startIndex + visibleCount);
  const visibleItems = items.slice(startIndex, endIndex);
  const topPadding = startIndex * itemHeight;
  const bottomPadding = (totalCount - endIndex) * itemHeight;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: { overflowY: "auto", height, position: "relative" },
      onScroll: (e) => setScrollTop(e.currentTarget.scrollTop),
      children: [
        /* @__PURE__ */ jsx("div", { style: { height: topPadding } }),
        visibleItems.map((item, i) => /* @__PURE__ */ jsx("div", { style: { height: itemHeight }, children: renderItem(item, startIndex + i) }, startIndex + i)),
        /* @__PURE__ */ jsx("div", { style: { height: bottomPadding } })
      ]
    }
  );
}
export {
  VirtualList
};
