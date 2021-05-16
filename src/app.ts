import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import { connectDB } from "./config/db";

// Controllers
import * as apiController from "./controllers/api";

const app = express();

// Configure express
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

connectDB();

// API routes
app.get("/api/list", apiController.getAllData);

export { app };
