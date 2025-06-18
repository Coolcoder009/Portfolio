import React from 'react';
import { ExternalLink, Github, Brain, Bot, Zap, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Transformers - Scratch",
      description: "Built a Language translator from scratch - English to Tamil",
      tech: ["Python", "Pytorch"],
      icon: Brain,
      gradient: "from-cyan-500 to-blue-500",
      demo: "#",
      github: "https://github.com/Coolcoder009/Transformers-Scratch"
    },
    {
      title: "Descriminative Localization",
      description: "A research project on demonstrating how & where the model sees through Class Activation Mapping",
      tech: ["Python", "Colab", "Resnet", "Pytorch"],
      icon: Database,
      gradient: "from-orange-500 to-red-500",
      demo: "#",
      github: "https://github.com/Coolcoder009/Descriminative-Localization"
    },
    {
      title: "Medical Chatbot - Speech Integrated",
      description: "A chatbot which supports tamil & English service to answer user queries",
      tech: ["Python", "Gemini", "Qwen", "Whisper", "FastAPI"],
      icon: Bot,
      gradient: "from-purple-500 to-pink-500",
      demo: "#",
      github: "https://github.com/Coolcoder009/Speech-Integrated-Medical-Bot"
    },
    {
      title: "Tracking - Kalman Filter",
      description: "Real-time object detection and analysis system for industrial automation applications",
      tech: ["Python", "OpenCV"],
      icon: Zap,
      gradient: "from-green-500 to-teal-500",
      demo: "#",
      github: "https://github.com/Coolcoder009/Tracking-Kalman-Filter"
    },
    {
      title: "AI Integrated Document Management System",
      description: "Google drive similar application with AI features",
      tech: ["Python", "Qwen", "React", "Langchain", "Qdrant"],
      icon: Database,
      gradient: "from-orange-500 to-red-500",
      demo: "#",
      github: "https://github.com/Coolcoder009/AI-Integrated-Document-Management-System"
    },
    {
      title: "Resume Analyzer",
      description: "A system which analyzes resume & JD, then provides suggestions for Resume",
      tech: ["Python", "Gemini", "Qwen", "Anthrophic", "React", "Langchain", "FastAPI"],
      icon: Bot,
      gradient: "from-purple-500 to-pink-500",
      demo: "#",
      github: "https://github.com/Coolcoder009/Resume-Analyzer"
    }
  ];

  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of AI and machine learning projects that showcase 
            cutting-edge technology and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-black/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />

              {/* Project icon */}
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.gradient} mb-6`}>
                <project.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-white/10 text-gray-300 rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 px-4 py-2 border border-white/20 text-gray-300 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects link */}
        <div className="flex justify-end mt-8">
          <a
            href="https://github.com/Coolcoder009"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-cyan-400 hover:text-purple-400 transition-colors font-medium"
          >
            <span className="mr-2">More Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
