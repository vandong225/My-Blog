import React from 'react';

export type TNavItem = {
  label: string,
  link: string
}

type TProps = {
  navItem: TNavItem
}

const NavItem:React.FC<TProps> = ({ navItem }) => {
  return (
    <li className="nav-item bottom-bar">
      <a href={navItem.link}>{navItem.label}</a>
    </li>
  )
}

export default NavItem;
