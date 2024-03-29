import React from 'react';
import './Header.css';
import data from '../../assets/resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    header.classList.toggle('active', window.scrollY > 120);
  });

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          &lt;Bujosa /&gt;
          <div className="navlink">
            <ul className={'link f_flex uppercase'}>
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#features">features</a>
              </li>
              <li>
                <a href="#resume">resume</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <a href={data} download>
                  <FontAwesomeIcon icon={faDownload} /> CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
