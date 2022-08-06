import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import SubscribeForm from '../components/Common/SubscribeForm';

const Custom404 = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Error Page" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Error Page" 
                BGImage="item-bg1" 
            />
			 
			<div className="error-area ptb-100">
				<div className="d-table">
					<div className="d-table-cell">
						<div className="container">
							<div className="error-content">
								<img src="/images/404-error.png" alt="error" />
			
								<h3>Error 404 : Page Not Found</h3>
								<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

								<Link href="/">
									<a className="default-btn">
										Go to Home
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<SubscribeForm />

			<Footer />
		</>
    )
}

export default Custom404;