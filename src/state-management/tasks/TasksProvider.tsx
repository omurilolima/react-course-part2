import { ReactNode, useReducer } from "react";
import TasksContext from "./tasksContext";

// TASK REDUCER

export interface Task {
	id: number;
	title: string;
}

interface AddTask {
	type: "ADD";
	task: Task;
}

interface DeleteTask {
	type: "DELETE";
	taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
	switch (action.type) {
		case "ADD":
			return [action.task, ...tasks];
		case "DELETE":
			return tasks.filter((task) => task.id !== action.taskId);
	}
};

// TASK PROVIDER

interface Props {
	children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
	const [tasks, dispatch] = useReducer(taskReducer, []);

	return (
		<TasksContext.Provider value={{ tasks, dispatch }}>
			{children}
		</TasksContext.Provider>
	);
};

export default TasksProvider;
