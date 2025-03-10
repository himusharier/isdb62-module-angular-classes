import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormThreeComponent } from './quiz-form-three.component';

describe('QuizFormThreeComponent', () => {
  let component: QuizFormThreeComponent;
  let fixture: ComponentFixture<QuizFormThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizFormThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizFormThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
