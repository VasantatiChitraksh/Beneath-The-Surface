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
    </div>
  );
}

export default App;