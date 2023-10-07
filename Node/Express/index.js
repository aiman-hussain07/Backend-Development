const express = require('express')
// The express variable that has stored require value is actually a function which we further execute.
const app = express()
// The value returned on executing the above function is stored in another(app) variable. This variable here is an object. 

// console.dir(app)
// This "app" object has various functions, we can also print methods/properties of this object. "app" object has a specific method named "listen" where this method creates a web server which listens for incoming API requests.   

let port = 4000;
// Ports are logical endpoints of a network connection that is used to exchange information between a web server and a web client.


app.listen(port, () => {
    console.log(`app is listening on ${port}`)
})
// app.listen() just creates a server 

// app.use() sends the same response on different routes/paths
// app.use((req, res) => {
//     console.log("request received")
// Response in string format
// res.send("This is a normal response.") 
// Response in object format
// res.send({
//     name: "apple",
//     color: "red"
// })
// Response in html format
//         res.send("<h1>Aiman Hussain</h1> <ul><li>Physics</li><li>Electronics</li></ul>")

// })

app.get('/', (req, res) => {
    res.send('Hello User, Welcome to Home!')
})

// Path Parameters
app.get('/:username/:id/:password', (req, res) => {
    let { username, id, password } = req.params;
    let code = `<h1>Hello ${username}, Welcome to Home!</h1>`
    // console.log(`User: ${username}, id: ${id}, Password: ${password}`)
    res.send(code)
})

// Query Strings
app.get("/search", (req, res) => {
    // console.log(req.query)
    let {q} = req.query
    if(!q){
        res.send("<h1>Nothing Searched</h1>")
    }
    res.send(`<h1>Search results for query : ${q}</h1>`)
})
