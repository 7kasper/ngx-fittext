import { Component, OnInit, Inject } from '@angular/core';
import { HighlightLoader } from 'ngx-highlightjs';

@Component({
  selector: 'ngx-installation',
  templateUrl: './ngx-installation.component.html',
  styleUrls: ['./ngx-installation.component.scss']
})
export class NgxInstallationComponent implements OnInit {

  importModule = `
  import { NgxFitTextModule } from '@7kasper/ngx-fittext';
    @NgModule({
    imports: [
    // other modules
    NgxFitTextModule
    ]
  })
  `
  constructor() { }

  ngOnInit(): void {
  }

}
