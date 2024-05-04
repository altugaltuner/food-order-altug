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

function SettingsPage() {

  function handleAddingNewDish() {
    console.log("addingNewDish çalıştı");
  }
  //param kısmı
  const { tabName } = useParams(); // Extract the tabName value from the URL
  const [activeComponent, setActiveComponent] = useState(tabName || "products");

  const handleButtonClick = (clickedButtonId) => {
    console.log(clickedButtonId + " çalıştı"); // Console'da hangi butonun tıklandığını gösterir
    if (clickedButtonId === "appearance-sidebar-id") {
      setActiveComponent("appearance"); // Tıklanan buton "appearance" ise, görüntülenecek bileşeni güncelle
    }
    else if (clickedButtonId === "restaurant-sidebar-id") {
      setActiveComponent("restaurant"); // Tıklanan buton "restaurant" ise, görüntülenecek bileşeni güncelle
    }
    else if (clickedButtonId === "products-sidebar-id") {
      setActiveComponent("products"); // Tıklanan buton "products" ise, görüntülenecek bileşeni güncelle
    }
    else if (clickedButtonId === "notifications-sidebar-id") {
      setActiveComponent("notifications"); // Tıklanan buton "notifications" ise, görüntülenecek bileşeni güncelle
    }
    else if (clickedButtonId === "security-sidebar-id") {
      setActiveComponent("security"); // Tıklanan buton "security" ise, görüntülenecek bileşeni güncelle
    }
    else if (clickedButtonId === "configure-sidebar-id") {
      setActiveComponent("configure"); // Tıklanan buton "configure" ise, görüntülenecek bileşeni güncelle
    }
    else if (clickedButtonId === "about-us-sidebar-id") {
      setActiveComponent("about-us"); // Tıklanan buton "about-us" ise, görüntülenecek bileşeni güncelle
    }
  }

  useEffect(() => {
    setActiveComponent(tabName);
  }, [tabName]);

  return (
    <main className="settings-page">
      <Navbar />
      <div className="set-product-div">

        <SettingsSidebar handleButtonClick={handleButtonClick} />
        {activeComponent === "appearance" && <AppearanceParams />}
        {activeComponent === "restaurant" && <RestaurantParams />}
        {activeComponent === "products" && <ProductsManagement addingNewDish={handleAddingNewDish} />}
        {activeComponent === "notifications" && <AppearanceParams />}
        {activeComponent === "security" && <div className="add-to-settings-sidebar"><OrderPaymentPage /><PieChart /></div>}
        {activeComponent === "configure" && <OrderReports />}
        {activeComponent === "about-us" && <AboutUsParams />}
      </div>
    </main>
  );
}

export default SettingsPage;