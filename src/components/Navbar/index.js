import React, {useEffect, useState} from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  OwnLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ handleIsOpen }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const handleScrollNav = () => {
   window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollNav)
  })

  // const handleScrollNav = () => {
  //   if(window.scrollY >= 80){
  //     setScrollNav(true)
  //   } else{
  //     setScrollNav(false)
  //   }
  // }


  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo to='/'>
            <OwnLogo src="../../oyo-logo2.png" alt="" />
          </NavLogo>
          <MobileIcon onClick={handleIsOpen}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
