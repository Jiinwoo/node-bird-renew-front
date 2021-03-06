import React, { useCallback } from "react";
import { Button, Card } from "antd";
import { useDispatch } from "react-redux";
// import { logoutRequestAction } from "../reducers/user";

interface IUserProfileProp {}

function UserProfile({}: IUserProfileProp) {
	const dispatch = useDispatch();
	const onLogout = useCallback(() => {
		// dispatch(logoutRequestAction());
	}, []);
	return (
		<Card
			actions={[
				<div key={"twit"}>
					짹짹
					<br />0
				</div>,
				<div key={"followings"}>
					팔로잉
					<br />0
				</div>,
				<div key={"followings"}>
					팔로워
					<br />0
				</div>,
			]}
		>
			<Card.Meta avatar={""} title={"Jinwoo"} />
			<Button onClick={onLogout}>로그아웃</Button>
		</Card>
	);
}
export default UserProfile;
