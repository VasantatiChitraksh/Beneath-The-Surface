import React, { useState } from 'react';

interface TextBoxContent {
  test: string;
  results: string;
}

const Tests = () => {
  const [selectedOption, setSelectedOption] = useState('Alkalinity');
  
  // Define content for different dropdown options
  const contentMap: Record<string, TextBoxContent> = {
    Alkalinity: {
      test: "This test shows the Alkalinity levels",
      results: "These are results for Option 1"
    },
    Acidity: {
      test: "This test shows the Acidity levels",
      results: "These are results for Option 2"
    },
    ph: {
        test: "This test shows the pH levels",
        results: "These are results for Option 2"
    },
    Turbidty: {
        test: "This test shows the Turbidity levels",
        results: "These are results for Option 2"
    },
    Hardness: {
      test: "This test shows the Hardness levels",
      results: "These are results for Option 3"
    }
  };

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section id="tests" className="py-16 bg-white">
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <div className="mb-6">
          <label htmlFor="options" className="block text-sm font-medium text-gray-700 mb-2">
            Select an Option
          </label>
          <select
            id="options"
            value={selectedOption}
            onChange={handleDropdownChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="Alkalinity">Alkalinity</option>
            <option value="Acidity">Acidity</option>
            <option value="ph">pH</option>
            <option value="Hardness">Hardness</option>
            <option value="Turbidty">Turbidty</option>
          </select>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Info</h3>
            <textarea
              readOnly
              value={contentMap[selectedOption].test}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 min-h-[100px]"
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Results</h3>
            <textarea
              readOnly
              value={contentMap[selectedOption].results}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 min-h-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Tests;