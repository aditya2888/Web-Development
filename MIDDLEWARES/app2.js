const express = require("express");
const app = express();

app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
})

// app.use((req, res, next) => {
//     let { token } = req.query;
//     if (token === "giveaccess") {
//         next();
//     }
//     res.send("ACCESS DENIED !");
// });

// Multiple Middlewares

const checkToken = ((req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    // res.send("ACCESS DENIED !");
    throw new Error("ACCESS DENIED !");
});


app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

// app.get("/api", (req, res) => {
//     res.send("data");
// });

app.get("/wrong", (req, res) => {
   abcd = abcd;
});

app.get("/", (req, res) => {
    res.send("I am root");
});

app.get("/random", (req, res) => {
    res.send("This is my random Page");
});

// 404
app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(8080, () => {
    console.log("Listening at port 8080");
});