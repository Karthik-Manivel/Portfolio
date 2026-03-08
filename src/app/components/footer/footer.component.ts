import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  socialLinks = [
    { icon: 'fab fa-github', link: 'https://github.com' },
    { icon: 'fab fa-linkedin-in', link: 'https://linkedin.com' },
    { icon: 'fab fa-twitter', link: 'https://twitter.com' },
    { icon: 'fab fa-dribbble', link: 'https://dribbble.com' },
    { icon: 'fab fa-codepen', link: 'https://codepen.io' },
  ];

  scrollTo(href: string) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
