import Timeline from "./Timeline";
import { HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Career() {
  const { t } = useTranslation();
  const [timeline, setTimeline] = useState("education");
  const education = t("career.education", { returnObjects: true });
  const work = t("career.work", { returnObjects: true });
  return (
    <section className="min-h-screen flex items-center">
      <div className="container">
        <h1 className="font-black sm:text-6xl text-4xl mb-8 text-center">{t("career.title")}</h1>
        <div className="flex w-100 justify-center gap-8 text-2xl mb-10">
          <button
            className={`flex gap-2 items-center capitalize ${timeline === "education" && "text-primary"}`}
            onClick={() => setTimeline("education")}
          >
            <HiOutlineAcademicCap />
            {t("career.tabs.education")}
          </button>
          <button
            className={`flex gap-2 items-center capitalize ${timeline === "work" && "text-primary"}`}
            onClick={() => setTimeline("work")}
          >
            <HiOutlineBriefcase />
            {t("career.tabs.work")}
          </button>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute border-l border-gray-200 left-[50%] h-full"></div>
          {timeline === "education"
            ? education.map((item, i) => (
                <Timeline key={i} item={item} type="education" position={i % 2 === 0 ? "right" : "left"} index={i} />
              ))
            : work.map((item, i) => (
                <Timeline key={i} item={item} type="work" position={i % 2 === 0 ? "right" : "left"} index={i} />
              ))}
        </div>
        <div className="relative block lg:hidden w-full mx-auto">
          <div className="absolute border-l border-gray-200 left-0 h-full"></div>
          {timeline === "education"
            ? education.map((item, i) => <Timeline key={i} item={item} type="education" position="right" index={i} />)
            : work.map((item, i) => <Timeline key={i} item={item} type="work" position="right" index={i} />)}
        </div>
      </div>
    </section>
  );
}
