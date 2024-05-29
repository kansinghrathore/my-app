import App from './App';
import { createRoot } from 'react-dom/client';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.css';
import './main.js';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);   