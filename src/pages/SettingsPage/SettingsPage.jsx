import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SettingsPage.scss";
import ProductsManagement from "../../components/ProductsManagement/ProductsManagement";
import Navbar from "../../components/Navbar/Navbar";
import SettingsSidebar from "../../components/SettingsSidebar/SettingsSidebar";
import AppearanceParams from "../../components/AppearanceParams/AppearanceParams";
import RestaurantParams from "../../components/RestaurantParams/RestaurantParams";

import OrderPaymentPage from "@/components/OrderPaymentPage/OrderPaymentPage";
import MostOrdered from "@/components/MostOrdered/MostOrdered";
import PieChart from "@/components/PieChart/PieChart";
import AboutUsParams from "@/components/AboutUsParams/AboutUsParams";
import OrderReports from "@/components/OrderReports/OrderReports";
import RestaurantAPI from "@/components/RestaurantAPI/RestaurantAPI";

function SettingsPage() {
  const { tabName } = useParams(); // Extract the tabName value from the URL

  const activeComponents = {
    appearance: <AppearanceParams />,
    restaurant: <RestaurantParams />,
    products: <ProductsManagement />,
    notifications: <RestaurantAPI />,
    security: <div className="add-to-settings-sidebar"><OrderPaymentPage /><PieChart /></div>,
    configure: <OrderReports />,
    "about-us": <AboutUsParams />
  }

  console.log(activeComponents[tabName]);

  const handleButtonClick = (clickedButtonId) => {
    console.log(clickedButtonId + " çalıştı"); // Console'da hangi butonun tıklandığını gösterir
  };

  return (
    <main className="settings-page" >
      <Navbar />
      <div className="set-product-div">

        <SettingsSidebar handleButtonClick={handleButtonClick} />
        {activeComponents[tabName]}
      </div>
    </main>
  );
}

export default SettingsPage;