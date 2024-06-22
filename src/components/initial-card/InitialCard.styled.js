import { styled, Box, Typography } from "@mui/material";

export const InitialCardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
  padding: "0.5rem",
  borderRadius: "5px",
  height: "6rem",
}));

export const InitialCardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.h1.fontFamily,
  fontWeight: theme.typography.h1.fontWeight,
  fontSize: "20px",
  lineHeight: "23px",
  color: "#000000",
}));

export const InitialCardContent = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.h1.body1,
  fontWeight: theme.typography.h1.body1,
  fontSize: "16px",
  lineHeight: "21.8px",
  color: "#00000080",
}));
