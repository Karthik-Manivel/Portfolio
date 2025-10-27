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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Full-Stack Developer Portfolio';
  
  profile = {
    name: 'Karthikeyan Manivel',
    title: 'Full-Stack Developer',
    email: 'karthikeyan752001@gmail.com',
    phone: '+91 6383015116',
    location: 'Chennai, India',
    github: 'https://github.com/johndev',
    linkedin: 'https://linkedin.com/in/johndev',
    portfolio: 'https://johndev.com',
    image: 'https://i.pravatar.cc/300?img=12'
  };

  objective = `Passionate Full-Stack Developer with 5+ years of experience building scalable web applications 
  using modern technologies. Specialized in Angular, React, Node.js, and cloud architectures. 
  Committed to writing clean, maintainable code and creating exceptional user experiences.`;

  skills: Skill[] = [
    { name: 'Angular', level: 95, category: 'Frontend' },
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 92, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'Express.js', level: 85, category: 'Backend' },
    { name: 'MongoDB', level: 82, category: 'Database' },
    { name: 'PostgreSQL', level: 80, category: 'Database' },
    { name: 'Docker', level: 78, category: 'DevOps' },
    { name: 'AWS', level: 75, category: 'Cloud' },
    { name: 'Git', level: 90, category: 'Tools' },
    { name: 'REST APIs', level: 93, category: 'Backend' }
  ];

  experiences: Experience[] = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2021 - Present',
      description: [
        'Led development of enterprise-level web applications serving 100K+ users',
        'Architected microservices infrastructure using Node.js and Docker',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization'
      ],
      technologies: ['Angular', 'Node.js', 'MongoDB', 'AWS', 'Docker']
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Co.',
      period: '2019 - 2021',
      description: [
        'Developed responsive web applications using React and Angular',
        'Built RESTful APIs with Node.js and Express',
        'Implemented CI/CD pipelines using Jenkins and GitHub Actions',
        'Collaborated with cross-functional teams in Agile environment'
      ],
      technologies: ['React', 'Angular', 'Express.js', 'PostgreSQL']
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Ventures',
      period: '2018 - 2019',
      description: [
        'Created interactive user interfaces with modern JavaScript frameworks',
        'Integrated third-party APIs and payment gateways',
        'Participated in agile sprint planning and retrospectives',
        'Maintained and updated existing web applications'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'Node.js', 'MySQL']
    }
  ];

  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with real-time inventory management, payment integration, and admin dashboard.',
      technologies: ['Angular 16', 'Node.js', 'MongoDB', 'Stripe API', 'AWS S3'],
      link: 'https://demo-ecommerce.com',
      github: 'https://github.com/johndev/ecommerce'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop interface, and team collaboration features.',
      technologies: ['React', 'Socket.io', 'Express.js', 'PostgreSQL', 'Redis'],
      link: 'https://taskmaster-app.com',
      github: 'https://github.com/johndev/taskmaster'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics platform with data visualization, custom reports, and interactive charts for business intelligence.',
      technologies: ['Angular', 'D3.js', 'Node.js', 'InfluxDB', 'Docker'],
      github: 'https://github.com/johndev/analytics-dashboard'
    },
    {
      title: 'Social Media API',
      description: 'RESTful API for social networking features including posts, comments, likes, and real-time notifications.',
      technologies: ['Node.js', 'GraphQL', 'MongoDB', 'Redis', 'JWT'],
      github: 'https://github.com/johndev/social-api'
    }
  ];

  education: Education[] = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'State University',
      year: '2018',
      gpa: '3.8/4.0'
    },
    {
      degree: 'Full-Stack Web Development Bootcamp',
      institution: 'Coding Academy',
      year: '2017',
      gpa: 'Honor Graduate'
    }
  ];

  achievements: Achievement[] = [
    {
      title: 'Employee of the Year',
      description: 'Recognized for outstanding performance and leadership in delivering critical projects ahead of schedule.',
      year: '2022'
    },
    {
      title: 'Hackathon Winner',
      description: 'First place in TechFest 2021 for developing an innovative AI-powered chatbot solution.',
      year: '2021'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to Angular and Node.js ecosystems with 500+ GitHub stars across projects.',
      year: '2020-Present'
    },
    {
      title: 'Published Technical Writer',
      description: 'Published 15+ technical articles on Medium and Dev.to reaching 50K+ readers.',
      year: '2019-Present'
    }
  ];

  certifications: Certification[] = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2022',
      credentialId: 'AWS-12345-CERT'
    },
    {
      name: 'Angular Certified Developer',
      issuer: 'Angular',
      year: '2021',
      credentialId: 'ANG-67890-CERT'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2021',
      credentialId: 'MDB-54321-CERT'
    },
    {
      name: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      year: '2020',
      credentialId: 'PSM-98765-CERT'
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
