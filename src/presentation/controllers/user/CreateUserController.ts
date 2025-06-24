import type { NextFunction, Request, Response } from "express"
import type { CreateUserUseCase } from "@/application/useCases/user/CreateUserUseCase"
export class CreateUserController {
	constructor(private createUserUseCase: CreateUserUseCase) {}

	async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const user = req.body
			const userResponse = await this.createUserUseCase.execute(user)
			return res.status(201).json(userResponse)
		} catch (error) {
			return next(error)
		}
	}
}
