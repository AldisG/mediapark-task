import { Typography } from "@mui/material";
import { Container } from "@mui/system";

const NoItemsFound = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography variant="h2" component="p">
        Sorry, no photos found!
      </Typography>
    </Container>
  );
};

export default NoItemsFound;
