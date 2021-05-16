import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db";

// Controllers
import * as apiController from "./controllers/api";

const app = express();

connectDB();

/**
 * API routes
 */
app.get("/api/list", apiController.getAllData);

export { app };
