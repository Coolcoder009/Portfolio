import React from 'react';
import { Award, BookOpen, Users, Lightbulb } from 'lucide-react';

const About = () => {


  const achievements = [
    {
      icon: Award,
      title: "Best Team Player Recognition",
      description: "Recipient of multiple AI breakthroughs",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: BookOpen,
      title: "IBM Certified AI Engineer",
      description: "Dived into Deep ML & DL stuffs",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional AI teams of 5+ engineers",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Academic Excellence",
      description: "One among Top 10 in CSE dept",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate AI engineer dedicated to pushing the boundaries of artificial intelligence 
            and creating solutions that make a meaningful impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Story */}
          <div className="space-y-8">
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I was your classic 12th-grade Bio-Maths kid — halfway into becoming a doctor, or so I thought. 
                  The plan? Stethoscope, white coat, and saving lives. Reality?
                </p>
                <p>
                  So, I did what any confused desi student does next: picked engineering.
                  Started off dreaming in Java, chasing SDE roles, leetcode-ing my way through life.
                </p>
                <p>
                  But somewhere along the road — probably after building one too many CRUD apps — I stumbled into the world of AI. 
                  And it hit different. Models that learn, systems that adapt, and logic that thinks? Now that’s something worth debugging for.
                </p>
                <p>
                  Since then, I’ve been deep in the AI trenches — from building chatbots that talk back better than your cousin, to crafting ML pipelines and tweaking neural networks like puzzle pieces.
                  Right now? I'm pushing boundaries, automating the boring, and keeping it ethical (most days 😄).
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Achievements */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-black/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.gradient} flex-shrink-0`}>
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;