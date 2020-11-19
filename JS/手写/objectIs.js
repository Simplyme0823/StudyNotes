// ===
function recursivelyCheckEqual(x, ...rest){
    console.log(rest)
    return Object.is(x,rest[0])&&
    (rest.length < 2 || recursivelyCheckEqual(...rest))// 为什么会少一个
}

const a = recursivelyCheckEqual(1,1,1,1,1,1)
console.log(a)