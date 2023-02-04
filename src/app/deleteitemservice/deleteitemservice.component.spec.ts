import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteitemserviceComponent } from './deleteitemservice.component';

describe('DeleteitemserviceComponent', () => {
  let component: DeleteitemserviceComponent;
  let fixture: ComponentFixture<DeleteitemserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteitemserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteitemserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
