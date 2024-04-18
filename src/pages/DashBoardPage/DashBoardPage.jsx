import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import OrderReports from "../../components/OrderReports/OrderReports";
import { useAuth } from "../../components/AuthProvider";
import MostOrdered from "../../components/MostOrdered/MostOrdered";
import PieChart from "../../components/PieChart/PieChart";
import Navbar from "../../components/Navbar/Navbar";
import "../DashBoardPage/DashBoardPage.scss";

function DashboardPage() {
    const auth = useAuth(); // auth'u const {fireStoreUser} = useAuth() şeklinde alırsanız user bilgilerine ulaşabilirsiniz
    return (
        <div>
            <div className="mainRoot">
                <Navbar />
                <div className="mainContent">
                    <DashboardHeader />
                    <OrderReports />
                </div>
                <div className="secondDiv">
                    <MostOrdered />
                    <PieChart />
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
