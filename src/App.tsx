import { useReducer } from "react";
import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";
import taskReducer from "./state-management/reducers/tasksReducer";
import TasksContext from "./state-management/contexts/tasksContext";
import AuthProvider from "./state-management/AuthProvider";

function App() {
	const [tasks, tasksDispatch] = useReducer(taskReducer, []);

	return (
		<AuthProvider>
			<TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
				<NavBar />
				<HomePage />
			</TasksContext.Provider>
		</AuthProvider>
	);
}

export default App;
