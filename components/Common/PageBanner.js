import React from 'react';
import Link from 'next/link';

const PageBanner = ({pageTitle, homePageUrl, homePageText, activePageText, BGImage}) => {
    return (
        <div className={`page-banner-area ${BGImage}`}>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="page-banner-content">
                            <h2>{pageTitle}</h2>
                            <ul>
                                <li>
                                    <Link href={homePageUrl}>
                                        <a>{homePageText}</a>
                                    </Link>
                                </li>
                                <li className="active">{activePageText}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;