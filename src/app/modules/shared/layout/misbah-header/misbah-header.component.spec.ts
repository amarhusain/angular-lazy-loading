import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisbahHeaderComponent } from './misbah-header.component';

describe('MisbahHeaderComponent', () => {
  let component: MisbahHeaderComponent;
  let fixture: ComponentFixture<MisbahHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisbahHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisbahHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
