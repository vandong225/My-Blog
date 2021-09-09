/* eslint-disable no-new */
import React, { useEffect } from 'react';
import { WritingHero } from './helper';
import Skills from './Skills';

const Index: React.FC = () => {
  useEffect(() => {
    new WritingHero();
  });
  return (
    <div className="banner-hero">
      <h1>Hi, I am VanDong</h1>
      <p className="banner-hero-cursor" />
      <p>An developer nodejs and reactjs. On this site I write about my learning and experience.</p>
      <Skills imgs={[
        './assets/nodejs.png',
        './assets/nextjs.png',
        './assets/reactjs.png',
        './assets/mongodb.png',
      ]}
      />
    </div>
  );
};

export default Index;
