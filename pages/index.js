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
import { getAllPosts } from '../posts'
import Head from 'next/head';

export async function getStaticProps() {
    const posts = getAllPosts();
    return {
        props: {
            posts,
        },
    }
}

const Index = ({ posts }) => {
    return (
        <>
            <Head>
                <title>Hausbetreuung Wien</title>
                <meta name="description" content="Hausbetreuung Wien - Zauberputz. Ihr Spezialist für Hausbetreuung, Grünflächenbetreuung/Gartenbetreuung und Winterdienst/Schneeräumung in Wien und Umgebung." />
            </Head>

            <Navbar />

            <MainBanner />

            <AboutUsContent />

            <ServicesStyleTwo />

            <LatestBlogPost posts={posts} />

            <SubscribeForm />
            
            <Footer />
        </>
    )
}

export default Index;