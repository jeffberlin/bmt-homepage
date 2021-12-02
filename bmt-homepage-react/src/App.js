import React, {Suspense, lazy} from 'react';
import { Route, Switch } from "react-router-dom";
import './css/App.css';
import './css/navigation.css';
import './css/HomepageCSS/header.css';
import './css/HomepageCSS/banner.css';
import './css/HomepageCSS/features.css';
import './css/HomepageCSS/testimonials.css';
import './css/HomepageCSS/aboutSection.css';
import './css/footer.css';
import './css/about.css';
import './css/news.css';
import './css/privacy.css';
import './css/catalog.css';
import './css/contact.css';
import './css/affiliates.css';
import './css/customers.css';
import './css/faq.css';
import './css/pricing.css';
import './css/w9form.css';

const Navigation = lazy(() => import('./Components/Navigation'));
const Footer = lazy(() => import('./Components/Footer'));
const Home = lazy(() => import('./Components/Homepage/Home'));
const About = lazy(() => import('./Components/About'));
const News = lazy(() => import('./Components/NewsPages/News'));
const Privacy = lazy(() => import('./Components/PrivacyPolicy'));
const CatalogHome = lazy(() => import('./Components/CatalogPages/CatalogHome'));
const Contact = lazy(() => import('./Components/Contact'));
const AffiliateProgram = lazy(() => import('./Components/AffiliateProgram'));
const Customers = lazy(() => import('./Components/Customers'));
const FAQ = lazy(() => import('./Components/FAQ'));
const Pricing = lazy(() => import('./Components/Pricing/Pricing'));
const W9form = lazy(() => import('./Components/W9form'));
const Error = lazy(() => import('./Components/Error'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/catalog" component={CatalogHome} />
          <Route path="/contact" component={Contact} />
          <Route path="/affiliates" component={AffiliateProgram} />
          <Route path="/customers" component={Customers} />
          <Route path="/faqs" component={FAQ} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/w9form" component={W9form} />
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
