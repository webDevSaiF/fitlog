import { getAllWorkouts } from "@/utils/api";

const WorkoutLibrary = async () => {
  const workouts = await getAllWorkouts();
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <div key={workout.id} className="bg-card rounded-xl p-4">
          {workout.name}
        </div>
      ))}
    </div>
  );
};

export default WorkoutLibrary;
