import './main.scss';

import row from '../../assets/images/img_polocka.png';
import road from '../../assets/images/road.png';

import evak1 from '../../assets/images/circle/evacuate/mi_evak1.png';
import evak2 from '../../assets/images/circle/evacuate/mi_evak2.png';
import evak3 from '../../assets/images/circle/evacuate/mi_evak3.png';
import evak4 from '../../assets/images/circle/evacuate/mi_evak4.png';

import prem1 from '../../assets/images/circle/choice/img_prem1.png';
import prem2 from '../../assets/images/circle/choice/img_prem2.png';
import prem3 from '../../assets/images/circle/choice/img_prem3.png';
import prem4 from '../../assets/images/circle/choice/img_prem4.png';

import serviceIcon1 from '../../assets/images/service/nashi_ycl1.png';
import serviceIcon2 from '../../assets/images/service/nashi_ycl2.png';
import serviceIcon3 from '../../assets/images/service/nashi_ycl3.png';
import serviceIcon4 from '../../assets/images/service/nashi_ycl4.png';

import staps1 from '../../assets/images/circle/staps/etapi_img1.png';
import staps2 from '../../assets/images/circle/staps/etapi_img2.png';
import staps3 from '../../assets/images/circle/staps/etapi_img3.png';

import Choice from 'components/choice/choice';

export default function Main() {



    return (
        <>
            <div className="main">
                <div className="main-img">
                    <div className="main-content">
                        <div className="content-title">
                            <h1> <span> Эвакуатор круглосуточно </span> </h1>
                        </div>
                        <div className="content-line">
                            <img src={row} alt="Полоска" sizes="(max-width: 400px) 100vw, 400px" />
                        </div>
                        <div className="content-text">
                            Cрочная эвакуация авто и мото техники
                            <br />
                            Оказание помощи на дороге
                            <br />
                            Перевозка новых авто
                        </div>
                        <div className="content-phone">
                            <p>
                                <strong>
                                    <span>
                                        <a style={{
                                            color: "#FF6600",
                                            textDecoration: "none"
                                        }} href="tel:+79780151414"> +7 (978) 015-14-14 </a>
                                    </span>
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <Choice
                title="МЫ ЭВАКУИРУЕМ"
                imageArray={[evak1, evak2, evak3, evak4]}
                bottomText={["Эвакуация техники", "Эвакуация автомобилей", "Эвакуация внедорожников", "Эвакуация спецтехники"]}
                isEvacuateImage={true}
            />

            <div className="service-container">
                <div className="service-title-container">
                    <div className="service-title"> НАШИ УСЛУГИ </div>
                    <img src={row} style={{ width: "64%", height: "24px" }} />
                </div>

                <div className="service-icons">
                    <div className="icon-container">
                        <div style={{ marginBottom: 0, margin: "auto", textAlign: "center" }}>
                            <div style={{ marginBottom: "30px", textAlign: "center" }}>
                                <img src={serviceIcon1} style={{ maxWidth: "165px" }} />
                            </div>
                            <div className="icon-text">
                                <h4 style={{ margin: "0px", paddingBottom: "5px", fontWeight: "normal" }}> Эвакуация автомобиля </h4>
                                <p style={{ margin: "0px" }}>
                                    от
                                    <span style={{ color: "#ff6600" }}> 1000 </span>
                                    руб.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="icon-container">
                        <div style={{ marginBottom: 0, margin: "auto", textAlign: "center" }}>
                            <div style={{ marginBottom: "30px", textAlign: "center" }}>
                                <img src={serviceIcon2} style={{ maxWidth: "165px" }} />
                            </div>
                            <div className="icon-text">
                                <h4 style={{ margin: "0px", paddingBottom: "5px", fontWeight: "normal" }}> Замена колеса </h4>
                                <p style={{ margin: "0px" }}>
                                    от
                                    <span style={{ color: "#ff6600" }}> 500 </span>
                                    руб.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="icon-container">
                        <div style={{ marginBottom: 0, margin: "auto", textAlign: "center" }}>
                            <div style={{ marginBottom: "30px", textAlign: "center" }}>
                                <img src={serviceIcon3} style={{ maxWidth: "165px" }} />
                            </div>
                            <div className="icon-text">
                                <h4 style={{ margin: "0px", paddingBottom: "5px", fontWeight: "normal" }}> Подвоз топлива </h4>
                                <p style={{ margin: "0px" }}>
                                    от
                                    <span style={{ color: "#ff6600" }}> 500 </span>
                                    руб.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="icon-container" style={{ marginRight: 0 }}>
                        <div style={{ marginBottom: 0, margin: "auto", textAlign: "center" }}>
                            <div style={{ marginBottom: "30px", textAlign: "center" }}>
                                <img src={serviceIcon4} style={{ maxWidth: "165px" }} />
                            </div>
                            <div className="icon-text">
                                <h4 style={{ margin: "0px", paddingBottom: "5px", fontWeight: "normal" }}> Запуск двигателя </h4>
                                <p style={{ margin: "0px" }}>
                                    от
                                    <span style={{ color: "#ff6600" }}> 500 </span>
                                    руб.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="work">
                <div className="work-content">
                    <div className="work-left">
                        <div className="left-title"> РАБОТАЕМ ПО ВСЕМУ КРЫМУ </div>
                        <div style={{ wordWrap: "break-word", textAlign: "left" }}>
                            <p style={{ fontSize: "14px", lineHeight: "1.7em" }}>
                                Мы всегда рядом и готовы эвакуировать
                                Ваш автомобиль из любой точки и в любой ситуации.
                                Территориально наша компания находится в г. Ялта,
                                но мы готовы прийти к Вам на помощь по всему Крыму.
                                Кроме того, мы осуществляем доставку по всей РФ. Мы
                                работаем оперативно и слаженно – в случае проблем на дороге
                                приедем быстро и окажем всю необходимую помощь.Просто позвоните
                                нам и расскажите, где Вы находитесь – и мы уже в пути!
                                Доброй дороги!
                            </p>
                        </div>
                    </div>
                    <div className="work-right">
                        <img src={road} style={{ maxWidth: "100%", height: "auto" }} />
                    </div>
                </div>
            </div>

            <Choice
                title="НАШИ ПРЕИМУЩЕСТВА"
                imageArray={[prem1, prem2, prem3, prem4]}
                bottomText={["Выезд в течении 20 минут", "Наличный и Безналичный расчет", "Работаем 24 часа без выходных", "Работаем по всему крыму"]}
                isEvacuateImage={false}
            />

            <div className="instruction">
                <div className="instruction-container">
                    <div className="instruction-content">
                        <div className="instruction-text" style={{ marginRight: 0, width: "100%" }}>
                            <div style={{ font: "bold 185%/1 Arial", textAlign: "left" }}>
                                <p style={{ margin: 0 }}>
                                    <span style={{ color: "#FF6000" }}> ИНСТРУКЦИЯ </span>
                                    <br />
                                    <span style={{ color: "#FF6000" }}> ПО ВЫЗОВУ ЭВАКУАТОРА </span>
                                </p>
                            </div>
                        </div>

                        <div className="service">
                            <p> СООБЩИТЕ СЛУЖБЕ: </p>
                            <p style={{ marginBottom: 0 }}>
                                <span style={{ color: "#ff6600" }}>1.</span> ФИО, контактный телефон<br />
                                <span style={{ color: "#ff6600" }}>2.</span> Марка автомобиля, госномер, цвет<br />
                                <span style={{ color: "#ff6600" }}>3.</span> Характер и степень повреждений<br />
                                <span style={{ color: "#ff6600" }}>4.</span> Местонахождение авто и пункт его доставки
                            </p>
                        </div>

                        <div className="end-text">
                            <p style={{ marginTop: 0 }}>
                                Сообщив нам эти сведения, вы можете быть уверены,<br />
                                что Ваш автомобиль будет транспортирован<br />
                                максимально быстро
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="staps">
                <div className="staps-title">
                    ЭТАПЫ РАБОТЫ
                </div>

                <div className="staps-icons">
                    <div className="staps-icon">
                        <div className="icon-mod">
                            <div className="icon-container">
                                <img src={staps1} style={{ maxWidth: "165px" }} />
                            </div>
                            <div>
                                <p>
                                    <span style={{ color: "#ff7e00" }}>01.</span> ВЫЕЗД В ТЕЧЕНИИ<br />
                                    20 МИНУТ
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="staps-icon">
                        <div className="icon-mod">
                            <div className="icon-container">
                                <img src={staps2} style={{ maxWidth: "165px" }} />
                            </div>
                            <div>
                                <p>
                                    <span style={{ color: "#ff7e00" }}>02.</span> РАБОТАЕМ 24 ЧАСА<br />
                                    БЕЗ ВЫХОДНЫХ</p>
                            </div>
                        </div>
                    </div>

                    <div className="staps-icon" style={{ marginRight: "0" }}>
                        <div className="icon-mod">
                            <div className="icon-container">
                                <img src={staps3} style={{ maxWidth: "165px" }} />
                            </div>
                            <div>
                                <p>
                                    <span style={{ color: "#ff7e00" }}>03.</span> ПЕРЕВОЗИМ АВТО<br />
                                    ТОЧНО ПО АДРЕСУ
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}