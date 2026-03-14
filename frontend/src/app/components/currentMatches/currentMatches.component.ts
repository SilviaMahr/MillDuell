import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

export interface Match {
  id: number;
  opponentName: string;
  isOnline: boolean;
  isMyTurn: boolean;
  iconColor?: string;
}

@Component({
  selector: 'app-current-matches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currentMatches.component.html',
  styleUrl: './currentMatches.component.css',
})
export class CurrentMatchesComponent {
  //Dummydaten
  matches: Match[] = [
    {
      id: 1,
      opponentName: 'MillMaster12',
      isOnline: true,
      isMyTurn: false
    },
    {
      id: 2,
      opponentName: 'MühlFan',
      isOnline: false,
      isMyTurn: false
    },
    {
      id: 3,
      opponentName: 'GewinnerDinner',
      isOnline: false,
      isMyTurn: true
    }
  ];
}
