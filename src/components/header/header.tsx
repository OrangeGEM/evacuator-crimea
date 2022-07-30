import './header.scss';

import { Link, useHref } from 'react-router-dom';

export default function Header() {

    return (
        <header className="header">
            <div className="header-content">
                <div className="header-title"> Эвакуатор Ялта </div>
                <nav>
                    <Link to="/" className="header-navlink"> СТОИМОСТЬ </Link>
                    <Link to="/" className="header-navlink"> СОТРУДНИЧЕСТВО </Link>
                    <Link to="/" className="header-navlink"> О КОМПАНИИ </Link>
                    <Link to="/" className="header-navlink"> КОНТАКТЫ </Link>
                </nav>
            </div>
        </header>
    )
}