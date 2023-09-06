import Image from "next/image";
import {
  faAddressCard,
  faLightbulb,
} from "@fortawesome/free-regular-svg-icons";
import {
  faPaw,
  faPuzzlePiece,
  faStethoscope,
  faFish,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutPage = () => {
  return (
    <div className="flex justify-center items-end">
      <div className="max-w-4xl pr-12">
        <h1 className="pb-8">
          About <FontAwesomeIcon icon={faAddressCard} />
        </h1>
        <div className="border-solid border-2">
          <p>
            Hi! I&apos;m Cassy, a passionate and dedicated software developer
            with a keen focus on
            <span className="block bg-red-300 dark:bg-sky-200 inset-1 -skew-y-2 relative inline-block">
              web development
            </span>
            .
          </p>
          <br></br>
          <p>
            In a former life, I donned the scrubs as a Registered Nurse{" "}
            <FontAwesomeIcon icon={faStethoscope} /> &nbsp; before making the
            exciting leap into the world of technology.
          </p>
          <br></br>
          <p>
            My journey has led me to work alongside a diverse array of
            individuals, and my journey in development has spanned from startups
            to mid-size companies.
          </p>
          <p>
            Always hungry for knowledge, I embrace every opportunity to learn
            and grow. <FontAwesomeIcon icon={faLightbulb} />
          </p>
          <br></br>
          <p>
            Beyond coding and debugging, you&apos;ll find me engrossed in
            solving puzzles &nbsp;
            <FontAwesomeIcon icon={faPuzzlePiece} />
            &nbsp; —murder mysteries happen to be my absolute favorite.
          </p>
          <br></br>
          <p>
            When I&apos;m not in front of a screen, I love spending quality time
            with my four-legged companion, indulging in long walks and playful
            moments. <FontAwesomeIcon icon={faPaw} />
          </p>
          <br></br>
          <p>
            I highly enjoy interacting with others, and listening to new ideas!
            I am always open to connecting, so please feel free to contact me!
          </p>
        </div>
        <div className="pt-8">
          <h3 className="block bg-red-300 dark:bg-sky-200 inset-1 skew-y-2 relative inline-block">
            Resume.pdf
          </h3>
        </div>
      </div>
      <div className=" flex origin-top-left rotate-45">
        <FontAwesomeIcon
          icon={faFish}
          className="fa-9x opacity-40 animate-fish"
        />
      </div>
    </div>
  );
};

export default AboutPage;
