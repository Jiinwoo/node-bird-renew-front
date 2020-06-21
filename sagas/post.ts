import { all, delay, fork, put, throttle } from "@redux-saga/core/effects";
import {
	loadPostsRequestAction,
	loadPostsSuccessAction,
	loadPostsFailureAction,
} from "../reducers/post";

function loadPostsAPI() {}

function* loadPosts() {
	try {
		// const result = yield call(loadPostsAPI)
		yield delay(1000);
		yield put(loadPostsSuccessAction());
	} catch (e) {
		yield put(loadPostsFailureAction(e));
	}
}

function* watchLoadPosts() {
	yield throttle(5000, loadPostsRequestAction, loadPosts);
}

export default function* postSaga() {
	yield all([
		fork(watchLoadPosts),
		//fork(watchAddPost),
		//fork(watchRemovePost),
		//fork(watchAddComment),
	]);
}
