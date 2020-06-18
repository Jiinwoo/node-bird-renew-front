import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";

const makeStore = () => {
	const enhancer = process.env.NODE_ENV === "production";

	const store = configureStore(reducer, enhancer);
	return store;
};

const wrapper = createWrapper(makeStore, {
	debug: process.env.NODE_ENV === "development",
});
export default wrapper;
