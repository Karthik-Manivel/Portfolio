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
      title: 'Frontend',
      icon: 'fas fa-palette',
      color: '#0066ff',
      skills: [
        { name: 'Angular', level: 95, icon: 'fab fa-angular' },
        { name: 'React', level: 88, icon: 'fab fa-react' },
        { name: 'TypeScript', level: 92, icon: 'fas fa-code' },
        { name: 'HTML/CSS/SCSS', level: 97, icon: 'fab fa-css3-alt' },
        { name: 'Tailwind CSS', level: 85, icon: 'fas fa-wind' },
      ],
    },
    {
      title: 'Backend',
      icon: 'fas fa-server',
      color: '#00d4ff',
      skills: [
        { name: 'Node.js', level: 90, icon: 'fab fa-node-js' },
        { name: 'Python', level: 85, icon: 'fab fa-python' },
        { name: 'Java', level: 80, icon: 'fab fa-java' },
        { name: 'Express.js', level: 88, icon: 'fas fa-bolt' },
        { name: 'GraphQL', level: 78, icon: 'fas fa-project-diagram' },
      ],
    },
    {
      title: 'Database',
      icon: 'fas fa-database',
      color: '#ff6b35',
      skills: [
        { name: 'PostgreSQL', level: 88, icon: 'fas fa-database' },
        { name: 'MongoDB', level: 92, icon: 'fas fa-leaf' },
        { name: 'Redis', level: 80, icon: 'fas fa-bolt' },
        { name: 'MySQL', level: 85, icon: 'fas fa-table' },
        { name: 'Firebase', level: 82, icon: 'fas fa-fire' },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: 'fas fa-tools',
      color: '#ff3366',
      skills: [
        { name: 'Docker', level: 85, icon: 'fab fa-docker' },
        { name: 'AWS', level: 80, icon: 'fab fa-aws' },
        { name: 'Git', level: 95, icon: 'fab fa-git-alt' },
        { name: 'CI/CD', level: 82, icon: 'fas fa-infinity' },
        { name: 'Kubernetes', level: 72, icon: 'fas fa-dharmachakra' },
      ],
    },
  ];
}
