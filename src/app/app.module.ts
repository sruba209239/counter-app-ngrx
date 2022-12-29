import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterControlsComponent } from './counter/counter-controls/counter-controls.component';
import { CounterComponent } from './counter/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { CustomCounterStepInputComponent } from './counter/custom-counter-step-input/custom-counter-step-input.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterControlsComponent,
    CustomCounterStepInputComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PostsListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ counter: counterReducer }),
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
