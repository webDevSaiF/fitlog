"use client";

import type { Workout } from "@/types/workout";
import { Bookmark, CalendarPlus } from "lucide-react";

type WorkoutActionsProps = {
  workout: Workout;
};

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        type="button"
        className="inline-flex items-center gap-2.5 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-[#0F1115] transition hover:brightness-110 cursor-pointer"
      >
        <CalendarPlus size={16} />
        Add to today&apos;s plan
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2.5 rounded-xl border border-[#374151] px-6 py-3 text-sm font-medium text-[#E5E7EB] transition hover:border-white/40 cursor-pointer"
      >
        <Bookmark size={16} />
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;
