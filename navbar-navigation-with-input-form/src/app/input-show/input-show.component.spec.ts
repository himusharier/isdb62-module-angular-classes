import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputShowComponent } from './input-show.component';

describe('InputShowComponent', () => {
  let component: InputShowComponent;
  let fixture: ComponentFixture<InputShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
