import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navitems = [
    {
      path: "/",
      name: "Home",
      icon: <HomeIcon />
    },
    {
      path: "/trending",
      name: "Most Popular",
      icon: <WhatshotIcon />
    },
    {
      path: "/movies",
      name: "Movies",
      icon: <MovieIcon />
    },
    {
      path: "/tvseries",
      name: "Tv Shows",
      icon: <TvIcon />
    },
    {
      path: "/search",
      name: "Search",
      icon: <SearchIcon />
    },
  ];





  return (
    <div className="container">
      <div className="sidebar">
        <div className="bars">
          <MenuIcon onClick={toggle} />
        </div>
        {
          navitems.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassname="active">
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>


          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;