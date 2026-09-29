import { Workout } from "@/types/workout";

const API_URL = "https://api.api-store.workers.dev/api/fitlog";

export const getAllWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch(API_URL, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to fetch workouts: ${response.statusText}`);
  }
  return response.json();
};

export const getWorkoutById = async (id: string): Promise<Workout | null> => {
  const response = await fetch(`${API_URL}/${id}`, { next: { revalidate: 3600 } });
  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(`Failed to fetch workout`);
  }

  return response.json();
};
