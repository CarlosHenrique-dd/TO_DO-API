import type { CreateTaskDTO } from "@/dtos/task/CreateTaskDTO"
import type { UpdateTaskDTO } from "@/dtos/task/UpdateTaskDTO"
import type { Task } from "../models/Task"

export interface ITaskRepository {
	create(task: CreateTaskDTO, userId: string): Promise<Task>
	findByUserId(userId: string): Promise<Task[]>
	update(
		taskId: string,
		userId: string,
		task: UpdateTaskDTO
	): Promise<Task | null>
	delete(taskId: string, userId: string): Promise<Task | null>
}
