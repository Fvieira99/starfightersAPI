import { Router } from "express";
import { battle } from "../controllers/battleController.js";
import validateSchema from "../middlewares/schemaValidatorMiddleware.js";
import battleSchema from "../schemas/battleSchema.js";

const battleRouter = Router();

battleRouter.post("/battle",validateSchema(battleSchema), battle);

export default battleRouter;