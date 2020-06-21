import React from "react";
import { useTypedSelector } from "../store/configureStore";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

interface IHomeProp {}

function Home({}: IHomeProp) {
	const { isLoggedIn } = useTypedSelector((state) => state.user);
	const { mainPosts } = useTypedSelector((state) => state.post);
	return (
		<>
			{isLoggedIn && <PostForm />}
			{mainPosts.map((post, index) => (
				<PostCard key={post.id} post={post} />
			))}
		</>
	);
}
export default Home;
