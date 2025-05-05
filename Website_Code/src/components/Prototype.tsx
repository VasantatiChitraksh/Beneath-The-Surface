import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GoogleDrivePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes bubbleMove {
        0% { transform: translateY(0); opacity: 0.3; }
        50% { opacity: 0.6; }
        100% { transform: translateY(-1000px); opacity: 0; }
      }

      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      .animate-bubble {
        animation: bubbleMove linear infinite;
      }

      .animate-fade-in-up {
        animation: fadeInUp 1s ease-out forwards;
      }

      .delay-150 { animation-delay: 0.15s; }
      .delay-300 { animation-delay: 0.3s; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-900 via-blue-950 to-black text-white font-sans overflow-hidden px-6">
      
      {/* Background bubbles */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-400 opacity-20 rounded-full animate-bubble"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 10}s`,
              bottom: `-${Math.random() * 100}px`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl text-center font-sans">
        <h1 className="text-5xl font-bold mb-8 animate-fade-in-up">Watch Prototype</h1>

        <p className="text-xl mb-6 animate-fade-in-up delay-150">
          The primary objective of this research was not only to evaluate the underground water quality at IIT Tirupati, but also to design a practical and sustainable prototype tailored for campus implementation. The focus was on developing a solution that is user-friendly, cost-efficient, environmentally responsible, and technically robust in addressing the specific water quality challenges identified through rigorous testing.
          <br /><br />
          To explore the proposed solution in detail, please view the prototype.
        </p>

        <button
          onClick={() => window.open('https://drive.google.com/file/d/1xDda0kiOlLXlPm9MTmsjQ1u-IL3MJhIU/view?usp=sharing', '_blank')}
          className="mt-8 px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-200 ease-in-out bg-white text-black hover:bg-gray-200 shadow-md animate-fade-in-up delay-300"
        >
          Prototype
        </button>
      </div>
    </div>
  );
}

export default GoogleDrivePage;
