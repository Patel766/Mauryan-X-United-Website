import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerHomepageComponent } from './server-homepage.component';

describe('ServerHomepageComponent', () => {
  let component: ServerHomepageComponent;
  let fixture: ComponentFixture<ServerHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
