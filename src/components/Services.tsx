import React from 'react';
import { Dumbbell, Salad, Users, Video } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Dumbbell className="w-12 h-12 text-green-500" />,
      title: "Personal Training",
      description: "One-on-one training sessions tailored to your specific goals and fitness level."
    },
    {
      icon: <Salad className="w-12 h-12 text-green-500" />,
      title: "Nutrition Planning",
      description: "Customized meal plans designed to complement your training and lifestyle."
    },
    {
      icon: <Video className="w-12 h-12 text-green-500" />,
      title: "Online Coaching",
      description: "Remote training and support for clients anywhere in the world."
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: "Group Sessions",
      description: "High-energy group workouts that foster motivation and community."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What We Do at Real Fitness</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            At Real Fitness, the focus is YOU vs YOU—unlocking your potential, one step at a time. 
            We simplify fitness with strategies that are designed for your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-green-500 mb-4">Personalized</h3>
            <p className="text-gray-600">Your journey is unique, and your plan will be too.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-green-500 mb-4">Backed by Expertise</h3>
            <p className="text-gray-600">With global experience and proven results, you're in trusted hands.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-green-500 mb-4">Sustainable</h3>
            <p className="text-gray-600">Achieve lasting results with a balanced approach that fits your life.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-green-500 mb-4">Life-Changing</h3>
            <p className="text-gray-600">From managing conditions like high blood pressure, cholesterol, or diabetes to feeling stronger and more confident, we're here to help you thrive.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-white p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">The RF Way</h2>
          <p className="text-xl text-gray-600 italic mb-8">
            "You are a masterpiece—uniquely real. No need to compare, just grow and reveal."
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Are you ready to take the first step toward transforming your life?
          </p>
          <a
            href="#contact"
            className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors inline-block"
          >
            Let's Make It Happen Today
          </a>
        </div>
      </div>
    </section>
  );
}