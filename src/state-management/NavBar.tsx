import { useContext } from "react";
import TasksContext from "./tasks/tasksContext";
import LoginStatus from "./auth/LoginStatus";
import useCounterStore from "./counter/store";

const NavBar = () => {
	const { tasks } = useContext(TasksContext);
	// When calling this hook, we can pass an arrow function to select a particular property
	// So the component will re-render only if this property changes
	// NOTE that instead of getting an object, we get the actual property
	const counter = useCounterStore((s) => s.counter);

	console.log("Reder Navbar");

	return (
		<nav className="navbar d-flex justify-content-between">
			<span className="badge text-bg-secondary">{counter}</span>
			<LoginStatus />
		</nav>
	);
};

export default NavBar;
