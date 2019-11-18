import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {

  @Input() testInput: string;

  constructor() { }

  ngOnInit() {
  }

}
