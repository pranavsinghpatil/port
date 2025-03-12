// Hero.tsx
import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 text-center">
        <img
          src="src/static/image.png"
          alt="Pranav's Profile"
          className="w-32 h-32 rounded-full mx-auto mb-8 shadow-lg"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I'm Pranav
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Computer Engineering Student | AI/ML Enthusiast
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </a>
    </section>
  );
}
