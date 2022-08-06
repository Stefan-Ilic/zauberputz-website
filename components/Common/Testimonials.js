import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 500,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    margin: 0,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-next'></i>"
    ],
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="testimonial-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="testimonial-content">
                            <span>Testimonials</span>
                            <h2>Our Client’s Review</h2>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>

                {display ? <OwlCarousel 
                    className="testimonial-slider owl-carousel owl-theme"
                    {...options}
                >  
                    <div className="testimonial-item">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="testimonial-image"></div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="testimonial-inner-content">
                                    <div className="icon">
                                        <i className="flaticon-left-quotes-sign"></i>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus  maecenas accumsan noniice Lorem Ipsum.</p>

                                    <div className="info-text">
                                        <h4>Morris Jacket</h4>
                                        <span>Web Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-item">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="testimonial-image image-two"></div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="testimonial-inner-content">
                                    <div className="icon">
                                        <i className="flaticon-left-quotes-sign"></i>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus  maecenas accumsan noniice Lorem Ipsum.</p>

                                    <div className="info-text">
                                        <h4>Mahindra jhon</h4>
                                        <span>App Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-item">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="testimonial-image image-three"></div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="testimonial-inner-content">
                                    <div className="icon">
                                        <i className="flaticon-left-quotes-sign"></i>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus  maecenas accumsan noniice Lorem Ipsum.</p>

                                    <div className="info-text">
                                        <h4>Lee Munroe</h4>
                                        <span>Web Designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Testimonials;