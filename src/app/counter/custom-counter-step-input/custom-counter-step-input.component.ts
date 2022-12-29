import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
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
export class CustomCounterStepInputComponent implements OnInit, OnDestroy {
  counterAdd: number = 1;
  counterReduce: number = 1;
  stateText: string = '';
  subscription!: Subscription;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit() {
    this.subscription = this.store.select(getText).subscribe((data) => {
      console.log('text subscription');
      this.stateText = data;
    });
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
