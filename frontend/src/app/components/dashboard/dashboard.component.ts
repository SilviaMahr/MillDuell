import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CurrentMatchesComponent} from "../currentMatches/currentMatches.component";

@Component({
  selector: 'app-dashboard.component',
  imports: [CommonModule, CurrentMatchesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  openInfo(): void {
    console.log('Info geklickt; Wie funktioniert MillDuell?');
  }
}
