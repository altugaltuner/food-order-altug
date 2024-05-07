import "./SettingsSidebar.scss";
import { NavLink } from "react-router-dom";
const homeImg = "/src/assets/home.png";
const likeImg = "/src/assets/like.png";
const foImg = "/src/assets/foImg.png";
const notificationImg = "/src/assets/notification.png";
const lockImg = "/src/assets/lock.png";
const settingImg = "/src/assets/setting.png";

function SettingsSidebar() {

    return (
        <div className="settings-sidebar-main">

            <NavLink to="/settings/appearance" className={(object) => {
                return object.isActive ? "sidebar-div-active" : "sidebar-div";
            }} >
                <button className="sidebar-btn-class" id="appearance-sidebar-id" >
                    <h3> <img src={likeImg} alt="" srcSet="" />Appearance</h3>
                    <p>Dark and Light mode, Font size</p>
                </button>
            </NavLink>

            <NavLink to="/settings/restaurant" className={(object) => {
                return object.isActive ? "sidebar-div-active" : "sidebar-div";
            }} >
                <button className="sidebar-btn-class" id="restaurant-sidebar-id" >
                    <h3><img src={homeImg} alt="" srcSet="" />Your Restaurant</h3>
                    <p>Dark and Light mode, Font size</p>
                </button>
            </NavLink>

            <NavLink to="/settings/products" className={(object) => {
                return object.isActive ? "sidebar-div-active" : "sidebar-div";
            }} >
                <button className="sidebar-btn-class" id="products-sidebar-id">
                    <h3><img src={settingImg} alt="" srcSet="" />Product Management</h3>
                    <p>Manage your product, pricing, etc</p>
                </button>
            </NavLink>

            <NavLink to="/settings/notifications" className={(object) => {
                return object.isActive ? "sidebar-div-active" : "sidebar-div";
            }} >
                <button className="sidebar-btn-class" id="notifications-sidebar-id">
                    <h3><img src={notificationImg} alt="" srcSet="" />Notifications</h3>
                    <p>Customize your notifications</p>
                </button>
            </NavLink>
            <NavLink to="/settings/security" className={(object) => {
                return object.isActive ? "sidebar-div-active" : "sidebar-div";
            }} >
                <button className="sidebar-btn-class" id="security-sidebar-id">
                    <h3><img src={lockImg} alt="" srcSet="" />Security</h3>
                    <p>Configure Password, PIN, etc</p>
                </button>
            </NavLink>
            <NavLink to="/settings/configure" className={(object) => {
                return object.isActive ? "sidebar-div-active" : "sidebar-div";
            }} >
                <button className="sidebar-btn-class" id="configure-sidebar-id">
                    <h3><img src={settingImg} alt="" srcSet="" />Configure</h3>
                    <p>Display new features</p>
                </button>
            </NavLink>
            <NavLink to="/settings/about-us" className={(object) => {
                return object.isActive ? "sidebar-div-active" : "sidebar-div";
            }} >
                <button className="sidebar-btn-class" id="about-us-sidebar-id">
                    <h3><img src={foImg} alt="" srcSet="" />About Me</h3>
                    <p>Find out more about me</p>
                </button>
            </NavLink>
        </div>
    );
};

export default SettingsSidebar;