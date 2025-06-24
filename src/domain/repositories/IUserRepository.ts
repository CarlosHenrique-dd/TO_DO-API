import type { CreateUserDTO } from "@/dtos/user/CreateUserDTO"
import type { User } from "../models/User"

export interface IUserRepository {
	create(user: CreateUserDTO): Promise<User>
	findByEmail(email: string): Promise<User | null>
}
