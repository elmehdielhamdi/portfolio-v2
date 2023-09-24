import {
  HiOutlineHome,
  HiOutlineIdentification,
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineChat,
} from "react-icons/hi";

export const Sidenav = ({ active = "home" }) => {
  return (
    <div className="hidden z-10 absolute top-0 bottom-0 my-auto rounded-md right-5 h-fit md:flex flex-col items-center py-5 px-2 drop-shadow-md bg-white gap-5 w-fit">
      <Link href="#" active={active === "home"} ariaLabel="sidenav-home">
        <HiOutlineHome className="w-6 h-6" />
      </Link>

      <Link href="#about" active={active === "about"} ariaLabel="sidenav-about">
        <HiOutlineIdentification className="w-6 h-6" />
      </Link>

      <Link href="#work" active={active === "work"} ariaLabel="sidenav-work">
        <HiOutlineBriefcase className="w-6 h-6" />
      </Link>

      <Link href="#career" active={active === "career"} ariaLabel="sidenav-career">
        <HiOutlineChartBar className="w-6 h-6" />
      </Link>

      <Link href="#contact" active={active === "contact"} ariaLabel="sidenav-contact">
        <HiOutlineChat className="w-6 h-6" />
      </Link>
    </div>
  );
};

const Link = ({ children, href, active, ariaLabel }) => (
  <a
    href={href}
    className={`p-2 rounded-md  ${
      active ? "bg-primary text-white hover:text-white" : "hover:text-primary"
    }`}
    aria-label={ariaLabel}
  >
    {children}
  </a>
);
