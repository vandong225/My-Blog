import React from 'react';
import Hero from './Hero';
type TProps = {

}

const index:React.FC<TProps> = () => {
  return (
    <section className="banner">
      <Hero/>
    </section>
  )
}

export default index;
