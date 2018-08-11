import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  photos = [
    {
      url: 'https://i.pinimg.com/originals/68/f9/03/68f9034d6e895c79f576981e6dfdee4c.png',
      description: 'Astronaut with flowers in hand.'
    },
    {
      url: 'http://41.media.tumblr.com/6a23a2d1136a495a0794a99138855127/tumblr_nfzurazcSN1txygfho1_500.jpg',
      description: 'Astronaut with flowers in hand drawn by pencil.'
    }
  ];
}
