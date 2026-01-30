import React from 'react';
import { CheckCircle2, AlertCircle, XCircle, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function SkillGapAnalysis() {
  const skillCategories = [
    {
      name: 'Already Have',
      icon: CheckCircle2,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      skills: [
        { name: 'Python Basics', level: 85 },
        { name: 'Git & GitHub', level: 75 },
        { name: 'HTML/CSS', level: 90 },
      ]
    },
    {
      name: 'Weak Skills',
      icon: AlertCircle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      skills: [
        { name: 'Data Structures', level: 45 },
        { name: 'System Design', level: 35 },
        { name: 'SQL Databases', level: 50 },
      ]
    },
    {
      name: 'Missing Skills',
      icon: XCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      skills: [
        { name: 'Cloud Computing (AWS)', level: 0 },
        { name: 'Docker & Kubernetes', level: 0 },
        { name: 'GraphQL', level: 0 },
      ]
    }
  ];

  const industryRequirements = [
    { skill: 'Programming Languages', required: 90, current: 75 },
    { skill: 'Data Structures & Algorithms', required: 85, current: 45 },
    { skill: 'System Design', required: 75, current: 35 },
    { skill: 'Cloud Technologies', required: 70, current: 20 },
    { skill: 'Database Management', required: 80, current: 50 },
  ];

  const overallMatch = Math.round(
    industryRequirements.reduce((sum, item) => sum + (item.current / item.required) * 100, 0) / industryRequirements.length
  );

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
            Skill Gap Analysis
          </h1>
          <p className="text-gray-600">
            See how your skills match industry requirements
          </p>
        </div>

        {/* Overall Match Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-indigo-100 text-sm mb-2">Overall Match Score</p>
              <h2 className="text-5xl font-bold mb-1">{overallMatch}%</h2>
              <p className="text-indigo-100 text-sm">for Software Engineer role</p>
            </div>
            <div className="w-24 h-24">
              <svg className="transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="white"
                  strokeWidth="10"
                  strokeDasharray={`${overallMatch * 2.827} 282.7`}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="space-y-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-indigo-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
                <span className="ml-auto text-sm text-gray-500">{category.skills.length} skills</span>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                        className={`h-2 rounded-full ${
                          skill.level >= 70 ? 'bg-green-500' :
                          skill.level >= 40 ? 'bg-orange-500' :
                          'bg-red-500'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Requirements Comparison */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-indigo-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Industry Requirements</h3>
          </div>
          
          <div className="space-y-4">
            {industryRequirements.map((item, index) => (
              <div key={item.skill}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{item.skill}</span>
                  <span className="text-xs text-gray-500">{item.current}% / {item.required}%</span>
                </div>
                <div className="relative w-full bg-gray-100 rounded-full h-2">
                  {/* Required level marker */}
                  <div 
                    className="absolute top-0 h-2 border-r-2 border-dashed border-gray-400"
                    style={{ left: `${item.required}%` }}
                  />
                  {/* Current level */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.current}%` }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className={`h-2 rounded-full ${
                      item.current >= item.required ? 'bg-green-500' :
                      item.current >= item.required * 0.6 ? 'bg-orange-500' :
                      'bg-red-500'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all"
        >
          Generate Learning Plan
        </motion.button>
      </motion.div>
    </div>
  );
}
