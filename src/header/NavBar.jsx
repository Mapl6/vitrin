import logo from "../assets/img/Logo.svg"
const NavBar = () => {
  return (
    <div className="navbar">
        <ul className="nav-link">
            <li>خانه</li>
            <li>یک درصد برتر</li>
            <li>مقلات برتر</li>
            <li>کلید واژه های تخصصی</li>
            
        </ul>
        <img src={logo} />
    </div>
  )
}
export default NavBar