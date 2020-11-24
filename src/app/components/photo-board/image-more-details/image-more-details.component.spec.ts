import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMoreDetailsComponent } from './image-more-details.component';

describe('ImageMoreDetailsComponent', () => {
  let component: ImageMoreDetailsComponent;
  let fixture: ComponentFixture<ImageMoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageMoreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
