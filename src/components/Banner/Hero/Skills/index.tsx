import React from 'react';
import Skill from './Skill';

type TProps = {
  imgs: string[]
}

const Index:React.FC<TProps> = ({ imgs }) => {
  return (
    <div className="banner-hero-skills">
      {
        imgs.map((img) => <Skill key={img} img={img} />)
      }
    </div>
  );
};

export default Index;
