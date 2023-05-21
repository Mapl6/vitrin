import logo from "../assets/img/Logo.svg";
const NavBar = () => {
  return (<>
    <div className="navbar">
      <img className="logo" src={logo}/>
      <ul className="nav-link">
        <li>
          <a href="#navbar">خانه</a>
        </li>
        <li>
          <a href="#">یک درصد برتر</a>
        </li>
        <li>
          <a href="#imp-articles">مقالات پراستناد</a>
        </li>
        <li>
          <a href="#statistics">آمار و ارقام</a>
        </li>
        <li>
          <a href="#rec-articles">مقالات اخیر</a>
        </li>
      </ul>
      {/* <img src={logo} /> */}
    </div>
    </>
  );
};
export default NavBar;
