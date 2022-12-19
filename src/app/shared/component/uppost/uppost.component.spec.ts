import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppostComponent } from './uppost.component';

describe('UppostComponent', () => {
  let component: UppostComponent;
  let fixture: ComponentFixture<UppostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UppostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UppostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
