import { Router } from "express"
import { CreateUserUseCase } from "@/application/useCases/user/CreateUserUseCase"
import { UserRepository } from "@/infra/repositories/UserRepository"
import { CreateUserController } from "../controllers/user/CreateUserController"

const userRouter = Router()

userRouter.post("/", (req, res, next) => {
	const userRepository = new UserRepository()
	const createUserUseCase = new CreateUserUseCase(userRepository)
	new CreateUserController(createUserUseCase).handle(req, res, next)
})

export default userRouter
