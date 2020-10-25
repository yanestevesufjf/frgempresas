import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoryPreviewPageRoutingModule } from './story-preview-routing.module';

import { StoryPreviewPage } from './story-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoryPreviewPageRoutingModule
  ],
  declarations: [StoryPreviewPage]
})
export class StoryPreviewPageModule {}
