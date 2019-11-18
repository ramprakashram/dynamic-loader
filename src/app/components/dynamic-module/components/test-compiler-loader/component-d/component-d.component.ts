import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-d',
  templateUrl: './component-d.component.html',
  styleUrls: ['./component-d.component.scss']
})
export class ComponentDComponent implements OnInit {

  @Input() testInput: string;

  constructor() { }

  ngOnInit() {
  }

}
