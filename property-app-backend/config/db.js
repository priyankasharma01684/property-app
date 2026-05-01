const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin%40123@cluster0.4fw2cjf.mongodb.net/property-app",
    );
    console.log("Connected to MongoDB Atlas successfully!");
  } catch (error) {
    console.error("Connection error:", error);
  }
};

module.exports = connectDB;
