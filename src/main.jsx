import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import NavigationBar from "./components/NavigationBar";
import TopPage from "./components/TopPage";
import DgMission from "./components/DgMission";
import ComplexEnvironments from "./components/ComplexEnvironments";
import ManagementConsulting from "./components/ManagementConsulting";
import SAPConsulting from "./components/SAPConsulting";
import Achievements from "./components/Achievements";
import Testimonies from "./components/Testimonies";
import Customers from "./components/Customers";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <NavigationBar />
      <TopPage />
      <DgMission />
      <ComplexEnvironments />
      <ManagementConsulting />
      <SAPConsulting />
      <Achievements />
      <Testimonies />
      <Customers />
      <Footer />
    </Suspense>
  </React.StrictMode>
);
