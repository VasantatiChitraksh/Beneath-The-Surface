import React from 'react';
import { InfoIcon } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <InfoIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              About the Project
            </h2>
          </div>

          <div className="text-gray-700 text-lg leading-relaxed">
            <p className="mb-6">
              The <strong>Water Quality and Consumption Monitoring System</strong> at 
              <strong> IIT Tirupati</strong> is an initiative designed to collect and analyze 
              water usage data across various hostels. We gather survey responses from 
              students and staff regarding their experiences with drinking water and tap water quality.
            </p>
            
            <p className="mb-6">
              Our project presents <strong>interactive visualizations</strong>, including 
              <strong> pie charts</strong> and <strong>bar graphs</strong>, that illustrate key 
              water quality trends in each hostel. This enables us to identify patterns 
              in water usage and potential areas for improvement.
            </p>

            <p className="mb-6">
              Additionally, we conduct <strong>laboratory testing</strong> on water samples 
              from different hostels and campus locations. These tests measure essential 
              parameters such as <strong>pH, alkalinity, acidity, turbidity</strong>, and 
              other <strong>quality indicators</strong>, ensuring that the water meets safety standards.
            </p>

            <p className="mb-6">
              Through this initiative, we aim to <strong>raise awareness</strong> about 
              water quality and conservation. By analyzing the data and sharing insights, 
              we educate the campus community about <strong>the importance of water purity 
              and responsible consumption</strong>. Our goal is to encourage 
              <strong> informed decision-making and sustainable water management practices</strong> 
              for a healthier campus environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
