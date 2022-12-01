import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PujaSubastaComponent } from './puja-subasta.component';

describe('PujaSubastaComponent', () => {
  let component: PujaSubastaComponent;
  let fixture: ComponentFixture<PujaSubastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PujaSubastaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PujaSubastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
