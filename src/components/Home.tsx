import React from 'react';
import VideoPlayer from './VideoPlayer';
import { Sparkles, Brain, Zap, ChevronDown } from 'lucide-react';

const Home = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-20 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center flex-1">
        {/* Left side - Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-cyan-400" />
              <span className="text-cyan-400 font-semibold tracking-wide">Turning Ideas into AI Reality</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                Dilli Ganesh
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
               
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              I'm an AI/ML engineer passionate about creating intelligent solutions that transform 
              how we interact with technology. 
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg px-6 py-3">
              <Brain className="h-5 w-5 text-cyan-400" />
              <span className="text-cyan-100 font-medium">Machine Learning</span>
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-lg px-6 py-3">
              <Zap className="h-5 w-5 text-purple-400" />
              <span className="text-purple-100 font-medium">Deep Learning</span>
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-lg px-6 py-3">
              <Sparkles className="h-5 w-5 text-green-400" />
              <span className="text-green-100 font-medium">AI Innovation</span>
            </div>
          </div>
        </div>
        
        {/* Right side - Video */}
        <div className="flex justify-center lg:justify-end">
          <VideoPlayer />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToProjects}
          className="flex flex-col items-center space-y-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 animate-bounce group-hover:text-cyan-400" />
        </button>
      </div>
    </div>
  );
};

export default Home;