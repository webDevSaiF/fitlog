import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/Library";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <section id="library" className="py-16">
        <div>
          <h2 className="font-oswald font-bold text-3xl tracking-[-0.75px] leading-[1.2]">
            THE LIBRARY
          </h2>
          <p className="mt-1 mb-8 text-[#9CA3AF] text-sm leading-[1.42]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <Suspense fallback={<Spinner />}>
          <WorkoutLibrary />
        </Suspense>
      </section>
    </>
  );
};

export default HomePage;
