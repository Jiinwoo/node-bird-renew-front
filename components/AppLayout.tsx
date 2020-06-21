import React, { FunctionComponentElement, useState } from "react";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import { useTypedSelector } from "../store/configureStore";
interface IAppLayoutProps {
	children: React.ReactNode;
}

function AppLayout({
	children,
}: IAppLayoutProps): FunctionComponentElement<IAppLayoutProps> {
	const { isLoggedIn } = useTypedSelector((state) => state.user);
	return (
		<div>
			<Menu mode={"horizontal"}>
				<Menu.Item>
					<Link href={"/"}>
						<a>노드버드</a>
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link href={"/profile"}>
						<a>프로필</a>
					</Link>
				</Menu.Item>
				<Menu.Item>
					<SearchInput enterButton />
				</Menu.Item>
				<Menu.Item>
					<Link href={"/signup"}>
						<a>회원가입</a>
					</Link>
				</Menu.Item>
			</Menu>
			<Row gutter={8}>
				<Col xs={24} md={6}>
					{isLoggedIn ? <UserProfile /> : <LoginForm />}
				</Col>
				<Col xs={24} md={6}>
					{children}
				</Col>
				<Col xs={24} md={6}>
					<a
						href={"https://jiinwoo.github.io/"}
						target={"_blank"}
						rel={"noopener noreferrer"}
					>
						Made By Jinwoo
					</a>
				</Col>
			</Row>
		</div>
	);
}

const SearchInput = styled(Input.Search)`
	vertical-align: middle;
`;

export default AppLayout;
