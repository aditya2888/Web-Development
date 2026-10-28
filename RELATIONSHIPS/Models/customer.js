const mongoose = require('mongoose');

const { Schema } = mongoose;
main().then(() => console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,   // types of object Id Stored
            ref: "Order",    // reference to which schema
        },
    ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("PRE MiddleWare");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
    if (customer.orders.length) {
        let res = await Order.deleteMany({ _id: { $in: customer.orders } });
        console.log(res);
    }
});


const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);


// using Populate

// const findCustomer = async () => {
//     let result = await Customer.findOne({}).populate("orders");
//     console.log(result);
// }

// findCustomer();


const addCust = async () => {
    let newCust = new Customer({
        name: "Karan Arjun",
    });

    let newOrder = new Order({
        item: "Burger",
        price: 250,
    });

    newCust.orders.push(newOrder);
    await newOrder.save();
    await newCust.save();

    console.log("added new Customer");
}

// addCust();

const delCust = async () => {
    let res = await Customer.findByIdAndDelete('6a623e73d5ac9e17ab348fb2');
    console.log(res);
}

delCust();