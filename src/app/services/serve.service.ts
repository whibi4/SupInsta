import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class ServeService {
  public data : Array <any> ;
  public a : Number ;
  public abso ;
  constructor(private db:AngularFireDatabase  , private afStorage : AngularFireStorage) {
    this.a=15;
    this.data = [
      {
        "userName": "Mouhamed Ouhibi",
        "userAvatar" : "https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-1/p160x160/24900273_1659158044148824_7388551144455537325_n.jpg?_nc_cat=110&_nc_ht=scontent.ftun12-1.fna&oh=6128fb0da6f3aed141031785122cfaad&oe=5CC0B88C",
        "postDate" : "15-16-2019",
        "postUrl" : "https://i.cdn.turner.com/adultswim/big/img/2018/05/07/rick-and-morty.jpg",
        "postText" : "this is a fucking photo about Rick & Morty",
        "postLike" : 5,
  
      },
      {
        "userName": "ahmed saad",
        "userAvatar" : "https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-1/p160x160/24900273_1659158044148824_7388551144455537325_n.jpg?_nc_cat=110&_nc_ht=scontent.ftun12-1.fna&oh=6128fb0da6f3aed141031785122cfaad&oe=5CC0B88C",
        "postDate" : "15-16-2019",
        "postUrl" : "https://i.cdn.turner.com/adultswim/big/img/2018/05/07/rick-and-morty.jpg",
        "postText" : "this is a fucking photo about Rick & Morty",
        "postLike" : 5,
  
      },
      {
        "userName": "ramzi naifer",
        "userAvatar" : "https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-1/p160x160/24900273_1659158044148824_7388551144455537325_n.jpg?_nc_cat=110&_nc_ht=scontent.ftun12-1.fna&oh=6128fb0da6f3aed141031785122cfaad&oe=5CC0B88C",
        "postDate" : "15-16-2019",
        "postUrl" : "https://i.cdn.turner.com/adultswim/big/img/2018/05/07/rick-and-morty.jpg",
        "postText" : "this is a fucking photo about Rick & Morty",
        "postLike" : 5,
  
      },
    ];
   this.getData();
  }
  getData(){
    this.db.list('/0').snapshotChanges().subscribe(
      data => {
        this.abso = data ;
      }
    );
  }
}
