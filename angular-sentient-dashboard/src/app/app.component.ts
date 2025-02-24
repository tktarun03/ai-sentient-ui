import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Sentient UI Dashboard</h1>
    <div class="dashboard">
      <sentient-widget></sentient-widget>
      <wasm-self-learning></wasm-self-learning>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }