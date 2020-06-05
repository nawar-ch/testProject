import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratifListComponent } from './administratif-list.component';

describe('AdministratifListComponent', () => {
  let component: AdministratifListComponent;
  let fixture: ComponentFixture<AdministratifListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratifListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratifListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
