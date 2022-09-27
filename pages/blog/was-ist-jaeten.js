//{ "title": "Was ist Jäten und wie macht man es richtig?", "date": "2022-08-20", "image": "/images/blog/gardening-1.jpg" }
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
                <title>Was ist Jäten?</title>
                <meta name="description" content="Was ist jäten und wie macht man es richtig? Von Hausbetreuung Wien - Zauberputz. Ihr Spezialist für Hausbeteuung, Grünflächenbetreuung und Winterdienst in Wien" />
            </Head>
			<Navbar />
			
            <div className="blog-details-area ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog/gardening-1.jpg" alt="image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                20.08.2022
                                            </li>
                                        </ul>
                                    </div>

                                    <h3>Was ist Jäten und wie macht man es richtig?</h3>
                                    <p>Um schöne und gesunde Pflanzen zu haben ist es von größter Wichtigkeit, regelmäßig zu jäten. Jäten bedeutet, Unkraut zwischen Fugen von Gehwegplatten und Terrassensteinen manuell oder unter Zuhilfenahme verschiedener Werkzeuge zu entfernen.</p>

                                    <p>Unkraut einfach mit der Hand aus dem Boden zu ziehen (traditionelles Jäten) ist hierbei sicherlich die einfachste und älteste Methode, jedoch bleibt sie mitunder eine der Effektivsten. Das traditionelle Jäten ist sehr umweltfreundlich, da keine Schadstoffe in den Boden gebracht werden und dadurch der Anbau von Obst und Gemüse nicht beeinflusst wird.</p>

                                    <blockquote className="wp-block-quote">
                                        <p>Das traditionelle Jäten ist sehr umweltfreundlich, da keine Schadstoffe in den Boden gebracht werden und dadurch der Anbau von Obst und Gemüse nicht beeinflusst wird.</p>
                                    </blockquote>

                                    <ul className="wp-block-gallery columns-3">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images//blog/gardening-2.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images//blog/gardening-3.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images//blog/gardening-4.jpg" alt="image" />
                                            </figure>
                                        </li>
                                    </ul>

                                    <h3>Einige oft genutzte Werkzeuge zum Jäten</h3>
                                    <ul className="features-list">
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Durch einen <b>Wurzelstecher</b> können die langen Pfahlwurzeln einiger Unkräuter zuverlässig entfernt werden.
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Eine <b>Unkrauthacke</b> wird für das Ziehen aus dem Boden genutzt.
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Der <b>Fugenkratzer</b> kommt zum Einsatz, um Unkräuter zwischen Gehwegplatten oder zwischen den Steinen einer Terrasse zu entfernen.
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Zuletzt kann ein <b>Messer</b> für schmale Fugen verwendet werden.
                                        </li>
                                    </ul>

                                    <h3>Wann soll gejätet werden?</h3>
                                    <p>Grundsätzlich ist der Herbst die beste Zeit, für das Frühjahr vorzusorgen. Einige Unkräuter verstecken sich regelrecht im Boden. Daher ist es umso wichtiger, die ganzen Wurzeln zu entfernen. Ansonsten wachsen die Pflanzen nach kurzer Zeit wieder nach und das Spiel geht wieder von vorne los. </p>
                                    <p>Am einfachsten fällt das Jäten aus, wenn der Boden etwas feucht ist, da das Herausziehen der Pflanzen dadurch erleichtert wird. Deshalb empfehlen wir im Hochsommer oder generell bei Perioden von Düre vor dem eigentlichen Jäten zuerst die Erde mit einer Gießkanne zu befeuchten. Es gibt allerdings auch zu viel des Guten! Bei starkem Regenfall wird die Erde meist zu matschig und klebt an den Schuhen, was die Arbeit schwerer macht.</p>

                                    <h3>Für alle Hobbygärtner gibt es ein paar Ideen gegen das Unkraut im Garten:</h3>
                                    <ul className="features-list">
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Betroffene Stellen mit Stroh abdecken kann das Unkrautwachstum erheblich demmen. Zudem wird das Beet von dem schnellen Austrocknen geschützt.
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Versuchen Sie, kochendes Wasser direkt auf das Unkraut zu gießen. Dies zerstört den Organismus der Pflanze. Ist das Wasser getrocknet, kann das Unkraut einfach entfernt werden.
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Legen Sie Folie über die befallenen Stellen. Ohne Licht kann kein ungewolltes Unkraut wachsen.
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Viele Unkräuter haben nur eine einzige Wurzel, die sich Pfahlwurzeln nennt. Wenn Sie mithilfe eines Wurzelstechers ebendiese entfernen, ist das Unkraut bereits vollständig entfernt.
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Unkraut lässt sich auch wegbrennen. Hierbei wird es mit einem speziellen Unkrautbrenner erhitzt, wasa die Eiweiße im Inneren der Pflanze zu gerinnen bringt und sie dadurch abstirbt. Sind die Wege einmal sauber, kann man das Unkraut dann durch regelmäßiges Fegen fernhalten.
                                        </li>
                                    </ul>
                                    <p>Selbstverständlich lässt sich das Unkrautproblem auch mit chemischen Mitteln lösen. Hier ist jedoch Vorsicht geboten. Die Chemikalien können erwünschte Pflanzen schädigen, Tiere vergiten und sogar ins Grundwasser eindringen.</p>

                                    <h3>Folgende Unkräuter sind tatsächlich essbar und in der Küche Willkommen</h3>
                                    <ul className="features-list">
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Brennnessel - Ist reich an Vitamin C, Eisen und Calcium.  Zudem wird ihr eine heilende Wirkung bei Rheuma und Harnwegsinfektionen nachgesag
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Löwenzahn - Durch den bitteren beziehungsweise leicht nussigen Geschmack eignet sich Löwenzahn hervorragend als Beilage in einem leckeren Frühlingsalat oder zur Verfeinerung von Suppen und Soßen
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Spitzwegerich - Tatsächlich ist die ganze Pflanze von der Wurzel bis zur Blüte essbar und kann roh oder gekocht verspeist werden
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Knopfkraut - Vom Stiel bis zur Blüte kann man alles an der Pflanze verwerten. Zudem ist sie auch noch eine richtige Vitaminbombe
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Sauerampfer - Kommt häufig bei Hautkrankheiten zum Einsatz. Der hohe Vitamin-C- und Eisengehalt machen ihn zu einer gesunden Alternative in der Küche. Von übermäßigem Verzehr ist jedoch abzuraten
                                        </li>
                                    </ul>

                                    <h3>Bleiben Sie fit und gesund durch das Jäten</h3>
                                    <p>Neben der Wichtigkeit für die Gesundheit von Zierpflanzen ist das Jäten auch als regelrechte „Sportart“ bekannt. Die Bewegungen trainieren die Muskeln am ganzen Körper; zudem noch an der frischen Luft. Hier treffen sich 2 praktische, therapierende Faktoren: Körperliche Tätigkeit und die Arbeit mit Pflanzen im Grünen. Ein weiterer Vorteil des Jätens ist, dass sich Bewegung hier kaum wie Sport anfühlt und dennoch Kalorien verbrannt werden.</p>

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