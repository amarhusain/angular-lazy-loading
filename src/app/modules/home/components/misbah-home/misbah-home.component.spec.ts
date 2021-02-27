import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisbahHomeComponent } from './misbah-home.component';

describe('MisbahHomeComponent', () => {
  let component: MisbahHomeComponent;
  let fixture: ComponentFixture<MisbahHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisbahHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisbahHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
