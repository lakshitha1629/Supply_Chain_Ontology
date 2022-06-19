import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-type',
  templateUrl: './select-type.component.html',
  styleUrls: ['./select-type.component.scss']
})
export class SelectTypeComponent implements OnInit {
  active = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
