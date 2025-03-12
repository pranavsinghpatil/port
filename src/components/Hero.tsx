// Hero.tsx
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { TechStack } from './TechStack';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-[#0A0A0A] text-white overflow-hidden">
      {/* AI/ML themed background */}
      <div className="absolute inset-0">
        {/* Neural network grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-20" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Neural connections */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="currentColor" className="text-blue-400" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#neural-pattern)" />
          </svg>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Hi, I'm Pranav
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              AI/ML Enthusiast & Data Scientist crafting intelligent solutions for tomorrow's challenges.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors
                         text-white font-medium flex items-center gap-2"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800/50 
                         transition-colors text-gray-300 font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right column - Profile image with neural network effect */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 
                          group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
            </div>
            <img
              src="src/static/image.png"
              alt="Pranav's Profile"
              className="relative rounded-full w-64 h-64 mx-auto object-cover border-2 border-gray-800"
            />
          </div>
        </div>
      </div>

      {/* Tech stack and Resume sections */}
      <div className="absolute bottom-8 right-8 w-[400px] z-10 space-y-4">
        <TechStack />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 z-10">
        <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
      </div>
    </section>
  );
}
