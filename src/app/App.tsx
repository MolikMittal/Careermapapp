import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';
import { InterestSelection } from './components/onboarding/InterestSelection';
import { SkillLevel } from './components/onboarding/SkillLevel';
import { TimeAvailability } from './components/onboarding/TimeAvailability';
import { AuthScreen } from './components/auth/AuthScreen';
import { Dashboard } from './components/dashboard/Dashboard';
import { SkillGapAnalysis } from './components/skills/SkillGapAnalysis';
import { LearningRoadmap } from './components/roadmap/LearningRoadmap';
import { ResumeAnalysis } from './components/resume/ResumeAnalysis';
import { AICoach } from './components/coach/AICoach';
import { ProgressAnalytics } from './components/progress/ProgressAnalytics';
import { Navigation } from './components/Navigation';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [userData, setUserData] = useState({
    interests: [] as string[],
    skillLevel: '',
    timeAvailability: 0,
  });

  const handleCompleteOnboarding = (data: any) => {
    setUserData(data);
    setHasCompletedOnboarding(true);
  };

  const handleAuth = () => {
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        {isAuthenticated && hasCompletedOnboarding && <Navigation />}
        
        <Routes>
          {!isAuthenticated ? (
            <>
              <Route path="/auth" element={<AuthScreen onAuth={handleAuth} />} />
              <Route path="*" element={<Navigate to="/auth" replace />} />
            </>
          ) : !hasCompletedOnboarding ? (
            <>
              <Route path="/welcome" element={<WelcomeScreen />} />
              <Route path="/interests" element={<InterestSelection />} />
              <Route path="/skill-level" element={<SkillLevel />} />
              <Route 
                path="/time-availability" 
                element={<TimeAvailability onComplete={handleCompleteOnboarding} />} 
              />
              <Route path="*" element={<Navigate to="/welcome" replace />} />
            </>
          ) : (
            <>
              <Route path="/dashboard" element={<Dashboard userData={userData} />} />
              <Route path="/skill-gap" element={<SkillGapAnalysis />} />
              <Route path="/roadmap" element={<LearningRoadmap userData={userData} />} />
              <Route path="/resume" element={<ResumeAnalysis />} />
              <Route path="/coach" element={<AICoach />} />
              <Route path="/progress" element={<ProgressAnalytics />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
