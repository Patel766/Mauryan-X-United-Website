import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerUpdateComponent } from './server-update.component';

describe('ServerUpdateComponent', () => {
  let component: ServerUpdateComponent;
  let fixture: ComponentFixture<ServerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
