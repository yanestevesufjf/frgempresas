import { Component, OnInit } from '@angular/core';
import { CoreService } from '../services/core.service';

@Component({
  selector: 'app-story-preview',
  templateUrl: './story-preview.page.html',
  styleUrls: ['./story-preview.page.scss'],
})
export class StoryPreviewPage implements OnInit {

  data;

  constructor(public core: CoreService) { }

  ngOnInit() {
    console.log('livePreview::ngOnInit::data');
    console.log(this.data)
  }

}
