import React, { useState } from "react";
import { BarChart3Icon } from "lucide-react";

const hostels = [
  "Kedhar",
  "Bhairav",
  "Sahana",
  "basant",
  "Des",
  "Malhar",
  "Abheri",
  "Faculty",
];

const Statistics = () => {
  const [selectedHostel, setSelectedHostel] = useState("Malhar");

  return (
    <section id="statistics" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <BarChart3Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Water Usage Statistics
          </h2>
          <div className="max-w-xs mx-auto">
            <select
              value={selectedHostel}
              onChange={(e) => setSelectedHostel(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-4"
            >
              {hostels.map((hostel) => (
                <option key={hostel} value={hostel}>
                  {hostel}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid for Bar Charts and Pie Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Drinking Water - Bar Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-center mb-6">
              Drinking Water - Bar Chart
            </h3>
            <img
              src={`/drinking_water_rating_bar_${selectedHostel}.png`}
              alt={`Drinking Water Rating for ${selectedHostel}`}
              className="w-full h-auto rounded-lg"
              onError={(e) => (e.currentTarget.src = "/placeholder.png")}
            />
          </div>

          {/* Tap Water - Bar Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-center mb-6">
              Tap Water - Bar Chart
            </h3>
            <img
              src={`/tap_water_rating_bar_${selectedHostel}.png`}
              alt={`Tap Water Rating for ${selectedHostel}`}
              className="w-full h-auto rounded-lg"
              onError={(e) => (e.currentTarget.src = "/placeholder.png")}
            />
          </div>

          {/* Drinking Water - Pie Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-center mb-6">
              Drinking Water - Pie Chart
            </h3>
            <img
              src={`/drinking_water_rating_pie_${selectedHostel}.png`}
              alt={`Drinking Water Pie Chart for ${selectedHostel}`}
              className="w-full h-auto rounded-lg"
              onError={(e) => (e.currentTarget.src = "/placeholder.png")}
            />
          </div>

          {/* Tap Water - Pie Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-center mb-6">
              Tap Water - Pie Chart
            </h3>
            <img
              src={`/tap_water_rating_pie_${selectedHostel}.png`}
              alt={`Tap Water Pie Chart for ${selectedHostel}`}
              className="w-full h-auto rounded-lg"
              onError={(e) => (e.currentTarget.src = "/placeholder.png")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
