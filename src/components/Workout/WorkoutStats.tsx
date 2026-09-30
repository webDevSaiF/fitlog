import { Clock, Flame, Star } from "lucide-react";

type WorkoutStatsProps = {
  duration: number;
  calories: number;
  rating: number;
};

const WorkoutStats = ({ duration, calories, rating }: WorkoutStatsProps) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="text-[#9CA3AF] text-xs font-normal leading-[1.33] inline-flex gap-1.5 items-center">
        <Clock width={16} height={16} />
        <span>{duration} min</span>
      </div>
      <div className="text-[#9CA3AF] text-xs font-normal leading-[1.33] inline-flex gap-1.5 items-center">
        <Flame width={16} height={16} />
        <span>{calories} Kcal</span>
      </div>
      <div className="text-[#9CA3AF] text-xs font-normal leading-[1.33] inline-flex gap-1.5 items-center">
        <Star width={16} height={16} />
        <span>{rating}</span>
      </div>
    </div>
  );
};

export default WorkoutStats;
