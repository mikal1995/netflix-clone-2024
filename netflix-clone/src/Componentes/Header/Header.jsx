import React from 'react'
import "./header.css"
import Netflixlogo from"../../assets/images/Netflix Logo.jpg"
 import SearchIcon from '@mui/icons-material/Search';
 import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
 import AccountBoxIcon from "@mui/icons-material/AccountBox";
 import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header() {
  return (
    <div className="header-outer-continer">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li>
              <img src={Netflixlogo} alt="Netflix Logo" width="100" />
            </li>
            <li>Netflix</li>
            <li>Home</li>
            <li>Tvshow</li>
            <li>Moves</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li></li>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header
