import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavLinkComponent } from './topnav-link.component';

describe('TopnavLinkComponent', () => {
  let component: TopnavLinkComponent;
  let fixture: ComponentFixture<TopnavLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopnavLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
