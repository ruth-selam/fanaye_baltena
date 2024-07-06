import { Component } from '@angular/core';
import { BaltenaComponent } from '../baltena/baltena.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spice.component.html',
  styleUrl: './spice.component.css'
})
export class SpiceComponent {
  title = 'my-app';
  motto = 'ምርጥ ጣእም ከእናት ጓዳ';
}
