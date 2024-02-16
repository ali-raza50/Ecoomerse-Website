import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/CategoryRoute.js";
import productRoutes from "./routes/productRoutes.js";
const app = express();
dotenv.config();

//database config
connectDB();
//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
//res api
app.get("/", (req, res) => {
  res.send("<h1>Hey how</h1>");
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) => {
  console.log(
    `server running on ${process.env.Dev_MODE} port ${PORT}`.bgMagenta.white
  );
});
