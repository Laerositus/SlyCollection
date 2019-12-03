import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppStoreModule } from './store/store.module';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [AppComponent, AboutComponent, DashboardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    AppStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
