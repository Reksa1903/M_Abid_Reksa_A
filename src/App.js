import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from   'react-router-dom';
const Home = lazy(() => import('./Home'));
const Navbar = lazy(() => import('./Navbar'));
const Fitur = lazy(() => import('./Fitur'));
const Pantau = lazy(() => import('./Pantau'));
const Forgontor = lazy(() => import('./pages/Forgontor'));
const Forlirboyo = lazy(() => import('./pages/Forlirboyo'));
const Fortebuireng = lazy(() => import('./pages/Fortebuireng'));
const Foralihya = lazy(() => import('./pages/Foralihya'));
const Penghubung = lazy(() => import('./Penghubung'));
const Ustadzarifin = lazy(() => import('./pages/Ustadzarifin'));
const Penulis = lazy(() => import('./Penulis'));
const API = lazy(() => import('./API/API'));
const App = () => (
<Router>
 <Suspense fallback={<div>Loading...</div>}>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/Home" element={<Home />} />
 <Route path="/Navbar" element={<Navbar />} />
 <Route path="/Fitur" element={<Fitur />} />
 <Route path="/Pantau" element={<Pantau />} />
 <Route path="/Forgontor" element={<Forgontor />} />
 <Route path="/Forlirboyo" element={<Forlirboyo />} />
 <Route path="/Fortebuireng" element={<Fortebuireng />} />
 <Route path="/Foralihya" element={<Foralihya />} />
 <Route path="/Penghubung" element={<Penghubung />} />
 <Route path="/Penulis" element={<Penulis />} />
 <Route path="/API" element={<API />} />


 
 
 </Routes>
 </Suspense>
</Router>
);
export default App
