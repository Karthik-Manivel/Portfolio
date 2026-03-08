import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  // Updated profile summary and contact info
  profile = {
    name: 'Karthikeyan Manivel',
    address: '18/60, Thiruvenkadam Street, Pudupet, Egmore, Chennai – 600002',
    email: 'karthikeyan752001@gmail.com',
    phone: '+91 6383015116',
    linkedin: 'https://www.linkedin.com/in/karthikeyan-manivel',
    summary: `Experienced and skilled Full Stack Developer with 4 years of experience in full stack development with good communications, presentation skills and management skills. Proficient in J2EE, Spring Boot, Angular, SQL and GCP. Highly adaptable, resilient and disciplined. Seeking opportunities to drive efficiency and innovation within dynamic teams.`,
    declaration: `I hereby declare that the above-mentioned information is correct up to my knowledge and I bear the responsibility for the correctness of the above-mentioned particulars.`,
    place: 'Chennai',
    date: 'March 8, 2026',
  };
}
