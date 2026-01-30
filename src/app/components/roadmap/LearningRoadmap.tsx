import React from 'react';
import { Calendar, Clock, CheckCircle2, Circle, Target, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

interface LearningRoadmapProps {
  userData: {
    timeAvailability: number;
  };
}

export function LearningRoadmap({ userData }: LearningRoadmapProps) {
  const weeks = [
    {
      week: 1,
      title: 'Python Fundamentals',
      status: 'completed',
      hours: 10,
      tasks: [
        { name: 'Variables & Data Types', completed: true },
        { name: 'Control Flow & Loops', completed: true },
        { name: 'Functions & Modules', completed: true },
      ],
      milestone: 'First Python Program',
    },
    {
      week: 2,
      title: 'Data Structures Basics',
      status: 'current',
      hours: 10,
      tasks: [
        { name: 'Arrays & Lists', completed: true },
        { name: 'Stacks & Queues', completed: true },
        { name: 'Hash Tables', completed: false },
      ],
      milestone: 'Solve 10 LeetCode Problems',
    },
    {
      week: 3,
      title: 'Advanced Algorithms',
      status: 'upcoming',
      hours: 12,
      tasks: [
        { name: 'Sorting Algorithms', completed: false },
        { name: 'Searching Algorithms', completed: false },
        { name: 'Dynamic Programming', completed: false },
      ],
      milestone: 'Build Sorting Visualizer',
    },
    {
      week: 4,
      title: 'Web Development Basics',
      status: 'upcoming',
      hours: 12,
      tasks: [
        { name: 'HTML5 & CSS3', completed: false },
        { name: 'JavaScript Fundamentals', completed: false },
        { name: 'DOM Manipulation', completed: false },
      ],
      milestone: 'Create Portfolio Website',
    },
  ];

  const totalWeeks = 24;
  const currentWeek = 2;
  const progress = (currentWeek / totalWeeks) * 100;

  return (
    <div className="max-w-md mx-auto md:max-w-7xl px-4 py-6 pb-24 md:pb-6 md:pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Learning Roadmap
          </h1>
          <p className="text-gray-600">
            Your personalized path to becoming a Software Engineer
          </p>
        </div>

        {/* Progress Overview */}
        <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-indigo-100 text-sm mb-1">Overall Progress</p>
              <h2 className="text-3xl font-bold">Week {currentWeek} of {totalWeeks}</h2>
            </div>
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Trophy className="w-8 h-8" />
            </div>
          </div>
          
          <div className="w-full bg-white/20 rounded-full h-3 mb-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="bg-white rounded-full h-3"
            />
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-indigo-100">{Math.round(progress)}% Complete</span>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-indigo-100" />
              <span className="text-indigo-100">{userData.timeAvailability}h/week</span>
            </div>
          </div>
        </div>

        {/* Weekly Roadmap */}
        <div className="space-y-4">
          {weeks.map((week, index) => (
            <motion.div
              key={week.week}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-5 shadow-sm border-2 transition-all ${
                week.status === 'current'
                  ? 'border-indigo-500 shadow-lg'
                  : week.status === 'completed'
                  ? 'border-green-200'
                  : 'border-gray-200'
              }`}
            >
              {/* Status Badge */}
              <div className="absolute -top-3 left-4">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  week.status === 'current'
                    ? 'bg-indigo-600 text-white'
                    : week.status === 'completed'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {week.status === 'current' ? 'Current' : week.status === 'completed' ? 'Completed' : 'Upcoming'}
                </div>
              </div>

              {/* Week Header */}
              <div className="flex items-start justify-between mb-4 mt-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-500">Week {week.week}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{week.title}</h3>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  week.status === 'completed'
                    ? 'bg-green-50'
                    : week.status === 'current'
                    ? 'bg-indigo-50'
                    : 'bg-gray-50'
                }`}>
                  {week.status === 'completed' ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ) : (
                    <Circle className={`w-5 h-5 ${week.status === 'current' ? 'text-indigo-600' : 'text-gray-400'}`} />
                  )}
                </div>
              </div>

              {/* Tasks */}
              <div className="space-y-2 mb-4">
                {week.tasks.map((task, taskIndex) => (
                  <div
                    key={taskIndex}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      task.completed ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      {task.completed ? (
                        <CheckCircle2 size={14} className="text-green-600" />
                      ) : (
                        <Circle size={14} className="text-gray-400" />
                      )}
                    </div>
                    <span className={`text-sm ${task.completed ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                      {task.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Milestone */}
              <div className="flex items-center gap-2 p-3 bg-indigo-50 rounded-xl">
                <Target size={16} className="text-indigo-600 flex-shrink-0" />
                <div>
                  <p className="text-xs text-indigo-600 font-medium">Milestone</p>
                  <p className="text-sm text-gray-900">{week.milestone}</p>
                </div>
              </div>

              {/* Time Estimate */}
              <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                <Clock size={14} />
                <span>{week.hours} hours estimated</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feasibility Indicator */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-green-900 mb-1">Roadmap is Realistic</h4>
              <p className="text-sm text-green-700">
                Based on your {userData.timeAvailability}h/week commitment, this roadmap is achievable and sustainable.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
