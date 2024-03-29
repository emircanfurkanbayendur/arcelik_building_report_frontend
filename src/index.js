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
import Auth from './Pages/Auth/Auth.jsx';
import Team from './Pages/Team/Team.jsx';
import Information from './Pages/Information/Information';
import Project from './Pages/Project/Project';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import UsersMain from './Pages/Users/UsersMain';
import DocumentInquiry from './Pages/DocumentInquiry/DocumentInquiry';
import HomePage from './Pages/HomePage/HomePage';
import Admin from './Pages/Admin/Admin';
import Profile from './Pages/Profile/Profile';

import DocumentInfo from './Pages/DocumentInquiry/DocumentInfo';
import {store} from './redux/store';

import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));














root.render(
    <Provider store={store}>
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
    >
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/documentinquiry" element={<DocumentInquiry />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/team" element={<Team />} />
                <Route path="/information" element={<Information />} />
                <Route path="/project" element={<Project />} />
                <Route path="/profile" element={<Profile />} />
               
                <Route path="/document/:id" element={<DocumentInfo />} />
                <Route path="/users" element={<UsersMain />} />
            
               
            </Routes>
          
            <Footer S/>
          
        </BrowserRouter>
    </ThemeProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
