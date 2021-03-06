import React, { useCallback, useState } from "react";
import { Post } from "../reducers/post";
import { Card, Popover, Button, Avatar, List, Comment } from "antd";
import {
	RetweetOutlined,
	HeartOutlined,
	MessageOutlined,
	EllipsisOutlined,
	HeartTwoTone,
} from "@ant-design/icons/lib";
import { useTypedSelector } from "../store/configureStore";
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";

interface IPostCardProps {
	post: Post;
}

function PostCard({ post }: IPostCardProps) {
	const [liked, setLiked] = useState(false);
	const [commentFormOpened, setCommentFormOpened] = useState(false);

	const id = useTypedSelector((state) => state.user.me?.id);
	const onToggleLike = useCallback(() => {
		setLiked((state) => !state);
	}, []);
	const onToggleComment = useCallback(() => {
		setCommentFormOpened((state) => !state);
	}, []);
	return (
		<div style={{ marginBottom: 20 }}>
			<Card
				cover={post.Images[0] && <PostImages images={post.Images} />}
				actions={[
					<RetweetOutlined key={"retweet"} />,
					liked ? (
						<HeartTwoTone
							twoToneColor={"#eb2f96"}
							key={"heart"}
							onClick={onToggleLike}
						/>
					) : (
						<HeartOutlined key={"heart"} onClick={onToggleLike} />
					),
					<MessageOutlined key={"comment"} onClick={onToggleComment} />,
					<Popover
						key={"more"}
						content={
							<Button.Group>
								{id && post.User.id === id && (
									<>
										<Button>수정</Button>
										<Button type={"ghost"}>삭제</Button>
									</>
								)}
								<Button>신고</Button>
							</Button.Group>
						}
					>
						<EllipsisOutlined />
					</Popover>,
				]}
			>
				<Card.Meta
					avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
					title={post.User.nickname}
					description={<PostCardContent postData={post.content} />}
				/>
			</Card>
			{commentFormOpened && (
				<div>
					<CommentForm post={post} />
					<List
						header={`${post.Comments.length}개의 댓글`}
						itemLayout={"horizontal"}
						dataSource={post.Comments}
						renderItem={(item) => (
							<li>
								<Comment
									author={item.User.nickname}
									avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
									content={item.content}
								/>
							</li>
						)}
					/>
				</div>
			)}
		</div>
	);
}
export default PostCard;
