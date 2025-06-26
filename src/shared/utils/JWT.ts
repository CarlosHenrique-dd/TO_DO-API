import jwt from "jsonwebtoken"
import env from "../config/env"

export interface IJWTPayload {
	sub: string
}

export class JWT {
	private static readonly secret = env.JWT_SECRET
	private static readonly expiresIn = "1d"

	static sign(payload: IJWTPayload): string {
		return jwt.sign(payload, this.secret, {
			expiresIn: this.expiresIn
		})
	}

	static verify(token: string): IJWTPayload {
		return jwt.verify(token, this.secret) as IJWTPayload
	}
}
