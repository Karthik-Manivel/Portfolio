import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'TechVision Corp',
      period: '2023 – Present',
      location: 'San Francisco, CA',
      description: 'Leading the development of enterprise-scale microservices architecture serving 2M+ users. Spearheading migration from legacy monolith to cloud-native solutions.',
      highlights: [
        'Architected microservices platform reducing latency by 60%',
        'Led a team of 8 developers across 3 product verticals',
        'Implemented CI/CD pipelines cutting deployment time by 75%',
        'Introduced automated testing increasing code coverage to 92%',
      ],
      color: '#0066ff',
      icon: 'fas fa-rocket',
    },
    {
      role: 'Full Stack Developer',
      company: 'InnovateLab Inc.',
      period: '2021 – 2023',
      location: 'Austin, TX',
      description: 'Built customer-facing web applications and internal tools for a fast-growing SaaS startup. Owned the full product lifecycle from ideation to deployment.',
      highlights: [
        'Developed real-time dashboard used by 500+ enterprise clients',
        'Built RESTful APIs handling 10K+ requests per minute',
        'Reduced page load times by 40% through performance optimization',
        'Mentored 3 junior developers in best practices',
      ],
      color: '#00d4ff',
      icon: 'fas fa-code',
    },
    {
      role: 'Frontend Developer',
      company: 'DigitalCraft Agency',
      period: '2019 – 2021',
      location: 'New York, NY',
      description: 'Created pixel-perfect, responsive web experiences for Fortune 500 clients. Specialized in complex animations and interactive data visualizations.',
      highlights: [
        'Delivered 20+ client projects with 100% satisfaction rate',
        'Built component libraries used across 15+ projects',
        'Won "Best Developer" award for innovative UI solutions',
        'Established frontend coding standards for the team',
      ],
      color: '#ff6b35',
      icon: 'fas fa-paint-brush',
    },
    {
      role: 'Junior Developer',
      company: 'StartupHub',
      period: '2018 – 2019',
      location: 'Boston, MA',
      description: 'Started my professional journey building MVPs for early-stage startups. Gained hands-on experience with agile methodologies and rapid prototyping.',
      highlights: [
        'Shipped 5 MVPs in under 6 months',
        'Learned full-stack development across multiple tech stacks',
        'Contributed to open-source projects with 500+ GitHub stars',
      ],
      color: '#ff3366',
      icon: 'fas fa-seedling',
    },
  ];
}
