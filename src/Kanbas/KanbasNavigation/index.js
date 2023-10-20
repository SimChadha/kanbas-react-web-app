import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook, FaClock, FaEnvelope, FaDesktop, FaCreativeCommons, FaQuestionCircle } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const linksToIconsMap = {
    Account: <MdOutlineAccountCircle className="fs-1 text" />,
    Dashboard: <RiDashboard3Line className="fs-1 text" />,
    Courses: <FaBook className="fs-1 text" />,
    Calendar: <BsCalendar2Week className="fs-1 text" />,
    Inbox: <FaEnvelope className="fs-1 text" />,
    History: <FaClock className="fs-1 text" />,
    Studio: <FaDesktop className="fs-1 text" />,
    Commons: <FaCreativeCommons className="fs-1 text white" />,
    Help: <FaQuestionCircle className="fs-1 text" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navigation list-group" style={{ width: 150 }}>
      <Link to={`Kanbas/Dahboard`}>
        <img src="/images/northeastern_logo.png" alt="NortheasternLogo" width="100%" height="100%" />
      </Link>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item text-center p-4 ${pathname.includes(link) && "active"
            }`}
        >
          {linksToIconsMap[link]}
          <br />
          <div className="white-color">
            {link}
          </div>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
