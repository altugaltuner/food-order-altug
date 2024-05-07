import React from 'react';
import "@/components/SettingsSections/AppearanceSection/AppearanceSection.scss";
import Food1 from "@/assets/food1.png";
import Food2 from "@/assets/food2.png";
import Food3 from "@/assets/food3.png";
import Food4 from "@/assets/food4.png";
import Food5 from "@/assets/food5.png";
function AppearanceParams() {
    const foodImages = [Food1, Food2, Food3, Food4, Food5, Food1, Food2, Food3, Food4];

    return (
        <main className="appearance-main">
            <h1>Appearance Page</h1>
            <div className="grid-container">
                {foodImages.map((foodImage, index) => (
                    <div className="grid-item" key={index}>
                        <img src={foodImage} alt={`Avatar ${index + 1}`} />
                    </div>
                ))}
            </div>
            <p>Appearance Page: Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Unde obcaecati suscipit, debitis officia vitae dolore accusamus eos, sequi illo nemo saepe quidem sunt! br Obcaecati temporibus sapiente distinctio iure aliquam dolorem?</p>
        </main>
    );
}

export default AppearanceParams;
