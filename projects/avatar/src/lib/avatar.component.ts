import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {AvatarHelper} from './parts/avatar';
import {AvatarOptions} from './avatar.enum';

@Component({
  selector: 'avatar',
  template: `
    <div id="svgid" [innerHtml]="getSvg()"></div>
  `,
  styles: []
})
export class AvatarComponent implements OnInit {
  @Input() options: AvatarOptions;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getSvg() {
    return this.sanitizer.bypassSecurityTrustHtml(AvatarHelper.getSvg(this.options));
  }
}
