const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get("/register", (req, res) => {
    let { user, password } = req.query;
    // Form's data is accepted in form of query strings in GET Requests.
    res.send(`Standard GET Response. Welcome ${user}`)
})
app.post("/register", (req, res) => {
    console.log(req.body)
    //Data exists in req.body but it prints "undefined" because express isn't able to understand what data is being sent hence this data needs to be parsed so that converting this data into a readable format for express.
    let { user, password } = req.body;
    res.send(`Standard POST Response. Welcome ${user}`)
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})