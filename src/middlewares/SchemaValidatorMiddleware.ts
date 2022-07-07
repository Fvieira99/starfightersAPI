import {Request, Response} from "express"
import { unprocessableEntityError } from "./errorHandlerMiddleware.js"

export default function validateSchema(schema){
  return (req: Request, res: Response, next) => {
    const {error} = schema.validate(req.body, {abortEarly: false})

    if(error) throw unprocessableEntityError();

    next();
  }

}