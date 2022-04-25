import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const Home = React.lazy(() => import('./Components/Homepage/Home'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
