import React, {Suspense, lazy} from 'react';
import { Route, Switch } from "react-router-dom";
import './css/App.css';
import './css/navigation.css';
import './css/HomepageCSS/header.css';
import './css/HomepageCSS/tag.css';
import './css/HomepageCSS/features.css';
import './css/HomepageCSS/testimonials.css';
import './css/HomepageCSS/aboutSection.css';
import './css/footer.css';
import './css/about.css';
import './css/news.css';
import './css/privacy.css';
import './css/contact.css';
import './css/affiliates.css';

const Navigation = lazy(() => import('./Components/Navigation'));
const Footer = lazy(() => import('./Components/Footer'));
const Home = lazy(() => import('./Components/Homepage/Home'));
const About = lazy(() => import('./Components/About'));
const News = lazy(() => import('./Components/News'));
const Privacy = lazy(() => import('./Components/PrivacyPolicy'));
const Contact = lazy(() => import('./Components/Contact'));
const AffiliateProgram = lazy(() => import('./Components/AffiliateProgram'));
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
          <Route path="/contact" component={Contact} />
          <Route path="/affiliates" component={AffiliateProgram} />
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
