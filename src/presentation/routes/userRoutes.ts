import { Router } from "express"
import { CreateUserUseCase } from "@/application/useCases/user/CreateUserUseCase"
import { LoginUserUseCase } from "@/application/useCases/user/LoginUserUseCase"
import { UserRepository } from "@/infra/repositories/UserRepository"
import { CreateUserController } from "../controllers/user/CreateUserController"
import { LoginUserController } from "../controllers/user/LoginUserController"

const userRouter = Router()

userRouter
	.post("/", (req, res, next) => {
		const userRepository = new UserRepository()
		const createUserUseCase = new CreateUserUseCase(userRepository)
		new CreateUserController(createUserUseCase).handle(req, res, next)
	})
	.post("/login", (req, res, next) => {
		const userRepository = new UserRepository()
		const loginUserUseCase = new LoginUserUseCase(userRepository)
		new LoginUserController(loginUserUseCase).handle(req, res, next)
	})

export default userRouter
