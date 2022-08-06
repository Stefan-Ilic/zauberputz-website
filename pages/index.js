import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeFive/MainBanner';
import Features from '../components/HomeFive/Features';
import AboutContent from '../components/HomeFive/AboutContent';
import ServicesStyleTwo from '../components/Common/ServicesStyleTwo';
import DigitalExperience from '../components/Common/DigitalExperience';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import PriceTableTwo from '../components/PricingPlans/PriceTableTwo';
import TeamMemberStyleTwo from '../components/Common/TeamMemberStyleTwo';
import Testimonials from '../components/Common/Testimonials';
import WhatWeDoingBest from '../components/HomeFive/WhatWeDoingBest';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import SubscribeForm from '../components/Common/SubscribeForm';
import Partners from '../components/Common/Partners';
import Footer from '../components/_App/Footer';
import AboutUsContent from '../components/HomeOne/AboutUsContent';

const Index = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <AboutUsContent />

            <ServicesStyleTwo />

            {/* <LatestBlogPost /> */}

            <SubscribeForm />
            
            <Footer />
        </>
    )
}

export default Index;