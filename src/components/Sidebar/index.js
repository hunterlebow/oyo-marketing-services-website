import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements';

const Sidebar = ({ isOpen, handleIsOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={handleIsOpen}>
      <Icon onClick={handleIsOpen}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={handleIsOpen}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={handleIsOpen}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={handleIsOpen}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={handleIsOpen}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign Up</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
