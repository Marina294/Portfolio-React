import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import { ImLinkedin, ImGithub } from 'react-icons/im';
// import Cv from '../../assets/images/w-catalog4.jpg';
// import Button from './Button';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  padding: 1rem 0;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--bg);
  ul {
    margin: 0 auto;
    max-width: 1200px;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
    }
    a {
      display: inline-block;
      padding: 1rem 2rem;
      outline: none;
      font-family: 'Urbanist';
      font-size: 1.7rem;
      color: var(--gray-1);
    }
    .active {
      color: var(--additional);
      font-weight: 600;
    }
  }
  .mobile-menu-icon {
    display: none;
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  .button {
    margin-top: 0;
    width: 13rem;
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 3.1rem;
    background-color: rgba(255, 255, 255, 0.5);
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
      margin: 0.5rem;
    }
    .navItems {
      --top: 1rem;
      position: absolute;
      transition: 0.3s ease transform;
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      right: 1rem;
      border-radius: 1rem;
      box-shadow: 0 8px 10px 0px rgba(150, 150, 150, 0.1);
      top: var(--top);
      background-color: var(--white);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles>
      <div className="container">
        <div
          className="mobile-menu-icon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdMenu />
        </div>
        <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
          <div
            className="closeNavIcon"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <MdClose />
          </div>
          <li>
            <NavLink
              to="/"
              exact
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/design"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              DESIGN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dev"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              DEV
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <div>
              <a
                className="sns-icon"
                href="https://www.linkedin.com/in/marina-yamamoto-558276128"
                target="_blank"
                rel="noreferrer"
              >
                <ImLinkedin style={{ fill: 'var(--additional)' }} />
              </a>
              <a
                className="sns-icon"
                href="https://github.com/Marina294"
                target="_blank"
                rel="noreferrer"
              >
                <ImGithub style={{ fill: 'var(--additional)' }} />
              </a>
              {/* <a className="nav-button" btnText="Download CV" href={Cv} outline>
                Test
              </a> */}
            </div>
          </li>
        </ul>
      </div>
    </NavStyles>
  );
}
