import React, { FunctionComponentElement } from "react";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

function Profile(): FunctionComponentElement<null> {
	const followerList = [{ nickname: "진우" }, { nickname: "바보" }];
	const followingList = [{ nickname: "진우" }, { nickname: "바보" }];
	return (
		<>
			<Head>
				<title>내 프로필 | Nodebird</title>
			</Head>
			<NicknameEditForm />
			<FollowList header={"팔로잉 목록"} users={followingList} />
			<FollowList header={"팔로워 목록"} users={followerList} />
		</>
	);
}

export default Profile;
