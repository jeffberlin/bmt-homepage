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
const CatalogProductList = lazy(() => import('./Components/CatalogPages/CatalogProductList'));
const Contact = lazy(() => import('./Components/Contact'));
const AffiliateProgram = lazy(() => import('./Components/AffiliateProgram'));
const Customers = lazy(() => import('./Components/Customers'));
const FAQ = lazy(() => import('./Components/FAQ'));
const Pricing = lazy(() => import('./Components/Pricing/Pricing'));
const W9form = lazy(() => import('./Components/W9form'));
const OurGuarantee = lazy(() => import('./Components/OurGuarantee'));
const Error = lazy(() => import('./Components/Error'));

// Catalog Product pages
const AddressNmore = lazy(() => import('./Components/CatalogPages/ProductPages/AddressNmore'));
const EmployeeSchedule = lazy(() => import('./Components/CatalogPages/ProductPages/EmployeeSchedule'));
const FileCommanderWin = lazy(() => import('./Components/CatalogPages/ProductPages/FileCommanderWin'));
const FileCommander2 = lazy(() => import('./Components/CatalogPages/ProductPages/FileCommander2'));
const Goobs = lazy(() => import('./Components/CatalogPages/ProductPages/Goobs'));
const InCharge = lazy(() => import('./Components/CatalogPages/ProductPages/InCharge'));
const MoneyQuizCounter = lazy(() => import('./Components/CatalogPages/ProductPages/MoneyQuizCounter'));
const NetDrive = lazy(() => import('./Components/CatalogPages/ProductPages/NetDrive'));
const OsEzine = lazy(() => import('./Components/CatalogPages/ProductPages/OsEzine'));
const PersonalTimeKeeper = lazy(() => import('./Components/CatalogPages/ProductPages/PersonalTimeKeeper'));
const PipelinePlus = lazy(() => import('./Components/CatalogPages/ProductPages/PipelinePlus'));
const RavenSkull = lazy(() => import('./Components/CatalogPages/ProductPages/RavenSkull'));
const Repton1 = lazy(() => import('./Components/CatalogPages/ProductPages/Repton1'));
const ScreenSaver = lazy(() => import('./Components/CatalogPages/ProductPages/ScreenSaver'));
const VoiceMemberships = lazy(() => import('./Components/CatalogPages/ProductPages/VoiceMemberships'));

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
          <Route path="/product/addressnmore" component={AddressNmore} />
          <Route path="/product/employeeschedule" component={EmployeeSchedule} />
          <Route path="/product/filecommanderwin" component={FileCommanderWin} />
          <Route path="/product/filecommander2" component={FileCommander2} />
          <Route path="/product/goobs" component={Goobs} />
          <Route path="/product/incharge" component={InCharge} />
          <Route path="/product/moneyquizcounter" component={MoneyQuizCounter} />
          <Route path="/product/netdrive" component={NetDrive} />
          <Route path="/product/osezine" component={OsEzine} />
          <Route path="/product/personaltimekeeper" component={PersonalTimeKeeper} />
          <Route path="/product/pipelineplus" component={PipelinePlus} />
          <Route path="/product/ravenskull" component={RavenSkull} />
          <Route path="/product/repton1" component={Repton1} />
          <Route path="/product/screensaver" component={ScreenSaver} />
          <Route path="/product/voicememberships" component={VoiceMemberships} />
          <Route path="/products" component={CatalogProductList} />
          <Route path="/contact" component={Contact} />
          <Route path="/affiliates" component={AffiliateProgram} />
          <Route path="/customers" component={Customers} />
          <Route path="/faqs" component={FAQ} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/w9form" component={W9form} />
          <Route path="/our-guarantee" component={OurGuarantee} />
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
