import { Component, HostListener } from '@angular/core';

/** Angular component that displays header for the application */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  sidebarVisible = false;
  isMobileView = false;

  constructor() {
    this.checkViewport();
  }

  // Method to toggle the sidebar visibility
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  // Method to check the viewport size and update the view accordingly
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkViewport();
  }

  private checkViewport() {
    this.isMobileView = window.innerWidth <= 768;
  }
}
