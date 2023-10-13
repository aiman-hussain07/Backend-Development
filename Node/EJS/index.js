const express = require("express");
const app = express();
const path = require("path")
let port = 8080;
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Whenever we use "view engine", it expects all the views/EJS templates to be stored in a folder under "views" name. By default required "express" will sought this mentioned "views" folder to render templates

app.get("/", (req, res) => {
    res.render("home.ejs")
})
app.get("/rolldice", (req, res) => {
    let num = Math.floor(Math.random() * 6)+1;
    //{num} wasn't working. Why?
    res.render("rolldice.ejs", { num })
})

// Instagram Activity 
app.get("/ig/:username", (req, res) => {
    // let followers = ["Tanvir", "Nighat", "Tasneem", "Bulbul", "Zain"]
    // console.log(username)
    let { username } = req.params;
    const instaData = require("./data.json")
    const data = instaData[username] // this step confuses me. 
    // console.log(data)
    if(data){
        res.render("instagram.ejs", { data })
    } else {
        res.render("error.ejs")
    }
})
app.get("/hello", (req, res) => {
    res.send("Hello!")
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})