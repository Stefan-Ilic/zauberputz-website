import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
    return (
        <div className="widget-area pl-10">
            <div className="widget widget_search">
                <h3 className="widget-title">Search</h3>

                <form className="search-form">
                    <label>
                        <input type="search" className="search-field" placeholder="Search..." />
                    </label>
                    <button type="submit">
                        <i className="flaticon-loupe"></i>
                    </button>
                </form>
            </div>

            <div className="widget widget_spix_posts_thumb">
                <h3 className="widget-title">Popular Posts</h3>

                <div className="item">
                    <Link href="/blog-details">
                        <a className="thumb">
                            <span className="fullimage cover bg1" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>June 10, 2020</span>
                        <h4 className="title usmall">
                            <Link href="/blog-details">
                                <a>The Data Surrounding Higher Education</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog-details">
                        <a className="thumb">
                            <span className="fullimage cover bg2" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>June 21, 2020</span>
                        <h4 className="title usmall">
                            <Link href="/blog-details">
                                <a>Conversion Rate the Sales Funnel Optimization</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog-details">
                        <a className="thumb">
                            <span className="fullimage cover bg3" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>June 30, 2020</span>
                        <h4 className="title usmall">
                            <Link href="/blog-details">
                                <a>Business Data is changing the world’s Energy</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog-details">
                        <a className="thumb">
                            <span className="fullimage cover bg4" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>May 10, 2020</span>
                        <h4 className="title usmall">
                            <Link href="/blog-details">
                                <a>The Billionaire Guide On Design That Will Get You Rich</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog-details">
                        <a className="thumb">
                            <span className="fullimage cover bg5" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>May 21, 2020</span>
                        <h4 className="title usmall">
                            <Link href="/blog-details">
                                <a>The Data-Driven Approach To Understanding Your Users</a>
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>

            <div className="widget widget_categories">
                <h3 className="widget-title">Categories</h3>

                <ul>
                    <li>
                        <Link href="/blog-1">
                            <a>Creative Web Design <span className="post-count">(03)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog-1">
                            <a>Digital Agency <span className="post-count">(05)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog-1">
                            <a>Software Engineers <span className="post-count">(08)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog-1">
                            <a>Marketing Agency <span className="post-count">(04)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog-1">
                            <a>Data Analysis <span className="post-count">(08)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog-1">
                            <a>App Development <span className="post-count">(10)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog-1">
                            <a>Web Application <span className="post-count">(14)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog-1">
                            <a>Logo & Branding <span className="post-count">(18)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog-1">
                            <a>IT Startups <span className="post-count">(20)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog-1">
                            <a>Digital Services <span className="post-count">(25)</span></a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Popular Tags</h3>

                <div className="tagcloud">
                    <a href="#">Business <span className="tag-link-count">(3)</span></a>
                    <a href="#">Design <span className="tag-link-count">(3)</span></a>
                    <a href="#">Braike <span className="tag-link-count">(2)</span></a>
                    <a href="#">Fashion <span className="tag-link-count">(2)</span></a>
                    <a href="#">Travel <span className="tag-link-count">(1)</span></a>
                    <a href="#">Smart <span className="tag-link-count">(1)</span></a>
                    <a href="#">Marketing <span className="tag-link-count">(1)</span></a>
                    <a href="#">Tips <span className="tag-link-count">(2)</span></a>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar;