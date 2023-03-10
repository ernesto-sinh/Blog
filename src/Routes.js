import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';

import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
import Nosotros from 'containers/pages/Nosotros';
import Casos from 'containers/pages/Casos';
import Servicios from 'containers/pages/Servicios';
import Carreras from 'containers/pages/Carreras';
import Blog from 'containers/pages/Blog';
import Contacto from 'containers/pages/Contacto';

import {AnimatePresence} from 'framer-motion'

function MyRoutes(){

    const location = useLocation()

    return(

        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/* {Error display} */}
                <Route path="*" element={<Error404 />} />

                {/* {Home display} */}
                <Route path="/" element={<Home />} />
                <Route path="/casos" element={<Casos />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/carreras" element={<Carreras />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </AnimatePresence>

    )
}

export default MyRoutes