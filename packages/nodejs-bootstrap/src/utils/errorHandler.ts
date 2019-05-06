import {Request, Response, NextFunction} from "express";
import {error} from "./customResponse";
import EntityNotFoundException from "../Application/Exceptions/EntityNotFoundException";
import NotFoundException from "../API/Http/Exceptions/NotFoundException";
import {HTTP_CODES} from "../API/Http/Enums/HttpStatuses";
import {codeErrors} from "../API/Http/Validations/Utils/ErrorMessages";
import InternalErrorException from "../API/Http/Exceptions/InternalErrorException";
import ValidationException from "../Application/Exceptions/ValidationException";
import BadRequestException from "../API/Http/Exceptions/BadRequestException";
import UnprocessableEntityException from "../API/Http/Exceptions/UnprocessableEntityException";

export const mapApplicationToHTTPErrors = async (e: any, request: Request, response: Response, next: NextFunction) => {
  if (e instanceof EntityNotFoundException) {
    e = new NotFoundException(
      e.message,
      HTTP_CODES.NOT_FOUND,
      codeErrors.HTTP.NOT_FOUND.code,
      codeErrors.HTTP.NOT_FOUND.href
    );

    return next(e);
  }

  if (e instanceof ValidationException) {
    if ((JSON.parse(e.message)).type === 'BadRequestException') {
      e = new BadRequestException(
        e.message,
        HTTP_CODES.BAD_REQUEST,
        codeErrors.HTTP.BAD_REQUEST.code,
        codeErrors.HTTP.BAD_REQUEST.href
      );
    }

    e = new UnprocessableEntityException(
      e.message,
      HTTP_CODES.UNPROCESSABLE_ENTITY,
      codeErrors.HTTP.UNPROCESSABLE_ENTITY.code,
      codeErrors.HTTP.UNPROCESSABLE_ENTITY.href
    );

    return next(e);
  }

  e = new InternalErrorException(
    e.message,
    HTTP_CODES.INTERNAL_ERROR,
    codeErrors.HTTP.INTERNAL_ERROR.code,
    codeErrors.HTTP.INTERNAL_ERROR.href
  );

  return next(e);
};

export const execute = async (e: any, request: Request, response: Response, next: NextFunction) => {
  if (e instanceof BadRequestException || e instanceof UnprocessableEntityException) {
    return response.status(e.status).json(
      error(e.name, JSON.parse(e.message), e.type, e.href),
    );
  }

  return response.status(e.status).json(
    error(e.name, e.message, e.type, e.href),
  );
};
