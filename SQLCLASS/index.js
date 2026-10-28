const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const express = require("express");
const app = express();
const port = 8080;

const path = require("path");

const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "Ridhi@8868"
});

// Inserting Data(Single user)

// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
// let user = ["123", "123user", "abc@gmail.com", "abc"];

// try {

//   connection.query(q, user, (err, result) => {
//   if (err) throw err;

// Inserting Data (Multiple User)

// let q = "INSERT INTO user (id, username, email, password) VALUES ? ";
// let users = [ ["123b", "123userb", "abc@gmail.comb", "abcb"] , ["123c", "123userc", "abc@gmail.comc", "abcc"] ];

// try {

//   connection.query(q, [users], (err, result) => {
//   if (err) throw err;

//   console.log(result);
//   console.log(result.length);
//   console.log(result[0]);
//   console.log(result[1]);
// });

// } catch (err) {
//   console.log(err);
// }

// connection.end();


// let getRandomUser = () => {
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// }


// INSERTING DATA INTO BULK

// let getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// };

// let q = "INSERT INTO user (id, username, email, password) VALUES ? ";

// let data = [];

// for(let i=0; i<=100 ; i++){
  
//   data.push(getRandomUser()); // 100 fake users
// };

// try {

//   connection.query(q, [data], (err, result) => {
//   if (err) throw err;

//   console.log(result);
// });

// } catch (err) {
//   console.log(err);
// }

// connection.end();



// HOME ROUTE 


let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

app.get("/", (req, res) => {

  let q = `SELECT count(*) FROM user`;

  try {
  connection.query(q, (err, result) => {   //  this function returns , results as an array of objects 
  if (err) throw err;
  console.log(result[0]["count(*)"]);
  let count = result[0]["count(*)"];
  res.render("home.ejs", {count});
}); 

} catch (err) {
  console.log(err);
  res.send("some error in database");
}
});


// Show Route


app.get("/user", (req,res) => {

  let q = "SELECT * FROM user";

  try {
  connection.query(q, (err, users) => {   //  this function returns , results as an array of objects 
  if (err) throw err;

  res.render("show.ejs", {users});
}); 

} catch (err) {
  console.log(err);
  res.send("some error in database");
}
});

// edit route

app.get("/user/:id/edit", (req, res) => {

  let { id } = req.params;

  let q = `SELECT * FROM user WHERE id =  "${id}"`;

  try {
  connection.query(q, (err, result) => {  
  if (err) throw err;

  let user = result[0];

  res.render("edit.ejs", {user});
}); 

} catch (err) {
  console.log(err);
  res.send("some error in database");
}
});

// Update Route

app.patch("/user/:id", (req, res) => {

  let { id } = req.params;

  let q = `SELECT * FROM user WHERE id =  "${id}"`;

  let { password:formPassword, username:newUsername } = req.body;

  try {
  connection.query(q, (err, result) => {  
  if (err) throw err;
  let user = result[0];

  if(formPassword != user.password){
    res.send("Wrong Password");
  } else{

    let q2 = `UPDATE user SET username = "${newUsername}" WHERE id = "${id}"`;

    connection.query(q2, (err, result) => {

      if (err) throw err;
      res.redirect("/user");
    });
  }
}); 

} catch (err) {
  console.log(err);
  res.send("some error in database");
}

});



app.listen(port, () => {

  console.log(`Listening at port ${port}`);
});





