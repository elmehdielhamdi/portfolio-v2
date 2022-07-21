import { useTranslation } from "react-i18next";
import { HiOutlineBriefcase, HiOutlineAcademicCap } from "react-icons/hi";

export default function Timeline({ item, type, position, index }) {
  const { t } = useTranslation();
  return (
    <div
      className={`pb-10 w-full flex ${
        position === "left" ? "justify-end pr-20" : "pl-10 lg:pl-20"
      }`}
    >
      <div className={`hidden lg:block w-1/2 ${position === "left" && "order-2"}`}></div>
      <div className={`${position === "left" && "order-1"} w-full lg:w-1/2`}>
        <span className="flex absolute -left-[12px] lg:left-[calc(50%-12px)] justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
          {type === "work" ? (
            <HiOutlineBriefcase className="w-3 h-3 text-blue-600" />
          ) : (
            <HiOutlineAcademicCap className="w-3 h-3 text-blue-600" />
          )}
        </span>
        <div className="ml-2">
          <h1 className="flex flex-col sm:flex-row items-start justify-between mb-1 text-lg font-semibold text-gray-900">
            {item.title}
            <span className="whitespace-nowrap bg-blue-100 text-center text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded my-1 sm:my-0">
              {item.tag}
            </span>
          </h1>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
            {item.subtitle}
          </time>
          <p className="mb-4 text-base font-normal text-gray-500">{item.paragraph}</p>
          {type === "work" && (
            <p className="-mt-3 text-base font-normal text-gray-500">{item.tech}</p>
          )}
        </div>
      </div>
    </div>
  );
}
