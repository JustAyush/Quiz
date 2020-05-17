import React, { useState } from "react";

import { Typography, Box, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import QuizQuestion from "./QuizQuestion";
import Summary from "./Summary";
import Header from "../header";

const Quiz = ({ questions, answerQuestion, resetAnswer }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevNextToggle, setprevNextToggle] = useState(false);
  const [finish, setFinish] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  const handlePrev = () => {
    if (selectedIndex === 0) return;
    setSelectedIndex(selectedIndex - 1);
    setprevNextToggle(!prevNextToggle);
  };
  const handleNext = () => {
    if (selectedIndex === questions.length - 1) return;
    setSelectedIndex(selectedIndex + 1);
    setprevNextToggle(!prevNextToggle);
  };
  const handleFinish = () => {
    setFinish(true);
  };

  if (questions.length < 1) {
    return <EmptyQuestion />;
  }

  if (questions[questions.length - 1].chosenOption == null && finish) {
    return <h1>Loading...</h1>;
  }

  let score = 0;
  if (finish) {
    questions.map((item, index) => {
      if (parseInt(item.correctOption) === item.chosenOption.id) score++;
    });
  }

  return (
    <>
      {finish ? (
        <Summary
          questions={questions}
          score={score}
          resetAnswer={resetAnswer}
          setFinish={setFinish}
          setSelectedIndex={setSelectedIndex}
        />
      ) : (
        <>
          {playerReady ? (
            <QuizQuestion
              question={questions[selectedIndex]}
              handlePrev={handlePrev}
              handleNext={handleNext}
              currentQuestion={selectedIndex + 1}
              totalQuestions={questions.length}
              answerQuestion={answerQuestion}
              prevNextToggle={prevNextToggle}
              handleFinish={handleFinish}
            />
          ) : (
            <PlayerReady setPlayerReady={setPlayerReady} resetAnswer={resetAnswer} />
          )}
        </>
      )}
    </>
  );
};

const PlayerReady = ({ setPlayerReady, resetAnswer }) => {
  const classes = useStyles();
  return (
    <div className={classes.outerCover}>
      <Header />
      <Box pt={12}>
        <Container maxWidth="sm" className={classes.playerReadyContainer}>
          <Box py={4} px={1}>
            <Typography
              variant="h4"
              component="h5"
              style={{ textAlign: "center" }}
            >
              {" "}
              Ready to play?
            </Typography>
            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                className={classes.startBtn}
                onClick={() => {
                  resetAnswer();
                  setPlayerReady(true)
                }}
              >
                <Typography variant="subtitle1" component="p">
                  {" "}
                  Let's Start{" "}
                </Typography>
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

const EmptyQuestion = () => {
  const classes = useStyles();
  return ( 
    <div className={classes.outerCover}>
      <Header />
      <Box pt={12}>
        <Container maxWidth="sm" className={classes.playerReadyContainer}>
          <Box py={4} px={1}>
            <Typography
              variant="subtitle1"
              component="p"
              style={{ textAlign: "center" }}
            >
              There is no question to play quiz. Head over to settings to add some.
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
   );
}
 
const useStyles = makeStyles((theme) => ({
  outerCover: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#F4F4F3",
  },
  playerReadyContainer: {
    backgroundColor: "white",
  },
  startBtn: {
    display: "block",
    margin: "0 auto",
  },
}));

export default Quiz;
