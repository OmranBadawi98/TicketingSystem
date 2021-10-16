import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CanActivateGuard } from './core/can-activate.guard';
import { AUTH_PROVIDERS } from './core/services/auth.service';
import { ChartsModule } from 'ng2-charts';
import { InterceptorService } from './core/services/interceptor.service';
import { BarchartComponent } from './components/barchart/barchart.component';
@NgModule({
  declarations: [AppComponent, DashboardComponent, BarchartComponent],
  imports: [
    AppRoutingModule,
    NgbModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [
    AUTH_PROVIDERS,
    CanActivateGuard,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
