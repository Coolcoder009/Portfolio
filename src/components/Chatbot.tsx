import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `Hi! I'm DG's AI assistant. You can ask me about his:
- 📚 Education
- 💼 Work Experience
- 🧠 Skills
- 💡 Projects
- 🏆 Achievements
- 📬 Contact

Or click a suggestion below to begin!`,
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedQuestions = [
    { label: "Skills", text: "What are your skills?" },
    { label: "Projects", text: "Tell me about your projects" },
    { label: "Experience", text: "Tell me about your experience" },
    { label: "Education", text: "Tell me about your education" },
    { label: "Achievements", text: "What are your achievements?" },
    { label: "Contact", text: "How can I contact you?" }
  ];

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('skill')) {
      return `I specialize in Python, Java, C, SQL, TensorFlow, PyTorch, LangChain, FastAPI, Streamlit, and GCP (basics). I'm well-versed in CNN, RNN, Transformers, and both supervised & unsupervised ML algorithms.`;
    }

    if (message.includes('project')) {
      return `Here are some of my key projects:
1. AI Document Manager (OCR + LLM + FastAPI)
2. Sign Motion Regenerator (MediaPipe + real-time gestures)
3. Speech-integrated Medical Chatbot (multilingual + Gemini/Qwen + RAG)
4. Central LLM Platform (token-based LLM load balancing on VMs)`;
    }

    if (message.includes('experience')) {
      return `I'm currently a Machine Learning Engineer at Constient Global Solutions (Jan 2024 – Present). I lead projects using FastAPI, MediaPipe, Docker, and VM deployments, including real-time sign language gesture rendering for accessibility.`;
    }

    if (message.includes('education')) {
      return `I earned my Bachelor's in Computer Science & Engineering from RMD Engineering College, Chennai (2020–2024). My coursework covered Java, C, Python, ML, DL, DBMS, OOP, and SQL.`;
    }

    if (message.includes('achievement')) {
      return `Some of my recognitions include:
🏅 Best Teamwork Award (Constient)
🎓 IBM Certified AI Engineer
🎖️ Academic Top 10 in CSE Department
👨‍💻 2nd place in VIT Coding Comp 2022
⚡ SkillRack CSE Top 10 Performer (2020–24)`;
    }

    if (message.includes('contact') || message.includes('hire')) {
      return `I'm open to collaborations! Connect with me on:
🔗 LinkedIn: https://www.linkedin.com/in/dilli-ganesh-d-453137284/
💻 GitHub: https://github.com/Coolcoder009
📩 Email: dgvishal0603@gmail.com`;
    }

    return `That's an interesting question! You can ask about Skills, Projects, Education, Experience, Achievements, or Contact details. Or click one of the suggestions!`;
  };

  const handleSendMessage = async (customText?: string) => {
    const input = customText || inputValue;
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(input),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen
            ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-400 hover:to-pink-400'
            : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400'
        } text-white transform hover:scale-110`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 h-96 bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-4 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">AI Assistant</h3>
                <p className="text-xs text-gray-300">Ask me about my work!</p>
              </div>
              <div className="ml-auto flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-green-400">Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${
                  message.isBot ? 'justify-start' : 'justify-end'
                }`}
              >
                {message.isBot && (
                  <div className="p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                )}

                <div
  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
    message.isBot
      ? 'bg-cyan-500/20 text-white'
      : 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
  }`}
>
  {message.text}
</div>


                {!message.isBot && (
                  <div className="p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex-shrink-0">
                    <User className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-start space-x-2">
                <div className="p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-white/10 px-3 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          <div className="px-4 py-2 flex flex-wrap gap-2 border-t border-white/10 bg-black/20">
            {predefinedQuestions.map((item, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(item.text)}
                className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400 transition"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex space-x-2">
              <input
  type="text"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  onKeyPress={handleKeyPress}
  placeholder="Ask me anything..."
  className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 text-sm"
/>

              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-300"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
