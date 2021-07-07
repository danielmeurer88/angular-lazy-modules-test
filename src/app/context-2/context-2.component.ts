import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-context-2',
  templateUrl: './context-2.component.html',
  styleUrls: ['./context-2.component.scss']
})
export class Context2Component implements OnInit {

  @HostBinding('class.main-component')
  classVar = true;

  constructor() { }

  ngOnInit(): void {
  }

}
