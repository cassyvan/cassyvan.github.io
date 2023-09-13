import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
  title?: string;
  name: string;
  icon?: any;
  link: string;
}

const Button = ({ name, title, icon, link }: props) => {
  return (
    <button
      title={title}
      className="rounded-full font-semibold bg-red-300 text-white dark:bg-sky-200 dark:text-sky-900 py-2 px-4 m-1 hover:scale-105"
    >
      <a href={link} target="_blank">
        {name}
      </a>
      <FontAwesomeIcon icon={icon} className="ml-1" />
    </button>
  );
};

export default Button;
