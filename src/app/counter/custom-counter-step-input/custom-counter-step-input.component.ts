import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customInputAdd, customInputReduce } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-step-input',
  templateUrl: './custom-counter-step-input.component.html',
  styleUrls: ['./custom-counter-step-input.component.css']
})
export class CustomCounterStepInputComponent {
  counterAdd: number = 1;
  counterReduce: number = 1;

  constructor(private store: Store<{ counter: CounterState }>) { }

  onAdd() {
    this.store.dispatch(customInputAdd({ addValue: this.counterAdd }))
  }

  onReduce() {
    this.store.dispatch(customInputReduce({ reduceValue: this.counterReduce }));
  }
}
