import Header from './Header';
import Hero from './Hero';
import Statistics from './Statistics';
import About from './About';

const Homepage = () => {
  return (
    <div className="bg-black text-white min-h-screen transition-colors duration-500">
      <Hero />
      <Statistics />
      <About />

      <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-8 mt-12 shadow-inner">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm sm:text-base">
            © 2025 IIT Tirupati Water Conservation Initiative
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
