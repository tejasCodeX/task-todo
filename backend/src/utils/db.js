import mongoose from "mongoose";
import "dotenv/config";

const db = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected successfully..😁"))
    .catch((err) => console.log("FAiled to connect to MongoDb..☹"));
};

export default db;
