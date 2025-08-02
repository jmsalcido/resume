import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import developer from './data/developer';
import resume from './data/resume';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white shadow-lg">
        <div className="flex flex-col lg:flex-row">
          <Sidebar 
            profile={developer.profile} 
            contact={developer.contact}
            education={developer.education}
            languages={developer.languages}
            interests={developer.interests}
          />
          <MainContent 
            summary={resume.summary}
            experience={resume.experiences}
            projects={resume.projects}
            skills={resume.skills}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
