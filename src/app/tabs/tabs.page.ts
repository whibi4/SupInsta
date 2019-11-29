import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  a = 15 ;
  data : Array <any> = [];
  change() {
    this.a = 0 ;
  };
  constructor(){
  }

}
