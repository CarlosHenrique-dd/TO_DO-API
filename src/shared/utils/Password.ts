import * as bcrypt from "bcrypt"
import env from "../config/env"

export class Password {
	private static SALT_ROUNDS = env.SALT

	static async crypto(password: string) {
		return bcrypt.hash(password, this.SALT_ROUNDS)
	}

	static async compare(password: string, hashPassword: string) {
		return bcrypt.compare(password, hashPassword)
	}
}
