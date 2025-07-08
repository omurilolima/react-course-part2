// This will replace the counterReducer or Redux

// install Zustand for Managing Application State
// npm i zustand@4.3.7
// use an interface to define the shape of the store

import { create } from "zustand";

interface CounterStore {
	counter: number;
	increment: () => void;
	reset: () => void;
}

// then implement the attributes and methods using create from zustand
// note that, with set, you don't need to spread the object

const useCounterStore = create<CounterStore>((set) => ({
	counter: 0,
	increment: () => set((store) => ({ counter: store.counter + 1 })),
	reset: () => set(() => ({ counter: 0 })),
}));

export default useCounterStore;
