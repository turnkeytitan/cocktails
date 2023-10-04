import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailAttributeComponent } from './cocktail-attribute/cocktail-attribute.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [CommonModule, CocktailAttributeComponent, CocktailListComponent],
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss'],
})
export class CocktailsComponent {}
