import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoryPreviewPage } from './story-preview.page';

describe('StoryPreviewPage', () => {
  let component: StoryPreviewPage;
  let fixture: ComponentFixture<StoryPreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryPreviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoryPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
