import "./SettingsPage.scss";
import ProductsManagement from "../../components/ProductsManagement/ProductsManagement";
import Navbar from "../../components/Navbar/Navbar";
import SettingsSidebar from "../../components/SettingsSidebar/SettingsSidebar";

function SettingsPage() {
  return (
    <main className="settings-page">
      <Navbar />
      <SettingsSidebar />
      <ProductsManagement />
    </main>
  );
}

export default SettingsPage;
