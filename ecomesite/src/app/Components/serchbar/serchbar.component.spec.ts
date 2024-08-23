import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchbarComponent } from './serchbar.component';

describe('SerchbarComponent', () => {
  let component: SerchbarComponent;
  let fixture: ComponentFixture<SerchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerchbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
