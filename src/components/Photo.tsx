import { useQuery } from "@tanstack/react-query";
import { fetchPhoto } from "../api/photoApi";
import useUserStore from "../store/photoStore";
import useImageLoadedStore from "../store/imageLoadedStore";
import Image from "./Image";

export default function Photo() {
	const state = {
		photoId: useUserStore((state) => state.photoId),
		imageLoaded: useImageLoadedStore((state) => state.imageLoaded),
		setImageLoaded: useImageLoadedStore((state) => state.setImageLoaded),
	};

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ["photo", state.photoId],
		queryFn: () => fetchPhoto(state.photoId),
		retry: false,
	});

	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>Error loading data: {error?.message}</p>;

	return (
		<>
			{data && (
				<div>
					<h2>Photo (id: {data.id})</h2>
					<div>
						{!state.imageLoaded && (
							<p style={{ width: 150, height: 150, margin: "0 auto" }}>
								Loading image...
							</p>
						)}
						<Image
							thumbnailUrl={data.thumbnailUrl}
							title={data.title}
							imageLoaded={state.imageLoaded}
							setImageLoaded={state.setImageLoaded}
						/>
						<p>{data.title}</p>
					</div>
				</div>
			)}
		</>
	);
}
