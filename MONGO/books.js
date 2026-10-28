const mongoose = require('mongoose');

main()
    .then(() => {

        console.log("Connection Sucessful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,    // it true means , value should not be null
        maxLength: 20,   // option to define maximum length
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low for Amazon selling"],      // to set the minimum valeu to be 1, and if error comes sends the error
    },
    discount: {
        type: Number,
        default: 0 // using by default
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],   // can only use the values that are defined 
    },
    genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "How to kill a Mocking Bird",
//     price: "299",
// });

// book1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// using by default


// let book1 = new Book({
//     title: "Gone Girl",   // discount created by default , when save book 
//     price: "299",
// });

// book1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// using max, and min


// let book1 = new Book({
//     title: "Marvel Comics",  
//     price: -10,  // not store the value less that minimum
// });

// book1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// using enum 

// let book1 = new Book({
//     title: "Marvel Comics",  
//     price: 300,
//     category: "fiction",
// });

// book1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// Pass the array

// let book1 = new Book({
//     title: "Marvel Comics v2",  
//     price: 300,
//     genre: ["comics", "superheroes", "fiction"],
// });

// book1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// Update the value

// Book.findByIdAndUpdate("69c2b124accc73f512e40e8b", {price: -500})  // here updatation rules does not apply
//     .then((res) => {
//         console.log(res);
//     }).catch((err)=> {
//         console.log(err);
//     })

// Update the value and schema rules also apply 


Book.findByIdAndUpdate("69c2b124accc73f512e40e8b", {price: -500}, {runValidators: true})
    .then((res) => {
        console.log(res);
    }).catch((err)=> {
        console.log(err.errors.price.properties.message);   // to get the error message directly
    })
