import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCartasComponent } from './test-cartas.component';

describe('TestCartasComponent', () => {
  let component: TestCartasComponent;
  let fixture: ComponentFixture<TestCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCartasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
