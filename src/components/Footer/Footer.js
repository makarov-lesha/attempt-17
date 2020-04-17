import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import logo from "../../assets/img/logo192.png";

import styles from "../../assets/jss/material-dashboard-pro-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const { fluid, white } = props;
  var container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white,
  });
  var anchor =
    classes.a +
    cx({
      [" " + classes.whiteColor]: white,
    });
  var block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white,
  });
  return (
    <footer className={classes.footer}>
      <div className={container}>
        {/* <div className={classes.left}> */}
        <GridContainer
          direction={matchesSM ? "column" : "row"}
          justify="space-between"
          alignItems={matchesSM ? "center" : "flex-end"}
        >
          <GridItem>
            <List className={classes.list}>
              <ListItem
                className={classes.inlineBlock}
                style={{
                  display: matchesXS ? "block" : "inline-block",
                  textAlign: matchesXS ? "center" : "left",
                }}
              >
                <a href="/" className={block}>
                  Home
                </a>
              </ListItem>
              <ListItem
                className={classes.inlineBlock}
                style={{
                  display: matchesXS ? "block" : "inline-block",
                  textAlign: matchesXS ? "center" : "left",
                }}
              >
                <a href="/" className={block}>
                  About
                </a>
              </ListItem>
              <ListItem
                className={classes.inlineBlock}
                style={{
                  display: matchesXS ? "block" : "inline-block",
                  textAlign: matchesXS ? "center" : "left",
                }}
              >
                <a href="/" className={block}>
                  Team
                </a>
              </ListItem>
              <ListItem
                className={classes.inlineBlock}
                style={{
                  display: matchesXS ? "block" : "inline-block",
                  textAlign: matchesXS ? "center" : "left",
                }}
              >
                <a href="/" className={block}>
                  Contacts
                </a>
              </ListItem>
            </List>
            {/* </div> */}
          </GridItem>
          <GridItem>
            <p className={classes.right} style={{ paddingRight: 0 }}>
              &copy; {1900 + new Date().getYear()}{" "}
              <a href="/" className={anchor}>
                Calcscout 24
                <img
                  src={logo}
                  alt="Calcscout24 logo"
                  height={matchesSM ? "16px" : "16px"}
                  width={matchesSM ? "16px" : "16px"}
                  style={{ marginLeft: "0.2rem" }}
                />
              </a>
            </p>
          </GridItem>
        </GridContainer>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool,
};
