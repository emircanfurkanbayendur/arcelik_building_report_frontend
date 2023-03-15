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
import Team from './Pages/Team/Team.jsx';
import Information from './Pages/Information/Information';
import Project from './Pages/Project/Project';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import DocumentInquiry from './Pages/DocumentInquiry/DocumentInquiry';
import Home from './Pages/HomePage/HomePage';
import HomePage from './Pages/HomePage/HomePage';
import Admin from './Pages/Admin/Admin';
import CreateBuild from './Pages/Admin/CreateBuild/CreateBuild';
import Profile from './Pages/Profile/Profile';
import Update from './Pages/Profile/Update';
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
                    <Route path="HomePage" element={<HomePage />} />
                    <Route path="auth" element={<Auth />} />
                    <Route
                        path="documentinquiry"
                        element={<DocumentInquiry />}
                    />
                    <Route path="admin" element={<Admin />}>
                        <Route path="createbuild" element={<CreateBuild />} />
                    </Route>
                    <Route path="team" element={<Team />} />
                    <Route path="information" element={<Information />} />
                    <Route path="project" element={<Project />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="update" element={<Update />} />
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
