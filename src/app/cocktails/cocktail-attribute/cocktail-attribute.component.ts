import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-attribute',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-attribute.component.html',
  styleUrls: ['./cocktail-attribute.component.scss']
})
export class CocktailAttributeComponent {
@Input() imageSrc = ''
@Input() title = ''
}
