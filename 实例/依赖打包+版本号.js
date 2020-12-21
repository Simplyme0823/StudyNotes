/** @format */
const versions = ["1.45.0", "1.5.5", "1.5", "6", "3.3.3.3.3.3.3"];

function versionSort(version1, version2) {
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");
  const len = Math.min(arr1.length, arr2.length);
  let index = 0;
  while (index <= len) {
    if (arr1[index] === arr2[index]) {
      index++;
    } else if (!arr1[index] || !arr2[index]) {
      return arr1.length - arr2.length;
    } else {
      return arr1[index] - arr2[index];
    }
  }
}

const tree = {
  name: "page@0.0.1",
  require: [
    {
      name: "a@0.1.0",
      require: [
        {
          name: "d@0.2.0",
          require: [
            {
              name: "c@0.1.0",
            },
          ],
        },
      ],
    },
    {
      name: "b@0.1.1",
      require: [
        {
          name: "e@0.1.2",
        },
        {
          name: "c@0.1.2",
        },
      ],
    },
    {
      name: "c@0.2.0",
    },
  ],
};

function resolve(root) {
  let map = new Map();
  //   let res = [];

  function loop(root) {
    if (!root || !root.name) return false;

    root.require &&
      root.require.forEach(node => {
        loop(node);
      });

    let [fileName, newV] = root.name.split("@");
    if (map.get(fileName)) {
      let oldV = map.get(fileName);
      if (versionSort(newV, oldV) > 0) {
        map.set(fileName, newV);
      }
    } else {
      map.set(fileName, newV);
    }
  }

  loop(root);

  // 注意 map遍历的顺序取决于set的时候key的顺序
  let res = [...map.keys()].map(fileName => {
    return `${fileName}@${map.get(fileName)}`;
  });

  return res;
}

const res = resolve(tree);

console.log(res);
