import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";

// @material-ui/icons

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material-dashboard-pro-react/views/startPageStyle.js";

const useStyles = makeStyles(styles);

export default function StartPage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <GridContainer justify="center" direction="column" alignItems="center">
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title}>Real Estate Tools</h2>
          <h5 className={classes.description}>
            To make your life slightly easier.
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Button
            round
            variant="contained"
            color="default"
            href="/calcs/re-calc-a"
          >
            Real Estate CALCULATORs
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
