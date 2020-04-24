import StartPage from "./views/Pages/StartPage.js";
import RealEstatePage from "./views/Pages/RealEstatePage.js";
import FinancingPage from "./views/Pages/FinancingPage.js";
import TaxationPage from "./views/Pages/TaxationPage.js";
import PricingPage from "./views/Pages/PricingPage.js";
import REInvestmentCalculator from "./views/Calculators/RealEstateInvestmentCalculator.js";

// import Dashboard from "./views/Dashboard/Dashboard.js";
// import Widgets from "./views/Widgets/Widgets.js";
// import Wizard from "views/Forms/Wizard.js";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import ApartmentIcon from "@material-ui/icons/Apartment";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import DescriptionIcon from "@material-ui/icons/Description";
import HomeIcon from "@material-ui/icons/Home";

var dashRoutes = [
  {
    layout: "/calcs",
    path: "/dashboard",
    component: REInvestmentCalculator,
    name: "Main Dashboard",
    icon: DashboardIcon,
  },
  {
    layout: "/calcs",
    path: "/re-investments",
    component: REInvestmentCalculator,
    name: "Investment Calculator",
    mini: "RE",
  },
  // {
  //   layout: "/calcs",
  //   path: "/wizard",
  //   component: Wizard,
  //   name: "Wizard",
  //   mini: "W",
  // },
  // {
  //   layout: "/calcs",
  //   path: "/charts",
  //   component: Charts,
  //   name: "Charts",
  //   icon: Timeline,
  // },

  {
    layout: "/auth",
    path: "/real-estate",
    component: RealEstatePage,
    name: "Real Estate",
    icon: ApartmentIcon,
  },
  {
    layout: "/auth",
    path: "/financing",
    component: FinancingPage,
    name: "Financing",
    icon: BusinessCenterIcon,
  },
  {
    layout: "/auth",
    path: "/taxation",
    component: TaxationPage,
    name: "Taxation",
    icon: DescriptionIcon,
  },
  {
    layout: "/auth",
    path: "/pricing-page",
    component: PricingPage,
    name: "Pricing",
    icon: MonetizationIcon,
  },
  {
    layout: "/auth",
    path: "/start-page",
    component: StartPage,
    name: "Start Page",
    icon: HomeIcon,
  },
];

export default dashRoutes;
