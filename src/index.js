import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'react-bootstrap';
import './index.css';
import 'rsuite/dist/rsuite.min.css';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './App';
import Auth from './Pages/Auth/Auth.jsx';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/NavigationBar/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
