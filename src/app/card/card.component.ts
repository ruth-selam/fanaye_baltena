import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  baltena = ['berbere', 'shiro', 'beso', 'kolo', 'bula', 'mitmita', 'aja', 'genfo', 'abish', 'shimbra asa', 'kocho', 'chiko', 'ambasha', 'dabokolo']
  spices = ['chilli', 'mustard', 'turmic', 'peper', 'cumin', 'coriander', 'tikur azmud', 'nech azmud']
  products = [this.baltena, this.spices]
  type = ['baltena', 'spices']
  
}
