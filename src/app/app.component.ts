import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article ${title.value} with the following link ${link.value}`);
    return false;
  }
}
