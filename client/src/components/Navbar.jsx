import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faHome, faUser, faMap, faMapPin } from "@fortawesome/free-solid-svg-icons";

const link = (icon, url, clickHandler = null, style = "") => (
  <li className={`text-white text-2xl ${style}`}>
    <Link to={url} onClick={clickHandler}>
      <FontAwesomeIcon icon={icon} />
    </Link>
  </li>
);

function Navbar() {
  const location = useLocation();

  return (
    <>
      <div className="h-24" />
      <nav className="fixed h-[3rem] w-screen bottom-0 bg-primary small-height:hidden">
        <ul className="flex items-center justify-evenly h-[3rem]">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="text-white" />
          </Link>
          <Link to="/map">
            <FontAwesomeIcon icon={faMap} className="text-white" />
          </Link>
          <Link
            to="/photo"
            className="bg-white text-3xl p-8 rounded-full border-[3px] border-primary
        border-solid"
          >
            <FontAwesomeIcon icon={faCameraRetro} className="text-primary" />
          </Link>
          <Link to="/list">
            <FontAwesomeIcon icon={faMapPin} className="text-white" />
          </Link>
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} className="text-white" />
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
