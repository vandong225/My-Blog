import React from 'react';
import Icons from './Icons';
import Nav from './Nav';
import { TNavItem } from './Nav/NavItem';

type TProps = {

}

const Header:React.FC<TProps> = () => {

  const navList: TNavItem[] = [{
    label: 'Home',
    link: '#'
  },
  {
    label: 'Features',
    link: '#'
  },
  {
    label: 'Element',
    link: '#'
  }]
  return (
    <div className="header">
      <div className="logo">
        VAN DONG
      </div>
      <Nav navItems={navList} />
      <Icons/>
    </div>
  )
}

export default Header;
