import * as techs from "../../assets/img/techs";
import TechnologieCard from "./TechnologieCard";
import { isMobile } from "react-device-detect";

export default function About() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container flex md:flex-row flex-col items-center">
        {!isMobile && (
          <div className="hidden lg:block w-96 h-96 rounded-full overflow-hidden">
            <iframe
              src="https://my.spline.design/myrobotocopy-2209b15608831297e230a2973b010ea9/"
              frameBorder="0"
              width="384px"
              height="384px"
              title="Robot"
            ></iframe>
          </div>
        )}

        <div className="lg:flex-grow lg:pl-24 lg:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="font-black sm:text-6xl text-4xl mb-10">About Me</h1>
          <p className="mb-8 text-xl sm:text-2xl font-light text-gray-600">
            I'm a front-end web developer, mastering HTML, CSS and Javascript,
            as well as than modern libraries and frameworks, especially
            Bootstrap and React, but still exploring other technologies and
            frameworks that catch my interest!
            <br /> If you're looking for a developer to add to your team, I'd
            love to hear from you!
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <TechnologieCard image={techs.html} />
            <TechnologieCard image={techs.css} />
            <TechnologieCard image={techs.javascript} />
            <TechnologieCard image={techs.bootstrap} />
            <TechnologieCard image={techs.tailwind} />
            <TechnologieCard image={techs.sass} />
            <TechnologieCard image={techs.node} />
            <TechnologieCard image={techs.react} />
            <TechnologieCard image={techs.redux} />
            <TechnologieCard image={techs.git} />
          </div>
        </div>
      </div>
    </section>
  );
}
