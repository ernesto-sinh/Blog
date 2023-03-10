import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MyRoutes from 'Routes';




function App() {
  
  return (

    <HelmetProvider>
      <Helmet>
        <title>Toronto | Software Agency</title>
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
    <Provider store={store}>

      <Router>
        <MyRoutes />
      </Router>
    </Provider>
    </HelmetProvider>

  )

}

export default App;
