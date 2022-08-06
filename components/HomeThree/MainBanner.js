import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    items: 1,
    autoplay: false,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-next'></i>"
    ],
};

const MainBanner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="home-wrapper-area">
            {display ? <OwlCarousel 
                className="home-slides owl-carousel owl-theme"
                {...options}
            > 
                <div className="main-slider-item">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="main-slider-content">
                                            <h1>We Move The  Digital Industrial Forward</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                            
                                            <div className="slider-btn">
                                                <Link href="/contact-1">
                                                    <a className="default-btn">
                                                        Get Services
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="col-lg-6">
                                        <div className="main-slider-image"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-slider-item">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="main-slider-content">
                                            <h1>We Provide Digital Marketing Solutions</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                            
                                            <div className="slider-btn">
                                                <Link href="/contact-1">
                                                    <a className="default-btn">
                                                        Get Services
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="col-lg-6">
                                        <div className="main-slider-image two"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-slider-item">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="main-slider-content">
                                            <h1>Digital Agency with Excellence Service</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                            
                                            <div className="slider-btn">
                                                <Link href="/contact-1">
                                                    <a className="default-btn">
                                                        Get Services
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="col-lg-6">
                                        <div className="main-slider-image three"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel> : ''}

            <div className="main-slider-shape">
                <div className="shape-1">
                    <img src="/images/main-slider/slider-shape-1.png" alt="image" />
                </div>
                <div className="shape-2">
                    <img src="/images/main-slider/slider-shape-2.png" alt="image" />
                </div>
                <div className="shape-3">
                    <img src="/images/main-slider/slider-shape-3.png" alt="image" />
                </div>
                <div className="shape-4">
                    <img src="/images/main-slider/slider-shape-4.png" alt="image" />
                </div>
                <div className="shape-5">
                    <img src="/images/main-slider/slider-shape-5.png" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default MainBanner;