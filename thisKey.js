//implict binding 
const person = {
    name : 'pranav',
    sayMyName : function(){
        console.log(`my name is ${this.name}`)
    }
}

//person.sayMyName()

//explicit binding
function sayMyName(){
    console.log(`my name is ${this.name}`)
}

//sayMyName.call(person)

//new binding 
function people(name, LastName){
    this.name = name;
    this.LastName = LastName
}

const p1 = new people('pk', 'coder')
const p2 = new people('batman', 'wayne')

console.log(p1, p2)