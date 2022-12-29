import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getCount } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter: number = 0;
  subscription!: Subscription;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.subscription = this.store.select(getCount).subscribe((data) => {
      console.log('counter subscription');
      this.counter = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
