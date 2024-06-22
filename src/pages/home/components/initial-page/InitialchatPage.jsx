import { Typography, Box, Stack } from "@mui/material";
import InitialCards from "./initial-cards/InitialCards";
import { BotAiSvg } from "../../../../assets";

const InitialchatPage = () => {
  return (
    <>
      <Box
        sx={{
          overflowY: "scroll",
          height: "85vh",
          padding: "1rem 0",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "1.5rem",
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            How Can I Help You ?
          </Typography>
          <img src={BotAiSvg} />
        </Box>
        <InitialCards />
      </Box>
    </>
  );
};

export default InitialchatPage;
