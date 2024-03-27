import React from "react";
import { useRoutes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Signin from "pages/Signin";
import Dashboard from "pages/Dashboard";
import FAQs from "pages/FAQs";
import Property from "pages/Property";
import Admin from "pages/Admin";
import Aboutus from "pages/Aboutus";
import Editprofile from "pages/Editprofile";
import AboutusEdit from "pages/AboutusEdit";
import SecuritySettings from "pages/SecuritySettings";
import LoadingScreen from "pages/LoadingScreen";
import Agents from "pages/Agents";
import Subscribers from "pages/Subscribers";
import Viewagent from "pages/Viewagent";
import MissionEdit from "pages/MissionEdit";
import Propertytypes from "pages/Propertytypes";
import EditdetailsOne from "pages/EditdetailsOne";
import ViewDetails from "pages/ViewDetails";
import EditDetails from "pages/EditDetails";


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Signin />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "editprofile",
      element: <Editprofile />,
    },
    {
      path: "aboutusEdit",
      element: <AboutusEdit />,
    },
    {
      path: "securitysettings",
      element: <SecuritySettings />,
    },
    {
      path: "faqs",
      element: <FAQs />,
    },
    {
      path: "aboutus",
      element: <Aboutus />,
    },
    {
      path: "active-listing",
      element: <Property />,
    },
    {
      path: "admin",
      element: <Admin />,
    },
    {
      path: "loadingscreen",
      element: <LoadingScreen />,
    },
    {
      path: "agents",
      element: <Agents />,
    },
    {
      path: "subscribers",
      element: <Subscribers />,
    },
    {
      path: "viewagent",
      element: <Viewagent />,
    },
    {
      path: "missionedit",
      element: <MissionEdit />,
    },
    {
      path: "propertytypes",
      element: <Propertytypes />,
    },
    {
      path: "editdetailsone",
      element: <EditdetailsOne />,
    },
    {
      path: "viewdetails",
      element: <ViewDetails />,
    },
    {
      path: "editdetails",
      element: <EditDetails />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
