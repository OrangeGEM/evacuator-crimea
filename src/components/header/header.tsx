import './header.scss';

import evacuator from 'assets/images/evacuator.png';

export default function Header() {

    return (
        <header className="header">
            <img src={evacuator} alt=""/>
        </header>
    )
}