import {
  HiOutlineHome,
  HiOutlineIdentification,
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineChat,
} from "react-icons/hi";

export default function Sidenav({ active = "home" }) {
  const activeStyle = "bg-primary text-white hover:text-white";
  return (
    <div className="hidden z-10 absolute top-0 bottom-0 my-auto rounded-md right-5 h-fit md:flex flex-col items-center py-5 px-2 drop-shadow-md bg-white gap-5 w-fit">
      <a
        href="#"
        className={`p-2 rounded-md hover:text-primary ${
          active === "home" && activeStyle
        }`}
      >
        <HiOutlineHome className="w-6 h-6" />
      </a>
      <a
        href="#about"
        className={`p-2 rounded-md ${
          active === "about" ? activeStyle : "hover:text-primary"
        }`}
      >
        <HiOutlineIdentification className="w-6 h-6" />
      </a>
      <a
        href="#work"
        className={`p-2 rounded-md ${
          active === "work" ? activeStyle : "hover:text-primary"
        }`}
      >
        <HiOutlineBriefcase className="w-6 h-6" />
      </a>
      <a
        href="#career"
        className={`p-2 rounded-md ${
          active === "career" ? activeStyle : "hover:text-primary"
        }`}
      >
        <HiOutlineChartBar className="w-6 h-6" />
      </a>
      <a
        href="#contact"
        className={`p-2 rounded-md ${
          active === "contact" ? activeStyle : "hover:text-primary"
        }`}
      >
        <HiOutlineChat className="w-6 h-6" />
      </a>
    </div>
  );
}
