// This will replace the counterReducer or Redux

// install Zustand for Managing Application State
// npm i zustand@4.3.7
// use an interface to define the shape of the store

// For inspecting stores with Zustand DevTools, install:
// npm i simple-zustand-devtools@1.1.0
// then, in the store.ts import the function mountStoreDevtool
// install the type declaration for node: npm i -D @types/node

import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CounterStore {
	counter: number;
	max: number;
	increment: () => void;
	reset: () => void;
}

// then implement the attributes and methods using create from zustand
// note that, with set, you don't need to spread the object

const useCounterStore = create<CounterStore>((set) => ({
	counter: 0,
	max: 5,
	increment: () => set((store) => ({ counter: store.counter + 1 })),
	reset: () => set(() => ({ max: 10 })),
}));

// If in development environment, call the mountStoreDevtool
// passagin a name to the store and the custom hook
// Back to the browser, you will see the name of the store in the components tab
// Click it and you will see the content of the store
if (process.env.NODE_ENV === "development")
	mountStoreDevtool("Counter Store", useCounterStore);

export default useCounterStore;
