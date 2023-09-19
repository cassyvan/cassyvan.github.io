import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "next-themes";
import { getTechLogos } from "../helpers/techlogos-utils";

const HomePage = () => {
  const { theme, setTheme } = useTheme();

  const techIcons = getTechLogos(theme);

  return (
    <div className="flex justify-center items-center gap-10 -mt-12 relative h-[40rem] sm:h-[auto] sm:flex-col sm:mt-0">
      <Image
        src="/images/avatarwave.png"
        alt="Cassy's Avatar"
        width={400}
        height={350}
        className="animate-avatar border-4 border-red-300 dark:border-sky-200"
      />
      <div className="flex-col relative pl-12 sm:pl-0">
        <div className="pb-8">
          <h1 className="py-4 text-left sm:text-center">
            Hi I&apos;m Cassy
            <FontAwesomeIcon icon={faFaceSmile} className="pl-4 sm:pt-4" />
          </h1>
          <h3 className="text-left pb-4 sm:text-center">
            Full-Stack Software Developer
          </h3>
          <h3 className="text-left sm:text-center">
            Based in Canada
            <FontAwesomeIcon
              icon={faCanadianMapleLeaf}
              className="pl-4"
              style={{ color: "red" }}
            />
          </h3>
        </div>
        <span className="sm:flex sm:justify-center">
          <a href="https://www.linkedin.com/in/cassy-van" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="px-2 fa-3x hover:text-red-300 dark:hover:text-sky-200"
            />
          </a>
          <a href="https://github.com/cassyvan" target="_blank ">
            <FontAwesomeIcon
              icon={faGithub}
              className="pl-2 fa-3x hover:text-red-300 dark:hover:text-sky-200"
            />
          </a>
        </span>
      </div>
      <h3 className="sm:flex sm:flex-start hidden pt-12 sm:border-b-2 sm:border-gray-300 pb-2">
        Tech Stack
      </h3>
      <div className="flex items-center bottom-0 absolute sm:relative">
        <ul className="flex gap-4 sm:grid sm:grid-cols-2">
          {techIcons.map((icon) => {
            if (icon.name.includes("Tailwind")) {
              return (
                <li
                  key={icon.name}
                  className="hover:scale-105 py-4 px-1 border-2 rounded-full shadow-md "
                >
                  <Image
                    src={icon.imagesrc}
                    width={60}
                    height={60}
                    alt={icon.name}
                    title={icon.name}
                  />
                </li>
              );
            }
            return (
              <li
                key={icon.name}
                className="hover:scale-105 border-2 rounded-full shadow-md p-1"
              >
                <Image
                  src={icon.imagesrc}
                  width={60}
                  height={60}
                  alt={icon.name}
                  title={icon.name}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
