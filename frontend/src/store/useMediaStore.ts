import { create } from "zustand";
import { mediaService } from "@/services/api";

interface Clip {
  id: number;
  title: string;
  video_url: string;
  thumbnail_url?: string;
  game: string;
  views: number;
  likes: number;
  user: {
    id: number;
    name: string;
    avatar_url?: string;
  };
}

interface MediaState {
  clips: Clip[];
  isLoading: boolean;
  error: string | null;
  fetchClips: () => Promise<void>;
}

export const useMediaStore = create<MediaState>((set) => ({
  clips: [],
  isLoading: false,
  error: null,
  fetchClips: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await mediaService.getClips();
      set({ clips: response.data, isLoading: false });
    } catch (err: unknown) {
      set({ error: (err as Error).message, isLoading: false });
    }
  },
}));

