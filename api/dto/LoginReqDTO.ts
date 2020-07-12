import { PayloadAction } from "@reduxjs/toolkit";

export interface LoginReqDTO {
	email: string;
	password: string;
}
type LoginReqPayLoadDTO = PayloadAction<LoginReqDTO>;
export default LoginReqPayLoadDTO;
