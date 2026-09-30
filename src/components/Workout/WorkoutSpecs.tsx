import type { Workout } from "@/types/workout";

type WorkoutSpecsProps = {
  workout: Workout;
};

const WorkoutSpecs = ({ workout }: WorkoutSpecsProps) => {
  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating },
  ];

  return (
    <div className="mt-7 rounded-2xl border border-[#232834] bg-[#151922] divide-y divide-[#232834]">
      {specs.map((spec) => (
        <div key={spec.label} className="flex items-center justify-between gap-4 px-6 py-4">
          <span className="text-xs font-bold uppercase tracking-[0.6px] text-[#9CA3AF] leading-[1.33]">
            {spec.label}
          </span>
          <span className="text-sm font-medium text-[#E5E7EB] text-right leading-[1.42]">
            {spec.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default WorkoutSpecs;
