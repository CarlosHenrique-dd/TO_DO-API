import { HttpError } from "./HttpError"

export class UnauthorizedError extends HttpError {
	constructor(message = "Unauthorize") {
		super(401, message, "Unauthorize")
	}
}
