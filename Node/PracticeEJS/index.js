let express = require("express")
let app = express();
let path = require("path")
let port = 8080;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`)
})
app.get("/", (req, res) => {
    res.send("Welcome to Google!")
})
app.get("/search/:username", (req, res) => {
    let {username} = req.params
    res.render("profile.ejs", { username })
})