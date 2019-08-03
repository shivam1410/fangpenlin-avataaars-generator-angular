import {Component, Input, OnInit} from '@angular/core';
import {MainServices, Options} from '../services/main.services';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-avtaar',
  templateUrl: './avtaar.component.html',
  styleUrls: ['./avtaar.component.css']
})
export class AvtaarComponent implements OnInit {
  @Input() options: Options;

  constructor(public mainService: MainServices, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getSvg() {
    return this.sanitizer.bypassSecurityTrustHtml(this.mainService.getSvg(this.options));
  }

}
