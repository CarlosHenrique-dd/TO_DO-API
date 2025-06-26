import type { IUserRepository } from "@/domain/repositories/IUserRepository"
import type { LoginUserDTO } from "@/dtos/user/LoginUserDTO"
import { BadRequestError } from "@/shared/errors/BadRequest"
import { JWT } from "@/shared/utils/JWT"
import { Password } from "@/shared/utils/Password"

export class LoginUserUseCase {
	constructor(private userRepository: IUserRepository) {}

	async execute(user: LoginUserDTO) {
		const findedUser = await this.userRepository.findByEmail(user.email)
		if (!findedUser) {
			throw new BadRequestError("email/password is invalid")
		}

		const validPassword = Password.compare(user.password, findedUser.password)
		if (!validPassword) {
			throw new BadRequestError("email/password is invalid")
		}

		const token = JWT.sign({ sub: findedUser.id })

		return {
			user: {
				id: findedUser.id,
				name: findedUser.name,
				email: findedUser.email
			},
			token
		}
	}
}
