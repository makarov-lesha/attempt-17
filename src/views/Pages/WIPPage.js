import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";

// @material-ui/icons

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";

import styles from "../../assets/jss/material-dashboard-pro-react/views/startPageStyle.js";

const useStyles = makeStyles(styles);

export default function StartPage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title}>Work in Progress</h2>
          <h5 className={classes.description}>
            Content of this page will appear soon. <br /> <br />
            We are working on it.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
