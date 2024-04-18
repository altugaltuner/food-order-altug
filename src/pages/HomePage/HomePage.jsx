import React, { createContext, useContext, useState } from "react";
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
import ProductsManagement from "../../components/ProductsManagement/ProductsManagement";
import SettingsSidebar from "../../components/SettingsSidebar/SettingsSidebar";

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
    const isAdded = orders.some((order) => order.id === dish.id);

    if (!isAdded) {
      setOrders((prevOrders) => {
        const newOrders = [...prevOrders, dish];
        console.log("Yeni siparişler:", newOrders);
        console.log("Önceki siparişler:", prevOrders);
        return newOrders;
      });
    } else {
      alert("Yemek zaten ekli");
    }
  };

  // Silme işlevi : DeleteMeal Fonksiyonu: deleteMeal fonksiyonu, aldığı id değerine göre hangi yemeğin silineceğini anlar. Fonksiyon, filter metoduyla foodItems dizisinde dolaşır ve her bir öğenin id değeri ile fonksiyona argüman olarak verilen id değerini karşılaştırır. Eşleşmeyen (yani silinmesi gerekmeyen) öğeler yeni bir dizi oluşturmak üzere kullanılır. Eşleşen öğe (silinmesi gereken yemek) bu yeni dizide yer almaz.
  const deleteMeal = (id) => {
    console.log('Silme işlemi gerçekleşti:', id);
    const newFoodItems = orders.filter(item => item.id !== id);
    console.log(newFoodItems, "NEW FOOD ITEMS");
    setOrders(newFoodItems);
  };


  // not değiştirme
  const handleCustomerNoteChange = (id, note) => {
    setOrders(
      orders.map((item) => {
        if (item.id === id) {
          return { ...item, orderNote: note };
        }
        return item;
      })
    );
    console.log(orders, "BÜTÜN ORDERS NOTLU");
  };

  return (
    <div>
      <div className="mainRoot">
        <Navbar />
        <DishesMenu addToOrder={handleAddToOrder} />
        <div className="new-div">
          <OrderConfirmation
            handleCustomerNoteChange={handleCustomerNoteChange}
            deleteMeal={deleteMeal}
            incomingFoodItems={orders}
          />
          <OrderPaymentPage />
        </div>

      </div>
    </div>
  );
}

export default HomePage;
