import { Router } from "express"
import { CreateTaskUseCase } from "@/application/useCases/task/CreateTaskUseCase"
import { TaskRepository } from "@/infra/repositories/TaskRepository"
import AuthMiddleware from "@/shared/middlewares/AuthMiddleware"
import { CreateTaskController } from "../controllers/task/CreateTaskController"

const taskRouter = Router()

taskRouter.use(AuthMiddleware)

taskRouter.post("/", (req, res, next) => {
	const taskRepository = new TaskRepository()
	const createTaskService = new CreateTaskUseCase(taskRepository)
	new CreateTaskController(createTaskService).handle(req, res, next)
})

export default taskRouter
