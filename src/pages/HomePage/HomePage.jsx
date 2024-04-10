import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import { useAuth } from "../../components/AuthProvider";
import "../../components/ProductsManagement/ProductsManagement";
import ProductsManagement from "../../components/ProductsManagement/ProductsManagement";

function HomePage() {
  const auth = useAuth(); // auth'u const {fireStoreUser} = useAuth() şeklinde alırsanız user bilgilerine ulaşabilirsiniz
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <ProductsManagement />
      </div>
    </div>
  );
}

export default HomePage;
