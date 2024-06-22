import TextareaAutosize from "@mui/material/TextareaAutosize";
import { styled } from "@mui/system";
import { useState } from "react";

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Textarea = styled(TextareaAutosize)(
  ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    height:100%;
    font-family: 'Ubuntu, "Open Sans";
    font-size:1rem;
    font-weight: 400;
    line-height: 1.5rem;
    font-size:20px;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };



    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

export default function TextArea({ feedBack, setFeedBack }) {
  return (
    <Textarea
      aria-label="minimum height"
      value={feedBack}
      onChange={(e) => setFeedBack(e.target.value)}
      minRows={7}
    />
  );
}
