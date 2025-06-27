import type { taskStatusEnums } from "@/shared/enums/taskStatusEnum"

export interface Task {
	id: string
	title: string
	description?: string | null
	status: taskStatusEnums
	createdAt: Date
	updatedAt: Date
	userId: string
}
