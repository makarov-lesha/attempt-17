import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// @material-ui/icons
import MenuIcon from "@material-ui/icons/Menu";

import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import ApartmentIcon from "@material-ui/icons/Apartment";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import DescriptionIcon from "@material-ui/icons/Description";

// core components
import Button from "../CustomButtons/Button";
import logo from "../../assets/img/logo192.png";

import styles from "../../assets/jss/material-dashboard-pro-react/components/authNavbarStyle.js";

const useStyles = makeStyles(styles);

export default function AuthNavbar(props) {
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };
  const classes = useStyles();
  const { color, brandText } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color,
  });
  var list = (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <NavLink to={"/auth/real-estate"} className={classes.navLink}>
          <ApartmentIcon className={classes.listItemIcon} />
          <ListItemText
            primary={"Real Estate"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/auth/financing"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/auth/financing"),
          })}
        >
          <BusinessCenterIcon className={classes.listItemIcon} />
          <ListItemText
            primary={"Financing"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/auth/taxation"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/auth/taxation"),
          })}
        >
          <DescriptionIcon className={classes.listItemIcon} />
          <ListItemText
            primary={"Taxation"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/auth/pricing-page"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/auth/pricing-page"),
          })}
        >
          <MonetizationIcon className={classes.listItemIcon} />
          <ListItemText
            primary={"Pricing"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
    </List>
  );
  return (
    <AppBar position="static" className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container} style={{ paddingLeft: "0px" }}>
        <Hidden smDown>
          <div className={classes.flex}>
            <Button
              href="/"
              className={classes.title}
              color="transparent"
              style={{ alignItems: "baseline" }}
            >
              <img
                src={logo}
                alt="Calcscout24 logo"
                height="24"
                width="24"
                style={{ marginRight: "0.5em" }}
              />
              {brandText}
            </Button>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.flex}>
            <Button
              href="/"
              className={classes.title}
              color="transparent"
              style={{ alignItems: "baseline" }}
            >
              <img
                src={logo}
                alt="Calcscout24 logo"
                height="20rem"
                width="20rem"
                style={{ marginRight: "0.5em" }}
              />
              {brandText}
            </Button>
          </div>
        </Hidden>
        <Hidden smDown>{list}</Hidden>
        <Hidden mdUp>
          <Button
            className={classes.sidebarButton}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={"right"}
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {list}
            </Drawer>
          </Hidden>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

AuthNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};
