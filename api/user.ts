import axios from ".";
import { LoginReqDTO } from "./dto/LoginReqDTO";

export async function loginAPI(dto: LoginReqDTO) {
	return (await axios.post("/login", dto)).data;
}

export async function signUpAPI() {
	return (await axios.post("/login")).data;
}

export async function logOutAPI() {
	return (await axios.post("/api/logout")).data;
}
