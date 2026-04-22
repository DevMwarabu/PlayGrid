import { create } from "zustand";
import { leaderboardService } from "@/services/api";

interface Player {
  id: number;
  name: string;
  xp: number;
  win_rate: number;
  avatar_url?: string;
}

interface LeaderboardState {
  players: Player[];
  isLoading: boolean;
  error: string | null;
  fetchLeaderboard: () => Promise<void>;
}

export const useLeaderboardStore = create<LeaderboardState>((set) => ({
  players: [],
  isLoading: false,
  error: null,
  fetchLeaderboard: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await leaderboardService.getTop();
      set({ players: response.data, isLoading: false });
    } catch (err: unknown) {
      set({ error: (err as Error).message, isLoading: false });
    }
  },
}));

