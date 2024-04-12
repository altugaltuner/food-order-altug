import "./SettingsPage.scss";
import "../../components/ProductsManagement/ProductsManagement";
import ProductsManagement from "../../components/ProductsManagement/ProductsManagement";
import Navbar from "../../components/Navbar/Navbar";
import SettingsSidebar from "../../components/SettingsSidebar/SettingsSidebar";

function SettingsPage() {
  return (
    <main className="settings-page">
      <Navbar />
      <ProductsManagement />
      <SettingsSidebar />
    </main>
  );
}

export default SettingsPage;
