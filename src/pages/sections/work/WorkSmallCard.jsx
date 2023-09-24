import { useTranslation } from "react-i18next";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TechnologieTag } from "./TechnologieTag";

export const WorkSmallCard = ({ work }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full sm:w-96 bg-white rounded-lg drop-shadow-md overflow-hidden">
      <img className="w-full border border-b" src={work.image} alt="" />
      <div className="p-5">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{work.title}</h1>
        <p className="mb-3 flex flex-wrap gap-2">
          {work.technologies.map((tech, i) => (
            <TechnologieTag text={tech} key={i} />
          ))}
        </p>
        <a href={work.link} target="_blank" rel="noreferrer" className="btn py-2 px-3">
          {t("work.button")}
          <HiArrowNarrowRight className="ml-2 -mr-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
