import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "../store/configureStore";
import { ADD_DUMMY } from "../reducers/post";

function PostForm() {
	const { imagePaths, postAdded } = useTypedSelector((state) => state.post);
	const [text, setText] = useState("");
	const dispatch = useDispatch();
	const imageInput = useRef<HTMLInputElement>(null);
	const onClickImageUpload = useCallback(() => {
		if (!imageInput.current) {
			return;
		}
		imageInput.current.click();
	}, [imageInput.current]);

	useEffect(() => {
		if (postAdded) {
			setText("");
		}
	}, [postAdded]);

	const onChangeText = useCallback((e) => {
		setText(e.target.value);
	}, []);

	const onSubmit = useCallback(() => {
		dispatch(ADD_DUMMY());
	}, []);
	return (
		<Form
			style={{ margin: "10px 0 20px" }}
			encType="multipart/form-data"
			onFinish={onSubmit}
		>
			<Input.TextArea
				value={text}
				onChange={onChangeText}
				maxLength={140}
				placeholder="어떤 신기한 일이 있었나요?"
			/>
			<div>
				<input type="file" multiple hidden ref={imageInput} />
				<Button onClick={onClickImageUpload}>이미지 업로드</Button>
				<Button type="primary" style={{ float: "right" }} htmlType="submit">
					짹짹
				</Button>
			</div>
			<div>
				{imagePaths.map((v) => {
					return (
						<div key={v} style={{ display: "inline-block" }}>
							<img
								src={"http://localhost:3065/" + v}
								style={{ width: "200px" }}
								alt={v}
							/>
							<div>
								<Button>제거</Button>
							</div>
						</div>
					);
				})}
			</div>
		</Form>
	);
}

export default PostForm;
