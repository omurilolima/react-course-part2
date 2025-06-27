import { useReducer } from "react";
import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";
import taskReducer from "./state-management/reducers/tasksReducer";
import TasksContext from "./state-management/contexts/tasksContext";

function App() {
	const [tasks, tasksDispatch] = useReducer(taskReducer, []);
	const [user, authDispatch] = useReducer(authReducer, "");

	return (
		<AuthContext.Provider value={{ user, dispatch: authDispatch }}>
			<TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
				<NavBar />
				<HomePage />
			</TasksContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;
