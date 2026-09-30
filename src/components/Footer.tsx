import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-footer border-t border-[#1A1D24] px-5 py-7 md:py-10 mt-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-5 justify-between">
        <Logo />
        <div>
          <p className="text-[#6B7280] font-inter text-xs leading-[1.33] text-right md:text-center">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
