import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  OwnLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              {/* use an a tag to link off from the website */}
              <FooterLink to="/singin">How it works</FooterLink>
              <FooterLink to="/singin">Testimonials</FooterLink>
              <FooterLink to="/singin">Careers</FooterLink>
              <FooterLink to="/singin">Investors</FooterLink>
              <FooterLink to="/singin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              {/* use an a tag to link off from the website */}
              <FooterLink to="/singin">How it works</FooterLink>
              <FooterLink to="/singin">Testimonials</FooterLink>
              <FooterLink to="/singin">Careers</FooterLink>
              <FooterLink to="/singin">Investors</FooterLink>
              <FooterLink to="/singin">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              {/* use an a tag to link off from the website */}
              <FooterLink to="/singin">How it works</FooterLink>
              <FooterLink to="/singin">Testimonials</FooterLink>
              <FooterLink to="/singin">Careers</FooterLink>
              <FooterLink to="/singin">Investors</FooterLink>
              <FooterLink to="/singin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              {/* use an a tag to link off from the website */}
              <FooterLink to="/singin">Instagram</FooterLink>
              <FooterLink to="/singin">Facebook</FooterLink>
              <FooterLink to="/singin">Youtube</FooterLink>
              <FooterLink to="/singin">Twitter</FooterLink>
              <FooterLink to="/singin">Snapchat</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <OwnLogo src="../../oyo-logo2.png" alt="" />
            </SocialLogo>
            <WebsiteRights>
              oyo ©{new Date().getFullYear}
              All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com/ownyourownilm"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
