import type { taskStatusEnums } from "@/shared/enums/taskStatusEnum"

export interface UpdateTaskDTO {
	title: string
	description?: string
	status: taskStatusEnums
}
