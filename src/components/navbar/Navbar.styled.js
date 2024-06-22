import { styled, Typography } from "@mui/material";

export const NavbarTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: "2.1rem",
  fontWeight: 700,
  fontSize: "1.75rem",
  marginLeft: "2rem",
}));
