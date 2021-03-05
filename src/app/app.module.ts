import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './app-modules/counter/couter.module';
import { HeroesModule } from './app-modules/heroes/heroes.module';
import { ShingekiModule } from './app-modules/shingeki/shingeki.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule, CounterModule, ShingekiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
