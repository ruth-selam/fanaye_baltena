import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpiceComponent } from './spice/spice.component';
import { BaltenaComponent } from './baltena/baltena.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,SpiceComponent,BaltenaComponent,CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  
}
