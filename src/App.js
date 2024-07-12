import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import BlogPostPage from './components/BlogPostPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPostPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
         
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
