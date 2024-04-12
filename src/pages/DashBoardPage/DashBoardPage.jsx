import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import OrderReports from "../../components/OrderReports/OrderReports";
import Sidebar from "@/components/Sidebar/Sidebar";
import "./DashboardPage.scss";
import { useAuth } from "../../components/AuthProvider";
import MostOrdered from "../../components/MostOrdered/MostOrdered";

function DashboardPage() {
    const auth = useAuth(); // auth'u const {fireStoreUser} = useAuth() şeklinde alırsanız user bilgilerine ulaşabilirsiniz
    return (
        <div>
            <Sidebar />
            <div className="mainRoot">
                <DashboardHeader />
                <OrderReports orders={orders} />
                <MostOrdered />
            </div>
        </div>
    );
}

export default DashboardPage;
