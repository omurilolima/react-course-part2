import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

// REDUCER

interface LoginAction {
	type: "LOGIN";
	username: string;
}

interface LogoutAction {
	type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (user: string, action: AuthAction): string => {
	if (action.type === "LOGIN") return action.username;
	if (action.type === "LOGOUT") return "";
	return user;
};

//  PROVIDER

interface Props {
	children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
	const [user, dispatch] = useReducer(authReducer, "");

	return (
		<AuthContext.Provider value={{ user, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
