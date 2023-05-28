import home from "./assets/img/home.png";
import trend from "./assets/img/trend.png";
import graph from "./assets/img/graph.png";
import recent from "./assets/img/recent.png";
import ToolTip from "./ToolTip";
const StickyNav = () => {
  return (
    
    <div className="sticky_nav">
      <ul className="nav-link">
      <ToolTip title="خانه">
        <li>
          <a href="#navbar">
            <img src={home} />
          </a>
        </li>
        </ToolTip>
        <ToolTip title="مقالات پراستناد">
        <li>
          <a href="#imp-articles">
            <img src={trend} />
          </a>
        </li>
        </ToolTip>
        <ToolTip title="آمار و ارقام">
        <li>
          <a href="#statistics">
            <img src={graph} />
          </a>
        </li>
        </ToolTip>
        <ToolTip title="مقالات اخیر">
        <li>
          <a href="#rec-articles">
            <img src={recent} />
          </a>
        </li>
        </ToolTip>
      </ul>
    </div>
  );
};
export default StickyNav;
