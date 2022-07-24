import WorkCarouselCard from "./WorkCarouselCard";
// import * as images from "../../assets/img/works";
import Slider from "react-slick";
import WorkSmallCard from "./WorkSmallCard";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const works = [
  {
    image:
      "https://res.cloudinary.com/elmehdielhamdi/image/upload/v1658587841/portfolio/works/weather_g3xthe.webp",
    title: "Weather App",
    technologies: ["React", "Tailwind", "Openweathermap"],
    link: "https://weather.elmehdielhamdi.com",
  },
  {
    image:
      "https://res.cloudinary.com/elmehdielhamdi/image/upload/v1658587841/portfolio/works/notebook_tdevhy.webp",
    title: "Realtime Notebook App",
    technologies: ["React", "Firebase", "Chakra UI"],
    link: "https://notebook.elmehdielhamdi.com",
  },
  {
    image:
      "https://res.cloudinary.com/elmehdielhamdi/image/upload/v1658587839/portfolio/works/css_iginfa.webp",
    title: "CSS Generator",
    technologies: ["React", "Bootstrap", "Redux-Toolkit"],
    link: "https://cssgenerator.elmehdielhamdi.com",
  },
  {
    image:
      "https://res.cloudinary.com/elmehdielhamdi/image/upload/v1658587840/portfolio/works/robot_gcj5u8.webp",
    title: "Robot",
    technologies: ["Spline.design"],
    link: "https://my.spline.design/myrobot-270878a3c771b4528b0b044f8323dce5/",
  },
  {
    image:
      "https://res.cloudinary.com/elmehdielhamdi/image/upload/v1658587839/portfolio/works/portfolio_qa6zgg.webp",
    title: "Portfolio",
    technologies: ["React", "Tailwind CSS", "Spline.design", "i18next"],
    link: "https://elmehdielhamdi.com",
  },
];

export default function Work() {
  const { t } = useTranslation();
  const ref = useRef();

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const next = () => {
    ref.current.slickNext();
  };

  return (
    <section className="min-h-screen flex justify-center flex-col">
      <div className="container mb-0 md:mb-8">
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
        <div className="flex justify-center gap-x-2 mb-2">
          <Arrow icon={<FaChevronLeft />} onClick={previous} className="hover:-translate-x-1" />
          <Arrow icon={<FaChevronRight />} onClick={next} className="hover:translate-x-1" />
        </div>
        <Slider
          className="hidden md:block hover:cursor-grab active:cursor-grabbing"
          {...settings}
          ref={ref}
        >
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

function Arrow({ icon, onClick, className }) {
  return (
    <button
      className={`p-4 transition-all shadow hover:shadow-xl rounded-full active:shadow ${className}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
