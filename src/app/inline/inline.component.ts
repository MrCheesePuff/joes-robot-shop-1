import { Component } from '@angular/core';

@Component({
  selector: 'bot-inline',
  template: `
  <p class="console"> 
    <br/>
    Testing inline HTML for components 
    <br/>
    <br/>
  </p>`,
  styles: [`
  .console {
    font-weight: bolder;
    color: darkgreen;
    background-color: black;
  }
  `]
})
export class InlineComponent {

}
