import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArtisanComponent } from './single-artisan.component';

describe('SingleArtisanComponent', () => {
  let component: SingleArtisanComponent;
  let fixture: ComponentFixture<SingleArtisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleArtisanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
