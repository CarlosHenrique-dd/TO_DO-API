import type { taskStatusEnums } from "@/shared/enums/taskStatusEnum"

export interface CreateTaskDTO {
	title: string
	description?: string
	status: taskStatusEnums
}
