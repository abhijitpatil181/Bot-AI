import { useEffect } from "react";
import { ChatCard } from "../../components";
import NavBar from "../../components/navbar/NavBar";
import InitialchatPage from "./components/initial-page/InitialchatPage";
import UserInput from "./components/initial-page/initial-cards/UserInput";
import { Stack, Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { chat, setChat } = useOutletContext();

  useEffect(() => {
    setChat([]);
  }, []);

  return (
    <>
      <Stack justifyContent="space-between">
        <NavBar />
        {chat.length === 0 && <InitialchatPage />}
        {chat.length > 0 && (
          <Box
            sx={{
              overflowY: "scroll",
              height: "85vh",
              padding: "1rem 0",
            }}
          >
            <Stack margin={"0 1rem"} rowGap={2}>
              {chat.map((chatData) => (
                <ChatCard
                  chatData={chatData}
                  chatType="home"
                  key={chatData.id}
                />
              ))}
            </Stack>
          </Box>
        )}

        <UserInput />
      </Stack>
    </>
  );
};

export default Home;
