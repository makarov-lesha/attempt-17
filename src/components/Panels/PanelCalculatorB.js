import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import Info from "@material-ui/icons/Info";
// import LocationOn from "@material-ui/icons/LocationOn";
import BusinessIcon from "@material-ui/icons/Business";
// import HelpOutline from "@material-ui/icons/HelpOutline";
import Gavel from "@material-ui/icons/Gavel";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import NavPills from "../NavPills/NavPills.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";

import { cardTitle } from "../../assets/jss/material-dashboard-pro-react/material-dashboard-pro-react.js";

const styles = {
  cardTitle,
  pageSubcategoriesTitle: {
    color: "#3C4858",
    textDecoration: "none",
    textAlign: "center",
  },
  cardCategory: {
    margin: "0",
    color: "#999999",
  },
};

const useStyles = makeStyles(styles);

export default function PanelsDescriptive(props) {
  const classes = useStyles();
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.pageSubcategoriesTitle}>
            Choose one option to proceed
          </h4>
          <br />
          <NavPills
            handleTabClick={props.handleTabClick}
            color="info"
            alignCenter
            tabs={[
              {
                tabButton: "Business",
                tabIcon: BusinessIcon,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Early repayment penalties for Legal Entities
                      </h4>
                      <p className={classes.cardCategory}>German Regulation</p>
                    </CardHeader>
                    <CardBody>
                      Please choose this option if you are interested in
                      estimation of the penalties the banks can charge for early
                      repayment of financing taken by Legal Entity.
                      <br />
                      <br />
                      Penalties for Legal Entites are normally higher than for
                      individuals due to different legal regulations.
                      <br />
                      <br />
                      These penalties, not existing in some of the countries,
                      are abolutely legal in Germany and in current period of
                      low interest rates can be considered as one of the secure
                      revenue stream for the banks.
                    </CardBody>
                  </Card>
                ),
              },
              {
                tabButton: "Individual",
                tabIcon: EmojiPeopleIcon,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Early repayment penalties for Individuals
                      </h4>
                      <p className={classes.cardCategory}>German Regulation</p>
                    </CardHeader>
                    <CardBody>
                      Please choose this option if you would like to estimate
                      the penalty for individuals taking the financing.
                      <br />
                      <br />
                      Even though penalties for individuals are normally lower,
                      it can be absolutely unexpected to get such a bill after
                      you have decided to repay the loan in advance.
                      <br />
                      <br />
                      These penalties, not existing in some of the countries,
                      are abolutely legal in Germany and in current period of
                      low interest rates can be considered as one of the secure
                      revenue stream for the banks.
                    </CardBody>
                  </Card>
                ),
              },
              // {
              //   tabButton: "Legal Info",
              //   tabIcon: Gavel,
              //   tabContent: (
              //     <Card>
              //       <CardHeader>
              //         <h4 className={classes.cardTitle}>
              //           Legal info on Early Repayment penalty
              //         </h4>
              //         <p className={classes.cardCategory}>German Regulation</p>
              //       </CardHeader>
              //       <CardBody>
              //         The following regulations are applicable for Legal
              //         Entites: ...
              //         <br />
              //         <br />
              //         The following regulations are applicable for Individuals:
              //         ...
              //       </CardBody>
              //     </Card>
              //   ),
              // },
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
