import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityQuizzesComponent } from './community-quizzes.component';

describe('CommunityQuizzesComponent', () => {
  let component: CommunityQuizzesComponent;
  let fixture: ComponentFixture<CommunityQuizzesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityQuizzesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
