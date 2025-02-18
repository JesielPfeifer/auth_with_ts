import assert from "node:assert";
import AppError from "./AppError";
import { HttpStatusCode } from "../constants/http";
import AppErrorCode from "../constants/appErrorCode";

type AppAssert = (
  condition: any,
  HttpStatusCode: HttpStatusCode,
  message: string,
  AppErrorCode?: AppErrorCode
) => asserts condition;

/**
 * Asserts a condition and throws an AppError if the condition is falsy
 */

const appAssert: AppAssert = (
  condition,
  HttpStatusCode,
  message,
  AppErrorCode
) => assert(condition, new AppError(HttpStatusCode, message, AppErrorCode));

export default appAssert;
