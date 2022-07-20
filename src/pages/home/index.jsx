import { useTranslation } from "react-i18next";
import photo from "../../assets/img/photo.webp";

export default function Index() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[calc(100vh-5rem)] pt-24 md:pt-4 pb-20 flex items-center">
      <div className="container flex flex-col justify-end items-center h-full text-center">
        {/* <h1 className="font-black sm:text-6xl text-4xl mb-10">Front-End Web Developer</h1> */}
        <h1 className="font-black sm:text-6xl text-4xl mb-10">{t("home.title")}</h1>
        <p className="text-xl sm:text-2xl font-light text-gray-600 mb-14">
          Websites should look good from the inside and out !
        </p>
        <div className="photo">
          <img src={photo} alt="profile-picture" />
        </div>
      </div>
    </section>
  );
}
