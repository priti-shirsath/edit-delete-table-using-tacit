import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdititemserviceComponent } from './edititemservice.component';

describe('EdititemserviceComponent', () => {
  let component: EdititemserviceComponent;
  let fixture: ComponentFixture<EdititemserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdititemserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdititemserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
