import * as React from 'react';
import "./NavBar.css"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'; 

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
if (value === 0){
  navigate("/")
}
else if (value === 1){
  navigate("/trending")
}
else if (value === 2){
  navigate("/movies")
}
else if (value === 3){
  navigate("/tvseries")
}
else if (value === 4){
  navigate("/search")
}
  }, [value, navigate]) 

  return (
    
      <BottomNavigation
        showLabels
        class="bottom-nav"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{ color: "beige", background: "black"  }} label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction style={{ color: "beige", background: "black"  }} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{ color: "beige", background: "black"  }} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{ color: "beige", background: "black"  }} label="Tv Series" icon={<TvIcon />} />
        <BottomNavigationAction style={{ color: "beige", background: "black"  }}  label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
   
  );
}