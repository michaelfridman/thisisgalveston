import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

const animateString: string = '500ms ease-in';
const translateString: string = 'translateY(0%)';
const transformString: string = 'translateY(100%)';
const transitionString: string = '* => *';

@Component({
  selector: 'my-popup',
  templateUrl: './popup.component.html',
  animations: [
    trigger('state', [
      state('opened', style({transform: translateString})),
      state('void, closed', style({transform: transformString, opacity: 0})),
      transition(transitionString, animate(animateString)),
    ])
  ],
  styleUrls: ['./popup.component.css']})
export class PopupComponent {
  @HostBinding('@state')
  state: 'opened' | 'closed' = 'closed';

  @Input()
  get message(): string { return this._message; }
  set message(message: string) {
    this._message = message;
    this.state = 'opened';
  }
  private _message = '';

  @Output()
  closed = new EventEmitter();
}
