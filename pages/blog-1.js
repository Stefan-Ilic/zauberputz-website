import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
 
const Blog = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Blog Two Column" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Two Column" 
                BGImage="item-bg1" 
            />
			 
            <div className="blog-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog-1.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>20 March, 2020</span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>7 Great Tips For Earn More Money From Digital Industry</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog-details">
                                        <a className="blog-btn">
                                            Read More <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
 
                        <div className="col-lg-6 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog-3.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>28 March, 2020</span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>The Billionaire Guide On Design That will Get You Rich</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog-details">
                                        <a className="blog-btn">
                                            Read More <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog-2.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>25 March, 2020</span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Business Data is changing the world’s view towards Green Energy</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog-details">
                                        <a className="blog-btn">
                                            Read More <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog-4.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>20 March, 2020</span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Finding the blocks of neighboring fields in a matrix with Python</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog-details">
                                        <a className="blog-btn">
                                            Read More <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog-5.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>25 March, 2020</span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Data into Your Enterprise to Drive Actionable Insights</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog-details">
                                        <a className="blog-btn">
                                            Read More <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog-6.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>28 March, 2020</span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>data-driven approach to understanding your users</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog-details">
                                        <a className="blog-btn">
                                            Read More <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog-7.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>20 March, 2020</span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Conversion Rate Optimization: Understanding the Sales Funnel</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog-details">
                                        <a className="blog-btn">
                                            Read More <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog-8.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>25 March, 2020</span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>The State of Local SEO Industry Report 2020, Announced</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog-details">
                                        <a className="blog-btn">
                                            Read More <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
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
                        </div>
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

export default Blog;