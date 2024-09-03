import { create } from "zustand";

type State = {
	imageLoaded: boolean;
};

type Actions = {
	setImageLoaded: () => void;
	reset: () => void;
};

const useImageLoadedStore = create<State & Actions>((set) => ({
	imageLoaded: false,

	setImageLoaded: () => set({ imageLoaded: true }),
	reset: () => set({ imageLoaded: false }),
}));

export default useImageLoadedStore;
