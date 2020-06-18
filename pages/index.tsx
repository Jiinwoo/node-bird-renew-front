import React from "react";
import { useTypedSelector } from "../store/configureStore";

interface IHomeProp {}

function Home({}: IHomeProp): React.FunctionComponentElement<IHomeProp> {
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
