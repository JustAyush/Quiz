import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" component="h6" className={classes.logoType}>
            <span style={{color: 'blue'}}>Quiz</span>APP
          </Typography>
          <Toolbar>
            <NavLink
              activeClassName={classes.activeLink}
              exact
              to="/"
              className={`${classes.navlink} ${classes.desktopNavLink}`}
            >
              <Typography variant="subtitle1" component="p">
                Settings
              </Typography>
            </NavLink>
            <NavLink
              activeClassName={classes.activeLink}
              exact
              to="/quiz"
              className={`${classes.navlink} ${classes.quizLink}`}
            >
              <Typography variant="subtitle1" component="p">
                Quiz
              </Typography>
            </NavLink>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "white",
  },
  logoType: {
    color: "black",
    fontWeight: 'bold'
  },
  navlink: {
    color: "black",
    textDecoration: "none"
  },
  quizLink: {
    marginLeft: theme.spacing(3),
  },
  activeLink: {
    color: "blue",
  },
}));

export default Header;
