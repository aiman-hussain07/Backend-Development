// const student1 = {
//     name: "Adam",
//     age: 10,
//     marks: 100
// };

// let arr = [1, 2, 3]
// arr.sayHello = () => {
//     console.log("Hello, I am arr!")
// }

// Factory Function
function personMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${name}`)
        }
    };
    return person;
}

// Constructors with "new" operator
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.talk = function(){
//     console.log(`Hi, my name is ${this.name}`)
// }

// Constructor method - syntax different to the above method, functions need not be defined outside the class using prototype property
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, my name is ${this.name}`)
    }
}

let p1 = new Person("Tanvir", 31);
let p2 = new Person("Aiman", 26);


// Inheritance

   // Creating a new class for things that are repeating in both the below classes to avoid DRY
   class SchoolPerson {
    constructor(name, age) {
        console.log("Baap Constructor Calling")
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, I am ${this.name}`)
    }
}
class Student extends SchoolPerson {
    constructor(name, age, marks) {
        console.log("Bete Constructor Calling")
        // this.name = name;
        // this.age = age;
        super(name, age)
        this.marks = marks;
    }
    // talk() {
    //     console.log(`Hi, I am ${this.name}`)
    // }
}
class Teacher extends SchoolPerson {
    constructor(name, age, subject) {
        // this.name = name;
        // this.age = age;
        super(name, age)
        this.subject = subject;
    }
    // talk() {
        //     console.log(`Hi, I am ${this.name}`)
        // }
    }
 
