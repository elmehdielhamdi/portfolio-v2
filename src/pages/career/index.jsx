import Timeline from "./Timeline";
import { HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi";
import { useState } from "react";

const education = [
  {
    title: "IT Learning",
    subtitle: "Casablanca",
    tag: "2021 - Present",
    paragraph:
      "Professional University Master's Degree in Computer Science Applied to Business Administration",
  },
  {
    title: "Higher School Of Technology",
    subtitle: "Casablanca",
    tag: "2020 - 2021",
    paragraph:
      "Professional License in Software Engineering and Advanced Administration of Computer Systems and Networks",
  },
  {
    title: "Higher School Of Technology",
    subtitle: "Casablanca",
    tag: "2018 - 2020",
    paragraph: "University Diploma of Technology in Computer Engineering",
  },
  {
    title: "High School Ben M'Sik",
    subtitle: "Casablanca",
    tag: "2017 - 2018",
    paragraph: "International Baccalaureate Mathematics A - French Option",
  },
];

const works = [
  {
    title: "Laboratoire RITM",
    subtitle: "Internship",
    tag: "May 2021 - 3 Months",
    paragraph: "Registration website for professional license at ESTC.",
    tech: "Technologies: Django – Django Rest Framework – Python – React – Redux",
  },
  {
    title: "Cabilux",
    subtitle: "Internship",
    tag: "April 2020 - 3 Months",
    paragraph: "Resource management application.",
    tech: "Technologies: Firebase – NodeJS – ExpressJS – Electron – React – Bootstrap – Redux",
  },
  {
    title: "Wikreate",
    subtitle: "Internship",
    tag: "June 2019 - 2 Months",
    paragraph: "News and content sharing website.",
    tech: "Technologies: Wordpress – PHP – Bootstrap",
  },
];

export default function Career() {
  const [timeline, setTimeline] = useState("education");
  return (
    <section className="min-h-screen flex items-center">
      <div className="container">
        <h1 className="font-black sm:text-6xl text-4xl mb-8 text-center">
          Career
        </h1>
        <div className="flex w-100 justify-center gap-8 text-2xl mb-10">
          <button
            className={`flex gap-2 items-center ${
              timeline === "education" && "text-primary"
            }`}
            onClick={() => setTimeline("education")}
          >
            <HiOutlineAcademicCap />
            Education
          </button>
          <button
            className={`flex gap-2 items-center ${
              timeline === "work" && "text-primary"
            }`}
            onClick={() => setTimeline("work")}
          >
            <HiOutlineBriefcase />
            Work
          </button>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute border-l border-gray-200 left-[50%] h-full"></div>
          {timeline === "education"
            ? education.map((item, i) => (
                <Timeline
                  key={i}
                  item={item}
                  type="education"
                  position={i % 2 === 0 ? "right" : "left"}
                />
              ))
            : works.map((item, i) => (
                <Timeline
                  key={i}
                  item={item}
                  type="work"
                  position={i % 2 === 0 ? "right" : "left"}
                />
              ))}
        </div>
        <div className="relative block lg:hidden w-full mx-auto">
          <div className="absolute border-l border-gray-200 left-0 h-full"></div>
          {timeline === "education"
            ? education.map((item, i) => (
                <Timeline
                  key={i}
                  item={item}
                  type="education"
                  position="right"
                />
              ))
            : works.map((item, i) => (
                <Timeline key={i} item={item} type="work" position="right" />
              ))}
        </div>
      </div>
    </section>
  );
}
