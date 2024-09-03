import useUserStore from "../store/photoStore";

export default function Buttons() {
	const state = {
		photoId: useUserStore((state) => state.photoId),
		previousPhoto: useUserStore((state) => state.previousPhoto),
		nextPhoto: useUserStore((state) => state.nextPhoto),
	};

	return (
		<>
			<button disabled={state.photoId === 1} onClick={state.previousPhoto}>
				Previous User
			</button>
			<button onClick={state.nextPhoto}>Next User</button>
		</>
	);
}
