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

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="catalog" element={<Catalog />}>
            <Route path="product-list" element={<CatalogProductList />} />
          </Route>
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
