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
                <title>Hausbetreuung/Gartenbetreuung/Winterdienst Wien</title>
                <meta name="description" content="Hausbetreuung Wien - Zauberputz. Ihr Spezialist für Hausbetreuung, Grünflächenbetreuung/Gartenbetreuung und Winterdienst/Schneeräumung in Wien und Umgebung." />
                <link rel="preload" fetchpriority="high" media="(max-width: 480px)" srcset="/images/banner/banner-449.webp" />
                <link rel="preload" fetchpriority="high" media="(max-width: 991px)" srcset="/images/banner/banner-620.webp" />
                <link rel="preload" fetchpriority="high" media="(max-width: 1199px)" srcset="/images/banner/banner-449.webp" />
                <link rel="preload" fetchpriority="high" media="(max-width: 1399px)" srcset="/images/banner/banner-537.webp" />
                <link rel="preload" fetchpriority="high" media="(min-width:1400px)" srcset="/images/banner/banner-620.webp" />
                <link rel="preload" href="/images/logo.svg" as="image" />
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