import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './CSS/App.css';
import './CSS/navigation.css';
import './CSS/HomepageCSS/header.css';
import './CSS/HomepageCSS/banner.css';
import './CSS/HomepageCSS/features.css';
import './CSS/HomepageCSS/testimonials.css';
import './CSS/HomepageCSS/aboutSection.css';
import './CSS/about.css';
import './CSS/news.css';
import './CSS/privacy.css';
import './CSS/catalog.css';
import './CSS/contact.css';
import './CSS/affiliates.css';
import './CSS/customers.css';
import './CSS/faq.css';
import './CSS/footer.css';

// Constants
const Nav = React.lazy(() => import('./Components/Navigation'));
const Footer = React.lazy(() => import('./Components/Footer'));

// Homepage
const Home = React.lazy(() => import('./Components/Homepage/Home'));
const About = React.lazy(() => import('./Components/About'));
const News = React.lazy(() => import('./Components/News/News'));
const PrivacyPolicy = React.lazy(() => import('./Components/PrivacyPolicy'));

// Catalog
const Catalog = React.lazy(() => import('./Components/Catalog/CatalogHome'));
const CatalogProductList = React.lazy(() => import('./Components/Catalog/CatalogProductList'));

// Contact
const Contact = React.lazy(() => import('./Components/Contact'));

// Affiliate Program & Customers Page
const Affiliates = React.lazy(() => import('./Components/AffiliateProgram'));
const Customers = React.lazy(() => import('./Components/Customers'));

// FAQ
const FAQ = React.lazy(() => import('./Components/FAQ'));

// Error
const Error = React.lazy(() => import('./Components/Error'));

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<div>Loading..</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="news"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <News />
            </Suspense>
          }
        />
        <Route
          path="privacy-policy"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PrivacyPolicy />
            </Suspense>
          }
        />
        <Route
          path="catalog"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Catalog />
            </Suspense>
          }
        />
        <Route
          path="product-list"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CatalogProductList />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="affiliate-program"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Affiliates />
            </Suspense>
          }
        />
        <Route
          path="customers"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Customers />
            </Suspense>
          }
        />
        <Route
          path="faq"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <FAQ />
            </Suspense>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
