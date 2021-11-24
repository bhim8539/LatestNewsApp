import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  data: any;
  title: any;
  link: any;
  dataArr: any;

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.http.get('assets/data.json')
    .subscribe((response) => {
      this.data = response;
      this.dataArr=this.data['result'].slice(0,5);
      console.log(this.dataArr)
    })
  }

}
