const express = require("express");
const app = express();

let port = 8080;  // 8080, 3000

app.listen(port, () => {

    console.log(`app is listening in port ${port}`);
});


// app.use((req, res) => {

//     console.log("request recieved");

//     // res.send({
//     //     fruit: "apple",
//     //     color: "red",
//     // });

//     let code = "<h1> Fruits </h1> <ul><li>Apple </li> <li> Banana </li> </ul>";

//     res.send(code);
// });


// app.get("/", (req,res) => {

//     res.send("I am root path");
// });

// app.get("/apple", (req,res) => {

//     res.send("You contacted apple path");
// });

// app.get("/orange", (req,res) => {

//     res.send("You contacted orange path");
// });

// app.post("/",(req, res) => {

//     res.send("You send a post request to root path");
// });

// app.use((req,res) => {

//     res.send("path does not exist");
// });

// Path Parameters


app.get("/", (req, res) => {

    res.send("I am root path");
});

app.get("/:username/:id", (req, res) => {

    let { username, id } = req.params;

    let htmlStr = `<h1> Welcome to the page of ${username} and ${id}</h1>`

    res.send(htmlStr);

});


app.get("/search", (req, res) => {

    let { q } = req.query;


    if(!q){
        res.send("<h1>nothing searched</h1>");
    }

    res.send(`<h1>the query result was ${q} </h1>`);
});

