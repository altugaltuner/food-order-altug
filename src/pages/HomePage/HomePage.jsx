import React, { useState } from "react";
import { useEffect } from "react";
import "./HomePage.scss";
import { useAuth } from "../../components/AuthProvider";
import OrderPaymentPage from "../../components/OrderPaymentPage/OrderPaymentPage";
import Sidebar from "@/components/Sidebar/Sidebar";

import Navbar from "../../components/Navbar/Navbar";
import DishesMenu from "../../components/DishesMenu/DishesMenu";
import OrderConfirmation from "../../components/OrderConfirmation/OrderConfirmation";


// şimdilik
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import OrderReports from "../../components/OrderReports/OrderReports";


import MostOrdered from "../../components/MostOrdered/MostOrdered";
import PieChart from "../../components/PieChart/PieChart";
//şimdilik son

import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import { set } from "firebase/database";


function HomePage() {
  const auth = useAuth(); // auth'u const {fireStoreUser} = useAuth() şeklinde alırsanız user bilgilerine ulaşabilirsiniz

  const [orders, setOrders] = useState([]);

  const handleAddToOrder = (dish) => {
    console.log("handleAddToOrder çalıştı, eklenen yemek:", dish);
    setOrders(prevOrders => {
      const newOrders = [...prevOrders, dish];
      console.log("Yeni siparişler:", newOrders);
      console.log("Önceki siparişler:", prevOrders);
      return newOrders;
    });
  };

  return (

    <div>
      <div className="mainRoot">
        <Sidebar />
        <Navbar />
        {/* <DishesMenu addToOrder={handleAddToOrder} />
        <OrderConfirmation incomingFoodItems={orders} />
        <OrderPaymentPage /> bunlar homepagede bulunması gereken elementler */}
        <DashboardHeader />

      </div>
    </div>

  );
}

export default HomePage;
