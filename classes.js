class Person {
    constructor(fname, lname){
        this.firstName = fname;
        this.lastName = lname;
    }

    sayMyName(){
        return this.firstName + ' ' + this.lastName
    }

}

class superhero extends Person {
    constructor(fname, lname){
        super(fname, lname)
        this.superhero = true
    }

    isFighthingCrime(){
        console.log('fights crime')
    }
}

const classP1 = new Person('bruce', 'wayne')

console.log(classP1.sayMyName())