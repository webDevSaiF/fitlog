import WorkoutCard from "@/components/Workout/WorkoutCard";
import { getAllWorkouts } from "@/utils/api";

const WorkoutLibrary = async () => {
  const workouts = await getAllWorkouts();
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
};

export default WorkoutLibrary;
