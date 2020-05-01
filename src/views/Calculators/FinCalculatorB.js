import React, { useState, useEffect } from "react";

//SheetJS tools
import S5SCalc from "@sheet/formula";
import XLSX from "xlsx";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
// import Card from "../../components/Card/Card.js";
// import CardBody from "../../components/Card/CardBody.js";
import Heading from "../../components/Heading/Heading.js";
import PanelsDescriptive from "../../components/Panels/PanelCalculatorB.js";

import styles from "../../assets/jss/material-dashboard-pro-react/views/finCalculatorsStyle.js";

S5SCalc.XLSXLib = XLSX;

const useStyles = makeStyles(styles);

export default function REInvestmentCalculator() {
  const classes = useStyles();
  // const [wb24, setWb24] = useState({});
  const [busPrivSelectorShow, setBusPrivSelectorShow] = useState(true);
  const [calcType, setCalcType] = useState(0);

  function handleTabClick(index) {
    setCalcType(index);
  }

  // useEffect(() => {
  //   fetch("/example.xlsx")
  //     .then((res) => res.arrayBuffer())
  //     .then((ab) => {
  //       //read file
  //       const wb = XLSX.read(ab, { type: "array", cellStyles: true });
  //       // S5SCalc.update_value(wb, "Sheet1", "C11", 1);
  //       // const html = XLSX.utils.sheet_to_html(wb.Sheets[wb.SheetNames[0]]); // first worksheet HTML
  //       // elt.current.innerHTML = html;
  //       setWb24(wb);
  //     });
  // }, []);

  // const onScenarioChange = (scenarioNum) => {
  //   const wbTemp = { ...wb24 };
  //   S5SCalc.update_value(wbTemp, "Sheet1", "C11", scenarioNum);
  //   S5SCalc.update_value(wbTemp, "Sheet1", "G19", 100);
  //   const html = XLSX.utils.sheet_to_html(wbTemp.Sheets[wbTemp.SheetNames[0]]); // first worksheet HTML
  //   elt.current.innerHTML = html;
  //   setWb24({ ...wbTemp });
  // };

  return (
    <div>
      <Heading
        textAlign="center"
        title="Calculator"
        category="Estimate penalty of your bank in couple of clicks."
      />
      <GridContainer
        justify="flex-start"
        alignItems="center"
        direction="column"
      >
        <GridItem xs={12}>
          {busPrivSelectorShow && (
            <PanelsDescriptive handleTabClick={handleTabClick} />
          )}
        </GridItem>
        <GridItem xs={12}>
          <Button
            color="success"
            onClick={() => {
              setBusPrivSelectorShow(!busPrivSelectorShow);
            }}
          >
            {`Calculate ${calcType === 0 ? "(Business)" : "(Individual)"}`}
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
