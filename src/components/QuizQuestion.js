import React from "react";
import { Typography, Grid, Container, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

import Header from "../header";

const QuizQuestion = () => {
  const classes = useStyles();
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
              Who is your favourite youtuber?
            </Typography>

            <Box mt={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box p={2} className={classes.optionBox}>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      className={classes.option}
                    >
                      Casey Neistat
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box p={2} className={classes.optionBox}>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      className={classes.option}
                    >
                      Casey Neistat
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box p={2} className={classes.optionBox}>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      className={classes.option}
                    >
                      Casey Neistat
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box p={2} className={classes.optionBox}>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      className={classes.option}
                    >
                      Casey Neistat
                    </Typography>
                  </Box>
                </Grid>
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
              1/10
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
            <Button variant="contained" color="primary" className={classes.btn}>
              <ArrowLeftIcon className={classes.prevNextIcon} fontSize="large" />
            </Button>
            <Button variant="contained" color="primary" className={classes.btn}>
              <ArrowRightIcon className={classes.prevNextIcon} fontSize="large" />
            </Button>
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
    transition: "all 0.4s ease",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "blue",
      border: "1px solid blue",
    },
    "&:hover $option": {
      color: "white",
    },
  },
  option: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#3c4146",
    transition: "all 0.4s ease",
  },
  btn: {
    backgroundColor: "white",
    transition: "all 0.4s ease",
    "&:hover": {
      backgroundColor: "blue",
    },
    "&:hover $prevNextIcon": {
      color: "white",
    },
  },
  prevNextIcon: {
    color: "blue",
    transition: "all 0.4s ease",
  },
}));

export default QuizQuestion;
