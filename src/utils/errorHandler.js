import { StatusCodes } from "http-status-codes";
export class AppErrors extends Error {
  constructor(
    name = "AppError",
    message = "Something went wrong !",
    description = "Internal server error !",
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super();
    this.name = name;
    this.message = message;
    this.description = description;
    this.statusCode = statusCode;
  }
}
