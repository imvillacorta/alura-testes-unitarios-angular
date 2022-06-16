import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe('LikeWidgetComponent', () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LikeWidgetModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate id if id is null', () => {
    expect(component.id).toBeTruthy();
  });

  it('should behave...', () => {
    const someId = 'someId';
    component.id = someId;
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.like.name} 
    should trigger emission when called`, () => {
      spyOn(component.liked, 'emit');
      component.like();
      expect(component.liked.emit).toHaveBeenCalled();
  });

});
