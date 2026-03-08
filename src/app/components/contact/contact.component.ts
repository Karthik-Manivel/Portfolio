import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  contactInfo = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'hello@karthikmanivel.dev', link: 'mailto:hello@karthikmanivel.dev' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'San Francisco, CA', link: '#' },
  ];

  socialLinks = [
    { icon: 'fab fa-github', label: 'GitHub', link: 'https://github.com' },
    { icon: 'fab fa-linkedin-in', label: 'LinkedIn', link: 'https://linkedin.com' },
    { icon: 'fab fa-twitter', label: 'Twitter', link: 'https://twitter.com' },
    { icon: 'fab fa-dribbble', label: 'Dribbble', link: 'https://dribbble.com' },
  ];

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Reset form
    this.formData = { name: '', email: '', subject: '', message: '' };
  }
}
