import './header.scss';

import { Link, useHref } from 'react-router-dom';

export default function Header() {

    return (
        <header className="header">
            <div className="header-content">
                <div className="header-title">
                    <Link to="/" className="header-navlink" style={{color:"#FF6600"}}>  Эвакуатор Ялта </Link>

                </div>
                <nav>
                    <Link to="/rates" className="header-navlink"> СТОИМОСТЬ </Link>
                    <Link to="/cooperation" className="header-navlink"> СОТРУДНИЧЕСТВО </Link>
                    <Link to="/about" className="header-navlink"> О КОМПАНИИ </Link>
                    <Link to="/contracts" className="header-navlink"> КОНТАКТЫ </Link>
                </nav>
            </div>
        </header>
    )
}