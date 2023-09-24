import { TechnologieTag } from "./TechnologieTag";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export const WorkCarouselCard = ({ work, index }) => {
  const { t } = useTranslation();
  return (
    <div className="relative md:w-fit overflow-hidden rounded-xl mx-6 my-2 drop-shadow-md group">
      <img src={work.image} alt="" className="inset-0 md:h-[310px] lg:h-[340px] xl:h-[370px] " />
      <div className="absolute top-0 left-0 bottom-0 right-0 opacity-0 transform duration-200 ease-out group-hover:opacity-100">
        <div className="flex flex-col items-start min-w-[380px] min-h-[200px] absolute top-2 left-2 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md transform duration-200 ease-out opacity-0 -translate-x-12 -translate-y-12 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {t(`work.works.${index}`)}
          </h1>
          <p className="mb-3 flex gap-2">
            {work.technologies.map((tech, i) => (
              <TechnologieTag text={tech} key={i} />
            ))}
          </p>
          <a
            href={work.link}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            {t("work.button")}
            <HiArrowNarrowRight className="ml-2 -mr-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
