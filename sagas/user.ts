import axios from "axios";
import {
	all,
	call,
	delay,
	put,
	take,
	takeEvery,
	takeLatest,
} from "@redux-saga/core/effects";
import { LOG_IN } from "../reducers/user";
import { fork } from "redux-saga/effects";
import { SagaHelper } from "../util/SagaHelper";
import { loginAPI } from "../api/user";

const loginSaga = SagaHelper.fetchEntity(LOG_IN, loginAPI);

function* watchLogin() {
	const { payload } = yield take(LOG_IN.request);
	console.log(payload);
	yield call(loginSaga, payload);
}

// function* watchSignUp() {
// 	yield takeEvery(signupRequestAction, signUp);
// }
//
// function* watchLogOut() {
// 	yield takeLatest(logoutRequestAction, logOut);
// }

export default function* userSaga() {
	yield all([
		fork(watchLogin),
		// fork(watchLogOut),
		// fork(watchSignUp)
	]);
}
