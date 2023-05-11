import logo from "../assets/img/Logo.svg"
const NavBar = () => {
  return (
    <div className="navbar">
        <ul className="nav-link">
            <li>خانه</li>
            <li>یک درصد برتر</li>
            <li>مقالات پراستناد</li>
            <li>آمار و ارقام</li>
            <li>مقالات اخیر</li>
            
        </ul>
        <img src={logo} />
    </div>
  )
}
export default NavBar