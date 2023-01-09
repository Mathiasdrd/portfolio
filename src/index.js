import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

const footer = ReactDOM.createRoot(document.querySelector("footer"));
footer.render(<Footer />)