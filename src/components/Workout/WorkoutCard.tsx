import WorkoutStats from "@/components/Workout/WorkoutStats";
import WorkoutTag from "@/components/Workout/WorkoutTag";
import { Workout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";

type WorkoutCardProps = {
  workout: Workout;
};

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <article className="bg-card rounded-2xl overflow-hidden hover:ring-1 hover:ring-accent/40 transition">
        <figure>
          <Image
            width={400}
            height={400}
            src={workout.image}
            alt={workout.name}
            className="h-80 w-full object-cover"
          />
        </figure>
        <div className="p-6">
          <div className="inline-flex gap-2">
            {workout.muscleGroups.map((tag) => (
              <WorkoutTag key={tag} label={tag} />
            ))}
          </div>
          <h3 className="mt-3 font-oswald font-bold uppercase text-white text-lg tracking-[0.45px] leading-[1.55]">
            {workout.name}
          </h3>
          <p className="mt-1 text-xs font-normal text-[#9CA3AF] leading-[1.33]">
            {workout.equipment}
          </p>
          <div className="mt-4 mb-3 border-t border-[#20242E]"></div>
          <WorkoutStats
            duration={workout.duration}
            calories={workout.caloriesBurned}
            rating={workout.rating}
          />
        </div>
      </article>
    </Link>
  );
};

export default WorkoutCard;
