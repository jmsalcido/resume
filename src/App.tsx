import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ExperiencePage from './components/ExperiencePage';
import SkillsPage from './components/SkillsPage';
import ContactPage from './components/ContactPage';
import developer from './data/developer';
import resume from './data/resume';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/experience"
            element={<ExperiencePage leadership={resume.leadership} softwareEngineering={resume.softwareTimeline} />}
          />
          <Route
            path="/skills"
            element={<SkillsPage skillItems={resume.skills} highlights={resume.highlights} languages={developer.languages} interests={developer.interests} />}
          />
          <Route
            path="/contact"
            element={<ContactPage email={developer.contact.email} linkedin={developer.contact.linkedin} github={developer.contact.github} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
