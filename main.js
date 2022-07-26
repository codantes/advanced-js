function sum(a,b,c){
    return a + b + c;
}

function curry(fn){
    return function(a){
        return function (b){
            return function(c){
                return fn(a, b, c)
            }
        }
    }
}

const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5))

// currying is when a function is transformed to take one arguement at a time. 