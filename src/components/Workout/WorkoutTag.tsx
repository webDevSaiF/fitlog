type WorkoutTagProps = {
  label: string;
};

const WorkoutTag = ({ label }: WorkoutTagProps) => {
  return (
    <div className="bg-accent text-black text-xs font-bold uppercase rounded-full px-2.5 py-0.5 whitespace-nowrap tracking-[0.55px] leading-[1.5]">
      {label}
    </div>
  );
};

export default WorkoutTag;
