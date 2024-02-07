import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WorkIcon from "@mui/icons-material/Work";
import AppsIcon from "@mui/icons-material/Apps";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from '@mui/material/styles';
// import theme from './yourThemeFile'; // Import your theme file

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  window.addEventListener("scroll",function(){
    const header=document.querySelector(".header")
    header.classList.toggle("active",window.screenY>200)
  })

  return (
    // <ThemeProvider theme={theme}>
      <div>
        <header className="header">
          <div className="container flex">
            <div className="logo">
              <h2>Logo</h2>
            </div>
            <div className="nav">
              <ul
                className={sidebar ? "nav-links-sidebar" : "nav-links"}
                onClick={() => setSidebar(false)}
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/pages">Pages</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="icon">
                  <SearchOutlinedIcon className="HeaderIcon" />
                </li>
                <li className="icon">
                  <WorkIcon className="HeaderIcon" />
                </li>
                <li className="icon">
                  <AppsIcon className="HeaderIcon" />
                </li>
              </ul>
            </div>
            <button
              className="navbar-items-icon"
              onClick={() => setSidebar(!sidebar)}
            >{sidebar ? <CloseIcon/>:<MenuIcon/>}
              {/* Your button content */}
            </button>
          </div>
        </header>
      </div>
    // </ThemeProvider>
  );
};

export default Header;

