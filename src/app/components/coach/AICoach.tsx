import React, { useState } from 'react';
import { Send, Bot, User, Sparkles, Lightbulb, Target, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function AICoach() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm your AI Career Coach. I'm here to help you navigate your career journey, answer questions, and provide personalized guidance. How can I help you today?",
      timestamp: new Date(Date.now() - 300000)
    }
  ]);
  const [input, setInput] = useState('');

  const quickActions = [
    { icon: Lightbulb, text: 'How do I improve my skills?', color: 'from-yellow-500 to-orange-500' },
    { icon: Target, text: 'What should I focus on this week?', color: 'from-blue-500 to-cyan-500' },
    { icon: TrendingUp, text: 'Am I on track with my goals?', color: 'from-green-500 to-emerald-500' },
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      role: 'user' as const,
      content: input,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "That's a great question! Based on your current progress in Week 2 of your roadmap, I'd recommend focusing on completing your Data Structures module first. You're doing well with Arrays and Lists - keep up the great work!",
        "Looking at your skill gap analysis, I notice you're strong in Python basics (85%). To improve further, I suggest: 1) Practice more LeetCode problems daily, 2) Build a small project using what you've learned, 3) Focus on the areas where you scored below 50%.",
        "You're making excellent progress! You've completed 50% of this week's goals, which is right on track. Based on your 10h/week commitment, you should be able to finish the remaining tasks comfortably. Keep going!"
      ];

      const response = {
        role: 'assistant' as const,
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  const handleQuickAction = (text: string) => {
    setInput(text);
  };

  return (
    <div className="max-w-md mx-auto md:max-w-4xl px-4 py-6 pb-24 md:pb-6 md:pt-24 h-[calc(100vh-8rem)] flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 flex flex-col space-y-4"
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">AI Career Coach</h1>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Online & Ready to Help</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}
            >
              {message.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              
              <div className={`max-w-[80%] rounded-2xl p-4 ${
                message.role === 'user'
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white'
                  : 'bg-white border border-indigo-100 shadow-sm'
              }`}>
                <p className={`text-sm ${message.role === 'user' ? 'text-white' : 'text-gray-700'}`}>
                  {message.content}
                </p>
                <p className={`text-xs mt-2 ${
                  message.role === 'user' ? 'text-indigo-100' : 'text-gray-400'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>

              {message.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        {messages.length === 1 && (
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Quick questions:</p>
            <div className="grid grid-cols-1 gap-2">
              {quickActions.map((action, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => handleQuickAction(action.text)}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-indigo-100 hover:shadow-md transition-all text-left"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center flex-shrink-0`}>
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">{action.text}</span>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="bg-white rounded-2xl border-2 border-indigo-100 p-2 shadow-sm">
          <div className="flex items-end gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask me anything about your career..."
              className="flex-1 resize-none border-0 outline-none p-2 text-sm max-h-32"
              rows={1}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              disabled={!input.trim()}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                input.trim()
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              <Send size={18} />
            </motion.button>
          </div>
        </div>

        <p className="text-xs text-center text-gray-500">
          AI Coach provides guidance based on your progress and goals
        </p>
      </motion.div>
    </div>
  );
}
