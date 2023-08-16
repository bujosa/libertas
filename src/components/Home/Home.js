import React from 'react';
import './Home.css';
import hero from '../../assets/hero.png';
import skill1 from '../../assets/skill1.png';
import skill2 from '../../assets/skill2.png';
import skill3 from '../../assets/skill3.png';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>David Bujosa</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[' Professional Coder.', ' Software Engineer.']}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              Passionate Software Engineer with extensive experience in
              microservices development, monolithic architecture migration, and
              database optimization. Ethereum Certified and proficient in
              NestJS, Rust and Go.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <a href="https://www.linkedin.com/in/davidbujosa/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a href="https://www.github.com/bujosa">
                      <i className="fab fa-github"></i>
                    </a>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow">
                  <img src={skill1} alt="NestJS TypeScript NodeJS" />
                </button>
                <button className="btn_shadow">
                  <img src={skill2} alt="Golang" />
                </button>
                <button className="btn_shadow">
                  <img src={skill3} alt="Rustlang" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
