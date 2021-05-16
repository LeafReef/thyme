import { Response, Request } from "express";
import logger from "../util/logger";
import Sensor from "../models/Sensor";

/**
 * Read all results
 * @route GET /api/list
 */
export const getAllData = (req: Request, res: Response): void => {
  res.send("Hello world");
};

/**
 * Insert data in db
 * @route POST /api/insert
 */
export const insertData = (req: Request, res: Response): void => {
  interface IParsedData {
    temperature: number;
    humidity: number;
  }

  // Delete most recent data
  Sensor.deleteOne()
    .sort({ createdAt: -1 })
    .then((result: IParsedData) => {
      logger.info(`Deleted ${result}`);
    })
    .catch((err: string) => {
      logger.error(`Error deleting data: ${err}`);
    });

  // Parse request body
  const { temperature, humidity } = req.body;
  const parsedData: IParsedData = {
    temperature,
    humidity
  };

  // Save data
  const sensorValue = new Sensor(parsedData);
  sensorValue
    .save()
    .then((result: IParsedData) => {
      res.send(result);
      logger.info(`Saved ${result}`);
    })
    .catch((err: string) => {
      logger.error(`Error saving data: ${err}`);
    });
};
