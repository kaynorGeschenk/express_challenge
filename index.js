const express = require('express');
const bodyParser = require('body-parser');
const user= require("./user.json");
const app = express()

const port = 3000

app.use(bodyParser.json());

app.get("/users", (request, response) =>{
    console.log (request);
    response.json(user);
});

app.get("/user", (request, response) =>{
    console.log (request);
    response.json(user[4]);
});

app.post("/user", (request, response) => {
    const requireBody = request.body
    console.log(requireBody)
    user.push(requireBody)
    response.send({message: "successful", body: requireBody, mainBody:user})
})

app.delete("/users", (request, response) => {
    const deleteUsers = user.pop();
    response.send(user)
})












app.listen(port, () => {
    console.log("My app is running on this server")
})
