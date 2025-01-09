// import React, { useState } from "react";
// import "./../styles/Header.css";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="header-left">
//         <img
//           src="/images/logo.jpeg"
//           alt="TravUnited Logo"
//           className="header-logo"
//         />
//         <p className="header-subtitle">LIVE LOVE EXPLORE</p>
//       </div>

//       <button className="menu-toggle" onClick={toggleMenu}>
//         <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
//       </button>

//       <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
//         <a href="#flights" className="nav-link" onClick={toggleMenu}>
//           FLIGHTS
//         </a>
//         <a href="#visa" className="nav-link" onClick={toggleMenu}>
//           VISA
//         </a>
//         <a href="#hotels" className="nav-link" onClick={toggleMenu}>
//           HOTELS
//         </a>
//         <a href="#holidays" className="nav-link" onClick={toggleMenu}>
//           HOLIDAYS
//         </a>
//       </nav>

//       <div className="header-right">
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//           <i className="social-icon fab fa-instagram"></i>
//         </a>
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//           <i className="social-icon fab fa-facebook-f"></i>
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//           <i className="social-icon fab fa-twitter"></i>
//         </a>
//         <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
//           <i className="social-icon fab fa-youtube"></i>
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { Menu as MenuIcon, Flight, Hotel, Assignment, BeachAccess } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false); // State to control drawer
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mobile Drawer Content
  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        <ListItem>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            TravUnited
          </Typography>
        </ListItem>
        <Divider />
        <ListItemButton >
          <Assignment style={{ marginRight: "8px"}} />
          <ListItemText primary="Visa" />
        </ListItemButton>
        <ListItemButton>
          <Flight style={{ marginRight: "8px" }} />
          <ListItemText primary="Flights" />
        </ListItemButton>
        <ListItemButton>
          <Hotel style={{ marginRight: "8px" }} />
          <ListItemText primary="Hotels" />
        </ListItemButton>
        <ListItemButton>
          <BeachAccess style={{ marginRight: "8px" }} />
          <ListItemText primary="Holiday" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Packages" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Contact" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Help" />
        </ListItemButton>
      </List>
      <Divider />
      {/* <Box sx={{ padding: "8px 16px" }}>
        <Button color="inherit" fullWidth>
          Sign Up
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          fullWidth
          style={{ marginTop: "8px", border: "1px solid #ff7043" }}
        >
          Log In
        </Button>
      </Box> */}
    </Box>
  );

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#ff7043" }}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo Section */}
          <Box display="flex" alignItems="center">
            <img
              src="/images/logo.jpeg" // Replace with your logo
              alt="Logo"
              style={{ height: "40px", marginRight: "8px", borderRadius: "25px" }}
            />
            {!isMobile && (
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                TravUnited
              </Typography>
            )}
          </Box>

          {/* Navigation Section */}
          {!isMobile && (
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
              <Button color="inherit" startIcon={<Assignment />} style={{backgroundColor:"#ff7043",color:"white"}}>
                Visa
              </Button>
              <Button color="inherit" startIcon={<Flight />} style={{backgroundColor:"#ff7043",color:"white"}}>
                Flights
              </Button>
              <Button color="inherit" startIcon={<Hotel />} style={{backgroundColor:"#ff7043",color:"white"}}>
                Hotels
              </Button>
              <Button color="inherit" startIcon={<BeachAccess />} style={{backgroundColor:"#ff7043",color:"white"}}>
                Holiday
              </Button>
              <Button color="inherit" style={{backgroundColor:"#ff7043",color:"white"}}>Contact</Button>
              <Button color="inherit" style={{backgroundColor:"#ff7043",color:"white"}}>Help</Button>
              {/* <Button color="inherit">Sign Up</Button> */}
              {/* <Button
                variant="outlined"
                color="inherit"
                style={{ border: "1px solid white", borderRadius: "20px" }}
              >
                Log In
              </Button> */}
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton color="inherit" edge="end" onClick={handleDrawerToggle} style={{backgroundColor:"#ff7043",color:"white"}}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>

      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
