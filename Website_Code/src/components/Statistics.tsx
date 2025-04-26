import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3Icon, SunIcon, MoonIcon } from "lucide-react";

const hostels = [
  "Kedhar",
  "Bhairav",
  "Sahana",
  "Basant",
  "Des",
  "Malhar",
  "Abheri",
  "Faculty",
];

const Statistics = () => {
  const [selectedHostel, setSelectedHostel] = useState("Malhar");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const bgStyle = isDarkMode
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    : "bg-gradient-to-br from-gray-100 via-white to-gray-100 text-gray-900";

  const cardStyle = isDarkMode
    ? "bg-gray-800 text-white border border-gray-700"
    : "bg-white text-gray-800 border border-gray-300";

  const selectStyle = isDarkMode
    ? "bg-gray-700 text-white"
    : "bg-white text-gray-800";

  return (
    <section
      id="statistics"
      className={`min-h-screen py-16 px-4 transition-all duration-500 ease-in-out ${bgStyle} font-sans`}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="relative flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center w-full">
            <BarChart3Icon className="h-14 w-14 mx-auto mb-4 text-blue-500" />
            <h2 className="text-4xl font-semibold mb-6 tracking-tight">
              Water Usage Statistics
            </h2>
            <div className="max-w-xs mx-auto">
              <select
                value={selectedHostel}
                onChange={(e) => setSelectedHostel(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg shadow-md focus:outline-none text-lg ${selectStyle}`}
              >
                {hostels.map((hostel) => (
                  <option key={hostel} value={hostel}>
                    {hostel}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="absolute top-6 right-6 md:static mt-6 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 transition duration-300"
          >
            {isDarkMode ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Chart Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[ 
            "drinking_water_rating_bar",
            "tap_water_rating_bar",
            "drinking_water_rating_pie",
            "tap_water_rating_pie",
          ].map((chartType, index) => (
            <motion.div
              key={chartType}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${cardStyle} p-6 rounded-2xl shadow-lg transition-all`}
            >
              <h3 className="text-xl font-semibold text-center mb-6">
                {chartType.includes("pie")
                  ? chartType.includes("drinking")
                    ? "Drinking Water - Pie Chart"
                    : "Tap Water - Pie Chart"
                  : chartType.includes("drinking")
                  ? "Drinking Water - Bar Chart"
                  : "Tap Water - Bar Chart"}
              </h3>
              <img
                src={`/${chartType}_${selectedHostel}.png`}
                alt={`${chartType} for ${selectedHostel}`}
                className="w-full h-auto rounded-lg border border-blue-400"
                onError={(e) => (e.currentTarget.src = "/placeholder.png")}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
