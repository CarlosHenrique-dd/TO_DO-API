import type { NextFunction, Request, Response } from "express"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { JWT } from "../utils/JWT"

const AuthMiddleware = (req: Request, _res: Response, next: NextFunction) => {
	const { authorization } = req.headers

	if (!authorization) {
		throw new UnauthorizedError("Auth token not provided")
	}

	const parts = authorization.split(" ")
	const [scheme, token] = parts

	if (!scheme || !token) {
		throw new UnauthorizedError("Token error")
	}

	if (!/^Bearer$/i.test(scheme)) {
		throw new UnauthorizedError("Token malformatted")
	}

	try {
		const payload = JWT.verify(token)
		req.user = payload
		return next()
	} catch (_error) {
		throw new UnauthorizedError("Invalid token")
	}
}

export default AuthMiddleware
