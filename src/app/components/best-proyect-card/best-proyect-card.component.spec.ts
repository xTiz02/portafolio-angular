import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestProyectCardComponent } from './best-proyect-card.component';

describe('BestProyectCardComponent', () => {
  let component: BestProyectCardComponent;
  let fixture: ComponentFixture<BestProyectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestProyectCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestProyectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
