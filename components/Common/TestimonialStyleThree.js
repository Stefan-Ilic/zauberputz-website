import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 500,
    margin: 0,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-next'></i>"
    ],
};

const TestimonialStyleThree = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="client-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Testimonials</span>
                    <h2>Client’s Review</h2>
                    <div className="bar"></div>
                </div>

                {display ? <OwlCarousel 
                    className="client-slider owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="client-item">
                        <p><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</q></p>

                        <div className="client-info">
                            <img src="/images/client/client-1.jpg" alt="image" />
                            <h3>Jacinda Meri</h3>
                            <span>CEO & Founder</span>
                        </div>
                    </div>

                    <div className="client-item">
                        <p><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</q></p>

                        <div className="client-info">
                            <img src="/images/client/client-2.jpg" alt="image" />
                            <h3>Miraj Alex</h3>
                            <span>Chief Executive Officer</span>
                        </div>
                    </div>

                    <div className="client-item">
                        <p><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</q></p>

                        <div className="client-info">
                            <img src="/images/client/client-3.jpg" alt="image" />
                            <h3>Edward Bold</h3>
                            <span>Web Developer</span>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default TestimonialStyleThree;