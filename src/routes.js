import WIPPage from "./views/Pages/WIPPage.js";
import RealEstatePage from "./views/Pages/RealEstatePage.js";
import FinancingPage from "./views/Pages/FinancingPage.js";
import TaxationPage from "./views/Pages/TaxationPage.js";
import RECalculatorA from "./views/Calculators/RECalculatorA.js";
import RECalculatorB from "./views/Calculators/RECalculatorB.js";
import RECalculatorC from "./views/Calculators/RECalculatorC.js";
import FinCalculatorA from "./views/Calculators/FinCalculatorA.js";
import FinCalculatorB from "./views/Calculators/FinCalculatorB.js";
import FinCalculatorC from "./views/Calculators/FinCalculatorC.js";
import TaxCalculatorA from "./views/Calculators/TaxCalculatorA.js";
import TaxCalculatorB from "./views/Calculators/TaxCalculatorB.js";
import TaxCalculatorC from "./views/Calculators/TaxCalculatorC.js";

// import Dashboard from "./views/Dashboard/Dashboard.js";
// import Widgets from "./views/Widgets/Widgets.js";
// import Wizard from "views/Forms/Wizard.js";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import ApartmentIcon from "@material-ui/icons/Apartment";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import DescriptionIcon from "@material-ui/icons/Description";
import GroupIcon from "@material-ui/icons/Group";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import EqualizerIcon from "@material-ui/icons/Equalizer";

var dashRoutes = [
  {
    layout: "/calcs",
    path: "/dashboard",
    component: WIPPage,
    name: "Dashboard",
    icon: DashboardIcon,
  },

  {
    collapse: true,
    name: "Real Estate",
    icon: ApartmentIcon,
    state: "stateA",
    views: [
      {
        layout: "/calcs",
        path: "/re-calc-a",
        name: "Calculator A",
        mini: "A",
        component: WIPPage,
      },
      {
        layout: "/calcs",
        path: "/re-calc-b",
        name: "Calculator B",
        mini: "B",
        component: WIPPage,
      },
      {
        layout: "/calcs",
        path: "/re-calc-c",
        name: "Calculator C",
        mini: "C",
        component: WIPPage,
      },
    ],
  },

  {
    collapse: true,
    name: "Financing",
    icon: BusinessCenterIcon,
    state: "stateB",
    views: [
      {
        layout: "/calcs",
        path: "/fin-calc-b",
        name: "Early Repayment Penalty",
        mini: "B",
        component: FinCalculatorB,
      },
      {
        layout: "/calcs",
        path: "/fin-calc-a",
        name: "Check your loan",
        mini: "A",
        component: WIPPage,
      },
      {
        layout: "/calcs",
        path: "/fin-calc-c",
        name: "Calculator C",
        mini: "C",
        component: WIPPage,
      },
    ],
  },

  {
    collapse: true,
    name: "Tax",
    icon: DescriptionIcon,
    state: "stateC",
    views: [
      {
        layout: "/calcs",
        path: "/tax-calc-a",
        name: "Calculator A",
        mini: "A",
        component: WIPPage,
      },
      {
        layout: "/calcs",
        path: "/tax-calc-b",
        name: "Calculator B",
        mini: "B",
        component: WIPPage,
      },
      {
        layout: "/calcs",
        path: "/tax-calc-c",
        name: "Calculator C",
        mini: "C",
        component: WIPPage,
      },
    ],
  },

  {
    layout: "/auth",
    path: "/real-estate",
    component: RealEstatePage,
    name: "Real Estate",
    icon: ApartmentIcon,
    invisibleOnSidebar: true,
  },
  {
    layout: "/auth",
    path: "/financing",
    component: FinancingPage,
    name: "Financing",
    icon: BusinessCenterIcon,
    invisibleOnSidebar: true,
  },
  {
    layout: "/auth",
    path: "/taxation",
    component: TaxationPage,
    name: "Taxation",
    icon: DescriptionIcon,
    invisibleOnSidebar: true,
  },

  {
    layout: "/auth",
    path: "/about",
    name: "About us",
    icon: EqualizerIcon,
    component: WIPPage,
  },
  {
    layout: "/auth",
    path: "/team",
    name: "Team",
    icon: GroupIcon,
    component: WIPPage,
  },
  {
    layout: "/auth",
    path: "/contacts",
    name: "Contacts",
    icon: ContactMailIcon,
    component: WIPPage,
  },
];

export default dashRoutes;
