import { Grid, Box } from "@mui/material";
import { InitialCard } from "../../../../../components";
import { initialCardData } from "../../../../../mocks/card.mock";

const InitialCards = () => {
  return (
    <>
      <Box sx={{ width: "100%", padding: "0 1rem", marginTop: "5rem" }}>
        <Grid container rowSpacing={3} columnSpacing={2}>
          {initialCardData.map((cardData) => (
            <Grid key={cardData.id} item xs={12} sm={12} md={6} lg={6}>
              <InitialCard
                id={cardData.id}
                key={cardData.id}
                title={cardData.title}
                content={cardData.content}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default InitialCards;
