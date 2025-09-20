import express from "express";
import cors from "cors";
import "dotenv/config";
import db from "./src/utils/db.js";
import router from "./src/routes/taskRoutes.js";

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.urlencoded({ extended: true })); // parse the past request coming from req.body
app.use(express.json()); // accept the json data from frontend

// connect database
db();

app.use("/api/v1", router)

app.listen(port, () => {
  console.log(`server is running on port ${port}...😊`);
});
