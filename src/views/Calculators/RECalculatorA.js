import React, { useState, useEffect, useRef } from "react";

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
import Typography from "@material-ui/core/Typography";

import styles from "../../assets/jss/material-dashboard-pro-react/views/reCalculatorsStyle.js";

S5SCalc.XLSXLib = XLSX;

const useStyles = makeStyles(styles);

export default function REInvestmentCalculator() {
  const classes = useStyles();
  // const [buttonSelectedNum, setButtonSelectedNum] = useState(1);
  const [wb24, setWb24] = useState({});
  // const elt = useRef();

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
    <div>
      <Typography variant="h3" component="h1" align="center">
        Real estate Calculator A
      </Typography>
      <h4 className={classes.title}>
        XS Grid <small>Always Horizontal</small>
      </h4>
      <GridContainer>
        <GridItem xs={4}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <Typography variant="h5">Example</Typography>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={4}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`xs={4}`}</code>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={4}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`xs={4}`}</code>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <h4 className={classes.title}>
        SM Grid <small>Collapsed at 768px</small>
      </h4>
      <GridContainer>
        <GridItem xs={12} sm={4}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`sm={4}`}</code>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`sm={4}`}</code>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`sm={4}`}</code>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <h4 className={classes.title}>
        MD Grid <small>Collapsed at 992px</small>
      </h4>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`md={4}`}</code>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`md={4}`}</code>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`md={4}`}</code>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <h4 className={classes.title}>
        LG Grid <small>Collapsed at 1200px</small>
      </h4>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={4}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`lg={4}`}</code>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={4}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`lg={4}`}</code>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={4}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`lg={4}`}</code>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <h4 className={classes.title}>
        Mixed Grid <small>Showing different sizes on different screens</small>
      </h4>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`sm={6} lg={3}`}</code>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`sm={6} lg={3}`}</code>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`sm={6} lg={3}`}</code>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`sm={6} lg={3}`}</code>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <h4 className={classes.title}>
        Offset Grid <small>Adding some space when needed</small>
      </h4>
      <GridContainer
        justify="space-between"
        alignItems="center"
        direction="row"
      >
        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`md={3}`}</code>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`md={3}`}</code>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`md={3}`}</code>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer justify="space-between">
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`md={4}`}</code>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`md={4}`}</code>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <code>{`md={6}`}</code>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <h4 className={classes.title}>Paragraphs</h4>
      <Card>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={6}>
              <h3>Some Title Here</h3>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment. His many legs,
                pitifully thin compared with the size of the rest of him, waved
                about helplessly as he looked. {'"'}What{"'"}s happened to me?
                {'"'} he thought.
              </p>
            </GridItem>
            <GridItem xs={12} sm={6}>
              <h3>Another Title Here</h3>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment. His many legs,
                pitifully thin compared with the size of the rest of him, waved
                about helplessly as he looked. {'"'}What{"'"}s happened to me?
                {'"'} he thought.
              </p>
            </GridItem>
          </GridContainer>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={4}>
              <h3>Some Title Here</h3>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment.
              </p>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <h3>Another Title Here</h3>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment.
              </p>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <h3>Another Title Here</h3>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment.
              </p>
            </GridItem>
          </GridContainer>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={4}>
              <h3>Some Title Here</h3>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment.
              </p>
            </GridItem>
            <GridItem xs={12} sm={8}>
              <h3>Another Title Here</h3>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment. One morning, when
                Gregor Samsa woke from troubled dreams, he found himself
                transformed in his bed into a horrible vermin. He lay on his
                armour-like back, and if he lifted his head a little he could
                see his brown belly, slightly domed and divided by arches into
                stiff sections. The bedding was hardly able to cover it and
                seemed ready to slide off any moment.
              </p>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
    </div>
  );
}
