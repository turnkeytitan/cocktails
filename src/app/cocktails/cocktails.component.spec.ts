import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsComponent } from './cocktails.component';

describe('CocktailsComponent', () => {
  let component: CocktailsComponent;
  let fixture: ComponentFixture<CocktailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CocktailsComponent],
    });
    fixture = TestBed.createComponent(CocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
