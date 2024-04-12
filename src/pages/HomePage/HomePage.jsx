import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import { useAuth } from "../../components/AuthProvider";
import Navbar from "../../components/Navbar/Navbar";
import DishesMenu from "../../components/DishesMenu/DishesMenu";
import OrderConfirmation from "../../components/OrderConfirmation/OrderConfirmation";


function HomePage() {
  const auth = useAuth(); // auth'u const {fireStoreUser} = useAuth() şeklinde alırsanız user bilgilerine ulaşabilirsiniz
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <Navbar />
        <DishesMenu />
        <OrderConfirmation />
      </div>
    </div>
  );
}

export default HomePage;
