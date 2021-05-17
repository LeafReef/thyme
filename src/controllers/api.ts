import { Response, Request } from "express";
import logger from "../util/logger";
import SensorData from "../models/SensorData";

/**
 * Read sensor data
 * @route GET /api/list
 */
export const readData = (req: Request, res: Response): void => {
  interface ISensorData {
    temperature: number;
    humidity: number;
    moisture: number;
  }

  SensorData.findOne()
    .sort({ createdAt: -1 })
    .then((result: ISensorData) => {
      res.send(result);
      logger.info(`Found ${result}`);
    })
    .catch((err: string) => {
      logger.error(`Error reading data: ${err}`);
    });
};

/**
 * Insert sensor data
 * @route POST /api/insert
 */
export const insertData = (req: Request, res: Response): void => {
  interface ISensorData {
    temperature: number;
    humidity: number;
    moisture: number;
  }

  // Remove most recent data
  SensorData.deleteOne()
    .sort({ createdAt: -1 })
    .then((result: ISensorData) => {
      logger.info(`Removed ${result}`);
    })
    .catch((err: string) => {
      logger.error(`Error removing data: ${err}`);
    });

  // Parse request body
  const { temperature, humidity, moisture } = req.body;
  const parsedData: ISensorData = {
    temperature,
    humidity,
    moisture
  };

  // Save data
  const sensorData = new SensorData(parsedData);
  sensorData
    .save()
    .then((result: ISensorData) => {
      res.send(result);
      logger.info(`Saved ${result}`);
    })
    .catch((err: string) => {
      logger.error(`Error inserting data: ${err}`);
    });
};
