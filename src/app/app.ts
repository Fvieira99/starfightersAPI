import express, { json } from "express";
import "express-async-errors";
import router from "../routers/index.js";

import handleErrorsMiddleware from "../middlewares/errorHandlerMiddleware.js";

const app = express();

app.use(json());
app.use(router)
app.use(handleErrorsMiddleware)

export default app;