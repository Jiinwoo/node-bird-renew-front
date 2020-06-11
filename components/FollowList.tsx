import React from "react";
import { Button, Card, List } from "antd";
import { StopOutlined } from "@ant-design/icons/lib";

interface IFollowListProp {
	header: string;
	users: {
		nickname: string;
	}[];
}

function FollowList({ header, users }: IFollowListProp) {
	return (
		<List
			style={{ marginBottom: 20 }}
			grid={{ gutter: 4, xs: 2, md: 3 }}
			size={"small"}
			header={<div>{header}</div>}
			loadMore={
				<div style={{ textAlign: "center", margin: "10px 0" }}>
					<Button>더 보기</Button>
				</div>
			}
			bordered
			dataSource={users}
			renderItem={(item) => (
				<List.Item style={{ marginTop: 20 }}>
					<Card actions={[<StopOutlined key={"stop"} />]}>
						<Card.Meta description={item.nickname} />
					</Card>
				</List.Item>
			)}
		/>
	);
}
export default FollowList;
