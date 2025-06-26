import type { IJWTPayload } from "../utils/JWT"

declare global {
	namespace Express {
		export interface Request {
			user: IJWTPayload
		}
	}
}
