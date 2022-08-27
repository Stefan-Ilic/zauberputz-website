import React, { useState } from "react";
import Link from '../../utils/ActiveLink';
import { services } from "../../constants";

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0); 
    })

    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState("false");
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="main-navbar">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                    <img src="/images/logo.svg" alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Leistungen <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link> 

                                        <ul className="dropdown-menu">
                                            {services.map((service, i) => (
                                                <li key={i} className="nav-item">
                                                    <Link href={service.link} activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">{service.name}</a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/blog">
                                            <a className="nav-link">Blog</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/faq">
                                            <a className="nav-link">FAQ</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/jobs">
                                            <a className="nav-link">Offene Stellen</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/kontakt">
                                            <a className="nav-link">Kontakt</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="others-options d-flex align-items-center">
                                <div className="option-item">
                                    <i className="search-btn flaticon-loupe" onClick={handleToggleSearchModal} ></i>
                                </div>

                                <div className="option-item">
                                    <Link href="/kontakt">
                                        <a className="default-btn">
                                            Ihr Angebot
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
 
            {/* Search Form */}
            <div className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        
                        <div className="search-overlay-close" onClick={handleToggleSearchModal}>
                            <span className="search-overlay-close-line"></span>
                            <span className="search-overlay-close-line"></span>
                        </div>

                        <div className="search-overlay-form">
                            <form>
                                <input type="text" className="input-search" placeholder="Search here..." />
                                <button type="submit">
                                    <i className='bx bx-search-alt'></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Search Form */}
        </>
    );
}

export default Navbar;