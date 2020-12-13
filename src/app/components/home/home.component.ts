import { ArticlesService } from './../../serv/articles.service';
import { article } from './../../class/articles';
import { UsersService } from './../../serv/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  aticles: Array<article> = new Array<article>();
  constructor(private userinyected: UsersService, private articleinyected: ArticlesService, private url: Router) { }

  ngOnInit(): void {

    this.aticles.push({
      title: 'Alicia en el país de la maravillas',
      description: 'una niña que esta en un bosque',
      date: new Date(),
      user: `nombre del usuario: ${this.userinyected.usr.name} apellido del usuario: ${this.userinyected.usr.lastname}`
    },
      {
        title: 'the son of the mask.',
        description: 'una niña que esta en un bosque',
        date: new Date(),
        user: `nombre del usuario: ${this.userinyected.usr.name} apellido del usuario: ${this.userinyected.usr.lastname}`
      },
      {
        title: 'TOM SOYER adventures',
        description: 'una niña que esta en un bosque',
        date: new Date(),
        user: `nombre del usuario: ${this.userinyected.usr.name} apellido del usuario: ${this.userinyected.usr.lastname}`
      });
  }
  sendarticle(artic: article) {

    this.url.navigateByUrl('/detail-article');
    this.articleinyected.article = artic;

  }
}
