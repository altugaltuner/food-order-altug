import "./SettingsPage.scss";
import "../../components/ProductsManagement/ProductsManagement";
import ProductsManagement from "../../components/ProductsManagement/ProductsManagement";

function SettingsPage() {
  return (
    <main className="settings-page">
      <ProductsManagement />
    </main>
  );
}

export default SettingsPage;
