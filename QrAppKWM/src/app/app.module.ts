import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { LoaderService } from './services/loader.service';
import { HorarioService } from './services/horario.service';
import { HorarioPage } from './pages/horario/horario.page';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [
    BarcodeScanner, LoaderService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthGuard, 
    AuthService 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  bootstrap: [AppComponent],
})
export class AppModule {}
