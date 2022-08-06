import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import BlogSidebar from '../components/Blog/BlogSidebar';
import Comments from '../components/Blog/Comments';

const BlogDetails = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Blog Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Details" 
                BGImage="item-bg3" 
            />
			
            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog-details.jpg" alt="image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <span>Posted On:</span> <a href="#">September 31, 2020</a>
                                            </li>
                                            <li>
                                                <span>Posted By:</span> <a href="#">John Anderson</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h3>Digital Marketing Agency Blogs You Should Read</h3>
                                    <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                                    <blockquote className="wp-block-quote">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </blockquote>

                                    <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>

                                    <ul className="wp-block-gallery columns-3">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog-4.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog-5.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog-6.jpg" alt="image" />
                                            </figure>
                                        </li>
                                    </ul>

                                    <h3>Four major elements that we offer:</h3>
                                    <ul className="features-list">
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Scientific Skills For getting a better result
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Communication Skills to getting in touch
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            A Career Overview opportunity Available
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            A good Work Environment For work
                                        </li>
                                    </ul>

                                    <h3>It’s Time To Think Differently About Homeschooling</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    <h3>The Rise Of Marketing And Why You Need It</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                </div>

                                <div className="article-footer">
                                    <div className="article-tags">
                                        <span>
                                            <i className='bx bxs-bookmark'></i>
                                        </span>
                                        <a href="#">Business</a>
                                        <a href="#">IT Startups</a>
                                    </div>

                                    <div className="article-share">
                                        <ul className="social">
                                            <li><span>Share:</span></li>
                                            <li>
                                                <a href="https://www.facebook.com/" target="_blank">
                                                    <i className='bx bxl-facebook'></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/" target="_blank">
                                                    <i className='bx bxl-twitter'></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/" target="_blank">
                                                    <i className='bx bxl-instagram'></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="post-navigation">
                                    <div className="navigation-links">
                                        <div className="nav-previous">
                                            <a href="index.html">
                                                <i className="flaticon-left-arrow"></i>
                                                Prev Post
                                            </a>
                                        </div>
                                        <div className="nav-next">
                                            <a href="index.html">
                                                Next Post 
                                                <i className="flaticon-next"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Comments */}
                                <Comments />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
  
			<Footer />
		</>
    )
}

export default BlogDetails;