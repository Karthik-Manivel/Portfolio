import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  PLATFORM_ID,
  Inject,
  signal,
  OnDestroy,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroSection') heroSection!: ElementRef;
  showContent = signal(false);
  currentSlide = signal(0);
  private slideInterval: any;

  slides = [
    {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
      subtitle: 'Full Stack Developer',
      title: 'Building Digital\nExperiences',
      description: 'Crafting scalable web applications with cutting-edge technologies. From pixel-perfect frontends to robust backend architectures.',
    },
    {
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
      subtitle: 'Innovation Driven',
      title: 'Code That\nInspires',
      description: 'Transforming complex problems into elegant solutions. Passionate about clean code, performance, and user experience.',
    },
    {
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80',
      subtitle: 'Modern Tech Stack',
      title: 'Engineering\nThe Future',
      description: 'Angular, React, Java, Node.js, Python, SQL, Cloud — leveraging the best tools to build tomorrow\'s applications today.',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.showContent.set(true), 300);
      this.startSlideshow();
    }
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  startSlideshow() {
    this.slideInterval = setInterval(() => {
      this.currentSlide.update((v) => (v + 1) % this.slides.length);
    }, 6000);
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    this.startSlideshow();
  }

  scrollToProjects() {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact() {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
