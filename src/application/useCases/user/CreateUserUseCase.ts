import type { IUserRepository } from "@/domain/repositories/IUserRepository"
import type { CreateUserDTO } from "@/dtos/user/CreateUserDTO"
import { BadRequestError } from "@/shared/errors/BadRequest"
import { Password } from "@/shared/utils/Password"

export class CreateUserUseCase {
	constructor(private userRepository: IUserRepository) {}

	async execute(user: CreateUserDTO) {
		const findedUser = await this.userRepository.findByEmail(user.email)
		if (findedUser) new BadRequestError("email is already used")

		user.password = await Password.crypto(user.password)
		return this.userRepository.create(user)
	}
}
