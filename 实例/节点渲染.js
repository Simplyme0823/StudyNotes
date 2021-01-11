/** @format */

const ul = el("ul", { id: "list" }, [
  el("li", { class: "item" }, ["Item 1"]),
  el("li", { class: "item" }, ["Item 2"]),
  el("li", { class: "item" }, ["Item 3"]),
]);
const ulRoot = ul.render();
document.body.appendChild(ulRoot);

function el(span, attributes, children) {
  const ele = document.createElement(span);
  Object.keys(attributes).forEach(key => {
    ele.setAttribute(key, attributes[key]);
  });
  if (Array.isArray(children) && children.length > 0) {
    children.forEach(child => {
      ele.appendChild(child);
    });
  }
  return ele;
}
