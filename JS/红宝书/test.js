const inputVal = {
    cate: {
        subject: {
            name: {
                number: 100
            }
        }
    }
}

const path = []
function digui(inputVal) {
    if (!inputVal) return
    const [key, value] = Object.entries(inputVal)[0]

    if(typeof value !=="object"){
        path.push(key)
        path.push(value)
        return path
    }
    path.push(key)
    return digui(value)
    
}

const res = digui(inputVal)
console.log(res)