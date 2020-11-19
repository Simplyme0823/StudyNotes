// 命名参数与arguments单向同步，以arguments为准
function test(num1){
    arguments[0] = 10
    console.log(arguments[0], num1)

}

test(1000)// 10 10

sum()
let sum = function(){
    return 100
}