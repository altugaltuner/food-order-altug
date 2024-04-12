import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";

import Sidebar from "@/components/Sidebar/Sidebar";
import "./DashboardPage.scss";
import { useAuth } from "../../components/AuthProvider";

function DashboardPage() {
    const auth = useAuth(); // auth'u const {fireStoreUser} = useAuth() şeklinde alırsanız user bilgilerine ulaşabilirsiniz
    return (
        <div>
            <Sidebar />
            <div className="mainRoot">
                <DashboardHeader />
                <OrderReports orders={orders} />

            </div>
        </div>
    );
}

export default DashboardPage;
