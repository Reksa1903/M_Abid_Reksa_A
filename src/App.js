import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from   'react-router-dom';
const Home = lazy(() => import('./Home'));
const Navbar = lazy(() => import('./Navbar'));
const Fitur = lazy(() => import('./Fitur'));
const Pantau = lazy(() => import('./Pantau'));
const App = () => (
<Router>
 <Suspense fallback={<div>Loading...</div>}>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/Home" element={<Home />} />
 <Route path="/Navbar" element={<Navbar />} />
 <Route path="/Fitur" element={<Fitur />} />
 <Route path="/Pantau" element={<Pantau />} />


 
 
 </Routes>
 </Suspense>
</Router>
);
export default App
