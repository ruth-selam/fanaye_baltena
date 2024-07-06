import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-baltena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './baltena.component.html',
  styleUrl: './baltena.component.css'
})
export class BaltenaComponent {
 phone = ['fb', 'ig', 'phone', 'tg']
 user = ['fanaye_baltena', 'fanaye_baltena', '+251911489710', 'fanaye_baltena']
}
