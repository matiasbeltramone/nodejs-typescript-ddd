import { Request, Response, NextFunction } from "express";
import { error } from "./customResponse";

export const notFound = (request: Request, response: Response, next: NextFunction) => {
  response.status(404)
    .json(
      error('NotFoundException', 'Resource not found', 404)
    )
    .end();
};

export const internalServerError = (err: { message: string; extra: string; }, request: Request, response: Response, next: NextFunction) => {
  response.status(500)
    .json(
      error(err.extra, err.message, 500)
    )
    .end();
};
