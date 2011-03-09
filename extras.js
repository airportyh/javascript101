
"Function Invocation"

function add(x, y){
    return x + y
}

add(2, 3, 4, 5)

add(2)

function add(){
    var sum = 0
    var len = arguments.length
    for (var i = 0; i < len; i++)
        sum += arguments[i]
    return sum
}

add(2, 3, 4, 5)
