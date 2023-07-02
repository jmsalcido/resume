import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import MainContent from './MainContent/MainContent';
import developer from '../app/developer'
import resume from '../app/resume'

function App() {

  let debugDiv = null;
  if (process.env.NODE_ENV === 'development') {
    debugDiv = (<div className="text-center"><small>You are running this application in <b>{process.env.NODE_ENV}</b> mode. GA: {process.env.REACT_APP_GOOGLE_ANALYTICS_ID}</small></div>)
  }

  return (
    <div className="Resume">
      {debugDiv}
      <div className="Resume wrapper">
      <Sidebar profile={developer.profile} 
               contact={developer.contact}
               education={developer.education}
               languages={developer.languages}
               interests={developer.interests}
              />
      <MainContent summary={resume.summary}
                    experience={resume.experiences}
                    projects={resume.projects}
                    skills={resume.skills}
              />
      </div>
      <Footer />
    </div>
  );
}

export default App;
