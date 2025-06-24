import type { NextFunction, Request, Response } from "express"
import type { LoginUserUseCase } from "@/application/useCases/user/LoginUserUseCase"

export class LoginUserController {
	constructor(private loginUserUseCase: LoginUserUseCase) {}

	async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const user = req.body
			const userReponse = await this.loginUserUseCase.execute(user)
			return res.status(200).json(userReponse)
		} catch (error) {
			return next(error)
		}
	}
}
