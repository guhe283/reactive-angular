import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit-element.component.html',
  styleUrls: ['./cockpit-element.component.scss']
})
export class CockpitElementComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    //this.serverElements.push({
     // type: 'server',
     // name: this.newServerName,
     // content: this.newServerContent
   // });
  }

  onAddBlueprint() {
   // this.serverElements.push({
    //  type: 'blueprint',
    //  name: this.newServerName,
     // content: this.newServerContent
   // });
  }

}
