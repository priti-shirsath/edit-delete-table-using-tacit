import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemserviceComponent } from './additemservice.component';

describe('AdditemserviceComponent', () => {
  let component: AdditemserviceComponent;
  let fixture: ComponentFixture<AdditemserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditemserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditemserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
