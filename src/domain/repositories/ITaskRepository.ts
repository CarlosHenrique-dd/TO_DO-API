import type { CreateTaskDTO } from "@/dtos/task/CreateTaskDTO"
import type { UpdateTaskDTO } from "@/dtos/task/UpdateTaskDTO"
import type { Task } from "../models/Task"

export interface ITaskRepository {
	create(task: CreateTaskDTO): Promise<Task>
	getAll(): Promise<Task[]>
	update(taskId: string, task: UpdateTaskDTO): Promise<Task>
	delete(taskId: string): Promise<Task>
}
