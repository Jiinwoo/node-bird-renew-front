import { createSlice } from "@reduxjs/toolkit";

interface Post {
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
	mainPosts: Post[];
	imagePaths: any;
	postAdded: boolean;
}

const initialState: IinitialState = {
	mainPosts: [
		{
			id: 1,
			User: {
				id: 1,
				nickname: "제로초",
			},
			content: "첫 번째 게시글",
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
		ADD_DUMMY: (state) => state,
	},
});
export const {ADD_POST,ADD_DUMMY} = postSlice.actions;
export default postSlice.reducer;
