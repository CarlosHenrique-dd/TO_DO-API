import type { Task } from "@/domain/models/Task"
import type { ITaskRepository } from "@/domain/repositories/ITaskRepository"
import type { CreateTaskDTO } from "@/dtos/task/CreateTaskDTO"
import type { UpdateTaskDTO } from "@/dtos/task/UpdateTaskDTO"
import { prisma } from "@/shared/config/database/prisma"
import type { taskStatusEnums } from "@/shared/enums/taskStatusEnum"

export class TaskRepository implements ITaskRepository {
	async create(task: CreateTaskDTO, userId: string): Promise<Task> {
		const created = await prisma.task.create({
			data: {
				title: task.title,
				status: task.status,
				description: task.description === undefined ? null : task.description,
				user: {
					connect: {
						id: userId
					}
				}
			}
		})

		return {
			id: created.id,
			title: created.title,
			description: created.description,
			status: created.status as taskStatusEnums,
			createdAt: created.createdAt,
			updatedAt: created.updatedAt,
			userId: created.userId
		}
	}

	async findByUserId(userId: string): Promise<Task[]> {
		const tasks = await prisma.task.findMany({
			where: {
				userId
			}
		})

		return tasks.map((task) => {
			return {
				id: task.id,
				title: task.title,
				description: task.description,
				status: task.status as taskStatusEnums,
				createdAt: task.createdAt,
				updatedAt: task.updatedAt,
				userId: task.userId
			}
		})
	}

	async update(
		taskId: string,
		userId: string,
		task: UpdateTaskDTO
	): Promise<Task | null> {
		const taskUpdated = await prisma.task.update({
			where: {
				id: taskId,
				userId
			},
			data: {
				title: task.title,
				description: task.description === undefined ? null : task.description,
				status: task.status
			}
		})

		return {
			id: taskUpdated.id,
			title: taskUpdated.title,
			description: taskUpdated.description,
			status: taskUpdated.status as taskStatusEnums,
			createdAt: taskUpdated.createdAt,
			updatedAt: taskUpdated.updatedAt,
			userId: taskUpdated.userId
		}
	}

	async delete(taskId: string, userId: string): Promise<Task | null> {
		const taskDeleted = await prisma.task.delete({
			where: {
				id: taskId,
				userId
			}
		})

		return {
			id: taskDeleted.id,
			title: taskDeleted.title,
			description: taskDeleted.description,
			status: taskDeleted.status as taskStatusEnums,
			createdAt: taskDeleted.createdAt,
			updatedAt: taskDeleted.updatedAt,
			userId: taskDeleted.userId
		}
	}
}
