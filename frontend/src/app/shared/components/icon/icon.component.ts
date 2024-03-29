import { Component, Input } from '@angular/core';

type ICON_NAMES = string;
type ICON_SIZES = number;

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less']
})
export class IconComponent {
  @Input() name: ICON_NAMES = '';
  @Input() size: ICON_SIZES = 1;
}
