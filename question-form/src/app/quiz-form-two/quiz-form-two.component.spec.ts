import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormTwoComponent } from './quiz-form-two.component';

describe('QuizFormTwoComponent', () => {
  let component: QuizFormTwoComponent;
  let fixture: ComponentFixture<QuizFormTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizFormTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
