import { getNavLinks } from "@/helpers/navlinks";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileNav = ({ isOpen, toggleMenu }: props) => {
  const navLinks = getNavLinks();

  return (
    <div
      className={`h-full w-full fixed transform duration-300 ease-in-out translate-x-0 ${
        isOpen ? "animate-openMenu" : "animate-closeMenu"
      } ${isOpen ? "" : "hidden"}`}
    >
      <span>
        <FontAwesomeIcon icon={faXmark} onClick={toggleMenu} />
      </span>
      <ul>
        {navLinks.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
