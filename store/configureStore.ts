import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export type RootState = ReturnType<typeof rootReducer>;

const makeStore = () => {
	const middleware = [];

	const store = configureStore({
		reducer: rootReducer,
		middleware: [] as const,
		devTools: process.env.NODE_ENV !== "production",
	});
	return store;
};

const wrapper = createWrapper(makeStore, {
	debug: process.env.NODE_ENV === "development",
});

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default wrapper;
