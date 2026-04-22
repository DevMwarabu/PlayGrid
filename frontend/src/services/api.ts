import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

export const tournamentService = {
  getAll: (params?: Record<string, string | number | undefined>) => api.get("/tournaments", { params }),

  getOne: (id: string | number) => api.get(`/tournaments/${id}`),
};

export const leaderboardService = {
  getTop: () => api.get("/leaderboard"),
};

export const mediaService = {
  getClips: () => api.get("/clips"),
};

export const adService = {
  getActive: () => api.get("/ads"),
};

export default api;
