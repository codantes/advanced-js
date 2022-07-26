function outer(){
    let a = 0;
    function inner(){
        a++;
        console.log(a)
    }
    return inner 
}

const fn = outer()

fn()
fn()

//JS property when a function returns a function it returns its scope and the function itself. The data persists as they are bundled with together in a chain. 