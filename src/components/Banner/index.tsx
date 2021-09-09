import React from 'react';
import Avatar from './Avatar';
import Hero from './Hero';

const index: React.FC = () => {
  return (
    <section className="banner">
      <Hero />
      <Avatar />
    </section>
  );
};

export default index;
