//Inheritence
//what is inheritence
//It is the process of aquiring all methods and variables from parent class
//It can be access wit keyword- extends
//Need to import parent class to provide the information to child while  creating 
import { person } from "./basicClass";

class pet extends person{
    constructor(firstName,lastName,age){
        super(firstName,lastName,age)
    }
    //Pollymorphism
    //Method Overriding/Method Overloading
    //Method Overriding

    get location(){
        return"Mumbai";
    }
    //method overloading
    //Java script does not support method overloading
    //we can use single method with optional parameter

    greet (message='hello'){
        return '${message}, I am ${this.fullName()} from ${this.location}'
    }
}
let pet =new pet('Tom', 'Cat',2)
console.log(pet.fullname())
console.log(pet.location)
console.log(pet.greet())
console.log(pet.greet("Good morning"))