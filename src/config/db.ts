import mongoose from "mongoose";
import logger from "../util/logger";

const { MONGO_URI } = process.env;

export const connectDB = (): void => {
  logger.info("Connecting to database...");

  if (typeof MONGO_URI === "string") {
    mongoose
      .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
      })
      .then(() => {
        logger.info("Connected to database");
      })
      .catch((err) => {
        logger.error(`Error connecting to database: ${err}`);
      });
  } else {
    logger.error("MONGO_URI is not a string");
  }
};
