const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// ERROR HANDLERS

app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
})


const checkToken = ((req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED !");
});


app.get("/api", checkToken, (req, res) => {
    res.send("data");
});


app.get("/", (req, res) => {
    res.send("I am root");
});

app.get("/random", (req, res) => {
    res.send("This is my random Page");
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

// admin route (activity)

app.get("/admin", (req, res) => {
    throw new ExpressError(401, "Access to Admin is Forbidden");
});

// error handlers

app.use((err, req, res, next) => {
    console.log("----ERROR------");
    let { status = 500, message = "Some Error Occured" } = err;
    res.status(status).send(message);
});



// app.use((err, req, res, next) => {    // It will handle the error if any error occured
//     console.log("------ERROR ------");
//     res.send(err);
// });



// app.use((err, req, res, next) => {
//     console.log("------ERROR 2-------");
//     next(err);
// });

// // 404
// app.use((req, res) => {
//     res.status(404).send("Page not found");
// });

app.listen(8080, () => {
    console.log("Listening at port 8080");
});