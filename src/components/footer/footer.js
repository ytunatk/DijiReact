import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_nav'>
                <div className='categorys'>
                    <span>Kategoriler</span>
                    <Link to="/">aksiyon</Link>
                    <Link to="/">macera</Link>
                    <Link to="/">falan</Link>
                    <Link to="/">filan</Link>
                </div>
            </div>
            <div className='logo_field'>
                <Link to="/"><span>LOGO</span></Link>
                <span>©1995–2022</span>
                <Link to="/"><span>LOGO</span></Link>
            </div>
        </footer>
    );
}

export default Footer