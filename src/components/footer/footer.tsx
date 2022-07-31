import { Link } from 'react-router-dom';
import './footer.scss';

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-widgets">
                    <div className="footer-widget">
                        <div className="widget-nav">
                            <p className="nav-element">
                                <Link to="/rates" className="nav-el"> СТОИМОСТЬ </Link>
                            </p>

                            <p className="nav-element">
                                <Link to="/cooperation" className="nav-el"> СОТРУДНИЧЕСТВО </Link>
                            </p>

                            <p className="nav-element">
                                <Link to="/about" className="nav-el"> О КОМПАНИИ </Link>
                            </p>

                            <p className="nav-element">
                                <Link to="/contracts" className="nav-el">  КОНТАКТЫ</Link>
                            </p>
                        </div>
                    </div>

                    <div className="footer-widget">
                        <div className="widget-nav">
                            <p className="nav-element" style={{ color: "#FF6600", paddingLeft: "300px" }}>
                                +7 (978) 045-50-60
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}