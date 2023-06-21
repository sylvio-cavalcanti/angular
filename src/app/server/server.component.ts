import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    p {
      color: blue;
    }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  // Note: The constructor is a built-in method that is called when the component is created
  constructor() {
    // Generates a random number between 0 and 1 so we have diferente status for demonstration purposes
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus () {
    return this.serverStatus
  }

  getColor () {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
