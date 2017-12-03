import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KolumnaComponent } from './kolumna.component';

describe('KolumnaComponent', () => {
  let component: KolumnaComponent;
  let fixture: ComponentFixture<KolumnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KolumnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KolumnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
