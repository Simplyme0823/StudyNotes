/** @format */

const tree = {
  name: "page.js",
  require: [
    {
      name: "A.js",
      require: [
        {
          name: "B.js",
          require: [
            {
              name: "C.js",
            },
          ],
        },
      ],
    },
    {
      name: "D.js",
      require: [
        {
          name: "C.js",
        },
        {
          name: "E.js",
        },
      ],
    },
  ],
};

function resolve(tree) {
  let res = [];

  function loop(tree) {
    if (!tree || !tree.name) return false;
    tree.require &&
      tree.require.forEach(item => {
        loop(item);
      });
    res.push(tree.name);
    return res;
  }

  return loop(tree);
}

const res = resolve(tree);
console.log(res);
