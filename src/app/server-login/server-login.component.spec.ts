import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerLoginComponent } from './server-login.component';

describe('ServerLoginComponent', () => {
  let component: ServerLoginComponent;
  let fixture: ComponentFixture<ServerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
