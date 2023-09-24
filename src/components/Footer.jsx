import { FaLinkedinIn } from "react-icons/fa";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="text-gray-600 bg-white drop-shadow-lg">
      <div className="container py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a href="#" aria-label="logo">
          <Logo className="h-9" />
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} El Mehdi El Hamdi
        </p>
        <span className="gap-5 inline-flex text-lg font-black sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://www.linkedin.com/in/elmehdielhamdi/"
            target="_blank"
            className="text-gray-500 flex items-center w-5 h-5"
            aria-label="linkedin"
          >
            <FaLinkedinIn className="h-full" />
          </a>
        </span>
      </div>
    </footer>
  );
};
