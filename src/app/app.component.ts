import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageTopComponent } from './page-top/page-top.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageTopComponent, ContentPageComponent, FooterPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landingPage';
  darkStatus = false;

  getDarkMode(darkMode: boolean) {
    this.darkStatus = darkMode;
  }
  
}
