import type { ITaskRepository } from "@/domain/repositories/ITaskRepository"
import type { CreateTaskDTO } from "@/dtos/task/CreateTaskDTO"

export class CreateTaskUseCase {
	constructor(private taskRepository: ITaskRepository) {}

	execute(task: CreateTaskDTO, userId: string) {
		return this.taskRepository.create(task, userId)
	}
}
