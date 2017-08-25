import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild(SidebarComponent)
  private _sidebar: SidebarComponent;

  get sidebar(): SidebarComponent { return this._sidebar; }
}
