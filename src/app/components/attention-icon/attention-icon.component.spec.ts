import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionIconComponent } from './attention-icon.component';

describe('AttentionIconComponent', () => {
  let component: AttentionIconComponent;
  let fixture: ComponentFixture<AttentionIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttentionIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttentionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
