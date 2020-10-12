import React from 'react';
import '../styles/Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/Help";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">

      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="search..." type="Text" />


      </div>
      <div className="header__right">
        {/* Help Icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  )
}

export default Header
