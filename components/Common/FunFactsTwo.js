import React from 'react';

const FunFactsTwo = () => {
    return (
        <div className="fun-facts-area pb-70">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="single-fun-fact-box">
                            <div className="icon">
                                <i className="flaticon-checked"></i>
                            </div>
                            <h3>950</h3>
                            <p>Completed Project</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="single-fun-fact-box">
                            <div className="icon">
                                <i className="flaticon-happy"></i>
                            </div>
                            <h3>850</h3>
                            <p>Happy Clients</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="single-fun-fact-box">
                            <div className="icon">
                                <i className="flaticon-technical-support"></i>
                            </div>
                            <h3>550</h3>
                            <p>Multi Service</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="single-fun-fact-box">
                            <div className="icon">
                                <i className="flaticon-trophy"></i>
                            </div>
                            <h3>750</h3>
                            <p>Winning Awards</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FunFactsTwo;