import { useState } from 'react';
import { NavBarLink } from './nav-bar-constants';
import './nav-bar-v2.css';
import { capitalizeFirstLetter } from '../../utils/capitalize-first-letter';

export const NavBarV2 = () => {
  const [activeLink, setActiveLink] = useState(NavBarLink.HOME);
  return (
    <header className="header">
      <a className="logo" href="#">
        Hardy.
      </a>
      <nav className="navbar">
        {Object.values(NavBarLink).map((v) => {
          const isActive = activeLink === v;
          let className;
          if (isActive) className = 'active ' + className;
          return (
            <a
              key={v}
              className={className}
              href={`#${v}`}
              onClick={() => setActiveLink(v)}
            >
              {capitalizeFirstLetter(v)}
            </a>
          );
        })}
      </nav>
    </header>
  );
};
