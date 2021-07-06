import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Router } from '@angular/router';
import { AuthStore } from '../services/auth.store';

@Component({
  selector: 'server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
 // var:string;
 var1 ='sadsdgfdfgdasfg';


  constructor() {

  }

  ngOnInit() {
    this.var1 ='11sadxcv xcvxcvxsdgfdfgdasfg11';
    
 


  }


serverElements = [{
    type: 'server', name: 'Testserver1', content: 'Just a test!'
  }];

  onServerAdded(serverData:{serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
      
    });

    
  }

  onBlueprintAdded(blueprintData:{serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  myInfo(data:{info: string}) {
    this.var1=data.info;
  }



}
