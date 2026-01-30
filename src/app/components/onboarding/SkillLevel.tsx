import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, TrendingUp, Award, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export function SkillLevel() {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState<string>('');

  const levels = [
    {
      id: 'beginner',
      icon: Star,
      title: 'Beginner',
      description: 'Just starting out or exploring new paths',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'intermediate',
      icon: TrendingUp,
      title: 'Intermediate',
      description: 'Have some experience and want to grow',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'advanced',
      icon: Award,
      title: 'Advanced',
      description: 'Experienced and looking to specialize',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  const handleContinue = () => {
    if (selectedLevel) {
      localStorage.setItem('skillLevel', selectedLevel);
      navigate('/time-availability');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pb-20 md:pb-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl w-full space-y-6"
      >
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-sm text-indigo-600 font-medium">
            <div className="flex gap-1">
              <div className="w-8 h-1 bg-indigo-600 rounded-full"></div>
              <div className="w-8 h-1 bg-indigo-600 rounded-full"></div>
              <div className="w-8 h-1 bg-indigo-200 rounded-full"></div>
              <div className="w-8 h-1 bg-indigo-200 rounded-full"></div>
            </div>
            <span>Step 2 of 4</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">What's your current level?</h2>
          <p className="text-gray-600">Be honest - this helps us personalize your journey</p>
        </div>

        <div className="space-y-4">
          {levels.map((level, index) => (
            <motion.button
              key={level.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedLevel(level.id)}
              className={`w-full p-6 rounded-2xl border-2 transition-all text-left ${
                selectedLevel === level.id
                  ? 'border-indigo-500 bg-indigo-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-indigo-200 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center flex-shrink-0`}>
                  <level.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{level.title}</h3>
                  <p className="text-sm text-gray-600">{level.description}</p>
                </div>
                {selectedLevel === level.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: selectedLevel ? 1.02 : 1 }}
          whileTap={{ scale: selectedLevel ? 0.98 : 1 }}
          onClick={handleContinue}
          disabled={!selectedLevel}
          className={`w-full py-4 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 ${
            selectedLevel
              ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg hover:shadow-xl'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continue
          <ChevronRight size={20} />
        </motion.button>
      </motion.div>
    </div>
  );
}
