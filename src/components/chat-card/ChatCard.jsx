import { Paper, Typography, Stack } from "@mui/material";
import { BotAiSvg, HumanSvg } from "../../assets";
import ChatInformation from "./components/ChatInformation";
import { useEffect, useState } from "react";
import { FeedbackContext } from "../../context/FeedbackContext";
import { useOutletContext } from "react-router-dom";

const ChatCard = ({ chatData, chatType }) => {
  const [rating, setRating] = useState(0);
  const [activateRating, setActivateRating] = useState(false);
  const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false);
  const [feedBack, setFeedBack] = useState("");
  const { chat, setChat } = useOutletContext();

  useEffect(() => {
    if (rating > 0) {
      setChat((prevChat) =>
        prevChat.map((chatItem) =>
          chatItem.id === chatData.id ? { ...chatItem, rating } : chatItem
        )
      );
    }
  }, [rating]);

  useEffect(() => {
    if (feedBack) {
      setChat((prevChat) =>
        prevChat.map((chatItem) =>
          chatItem.id === chatData.id ? { ...chatItem, feedBack } : chatItem
        )
      );
    }
  }, [feedBack]);

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          minHeight: "105px",
          width: "100%",
          padding: "1rem",
          backgroundColor: "#D7C7F421",
          borderRadius: "20px",
        }}
      >
        <Stack direction="row" columnGap={3} alignItems="center">
          <img
            src={chatData.type === "AI" ? BotAiSvg : HumanSvg}
            alt={chatData.type}
            sx={{ height: "69px", width: "66px" }}
          />
          <FeedbackContext.Provider
            value={{
              rating,
              setRating,
              openFeedbackDialog,
              setOpenFeedbackDialog,
              activateRating,
              setActivateRating,
              feedBack,
              setFeedBack,
            }}
          >
            <ChatInformation
              time={chatData.date}
              type={chatData.type}
              content={chatData.response}
              chatType={chatType}
              chatRating={chatType === "history" ? chatData?.rating : ""}
              chatFeedback={chatType === "history" ? chatData?.feedBack : ""}
            />
          </FeedbackContext.Provider>
        </Stack>
      </Paper>
    </>
  );
};

export default ChatCard;
