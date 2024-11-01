import { useCallback, useEffect, useState } from 'react';
import { NavBarLink } from './nav-bar-constants';
import './nav-bar-v2.css';
import { capitalizeFirstLetter } from '../../utils/capitalize-first-letter';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(NavBarLink.HOME);
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <header className={`header ${scrolled || isMenuOpen ? 'dimmed' : ''}`}>
      <a className="logo" href="#">
        Hardy.
      </a>
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        {Object.values(NavBarLink).map((v, index) => {
          const isActive = activeLink === v;
          let className;
          if (isActive) className = 'active';
          return (
            <a
              key={v}
              style={{ '--i': index } as React.CSSProperties}
              className={className}
              href={`#${v}`}
              onClick={() => {
                setActiveLink(v);
                setIsMenuOpen(false); // Close menu on link click
              }}
            >
              {capitalizeFirstLetter(v)}
            </a>
          );
        })}
      </nav>
    </header>
  );
};
