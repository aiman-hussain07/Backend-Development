# Get & Post Requests
* Get Requests (conventionally used to recieve data):
1. Used to GET some response (basically whenever we expect a response(search results) back on the given request(ex-google search))
2. (to send additional data in GET Requests we) send data in query strings. Whenever a URL is sent in GET Request form in terms of query string there are some limitations it adheres to ,i.e., Limitations: limited data is sent, sent data gets converted into string data and this data is always visible in URL.

Form's data is accepted in form of query strings in GET Requests and then we can further use it for our operations.

* Post Requests (conventionally used to sent data): 
1. Used to POST something i.e., for create/write/update (ex- to upload something in google drive) --> basically to change something in backend
2. Data sent via request body. No limitations on what type of data needs to be sent (Ex: string, json, etc)

In POST Requests we have "Body" in which we can send abundant data in different ways (ex-json type, xml type, urlencoded type etc), i.e., data is sent through Request Body in POST Requests and we handle such requests in the following way:

# Handling Post Requests
1. Set up POST request route  to get some response i.e., -> app.post("/register", (req,res)=>{
    res.send("Standard POST Response") })
2. Parse POST request data --> app.post("/register", (req, res) => {
    console.log(req.body)
    //Data exists in req.body but it prints "undefined" because express isn't able to understand what data is being sent hence this data needs to be parsed so that we can convert this data into a readable format for express.
})
Using " app.use(express.urlencoded({extended: true})) " would rectify the issue mentioned above and req.body will return entered data.
Here in " app.use(express.urlencoded({extended: true})) " --> app.use implies this should be done for all kinds of requests (GET/POST/PUT etc). Also here we are using a middleware " express.urlencoded({extended: true}) " which means if a url encoded data is detected in any part of our request body then express will automatically parse it for understanding.   

If we are to send some data in Request Body in POST requests in JSON format, with " app.use(express.urlencoded({extended: true})) " we will still get undefined whenever we wish to use this data because express here is only capable of reading url encoded data not JSON data. In order to make sure express is capable of parsing JSON data too we will use another middleware i.e., " app.use(express.json()) " 

# Revisiting JS (for OOPS)
Object-Oriented Programming (OOP) is a programming model in computer science that relies on the concept of classes and objects. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects. 

# Object Prototypes
* Reference : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

Prototypes are the mechanism by which Javascript objects inherit features from one another. 
A prototype is created in which all the functions and properties are stored which are common for every/any array and if a new array object is created then all these functions and properties are inherited from this prototype, i.e., all the information in prototype object is inherited by array.

It is like a single template object that all objects inherit methods and properties from without having their own copy, i.e., let arr =[1,2,3], we apply method arr.pop() we get arr=[1,2]. The method applied here (pop()) doesn't exist in "arr" or pop() function's copy doesn't exist in "arr" but "arr" has a prototype where pop() function exists and hence we directly use this pop() function for "arr".

Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

1. "__proto__" (also called the Dunder Proto or Double Underscore Prototype) is a property of Object.prototype that exposes the hidden [[Prototype]] property of an object and allows you to access or modify it. This __proto__ can be treated as a copy of actual prototype which is used to reference to actual object of __proto__

2. To access actual prototype : For array --> "Array.prototype".
For string --> "String.prototype"

# Factory Function 
* Refernce : https://www.geeksforgeeks.org/what-are-factory-functions-in-javascript/
A function that creates objects. Factory Functions differ from regular functions as they always return an object, which will contain any value, method, etc.

Why it is useful? Able to create multiple objects again and again that have the same logic, we can write the logic once in a function and use that function as a factory to create our objects (same as a real-world factory producing products).

Disadvantage of Factory functions : whenever an object is created using factory functions, every object creates it's own copy which is inefficient for the memory. So the purpose of designing many objects but to have the layout/blueprint in one place doesn't entirely hold valid.
So to rectify this issue we use "new" operator

# New Operator
The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function. 

To create above (user-defined?) objects, we first create a constructor (blueprint). The "new" operator allows us to creates these objects using contructors and are called instances, i.e., with "new" keyword we initialize object instance with the help of contructor

Constructor Functions generally doesn't return anything and are defined with a capital letter. Constructor functions does the same work as factory functions but does it better because now if we define(create) one or two (more if you want) function using this contructor function and store them in a variable (instances) then these variables will not create distinctive separate copies of this function rather they will refer to the same copy(instance). 

* Reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new (Jump to Description to see how "new" operator operates with a constructor)

Since this method is a bit tricky for day to day life hence we use another method which performs the same work but just with a better way of writing, i.e., "classes".

# Class
Class can be treated as a group which gives a basic blueprint to how the objects stored inside it should look like. OR --> 
Class are a template for creating objects

The constructor method is a special method of a class for creating and initializing an object instance of that class.  
(Syntax different to the above method + functions need not be defined outside the class using prototype property)

# Inheritance
Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes. Inheritance in OOP is defined as the ability of a class to derive properties and characteristics from another class while having its own properties as well. We use two keywords in order to achieve this --> "extends" and "super".
1. "Extends" keyword is used to inherit properties. ex - " class Student (child classname) extends SchoolPerson (parent/base classname)" --> i.e., Student class is extending(/inherting) some properties from SchoolPerson class 
2. "Super" keyword implies our parent's class constructor, i.e., if we write "super(name, age)" that means we are calling ourparen't class constructor here.

If function with the same name is created in both parent and child classes, then the implementation is always done from child class instead of parent class.

