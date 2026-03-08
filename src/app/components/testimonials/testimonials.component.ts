import { Component, signal, PLATFORM_ID, Inject, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements AfterViewInit, OnDestroy {
  currentIndex = signal(0);
  private autoPlayInterval: any;

  testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechVision Corp',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      text: 'An exceptional developer who consistently delivers beyond expectations. His ability to architect complex systems while maintaining clean, readable code is remarkable. A true asset to any team.',
      rating: 5,
      company: 'TechVision',
    },
    {
      name: 'Michael Torres',
      role: 'Product Manager, InnovateLab',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      text: 'Working with this developer was a game-changer for our product. He took our vague ideas and transformed them into a polished, high-performing application that our users absolutely love.',
      rating: 5,
      company: 'InnovateLab',
    },
    {
      name: 'Emily Watson',
      role: 'Design Director, DigitalCraft',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
      text: 'The perfect blend of technical excellence and creative thinking. He bridges the gap between design and development like no one else. Every pixel, every interaction — flawlessly implemented.',
      rating: 5,
      company: 'DigitalCraft',
    },
    {
      name: 'David Park',
      role: 'CEO, StartupHub',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
      text: 'He helped us go from zero to MVP in record time. His deep understanding of both frontend and backend technologies allowed us to iterate quickly and ship a product that investors loved.',
      rating: 5,
      company: 'StartupHub',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  next() {
    this.currentIndex.update(i => (i + 1) % this.testimonials.length);
  }

  prev() {
    this.currentIndex.update(i => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  goTo(index: number) {
    this.currentIndex.set(index);
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
