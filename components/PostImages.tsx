import React, { useCallback, useState } from "react";
import { PlusOutlined } from "@ant-design/icons/lib";
import ImagesZoom from "./ImagesZoom";

interface IPostImagesProps {
	images: { src: string }[];
}

function PostImages({ images }: IPostImagesProps) {
	const [showImagesZoom, setShowImagesZoom] = useState(false);
	const onZoom = useCallback(() => {
		setShowImagesZoom(true);
	}, []);
	const onClose = useCallback(() => {
		setShowImagesZoom(false);
	}, []);
	if (images.length === 1) {
		return (
			<>
				<img
					role={"presentation"}
					src={images[0].src}
					alt={images[0].src}
					onClick={onZoom}
				/>
				{showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
			</>
		);
	}
	if (images.length === 2) {
		return (
			<>
				<img
					style={{ width: "50%", display: "inline-block" }}
					role={"presentation"}
					src={images[0].src}
					alt={images[0].src}
					onClick={onZoom}
				/>
				<img
					style={{ width: "50%", display: "inline-block" }}
					role={"presentation"}
					src={images[1].src}
					alt={images[1].src}
					onClick={onZoom}
				/>
				{showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
			</>
		);
	}
	return (
		<>
			<div>
				<img
					style={{ width: "50%" }}
					role={"presentation"}
					src={images[0].src}
					alt={images[0].src}
					onClick={onZoom}
				/>
				<div
					role={"presentation"}
					style={{
						display: " inline-block",
						width: "50%",
						textAlign: "center",
						verticalAlign: "middle",
					}}
					onClick={onZoom}
				>
					<PlusOutlined />
					<br />
					{images.length - 1}
					개의 사진 더 보기
				</div>
				{showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
			</div>
		</>
	);
}
export default PostImages;
