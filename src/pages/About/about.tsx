import './about.scss';

import icon from '../../assets/images/circle/choice/img_prem3.png';
import { Link } from 'react-router-dom';

export default function About() {

    return (
        <div className="about">
            <article id="about-post">
                <div className="about-content">
                    <div className="content-container">
                        <h1 style={{ textAlign: "center" }}>Услуга эвакуатора в Ялте<br/>
                            <img className="about-image" src={icon} alt="img_prem3" width="120" height="120" />

                        </h1>
                        <p style={{ textAlign: "left" }} className="about-text">Случаи на дороге — непредсказуемы. Никогда не знаешь, что может произойти с машиной на том или ином участке дороге. Это могут быть ДТП, поломки, съезды в кювет и другие причины для <Link to="/" className="link">вызова эвакуатора</Link>.</p>
                        <p style={{ textAlign: "left" }} className="about-text">Наша служба работает&nbsp;на рынке эвакуации на протяжении многих лет, цены на наши услуги — дешевле рыночных, а график работы — круглосуточный, без выходных и перерывов. Транспорт прибывает на Ваш вызов не позднее, чем через 20 минут &nbsp;после заказа.</p>
                        <p style={{ textAlign: "left" }} className="about-text">В арсенале имеется целый парк техники, оборудованные кранами манипуляторами, лёбедками, сдвижными платформами и многим другим, управляемые профессиональными водителями, которые обеспечат кормфортную доставку Вашего транспорта, от мотоцикла до крупной спецтехники.</p>
                        <p style={{ textAlign: "left" }} className="about-text">Мы&nbsp; работаем по территории Ялты&nbsp;и всего Крыма.&nbsp;Звоните нам мы выручим Вас и Ваше авто!</p>
                    </div>
                </div>
            </article>
        </div>
    )
}