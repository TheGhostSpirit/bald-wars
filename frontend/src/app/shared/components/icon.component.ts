import { Component, Input } from '@angular/core';

type ICON_NAMES = 'sword' | 'leaderboard' | 'repository' | 'edit' | 'delete' | 'plus' | '';
type ICON_SIZES = 1 | 2 | 3;

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less']
})
export class IconComponent {
  @Input() name: ICON_NAMES = '';
  @Input() size: ICON_SIZES = 1;
}
