import React, { useState, useEffect } from "react";
import { Typography, Grid, Container, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

import Header from "../header";

const QuizQuestion = ({
  question,
  handlePrev,
  handleNext,
  currentQuestion,
  totalQuestions,
  answerQuestion,
  prevNextToggle,
  handleFinish,
}) => {
  const classes = useStyles();

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (question.chosenOption === null) {
      setSelectedOption(null);
    } else {
      setSelectedOption(question.chosenOption);
    }
  }, [prevNextToggle]);

  const handleNextClick = async () => {
    await answerQuestion(question.id, selectedOption);
    setSelectedOption(null);
    handleNext();
  };

  const sendLastAnswer = async () => {
    answerQuestion(question.id, selectedOption);
  };

  const handleFinishClick = () => {
    sendLastAnswer().then(() => {
      setSelectedOption(null);
      handleFinish();
    });
  };

  const displayOptions = question.options.map((item, index) => {
    return (
      <Grid item xs={12} sm={6} key={item.id}>
        <Box
          p={2}
          className={
            selectedOption != null && selectedOption.id === item.id
              ? `${classes.optionBoxSelected}`
              : `${classes.optionBox}`
          }
          onClick={() => setSelectedOption(item)}
        >
          <Typography
            variant="subtitle1"
            component="p"
            className={
              selectedOption != null && selectedOption.id === item.id
                ? `${classes.optionSelected}`
                : `${classes.option}`
            }
          >
            {item.option}
          </Typography>
        </Box>
      </Grid>
    );
  });

  return (
    <div className={classes.outerCover}>
      <Header />
      <Box pt={12}>
        <Container maxWidth="sm" className={classes.container}>
          <Box p={4}>
            <Typography
              variant="h5"
              component="h5"
              className={classes.question}
            >
              {question.question}
            </Typography>

            <Box mt={3}>
              <Grid container spacing={3}>
                {displayOptions}
              </Grid>
            </Box>
          </Box>
        </Container>

        <Box mt={4}>
          <Container maxWidth="sm">
            <Typography
              variant="h6"
              component="p"
              style={{ textAlign: "center", color: "#3c4146" }}
            >
              {" "}
              {currentQuestion}/{totalQuestions}
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="sm">
          <Box
            mt={4}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="primary"
              className={classes.btn}
              onClick={handlePrev}
              disabled={currentQuestion === 1 ? true : false}
            >
              <ArrowLeftIcon
                className={classes.prevNextIcon}
                fontSize="large"
              />
            </Button>
            {currentQuestion === totalQuestions ? (
              <Button
                variant="contained"
                color="primary"
                className={classes.finishBtn}
                onClick={handleNext}
                onClick={handleFinishClick}
              >
                <Typography
                  variant="subtitle1"
                  component="p"
                  className={classes.finishTxt}
                >
                  {" "}
                  Finish{" "}
                </Typography>
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                disabled={
                  selectedOption == null || currentQuestion === totalQuestions
                    ? true
                    : false
                }
                onClick={handleNextClick}
              >
                <ArrowRightIcon
                  className={classes.prevNextIcon}
                  fontSize="large"
                />
              </Button>
            )}
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
  container: {
    backgroundColor: "white",
  },
  question: {
    fontWeight: "bold",
  },
  optionBox: {
    border: "1px solid #a4a4a4",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "blue",
      border: "1px solid blue",
    },
    "&:hover $option": {
      color: "white",
    },
  },
  optionBoxSelected: {
    backgroundColor: "blue",
    border: "1px solid blue",
    cursor: "pointer",
  },
  option: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#3c4146",
  },
  optionSelected: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  btn: {
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "blue",
    },
    "&:hover $prevNextIcon": {
      color: "white",
    },
  },
  prevNextIcon: {
    color: "blue",
  },
  finishBtn: {
    backgroundColor: "white",
    padding: "0.8em 2em",
    "&:hover": {
      backgroundColor: "blue",
    },
    "&:hover $finishTxt": {
      color: "white",
    },
  },
  finishTxt: {
    color: "blue",
    fontWeight: "bold",
    "&:hover": {
      color: "white",
    },
  },
}));

export default QuizQuestion;
