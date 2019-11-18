import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.scss']
})
export class ComponentCComponent implements OnInit {

  @Input() testInput: string;


  constructor() { }

  ngOnInit() {
  }

}
