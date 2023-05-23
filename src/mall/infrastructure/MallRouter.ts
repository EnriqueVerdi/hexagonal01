import express from "express";

import { mallController } from "./dependencies";

export const mallRouter = express.Router();

mallRouter.get("/:id/welcome", mallController.run.bind(mallController));
