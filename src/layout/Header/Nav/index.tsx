import React from 'react';
import NavItem, { TNavItem } from './NavItem';

type TProps = {
  navItems: TNavItem[]
}

const Nav:React.FC<TProps> = ({ navItems }) => {
  return (
    <ul className="header-nav">
      {
        navItems.map((nav) => <NavItem key={nav.label} navItem={nav}/>)
      }
    </ul>
  )
}

export default Nav;
