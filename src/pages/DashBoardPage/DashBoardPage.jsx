import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import OrderReports from "../../components/OrderReports/OrderReports";
import Sidebar from "@/components/Sidebar/Sidebar";
import "./DashboardPage.scss";
import { useAuth } from "../../components/AuthProvider";
import MostOrdered from "../../components/MostOrdered/MostOrdered";
import PieChart from "../../components/PieChart/PieChart";

function DashboardPage() {
    const auth = useAuth(); // auth'u const {fireStoreUser} = useAuth() şeklinde alırsanız user bilgilerine ulaşabilirsiniz
    return (
        <div>
            <div className="mainRoot">
                <Sidebar />
                <Navbar />
                <div className="mainRoot-column">
                    <DashboardHeader />
                    <OrderReports orders={orders} />
                </div>
                <div className="mainRoot-column">
                    <MostOrdered />
                    <PieChart />
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
