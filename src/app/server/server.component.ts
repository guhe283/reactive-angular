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


  constructor() {

  }

  ngOnInit() {


  }

  serverElements = [{
    type: 'server', name: 'Testserver', content: 'Just a test!'
  }];


}
