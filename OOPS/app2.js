// Inheritance => Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes


// class Person{

//     constructor(name,age){

//         console.log("Parent cosntructor is being called");
//         this.name = name;
//         this.age = age;
//     }

//      talk(){

//         console.log(`"Hi My name is ${this.name} and I can talk`);
//     }

// }

// class Student extends Person {

//     constructor(name, age, marks){

//         console.log("Student cosntructor is being called ");
//         super(name, age);    // Parent class constructor is being called 

//         this.type = "deep minded";
//         this.marks = marks;
//     }

//     talk(){

//         console.log(`"Hi My name is ${this.name} and I can talk`);
//     }
// }


// class Teacher extends Person{

//     constructor(name, age, subject){

//         super(name, age) // parent class cosntructor is being called 
        
//         this.type = "fuck minded";
//         this.subject = subject;
//     }

// }


// Example 2


class Mammal{

    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }

    eat(){

        console.log(`I am eating`);
    }
}

class Dog extends Mammal{

    constructor(name){

        super(name);
    }

    bark(){

        console.log(`BHAU , BHAU`);
    }
}

class Cat extends Mammal{

    constructor(name){

        super(name);
    }

    meow(){
        console.log(`meooo , meooo`);
    }
}


