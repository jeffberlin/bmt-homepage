import React, { Suspense, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import './CSS/product-overview.css';
import './CSS/pricing.css';
import './CSS/w9form.css';
import './CSS/footer.css';

// Constants
const Nav = React.lazy(() => import('./Components/Navigation'));
const Footer = React.lazy(() => import('./Components/Footer'));

// Homepage
const Home = React.lazy(() => import('./Components/Homepage/Home'));
const About = React.lazy(() => import('./Components/About'));
const News = React.lazy(() => import('./Components/News/News'));
const PrivacyPolicy = React.lazy(() => import('./Components/PrivacyPolicy'));
const OurGuarantee = React.lazy(() => import('./Components/OurGuarantee'));

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

// Product Overview
const ProductOverview = React.lazy(() => import('./Components/ProductOverview/ProductOverview'));

// Pricing
const Pricing = React.lazy(() => import('./Components/Pricing/Pricing'));

// W9 Form
const W9Form = React.lazy(() => import('./Components/W9Form'));

// Error
const Error = React.lazy(() => import('./Components/Error'));

// Contact Form success page
const Success = React.lazy(() => import('./Components/Success'));

// Product Pages
const AddressNmore = React.lazy(() => import('./Components/Catalog/ProductPages/AddressNmore'));
const EmployeeSchedule = React.lazy(() => import('./Components/Catalog/ProductPages/EmployeeSchedule'));
const FileCommanderWin = React.lazy(() => import('./Components/Catalog/ProductPages/FileCommanderWin'));
const FileCommander2 = React.lazy(() => import('./Components/Catalog/ProductPages/FileCommander2'));
const Goobs = React.lazy(() => import('./Components/Catalog/ProductPages/Goobs'));
const MoneyQuizCounter = React.lazy(() => import('./Components/Catalog/ProductPages/MoneyQuizCounter'));
const NetDrive = React.lazy(() => import('./Components/Catalog/ProductPages/NetDrive'));
const OsEzine = React.lazy(() => import('./Components/Catalog/ProductPages/OsEzine'));
const PersonalTimeKeeper = React.lazy(() => import('./Components/Catalog/ProductPages/PersonalTimeKeeper'));
const PipelinePlus = React.lazy(() => import('./Components/Catalog/ProductPages/PipelinePlus'));
const RavenSkull = React.lazy(() => import('./Components/Catalog/ProductPages/RavenSkull'));
const Repton1 = React.lazy(() => import('./Components/Catalog/ProductPages/Repton1'));
const ScreenSaver = React.lazy(() => import('./Components/Catalog/ProductPages/ScreenSaver'));
const VoiceMemberships = React.lazy(() => import('./Components/Catalog/ProductPages/VoiceMemberships'));

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
}

function App() {
  useScrollToTop();
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);
  return (
    <div className="App">
      <Nav />
      <div
        className={ `${transitionStage}` }
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransitionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}
      >
        <Routes location={displayLocation}>
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
          <Route
            path="product-overview"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProductOverview />
              </Suspense>
            }
          />
          <Route
            path="pricing"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Pricing />
              </Suspense>
            }
          />
          <Route
            path="w9form"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <W9Form />
              </Suspense>
            }
          />
          <Route
            path="guarantee"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <OurGuarantee />
              </Suspense>
            }
          />
          <Route
            path="product/addressnmore"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AddressNmore />
              </Suspense>
            }
          />
          <Route
            path="product/employeeschedule"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <EmployeeSchedule />
              </Suspense>
            }
          />
          <Route
            path="product/filecommander2"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <FileCommander2 />
              </Suspense>
            }
          />
          <Route
            path="product/filecommanderwin"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <FileCommanderWin />
              </Suspense>
            }
          />
          <Route
            path="product/goobs"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Goobs />
              </Suspense>
            }
          />
          <Route
            path="product/moneyquizcounter"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MoneyQuizCounter />
              </Suspense>
            }
          />
          <Route
            path="product/netdrive"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NetDrive />
              </Suspense>
            }
          />
          <Route
            path="product/osezine"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <OsEzine />
              </Suspense>
            }
          />
          <Route
            path="product/personaltimekeeper"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PersonalTimeKeeper />
              </Suspense>
            }
          />
          <Route
            path="product/pipelineplus"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PipelinePlus />
              </Suspense>
            }
          />
          <Route
            path="product/ravenskull"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RavenSkull />
              </Suspense>
            }
          />
          <Route
            path="product/repton1"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Repton1 />
              </Suspense>
            }
          />
          <Route
            path="product/screensaver"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ScreenSaver />
              </Suspense>
            }
          />
          <Route
            path="product/voicememberships"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <VoiceMemberships />
              </Suspense>
            }
          />
          <Route path="*" element={<Error />} />
          <Route path="success" element={<Success />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
