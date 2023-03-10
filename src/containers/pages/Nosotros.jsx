import Clients from "components/about/Clients";
import Cta from "components/about/Cta";
import Header from "components/about/Header";
import Imagen from "components/about/Images";
import Team from "components/about/Team";
import TestStats from "components/about/TestStats";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";

function Nosotros(){

    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    return(
        <Layout>
            <Helmet>
                <title>Toronto | Nosotros </title>
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
            <div className="pt-28">
            <Header />
            <TestStats />
            <Imagen />
            <Clients />
            <Team />
            <Cta />
            </div>
            <Footer/>
        </Layout>
    )
}
export default Nosotros;