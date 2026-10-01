import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategroyCardComponent } from './categroy-card.component';

describe('CategroyCardComponent', () => {
  let component: CategroyCardComponent;
  let fixture: ComponentFixture<CategroyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategroyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategroyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
