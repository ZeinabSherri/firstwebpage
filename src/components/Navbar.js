import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;
const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;
export default function Navbar(){
  return (
    
      <NavigationContainer>
        <Link to="/">
          <h1>Logo</h1>
        </Link>
        <LinksContainer>
          <Link to="/Users.js">Users</Link>
          <Link to="/Notes.js">Notes</Link>
          </LinksContainer>
          </NavigationContainer>
     
  );
};