import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoryPreviewPage } from './story-preview.page';

const routes: Routes = [
  {
    path: '',
    component: StoryPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryPreviewPageRoutingModule {}
