import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss',
})
export class AchievementsComponent {
  achievements = [
    {
      title: 'Recognition Certification',
      description: 'Outstanding contribution towards Driving Innovation at Ford Business Services India in 2024, specifically for the ILM Bowler Application.'
    },
    {
      title: 'People Leader Recognition 2025',
      description: 'Recognized by Rajkumar Sankaran, Ford ILM Team Manager, in the category of Demonstrating Excellence: Deliver It.'
    },
    {
      title: 'Peer Recognition (e-Cards)',
      description: 'Recognized by Lawrance Ayyamperumal, Ford ILM Team Lead.'
    },
    {
      title: 'Client Collaboration',
      description: 'Collaborated onsite with the client in Mumbai for three months in 2023 for Intellect Design Arena, playing a key role in the successful and timely go-live of the HDFC - CLO project.'
    }
  ];
}
