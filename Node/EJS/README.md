# Templating
Templating can be considered as created a blueprint (code that is pre-built for a specific purpose) which is capable of generating multiple copies when needed (Example: Instagram pages layout)
# EJS (Embedded JavaScript Templating)
To achieve templating we have numerous tools at disposal, among which EJS is one. EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. 

(To default set and initialize npm, use command "npm init -y")

Technically we should require EJS similarly as Express but doesn't because Express by default internally requires EJS and hence requiring it again isn't necessary. 

app.set(name,value) -> Assigns setting name to value. You may store any value that you want, but certain names can be used to configure the behavior of the server.

With the help of EJS we do not send responses rather we render responses. To render a response means is to send files. 
res.send() helped us in sending string/array/boolean/object as responses but to send big (such as html with CSS and JS) files res.send() has it's limitation. Meanwhile sending an HTML code in the form of file can be flawlessly done by res.render(). We sent an EJS file in res.render() -> index.ejs

app.set("view engine", "ejs") -> Whenever we use "view engine", it expects all the views/EJS templates to be stored in a folder under "views" name. By default whenever we call upon res.render(filename.ejs), required "express" will sought this mentioned "views" folder (to render templates) and go and search for filename.ejs

If we write filename instead of filename.ejs in rendering, it wouldn't make a difference as express searches based on the file name's in views folder.

We can start the server from outside the directory too -> AIMAN HUSSAIN@DESKTOP-FGGCOKT MINGW64 ~/Desktop/Web Dev/Backend Development/Node (main)
-- nodemon EJS/index.js
But we will get -> Error: Failed to lookup view "home.ejs" in views directory "C:\Users\AIMAN HUSSAIN\Desktop\Web Dev\Backend Development\Node\views" i.e., code is unable to locate "views" directory from wherever the server has ran instead of locating "home.ejs" in "index.js" parent directory.
So for now we can only run "index.js" without any errors if we are located directly in it's parent directory.

To tackle this limitation : 
const path = require("path")
app.set("views", path.join(__dirname, "/views")) 

Inside app object we set "views" to this path (i.e., path.join(__dirname, "/views")), where "__dirname" is the current working directory of "index.js" where the code is written (here "Backend Development\Node\EJS\views")

# Interpolation Syntax
Interpolation refers to embedding expressions into marked up text (somewhat like string template literals in html using backticks)

In EJS templates we can embed JS code/logic/expressions and this is called interpolation syntax. Using EJS, we will make our HTML dynamic.
"<%= JSCOde %>" -> Whatever output is produced off of the JSCode is converted into a string by EJS tags and then it is treated as a string in HTML.

# Passing data to EJS
app.get('/', (req,res)=>{ 
    let diceVal = Math.floor(Math.random() * 7);
    res.render("rolldice.ejs", { num: diceVal })
    })
-> Render method takes two parameters first parameter should be the .ejs file second parameter should be an object which is accessible in the .ejs file this .ejs file should be in views folder in the root directory. 
If we give the same variable name to key-value pair in object parameter we can simply render it in the following syntax -> res.render("rolldice.ejs", { diceVal: diceVal }) or res.render("rolldice.ejs", { diceVal })

# Conditional Statements in EJS
* Reference : https://learnandtell.hashnode.dev/conditional-statements-in-ejs-views
For ejs file to know that we are using javascript statements we need to close our js statements inside "<% %> (i.e., Scriptlet tag -> for control-flow, no output). To render variables we use an extra "=", eg- <%=name%>.

Example:
<% if (num==6){ %>
        <h2>Great! Another roll made available.</h2>
<% } %>

# Loops in EJS
<% for(let i=0; i<followers.length; i++){ %>
            <li>
                <%=followers[i]%>
            </li>
<% } %>

# Instagram Page with EJS
let { username } = req.params;
const instaData = require("./data.json")
const data = instaData[username]
Replicating basic Instagram functioning - i.e., how data (here using data.json) from the backend is fetched in database and according to every distinctive data how an individual page is created.
Hence the data stored in the created pages are not in html (index.html) or ejs files, that data is sent from the data base and further this data is used in templates form (<%=data.name%, <%=data.followers% etc)

# Serving Static Files
Static files are files that don't change when your application is running. In a typical web application, your most common static files will be the following types:
1. Cascading Style Sheets, CSS
2. JavaScript
3. Images
Serving Static Files means ways through which we can include files like CSS, JS to our existing code.
app.use(express.static(folder_name)) -> here folder_name is that folder which contains all static files.
By default express retrieves all the static files from "public" (folder_name) folder (analogous to "views" folder for templates) -> app.use(express.static("public"))

If we are start the server from outside the parent directory (just as in views path), server will never be able to detect the public directory path and hence we will set the public path (just as we did back in views path) as static by using command -> app.use(express.static(path.join(__dirname, "public")))

# Includes
A way to create subtemplates, i.e., if we have templates which we have to use in other templates and multiple times over, we use includes.
* Reference : https://ejs.co/#docs (go to Includes)