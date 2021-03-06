import {
  container,
  defaultFont,
  grayColor,
} from "../material-dashboard-pro-react.js";

const taxCalculatorsStyle = (theme) => ({
  container: {
    ...container,
    zIndex: "4",
    // [theme.breakpoints.down("sm")]: {
    //   paddingTop: "40px",
    // },
  },
  title: {
    ...defaultFont,
    color: grayColor[1],
    marginTop: "5vh",
    marginBottom: "30px",
    textAlign: "center",
  },
  description: {
    fontSize: "18px",
    color: grayColor[3],
    textAlign: "center",
  },
  gridSystemStyle: {
    title: {
      color: grayColor[2],
      textDecoration: "none",
    },
  },
});

export default taxCalculatorsStyle;
