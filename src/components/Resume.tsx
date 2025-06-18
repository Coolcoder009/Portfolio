import React from 'react';
import { Download, Calendar, Award, Briefcase, GraduationCap, Code } from 'lucide-react';

const Resume = () => {
  const experience = [
    {
      title: "AI/ML Engineer",
      company: "Constient Global Solutions",
      period: "2024 - Present",
      description: "Spearheading a project that integrates FastAPI, MediaPipe, and keypoint-based rendering to enhance communication access for the deaf-mute community",
      achievements: [
        "Built a real-time pipeline to extract and render 2D hand keypoints for sign language gestures with improved system responsiveness",
        "Produced four distinct machine learning prototypes aimed at solving current industry obstacles that resulted in enhanced interdepartmental collaboration metrics measured through increased project approval rates from stakeholders during quarterly assessments.",
        "Rewarded for best team player"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      school: "RMD Engineering College",
      period: "2020 - 2024",
      details: "Introduction to Java, C programming, Machine Learning, Deep Learning, Basics of SQL, Python, Fundamentals of Database Management System, Object Oriented Programming."
    },
    {
      degree: "Major in Biology - Maths",
      school: "Velammal MAtriculation Higher Secondary School",
      period: "2018 - 2020",
    }
  ];

  const certifications = [
    "IBM AI Engineering",
    "Computer Vision & Image Processing",
    "Deep Neural Networks with Pytorch"
  ];

  const technicalSkills = {
    "Programming Languages": ["Python", "Java", "C", "SQL", "Javascript(Basics)"],
    "ML/AI Frameworks": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Hugging Face", "Langchain", "RAG", "CNN", "RNN", "LSTM", "Transformers" ],
    "Cloud Platforms": ["AWS", "Google Cloud", "Hetzner"],
    "Tools & Technologies": ["Docker", "FastAPI", "Git", "Swagger", "Postman", "Streamlit"]
  };

  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Download my complete resume or explore my experience below
          </p>
          <a
          href="/Portfolio/DILLIGANESH_RESUME.pdf"
          download
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 mx-auto"
          >
          <Download className="h-4 w-4" />
          <span>Download PDF Resume</span>
          </a>

        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Briefcase className="h-6 w-6 text-cyan-400" />
                <h3 className="text-3xl font-bold text-white">Experience</h3>
              </div>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">{job.title}</h4>
                        <p className="text-cyan-400 font-semibold">{job.company}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{job.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <GraduationCap className="h-6 w-6 text-purple-400" />
                <h3 className="text-3xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                        <p className="text-purple-400 font-semibold">{edu.school}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-300">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Certifications */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Code className="h-5 w-5 text-green-400" />
                <h3 className="text-xl font-bold text-white">Technical Skills</h3>
              </div>
              <div className="space-y-6">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="text-gray-300 font-semibold mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 rounded-full border border-green-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="h-5 w-5 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>


            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;