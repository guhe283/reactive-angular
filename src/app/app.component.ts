import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading/loading.service';
import { MessagesService } from './messages/messages.service';
import { AuthStore } from './services/auth.store';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public auth: AuthStore) {

  }

  ngOnInit() {


  }

  logout() {
    this.auth.logout();

  }

  serverElements = [{
    type: 'server', name:'Testserver',content:'Just a test!'}];
  newServerName = '';
    newServerContent = '';

    onAddServer() {
      this.serverElements.push({
        type: 'server',
        name: this.newServerName,
        content: this.newServerContent
      });
    }

  onAddBlueprint() {
      this.serverElements.push({
        type: 'blueprint',
        name: this.newServerName,
        content: this.newServerContent
      });
    }
  }

