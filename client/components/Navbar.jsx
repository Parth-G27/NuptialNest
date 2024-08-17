"use client";

import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, useScrollTrigger, Slide } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(90deg, #1971FF 0%, #00a3ff 100%)',
  boxShadow: '0 4px 20px rgba(0, 98, 255, 0.2)',
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem 2rem',
});

const LogoTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.8rem',
  background: 'linear-gradient(45deg, #FFFFFF 30%, #E0F7FA 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
}));

const NavLinksContainer = styled(Box)({
  display: 'flex',
  gap: '1rem',
});

const StyledNavLink = styled(Button)(({ theme, active }) => ({
  color: '#FFFFFF',
  fontSize: '1rem',
  fontWeight: 'bold',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: '#FFFFFF',
    transform: active ? 'scaleX(1)' : 'scaleX(0)',
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover::after': {
    transform: 'scaleX(1)',
  },
}));

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavBar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'All Reviews', href: '/all-reviews' },
    { name: 'Add Review', href: '/add-reviews' },
  ];

  return (
    <HideOnScroll>
      <StyledAppBar position="sticky">
        <StyledToolbar>
          <LogoTypography variant="h1">
            Nuptial Nest
          </LogoTypography>
          <NavLinksContainer>
            {navLinks.map((link) => (
              <Link href={link.href} key={link.name} passHref legacyBehavior>
                <StyledNavLink
                  component="a"
                  active={pathname === link.href}
                >
                  {link.name}
                </StyledNavLink>
              </Link>
            ))}
          </NavLinksContainer>
        </StyledToolbar>
      </StyledAppBar>
    </HideOnScroll>
  );
};

export default NavBar;