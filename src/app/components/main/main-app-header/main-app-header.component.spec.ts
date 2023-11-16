import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAppHeaderComponent } from './main-app-header.component';

describe('MainAppHeaderComponent', () => {
  let component: MainAppHeaderComponent;
  let fixture: ComponentFixture<MainAppHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MainAppHeaderComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
