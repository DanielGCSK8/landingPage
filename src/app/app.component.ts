import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageTopComponent } from './page-top/page-top.component';
import { ContentPageComponent } from './content-page/content-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageTopComponent, ContentPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landingPage';
}
