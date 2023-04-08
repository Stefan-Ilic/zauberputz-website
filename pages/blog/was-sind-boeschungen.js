//{ "title": "Was ist eine Böschung?", "date": "2022-11-18", "image": "/images/blog/vertikutieren-banner.jpg" }
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import BlogSidebar from '../../components/Blog/BlogSidebar';
import Link from 'next/link';
import Head from 'next/head';

const BlogDetails = () => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(encodeURIComponent(window.location.href));
    }, []);

    return (
        <>
            <Head>
                <title>Was ist eine Böschung?</title>
                <meta name="description" content="Was ist eine Böschung? Von Hausbetreuung Wien - Zauberputz. Ihr Spezialist für Hausbetreuung, Grünflächenbetreuung und Winterdienst in Wien" />
            </Head>
			<Navbar />
			
            <div className="blog-details-area ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog/vertikutieren-banner.jpg" alt="image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                18.11.2022
                                            </li>
                                        </ul>
                                    </div>

                                    <h1>Was ist eine Böschung?</h1>
                                    <p>Jedes Jahr im Frühjahr wird uns glücklichen Gartenbesitzern beigebracht, dass ein Rasen ohne Vertikutieren kein gescheiter Rasen werden kann und dieser unbedingt mit einer Frühjahrskur von Rasenfilz und Moos befreit werden muss. Um einen absoluten Hingucker zu bekommen, haben wir ein paar Tipps und Tricks, und wirklich hilfreiche Informationen.</p>

                                    <p>Das Vertikutieren ist eine der wichtigsten Maßnahmen der Rasenpflege. Wenn der Rasen nicht schön grün und dicht ist, kann es daran liegen, dass zu wenig Sauerstoff im Boden vorhanden ist. Ein Vertikutierer schneidet die Grasnarbe ein, entfernt Moos sowie Pflanzenreste und belüftet den Boden. Dieses Vorgehen stört teppichbildende Unkräuter wie Weißklee in ihrem Wachstum. Die beste Zeit dazu ist zwischen Mitte September und Mitte Oktober. Die Tagestemperatur sollte zwischen 15 und 20°C liegen. </p>

                                    <blockquote className="wp-block-quote">
                                        <p>Ein Vertikutierer schneidet die Grasnarbe ein, entfernt Moos sowie Pflanzenreste und belüftet den Boden.</p>
                                    </blockquote>

                                    <p>Der Rasen sollte drei Wochen bevor man vertikutieren möchte, gedüngt werden, um die Gräser zu einem verstärkten Wachstum anzuregen. Sobald der Rasen gewachsen ist, soll er erstmal gemäht werden und zwei Wochen lang ruhen. Dies ist die wichtigste Prozedur zu Beginn.</p>

                                    <p>Beachten Sie, dass der Rasen beim Vertikutieren trocken sein sollte und Sie nicht zu tief vertikutieren dürfen, da die Wurzeln dadurch geschädigt werden. Angestrebt wird eine Schnitthöhe von 2 bis 3 cm. Die Messer des Vertikutiergerätes sollten ca. 1 cm tief in den Boden eindringen.</p>

                                    <p>Man bearbeitet die Rasenfläche gleichmäßig einmal in Längs- und anschließend in Querbahnen. Nach dem Vertikutieren wird empfohlen, den Rasen schön ausgiebig und gleichmäßig zu bewässern. Der Rasen benötigt drei Wochen, um sich zu erholen. Unser Tipp: Am besten streuen Sie gleich auf die kahlen Stellen frische Samen.</p>

                                    <p>Zuletzt ist noch wichtig, dass der Boden nicht austrocknen darf. Daher empfehlen wir, im Sommer zumindest einmal am Tag zu bewässern.</p>

                                    <p>Für das Vertikutieren gibt es drei verschiedene Gerätearten: den Handvertikutierer, den strombetriebenen Vertikutierer und den benzinbetriebenen. Diese kann man sich in fast jedem Baumarkt oder Gartencenter ausleihen.</p>
                                    
                                    <ul className="wp-block-gallery columns-3">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images//blog/vertikutieren-1.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images//blog/vertikutieren-2.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images//blog/vertikutieren-3.jpg" alt="image" />
                                            </figure>
                                        </li>
                                    </ul>

                                    <h3>Häufige Fehler beim Vertikutieren</h3>
                                    <p>Wenn der Rasen gelb oder braun wird, ist das ein Zeichen dafür, dass der Rasen nicht richtig gepflegt wurde. Die 3 häufigsten Ursachen dafür sind:</p>
                                    <ul className="features-list">
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Trockenheit bzw. ungenügende Bewässerung
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Übermäßiges Düngen
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Ein besonders "saurer" Boden
                                        </li>
                                    </ul>

                                    <p>Neben ungenügender Bewässerung kann auch der falsche Umgang mit Dünger zu gelbem oder braunem Rasen führen, dadurch bildet sich auch der Rasenfilz. Bei saurem Boden kalken Sie den Rasen.</p>

                                    <h3>Warum bildet sich Rasenfilz?</h3>
                                    <p>Jeder Rasen befindet sich in einem ständigen Erneuerungsprozess. Die abgestorbenen Pflanzenteile lagern sich ab und bilden auf dem Rasenboden eine dünne Schicht aus organischem Material. Nicht alle Pflanzenteile dieser Schicht verrotten schnell, weshalb sich zusammen mit lebenden Pflanzenorganen über die Zeit ein immer dickerer und undurchlässigerer Filz bildet.</p>

                                    <p>Unter einem dicken Rasenfilz können die Gräser nicht mehr atmen. Tritt der Rasenfilz nur an wenigen Flächen auf, reicht es meist, ihn mit einer breiten Harke zu entfernen. Einmal jährlich soll Rasenfilz entfernt werden.</p>

                                    <p>Damit es gar nicht erst zu Rasenfilz kommt, braucht der Rasen die richtige Pflege. Fehlt die Feuchtigkeit, ist das Bodenleben weniger aktiv. Verdichtung ist ein großes Problem, wenn der Rasen häufig betreten wird.  Sie können Ihren Rasen auch mit einer Grabegabel aerifizieren. Stechen Sie etwa zehn Zentimeter tiefe Löcher in den Boden und verfüllen sie die Luftkanäle mit Quarzsand.</p>

                                    <h3>Rasenfilz ohne Vertikutierer entfernen</h3>
                                    <p>Es ist meist auch möglich, Rasenfilz ohne speziellen Vertikutierer zu entfernen, und zwar mit einem handelsüblichen Rechen! Das gewöhnliche Rechen ergibt oftmals großartige Resultate. Der Rasenfilz sammelt sich hauptsächlich an den Zinken. Daher sollten Sie immer an einer Ecke anfangen. Hierbei ist wichtig, den Rasen möglichst kurz mähen, sodass man leicht an die Rückstände kommt.</p>

                                    <p>Falls Sie einen sehr festen und lehmigen Boden haben, können Sie zum Abschluss auf der Grünfläche eine circa 1 Zentimeter dicke Sandschicht ausbringen. Auch dies sorgt für einen gepflegten Rasen, der im Folgejahr gleichmäßig wächst und saftig-grün gedeiht.</p>

                                    <h3>Sie müssen nicht alles allein machen!</h3>
                                    <p>Wir sind Ihr Spezialist für Gartenbetreuung in Wien. Egal, ob es darum geht, den Rasen zu mähen, zu jäten oder sonstige Gartenarbeiten zu erledigen. Wir helfen Ihnen gerne weiter! Holen Sie jetzt Ihr personalisiertes Angebot ein!</p>
                                </div>

                                <div className="article-footer">
                                    <div className="article-tags">
                                        <span>
                                            <i className='bx bxs-bookmark'></i>
                                        </span>
                                        <a href="#">Gartenbetreuung Wien</a>
                                        <a href="#">Rasen mähen Wien</a>
                                        <a href="#">Hausbetreuung Wien</a>
                                        <a href="#">Hausreinigung Wien</a>
                                        <a href="#">Winterdienst Wien</a>
                                    </div>

                                    <div className="article-share">
                                        <ul className="social">
                                            <li><span>Share:</span></li>
                                            <li>
                                                <Link href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
                                                    <a><i className='bx bxl-facebook'></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <a href={`https://twitter.com/intent/tweet?url=${url}`} target="_blank">
                                                    <i className='bx bxl-twitter'></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank">
                                                    <i className='bx bxl-linkedin'></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            {/* <BlogSidebar /> */}
                        </div>
                    </div>
                </div>
            </div>
  
			<Footer />
		</>
    )
}

export default BlogDetails;