import React from 'react';
import './Portfolio.css';
import Card from './Card';
import data from './PortfolioData';

const Portfolio = () => {
  return (
    <>
      <section className="Portfolio top" id="portfolio">
        <div className="container">
          <div className="heading text-center ">
            <h4>Explore My Portfolio and Share Your Insights</h4>
            <h1>My Portfolio</h1>
          </div>

          <div className="content grid">
            {data.map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  icon={value.icon}
                  category={value.category}
                  title={value.title}
                  description={value.description}
                  link={value.ref}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
