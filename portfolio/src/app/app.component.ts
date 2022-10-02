import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  scrollTo(el: any): void {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
