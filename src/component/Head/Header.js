import React, { useState } from 'react';
import './header.css';

const Header = () => {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    header.classList.toggle('active', window.scrollY > 120);
  });

  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          &lt;Bujosa /&gt;
          <div className="navlink">
            <ul
              className={Mobile ? 'nav-links-mobile' : 'link f_flex uppercase'}
              onClick={() => setMobile(false)}>
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#features">features</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#resume">resume</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
