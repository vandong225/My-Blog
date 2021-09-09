import React from 'react';

type TProps = {

}

const index:React.FC<TProps> = () => {
  return (
    <div className="header-icons">
      <a href="#" className="header-icons-item bottom-bar">Sign in</a>
      <a href="#" className="header-icons-item btn">Sign up</a>
      <div className="header-icons-item">o</div>
      <div className="header-icons-item">o</div>
    </div>
  )
}

export default index;
