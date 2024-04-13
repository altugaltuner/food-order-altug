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
  console.log("orders", orders);
  console.log("auth.user", auth.user);


  const handleAddToOrder = (dish) => {
    console.log("handleAddToOrder çalıştı, eklenen yemek:", dish);
    setOrders(prevOrders => {
      const newOrders = [...prevOrders, dish];
      console.log("Yeni siparişler:", newOrders);
      return newOrders;
    });
  };

  const UpdatedOrders = [
    { id: 1, name: "Spicy seasoned seafood noodles", price: 2.29, imageSrc: "../src/assets/food1.png", quantity: 1, totalPrice: 0, OrderNote: "" },
    { id: 2, name: "Salted Pasta with mushroom sauce", price: 2.69, imageSrc: "../src/assets/food1.png", quantity: 1, totalPrice: 0, OrderNote: "" },
    { id: 3, name: "Beef Dumpling in hot and sour soup", price: 2.99, imageSrc: "../src/assets/food1.png", quantity: 1, totalPrice: 0, OrderNote: "" },
  ]

  const as = (dish) => {
    console.log("as çalıştı, eklenen yemek:", dish);
    setOrders(prevOrders => {
      const newOrders = [...prevOrders, dish];
      console.log("Yeni siparişler:", newOrders);
      return newOrders;
    });
  };



  return (

    <div>
      <div className="mainRoot">
        <Sidebar />
        <Navbar />
        <DishesMenu addToOrder={handleAddToOrder} />
        <OrderConfirmation as={as} />
        <OrderPaymentPage />
      </div>
    </div>

  );
}

export default HomePage;
