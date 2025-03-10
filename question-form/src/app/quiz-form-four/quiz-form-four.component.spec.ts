import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormFourComponent } from './quiz-form-four.component';

describe('QuizFormFourComponent', () => {
  let component: QuizFormFourComponent;
  let fixture: ComponentFixture<QuizFormFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizFormFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizFormFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
