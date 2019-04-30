import { Request, Response, NextFunction } from "express";
import { error } from "./customResponse";

export const notFound = (request: Request, response: Response, next: NextFunction) => {
  response.status(404)
    .json(
      error('NotFoundException', 'ERR-0000', 'Resource not found', 'www.example.com/#ERR-0000')
    )
    .end();
};

export const internalServerError = (err: any, request: Request, response: Response, next: NextFunction) => {
  console.log(err);

  response.status(500)
    .json(
      error('InternalServerError', 'ERR-0001', 'Whoops something was wrong', 'www.example.com/#ERR-0001')
    )
    .end();
};
