import { useState } from "react";
import "./OrderReports.scss";
import filterPhoto from "../../assets/Filter.png";

const OrderReports = ({ orders }) => {

    const orders = [
        { id: 1, customerAvatar: "Spicy seasoned seafood noodles", customerName: 2.29, menu: photo1, coldDish: false, soup: false, quantity: 1 },
        { id: 2, customerAvatar: "Salted Pasta with mushroom sauce", customerName: 2.71, menu: photo2, coldDish: false, soup: true, quantity: 1 },
        { id: 3, customerAvatar: "Beef dumpling in hot and sour soup", customerName: 2.96, menu: photo3, coldDish: true, soup: false, quantity: 1 },
        { id: 4, customerAvatar: "Healthy noodle with spinach leaf", customerName: 3.28, menu: photo2, coldDish: false, soup: true, quantity: 1 },
        { id: 5, customerAvatar: "Hot spicy fried rice with omelet", customerName: 3.05, menu: photo4, coldDish: false, soup: false, quantity: 1 },
        { id: 6, customerAvatar: "Spicy instant noodle with special omelette", customerName: 5.85, menu: photo5, coldDish: false, soup: false, quantity: 1 },
        { id: 7, customerAvatar: "Garlic Butter Shrimp Pasta", customerName: 4.52, menu: photo3, coldDish: false, soup: true, quantity: 1 },
        { id: 8, customerAvatar: "Rosemary Citrus Roasted Chicken", customerName: 4.85, menu: photo2, coldDish: true, soup: false, quantity: 1 },
        { id: 9, customerAvatar: "Smoky Barbecue Beef Brisket", customerName: 4.19, menu: photo1, coldDish: true, soup: true, quantity: 1 },
        // Diğer yemeklerin bilgileri...
    ];




    const [sortedOrders, setSortedOrders] = useState(orders);

    const statusClass = (status) => {
        return status.toLowerCase().replace(" ", "");
    };

    const handleFilterChange = (e) => {
        const filter = e.target.value;

        let sortedOrders;
        switch (filter) {
            case "highest":
                sortedOrders = [...orders].sort((a, b) => b.totalPayment - a.totalPayment);
                break;
            case "lowest":
                sortedOrders = [...orders].sort((a, b) => a.totalPayment - b.totalPayment);
                break;
            case "status":
                const statusPriority = { Completed: 1, Preparing: 2, Pending: 3 };
                sortedOrders = [...orders].sort((a, b) => {
                    return statusPriority[a.status] - statusPriority[b.status];
                });
                break;
            default:
                sortedOrders = [...orders];
        }

        setSortedOrders(sortedOrders);
    };

    return (
        <div className="order-report-container">
            <div className="order-report-header">
                <h1 className="order-report-h1">Order Report</h1>
                <div className="filter-order-btn">
                    <img className="filter-order-btn-img" src={filterPhoto} alt="filter-icon" />
                    <select onChange={handleFilterChange} className="filter-order-select">
                        <option value="">Filter Orders</option>
                        <option value="highest">Highest Payment</option>
                        <option value="lowest">Lowest Payment</option>
                        <option value="status">Status</option>
                    </select>
                </div>
            </div>
            <table className="order-reports-table">
                <thead className="border-line-order-report">
                    <tr>
                        <th className="order-report-th">Customer</th>
                        <th className="order-report-th">Menu</th>
                        <th className="order-report-th">Total Payment</th>
                        <th className="order-report-th">Status</th>
                    </tr>
                </thead>
                <tbody className="order-tbody">
                    {sortedOrders.map((order, index) => (
                        <tr className="order-body-tr" key={index}>
                            <td className="order-report-td">
                                <div className="customer-info">
                                    <img src={order.customerAvatar} alt={order.customerName} />
                                    {order.customerName}
                                </div>
                            </td>
                            <td className="order-report-td">{order.menu}</td>
                            <td className="order-report-td">${order.totalPayment}</td>
                            <td className="order-report-td">
                                <div className={`order-status ${statusClass(order.status)}`}>
                                    <span className="order-status-opacitylow">{order.status}</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderReports;
