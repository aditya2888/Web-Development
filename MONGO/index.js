const mongoose = require('mongoose');

main()
    .then(() => {

        console.log("Connection Sucessful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
})

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//     name: "Eve",
//     email: "eve@yahoo.in",
//     age:48,
// });


// user1.save()
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
// console.log(err);
// });


// Insert Many

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "Peter", email: "peter@gmail.com", age: 40},
//     {name: "Bruce", email: "bruce@gmail.com", age: 59},
// ]).then((res) => {
//     console.log(res);
// });

// Find 


// User.find({age: {}})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// using conditions 

// User.find({age: {$gt: 50}})
//     .then((res) => {
//         console.log(res[0].email);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// find one

// User.findOne({age: {$gt : 47}})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// User.findOne({_id: "69c003b9fc35b7370b4b5d50"})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// find by Id

// User.findById("69beb6306b6f69e78933e84a")
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// Update

// User.updateOne({name: "Adam"}, {age: 46})  // set updated age 
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// Update Many


// User.updateMany({age: 50}, {age: 60})  // set updated age 
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// find One and Update

// User.findOneAndUpdate({name: "Bruce"}, {age: 35})  
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// User.findOneAndUpdate({name: "Bruce"}, {age: 30}, {new: true})  // to get the updated value printed in terminal
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// find BY Id and Update

// User.findByIdAndUpdate({_id : "69beb713c4fd0458b0a682e4" }, {age: 38}, {new: true})  //use {new: true} to get the updated value printed in terminal
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// Delete 

// User.deleteOne({name: "Bruce"})
//     .then((res) => {
//         console.log(res);
//     }).catch((err) =>{
//         console.log(err);
//     });


// delete multiple users

// User.deleteMany({name: "Peter"})
//     .then((res) => {
//         console.log(res);
//     }).catch((err) =>{
//         console.log(err);
//     });


// Model.findByIdAndDelete()

// User.findByIdAndDelete({_id: "69beb713c4fd0458b0a682e4"})   // it prints and then delete, like above one
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// User.findOneAndDelete({name: "Tony"})
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(res);
//     });