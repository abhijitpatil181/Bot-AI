import {
  IconButton,
  Typography,
  Box,
  Stack,
  Icon,
  Button,
} from "@mui/material";
import { BotSvg } from "../../assets";
import { AddIconSvg } from "../../assets";
import { useTheme } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  // const { chat, setChat } = useOutletContext();

  const chatOnClickHandler = (label) => {
    switch (label) {
      case "home":
        // setChat([]);
        navigate("/home");
        break;

      case "history":
        navigate("/history");
        break;

      default:
        console.log("no routes matched");
    }
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "15vw",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Stack>
          <Box
            sx={{
              width: "100%",
              minHeight: "3rem",
              backgroundColor: theme.palette.secondary.main,
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <img src={BotSvg} style={{ height: "2rem", width: "2.1rem" }} />
              <Typography sx={{ fontWeight: 700, fontSize: "20px" }}>
                New Chat
              </Typography>
              <IconButton onClick={() => chatOnClickHandler("home")}>
                <img
                  src={AddIconSvg}
                  style={{ height: "2rem", width: "2.1rem" }}
                />
              </IconButton>
            </Stack>
          </Box>
          <Button
            variant="contained"
            sx={{
              margin: "1rem 1.5vw",
              whiteSpace: "normal",
              wordBreak: "break-word",
            }}
            onClick={() => chatOnClickHandler("history")}
          >
            Past Conversations
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Sidebar;
