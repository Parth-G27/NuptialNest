"use client";
import { styled } from '@mui/material';
import Link from 'next/link';

const StyledLink = styled('a')`
  color: #FFFFFF;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
`;

const Tabs = ({ href, children }) => (
  <Link href={href} passHref>
    <StyledLink>{children}</StyledLink>
  </Link>
);

const ClientSideNav = () => {
  return (
    <>
      <Tabs href="/">Nuptial Nest</Tabs>
      <Tabs href="/all-reviews">All Reviews</Tabs>
      <Tabs href="/add-reviews">Add Review</Tabs>
    </>
  );
};

export default ClientSideNav;