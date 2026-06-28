const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://guptashashwat155_db_user:shashwat123@cluster0.uzqumth.mongodb.net/TaskTracker?retryWrites=true&w=majority");

        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;