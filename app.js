import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/", userRoutes);

export default app;
