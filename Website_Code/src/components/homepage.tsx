
import Header from './Header';
import Hero from './Hero';
import Statistics from './Statistics';
import About from './About';

const Homepage = () => {
    return(
    <div>
        <Hero/>
        <Statistics/>
        <About/>
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 IIT Tirupati Water Conservation Initiative</p>
        </div>
      </footer>
    </div>
    );
};
export default Homepage;