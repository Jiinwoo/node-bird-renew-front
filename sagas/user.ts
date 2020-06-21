import axios from "axios";
import {
	all,
	delay,
	put,
	takeEvery,
	takeLatest,
} from "@redux-saga/core/effects";
import {
	loginSuccessAction,
	loginFailureAction,
	loginRequestAction,
	signupSuccessAction,
	signupFailureAction,
	signupRequestAction,
	logoutSuccessAction,
	logoutFailureAction,
	logoutRequestAction,
} from "../reducers/user";
import { fork } from "redux-saga/effects";

function loginAPI() {
	// 서버에 요청을 보내는 부분 * 붙이지 말 것
	return axios.post("/login");
}

function* login() {
	try {
		console.log("hi");
		// yield call(loginAPI);
		yield delay(1000);
		yield put(loginSuccessAction());
	} catch (e) {
		// loginAPI 실패
		console.error(e);
		yield put(loginFailureAction(e.response.data));
	}
}

function* watchLogin() {
	yield takeEvery(loginRequestAction, login);
}

function signUpAPI() {
	// 서버에 요청을 보내는 부분
	return axios.post("/login");
}

function* signUp() {
	try {
		// yield call(signUpAPI);
		yield delay(1000);
		yield put(signupSuccessAction);
	} catch (e) {
		// loginAPI 실패
		console.error(e);
		yield put(signupFailureAction(e.response.data));
	}
}

function* watchSignUp() {
	yield takeEvery(signupRequestAction, signUp);
}

function logOutAPI() {
	return axios.post("/api/logout");
}

function* logOut() {
	try {
		// const result = yield call(logOutAPI);
		yield delay(1000);
		yield put(logoutSuccessAction());
	} catch (e) {
		yield put(logoutFailureAction(e.response.data));
	}
}

function* watchLogOut() {
	yield takeLatest(logoutRequestAction, logOut);
}

export default function* userSaga() {
	yield all([fork(watchLogin), fork(watchLogOut), fork(watchSignUp)]);
}
