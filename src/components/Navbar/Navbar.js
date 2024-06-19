import "./Navbar.css"
import SearchIcon from "./‭icons/search-icon (2).png"
import DarkTheme from "./‭icons/night-mode (1).png"
import LightTheme from "./‭icons/light1.png"

import {Limk, Link} from "react-router-dom";
function Navbar({theme}) {

  // const THEME_ICON =
  // {
  //   "dark":DarkTheme,
  //   "light":LightTheme
  // }
  return (
    <div className="navbar-container">
      <span className=" logo"> KISAN TRADERS</span> 
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/About" className="navbar-link">About</Link>
        <Link to="/Contact" className="navbar-link">Contact us</Link>
        <Link to="/Product" className="navbar-link">Products</Link>
        <Link to="/Blog" className="navbar-link">Blog</Link>
       
        {/* <img className="theme-switcher dark" src={DarkTheme}/>
        <img className="theme-switcher light"src={LightTheme}/> */}
       
       
       
        <div  className="seachbar-container">
        <input type="text" placeholder="Search" className="textbox"></input>
        <img className="search-icon" src={SearchIcon} />
        </div>
    </div>
  )
}
export default Navbar