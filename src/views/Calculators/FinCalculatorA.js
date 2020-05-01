import React, { useState, useEffect } from "react";

//SheetJS tools
import S5SCalc from "@sheet/formula";
import XLSX from "xlsx";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import Heading from "../../components/Heading/Heading.js";

import styles from "../../assets/jss/material-dashboard-pro-react/views/finCalculatorsStyle.js";

S5SCalc.XLSXLib = XLSX;

const useStyles = makeStyles(styles);

export default function REInvestmentCalculator() {
  const classes = useStyles();
  const [wb24, setWb24] = useState({});

  useEffect(() => {
    fetch("/example.xlsx")
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        //read file
        const wb = XLSX.read(ab, { type: "array", cellStyles: true });
        // S5SCalc.update_value(wb, "Sheet1", "C11", 1);
        // const html = XLSX.utils.sheet_to_html(wb.Sheets[wb.SheetNames[0]]); // first worksheet HTML
        // elt.current.innerHTML = html;
        setWb24(wb);
      });
  }, []);

  // const onScenarioChange = (scenarioNum) => {
  //   const wbTemp = { ...wb24 };
  //   S5SCalc.update_value(wbTemp, "Sheet1", "C11", scenarioNum);
  //   S5SCalc.update_value(wbTemp, "Sheet1", "G19", 100);
  //   const html = XLSX.utils.sheet_to_html(wbTemp.Sheets[wbTemp.SheetNames[0]]); // first worksheet HTML
  //   elt.current.innerHTML = html;
  //   setWb24({ ...wbTemp });
  // };

  return (
    <>
      <Heading
        textAlign="center"
        title="Financial Calculator"
        category="With this simple tool you can check the terms of your financing."
      />
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`md={6}`}</code>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer justify="space-between">
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`md={4}`}</code>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`md={4}`}</code>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
}
