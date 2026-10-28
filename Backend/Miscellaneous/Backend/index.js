const express = require("express");

const app = express();

const port = 8080;

app.use(express.urlencoded({extended: true})); // sabhi POST request me agar encoded data aata hai tho express use parse karde ga
app.use(express.json());  // agar data json format mein ho tho bhi

app.listen(port, () =>{

    console.log(`listening at port ${port}`);

});

app.get("/register", (req, res) =>{

    let {user, pass} = req.query;

    res.send(`Standard GET Response, Welcome  ${user}`);
});

app.post("/register", (req,res) =>{

    let {user, pass } = req.body;

    res.send(`Standard POST Response , Welcome ${user}`);
})