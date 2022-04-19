import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/" data-testid="main-link">main</Link>
      <Link to="/simple-main-page" data-testid="simple-main-link">simple main</Link>
      <Link to="/about" data-testid="about-link">about</Link>
      <Link to="/users" data-testid="users-link">users</Link>
    </>
  );
};

export default Navbar;
