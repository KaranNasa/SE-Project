const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://harshgupta:software@cluster0.qw1yviy.mongodb.net/softpro?retryWrites=true&w=majority").then(() => {
    console.log(`connection is successful`);
}).catch((err) => {
    console.log(`connection is failed`);
});