import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  template: `
  <nav class="menu">
    <p class="menu-label">Menu</p>
    <ul class="menu-list">
      <a routerLink="/characters" routerLinkActive="router-link-active">
        <span>Characters</span>
      </a>
      <a routerLink="/games" routerLinkActive="router-link-active">
        <span>Games</span>
      </a>
      <a routerLink="/voiceActors" routerLinkActive="router-link-active">
        <span>Voice Actors</span>
      </a>
      <a routerLink="/weapons" routerLinkActive="router-link-active">
        <span>Weapons</span>
      </a>
      <a routerLink="/about" routerLinkActive="router-link-active">
        <span>About</span>
      </a>
    </ul>
  </nav>
  `
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
