import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Game() {
  const [darkMode, setDarkMode] = useState(true);

  const instructions = [
    { step: "Step 1: Click the Download Game Button", detail: "Click the 'Download Game' button on the left side of this page. You will be redirected to the official game page." },
    { step: "Step 2: Download the Game", detail: "On the redirected page, find and download the `game.zip` file to your device." },
    { step: "Step 3: Extract the File", detail: "Locate the downloaded zip file and extract its contents." },
    { step: "Step 4: Install the Game", detail: "Run the setup or installation file inside the extracted folder." },
    { step: "Step 5: Enjoy!", detail: "Launch EcoSplash and dive into an immersive water conservation adventure!" },
    { step: "Step 6: Controls Info", detail: "Press the 'M' key during gameplay to view controls for each level." } 
  

  return (
    <div className="relative min-h-screen overflow-hidden font-sans"> {/* Added font-sans class */}
      {/* Animated water background gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }} // Faster water effect
        style={{
          background: "linear-gradient(120deg, #00c6ff, #0072ff)",
          backgroundSize: "200% 200%",
          opacity: 0.7
        }}
      />

      {/* First wave layer */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full z-0"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <path
          fill="#00bfff"
          fillOpacity="0.6"
          d="M0,224L60,202.7C120,181,240,139,360,133.3C480,128,600,160,720,181.3C840,203,960,213,1080,197.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </motion.svg>

      {/* Second wave layer for depth */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full z-0"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      >
        <path
          fill="#0072ff"
          fillOpacity="0.4"
          d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,186.7C672,203,768,245,864,250.7C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </motion.svg>

      {/* Foreground Content */}
      <div className="relative z-10 flex min-h-screen">
        {/* Left Panel */}
        <div className={`w-1/3 p-8 border-r flex flex-col ${darkMode ? 'bg-black bg-opacity-70 text-white' : 'bg-blue-900 bg-opacity-80 text-white'}`}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mb-6 px-4 py-2 text-sm font-medium rounded-lg bg-white text-black hover:bg-gray-100 self-start"
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>

          <h1 className="text-5xl font-bold mb-12 font-montserrat">EcoSplash</h1>

          <p className="text-lg leading-relaxed">
            EcoSplash is an interactive, water-based educational game designed to raise awareness about water usage and conservation. Through engaging gameplay, players explore aquatic environments, complete eco-missions, and learn real-world strategies to protect one of Earth's most precious resources. Dive into a fun-filled adventure that turns learning about sustainability into an immersive experience!
          </p>

          <a
            href="https://cv-2307.itch.io/ecosplash"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition w-fit"
          >
            Download Game
          </a>
        </div>

        {/* Right Panel with Instructions */}
        <div className={`${darkMode ? 'bg-black bg-opacity-70 text-white' : 'bg-white bg-opacity-90 text-gray-900'} w-2/3 p-8 overflow-auto`}>
          <div className={`rounded-lg shadow-lg p-6 ${darkMode ? 'bg-black bg-opacity-60' : 'bg-white bg-opacity-80'}`}>
            <h2 className="text-2xl font-semibold mb-4">Game Instructions</h2>
            <ol className="list-decimal pl-6 space-y-4">
              {instructions.map((instruction, index) => (
                <li key={index} className="pb-2">
                  <h3 className="text-xl font-bold">{instruction.step}</h3>
                  <p className="text-sm">{instruction.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
