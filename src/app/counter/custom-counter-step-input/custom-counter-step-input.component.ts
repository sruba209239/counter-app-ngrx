import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import {
  customInputAdd,
  customInputReduce,
  updateText,
} from '../state/counter.actions';
import { getText } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-step-input',
  templateUrl: './custom-counter-step-input.component.html',
  styleUrls: ['./custom-counter-step-input.component.css'],
})
export class CustomCounterStepInputComponent implements OnInit {
  counterAdd: number = 1;
  counterReduce: number = 1;
  stateText$!: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.stateText$ = this.store.select(getText);
  }

  onAdd() {
    this.store.dispatch(customInputAdd({ addValue: this.counterAdd }));
  }

  onReduce() {
    this.store.dispatch(customInputReduce({ reduceValue: this.counterReduce }));
  }

  updateText(): void {
    this.store.dispatch(updateText({ text: 'updated text' }));
  }
}
