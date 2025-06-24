import type { taskStatusEnums } from "@/shared/enums/taskStatusEnum"

export interface Task {
	id: string
	title: string
	description?: string
	status: taskStatusEnums
	createdAt: Date
	updatedAt: Date
}
