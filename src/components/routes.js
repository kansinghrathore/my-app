import {Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about-us';
import Cloud from './pages/cloud-hosting';
import Dedicated from './pages/dedicated-hosting';
import Domian from './pages/domain';
import Mobile from './pages/mobile-app-development';
import Portfolio from './pages/portfolio';
import Privcy from './pages/privacy-and-policy';
import Refund from './pages/refund-policy';
import Reseller from './pages/reseller-hosting';
import Shared from './pages/shared-hosting';
import Terms from './pages/terms-and-condition';
import Vps from './pages/vps-hosting';
import Webdesign from './pages/web-designing';
import WebDev from './pages/web-development';
import Contact from './pages/contact-us';
import Header from './Header';
import Footer from './Footer';

function routes(){
    return <>
<Header/>
<Routes>  
<Route path="/" element={<Home /> } />
<Route path="/about-us" element={<About/> } />
<Route path="/cloud-hosting" element={<Cloud /> } />
<Route path="/dedicated-hosting" element={<Dedicated /> } />
<Route path="/domain" element={<Domian /> } />
<Route path="/mobile-app-development" element={<Mobile /> } />
<Route path="/portfolio" element={<Portfolio /> } />
<Route path="/privacy-and-policy" element={<Privcy /> } />
<Route path="/refund-policy" element={<Refund /> } />
<Route path="/reseller-hosting" element={<Reseller /> } />
<Route path="/shared-hosting" element={<Shared /> } />
<Route path="/terms-and-condition" element={<Terms /> } /> 
<Route path="/vps-hosting" element={<Vps /> } />
<Route path="/web-designing" element={<Webdesign /> } />
<Route path="/web-development" element={<WebDev /> } />
<Route path="/contact-us" element={<Contact /> } />
</Routes>
<Footer/>
    </>
}
    export default routes;