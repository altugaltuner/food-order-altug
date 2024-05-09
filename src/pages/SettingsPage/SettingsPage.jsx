import { useParams } from "react-router-dom";
import "./SettingsPage.scss";
import ProductsManagement from "@/components/ProductsManagement/ProductsManagement";
import Navbar from "@/components/Navbar/Navbar";
import SettingsSidebar from "@/components/SettingsSidebar/SettingsSidebar";
import AppearanceSection from "@/components/SettingsSections/AppearanceSection/AppearanceSection";
import RestaurantSection from "@/components/SettingsSections/RestaurantSection/RestaurantSection";
import OrderPaymentPage from "@/components/OrderPaymentPage/OrderPaymentPage";
import PieChart from "@/components/PieChart/PieChart";
import AboutUsSection from "@/components/SettingsSections/AboutUsSection/AboutUsSection";
import StrapiSection from "@/components/SettingsSections/StrapiSection/StrapiSection";
import RestaurantApiSection from "@/components/SettingsSections/RestaurantApiSection/RestaurantApiSection";

function SettingsPage() {
  const { tabName } = useParams(); // Extract the tabName value from the URL

  const activeComponents = {
    appearance: <AppearanceSection />,
    restaurant: <RestaurantSection />,
    products: <ProductsManagement />,
    notifications: <RestaurantApiSection />,
    security: <div className="add-to-settings-sidebar"><OrderPaymentPage /><PieChart /></div>,
    configure: <StrapiSection />,
    "about-us": <AboutUsSection />
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