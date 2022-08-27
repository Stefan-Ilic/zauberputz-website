import React from 'react';
import Link from 'next/link';

const LatestBlogPost = ({ posts }) => {
    return (
        <div className="blog-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Blog</span>
                    <h2>Unsere neuesten Artikel</h2>
                    <div className="bar"></div>
                </div>

                <div className="row justify-content-center">
                    {posts.slice(0, 3).map(post => (
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
                                    <a className="blog-btn">Mehr <i className='bx bx-chevrons-right'></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    ))}

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
    )
}

export default LatestBlogPost;