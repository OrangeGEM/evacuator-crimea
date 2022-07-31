import './rates.scss';
import '../Main/main.scss';

import staps1 from '../../assets/images/circle/staps/etapi_img1.png';
import staps2 from '../../assets/images/circle/staps/etapi_img2.png';
import staps3 from '../../assets/images/circle/staps/etapi_img3.png';

export default function Rates() {

    return (
        <div className="rates">
            <div className="rates-container">
                <div className="rates-header">
                    <h1 style={{ textAlign: 'center' }}> Цены </h1>
                    <p style={{ textAlign: 'center' }}>
                        Мы определим Ваш тариф, по информации, переданной службе. Полностью опишите ситуацию и мы сформируем наиболее оптимальную и выгодную услугу по Ялте.
                    </p>
                </div>
                <div className="rates-cells">
                    <table className="rates-table">
                        <tbody>
                            <tr>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }} >Автомобили до 1.5 тонн</p>
                                </td>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }} >от 1500 руб</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>Автомобили от 1,5 до 2 тонн</p>
                                </td>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>от 1700 руб</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>Автомобили от 2&nbsp;до 4 тонн</p>
                                </td>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>от 2000 руб</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>Микроавтобусы, легкие&nbsp;грузовики</p>
                                </td>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>от 2500 руб</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>Спецтехника от 2 до 3,5 тонн</p>
                                </td>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>от 2500 руб</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>Спецтехника от 3.5 до 5 тонн</p>
                                </td>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>от 3000 руб</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>Стоимость простоя эвакуатора по вине заказчика (свыше 1 часа округление с точностью до 30 минут). Нормативный простой – 20 мин. (не оплачивается).**</p>
                                </td>
                                <td>1000 руб./час.</td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>Буксировка из гаража, кювета и т.д.</p>
                                </td>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>От 1000 руб</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>Эвакуация с заблокированными колесами</p>
                                </td>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>от 500 руб/одно колесо</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>Эвакуация за пределами г. Ялты до 2,5&nbsp;тонн</p>
                                </td>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>50 руб.00 коп/км + базовый тариф</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>Эвакуация за пределами г. Ялты свыше&nbsp;2,5&nbsp;тонн</p>
                                </td>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>60 руб.00 коп/км + базовый тариф</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>Отказ от эвакуации ***</p>
                                </td>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>1000 руб</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>Переадресация****</p>
                                </td>
                                <td>
                                    <p className="wb-stl-normal" style={{ margin: 0 }}>500 руб</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
        </div>
    )
}