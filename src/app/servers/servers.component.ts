import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created...';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
      console.log('allowNewServer: True');
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created.';
  }

  onUpdateServerName(event: any) {
    // console.log('Event: ', event.target.value);
    this.serverName = event.target.value;
  }
}
