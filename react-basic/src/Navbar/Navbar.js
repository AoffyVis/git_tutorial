import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

function Navbar() {
  return <header className="Navbar">
            <FacebookRoundedIcon className='header__icon'/>
            <div className='user__area'>
              <div className='user__section'>
                <AccountCircleIcon />
                <span>Username</span>
              </div>
              <SettingsIcon className='settingIcon'/>
            </div>
          </header>;
}

export default Navbar;
