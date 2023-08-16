import Reac, { useState } from 'react';

const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className={`box btn_shadow ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <img
          src={isHovered ? props.image + '&color=FFFFFF' : props.image}
          alt=""
        />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </>
  );
};

export default Card;
