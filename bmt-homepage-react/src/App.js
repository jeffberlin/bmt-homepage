import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import './css/navigation.css';
import './css/header.css';
import './css/tag.css';

const Home = lazy(() => import('./Components/Home'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
