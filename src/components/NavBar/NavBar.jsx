import SearchBar from "../SearchBar/SearchBar"
import style from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";
const NavBar = ({onSearch}) => {
  
  return(

    <div className={style.nav}>
      <SearchBar onSearch={onSearch} />
      <Link to='/home'>
      <button className={style.homebtn}>Home</button></Link>
      <NavLink to='/about'>
        <button className={style.aboutbtn }>About</button>
        </NavLink>
        <NavLink to='/favorites'>
        <button className={style.favbtn }>Favorites</button>
        </NavLink>
    </div>
  )
}

export default NavBar;