import heroImg from "@/assets/hero.png";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="mt-8 md:mt-12">
      <div className="bg-card border border-[#222630] py-8 px-5 md:p-10 xl:p-14 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-10">
        <div>
          <h3 className="text-accent text-xs font-bold tracking-[1.1px] leading-[1.33] text-center md:text-left">
            WORKOUT LIBRARY
          </h3>
          <h1 className="mt-3 md:mt-5 font-oswald text-4xl lg:text-6xl tracking-[-1.5px] font-extrabold text-center md:text-left">
            TRAIN WITH INTENT. LOG <br className="hidden xl:block" /> EVERY SET.
          </h1>
          <Image
            className="w-50 mt-5 md:hidden mx-auto"
            src={heroImg}
            alt="Hero Image"
          />
          <p className="mt-5 text-[#9CA3AF] text-xs md:text-sm lg:text-base font-normal leading-[1.5] mb-7 text-center md:text-left">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            <br className="hidden xl:block" />
            into today's plan, and watch the week's work add up.
          </p>
          <Link
            className="bg-accent text-black rounded-md py-3 px-6 font-bold uppercase tracking-[0.3px] leading-[1.33] text-xs lg:text-sm block md:inline mx-auto text-center"
            href={"#library"}
          >
            BROWSE WORKOUTS
          </Link>
        </div>
        <div className="hidden md:block">
          <Image src={heroImg} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
