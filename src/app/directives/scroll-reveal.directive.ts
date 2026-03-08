import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  PLATFORM_ID,
  Inject,
  OnDestroy,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealDirection: 'up' | 'down' | 'left' | 'right' | 'fade' = 'up';
  @Input() revealDistance = '60px';

  private observer?: IntersectionObserver;

  constructor(
    private readonly el: ElementRef,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.el.nativeElement as HTMLElement;

    // Set initial styles
    element.style.opacity = '0';
    element.style.transition = `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${this.revealDelay}ms`;

    switch (this.revealDirection) {
      case 'up':
        element.style.transform = `translateY(${this.revealDistance})`;
        break;
      case 'down':
        element.style.transform = `translateY(-${this.revealDistance})`;
        break;
      case 'left':
        element.style.transform = `translateX(${this.revealDistance})`;
        break;
      case 'right':
        element.style.transform = `translateX(-${this.revealDistance})`;
        break;
      case 'fade':
        element.style.transform = 'scale(0.95)';
        break;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) translateX(0) scale(1)';
            this.observer?.unobserve(element);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    this.observer.observe(element);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
