export interface Profile {
  name: string;
  tagline: string;
}

export interface Website {
  name: string;
  url: string;
}

export interface Contact {
  email: string;
  phone: string;
  website: Website;
  linkedin: string;
  github: string;
  twitter: string;
}

export interface Education {
  degree: string;
  school: string;
  time: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Developer {
  profile: Profile;
  contact: Contact;
  education: Education[];
  languages: Language[];
  interests: string[];
}

const developer: Developer = {
  profile: {
    name: 'Jose Salcido',
    tagline: 'Product Engineer'
  },
  contact: {
    email: 'jmsalcidoaguilar@gmail.com',
    phone: '+526441732018',
    website: {
      name: 'jmsalcido.dev',
      url: 'https://jmsalcido.dev'
    },
    linkedin: 'jmsalcido',
    github: 'jmsalcido',
    twitter: 'jmsalcido'
  },
  education: [{
    degree: 'Software Engineering',
    school: 'Instituto Tecnologico de Sonora',
    time: '2009-2013'
  }],
  languages: [{
    name: 'Spanish',
    level: 'Native'
  },
  {
    name: 'English',
    level: 'Professional'
  }],
  interests: [
    'Composing Music',
    'Coffee',
    'Leadership',
    'Baking',
    'Cooking',
    'Podcasting',
    'Videogames',
    'Creating things',
    'Running',
  ]
};

export default developer; 