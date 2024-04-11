import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-page-top',
  standalone: true,
  imports: [],
  templateUrl: './page-top.component.html',
  styleUrl: './page-top.component.css'
})
@Injectable({
  providedIn: 'root',
})
export class PageTopComponent {
  @Output() isDarkMode = new EventEmitter<boolean>();
  darkMode = false;
  dark(isDark: boolean) {
    this.isDarkMode.emit(isDark);
    this.darkMode = isDark;
  }
}
