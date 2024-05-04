import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SettingsPage.scss";
import ProductsManagement from "../../components/ProductsManagement/ProductsManagement";
import Navbar from "../../components/Navbar/Navbar";
import SettingsSidebar from "../../components/SettingsSidebar/SettingsSidebar";
import AppearanceParams from "../../components/AppearanceParams/AppearanceParams";

function SettingsPage() {

  function handleAddingNewDish() {
    console.log("addingNewDish çalıştı");
  }
  //param kısmı
  const { tabName } = useParams(); // Extract the tabName value from the URL

  const [activeComponent, setActiveComponent] = useState(tabName || "products");

  useEffect(() => {
    setActiveComponent(tabName);
  }, [tabName]);

  return (
    <main className="settings-page">
      <Navbar />
      <div className="set-product-div">
        {/* <p>{makeActiveDiv}</p> */}
        <SettingsSidebar />
        {activeComponent === "products" && <ProductsManagement addingNewDish={handleAddingNewDish} />}
        {activeComponent === "appearance" && <AppearanceParams />}
      </div>
    </main>
  );
}

export default SettingsPage;