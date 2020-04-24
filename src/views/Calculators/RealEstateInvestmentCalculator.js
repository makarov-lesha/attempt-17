import React, { useState, useEffect, useRef } from "react";

//SheetJS tools
import S5SCalc from "@sheet/formula";
import XLSX from "xlsx";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";

import styles from "../../assets/jss/material-dashboard-pro-react/views/realEstateCalculatorStyle.js";

S5SCalc.XLSXLib = XLSX;

const useStyles = makeStyles(styles);

export default function REInvestmentCalculator() {
  const classes = useStyles();
  const [buttonSelectedNum, setButtonSelectedNum] = useState(1);
  const [wb24, setWb24] = useState({});
  const elt = useRef();

  useEffect(() => {
    fetch("/example.xlsx")
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        //read file
        const wb = XLSX.read(ab, { type: "array", cellStyles: true });
        S5SCalc.update_value(wb, "Sheet1", "C11", 1);
        const html = XLSX.utils.sheet_to_html(wb.Sheets[wb.SheetNames[0]]); // first worksheet HTML
        elt.current.innerHTML = html;
        setWb24(wb);
      });
  }, []);

  const onScenarioChange = (scenarioNum) => {
    const wbTemp = { ...wb24 };
    S5SCalc.update_value(wbTemp, "Sheet1", "C11", scenarioNum);
    S5SCalc.update_value(wbTemp, "Sheet1", "G19", 100);
    const html = XLSX.utils.sheet_to_html(wbTemp.Sheets[wbTemp.SheetNames[0]]); // first worksheet HTML
    elt.current.innerHTML = html;
    setWb24({ ...wbTemp });
  };

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
            color="primary"
            // href="/calcs/re-investments"
          >
            Real Estate Investment Calculator
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          {/* <ButtonGroup
            color="primary"
            className={classes.buttonGroup1}
            aria-label="outlined primary button group"
          > */}
          <Button
            onClick={() => {
              setButtonSelectedNum(1);
              onScenarioChange(1);
            }}
          >
            {buttonSelectedNum === 1 ? "selected 1" : "select"}
          </Button>
          <Button
            onClick={() => {
              setButtonSelectedNum(2);
              onScenarioChange(2);
            }}
          >
            {buttonSelectedNum === 2 ? "selected 2" : "select"}
          </Button>
          <Button
            onClick={() => {
              setButtonSelectedNum(3);
              onScenarioChange(3);
            }}
          >
            {buttonSelectedNum === 3 ? "selected 3" : "select"}
          </Button>
          {/* </ButtonGroup> */}
          <Typography style={{ marginTop: "10px" }}>
            Selected index: {buttonSelectedNum}
          </Typography>
        </GridItem>
        <div ref={elt} />
      </GridContainer>
    </div>
  );
}
