import React, { useState } from 'react';
import { Upload, FileText, CheckCircle2, AlertTriangle, XCircle, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function ResumeAnalysis() {
  const [hasResume, setHasResume] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setHasResume(true);
    }
  };

  const analysisResults = {
    atsScore: 78,
    skillMatch: 85,
    sections: [
      { name: 'Contact Information', status: 'pass', feedback: 'All required fields present' },
      { name: 'Professional Summary', status: 'warning', feedback: 'Too generic - add specific achievements' },
      { name: 'Work Experience', status: 'pass', feedback: 'Well structured with quantifiable results' },
      { name: 'Skills Section', status: 'warning', feedback: 'Missing 3 key skills for target role' },
      { name: 'Education', status: 'pass', feedback: 'Properly formatted' },
      { name: 'Projects', status: 'fail', feedback: 'No projects listed - add 2-3 relevant projects' },
    ],
    improvements: [
      'Add 2-3 portfolio projects demonstrating Python and Data Structures',
      'Include specific metrics in work achievements (e.g., "improved performance by 40%")',
      'Add missing skills: Docker, Kubernetes, GraphQL',
      'Optimize keywords for ATS: add "software development", "agile", "CI/CD"',
    ]
  };

  if (!hasResume) {
    return (
      <div className="max-w-md mx-auto md:max-w-7xl px-4 py-6 pb-24 md:pb-6 md:pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Resume Analysis
            </h1>
            <p className="text-gray-600">
              Get AI-powered feedback on your resume
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-indigo-100 text-center">
            <div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center mx-auto mb-4">
              <Upload className="w-10 h-10 text-indigo-600" />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Your Resume</h3>
            <p className="text-gray-600 mb-6">
              We'll analyze it for ATS compatibility and skill matching
            </p>

            <label className="inline-block">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                Choose File
              </motion.div>
            </label>

            <p className="text-sm text-gray-500 mt-4">
              Supported formats: PDF, DOC, DOCX (Max 5MB)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-indigo-100">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">ATS Check</h4>
              <p className="text-sm text-gray-600">Ensure your resume passes automated systems</p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-indigo-100">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Skill Match</h4>
              <p className="text-sm text-gray-600">Compare skills with job requirements</p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-indigo-100">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Improvements</h4>
              <p className="text-sm text-gray-600">Get actionable suggestions</p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto md:max-w-7xl px-4 py-6 pb-24 md:pb-6 md:pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Resume Analysis
          </h1>
          <p className="text-gray-600">
            Here's what we found
          </p>
        </div>

        {/* Score Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl p-6 text-white shadow-xl">
            <p className="text-indigo-100 text-sm mb-2">ATS Compatibility Score</p>
            <div className="flex items-end gap-2">
              <h2 className="text-5xl font-bold">{analysisResults.atsScore}</h2>
              <span className="text-2xl font-semibold mb-1">/100</span>
            </div>
            <p className="text-indigo-100 text-sm mt-2">Good - Likely to pass screening</p>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-6 text-white shadow-xl">
            <p className="text-green-100 text-sm mb-2">Skill Match Percentage</p>
            <div className="flex items-end gap-2">
              <h2 className="text-5xl font-bold">{analysisResults.skillMatch}</h2>
              <span className="text-2xl font-semibold mb-1">%</span>
            </div>
            <p className="text-green-100 text-sm mt-2">Strong match for Software Engineer</p>
          </div>
        </div>

        {/* Section Analysis */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-indigo-100">
          <h3 className="font-semibold text-gray-900 mb-4">Section Analysis</h3>
          <div className="space-y-3">
            {analysisResults.sections.map((section, index) => (
              <motion.div
                key={section.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  section.status === 'pass' ? 'bg-green-100' :
                  section.status === 'warning' ? 'bg-orange-100' :
                  'bg-red-100'
                }`}>
                  {section.status === 'pass' ? (
                    <CheckCircle2 size={16} className="text-green-600" />
                  ) : section.status === 'warning' ? (
                    <AlertTriangle size={16} className="text-orange-600" />
                  ) : (
                    <XCircle size={16} className="text-red-600" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 text-sm">{section.name}</h4>
                  <p className="text-xs text-gray-600 mt-0.5">{section.feedback}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Improvement Suggestions */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-indigo-100">
          <h3 className="font-semibold text-gray-900 mb-4">Improvement Suggestions</h3>
          <div className="space-y-3">
            {analysisResults.improvements.map((suggestion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-blue-50"
              >
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                  {index + 1}
                </div>
                <p className="text-sm text-gray-700 flex-1">{suggestion}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setHasResume(false)}
            className="flex-1 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-2xl hover:bg-indigo-50 transition-all"
          >
            Upload New Resume
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            Download Report
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
