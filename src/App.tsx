import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ExperiencePage from './components/ExperiencePage';
import SkillsPage from './components/SkillsPage';
import developer from './data/developer';
import resume from './data/resume';

function App() {
  const contactItems = [
    { label: 'Email', value: developer.contact.email, href: `mailto:${developer.contact.email}` },
    { label: 'Phone', value: developer.contact.phone, href: `tel:${developer.contact.phone}` },
    { label: 'Website', value: developer.contact.website.name, href: developer.contact.website.url },
    { label: 'LinkedIn', value: developer.contact.linkedin, href: `https://linkedin.com/in/${developer.contact.linkedin}` },
    { label: 'GitHub', value: developer.contact.github, href: `https://github.com/${developer.contact.github}` }
  ];

  return (
    <Router>
      <Layout>
        <Routes>
          <Route 
            path="/" 
            element={<Home contactItems={contactItems} />} 
          />
<Route 
  path="/experience" 
  element={<ExperiencePage leadership={resume.leadership} softwareEngineering={resume.softwareTimeline} />} 
/>
          <Route 
            path="/skills" 
            element={<SkillsPage skillItems={resume.skills} highlights={resume.highlights} languages={developer.languages} interests={developer.interests} />} 
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
