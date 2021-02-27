import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisbahFooterComponent } from './misbah-footer.component';

describe('MisbahFooterComponent', () => {
  let component: MisbahFooterComponent;
  let fixture: ComponentFixture<MisbahFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisbahFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisbahFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
