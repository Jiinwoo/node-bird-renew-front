import React from "react";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import "antd/dist/antd.css";
import Head from "next/head";

import AppLayout from "../components/AppLayout";
import wrapper from "../store/configureStore";

function App({ Component, pageProps }: AppProps): any {
	return (
		<AppLayout>
			<Head>
				<meta charSet={"utf-8"} />
				<title>NodeBird</title>
			</Head>
			<Component {...pageProps} />
		</AppLayout>
	);
}

App.getInitialProps = async ({
	Component,
	ctx,
}: AppContext): Promise<AppInitialProps> => {
	let pageProps = {};

	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}

	return { pageProps };
};
export default wrapper.withRedux(App);
