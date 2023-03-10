import Features from "components/carreras/Features";
import Header from "components/carreras/Header";
import PositionList from "components/carreras/PositionList";
import Testimonial from "components/carreras/Testimonial";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";

function Carreras(){

    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    return(
        <Layout>
            <Helmet>
                <title>Toronto | Carreras</title>
                <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
                <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
                <meta name="robots" content='all' />
                <link rel="canonical" href="https://www.Toronto.com/" />
                <meta name="author" content='Toronto' />
                <meta name="publisher" content='Toronto' />

                {/* Social Media Tags */}
                <meta property="og:title" content='Toronto | Software Agency' />
                <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
                <meta property="og:url" content="https://www.Toronto.com/" />
                <meta property="og:image" content='favicon.png' />

                <meta name="twitter:title" content='Toronto | Software Agency' />
                <meta
                    name="twitter:description"
                    content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
                />
                <meta name="twitter:image" content='favicon.png' />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Navbar/>
            <div className="pt-32">
            <Header />
            <Testimonial />
            <Features />
            <Features />
            <PositionList />
            </div>
            <Footer/>
        </Layout>
    )
}
export default Carreras;