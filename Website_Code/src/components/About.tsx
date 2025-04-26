import React from "react";
import { InfoIcon } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white text-gray-800 font-sans transition-all duration-500"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <InfoIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-4">
              About the Project
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-gray-700 space-y-6">
            <p>
              The{" "}
              <strong className="text-gray-900">
                Water Quality and Consumption Monitoring System
              </strong>{" "}
              at{" "}
              <strong className="text-gray-900">IIT Tirupati</strong> is an
              initiative designed to collect and analyze water usage data across
              various hostels. We gather survey responses from students and
              staff regarding their experiences with drinking water and tap
              water quality.
            </p>

            <p>
              Our project presents{" "}
              <strong className="text-gray-900">interactive visualizations</strong>, including{" "}
              <strong className="text-gray-900">pie charts</strong> and{" "}
              <strong className="text-gray-900">bar graphs</strong>, that
              illustrate key water quality trends in each hostel. This enables
              us to identify patterns in water usage and potential areas for
              improvement.
            </p>

            <p>
              Additionally, we conduct{" "}
              <strong className="text-gray-900">laboratory testing</strong> on
              water samples from different hostels and campus locations. These
              tests measure essential parameters such as{" "}
              <strong className="text-gray-900">
                pH, alkalinity, acidity, turbidity
              </strong>
              , and other{" "}
              <strong className="text-gray-900">quality indicators</strong>,
              ensuring that the water meets safety standards.
            </p>

            <p>
              Through this initiative, we aim to{" "}
              <strong className="text-gray-900">raise awareness</strong> about
              water quality and conservation. By analyzing the data and sharing
              insights, we educate the campus community about the importance of{" "}
              <strong className="text-gray-900">
                water purity and responsible consumption
              </strong>
              . Our goal is to encourage{" "}
              <strong className="text-gray-900">
                informed decision-making and sustainable water management
                practices
              </strong>{" "}
              for a healthier campus environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
