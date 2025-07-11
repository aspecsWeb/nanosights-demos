import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'nano-analytics';
import 'nano-insights';
import { track } from 'nano-custom';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-demo';

  // Expose track function as method on component.
  track(eventName: string, eventData?: Record<string, string>) {
    track(eventName, eventData);
  }
}
