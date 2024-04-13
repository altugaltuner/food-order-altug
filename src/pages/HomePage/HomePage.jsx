import React, { useState } from "react";

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


function HomePage() {
  const auth = useAuth(); // auth'u const {fireStoreUser} = useAuth() şeklinde alırsanız user bilgilerine ulaşabilirsiniz

  const [orders, setOrders] = useState([]);
  console.log("orders", orders);
  console.log("auth.user", auth.user);


  const handleAddToOrder = (dish) => {
    console.log("Siparişe eklenecek yemek:", dish);
    setOrders(prevOrders => {
      console.log("Mevcut siparişler:", prevOrders);
      console.log("Eklenen yeni sipariş:", dish);
      const newOrders = [...prevOrders, dish];
      console.log("Yeni sipariş listesi:", newOrders);
      return newOrders;
    });
  };

  return (

    <div>
      <div className="mainRoot">
        <Sidebar />
        <Navbar />
        <DishesMenu addToOrder={handleAddToOrder} />
        <OrderConfirmation foodItems={orders} />
        <OrderPaymentPage />
      </div>
    </div>

  );
}

export default HomePage;
