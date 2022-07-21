import WorkCarouselCard from "./WorkCarouselCard";
import * as images from "../../assets/img/works";
import Slider from "react-slick";
import WorkSmallCard from "./WorkSmallCard";
import { useTranslation } from "react-i18next";

const works = [
  {
    image: images.weather,
    title: "Weather App",
    technologies: ["React", "Tailwind", "openweathermap"],
    link: "https://weather.elmehdielhamdi.com",
  },
  {
    image: images.cssGenerator,
    title: "CSS Generator",
    technologies: ["React", "Bootstrap", "Redux-Toolkit"],
    link: "https://cssgenerator.elmehdielhamdi.com",
  },
  {
    image: images.robot,
    title: "Robot",
    technologies: ["Spline.design"],
    link: "https://my.spline.design/myrobot-270878a3c771b4528b0b044f8323dce5/",
  },
  {
    image: images.portfolioV2,
    title: "Portfolio",
    technologies: ["React", "Tailwind CSS", "Spline.design"],
    link: "https://elmehdielhamdi.com",
  },
];

export default function Work() {
  const { t } = useTranslation();

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
  };

  return (
    <section className="min-h-screen flex justify-center flex-col">
      <div className="container mb-0 md:mb-14">
        <h1 className="font-black sm:text-6xl text-4xl mb-6">{t("work.title")}</h1>
        <p className="mb-10 text-xl sm:text-2xl font-light text-gray-600 text-left">
          {t("work.subtitle")}{" "}
          <a href="#contact" className="text-primary font-semibold">
            {t("work.subtitle-link")}
          </a>
          .
        </p>
      </div>
      <div className="container p-0 max-w-[2000px] mx-auto">
        <Slider className="hidden md:block" {...settings}>
          {works.map((work, i) => (
            <WorkCarouselCard key={i} work={work} index={i} />
          ))}
        </Slider>
      </div>
      <div className="container md:hidden">
        <div className="flex flex-wrap gap-8 justify-center">
          {works.map((work, i) => (
            <WorkSmallCard key={i} work={work} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
