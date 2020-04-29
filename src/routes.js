import StartPage from "./views/Pages/StartPage.js";
import WIPPage from "./views/Pages/WIPPage.js";
import RealEstatePage from "./views/Pages/RealEstatePage.js";
import FinancingPage from "./views/Pages/FinancingPage.js";
import TaxationPage from "./views/Pages/TaxationPage.js";
import REInvestmentCalculator from "./views/Calculators/RealEstateInvestmentCalculator.js";

// import Dashboard from "./views/Dashboard/Dashboard.js";
// import Widgets from "./views/Widgets/Widgets.js";
// import Wizard from "views/Forms/Wizard.js";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import ApartmentIcon from "@material-ui/icons/Apartment";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import DescriptionIcon from "@material-ui/icons/Description";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
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
        name: "Use case A",
        mini: "A",
        component: REInvestmentCalculator,
      },
      {
        layout: "/calcs",
        path: "/re-calc-b",
        name: "Use case B",
        mini: "B",
        component: WIPPage,
      },
      {
        layout: "/calcs",
        path: "/re-calc-c",
        name: "Use case C",
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
        path: "/fin-calc-a",
        name: "Use case A",
        mini: "A",
        component: WIPPage,
      },
      {
        layout: "/calcs",
        path: "/fin-calc-b",
        name: "Use case B",
        mini: "B",
        component: WIPPage,
      },
      {
        layout: "/calcs",
        path: "/fin-calc-c",
        name: "Use case C",
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
        name: "Use case A",
        mini: "A",
        component: WIPPage,
      },
      {
        layout: "/calcs",
        path: "/tax-calc-b",
        name: "Use case B",
        mini: "B",
        component: WIPPage,
      },
      {
        layout: "/calcs",
        path: "/tax-calc-c",
        name: "Use case C",
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
