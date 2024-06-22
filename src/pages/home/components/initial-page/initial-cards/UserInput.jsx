import { TextField, Button, Typography, Stack, Box } from "@mui/material";
import { useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { jsonData } from "../../../../../mocks/chat.mocks";
import { toast } from "react-toastify";

const UserInput = () => {
  const [value, setValue] = useState("");
  const { chat, setChat } = useOutletContext();

  const generateResponse = (e, value) => {
    let response =
      "Thank you for your question! Unfortunately, I don't have the answer to that right now.  Is there anything else I can help you with?";
    if (value) {
      jsonData.forEach((data) => {
        console.log(
          data.question.trim().toLowerCase() === `${value.trim().toLowerCase()}`
        );
        if (
          data.question.trim().toLowerCase() === `${value.trim().toLowerCase()}`
        ) {
          response = data.response;
        }
      });
      let chatId = uuidv4();
      setChat((prevChat) => [
        ...prevChat,
        {
          id: uuidv4(),
          type: "Human",
          response: value,
          date: new Date(),
          chatId,
        },
        {
          id: uuidv4(),
          type: "AI",
          response,
          date: new Date(),
          rating: 0,
          feedback: "",
          chatId,
        },
      ]);
      setValue("");
    } else {
      //add toast
    }
  };

  const saveChat = () => {
    let data = JSON.parse(localStorage.getItem("chatData"));

    let newData = [...data, ...chat];

    localStorage.setItem("chatData", JSON.stringify(newData));
    setChat([]);
    debugger;
    toast.success("Chats have been saved");
  };

  return (
    <>
      <Box>
        <Stack
          flexDirection="row"
          width="100%"
          padding="1rem 1rem"
          columnGap={2}
        >
          <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            sx={{
              flex: 1,
              height: "2.5rem",
              "& .MuiInputBase-input": {
                padding: "6px 1rem",
                fontSize: "1.2rem",
              },
            }}
          />
          <Button
            sx={{
              borderRadius: "5px",
              backgroundColor: " #D7C7F4",
              width: "5rem",
            }}
            onClick={(e) => generateResponse(e, value)}
          >
            <Typography
              sx={{ color: "#000000", fontFamily: "Ubuntu", fontWeight: 400 }}
            >
              Ask
            </Typography>
          </Button>
          <Button
            sx={{
              borderRadius: "5px",
              backgroundColor: " #D7C7F4",
            }}
            onClick={() => saveChat()}
          >
            <Typography
              sx={{
                color: "#000000",
                fontFamily: "Ubuntu",
                fontWeight: 400,
                width: "5rem",
              }}
            >
              Save
            </Typography>
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default UserInput;
