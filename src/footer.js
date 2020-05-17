import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Box, Typography, Container } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.footerCover} py={2} >
        <Container maxWidth="md">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="body2" component="p" className={classes.text}> QuizAPP 2020.</Typography>
                <Typography variant="body2" component="p" className={classes.text}> Made with hustle by <a href="https://ayushbajra.herokuapp.com/" target="_blank" className={classes.link}>Ayush Bajracharya</a>.</Typography>
            </Box>
        </Container>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  footerCover: {
    width: "100%",
    backgroundColor: "white",
  },
  text: {
    color: '#a5a5a5'
  },
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#a5a5a5',
    transition: 'all 0.25s ease',
    '&:hover': {
        color: 'black'
    }
  }
}));

export default Footer;
