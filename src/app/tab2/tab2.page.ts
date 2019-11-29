import { Component } from '@angular/core';
import {ServeService} from "../services/serve.service";
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private data : Array <any> ; 
  private main : any ;
  constructor(private serve : ServeService){
    this.data = serve.data ;
    this.main = null ;
  };
  change(b){
    this.main = b;
  }
  private abso = this.serve.abso ; 
  onClick(){
    console.log(this.abso);
  }
}