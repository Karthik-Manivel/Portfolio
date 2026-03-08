import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Technical Skills',
      icon: 'fas fa-code',
      color: '#0066ff',
      skills: [
        { name: 'Java 17', level: 95, icon: 'fab fa-java' },
        { name: 'Spring Boot', level: 92, icon: 'fas fa-leaf' },
        { name: 'Microservices', level: 90, icon: 'fas fa-cubes' },
        { name: 'Angular 17', level: 97, icon: 'fab fa-angular' },
        { name: 'HTML', level: 97, icon: 'fab fa-html5' },
        { name: 'CSS', level: 97, icon: 'fab fa-css3-alt' },
        { name: 'Typescript', level: 95, icon: 'fas fa-code' },
        { name: 'Rest API', level: 92, icon: 'fas fa-project-diagram' },
        { name: 'Fast API', level: 85, icon: 'fas fa-bolt' },
        { name: 'Basic Python', level: 80, icon: 'fab fa-python' },
        { name: 'Problem Solving', level: 90, icon: 'fas fa-lightbulb' },
        { name: 'Troubleshooting', level: 90, icon: 'fas fa-tools' },
        { name: 'Analytical Skills', level: 88, icon: 'fas fa-chart-line' },
        { name: 'Collaboration Skills', level: 90, icon: 'fas fa-users' },
      ],
    },
    {
      title: 'Database Management',
      icon: 'fas fa-database',
      color: '#00d4ff',
      skills: [
        { name: 'PostgreSQL', level: 88, icon: 'fas fa-database' },
        { name: 'Oracle SQL', level: 85, icon: 'fas fa-table' },
        { name: 'Big Query', level: 80, icon: 'fas fa-search' },
        { name: 'Hibernate', level: 85, icon: 'fas fa-leaf' },
        { name: 'JDBC', level: 80, icon: 'fas fa-plug' },
      ],
    },
    {
      title: 'Security & Code Quality',
      icon: 'fas fa-shield-alt',
      color: '#ff6b35',
      skills: [
        { name: 'SonarQube', level: 85, icon: 'fas fa-check' },
        { name: 'Unit Testing', level: 90, icon: 'fas fa-vial' },
        { name: 'Junit', level: 88, icon: 'fas fa-vial' },
        { name: 'Karma', level: 85, icon: 'fas fa-vial' },
        { name: 'Jasmine', level: 85, icon: 'fas fa-vial' },
        { name: '42Crunch', level: 80, icon: 'fas fa-shield-alt' },
        { name: 'AZURE AD', level: 80, icon: 'fab fa-microsoft' },
        { name: 'OAuth-JWT', level: 80, icon: 'fas fa-key' },
      ],
    },
    {
      title: 'Deployment & Maintenance',
      icon: 'fas fa-cloud',
      color: '#ff3366',
      skills: [
        { name: 'Git', level: 95, icon: 'fab fa-git-alt' },
        { name: 'GCP', level: 85, icon: 'fab fa-google' },
        { name: 'AWS', level: 80, icon: 'fab fa-aws' },
        { name: 'Kubernetes', level: 72, icon: 'fas fa-dharmachakra' },
        { name: 'OpenShift', level: 70, icon: 'fas fa-cogs' },
        { name: 'Jenkins', level: 80, icon: 'fas fa-cogs' },
        { name: 'CI/CD', level: 82, icon: 'fas fa-infinity' },
      ],
    },
    {
      title: 'Tools',
      icon: 'fas fa-tools',
      color: '#764ba2',
      skills: [
        { name: 'Postman', level: 90, icon: 'fas fa-envelope' },
        { name: 'Putty', level: 80, icon: 'fas fa-terminal' },
        { name: 'Jira', level: 85, icon: 'fab fa-jira' },
        { name: 'IntelliJ', level: 85, icon: 'fas fa-code' },
        { name: 'VS Code', level: 90, icon: 'fas fa-code' },
        { name: 'Swagger', level: 85, icon: 'fas fa-book' },
        { name: 'Alteryx', level: 70, icon: 'fas fa-cogs' },
        { name: 'MS Office', level: 80, icon: 'fas fa-file-alt' },
        { name: 'LLM', level: 70, icon: 'fas fa-brain' },
      ],
    },
  ];
}
