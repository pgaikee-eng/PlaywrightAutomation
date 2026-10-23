/*
--DAta types in Javascript--

kind of value which variable is storing is called data types 

there are 2 type of data types in javascript

1.Primitive data types 
2. Non primitive data types 
immutable fixed size data types in javascript
it h holds a single value 

let name ="john";  //memory alocation 1001
name ="shyam";    //memory alocation 1002

there are 7 primitive data types in javascript

1.string 
--- Represents a sequence of character enclosed in single or double qoutes

'Hello world' or "Hello world"
let reduce="90";  //string data type

"The shadow element"

2.Number
--Represents numeric value, both integers and floating-point numbers

let age=25;  //number data type 
let marks =99.5;  //number data type  

3. Boolean  : Represents a logical value that can be either true or false.
true /false

let isStudent =true

4.. Null : Represents a intenitional absence of any object value 

let result =null; // null data type

5. Undefined : It Represents a variable that has been declared but not assigned any value 

let name; //undefinded data type

6. BigINt: Represents integers with arbitrary precision , allowing for vary large numbers beyond the same intiger

let nigNumber =123456789012345678901325566890n;


7. Symbol : Represents a unique identifier and it is used to create unique property keys for objects.

Example :
const uniqueId =symbol('Id);

*/


let name ="John Doe";  //string data type
console.log(typeof name);
console.log(name);

let age =25 ;  //number data types
console.log(typeof age);
console.log(age);

let isStudent =true ;  //boolean data type
console.log(typeof isStudent);
console.log("isStudent");
console.log(isStudent);

let searchTexbox=null;  //null data type
console.log(typeof searchTexbox);
console.log(searchTexbox);

let result;  //underfined data type
console.log(typeof result);
console.log(result);

let bigintValue = 900232343343334n;
console.log(typeof bigintValue);
console.log(bigintValue);

let x = Symbol('id');
console.log(typeof x);        
console.log(x);
