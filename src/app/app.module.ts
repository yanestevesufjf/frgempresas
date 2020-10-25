import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BottomSheetComponent, BottomSheetModule } from "ionic-custom-bottom-sheet";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CoreService } from './services/core.service';
import { SearchPipe } from './pipes/search.pipe';

import { IonicGestureConfig } from './utils/IonicGestureConfig'

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe
  ],
  entryComponents: [
    BottomSheetComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot({
      mode: "ios"
    }), 
    AppRoutingModule,
    BottomSheetModule,
    CarouselModule,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig},
    CoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
