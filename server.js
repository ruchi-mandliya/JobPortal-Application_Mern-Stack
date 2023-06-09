import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import "express-async-errors";
import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";

import cors from "cors";
import errorMiddleware from "./middlewares/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

const PORT = process.env.PORT || 8002;

app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
