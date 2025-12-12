import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";
import './App.css';
import Portfolio from "./pages/Portfolio";
import AOSScrollManager from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      <AOSScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </Router>
  );
}

export default App;
