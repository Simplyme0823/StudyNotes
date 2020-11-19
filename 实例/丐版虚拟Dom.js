/** @format */

let demoNode = {
  tagName: "ul",
  props: { class: "list" },
  children: [
    { tagName: "li", children: ["douyin"] },
    { tagName: "li", children: ["toutiao"] },
  ],
};

function gen({ tagName, props, children }) {
  const ele = document.createElement(tagName);
  Object.keys(props).forEach(key => {
    ele.setAttribute(key, props[key]);
  });
  if (children) {
    children.forEach(item => {
      const { tagName, props, children } = item;
      const childEle = this.gen({ tagName, props, children });
      ele.appendChild(childEle);
    });
  }

  return ele;
}
