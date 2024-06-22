import { Typography, Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import moment from "moment";
import { ChatCard, Dropdown } from "../../components";
import { v4 as uuidv4 } from "uuid";

const History = () => {
  const location = useLocation();
  // const { chat, setChat } = useOutletContext();
  const [chatHistory, setChatHistory] = useState(null);
  const [filter, setFilter] = useState("");

  console.log("chatHistory", chatHistory, "filter", filter);

  useEffect(() => {
    let chat = JSON.parse(localStorage.getItem("chatData"));
    if (location.pathname.includes("/history") && chat && chat.length > 0) {
      let tempDataObject = {};
      const groupedByChatId = chat.reduce((acc, item) => {
        if (!acc[item.chatId]) {
          acc[item.chatId] = [];
        }
        acc[item.chatId].push(item);
        return acc;
      }, {});

      Object.keys(groupedByChatId).forEach((chatId) => {
        groupedByChatId[chatId].forEach((chatData) => {
          if (
            moment(chatData.date).startOf("day").isSame(moment().startOf("day"))
          ) {
            if (tempDataObject.hasOwnProperty("Today's Chats")) {
              tempDataObject["Today's Chats"] = [
                ...tempDataObject["Today's Chats"],
                chatData,
              ];
            } else {
              tempDataObject["Today's Chats"] = [chatData];
            }
          } else if (
            moment(chatData.date).isSame(moment().subtract(1, "days"), "day")
          ) {
            if (tempDataObject.hasOwnProperty("Yesterday's Chats")) {
              tempDataObject["Yesterday's Chats"] = [
                ...tempDataObject["Yesterday's Chats"],
                chatData,
              ];
            } else {
              tempDataObject["Yesterday's Chats"] = [chatData];
            }
          } else {
            let formattedKey = moment(chatData.date).format("D MMMM YYYY");
            if (tempDataObject.hasOwnProperty(formattedKey)) {
              tempDataObject[formattedKey] = [
                ...tempDataObject[formattedKey],
                chatData,
              ];
            } else {
              tempDataObject[formattedKey] = [chatData];
            }
          }
        });
      });

      if (filter) {
        Object.keys(tempDataObject).forEach((key) => {
          tempDataObject[key] = tempDataObject[key].reduce((acc, chatData) => {
            if (chatData.rating === +filter) {
              const relatedChats = groupedByChatId[chatData.chatId];
              return [...acc, ...relatedChats];
            }
            return acc;
          }, []);
        });
      }

      if (
        Object.keys(tempDataObject).length === 1 &&
        Object.keys(tempDataObject)[0] === "Today's Chats" &&
        tempDataObject["Today's Chats"].length === 0
      ) {
        tempDataObject = {};
      }

      setChatHistory(tempDataObject);
    }
  }, [location.pathname, filter]);
  return (
    <>
      <Box
        sx={{
          marginTop: "32px",
          marginBottom: "1.5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Ubuntu",
              fontSize: "28px",
              fontWeight: "700",
              lineHeight: "32.17px",
              color: "#000000",
            }}
          >
            Conversation History
          </Typography>
        </Box>

        <Dropdown
          selectedRating={filter}
          onChangeHandler={(e, label) => {
            if (label === "filter") {
              setFilter(e.target.value);
            }
          }}
        />
      </Box>
      <Box
        sx={{
          overflowY: "scroll",
          height: "85vh",
          padding: "1rem 0",
        }}
      >
        {!chatHistory && (
          <Typography variant="h6" textAlign="center">
            No Chat History Found
          </Typography>
        )}
        {chatHistory && Object.keys(chatHistory).length === 0 && filter && (
          <Typography variant="h6" textAlign="center">
            No Matching Chat Found With Selected Rating
          </Typography>
        )}
        {chatHistory &&
          Object.keys(chatHistory).length > 0 &&
          Object.keys(chatHistory).map((key) => (
            <Box key={uuidv4()}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Ubuntu",
                  fontWeight: "550",
                  fontSize: "20px",
                  lineHeight: "22.98px",
                  marginLeft: "1rem",
                  padding: "0.5rem 0.5rem 1rem 0.5rem",
                  color: "#000000",
                }}
              >
                {key}
              </Typography>

              <Stack margin={"0 1rem"} rowGap={2}>
                {chatHistory[key].map((chatData) => (
                  <ChatCard
                    chatData={chatData}
                    chatType="history"
                    key={chatData.id}
                  />
                ))}
              </Stack>
            </Box>
          ))}
      </Box>
    </>
  );
};

export default History;
