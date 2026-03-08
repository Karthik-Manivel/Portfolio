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
      title: 'ILM Program Summary Dashboard',
      description: 'Migrated dashboard from Qlik Sense to Angular frontend and Spring Boot backend, enabling real-time visualization of program health data consolidated from 40+ teams. Improved monitoring and empowered business teams with actionable insights.',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&q=80', // clean chatbot/AI
      tags: ['Angular', 'Spring Boot', 'BigQuery', 'PostgreSQL', 'PrimeNG', 'Chart.js'],
      category: 'fullstack',
      color: '#0066ff',
      link: '#',
      github: '#',
    },
    {
      title: 'ILM Bowler Telemetry Application',
      description: 'Developed Angular and Spring Boot application to generate detailed target vs. actual KPI reports for ILM programs. Provided real-time performance insights for stakeholders to drive continuous improvements.',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&q=80', // clean chatbot/AI
      tags: ['Angular', 'Spring Boot', 'Azure AD', 'OAuth-JWT', 'GCP'],
      category: 'fullstack',
      color: '#00d4ff',
      link: '#',
      github: '#',
    },
    {
      title: 'HDFC Bank Corporate Loan Origination (HDFC-CLO)',
      description: 'Web application facilitating workflow and automation in commercial loan approval process. Integrated third-party systems and processed loans for efficient credit decisions.',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&q=80', // clean chatbot/AI
      tags: ['Angular', 'Spring Boot', 'Hibernate', 'PostgreSQL', 'API Gateway'],
      category: 'fullstack',
      color: '#ff6b35',
      link: '#',
      github: '#',
    },
    {
      title: 'Resurs Bank Retail Loan Origination (RLO)',
      description: 'Platform for evaluating retail loan requests, integrating credit bureau data, identity verification, and automated underwriting rules. Backend-focused system for high-volume, compliant loan processing.',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&q=80', // clean chatbot/AI
      tags: ['Spring Boot', 'Angular', 'Feign Client', 'GCP', 'Putty'],
      category: 'backend',
      color: '#ff3366',
      link: '#',
      github: '#',
    },
    {
      title: 'Playwright FastAPI Automation Platform',
      description: 'Subscription-based Python FastAPI platform for automated image capture from dashboard, report consolidation, and scheduled email delivery. Sends KPI health metrics to users based on their subscription frequency.',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&q=80', // clean chatbot/AI
      tags: ['Python', 'FastAPI', 'Automation', 'Email', 'KPI Metrics', 'Subscription'],
      category: 'backend',
      color: '#764ba2',
      link: '#',
      github: '#',
    },
    {
      title: 'FastAPI Python Chatbot with Gemini 3.1 Pro',
      description: 'A FastAPI Python chatbot integrated with Gemini 3.1 Pro LLM API. Reuses Spring Boot APIs for aggregated data and builds a knowledge base for logics/calculations. Answers user questions with human-readable breakdowns using LLM.',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&q=80', // clean chatbot/AI
      tags: ['Python', 'FastAPI', 'Gemini 3.1 Pro', 'LLM API', 'Spring Boot', 'Knowledge Base'],
      category: 'backend',
      color: '#667eea',
      link: '#',
      github: '#',
    },
    {
      title: 'ILM App Store',
      description: 'A pure frontend Angular app serving as a landing page for ILM Applications, Enablers, and Telemetry Apps. Provides information and key links to all ILM tools.',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&q=80', // clean chatbot/AI
      tags: ['Angular', 'Frontend', 'Landing Page', 'ILM', 'Telemetry'],
      category: 'frontend',
      color: '#0066ff',
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
