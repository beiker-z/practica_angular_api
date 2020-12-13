import { article } from './../class/articles';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  article: article = new article();

  constructor() {


  }
}
