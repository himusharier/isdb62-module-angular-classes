import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormFiveComponent } from './quiz-form-five.component';

describe('QuizFormFiveComponent', () => {
  let component: QuizFormFiveComponent;
  let fixture: ComponentFixture<QuizFormFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizFormFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizFormFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
