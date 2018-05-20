import { Component } from '@angular/core';
import './app.component.css';

@Component ({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  emoji = ['🎉', '😍', '😜', '👍'];
  activeEmoji: string;
  changeEmoji() {
    this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)]
  }
}
