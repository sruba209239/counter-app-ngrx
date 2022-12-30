import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterControlsComponent } from './counter/counter-controls/counter-controls.component';
import { CounterComponent } from './counter/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { CustomCounterStepInputComponent } from './counter/custom-counter-step-input/custom-counter-step-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './state/app.state';
import { AddPostComponent } from './posts/add-post/add-post.component';

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
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(appReducer),
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
