import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  url;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.recognizeRoute()
  }

  recognizeRoute() {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      console.log('subscribe');
      console.log(event.url) ///tabs/tab1 , /tabs/tab2, /tabs/tab3
      this.url = event.url;
      //html router.url.includes('checkout') 
    })
  }

  
}
