import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpiceComponent } from './spice/spice.component';
import { BaltenaComponent } from './baltena/baltena.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpiceComponent,BaltenaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
