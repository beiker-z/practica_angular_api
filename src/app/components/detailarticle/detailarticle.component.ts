import { article } from './../../class/articles';
import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/serv/articles.service';

@Component({
  selector: 'app-detailarticle',
  templateUrl: './detailarticle.component.html',
  styleUrls: ['./detailarticle.component.css']
})
export class DetailarticleComponent implements OnInit {

  articled: article = new article();
  constructor(private articleinyected: ArticlesService) {
    this.articled = this.articleinyected.article;
  }

  ngOnInit(): void {

  }

}
