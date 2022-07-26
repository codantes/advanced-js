function people(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

people.prototype.getFullName = function() {
    return this.fname + ' ' + this.lname;
}

function SuperHero(fname, lname){
    people.call(this, fname, lname)
    this.isSuperHero = true;
}

SuperHero.prototype.fightingCrime = function(){
    console.log('is fighting crime')
}
SuperHero.prototype = Object.create(people.prototype)
SuperHero.prototype.constructor = SuperHero
const batman = new SuperHero('bruce','wayne')


console.log(batman.getFullName())

