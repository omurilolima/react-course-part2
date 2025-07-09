// This will replace the counterReducer or Redux
// use an interface to define the shape of the store

import { create } from "zustand";

interface AuthStore {
	username: string;
	login: (username: string) => void;
	logout: () => void;
}

// then implement the attributes and methods using create from zustand
// note that, with set, you don't need to spread the object

const useAuthStore = create<AuthStore>((set) => ({
	username: "",
	login: (username) => set(() => ({ username: username })),
	logout: () => set(() => ({ username: "" })),
}));

export default useAuthStore;
