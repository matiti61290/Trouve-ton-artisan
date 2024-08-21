import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestArtisanComponent } from './best-artisan.component';

describe('BestArtisanComponent', () => {
  let component: BestArtisanComponent;
  let fixture: ComponentFixture<BestArtisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestArtisanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
