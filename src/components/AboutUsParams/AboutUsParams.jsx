import "@/components/AboutUsParams/AboutUsParams.scss";
import AltugCV from "@/assets/AltugCV.pdf";

function AboutUsParams() {

    return (
        <div className="about-us-main">
            <embed src={AltugCV} type="application/pdf" className="embedCV" />
        </div>
    );
};

export default AboutUsParams;