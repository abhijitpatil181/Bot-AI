import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { FeedBackIcon } from "../../../assets";
import { Typography, Stack } from "@mui/material";
import TextArea from "./TextArea";
import { useState } from "react";

const FeedBack = ({ openFeedbackDialog, onFeedBackSubmit }) => {
  const [feedBack, setFeedBack] = useState("");

  const handleClose = () => {
    onFeedBackSubmit(feedBack);
  };

  return (
    <>
      <Dialog
        open={openFeedbackDialog}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: "766px",
            height: "335px",
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <Stack direction="row" alignItems="center">
            <img src={FeedBackIcon} alt="feedback" />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 400,
                fontSize: "22px",
                marginLeft: "1rem",
              }}
            >
              Provide Additional Feedback
            </Typography>
          </Stack>
        </DialogTitle>
        <DialogContent
          sx={{
            "&.MuiDialogContent-root": {
              paddingBottom: "0",
            },
          }}
        >
          <TextArea feedBack={feedBack} setFeedBack={setFeedBack} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ marginRight: "1rem" }} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FeedBack;
