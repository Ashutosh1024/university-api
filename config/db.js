const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://dragunuov9999_db_user:u3mX2F0T0AFEuJan@clusternew.q0sxn4a.mongodb.net/universityDB?retryWrites=true&w=majority&appName=ClusterNew"
        );
        console.log("MongoDB Connected (Atlas)");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;