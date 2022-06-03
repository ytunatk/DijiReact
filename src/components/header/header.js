import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header className='header'>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> <span>LOGO</span> </Link >
                    </li>
                    <li className='li_main'>
                        <div>
                            <Link to="/"> <span>Ana Sayfa</span></Link >
                        </div>
                        <div>
                            <div class="dropdown">
                                <span>Kategoriler</span>
                                <div class="dropdown-content">
                                    <ul>
                                        <li>
                                            <Link to="/"> test2</Link >
                                        </li>
                                        <li>
                                            <Link to="/"> test2</Link >
                                        </li>
                                        <li>
                                            <Link to="/"> test2</Link >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div></div>
                        <div></div>

                    </li>
                </ul>

            </nav>
        </header>
    );
}

export default Header