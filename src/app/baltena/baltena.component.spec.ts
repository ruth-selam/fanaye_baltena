import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaltenaComponent } from './baltena.component';

describe('BaltenaComponent', () => {
  let component: BaltenaComponent;
  let fixture: ComponentFixture<BaltenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaltenaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaltenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
