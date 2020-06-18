import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
	isLoggedIn: boolean; // 로그인 여부
	isLoggingOut: boolean; // 로그아웃 시도중
	isLoggingIn: boolean; // 로그인 시도중
	logInErrorReason: string; // 로그인 실패 사유
	isSignedUp: boolean; // 회원가입 성공
	isSigningUp: boolean; // 회원가입 시도중
	signUpErrorReason: string; // 회원가입 실패 사유
	me: any; // 내 정보
	followingList: any; // 팔로잉 리스트
	followerList: any; // 팔로워 리스트
	userInfo: any; // 남의 정보
}

const initialState: IinitialState = {
	isLoggedIn: false, // 로그인 여부
	isLoggingOut: false, // 로그아웃 시도중
	isLoggingIn: false, // 로그인 시도중
	logInErrorReason: "", // 로그인 실패 사유
	isSignedUp: false, // 회원가입 성공
	isSigningUp: false, // 회원가입 시도중
	signUpErrorReason: "", // 회원가입 실패 사유
	me: null, // 내 정보
	followingList: [], // 팔로잉 리스트
	followerList: [], // 팔로워 리스트
	userInfo: null, // 남의 정보
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		LOG_IN_REQUEST: (state) => state,
		LOG_IN_SUCCESS: (state) => state,
		LOG_IN_FAILURE: (state) => state,
		LOG_OUT_REQUEST: (state) => state,
		LOG_OUT_SUCCESS: (state) => state,
		LOG_OUT_FAILURE: (state) => state,
		SIGN_UP_REQUEST: (state) => state,
		SIGN_UP_SUCCESS: (state) => state,
		SIGN_UP_FAILURE: (state) => state,
		LOAD_USER_REQUEST: (state) => state,
		LOAD_USER_SUCCESS: (state) => state,
		LOAD_USER_FAILURE: (state) => state,
	},
});
export default userSlice.reducer;
