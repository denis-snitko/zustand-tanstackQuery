import { create } from "zustand";
import useImageLoadedStore from "./imageLoadedStore";

type State = {
	photoId: number;
};

type Actions = {
	setPhotoId: (id: number) => void;
	previousPhoto: () => void;
	nextPhoto: () => void;
};

const usePhotoStore = create<State & Actions>((set) => ({
	photoId: 1,

	setPhotoId: (id) => set({ photoId: id }),
	previousPhoto: () => {
		if (usePhotoStore.getState().photoId > 1) {
			useImageLoadedStore.getState().reset();
			set((state) => ({ photoId: state.photoId - 1 }));
		}
	},
	nextPhoto: () => {
		useImageLoadedStore.getState().reset();
		set((state) => ({ photoId: state.photoId + 1 }));
	},
}));

export default usePhotoStore;
