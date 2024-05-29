import { useEffect } from 'react';
import ReactGA from 'react-ga';
import {BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import Router from './components/routes';
const TRACKING_ID = "UA-167197758-1"; 
ReactGA.initialize(TRACKING_ID);

function App(){
    const helmetContext = {};
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
      }, []);
      
    return <>
<HelmetProvider context={helmetContext}>
<BrowserRouter>
<Router />
<FloatingWhatsApp 
    phoneNumber="9509962829" 
    accountName="Logic Daddy"
    allowEsc
    allowClickAway
    notification
    notificationSound
    statusMessage = "Typically replies within 1 hour"
    chatMessage = "Hello there! 🤝 How can we help?"
    placeholder = "Type a message.."
    avatar={require('./img/fav3.png')} />
<TawkMessengerReact
    propertyId="5dc9a9a343be710e1d1cc61e"
    widgetId="default"/>
</BrowserRouter>
</HelmetProvider>
    </>
}

export default App;