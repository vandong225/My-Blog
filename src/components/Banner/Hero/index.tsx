import React, { useEffect } from 'react';
import { WritingHero } from './helper';

type TProps = {

}

const index:React.FC<TProps> = () => {

  useEffect(() => {
     new WritingHero();
  })
  return (
    <div className="banner-hero">
      <h1>Hi, I am VanDong</h1>
      <span className="banner-hero-cursor"></span>
      <p>An developer nodejs and reactjs. On this site I write about my learning and experience.</p>
    </div>
  )
}

export default index;
