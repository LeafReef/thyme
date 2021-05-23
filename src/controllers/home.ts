import { Response, Request } from "express";

/**
 * Check server health
 * @route GET /
 */
export const checkHealth = (req: Request, res: Response): void => {
  res.send("Server running");
};
