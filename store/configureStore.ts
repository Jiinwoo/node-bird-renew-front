import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { WithSagaTaskStore } from "../@types";

export type RootState = ReturnType<typeof rootReducer>;

const makeStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const middleware = [sagaMiddleware];

	const store: WithSagaTaskStore = configureStore({
		reducer: rootReducer,
		middleware: [] as const,
		devTools: process.env.NODE_ENV !== "production",
	});
	store.sagaTask = sagaMiddleware.run(rootSaga);
	return store;
};

const wrapper = createWrapper(makeStore, {
	debug: process.env.NODE_ENV === "development",
});

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default wrapper;
