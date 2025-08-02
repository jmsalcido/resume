export interface Experience {
  position: string;
  company: string;
  location: string;
  time: string;
  description: string;
  description_extra?: string;
  technologies?: string[];
}

export interface Project {
  name: string;
  url: string;
  description: string;
}

export interface Projects {
  header: string;
  items: Project[];
}

export interface Skill {
  name: string;
  value: number;
}

export interface Resume {
  summary: string;
  experiences: Experience[];
  projects: Projects;
  skills: Skill[];
}

const resume: Resume = {
  summary: 'As a **Software Engineer**, I focus on delivering solutions that help customers meet their goals. I quickly adapt to different development styles and technologies, and continuously propose and implement improvements that elevate team performance and ensure we build meaningful, reliable products.',

  experiences: [
    {
      position: 'Senior Software Engineer (Founding Engineer)',
      company: 'Probably Genetic',
      location: 'Remote',
      time: '2022 - current',
      description: 'As a **Founding Engineer**, I’ve led core initiatives across infrastructure, internal tooling, and patient genomics workflows. I own and evolve critical services across our Django monorepo—powering our ChatPG (LLM based) intake/symptom checker, sequencing workflows, and sequencing operations. My work balances immediate product needs with long-term architectural scalability.',
      description_extra: 'I designed and maintain Terraform infrastructure for our AWS environments, integrated AWS Batch pipelines for genomic processing, and built out internal tools using Retool that support operations, data, and sequencing teams. Recently focused on reliability, autoscaling, and reducing latency across core services like the Symptom-Checker and Sequencing-Service.',
      technologies: [
        'Python',
        'Django 4.2',
        'Postgres',
        'TypeScript',
        'NextJS',
        'AWS',
        'Terraform',
        'AWS Batch',
        'SQS',
        'Retool',
        'Temporal',
        'Poetry'
      ]
    },
    {
      position: 'Software Engineer',
      company: 'Hims & Hers Inc',
      location: 'Remote',
      time: '2021 - 2022',
      description: 'Worked on the EMR Backend team, improving systems that support clinicians and healthcare providers in managing prescriptions and patient records across the Hims & Hers platform.',
      description_extra: 'Focused on maintaining and optimizing internal tooling and backend workflows.',
      technologies: [
        'Kotlin',
        'Spring Boot',
        'Java 8, 11',
        'PostgresSQL'
      ]
    },
    {
      position: 'Software Engineer',
      company: 'Switchfly Inc',
      location: 'Remote',
      time: '2021 - Dic 2021',
      description: 'Supported enhancements to the RJ45 internal platform, focusing on stability, performance, and integration reliability with external partners.',
      description_extra: 'Worked on identifying and fixing memory issues in Java-based services to enable smoother transitions to modern infrastructure.',
      technologies: [
        'Java 8, 11',
        'EmberJS',
        'Oracle Cloud Infrastructure',
        'PostgresSQL'
      ]
    },
    {
      position: 'Mobile & API - Tech Lead',
      company: 'Pioneer Works, Inc, Homebase',
      location: 'Remote',
      time: '2019 - 2020',
      description: 'As a **Tech Lead**, I collaborated with the mobile engineering and API teams to define backend architecture and guide implementation across native apps and services. I led technical decision-making around API design, resource modeling, and integration patterns.',
      description_extra: 'Led fully remote teams across the US, Egypt, and Mexico to deliver consistent product updates and backend improvements.',
      technologies: [
        'Ruby',
        'RoR',
        'Android with Java and Kotlin',
        'Objective-C and Swift'
      ]
    },
    {
      position: 'Senior Software Engineer',
      company: 'Pioneer Works, Inc, Homebase',
      location: 'Remote',
      time: '2018 - 2020',
      description: 'Worked across the full stack at Homebase, contributing to mobile (Android/iOS), web, and backend services. Helped scale the product to over **1,000,000+** mobile installs in the US by building robust APIs, native features, and internal tools.',
      technologies: [
        'Ruby',
        'RoR',
        'React and Redux (Web app)',
        'Android with Java and Kotlin',
        'Objective-C and Swift',
        'AWS Kinesis/Firehose/Redshift for internal analytics.'
      ]
    },
    {
      position: 'Team Lead',
      company: 'Nearsoft Inc',
      location: 'Hermosillo',
      time: '2016 - 2018',
      description: 'Led a cross-functional team to develop a suite of e-commerce tools and integrations for a Canadian retail client. Managed project delivery, code reviews, and platform scaling across multiple technologies and APIs.',
      technologies: [
        'PHP + Wordpress + woocommerce',
        'Shopify API',
        'Digital Ocean',
        'Java and VertX',
        'NodeJS',
        'Ruby on Rails'
      ]
    },
    {
      position: 'Senior Software Engineer',
      company: 'Zed Connect via Nearsoft Inc',
      location: 'Hermosillo',
      time: '2018 - 2018',
      description: 'Led key deployment and integration efforts in a connected vehicle platform, supporting engineering operations and API development for IoT telemetry data.',
      description_extra: '**Proposed** and helped design an event-driven architecture to streamline and scale communication between IoT devices and our backend.',
      technologies: [
        'Java 8',
        'Spring Boot, MVC, Security, Batch',
        'MySQL',
        'AWS DynamoDB, Kinesis, Firehose, S3 and EC2'
      ]
    },
    {
      position: 'Software Engineer',
      company: 'Switchfly Inc via Nearsoft Inc',
      location: 'Hermosillo',
      time: '2013 - 2016',
      description: 'Worked across all layers of a large-scale travel platform, modernizing legacy Java + ColdFusion codebases and contributing to new frontend development in EmberJS.',
      description_extra: 'Led development of mission-critical third-party connectors for major clients, including **American Express**, **American Airlines**, **Aeromexico**, and **LATAM Airlines**.',
      technologies: [
        'Java 6,7,8',
        'EmberJS',
        'ColdFusion',
        'JavaScript',
        'PostgresSQL'
      ]
    }
  ],

  projects: {
    header: 'A selection of side projects and collaborations — most are **open-source** and open to community contributions.',
    items: [
      {
        name: 'Culto al Perro Café',
        url: 'https://perro.cafe',
        description: 'A specialty coffee roaster and cafe that I co-founded, focus on creating community through quality roasting and service.'
      },
      {
        name: 'Batos Jugando',
        url: 'https://batosjugando.com',
        description: 'A digital community for gamers with podcasts, streaming content, and collaborative projects.'
      },
      {
        name: 'Juegathon',
        url: 'https://juegathon.com',
        description: 'An annual charity gaming event in my city aimed at supporting local causes through gameplay.'
      },
      {
        name: 'Valorya the Blacksmith',
        url: 'https://gatomocho.com/game/valorya-blacksmith',
        description: 'An indie PC/Mac game where I composed the original soundtrack and supported production.'
      }
    ]
  },

  skills: [
    {
      name: 'Java - JVM',
      value: 90
    },
    {
      name: 'Python',
      value: 90
    },
    {
      name: 'Ruby & RoR',
      value: 90
    },
    {
      name: 'React & NextJS',
      value: 80
    },
    {
      name: 'TypeScript & Javascript',
      value: 80
    },
    {
      name: 'CSS',
      value: 30
    }
  ]
};

export default resume;