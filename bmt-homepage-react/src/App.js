import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './css/App.css';
import './css/navigation.css';
import './css/HomepageCSS/header.css';
import './css/HomepageCSS/tag.css';
import './css/HomepageCSS/features.css';
import './css/HomepageCSS/testimonials.css';
import './css/HomepageCSS/aboutSection.css';
import './css/footer.css';


const Home = lazy(() => import('./Components/Homepage/Home'));
const Error = lazy(() => import('./Components/Error'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="*" component={Error} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
