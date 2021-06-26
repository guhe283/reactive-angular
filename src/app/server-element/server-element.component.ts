import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit {
  @Input() elemnt: { type: string, name: String, content: String };
  serverElements = [];

  constructor() { }

  ngOnInit(): void {
  }

}
