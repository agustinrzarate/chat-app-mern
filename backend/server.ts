import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongo from "./db/connectToMongo";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // for parsing application/json

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongo();
  console.log(`Server is running on port ${PORT}`);
});
