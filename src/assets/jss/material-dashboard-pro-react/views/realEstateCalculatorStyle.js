import {
  container,
  defaultFont,
  whiteColor,
  grayColor,
  tumblrColor,
} from "../material-dashboard-pro-react.js";

const realEstateCalculatorStyle = (theme) => ({
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
});

export default realEstateCalculatorStyle;
