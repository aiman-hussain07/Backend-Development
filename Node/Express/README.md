# Library vs Framework
Refernce : 
* https://www.geeksforgeeks.org/software-framework-vs-library/
* https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/

1. Library: set of pre-written code that can be used to perform specific task. Example: Axios, JQuery, ReactJS, etc. 
2. Framework : set of pre-written code that provides a structure for developing software applications. Example: Express, AngularJS, Spring, NodeJS, etc.

**Difference**
1. Frameworks and libraries are both code written by someone else that helps you perform some common tasks in a less expanded way.
2. A framework inverts the control of the program. It tells the developer what they need. A library doesn’t. The programmer calls the library where and when they need it.
3. The degree of freedom a library or framework gives the developer will dictate how “opinionated” it is.

Overall, Express is a very flexible and customizable framework. It is unopinionated in the sense that it does not force you to use a specific coding style or architecture. However, it does have some features that could be considered to be opinionated, such as its middleware system and routing system.

# Express - Fast, unopinionated, minimalist web framework for Node.js
A Node.js web application framework that helps us to make web applications. It is used for server side programming (accepts request and sends response - opposite to what happens in frontend side).

Four major uses of Express:
1. listens for incoming HTTP requests.
2. parses these incoming requests.
3. match response with suitable routes.
4. based on the request sending suitable responses.

Some common web-development tasks are not directly supported by Node itself. If you want to **add specific handling for different HTTP verbs (e.g. GET, POST, DELETE, etc.)**, **separately handle requests at different URL paths ("routes")**, serve static files, or **use templates to dynamically create the response**, Node won't be of much use on its own. You will either need to write the code yourself, or you can avoid reinventing the wheel and use a web framework. Framework like Express. 

We install express as package using "npm install express". This package involves different tools and utilities whose role is to help in server side programming. 

# Getting Started with Express
1. mkdir <-New Directory->
2. npm init 
3. npm install express
4. touch index.js (or whichever main/entry point was initialized with npm init).
5. use of method listen() in index.js. 
app.listen() function is used to bind and listen to the connections on the specified host and port. app.listen() just creates a server but it is not yet accepting GET request hence we get "Cannot GET /" at "http://localhost:3000/" because the working server doesn't have a suitable response to return for current request.
6. using app.use() to track received requests.
app.use() function is used to mount the specified middleware function (are the functions that have access to the request object and response object, or we can call it a response-request cycle) at the path which is being specified. (here port, I guess) The middleware function is executed when the base of the requested path matches the path.
app.use() is basically listening and tracking the received requests. The callback function in app.use() is handling the printing done in this case. 

* Http request sent to browser/url are text based (so if the server is in different language they can also understand them) and express converts these requests into object based. This process is known as parsing i.e. converting text based request into request object which JavaScript can understand.  

7. sending response using res.send() from our server. Response can be sent in multiple formats. Two response send requests for same path will give error because res.send() already calls .end() for you so trying to call it again is considered an error because the request has already been sent.  

Refernce: https://www.scaler.com/topics/nodejs/middleware-in-nodejs/ (to understand middleware)

# Routing
It is a process for selecting a path for traffic in a network or between or across multiple networks. Using app.get("path", callback) -> if this is used then response can only be generated from the routes that are already defined otherwise we will get "Status: 404 - Page Not Found". But if we wish to create a standard/custom response for routes which are not defined we can use app.get( " * ", callback) (here * means all path other than defined ones)

app.post(path, callback) -> Routes HTTP POST requests to the specified path with the specified callback functions.

# Nodemon
To automatically restart server with code changes. Install globally for ease using command "npm i -g nodemon".

# Path Parameters
* Reference : https://www.geeksforgeeks.org/reading-path-parameters-in-node-js/
Path parameters are variable that allows the user to add a parameter in URL path. They are typically used to point to a specific resource within a collection, such as a user identified by ID. For example, if you have the route /user/:name, then the “name” property is available as req.params.name. 

# Query Strings
* Reference : https://www.semrush.com/blog/url-parameters/
