import React from 'react';
import Profile from './Profile/Profile';
import Contact from './Contact/Contact';
import Education from './Education/Education';
import Languages from './Languages/Languages';
import Interests from './Interests/Interests';
import { Profile as ProfileType, Contact as ContactType, Education as EducationType, Language as LanguageType } from '../../data/developer';

interface SidebarProps {
  profile: ProfileType;
  contact: ContactType;
  education: EducationType[];
  languages: LanguageType[];
  interests: string[];
}

function Sidebar(props: SidebarProps) {
  return (
    <div className="w-full rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-ocean)]/72 text-[var(--text-main)] shadow-[var(--shadow-card)] lg:w-80">
      <Profile name={props.profile.name} tagline={props.profile.tagline}/>
      <Contact
        email={props.contact.email}
        website={props.contact.website}
        phone={props.contact.phone}
        linkedin={props.contact.linkedin}
        github={props.contact.github}
        twitter={props.contact.twitter}
      />
      <Education educationItems={props.education} />
      <Languages languageItems={props.languages} />
      <Interests interestItems={props.interests} />
    </div>
  );
}

export default Sidebar;
