import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AllItemsComponent} from './components/all-items/all-items.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AllItemsComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OttoGennaioFront';
}
