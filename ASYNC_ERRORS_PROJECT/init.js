const mongoose = require("mongoose");

const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

}

let allChats = [
    {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
},

{
    from: "rohit",
    to: "mohit",
    msg: "Teach me java callStacks",
    created_at: new Date(),

},

{
    from: "amit",
    to: "sumit",
    msg: "all the best",
    created_at: new Date(),
},

{
    from: "anita",
    to: "ramesh",
    msg: "love you soo much",
    created_at: new Date(),
},
{
    from: "tony",
    to: "Peter",
    msg: "bring me some fruits",
    created_at: new Date(),
},
];

Chat.insertMany(allChats);
