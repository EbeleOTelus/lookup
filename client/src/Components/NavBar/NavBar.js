import * as React from 'react';
import "./NavBar.css"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    
      <BottomNavigation
        showLabels
        className="bottom-nav"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{ color: "white", background: "black"  }} label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction style={{ color: "white", background: "black"  }} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{ color: "white", background: "black"  }} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{ color: "white", background: "black"  }} label="Tv Series" icon={<TvIcon />} />
        <BottomNavigationAction style={{ color: "white", background: "black"  }}  label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
   
  );
}