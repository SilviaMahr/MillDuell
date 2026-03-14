import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-dashboard.component',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  openInfo(): void {
    console.log('Info geklickt; Wie funktioniert MillDuell?');
  }
}
