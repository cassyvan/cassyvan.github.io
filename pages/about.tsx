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
    <div className="flex justify-center ml-32 items-center sm:flex sm:flex-col sm:mx-4">
      <div className="max-w-6xl sm:shadow-md">
        <h1 className="pb-6 mt-6 underline sm:mt-8">
          About
          <FontAwesomeIcon
            icon={faAddressCard}
            className="text-red-300 dark:text-sky-300 pl-6"
          />
        </h1>
        <div className="grid grid-cols-3 gap-12 sm:flex sm:flex-col relative sm:gap-0">
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
        <div className="pt-8 sm:pt-6 pb-16 sm:text-center">
          <h3 className="block bg-red-300 dark:bg-sky-200 inset-1 skew-y-2 relative inline-block">
            Resume.pdf
          </h3>
        </div>
      </div>
      <div className="flex relative self-end mb-16 origin-top-left rotate-45 sm:hidden">
        <FontAwesomeIcon
          icon={faFish}
          className="fa-9x opacity-30 animate-fish"
        />
      </div>
    </div>
  );
};

export default AboutPage;
