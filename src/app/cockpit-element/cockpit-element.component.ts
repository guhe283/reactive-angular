import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit-element.component.html',
  styleUrls: ['./cockpit-element.component.scss']
})
export class CockpitElementComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output()blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output()myInfoCreated = new EventEmitter<{info: string}>();
  newServerName = '';
  newServerContent = '';
  newInfo = '';
  serverElements = [];
  
 

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }
  myButton() {
    this.myInfoCreated.emit({
      info: this.newInfo
    })
  }

}
