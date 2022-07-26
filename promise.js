const promise = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve('set the table')
    }, 5000)
})



promise.then(fullfilled)
promise.catch(rejection)

const fullfilled = (result) => {
    console.log('got tacos')
}

const rejection = (error) => {
    console.log('cook pasta')
}