import { Response, Request } from "express";

/**
 * Read all results
 * @route GET /api/list
 */
export const getAllData = (req: Request, res: Response): void => {
  res.send("Hello world");
};
