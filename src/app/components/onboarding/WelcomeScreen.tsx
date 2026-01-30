import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Target, Map, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function WelcomeScreen() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Target,
      title: 'Personalized Guidance',
      description: 'AI-powered recommendations tailored to your goals'
    },
    {
      icon: Map,
      title: 'Clear Roadmaps',
      description: 'Step-by-step learning paths designed for you'
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Stay motivated with real-time achievement tracking'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pb-20 md:pb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8"
      >
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 mx-auto"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>
          
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to CareerPath
          </h1>
          
          <p className="text-base text-gray-600 max-w-sm mx-auto">
            Your personal AI career guide. We'll help you navigate your career journey with confidence and clarity.
          </p>
        </div>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-indigo-100"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/interests')}
          className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all"
        >
          Get Started
        </motion.button>

        <p className="text-center text-xs text-gray-500">
          Takes only 2 minutes to complete
        </p>
      </motion.div>
    </div>
  );
}
