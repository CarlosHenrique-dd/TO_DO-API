export class HttpError extends Error {
	constructor(
		public statusCode: number,
		message: string,
		public name = "HttpError"
	) {
		super(message)
		Error.captureStackTrace(this, this.constructor)
	}
}
