import { createSlice } from "@reduxjs/toolkit";
import { Post } from "./post";

const dummyUser = {
	id: 1,
	nickname: "제로초",
	Posts: [],
	Followings: [],
	Followers: [],
};

export interface IUser {
	id: number;
	nickname: string;
	Posts: Post[];
	Followings: IUser[];
	Followers: IUser[];
}

interface IinitialState {
	isLoggedIn: boolean; // 로그인 여부
	isLoggingOut: boolean; // 로그아웃 시도중
	isLoggingIn: boolean; // 로그인 시도중
	logInErrorReason: string; // 로그인 실패 사유
	isSignedUp: boolean; // 회원가입 성공
	isSigningUp: boolean; // 회원가입 시도중
	signUpErrorReason: string; // 회원가입 실패 사유
	me: IUser | null; // 내 정보
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
		LOG_IN_REQUEST: (state) => {
			state.isLoggingIn = true;
			state.logInErrorReason = "";
		},
		LOG_IN_SUCCESS: (state) => {
			state.isLoggedIn = true;
			state.me = dummyUser;
		},
		LOG_IN_FAILURE: (state, action) => {
			state.isLoggingIn = false;
			state.isLoggedIn = false;
			state.logInErrorReason = action.payload;
			state.me = null;
		},
		LOG_OUT_REQUEST: (state) => {
			state.isLoggedIn = false;
			state.me = null;
		},
		LOG_OUT_SUCCESS: (state) => {},
		LOG_OUT_FAILURE: (state) => state,
		SIGN_UP_REQUEST: (state) => state,
		SIGN_UP_SUCCESS: (state) => state,
		SIGN_UP_FAILURE: (state) => state,
		LOAD_USER_REQUEST: (state) => state,
		LOAD_USER_SUCCESS: (state) => state,
		LOAD_USER_FAILURE: (state) => state,
	},
});

export const {
	LOG_IN_SUCCESS,
	LOG_OUT_REQUEST: logoutAction,
} = userSlice.actions;
export default userSlice.reducer;
