import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Firebase } from '@ionic-native/firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BeactivePage } from '../pages/beactive/beactive';
import { TagebuchPage } from '../pages/tagebuch/tagebuch';
import { SchmerzenmeldenPage } from '../pages/schmerzenmelden/schmerzenmelden';
import { SensorverbindenPage } from '../pages/sensorverbinden/sensorverbinden';
import { AboutePage } from '../pages/aboute/aboute';
import { AnalysePage } from '../pages/analyse/analyse';
import { ArztbriefexportPage } from '../pages/arztbriefexport/arztbriefexport';
import { ProfilePage } from '../pages/profile/profile';
import { ErinnerungPage } from '../pages/erinnerung/erinnerung';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BeactivePage,
    TagebuchPage,
    SchmerzenmeldenPage,
    SensorverbindenPage,
    AboutePage,
    AnalysePage,
    ArztbriefexportPage,
    ProfilePage,
    ErinnerungPage




  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BeactivePage,
    TagebuchPage,
    SchmerzenmeldenPage,
    SensorverbindenPage,
    AboutePage,
    AnalysePage,
    ArztbriefexportPage,
    ProfilePage,
    ErinnerungPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
