import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../context/context';
import {
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogoutBtn
} from './NavbarStyles';

const Navbar = () => {

  const {user, setUser} = useContext(UserContext);
  const userToken = localStorage.getItem('token');

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser("");
    navigate("/");
  }

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
        </NavMenu>
        <NavBtn>
          {user || userToken ? <NavLogoutBtn onClick={handleLogout}>Log out</NavLogoutBtn> : <><NavBtnLink to='/'>Sign In</NavBtnLink>
          <NavBtnLink to='/signUp'>Sign up</NavBtnLink>
          </> }
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;