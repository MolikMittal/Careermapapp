import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, TrendingUp, Award, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface DashboardProps {
  userData: {
    interests: string[];
    skillLevel: string;
    timeAvailability: number;
  };
}

export function Dashboard({ userData }: DashboardProps) {
  const navigate = useNavigate();

  const careerRecommendations = [
    {
      title: 'Software Engineer',
      match: 92,
      salary: '$85k - $150k',
      demand: 'High',
      timeToJob: '6-12 months',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Data Scientist',
      match: 88,
      salary: '$95k - $165k',
      demand: 'Very High',
      timeToJob: '8-14 months',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Product Manager',
      match: 85,
      salary: '$90k - $160k',
      demand: 'High',
      timeToJob: '12-18 months',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const weeklyGoals = [
    { task: 'Complete Python Basics Module', completed: true },
    { task: 'Practice Data Structures', completed: true },
    { task: 'Build Portfolio Project', completed: false },
    { task: 'Review System Design', completed: false },
  ];

  const completedGoals = weeklyGoals.filter(g => g.completed).length;

  return (
    <div className="max-w-md mx-auto md:max-w-7xl px-4 py-6 pb-24 md:pb-6 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Good morning! 👋
          </h1>
          <p className="text-gray-600">
            You're on track to reach your goals this week
          </p>
        </div>

        {/* Weekly Progress Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-indigo-100 text-sm mb-1">This Week's Progress</p>
              <h2 className="text-3xl font-bold">{completedGoals}/{weeklyGoals.length}</h2>
            </div>
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <TrendingUp className="w-10 h-10" />
            </div>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3 mb-4">
            <div 
              className="bg-white rounded-full h-3 transition-all"
              style={{ width: `${(completedGoals / weeklyGoals.length) * 100}%` }}
            />
          </div>
          <div className="flex items-center gap-2 text-indigo-100 text-sm">
            <Clock size={16} />
            <span>{userData.timeAvailability}h/week committed</span>
          </div>
        </div>

        {/* Career Recommendations */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Top Career Matches</h2>
            <button 
              onClick={() => navigate('/skill-gap')}
              className="text-indigo-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All
              <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="space-y-4">
            {careerRecommendations.map((career, index) => (
              <motion.div
                key={career.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate('/skill-gap')}
                className="bg-white rounded-2xl p-5 shadow-sm border border-indigo-100 cursor-pointer hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${career.color} flex items-center justify-center flex-shrink-0`}>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{career.title}</h3>
                        <p className="text-sm text-gray-600">{career.salary}</p>
                      </div>
                      <div className="text-right">
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
                          <TrendingUp size={14} />
                          {career.match}% match
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        {career.demand} demand
                      </span>
                      <span>⏱️ {career.timeToJob}</span>
                    </div>
                    
                    <div className="mt-3">
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${career.color} rounded-full h-2`}
                          style={{ width: `${career.match}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/roadmap')}
              className="p-4 bg-white rounded-2xl shadow-sm border border-indigo-100 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-3">
                <Target className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">My Roadmap</h3>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/resume')}
              className="p-4 bg-white rounded-2xl shadow-sm border border-indigo-100 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-3">
                <Award className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Check Resume</h3>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
