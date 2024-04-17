import "./SettingsPage.scss";
import ProductsManagement from "../../components/ProductsManagement/ProductsManagement";
import Navbar from "../../components/Navbar/Navbar";
import SettingsSidebar from "../../components/SettingsSidebar/SettingsSidebar";



function SettingsPage() {

  function handleAddingNewDish() {
    console.log("addingNewDish çalıştı");
  }



  return (
    <main className="settings-page">
      <Navbar />
      <SettingsSidebar />
      <ProductsManagement addingNewDish={handleAddingNewDish} />
    </main>
  );
}

export default SettingsPage;
