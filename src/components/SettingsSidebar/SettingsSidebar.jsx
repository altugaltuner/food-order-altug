import "./SettingsSidebar.scss";

function SettingsSidebar() {

    const homeImg = "/src/assets/home.png";
    const likeImg = "/src/assets/like.png";
    const foImg = "/src/assets/foImg.png";
    const notificationImg = "/src/assets/notification.png";
    const lockImg = "/src/assets/lock.png";
    const settingImg = "/src/assets/setting.png";

    function makeActiveDiv(e) {
        e.stopPropagation(); // Olayın kabarcıklanmasını durdurur, 2 kere konsola yazdırmayı engeller
        console.log("clicked");

        // Tıklanan öğeden en yakın '.sidebar-div' öğesini bul
        const targetDiv = e.target.closest('.sidebar-div');

        if (targetDiv) {
            // Tüm '.sidebar-div' elementlerini seç ve arkaplanlarını varsayılan renge ayarla
            const allDivs = document.querySelectorAll('.sidebar-div');
            allDivs.forEach(div => {
                div.style.backgroundColor = '#1F1D2B'; // Diğer div'lerin arkaplanını varsayılan renge ayarla
                div.querySelector('h3').style.color = '#fff'; // Diğer div'lerin h3'ün rengini beyaz yap
            });

            // Tıklanan '.sidebar-div' öğesinin arkaplanını kahverengi yap
            targetDiv.style.backgroundColor = '#EA7C6942';
            targetDiv.querySelector('h3').style.color = '#EA7C69'; // h3'ün rengini yeşil yap
        }
    }

    return (
        <div>
            <div className="settings-sidebar-main">

                <button className="sidebar-div" onClick={makeActiveDiv} id="appearance-sidebar-id" tabIndex={0}>
                    <h3> <img src={likeImg} alt="" srcSet="" />Appearance</h3>
                    <p>Dark and Light mode, Font size</p>
                </button>

                <button className="sidebar-div" onClick={makeActiveDiv} id="restaurant-sidebar-id">
                    <h3><img src={homeImg} alt="" srcSet="" />Your Restaurant</h3>
                    <p>Dark and Light mode, Font size</p>
                </button>

                <button className="sidebar-div" onClick={makeActiveDiv} id="product-sidebar-id">
                    <h3><img src={settingImg} alt="" srcSet="" />Product Management</h3>
                    <p>Manage your product, pricing, etc</p>
                </button>

                <button className="sidebar-div" onClick={makeActiveDiv} id="notifications-sidebar-id">
                    <h3><img src={notificationImg} alt="" srcSet="" />Notifications</h3>
                    <p>Customize your notifications</p>
                </button>

                <button className="sidebar-div" onClick={makeActiveDiv} id="security-sidebar-id">
                    <h3><img src={lockImg} alt="" srcSet="" />Security</h3>
                    <p>Configure Password, PIN, etc</p>
                </button>

                <button className="sidebar-div" onClick={makeActiveDiv} id="configure-sidebar-id">
                    <h3><img src={settingImg} alt="" srcSet="" />Configure</h3>
                    <p>Display new features</p>
                </button>

                <button className="sidebar-div" onClick={makeActiveDiv} id="about-us-sidebar-id">
                    <h3><img src={foImg} alt="" srcSet="" />About Us</h3>
                    <p>Find out more about Posly</p>
                </button>
            </div>
        </div>
    );
};

export default SettingsSidebar;