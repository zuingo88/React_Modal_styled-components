import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from './NavBar.style';

const NavBar = () => {
  return (
    <nav style={{ position: "absolute", zIndex: '999', fontSize: '20px' }}>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/ae1'>AppEva1</NavLink>
        </li>
        <li>
          <NavLink to='/ae2'>AppEva2</NavLink>
        </li>
        <li>
          <NavLink to='/ae3'>AppEva3</NavLink>
        </li>
        <li>
          <NavLink to='/aea1'>AppEvaAdm1</NavLink>
        </li>
        <li>
          <NavLink to='/aea2'>AppEvaAdm2</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/aaa'>AppAskAdm</NavLink>
        </li>
        <li>
          <NavLink to='/indeclaration'>InDeclaration</NavLink>
        </li>
        <li>
          <NavLink to='/inprospectusaccept'>InProspectusAccept</NavLink>
        </li>
      </ul>










    </nav>
  )
}

export default NavBar
