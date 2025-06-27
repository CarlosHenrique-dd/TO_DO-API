import type { NextFunction, Request, Response } from "express"
import type { CreateTaskUseCase } from "@/application/useCases/task/CreateTaskUseCase"

export class CreateTaskController {
	constructor(private createTaskUseCase: CreateTaskUseCase) {}

	async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const task = req.body
			const user = req.user
			const taskResponse = await this.createTaskUseCase.execute(task, user.sub)
			return res.status(201).json(taskResponse)
		} catch (error) {
			return next(error)
		}
	}
}
