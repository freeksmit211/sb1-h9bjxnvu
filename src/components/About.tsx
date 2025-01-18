import React from 'react';
import { Award, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Niel</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Personal Trainer"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6">My Story</h3>
            <div className="space-y-6 text-gray-600">
              <p>
                Hi, I'm Niel—a personal trainer and online coach dedicated to helping you take charge of your fitness journey.
              </p>
              <p>
                At 16, I faced a turning point in my life after losing my father to a heart attack. That moment inspired me to take control of my health and sparked a lifelong passion for fitness. Over the years, this passion has grown into my purpose: empowering others to transform their lives, just as I transformed mine.
              </p>
              <p>
                With 14 years of experience, including 4 years as a global trainer aboard luxury cruise ships, I've had the privilege of helping clients worldwide achieve their goals, regain confidence, and unlock their full potential. Now, it's your turn.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Certified</h4>
                <p className="text-gray-600">Professional Training</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Global</h4>
                <p className="text-gray-600">Experience</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="font-bold mb-2">14+ Years</h4>
                <p className="text-gray-600">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}