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
      role: 'Software Engineer',
      company: 'Ford Motor Company',
      period: 'Oct 2024 – Present',
      location: 'Chennai',
      description: 'Designing, developing, and maintaining end-to-end features using Angular for front-end and Java/Spring Boot for back-end systems. Collaborated with product managers, UX/UI designers, and stakeholders to translate business requirements into technical solutions.',
      highlights: [
        'Led migration of ILM Program Summary Dashboard from Qlik Sense to Angular/Spring Boot',
        'Developed ILM Bowler Telemetry Application for real-time KPI reporting',
        'Built interactive Angular components using PrimeNG Chart.js',
        'Developed Spring Boot REST APIs and microservices for KPI aggregation',
        'Connected to BigQuery and PostgreSQL using JDBC',
        'Integrated OAuth-JWT authentication via Azure AD',
        'Established CI/CD pipelines with Tekton, deployed on GCP Cloud Run',
        'Integrated SonarQube scans, wrote Junit and Karma-Jasmine test cases',
        'Used Postman and Swagger for API testing and documentation',
        'Monitored logs and performance metrics using cloud-native tools',
        'Conducted code reviews and led technical sync-ups',
        'Mentored junior developers on Angular and Spring Boot',
      ],
      color: '#0066ff',
      icon: 'fas fa-rocket',
    },
    {
      role: 'Systems Engineer - Product Development',
      company: 'Intellect Design Arena Ltd',
      period: 'Dec 2021 – Sep 2024',
      location: 'Chennai',
      description: 'Developed and maintained software solutions for investment banking and capital market products. Implemented Java, Spring Boot, Hibernate for backend microservices and Angular for UX/UI microservices.',
      highlights: [
        'Developed responsive Angular interfaces for loan processing',
        'Built Spring Boot microservices for loan lifecycle management',
        'Integrated with external credit bureaus and identity platforms',
        'Leveraged Hibernate ORM for database interactions',
        'Configured API Gateway for secure microservices management',
        'Used GCP Logs Explorer and Putty for monitoring and debugging',
        'Collaborated with HDFC stakeholders for requirement gathering and UAT',
        'Maintained version control with Git and tracked work in Jira',
        'Collaborated onsite in Mumbai for HDFC CLO project go-live',
      ],
      color: '#00d4ff',
      icon: 'fas fa-code',
    },
  ];
}
