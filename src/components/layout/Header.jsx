import React, { useEffect, useRef, useState } from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import logoAssigan from "../../asset/assigan.png";

function Header() {

    const navRef = useRef();
    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200) { 
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const headerClassName = isFixed ? 'header fixed-header' : 'header';
  return (
    <div> 
 <div className={headerClassName}>
            <div className='logo'>
                <img className='logo_img' src={logoAssigan} alt="logo assigan" />
            </div>
            <div ref={navRef} className='navbar'>
                <ul className='menu'>
                    <Link className='nav_link' to={"/"} >Accueil</Link>
                    <Link className='nav_link' to={"/guide"}>Guide d'utilisation </Link>
                    <Link className='nav_link' to={"/contact"}>Contact</Link>
                </ul>
            </div>
            <button onClick={showNavbar} className='nav_btn'>
                <box-icon name='menu' color='#ffffff' ></box-icon>
            </button>
            <div className='button'>
                <button className='btn'>Download</button>
            </div>
        </div>
    </div>
  )
}

export default Header