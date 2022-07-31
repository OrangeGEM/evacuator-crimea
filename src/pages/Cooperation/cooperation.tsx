import { Link } from 'react-router-dom';
import './cooperation.scss';


import prem1 from '../../assets/images/circle/choice/img_prem1.png';
import prem2 from '../../assets/images/circle/choice/img_prem2.png';
import prem3 from '../../assets/images/circle/choice/img_prem3.png';
import prem4 from '../../assets/images/circle/choice/img_prem4.png';
import Choice from 'components/choice/choice';

export default function Cooperation() {

    return (
        <>
            <div className="cooperation">
                <div className="cooperation-container">
                    <div className="cooperation-container-column">
                        <div className="cooperation-table-container">

                            <h1 style={{ textAlign: 'center' }}>Условия сотрудничества</h1>
                            <p>Наша компания ценит взаимовыгодные и взаимополезные партнёрские отношения.</p>
                            <p>Предлагаем варианты сотрудничества:</p>
                            <ul id="coop-id">
                                <li>Для частных лиц. Мы моментально поможем <Link to="/" className="link">эвакуировать ваш транспорт</Link> из самых сложных ситуаций.</li>
                                <li>Службам эвакуации и частным эвакуаторам. Чтобы вместе сделать услугу лучше, быстрее и оперативнее.</li>
                                <li>Взаимные рекламные отношения для служб автосервиса и прочих обслуживающих транспорт организаций</li>
                                <li>Автосалонам,&nbsp;для продажи и перевозки автомобилей.</li>
                                <li>Муниципальным организациям.</li>
                                <li>Услуга трезвый водитель — мы отвезем Ваше авто в случае, если Вы по каким-либо причинам не можете этого сделать.</li>
                                <li>И многое другое. Звоните, и мы найдем с Вами причины действовать вместе!</li>
                            </ul>
                            <p><strong> +7 (978) 015 14 14</strong></p>

                        </div>
                    </div>
                </div>
            </div>

            <Choice
                title="НАШИ ПРЕИМУЩЕСТВА"
                imageArray={[prem1, prem2, prem3, prem4]}
                bottomText={["Выезд в течении 20 минут", "Наличный и Безналичный расчет", "Работаем 24 часа без выходных", "Работаем по всему крыму"]}
                isEvacuateImage={false}
            />
        </>
    )
}