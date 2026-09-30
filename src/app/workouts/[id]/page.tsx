import WorkoutActions from "@/components/Workout/WorkoutActions";
import WorkoutSpecs from "@/components/Workout/WorkoutSpecs";
import WorkoutTag from "@/components/Workout/WorkoutTag";
import { getWorkoutById } from "@/utils/api";
import Image from "next/image";
import { notFound } from "next/navigation";

const WorkoutPage = async ({ params }: PageProps<"/workouts/[id]">) => {
  const { id } = await params;
  const workout = await getWorkoutById(id);
  if (!workout) notFound();

  return (
    <section className="grid lg:grid-cols-2 gap-8 lg:gap-14 py-10 lg:py-12 lg:mb-16">
      <figure className="relative aspect-square w-full rounded-2xl overflow-hidden bg-card">
        <Image src={workout.image} alt={workout.name} fill className="object-cover" />
      </figure>

      <div>
        <h1 className="font-oswald font-bold uppercase text-3xl md:text-4xl leading-[1.1]">
          {workout.name}
        </h1>
        <p className="mt-3 text-base text-[#9CA3AF] leading-[1.5] max-w-xl">
          {workout.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {workout.muscleGroups.map((tag) => (
            <WorkoutTag key={tag} label={tag} />
          ))}
        </div>

        <WorkoutSpecs workout={workout} />

        <div className="mt-8">
          <h2 className="font-oswald font-extrabold uppercase text-base tracking-[0.8px] leading-[1.5]">
            Instructions
          </h2>
          <ol className="mt-4 space-y-3">
            {workout.instructions.map((step, i) => (
              <li key={i} className="flex gap-2 text-sm leading-[1.62]">
                <span className="text-[#9CA3AF] font-medium min-w-4">{i + 1}.</span>
                <p className="text-[#D1D5DB]">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <WorkoutActions workout={workout} />
      </div>
    </section>
  );
};

export default WorkoutPage;
