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
            <Sidebar />
            <div className="mainRoot">
                <Navbar />
                <DashboardHeader />
                <OrderReports orders={orders} />
                <MostOrdered />
                <PieChart />
            </div>
        </div>
    );
}

export default DashboardPage;
