import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link, BrowserRouter, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: "hidden",
    overflowY: "hidden",
    // position: 'absolute',
    position: "sticky",
    top: 0,
    backgroundColor: "white",
    boxShadow: "0px 8px 6px -6px lightgrey",
    zIndex: 99999999999,
    height: 70,
    width: "100%",
    // border:'1px solid red'
  },
  logo: {
    padding: 15,
    paddingLeft: 50,
    paddingBottom: 0,
    paddingTop: "7px",
    height:'65px  '
  },
  navOuter: {
    textDecoration: "none",
    padding: 10,
    paddingLeft: 50,
    display: "flex",
    height: 80,
    position: "relative",
    justifyContent: "flex-end",
    right: 40,
    // border:'1px solid red'
  },
  tab: {
    width: "100px !important",
  },
  HeaderHome: {
    // textDecoration:'none'
  },
  headerDiv: {
    position: "sticky !important",
    // border: "1px solid red",
    
  },
}));

const Header = () => {
  const classes = useStyles();

  const [active, setActive] = React.useState(0);

  const handleChange = (index) => {
    setActive(index);
  };

  return (
    <>
      <div
        className="container-fluid header-fluid"
        className={classes.headerDiv}
      >
        <Grid container className={classes.root}>
          <Grid item xs={12} md={4} spacing={2}>
            <Grid justify="space-around">
              <Link to="/home">
                <img
                  src={require("../resources/Home/images/logo-8.png")}
                  alt=""
                  className={classes.logo}
                />
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8} className={classes.navOuter}>
            <div className={classes.navOuter}>
              <Link to="/">
                {" "}
                <li
                  className={`nav-item ${active == 0 ? "active-tab" : null}`}
                  onClick={() => handleChange(0)}
                >
                  <span className="nav-text">Home</span>
                </li>{" "}
              </Link>
              <Link to="/service">
                <li
                  className={`nav-item ${active == 1 ? "active-tab" : null}`}
                  onClick={() => handleChange(1)}
                >
                  <span className="nav-text">Services</span>
                </li>
              </Link>
              <Link to="portfolio">
                <li
                  className={`nav-item ${active == 2 ? "active-tab" : null}`}
                  onClick={() => handleChange(2)}
                >
                  <span className="nav-text">Portfolio</span>
                </li>
              </Link>
              <Link to="about_us">
                <li
                  className={`nav-item ${active == 3 ? "active-tab" : null}`}
                  onClick={() => handleChange(3)}
                >
                  <span className="nav-text">About Us</span>
                </li>
              </Link>
              <Link to="/contact">
                <li
                  className={`nav-item ${active == 4 ? "active-tab" : null}`}
                  onClick={() => handleChange(4)}
                >
                  <span className="nav-text">Contact Us</span>
                </li>
              </Link>
              {/* <img src={require('../resources/Home/images/chair.png')} alt=""/> */}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Header;
