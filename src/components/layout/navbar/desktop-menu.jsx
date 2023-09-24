import { LanguageSelector } from "./language-selector";
import { useTranslation } from "react-i18next";

export const DesktopMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="hidden md:flex space-x-10 items-center">
      <LanguageSelector />

      <Link href="#">{t("navbar.home")}</Link>
      <Link href="#about">{t("navbar.about")}</Link>
      <Link href="#work">{t("navbar.work")}</Link>
      <Link href="#career">{t("navbar.career")}</Link>

      <a href="#contact" className="btn px-4 py-2 text-base font-medium capitalize">
        {t("navbar.contact")}
      </a>
    </nav>
  );
};

const Link = ({ children, ...props }) => (
  <a {...props} className="text-base font-medium text-gray-500 hover:text-gray-900 capitalize">
    {children}
  </a>
);
