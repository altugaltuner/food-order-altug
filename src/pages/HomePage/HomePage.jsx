import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import { useAuth } from "../../components/AuthProvider";
import DishesMenu from "../../components/DishesMenu/DishesMenu";
import Navbar from "../../components/Navbar/Navbar";


function HomePage() {
  const auth = useAuth(); // auth'u const {fireStoreUser} = useAuth() şeklinde alırsanız user bilgilerine ulaşabilirsiniz
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <Navbar />
        <DishesMenu />
      </div>
    </div>
  );
}

export default HomePage;
