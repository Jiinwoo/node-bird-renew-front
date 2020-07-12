import {
	all,
	call,
	delay,
	fork,
	put,
	take,
	throttle,
} from "@redux-saga/core/effects";
import {
	loadPostsRequestAction,
	loadPostsSuccessAction,
	loadPostsFailureAction,
	LOAD_POSTS,
} from "../reducers/post";
import { loadPostsAPI } from "../api/post";
import { SagaHelper } from "../util/SagaHelper";

const loadPostsSaga = SagaHelper.fetchEntity(LOAD_POSTS, loadPostsAPI);

function* watchLoadPosts() {
	const { ...params } = yield take(LOAD_POSTS.request);
	console.log("파라미터 : ", params);
	yield call(loadPostsSaga, params);
}

export default function* postSaga() {
	yield all([
		fork(watchLoadPosts),
		//fork(watchAddPost),
		//fork(watchRemovePost),
		//fork(watchAddComment),
	]);
}
