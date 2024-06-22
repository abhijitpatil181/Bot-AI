import { Paper } from "@mui/material";
import {
  InitialCardContainer,
  InitialCardTitle,
  InitialCardContent,
} from "./InitialCard.styled";

const InitialCard = ({ title, content }) => {
  return (
    <>
      <Paper elevation={3}>
        <InitialCardContainer>
          <InitialCardTitle>{title}</InitialCardTitle>
          <InitialCardContent>{content}</InitialCardContent>
        </InitialCardContainer>
      </Paper>
    </>
  );
};
export default InitialCard;
