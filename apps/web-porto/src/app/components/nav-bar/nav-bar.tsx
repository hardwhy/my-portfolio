import { useCallback, useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../../utils/capitalize-first-letter';
import nav1 from '../../assets/images/nav-icon1.svg';
import nav2 from '../../assets/images/nav-icon2.svg';
import nav3 from '../../assets/images/nav-icon3.svg';
import logo from '../../assets/images/logo.svg';
import Image from 'next/image';
import './nav-bar.css';
import { navIcons } from '../../assets';

enum NavBarLink {
  HOME = 'home',
  SKILLS = 'skills',
  PROJECTS = 'projects',
}

const MyNavBar = () => {
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
    <Navbar expand="lg" className={scrolled ? 'scrolled' : undefined}>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {Object.values(NavBarLink).map((v) => {
              const isActive = activeLink === v;
              let className = 'navbar-link';
              if (isActive) className = 'active ' + className;
              return (
                <Nav.Link
                  key={v}
                  className={className}
                  href={`#${v}`}
                  onClick={() => setActiveLink(v)}
                >
                  {capitalizeFirstLetter(v)}
                </Nav.Link>
              );
            })}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              {navIcons.map((icon) => (
                <a key={icon} href="#">
                  <Image src={icon} alt="" />
                </a>
              ))}
            </div>
            <button
              className="vvd"
              onClick={() => {
                console.log('tapped');
              }}
            >
              <span>Let&apos;s Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
