import React, { useState } from 'react';
import { Clock, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface TimeAvailabilityProps {
  onComplete: (data: any) => void;
}

export function TimeAvailability({ onComplete }: TimeAvailabilityProps) {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);

  const timeOptions = [
    { hours: 5, label: '5 hours', desc: 'Light commitment' },
    { hours: 10, label: '10 hours', desc: 'Balanced approach' },
    { hours: 15, label: '15 hours', desc: 'Serious learner' },
    { hours: 20, label: '20+ hours', desc: 'Full commitment' },
  ];

  const handleComplete = () => {
    const interests = JSON.parse(localStorage.getItem('interests') || '[]');
    const skillLevel = localStorage.getItem('skillLevel') || '';
    
    onComplete({
      interests,
      skillLevel,
      timeAvailability: hoursPerWeek
    });
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
              <div className="w-8 h-1 bg-indigo-600 rounded-full"></div>
              <div className="w-8 h-1 bg-indigo-200 rounded-full"></div>
            </div>
            <span>Step 3 of 4</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">How much time can you commit?</h2>
          <p className="text-gray-600">We'll create a realistic plan that fits your schedule</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-indigo-100">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Clock className="w-8 h-8 text-indigo-600" />
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">{hoursPerWeek}</div>
              <div className="text-sm text-gray-600">hours per week</div>
            </div>
          </div>

          <input
            type="range"
            min="1"
            max="25"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
            className="w-full h-3 bg-indigo-100 rounded-full appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${((hoursPerWeek - 1) / 24) * 100}%, #e0e7ff ${((hoursPerWeek - 1) / 24) * 100}%, #e0e7ff 100%)`
            }}
          />

          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>1h</span>
            <span>25h</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {timeOptions.map((option) => (
            <motion.button
              key={option.hours}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setHoursPerWeek(option.hours)}
              className={`p-4 rounded-2xl border-2 transition-all ${
                hoursPerWeek === option.hours
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-200 bg-white hover:border-indigo-200'
              }`}
            >
              <div className="font-semibold text-gray-900">{option.label}</div>
              <div className="text-xs text-gray-600 mt-1">{option.desc}</div>
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleComplete}
          className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
        >
          Complete Setup
          <ChevronRight size={20} />
        </motion.button>

        <p className="text-center text-sm text-gray-500">
          Don't worry, you can adjust this later
        </p>
      </motion.div>
    </div>
  );
}
