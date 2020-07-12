import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
export interface Post {
	id: number;
	User: {
		id: number;
		nickname: string;
	};
	content: string;
	Images: { src: string }[];
	Comments: {
		User: {
			nickname: string;
		};
		content: string;
	}[];
}

interface IinitialState {
	addPostLoading: boolean;
	addPostDone: boolean;
	addPostError: any;
	removePostLoading: boolean;
	removePostDone: boolean;
	removePostError: any;
	addCommentLoading: boolean;
	addCommentDone: boolean;
	addCommentError: any;
	loadPostsLoading: boolean;
	loadPostsDone: boolean;
	loadPostsError: any;
	mainPosts: Post[];
	imagePaths: any;
	postAdded: boolean;
}

const initialState: IinitialState = {
	addPostLoading: false,
	addPostDone: false,
	addPostError: null,
	removePostLoading: false,
	removePostDone: false,
	removePostError: null,
	addCommentLoading: false,
	addCommentDone: false,
	addCommentError: null,
	loadPostsLoading: false,
	loadPostsDone: false,
	loadPostsError: null,
	mainPosts: [
		{
			id: 1,
			User: {
				id: 1,
				nickname: "제로초",
			},
			content: "첫 번째 게시글 #해시태그 #익스프레스",
			Images: [
				{
					src:
						"https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
				},
				{
					src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
				},
				{
					src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
				},
			],
			Comments: [
				{
					User: {
						nickname: "nero",
					},
					content: "우와 개정판이 나왔군요~",
				},
				{
					User: {
						nickname: "hero",
					},
					content: "얼른 사고싶어요~",
				},
			],
		},
	], // 화면에 보일 포스트들
	imagePaths: [],
	postAdded: false,
};

const dummyPost = {
	id: 2,
	User: {
		id: 1,
		nickname: "제로초",
	},
	content: "나는 더미입니다.",
	Images: [],
	Comments: [],
	createdAt: new Date(),
};

const dummyComment = {
	id: 1,
	User: {
		id: 1,
		nickname: "제로초",
	},
	createdAt: new Date(),
	content: "더미 댓글입니다.",
};

const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		ADD_POST: (state, action) => {
			state.mainPosts.unshift(action.payload);
		},
		ADD_DUMMY: (state) => {
			state.mainPosts.unshift(dummyPost);
		},
		LOAD_POSTS_REQUEST: (draft, action: PayloadAction<number>) => {
			draft.loadPostsLoading = true;
			draft.loadPostsDone = false;
			draft.loadPostsError = null;
		},
		LOAD_POSTS_SUCCESS: (draft, action: PayloadAction<Post[]>) => {
			draft.loadPostsLoading = false;
			draft.loadPostsDone = true;
			draft.mainPosts = action.payload.concat(draft.mainPosts);
			// draft.hasMorePost = draft.mainPosts.length < 50;
		},
		LOAD_POSTS_FAILURE: (draft, action) => {
			draft.loadPostsLoading = true;
			draft.loadPostsError = action.payload;
		},
		ADD_POST_REQUEST: (draft) => {
			draft.addPostLoading = true;
			draft.addPostDone = false;
			draft.addPostError = null;
		},
		ADD_POST_SUCCESS: (draft, action) => {
			draft.addPostLoading = false;
			draft.addPostDone = true;
			draft.mainPosts.unshift(action.payload);
		},
		ADD_POST_FAILURE: (draft, action) => {
			draft.addPostLoading = true;
			draft.addPostError = action.payload;
		},
	},
});
export const LOAD_POSTS = {
	request: postSlice.actions.LOAD_POSTS_REQUEST,
	success: postSlice.actions.LOAD_POSTS_SUCCESS,
	failure: postSlice.actions.LOAD_POSTS_FAILURE,
};
export const {
	ADD_POST,
	ADD_DUMMY,
	LOAD_POSTS_REQUEST: loadPostsRequestAction,
	LOAD_POSTS_SUCCESS: loadPostsSuccessAction,
	LOAD_POSTS_FAILURE: loadPostsFailureAction,
} = postSlice.actions;
export default postSlice.reducer;
