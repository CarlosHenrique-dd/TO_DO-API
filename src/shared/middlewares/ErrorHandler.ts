import type { ErrorRequestHandler } from "express"
import { HttpError } from "../errors/HttpError"

const ErrorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
	const isHttpError = err instanceof HttpError

	const statusCode = isHttpError ? err.statusCode : 500
	const message = isHttpError ? err.message : "internal server error"

	const responseBody: Record<string, any> = {
		message
	}

	if (process.env.NODE_ENV === "dev" && statusCode === 500) {
		responseBody.stack = err.stack
	}

	res.status(statusCode).json(responseBody)
}

export default ErrorHandler
