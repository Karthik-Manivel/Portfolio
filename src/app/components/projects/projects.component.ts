import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  activeFilter = 'all';

  filters = ['all', 'frontend', 'fullstack', 'backend', 'mobile'];

  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with real-time inventory, AI-powered recommendations, and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      color: '#0066ff',
      link: '#',
      github: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard providing real-time insights across multiple social platforms with interactive charts and export capabilities.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['React', 'D3.js', 'Firebase', 'Material UI'],
      category: 'frontend',
      color: '#00d4ff',
      link: '#',
      github: '#',
    },
    {
      title: 'Healthcare API Gateway',
      description: 'HIPAA-compliant microservices architecture handling millions of patient records with 99.99% uptime SLA.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
      category: 'backend',
      color: '#ff6b35',
      link: '#',
      github: '#',
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time messaging app with AI-powered smart replies, language translation, and end-to-end encryption.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      tags: ['Angular', 'WebSocket', 'OpenAI', 'Redis'],
      category: 'fullstack',
      color: '#ff3366',
      link: '#',
      github: '#',
    },
    {
      title: 'Fitness Tracker App',
      description: 'Cross-platform mobile application with workout tracking, nutrition planning, and social fitness challenges.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
      tags: ['React Native', 'GraphQL', 'AWS', 'TypeScript'],
      category: 'mobile',
      color: '#667eea',
      link: '#',
      github: '#',
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing platform with 3D virtual tours, mortgage calculator, and neighborhood analytics.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      tags: ['Next.js', 'Three.js', 'Prisma', 'Mapbox'],
      category: 'fullstack',
      color: '#764ba2',
      link: '#',
      github: '#',
    },
  ];

  get filteredProjects() {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}
