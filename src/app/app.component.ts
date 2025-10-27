import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
  gpa?: string;
}

interface Achievement {
  title: string;
  description: string;
  year: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Full-Stack Developer Portfolio';

  profile = {
    name: 'Karthikeyan Manivel',
    title: 'Full-Stack Developer',
    email: 'karthikeyan752001@gmail.com',
    phone: '+91 6383015116',
    location: 'Chennai, India',
    github: 'https://github.com/your-github',
    linkedin: 'https://linkedin.com/in/your-linkedin',
    portfolio: 'https://your-portfolio.com',
    image: '../assets/profile.png' // Make sure you have this image in your assets folder
  };

  objective = `Passionate Full-Stack Developer with extensive experience in building modern, scalable web applications. 
  Specializing in the Angular framework and the .NET ecosystem, I am dedicated to writing clean, efficient code 
  and creating seamless, engaging user experiences that drive business value.`;

  skills: Skill[] = [
    { name: 'Angular', level: 95, category: 'Frontend' },
    { name: '.NET Core', level: 90, category: 'Backend' },
    { name: 'TypeScript', level: 92, category: 'Frontend' },
    { name: 'C#', level: 95, category: 'Backend' },
    { name: 'SQL Server', level: 88, category: 'Database' },
    { name: 'Azure', level: 85, category: 'Cloud' },
    { name: 'Docker', level: 82, category: 'DevOps' },
    { name: 'Entity Framework', level: 80, category: 'Backend' },
    { name: 'SCSS/CSS', level: 90, category: 'Frontend' },
    { name: 'Git', level: 90, category: 'Tools' },
    { name: 'REST APIs', level: 93, category: 'Backend' }
  ];

  experiences: Experience[] = [
    {
      title: 'Senior Software Engineer',
      company: 'FutureTech Solutions',
      period: '2021 - Present',
      description: [
        'Led the architecture and development of a high-traffic enterprise SaaS platform.',
        'Engineered a suite of RESTful APIs using .NET Core, improving data retrieval times by 35%.',
        'Mentored a team of 4 junior developers, fostering best practices in code quality and testing.',
        'Deployed and managed applications on Microsoft Azure, ensuring high availability and scalability.'
      ],
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Azure', 'Docker']
    },
    {
      title: 'Full-Stack Developer',
      company: 'Innovate Digital',
      period: '2019 - 2021',
      description: [
        'Developed and maintained client-facing web applications using Angular and C#.',
        'Collaborated with UX/UI designers to implement responsive and intuitive interfaces.',
        'Optimized database queries, leading to a 50% reduction in page load times.',
        'Participated in a full Agile/Scrum lifecycle, including sprints, stand-ups, and retrospectives.'
      ],
      technologies: ['Angular', 'C#', '.NET Framework', 'SQL', 'SCSS']
    }
  ];

  projects: Project[] = [
    {
      title: 'Inventory Management System',
      description: 'A comprehensive system for tracking inventory, managing orders, and generating reports, built with a clean Angular frontend and a robust .NET Core backend.',
      technologies: ['Angular 16', '.NET Core', 'SQL Server', 'Azure Blob Storage'],
      github: 'https://github.com/your-github/inventory-system'
    },
    {
      title: 'Real-Time Polling App',
      description: 'A dynamic application allowing users to create polls and vote in real-time, using SignalR for instant updates and Chart.js for data visualization.',
      technologies: ['Angular', '.NET Core', 'SignalR', 'Entity Framework'],
      github: 'https://github.com/your-github/polling-app'
    }
  ];

  education: Education[] = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Anna University',
      year: '2022',
      gpa: '8.5 CGPA'
    }
  ];

  achievements: Achievement[] = [
    {
      title: 'Microsoft Certified: Azure Developer Associate',
      description: 'Earned certification by demonstrating expertise in designing, building, testing, and maintaining cloud applications on Microsoft Azure.',
      year: '2023'
    },
    {
      title: 'Tech Excellence Award',
      description: 'Awarded by FutureTech Solutions for exceptional contributions to the flagship SaaS product and technical leadership.',
      year: '2022'
    }
  ];

  certifications: Certification[] = [
    {
      name: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      year: '2023',
      credentialId: 'MS-AZ-204-12345'
    },
    {
      name: 'Certified ScrumMaster (CSM)',
      issuer: 'Scrum Alliance',
      year: '2022',
      credentialId: 'CSM-67890'
    }
  ];

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  getUniqueCategories(): string[] {
    return [...new Set(this.skills.map(skill => skill.category))];
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
