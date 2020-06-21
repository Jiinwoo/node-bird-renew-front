import React, { useCallback, useState } from "react";
import { Post } from "../reducers/post";
import { Button, Form, Input } from "antd";
import useInput from "../hooks/useInput";
import { useTypedSelector } from "../store/configureStore";

interface ICommentFormProps {
	post: Post;
}

function CommentForm({ post }: ICommentFormProps) {
	const id = useTypedSelector((state) => state.user.me?.id);
	const [commentText, onChangeCommentText] = useInput("");
	const onSubmitComment = useCallback(() => {
		console.log(post.id, commentText);
	}, [commentText]);
	return (
		<Form onFinish={onSubmitComment}>
			<Form.Item style={{ position: "relative", margin: 0 }}>
				<Input.TextArea
					value={commentText}
					onChange={onChangeCommentText}
					rows={4}
				/>
				<Button
					style={{ position: "absolute", right: 0, bottom: -40 }}
					type={"primary"}
					htmlType={"submit"}
				>
					삐약
				</Button>
			</Form.Item>
		</Form>
	);
}
export default CommentForm;
