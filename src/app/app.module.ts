import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyStateComponent } from './shared/components/empty-state/empty-state.component';
import { StatusBadgeComponent } from './shared/components/status-badge/status-badge.component';
import { ScrollToTopDirective } from './shared/directives/scroll-to-top.directive';
import { DisableOnClickDirective } from './shared/directives/disable-on-click.directive';
import { DateFormatterPipe } from './shared/pipes/date-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmptyStateComponent,
    StatusBadgeComponent,
    ScrollToTopDirective,
    DisableOnClickDirective,
    DateFormatterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
