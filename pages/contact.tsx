import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faHandPointDown,
  faEnvelope,
  faEnvelopeOpen,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="flex-col h-[40rem] pt-12">
      <div className="flex justify-center ">
        <h1>
          Contact <FontAwesomeIcon icon={faMessage} className="text-blue-400" />
        </h1>
      </div>
      <div className="flex justify-center py-12">
        <h3>
          Say hello!{" "}
          <FontAwesomeIcon icon={faHandPointDown} className="animate-bounce" />
        </h3>
      </div>
      <div className="flex justify-center pt-8 pb-16 gap-10 text-xl">
        <div className="group flex">
          <div className="hidden group-hover:block">
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </div>
          <div className="group-hover:hidden">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="group-hover:text-red-300 dark:group-hover:text-sky-200 pl-2">
            <Link href={"mailto:cassy.van1@gmail.com"}>
              cassy.van1@gmail.com
            </Link>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faLocationDot} className="pr-2 text-red-600" />
          Alberta, Canada
        </div>
      </div>
      <span className="flex justify-center items-center pt-16">
        I can also be found at:
        <a href="https://www.linkedin.com/in/cassy-van" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="px-2 fa-2x hover:text-red-300 dark:hover:text-sky-200"
          />
        </a>
        <a href="https://github.com/cassyvan" target="_blank ">
          <FontAwesomeIcon
            icon={faGithub}
            className="pl-2 fa-2x hover:text-red-300 dark:hover:text-sky-200"
          />
        </a>
      </span>
    </div>
  );
};

export default ContactPage;
