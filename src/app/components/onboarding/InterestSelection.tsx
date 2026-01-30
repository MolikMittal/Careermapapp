import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Palette, TrendingUp, Heart, Building, Cpu, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export function InterestSelection() {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    { id: 'technology', icon: Code, label: 'Technology & Software', color: 'from-blue-500 to-cyan-500' },
    { id: 'design', icon: Palette, label: 'Design & Creative', color: 'from-purple-500 to-pink-500' },
    { id: 'business', icon: TrendingUp, label: 'Business & Finance', color: 'from-green-500 to-emerald-500' },
    { id: 'healthcare', icon: Heart, label: 'Healthcare & Medicine', color: 'from-red-500 to-rose-500' },
    { id: 'engineering', icon: Building, label: 'Engineering & Architecture', color: 'from-orange-500 to-amber-500' },
    { id: 'ai', icon: Cpu, label: 'AI & Data Science', color: 'from-indigo-500 to-violet-500' },
  ];

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selectedInterests.length > 0) {
      localStorage.setItem('interests', JSON.stringify(selectedInterests));
      navigate('/skill-level');
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
              <div className="w-8 h-1 bg-indigo-200 rounded-full"></div>
              <div className="w-8 h-1 bg-indigo-200 rounded-full"></div>
              <div className="w-8 h-1 bg-indigo-200 rounded-full"></div>
            </div>
            <span>Step 1 of 4</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">What interests you?</h2>
          <p className="text-gray-600">Select all fields that excite you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {interests.map((interest, index) => (
            <motion.button
              key={interest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => toggleInterest(interest.id)}
              className={`relative p-6 rounded-2xl border-2 transition-all text-left ${
                selectedInterests.includes(interest.id)
                  ? 'border-indigo-500 bg-indigo-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-indigo-200 hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${interest.color} flex items-center justify-center flex-shrink-0`}>
                  <interest.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{interest.label}</h3>
                </div>
                {selectedInterests.includes(interest.id) && (
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
          whileHover={{ scale: selectedInterests.length > 0 ? 1.02 : 1 }}
          whileTap={{ scale: selectedInterests.length > 0 ? 0.98 : 1 }}
          onClick={handleContinue}
          disabled={selectedInterests.length === 0}
          className={`w-full py-4 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 ${
            selectedInterests.length > 0
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
