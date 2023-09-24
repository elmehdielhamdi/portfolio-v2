import { LanguageSelector } from "../LanguageSelector";
import { useBoolean } from "usehooks-ts";
import { MobileMenu, MobileMenuButton } from "./mobile-menu";
import { DesktopMenu } from "./desktop-menu";
import { Logo } from "../logo";

export const Navbar = () => {
  const open = useBoolean(false);

  return (
    <div className="z-10 fixed top-0 drop-shadow md:drop-shadow-none md:relative bg-white w-full h-20 flex items-center">
      <div className="container">
        <div className="flex justify-between items-center">
          <a href="#" aria-label="logo">
            <Logo className="h-9" />
          </a>

          <div className="-mr-2 -my-2 flex items-center gap-x-2 md:hidden">
            <LanguageSelector />

            <MobileMenuButton open={open} />
          </div>

          <DesktopMenu />
        </div>
      </div>

      <MobileMenu open={open} />
    </div>
  );
};
