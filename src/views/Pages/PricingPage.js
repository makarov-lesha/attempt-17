import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Home from "@material-ui/icons/Home";
import Business from "@material-ui/icons/Business";
import AccountBalance from "@material-ui/icons/AccountBalance";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
// import Card from "../../components/Card/Card.js";
// import CardBody from "../../components/Card/CardBody.js";

import styles from "../../assets/jss/material-dashboard-pro-react/views/pricingPageStyle.js";

const useStyles = makeStyles(styles);

export default function PricingPage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer justify="center" direction="column" alignItems="center">
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title}>The best plan for you</h2>
          <h5 className={classes.description}>
            You can use resources of this website for free.
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Button
            round
            variant="contained"
            color="link"
            href="/calcs/dashboard"
          >
            DASHBOARD
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
