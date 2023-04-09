import { useState } from 'react';
import { useRouter } from 'next/router'

const MainBanner = () => {
    const [email, setEmail] = useState('');
    const router = useRouter();
    return (
        <div className="main-banner">
            <div className="main-banner-item item-four">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="main-banner-content pr-15">
                                        <h1>Hausbetreuung Wien</h1>
                                        <p>Ihr Spezialist für Gebäudedienstleistungen wie Hausbetreuung, Grünflächenbetreuung und Winterdienst. Kompetent, unkompliziert und kosteneffizient.</p>
                                        <form onSubmit={(e) => {e.preventDefault(); router.push({ pathname: '/kontakt', query: { email: email } }); }} className="banner-form">
                                            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Ihre E-Mail Adresse" />
                                            <button type='submit'>Jetzt Angebot einholen</button>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="main-banner-image pl-15">
                                    <picture fetchpriority="high">
                                        <source media="(max-width: 480px)" srcset="/images/banner/banner-449.webp" fetchpriority="high" />
                                        <source media="(max-width: 991px)" srcset="/images/banner/banner-620.webp" fetchpriority="high" />
                                        <source media="(max-width: 1199px)" srcset="/images/banner/banner-449.webp" fetchpriority="high" />
                                        <source media="(max-width: 1399px)" srcset="/images/banner/banner-537.webp" fetchpriority="high" />
                                        <source media="(min-width:1400px)" srcset="/images/banner/banner-620.webp" fetchpriority="high" />
                                        <img src="/images/banner/banner-449.webp" alt="banner" />
                                    </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;