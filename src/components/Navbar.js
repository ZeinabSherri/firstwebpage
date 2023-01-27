import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppBar from '@mui/material/AppBar';
import { Typography } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const NavigationContainer = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: primary;
    position="static";
`;
const LinksContainer = createTheme();

LinksContainer.typography.h3 = { fontSize: '1.2rem', '@media (min-width:600px)': {    fontSize: '1.5rem',  },
 [LinksContainer.breakpoints.up('md')]: {   fontSize: '2rem' },  vertical: 'bottom',  horizontal: 'left', my: 2, color: 'white', display: 'block' };

export default function Navbar() {
    return (
        <AppBar position="static">
              <Container maxWidth="xl">
              <Toolbar disableGutters>
        <NavigationContainer>
            <Link to="/">
                <h1>Logo</h1>
            </Link>
            <ThemeProvider theme={LinksContainer}>    
              <Typography variant="h3">
                <Link to="/Users.js"    sx={{ my: 2, color: 'white', display: 'block' }}>Users</Link>
                <Link to="/Notes.js"   sx={{ my: 2, color: 'white', display: 'block' }}>Notes</Link>
                </Typography>
            </ThemeProvider>
        </NavigationContainer>
        </Toolbar>
        </Container>
        </AppBar>
    );
}
