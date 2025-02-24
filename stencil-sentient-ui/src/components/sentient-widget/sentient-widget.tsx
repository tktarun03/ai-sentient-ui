import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'sentient-widget',
  styleUrl: 'sentient-widget.css',
  shadow: true
})
export class SentientWidget {
  @State() mood: string = "Neutral 😐";

  adjustMood() {
    const moods = ["Happy 😀", "Curious 🤔", "Excited 🚀", "Focused 🔥", "Calm 🧘"];
    this.mood = moods[Math.floor(Math.random() * moods.length)];
  }

  render() {
    return (
      <div class="sentient-box">
        <h2>AI Sentient UI</h2>
        <button onClick={() => this.adjustMood()}>Adjust Mood</button>
        <p>Current State: {this.mood}</p>
      </div>
    );
  }
}
