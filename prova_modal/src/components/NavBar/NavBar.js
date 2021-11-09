import React from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import {
  NavLink,
  Navbar,
  Logo,
  NavList,
  NavItem
} from './NavBar.style';

const NavBar = () => {
  return (
    <Navbar style={{ fontSize: '20px' }}>
      <NavLink to='/'>
        <Logo src={logo} alt="logo" />
      </NavLink>

      <NavList>
        <NavItem>
          <NavLink to='/ae1'>AppEva1</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/ae2'>AppEva2</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/ae3'>AppEva3</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/aea1'>AppEvaAdm1</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/aea2'>AppEvaAdm2</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/login'>Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/aaa'>AppAskAdm</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/indeclaration'>InDeclaration</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/inprospectusaccept'>InProspectusAccept</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/ininvest2'>InInvest2</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/ininvest6'>InInvest6</NavLink>
        </NavItem>
      </NavList>
    </Navbar>
  )
}

export default NavBar
