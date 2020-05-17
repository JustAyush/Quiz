import React from "react";
import { Typography, Container, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../header";
import SummaryQuestion from "./SummaryQuestion";

const Summary = ({ questions, score, resetAnswer, setFinish, setSelectedIndex }) => {
  const classes = useStyles();

  const displaySummary = questions.map((item, index) => {
    return <SummaryQuestion key={item.id} question={item} />;
  });

  const handlePlayAgain = () => {
    resetAnswer();
    setSelectedIndex(0);
    setFinish(false);
  }

  return (
    <div className={classes.outerCover}>
      <Header />
      <Box pt={12}>
        <Container maxWidth="sm" style={{ backgroundColor: "white" }}>
          <Box py={4} px={1}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography
              variant="h5"
              component="h5"
              style={{ fontWeight: "bold" }}
            >
              {" "}
              You scored {score} out of {questions.length}.
            </Typography>
            <Button variant="contained" color="primary" onClick={handlePlayAgain}> Play Again</Button>
            </Box>
            <hr />

            <Typography
              variant="h6"
              component="h6"
              style={{ marginTop: "25px", marginBottom: "15px" }}
            >
              {" "}
              Summary
            </Typography>

            {displaySummary}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  outerCover: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#F4F4F3",
  },
}));

export default Summary;
