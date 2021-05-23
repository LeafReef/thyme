import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import { connectDB } from "./config/db";

// Controllers
import * as apiController from "./controllers/api";
import * as homeController from "./controllers/home";

const app = express();

// Configure express
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

connectDB();

// Routes
app.get("/", homeController.checkHealth);
app.get("/api/list", apiController.readData);
app.post("/api/insert", apiController.insertData);

export { app };
