import React from 'react';
import { Trophy, Target, Flame, Award, Calendar, TrendingUp, CheckCircle2 } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';

export function ProgressAnalytics() {
  const weeklyProgress = [
    { week: 'Week 1', hours: 12, completed: 95 },
    { week: 'Week 2', hours: 10, completed: 85 },
    { week: 'Week 3', hours: 11, completed: 90 },
    { week: 'Week 4', hours: 9, completed: 75 },
  ];

  const skillProgress = [
    { skill: 'Python', progress: 85 },
    { skill: 'Data Structures', progress: 60 },
    { skill: 'Algorithms', progress: 45 },
    { skill: 'Web Dev', progress: 35 },
    { skill: 'Databases', progress: 50 },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'First Week Completed',
      description: 'Finished all Week 1 goals',
      date: '2 weeks ago',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Flame,
      title: '7 Day Streak',
      description: 'Learned every day this week',
      date: '1 week ago',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'LeetCode Master',
      description: 'Solved 50 problems',
      date: '3 days ago',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Portfolio Builder',
      description: 'Created first project',
      date: 'Yesterday',
      color: 'from-purple-500 to-indigo-500'
    },
  ];

  const stats = [
    { label: 'Total Hours', value: '42', icon: Calendar, color: 'from-blue-500 to-cyan-500' },
    { label: 'Avg. Weekly', value: '10.5h', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { label: 'Tasks Done', value: '34', icon: CheckCircle2, color: 'from-indigo-500 to-purple-500' },
    { label: 'Streak Days', value: '12', icon: Flame, color: 'from-orange-500 to-red-500' },
  ];

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
            Progress & Analytics
          </h1>
          <p className="text-gray-600">
            Track your growth and celebrate achievements
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-indigo-100"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Weekly Progress Chart */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-indigo-100">
          <h3 className="font-semibold text-gray-900 mb-4">Weekly Study Hours</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0E7FF" />
              <XAxis dataKey="week" stroke="#6B7280" fontSize={12} />
              <YAxis stroke="#6B7280" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFF',
                  border: '1px solid #E0E7FF',
                  borderRadius: '12px',
                  fontSize: '12px'
                }}
              />
              <Bar dataKey="hours" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Skill Progress Chart */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-indigo-100">
          <h3 className="font-semibold text-gray-900 mb-4">Skill Development</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={skillProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0E7FF" />
              <XAxis dataKey="skill" stroke="#6B7280" fontSize={12} />
              <YAxis stroke="#6B7280" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFF',
                  border: '1px solid #E0E7FF',
                  borderRadius: '12px',
                  fontSize: '12px'
                }}
              />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#6366F1"
                strokeWidth={3}
                dot={{ fill: '#6366F1', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-indigo-100">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-indigo-600" />
            <h3 className="font-semibold text-gray-900">Recent Achievements</h3>
          </div>
          
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">{achievement.title}</h4>
                  <p className="text-xs text-gray-600 mt-0.5">{achievement.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{achievement.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Motivational Message */}
        <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">You're doing great! 🎉</h4>
              <p className="text-sm text-indigo-100">
                You've maintained consistency for 12 days straight. Your dedication is paying off - keep up the amazing work!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
