import React, { useState } from 'react';

function Tests() {
  const [description, setDescription] = useState('');
  const [selectedTest, setSelectedTest] = useState('test-1');

  const locations = [
    "AB-1",
    "LHC",
    "Malhar",
    "Des",
    "Kedhar",
    "Abheri",
    "Bhairav",
    "College Pond",
    "Yerpedu"
  ];
  
  const tableData = locations.map((location, index) => ({
    id: index + 1,
    location,
    value: `${(Math.random() * 100).toFixed(2)} units`
  }));

  const testOptions = [
    { id: 'test-1', name: 'Water Quality Test' },
    { id: 'test-2', name: 'pH Level Test' },
    { id: 'test-3', name: 'Turbidity Test' },
    { id: 'test-4', name: 'Dissolved Oxygen Test' },
    { id: 'test-5', name: 'Dissolved Oxygen Test' },
  ];

  return (
    <div className="min-h-[calc(100vh-4.15rem)] h-[calc(100vh-4.15rem)] flex overflow-hidden">
      {/* Left Panel - Fixed  */}
      <div className="w-1/3 p-8 border-r border-gray-200 flex flex-col bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900">
        <div className="flex-shrink-0">
          <h1 className="text-5xl font-bold mb-10 text-white">
            Tests
          </h1>
          
          {/* Dropdown Menu */}
          <div className="mb-6">
            <label htmlFor="test-type" className="block text-xl font-medium mb-2 text-white">
              Select Test Type
            </label>
            <select
              id="test-type"
              value={selectedTest}
              onChange={(e) => setSelectedTest(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white bg-opacity-90 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              {testOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-xl font-medium mb-2 text-white">
              Test Description
            </label>
            <div className="mt-1 relative">
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={8}
                readOnly
                className="block w-full rounded-md border-gray-300 bg-white bg-opacity-0 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm overflow-y-auto resize-none"
                placeholder="Test Information"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Scrollable  */}
      <div className="w-2/3 bg-gray-50 p-8 overflow-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="sticky top-0 bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="sticky top-0 bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tests;