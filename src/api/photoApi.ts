type response = {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
};

export const fetchPhoto = async (photoId: number): Promise<response> => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/photos/${photoId}`
	);
	if (!response.ok) {
		throw new Error("Failed to fetch user data");
	}
	return response.json();
};
