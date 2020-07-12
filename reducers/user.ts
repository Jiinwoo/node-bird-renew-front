import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "./post";
import LoginReqPayLoadDTO from "../api/dto/LoginReqDTO";

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
	logInLoading: boolean; // 로그인 시도중
	logInDone: boolean;
	logInError: any;
	logOutLoading: boolean; // 로그아웃 시도중
	logOutDone: boolean;
	logOutError: any;
	signUpLoading: boolean; // 회원가입 시도중
	signUpDone: boolean;
	signUpError: any;
	changeNicknameLoading: boolean; // 닉네임 변경 시도중
	changeNicknameDone: boolean;
	changeNicknameError: any;
	me: null | IUser;
	signUpData: any;
	loginData: any;
}

const initialState: IinitialState = {
	logInLoading: false, // 로그인 시도중
	logInDone: false,
	logInError: null,
	logOutLoading: false, // 로그아웃 시도중
	logOutDone: false,
	logOutError: null,
	signUpLoading: false, // 회원가입 시도중
	signUpDone: false,
	signUpError: null,
	changeNicknameLoading: false, // 닉네임 변경 시도중
	changeNicknameDone: false,
	changeNicknameError: null,
	me: null,
	signUpData: {},
	loginData: {},
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		LOG_IN_REQUEST: (draft, action: LoginReqPayLoadDTO) => {
			draft.logInLoading = true;
			draft.logInError = null;
			draft.logInDone = false;
		},
		LOG_IN_SUCCESS: (draft) => {
			draft.logInLoading = false;
			draft.me = dummyUser;
			draft.logInDone = true;
		},
		LOG_IN_FAILURE: (draft, action) => {
			draft.logInLoading = false;
			draft.logInError = action.payload;
			draft.me = null;
		},
		LOG_OUT_REQUEST: (draft) => {
			draft.logOutLoading = true;
			draft.logOutError = null;
			draft.logOutDone = false;
		},
		LOG_OUT_SUCCESS: (draft) => {
			draft.logOutLoading = false;
			draft.logOutDone = true;
			draft.me = null;
		},
		LOG_OUT_FAILURE: (draft, action) => {
			draft.logOutLoading = false;
			draft.logOutError = action.payload;
		},
		SIGN_UP_REQUEST: (draft) => {
			draft.signUpLoading = true;
			draft.signUpError = null;
			draft.signUpDone = false;
		},
		SIGN_UP_SUCCESS: (draft) => {
			draft.signUpLoading = false;
			draft.signUpDone = true;
		},
		SIGN_UP_FAILURE: (draft, action) => {
			draft.signUpLoading = false;
			draft.signUpError = action.payload;
		},
		CHANGE_NICKNAME_REQUEST: (draft) => {
			draft.changeNicknameLoading = true;
			draft.changeNicknameError = null;
			draft.changeNicknameDone = false;
		},
		CHANGE_NICKNAME_SUCCESS: (draft) => {
			draft.changeNicknameLoading = false;
			draft.changeNicknameDone = true;
		},
		CHANGE_NICKNAME_FAILURE: (draft, action) => {
			draft.changeNicknameLoading = false;
			draft.changeNicknameError = action.payload;
		},
		LOAD_USER_REQUEST: (state) => state,
		LOAD_USER_SUCCESS: (state) => state,
		LOAD_USER_FAILURE: (state) => state,
	},
});

export const LOG_IN = {
	request: userSlice.actions.LOG_IN_REQUEST,
	success: userSlice.actions.LOG_IN_SUCCESS,
	failure: userSlice.actions.LOG_IN_FAILURE,
};
export const SIGN_UP = {
	request: userSlice.actions.SIGN_UP_REQUEST,
	success: userSlice.actions.SIGN_UP_SUCCESS,
	failure: userSlice.actions.SIGN_UP_FAILURE,
};
export const LOG_OUT = {
	request: userSlice.actions.LOG_OUT_REQUEST,
	success: userSlice.actions.LOG_OUT_SUCCESS,
	failure: userSlice.actions.LOG_OUT_FAILURE,
};

export default userSlice.reducer;
