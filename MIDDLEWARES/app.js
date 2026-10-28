const express = require("express");
const app = express();

app.use((req, res, next) => {
    // let {query} = req.query;
    // console.log("query");
    console.log("Hi, I am 1st Middleware");    // middleware always send its resposnse even if request is send by  "/" or "/random"
    return next();
});   // but middleware work is to implement next function not send response

app.use((req, res, next) => {
    console.log("Hi, I am 2nd Middleware");   // middleware always send response even if the the request url is wrong
    next();

});

app.get("/", (req, res) => {
    res.send("I am root");
});

app.get("/random", (req, res) => {
    res.send("This is my random Page");
});

app.listen(8080, () => {
    console.log("Listening at port 8080");
});