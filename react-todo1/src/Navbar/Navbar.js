import './Navbar.css';
import CodeIcon from '@mui/icons-material/Code';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function Navbar() {

const [click, setClick] = useState(false)

  return (
        <nav className="nav">
           <div className="container">
                <div className="logo">
                    <a href='#header'><CodeIcon/> Jirawat K.</a>
                </div>
                <div id={click ? "mainListDiv" : "mobile-menu"} className="main_list">
                    <ul className="navlinks">
                        <li><a href="#header">Home</a></li>
                        <li><a href="#aboutMe">About</a></li>
                        <li><a href="#skillsContainer">Skills</a></li>
                        <li><a href="#projectContainer">Projects</a></li>
                        <li><a href="#FooterContainer">Contact</a></li>
                    </ul>
                </div>
                <div className='mobile-menu'>
                    <div onClick={() => setClick(!click)}>
                        {!click ? (<MenuIcon/>) : (<CloseIcon/>) }
                    </div>
                </div>
            </div>
        </nav>
  );
}

export default Navbar;
