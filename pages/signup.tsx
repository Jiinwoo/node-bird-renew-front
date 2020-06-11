import React, {
	ChangeEvent,
	ChangeEventHandler,
	useCallback,
	useState,
} from "react";
import Head from "next/head";
import { Button, Checkbox, Form, Input } from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";
import CheckBox from "rc-checkbox";
import { CheckboxChangeEvent } from "antd/es/checkbox";

function Signup() {
	const [id, onChangeId] = useInput("");
	const [password, onChangePassword] = useInput("");
	const [nickname, onChangeNickname] = useInput("");
	const [passwordCheck, setPasswordCheck] = useState("");
	const [passwordError, setPasswordError] = useState(false);
	const [term, setTerm] = useState(false);
	const [termError, setTermError] = useState(false);
	const onChangeTerm = useCallback((event: CheckboxChangeEvent) => {
		setTerm(event.target.checked);
		setTermError(false);
	}, []);

	const onChangePasswordCheck = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setPasswordCheck(event.target.value);
			setPasswordError(event.target.value !== password);
		},
		[password],
	);
	const onSubmit = useCallback(() => {
		if (password !== passwordCheck) {
			return setPasswordError(true);
		}
		if (!term) {
			return setTermError(true);
		}
		console.log(id, password, nickname);
	}, [term, password, passwordCheck]);
	return (
		<>
			<Head>
				<title>회원 가입 | Nodebird</title>
			</Head>
			<Form onFinish={onSubmit}>
				<div>
					<label htmlFor={"user-id"}>아이디</label>
					<br />
					<Input name={"user-id"} value={id} onChange={onChangeId} required />
				</div>
				<div>
					<label htmlFor={"user-nickname"}>닉네임</label>
					<br />
					<Input
						name={"user-nickname"}
						value={nickname}
						onChange={onChangeNickname}
						required
					/>
				</div>
				<div>
					<label htmlFor={"user-password"}>비밀번호</label>
					<br />
					<Input
						name={"user-password"}
						type={"password"}
						value={password}
						onChange={onChangePassword}
						required
					/>
				</div>
				<div>
					<label htmlFor={"user-password-check"}>비밀번호체크</label>
					<br />
					<Input
						name={"user-password-check"}
						type={"password"}
						value={passwordCheck}
						onChange={onChangePasswordCheck}
						required
					/>
					{passwordError && (
						<ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
					)}
				</div>
				<div>
					<Checkbox name={"user-term"} checked={term} onChange={onChangeTerm}>
						말을 잘 들으시겠습니까?
					</Checkbox>
					{termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
				</div>
				<div style={{ marginTop: 10 }}>
					<Button type={"primary"} htmlType={"submit"}>
						가입하기
					</Button>
				</div>
			</Form>
		</>
	);
}

const ErrorMessage = styled.div`
	color: red;
`;

export default Signup;
