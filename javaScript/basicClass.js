//classes and its properties
//what is classes and why do we need this in automation framework
//Constructor
//default constructor // parametrized constructor

export class person {
    constructor(firstName, lastName, age){
       this.firstName = firstName
       this.lestName = lastName
       this.age = age
    }
    fullName(){
        return this.firstName+ ' '+this.lastName
    }
    get location(){
        return "Pune";
    }

    

}

//let person = new person('Shivaji','Pande', 35)
//console.log(person.fullName())
//console.log(person.lastName)
//console.log(person.age)

//let person1 = new person('Om','Parmar',45)
//console.log(person1.fullName())
//console.log(person1.lastName)
//console.log(person1.age)