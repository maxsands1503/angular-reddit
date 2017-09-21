import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  constructor() {

  }
  voteUp(index: number): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(index: number): boolean {
    this.article.voteDown();
    return false;
  }
}
