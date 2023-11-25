import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeformComponent } from './reativeform.component';

describe('ReativeformComponent', () => {
  let component: ReativeformComponent;
  let fixture: ComponentFixture<ReativeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReativeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
