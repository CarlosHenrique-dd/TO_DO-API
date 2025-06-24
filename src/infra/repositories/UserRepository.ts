import type { User } from "@/domain/models/User"
import type { IUserRepository } from "@/domain/repositories/IUserRepository"
import type { CreateUserDTO } from "@/dtos/user/CreateUserDTO"
import { prisma } from "@/shared/config/database/prisma"

export class UserRepository implements IUserRepository {
	create(user: CreateUserDTO): Promise<User> {
		return prisma.user.create({
			data: {
				name: user.name,
				email: user.email,
				password: user.password
			}
		})
	}
	findByEmail(email: string): Promise<User | null> {
		return prisma.user.findUnique({
			where: {
				email
			}
		})
	}
}
