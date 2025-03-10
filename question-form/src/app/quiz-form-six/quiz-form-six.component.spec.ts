import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormSixComponent } from './quiz-form-six.component';

describe('QuizFormSixComponent', () => {
  let component: QuizFormSixComponent;
  let fixture: ComponentFixture<QuizFormSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizFormSixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizFormSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
