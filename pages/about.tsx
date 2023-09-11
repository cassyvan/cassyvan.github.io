import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutItem from "@/components/about/about-item";
import AboutItemReversed from "@/components/about/about-item-reverse";
import {
  getAboutDetails,
  getAboutIntro,
  getAboutOutro,
} from "@/helpers/aboutitems-utils";

const AboutPage = () => {
  const aboutIntro = getAboutIntro();
  const aboutDetails = getAboutDetails();
  const aboutOutro = getAboutOutro();

  return (
    <div className="flex justify-center items-end sm:flex sm:flex-col">
      <div className="max-w-4xl pr-12 sm:p-0">
        <h1 className="pb-8">
          About <FontAwesomeIcon icon={faAddressCard} />
        </h1>
        <div className="grid grid-cols-3 gap-12 sm:flex sm:flex-col">
          <AboutItem
            imageUrl={"/images/healthcare-tech.jpg"}
            content={aboutIntro}
            imageTitle={"healthcare-tech"}
          />
          <AboutItemReversed
            imageUrl={"/images/journey.jpg"}
            content={aboutDetails}
            imageTitle={""}
          />
          <AboutItem
            imageUrl={"/images/happy.jpg"}
            content={aboutOutro}
            imageTitle={"happyface"}
          />
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
