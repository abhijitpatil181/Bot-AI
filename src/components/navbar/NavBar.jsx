import { NavbarTitle } from "./Navbar.styled";
import { Box } from "@mui/material";

const NavBar = () => {
  return (
    <>
      <Box sx={{ minHeight: "3rem", display: "flex", alignItems: "center" }}>
        <NavbarTitle>Bot AI</NavbarTitle>
      </Box>
    </>
  );
};

export default NavBar;
