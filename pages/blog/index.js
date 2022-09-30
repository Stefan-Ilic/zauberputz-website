import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import Link from 'next/link';
import { getAllPosts } from '../../posts'
import Head from 'next/head';

export async function getStaticProps() {
    const posts = getAllPosts();
    return {
        props: {
            posts,
        },
    }
}
 
const BlogTwo = ({ posts }) => {
    
    return (
        <>
            <Head>
                <title>Blog - Hausbetreuung/Gartenbetreuung/Winterdienst Wien</title>
                <meta name="description" content="Der Blog der Hausbetreuung Wien - Zauberputz. Ihr Spezialist für Hausbetreuung, Grünflächenbetreuung/Gartenbetreuung und Winterdienst in Wien und Umgebung." />
            </Head>

			<Navbar />

			<PageBanner 
                pageTitle="Blog" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog" 
                BGImage="default-banner" 
            />
			 
            <div className="blog-area pt-100 pb-100">
                <div className="container-fluid">
                    <div className="row justify-content-center">

                        {posts.map(post => (
                            <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href={post.link}>
                                        <a>
                                            <img src={post.image} alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>{new Date(post.date).toLocaleDateString("de-AT", { year: "numeric",  month: "2-digit",  day: "2-digit" })}</span>
                                    <h3>
                                        <Link href={post.link}>
                                            <a>{post.title}</a>
                                        </Link>
                                    </h3>

                                    <Link href={post.link}>
                                        <a className="blog-btn">
                                            Mehr <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ))}

                        {/* <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <a href="#" className="prev page-numbers">
                                    <i className="flaticon-left-arrow"></i>
                                </a>
                                <a href="#" className="page-numbers">1</a>
                                <span className="page-numbers current" aria-current="page">2</span>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers">
                                    <i className="flaticon-next"></i>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="default-shape">
                    <div className="shape1">
                        <img src="/images/default-shape/default-shape1.png" alt="image" />
                    </div>
                    <div className="shape2">
                        <img src="/images/default-shape/default-shape2.png" alt="image" />
                    </div>
                    <div className="shape3">
                        <img src="/images/default-shape/default-shape3.png" alt="image" />
                    </div>
                    <div className="shape4">
                        <img src="/images/default-shape/default-shape4.png" alt="image" />
                    </div>
                </div>
            </div>
		  
			<Footer />
		</>
    )
}

export default BlogTwo;