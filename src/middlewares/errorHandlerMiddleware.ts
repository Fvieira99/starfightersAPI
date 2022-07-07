import { NextFunction } from "connect";
import {Response, Request} from "express"

const errorStatusCode = {
  unprocessable_entity: 422,
  not_found: 404,
  conflict: 409
};

export function notFoundError(){
  return {type: "not_found"}
}

export function unprocessableEntityError(){
  return {type: "unprocessable_entity"}
}

export function conflictError(){
  return { type: "conflict" };
}

export default function handleErrorsMiddleware(error, req: Request, res: Response, next: NextFunction) {
  if (error.type) {
    return res.sendStatus(errorStatusCode[error.type]);
  }

  res.sendStatus(500)
}