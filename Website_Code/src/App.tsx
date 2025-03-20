import React from 'react';
import { Routes, Route } from "react-router-dom";
import { BarChart3Icon } from 'lucide-react';
import About from "./components/About";
import Statistics from "./components/Statistics";
import SurveyForm from "./components/SurveyForm";
import Header from './components/Header';
import Homepage from './components/homepage';
import Tests from './components/tests';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/survey" element={<SurveyForm />} />
        <Route path="/tests" element={<Tests/>}/>
      </Routes>
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 IIT Tirupati Water Conservation Initiative</p>
        </div>
      </footer>
    </div>
  );
}

export default App;