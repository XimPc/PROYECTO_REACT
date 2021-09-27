import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import AboutPage from "../pages/AboutPage";
import ContactoPage from "../pages/ContactoPage";
import HomePage from "../pages/HomePage";
import DatosApi from "../components/DatosApi";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header nombre="Ximena Paez Campo" />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/personajes" component={Layout} />
                <Route path="/acerca-de" component={AboutPage} />
                <Route path="/contacto" component={ContactoPage} />
                <Route path="/nosotros" component={ContactoPage} />
                <Route path="/DatosApi" component={DatosApi} />
                <Route component= {()=>(
                    <h1>Pagina no encontrada</h1>
                )} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
export default AppRouter;