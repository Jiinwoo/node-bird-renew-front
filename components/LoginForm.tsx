import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import styled from "styled-components";
import useInput from "../hooks/useInput";

interface ILoginFormProp {
	setIsLoggedIn?: (value: boolean) => void;
}

function LoginForm({ setIsLoggedIn }: ILoginFormProp) {
	const [id, onChangeId] = useInput("");
	const [password, onChangePassword] = useInput("");
	const style = useMemo(
		() => ({
			marginTop: 10,
		}),
		[],
	);

	const onSubmitForm = useCallback(() => {
		console.log(id, password);
		setIsLoggedIn(true);
	}, [id, password]);
	return (
		<FromWrapper onFinish={onSubmitForm}>
			<div>
				<label htmlFor={"user-id"}>아이디</label>
				<br />
				<Input name={"user-id"} value={id} onChange={onChangeId} required />
			</div>
			<div>
				<label htmlFor={"user-password"}>패스워드</label>
				<br />
				<Input
					name={"user-password"}
					value={password}
					type={"password"}
					onChange={onChangePassword}
					required
				/>
			</div>
			<ButtonWrapper>
				<Button type={"primary"} htmlType={"submit"} loading={false}>
					로그인
				</Button>
				<Link href={"/signup"}>
					<a>
						<Button>회원가입</Button>
					</a>
				</Link>
			</ButtonWrapper>
		</FromWrapper>
	);
}

const ButtonWrapper = styled.div`
	margin-top: 10px;
`;

const FromWrapper = styled(Form)`
	padding: 10px;
`;

export default LoginForm;
