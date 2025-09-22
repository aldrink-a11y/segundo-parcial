import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDemo } from './ui-demo';

describe('UiDemo', () => {
  let component: UiDemo;
  let fixture: ComponentFixture<UiDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export { UiDemo };
