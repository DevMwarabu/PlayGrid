import { create } from "zustand";
import { tournamentService } from "@/services/api";

interface Tournament {
  id: number;
  title: string;
  game: string;
  status: string;
  prize_pool: string;
  max_players: number;
  start_date: string;
}

interface TournamentState {
  tournaments: Tournament[];
  isLoading: boolean;
  error: string | null;
  fetchTournaments: (status?: string) => Promise<void>;
}

export const useTournamentStore = create<TournamentState>((set) => ({
  tournaments: [],
  isLoading: false,
  error: null,
  fetchTournaments: async (status) => {
    set({ isLoading: true, error: null });
    try {
      const response = await tournamentService.getAll({ status });
      set({ tournaments: response.data, isLoading: false });
    } catch (err: unknown) {
      set({ error: (err as Error).message, isLoading: false });
    }
  },
}));

