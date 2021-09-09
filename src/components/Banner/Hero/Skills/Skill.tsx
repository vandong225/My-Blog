import React from 'react';

type TProps = {
  img: string
}

const Skill:React.FC<TProps> = ({ img }) => {
  return (
    <div className="banner-hero-skills-item">
      <img src={img} alt="" />
    </div>
  );
};

export default Skill;
