import './contacts.scss';
import prem4 from '../../assets/images/circle/choice/img_prem4.png';

export default function Contacts() {

    return (
        <div className="contacts">
            <div className="contacts-content">
                <div className="content-text">
                    <h1 style={{ textAlign: "center" }}>
                        <span style={{ fontSize: "18pt", color: "#000000" }}>
                            Телефон:&nbsp;
                        </span>
                    </h1>
                    <p style={{ textAlign: "center" }}>
                        <span style={{ fontSize: "18pt", color: "#000000" }}><strong><br />
                            +7 (978) 045-50-60</strong></span>
                    </p>
                    <p style={{ textAlign: "center" }}>
                        <span style={{ fontSize: "18pt", color: "#000000" }}>Работаем круглосуточно и без
                        </span>
                    </p>
                    <p style={{ textAlign: "center" }}> <span style={{ fontSize: "18pt", color: "#000000" }}>выходных.
                    </span>
                    </p >
                    <p style={{ textAlign: "center" }}> <span style={{ fontSize: "18pt", color: "#000000" }}>Звоните, и мы Вас</span><span style={{ color: "#03499a", fontSize: "18pt" }}> <a href="../" style={{ color: "#FF6600", textDecoration: "none" }}>эвакуируем!</a></span></p >
                    <p>
                        <img src={prem4}/>
                    </p>
                </div >
            </div >
        </div >
    )
}