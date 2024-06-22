import { Stack, Typography, Box, IconButton } from "@mui/material";
import { ThumbsUp, ThumbsDown } from "../../../assets";
import moment from "moment";
import Rating from "@mui/material/Rating";
import { useContext, useState } from "react";
import { FeedbackContext } from "../../../context/FeedbackContext";
import FeedBack from "./FeedBack";

const ChatInformation = ({
  time,
  type,
  content,
  chatRating,
  chatFeedback,
  chatType,
}) => {
  const {
    rating,
    setRating,
    openFeedbackDialog,
    setOpenFeedbackDialog,
    activateRating,
    setActivateRating,
    feedBack,
    setFeedBack,
  } = useContext(FeedbackContext);

  const onThumbClick = (label) => {
    if (label === "thumbs up") {
      setActivateRating(true);
      setOpenFeedbackDialog(false);
    } else if ("thumbs down") {
      setOpenFeedbackDialog(true);
    }
  };

  const onFeedBackSubmit = (feedback) => {
    setOpenFeedbackDialog(false);
    setFeedBack(feedback);
  };
  return (
    <>
      <Stack rowGap={2.5}>
        <Stack>
          <Typography
            fontWeight={700}
            fontFamily="ubuntu"
            fontSize="16px"
            lineHeight="18.38px"
          >
            {type === "AI" ? "Soul AI" : "Human"}
          </Typography>
          <Typography
            fontWeight={400}
            fontFamily="Open Sans"
            fontSize="16px"
            lineHeight="21.79px"
          >
            {content}
          </Typography>
        </Stack>
        <Stack flexDirection="row" alignItems="center">
          <Typography
            fontWeight={400}
            fontFamily="Open Sans"
            fontSize="12px"
            lineHeight="16.34px"
          >
            {moment(time).format("hh:mm A")}
          </Typography>
          {type === "AI" && chatType === "home" && (
            <Stack direction="row" sx={{ marginLeft: "1rem" }}>
              <IconButton onClick={() => onThumbClick("thumbs up")}>
                <img src={ThumbsUp} alt="thumbs up" />
              </IconButton>
              <IconButton onClick={() => onThumbClick("thumbs down")}>
                <img src={ThumbsDown} alt="thumbs down" />
              </IconButton>
            </Stack>
          )}
        </Stack>
        {(activateRating || openFeedbackDialog) && (
          <Stack>
            {activateRating && (
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            )}
            {openFeedbackDialog && (
              <FeedBack
                openFeedbackDialog={openFeedbackDialog}
                onFeedBackSubmit={onFeedBackSubmit}
              />
            )}
            {feedBack && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h6" fontWeight={600} fontSize="20px">
                  Feedback :
                </Typography>
                <Typography variant="p">{feedBack}</Typography>
              </Box>
            )}
          </Stack>
        )}
        {chatType === "history" &&
          type === "AI" &&
          (chatRating > 0 || chatFeedback) && (
            <Stack>
              {chatRating > 0 && (
                <Rating name="simple-controlled" value={chatRating} readOnly />
              )}

              {chatFeedback && (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h6" fontWeight={600} fontSize="20px">
                    Feedback :
                  </Typography>
                  <Typography variant="p">{chatFeedback}</Typography>
                </Box>
              )}
            </Stack>
          )}
      </Stack>
    </>
  );
};

export default ChatInformation;
