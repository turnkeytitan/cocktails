import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailAttributeComponent } from './cocktail-attribute.component';

describe('CocktailAttributeComponent', () => {
  let component: CocktailAttributeComponent;
  let fixture: ComponentFixture<CocktailAttributeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CocktailAttributeComponent],
    });
    fixture = TestBed.createComponent(CocktailAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
