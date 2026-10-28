const express = require("express");

const path = require("path");

const app = express();

const port = 8080;

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {

    res.render("home");
});

app.get("/ig/:username", (req,res) => {

    let { username } = req.params;

    const instaData = require("./data.json");
    const data = instaData[username];

    if(data){

        res.render("insta.ejs", { data });
    } else{

        res.render("error.ejs");
    }

})
app.get("/rolldice", (req, res) => {

    let DicVal = Math.floor(Math.random() * 6 + 1);

    res.render("rolldice.ejs", { DicVal });
})

app.listen(port, () =>{

    console.log(`Listening on the port ${port}`);
});

