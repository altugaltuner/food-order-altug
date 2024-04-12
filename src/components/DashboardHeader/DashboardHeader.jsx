import { useState } from "react";
import "./DashboardHeader.scss";


function DashboardHeader() {

    const iconCard = "../../src/assets/iconCard.png"
    const iconDolar = "../../src/assets/iconDolar.png"
    const iconDownArrow = "../../src/assets/iconDownArrow.png"
    const iconPeople = "../../src/assets/iconPeople.png"
    const iconUpArrow = "../../src/assets/iconUpArrow.png"

    // toplam değerlere kod yazılacak...Henüz bitmedi.
    return (


        <div className="dashboard-header-main">

            <div className="dashboard-part">
                <div className="logos-dashboard">
                    <img className="icon-dolar" src={iconDolar} alt="logo" />
                    <p className="percentage-dashboard-text">+32.40%</p>
                    <img className="icon-up-arrow" src={iconUpArrow} alt="" />
                </div>
                <h3 className="price-of-dashboard">$10,243.00</h3>
                <p className="dashboard-text">Total Revenue</p>
            </div>

            <div className="dashboard-part">
                <div className="logos-dashboard">
                    <img className="icon-dolar" src={iconCard} alt="logo" />
                    <p className="percentage-dashboard-text">-12.40%</p>
                    <img className="icon-up-arrow" src={iconDownArrow} alt="" />
                </div>
                <h3 className="price-of-dashboard">23,456</h3>
                <p className="dashboard-text">Total Dish Ordered</p>
            </div>

            <div className="dashboard-part">
                <div className="logos-dashboard">
                    <img className="icon-dolar" src={iconPeople} alt="logo" />
                    <p className="percentage-dashboard-text">+2.40%</p>
                    <img className="icon-up-arrow" src={iconUpArrow} alt="" />
                </div>
                <h3 className="price-of-dashboard">1,234</h3>
                <p className="dashboard-text">Total Customer</p>
            </div>
        </div>

    );
}

export default DashboardHeader;
