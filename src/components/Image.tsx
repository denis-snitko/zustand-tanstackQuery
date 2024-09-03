type Props = {
	thumbnailUrl: string;
	title: string;
	imageLoaded: boolean;
	setImageLoaded: () => void;
};

export default function Image({
	thumbnailUrl,
	title,
	imageLoaded,
	setImageLoaded,
}: Props) {
	return (
		<>
			<img
				src={thumbnailUrl}
				alt={title}
				onLoad={() => setImageLoaded()}
				style={{
					display: imageLoaded ? "block" : "none",
				}}
			/>
		</>
	);
}
