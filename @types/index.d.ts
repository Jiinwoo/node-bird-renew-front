import { EnhancedStore } from "@reduxjs/toolkit";
import { Task } from "@redux-saga/core/types";

export interface WithSagaTaskStore extends EnhancedStore {
	sagaTask?: Task;
}
