import "./SettingsPage.scss";
import "../../components/ProductsManagement/ProductsManagement";
import ProductsManagement from "../../components/ProductsManagement/ProductsManagement";
import Navbar from "../../components/Navbar/Navbar";

function SettingsPage() {
  return (
    <main className="settings-page">
      <Navbar />
      <ProductsManagement />
    </main>
  );
}

export default SettingsPage;
