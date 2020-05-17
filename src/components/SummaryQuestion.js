import React from "react";

import {
  Typography,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

const SummaryQuestion = ({ question }) => {
  const classes = useStyles();

  return (
    <Box className={classes.question} py={2} px={2} mb={3}>
      <Typography variant="h6" component="h5">
        {question.question}
      </Typography>
      <Box mt={2}>
        <Typography
          variant="subtitle2"
          component="p"
          style={{ color: "#9988b1" }}
        >
          Your answer
        </Typography>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Typography variant="body1" component="p">
            {question.chosenOption.option}
          </Typography>
          {question.chosenOption.id === parseInt(question.correctOption) ? (
            <CheckIcon className={classes.checkIcon} />
          ) : (
            <ClearIcon className={classes.clearIcon} />
          )}
        </Box>
      </Box>
      {question.chosenOption.id !== parseInt(question.correctOption) ? (
        <Box mt={2}>
          <Typography
            variant="subtitle2"
            component="p"
            style={{ color: "#9988b1" }}
          >
            Correct answer
          </Typography>
          <Typography variant="body1" component="p">
            {
              question.options.find(
                (item) => item.id === parseInt(question.correctOption)
              ).option
            }
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  question: {
    border: "1px solid #F4F4F3",
  },
  checkIcon: {
    color: "#64eb34",
    paddingLeft: theme.spacing(2),
  },
  clearIcon: {
    color: "#db3e1f",
    paddingLeft: theme.spacing(2),
  },
}));

export default SummaryQuestion;
