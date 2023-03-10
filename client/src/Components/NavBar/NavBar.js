import * as React from 'react';
import "./NavBar.css";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, useLocation } from 'react-router-dom';


export default function NavBar() {

  const getLocationIndex = (location) => {
    if (location.pathname === '/') {
      return 0;
    }
    if (location.pathname === '/movies') {
      return 1;
    }
    if (location.pathname === '/tvseries') {
      return 2;
    }
    if (location.pathname === '/search') {
      return 3;
    }
    if (location.pathname === '/leaving') {
      return 4;
    }
  };

  const location = useLocation();

  const [value, setValue] = React.useState(getLocationIndex(location));
  const navigate = useNavigate();

  return (
    <BottomNavigation
      showLabels
      class="bottom-nav"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Home" style={{ color: "#FFFADE" }} onClick={() => navigate("/")} />
      {/* <BottomNavigationAction style={{ color: "beige", background: "black"  }} label="Most Popular" icon={<WhatshotIcon onClick={() => navigate("/trending")}/>} /> */}
      <BottomNavigationAction label="Movies" style={{ color: "#FFFADE" }} size="large" onClick={() => navigate("/movies")} />
      <BottomNavigationAction label="Tv Shows" style={{ color: "#FFFADE" }} onClick={() => navigate("/tvseries")} />
      <BottomNavigationAction label="Search" style={{ color: "#FFFADE" }} onClick={() => { navigate("/search"); setValue(3); }} />
      <BottomNavigationAction label="Leaving Soon" style={{ color: "#FFFADE" }} onClick={() => { navigate("/leaving"); setValue(4); }} />
    </BottomNavigation>
  );
}