import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from './NavBar.style';

const NavBar = () => {
  return (
    <nav style={{ position: "absolute", zIndex: '999', fontSize: '20px' }}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/ae2'>AppEva2</NavLink>
      <NavLink to='/ae3'>AppEva3</NavLink>
      <NavLink to='/aea1'>AppEvaAdm1</NavLink>
      <NavLink to='/aea2'>AppEvaAdm2</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/aaa'>AppAskAdm</NavLink>
      <NavLink to='/indeclaration'>InDeclaration</NavLink>
      <NavLink to='/inprospectusaccept'>InProspectusAccept</NavLink>

    </nav>
  )
}

export default NavBar
